# -*- coding: utf-8 -*-
"""
Created on Mon Dec  3 22:24:23 2018

@author: Shubha.KS
"""
#import os
import traceback
import upgrade_firmware
import configuration_convertor
import remote_execution
import report
import report_uf
import report_admin_uf
import admin_uf
from flask import Flask
from flask import request, send_from_directory
from flask import jsonify
from flask_cors import CORS #cross origin request (chrome will block when we call post from one website to another host )
import uuid

#this import is for uploading files
#from flask_uploads import UploadSet,configure_uploads

app=Flask(__name__)
CORS(app)




#call at least once so that it will read from database.
'''enable this later'''
#configuration_convertor.refresh_conversion_map()
#this is called decorator
@app.route('/api/convert', methods=['POST'])
def handle_convert():
  request_json = request.get_json()
  output_configuration, residual_text, errors_text=configuration_convertor.convert(request_json["source"],request_json["target"],request_json["inputConfiguration"],)
  result={"outputConfiguration":output_configuration,
          "residualText":residual_text,
          "errorsText":errors_text}
  return jsonify(result)

@app.route('/api/refresh-conversion-map')  #defAULT HTTP METHOD IS GET
def handle_conversion_map():
  configuration_convertor.refresh_conversion_map()

@app.route('/output/<path:path>')
def send_output(path):
    return send_from_directory('output', path)

@app.route('/api/remote-execution', methods=['POST'])
def handle_remote_execution():
  
  request_json = request.get_json()
  out=remote_execution.remote_execution(request_json)
  return jsonify(out)


@app.route('/api/upgrade-firmware', methods=['POST'])
def handle_upgrader_firmware():

  request_json = request.get_json()
  out=upgrade_firmware.upgrade_firmware(request_json)
  #print(out)
  return jsonify(out)


@app.route('/api/report', methods=['GET'])
def handle_report():
  out_report=report.report()
  return jsonify(out_report)

@app.route('/api/report_uf', methods=['GET'])
def handle_report_uf():
  out_report=report_uf.report()
  return jsonify(out_report)


@app.route('/api/report_admin_uf', methods=['GET'])
def handle_report_admin_uf():
  out_report=report_admin_uf.report()
  return jsonify(out_report)


@app.route('/api/user',methods=['GET'])
def handle_get_user():
    try:
        username=request.environ['REMOTE_USER'].split('\\')[1]
        result={"username":username}
    except:
        result={"error":traceback.format_exc()}
    return jsonify(result)

@app.route('/<path:path>')
def send_frontend_files(path):
    return send_from_directory('dist/netauto', path)

@app.route('/')
def send_index():
    return send_from_directory('dist/netauto', 'index.html')


@app.route('/api/admin-uf-version-mapping', methods=['POST'])
def handle_admin_uf_version_mapping():

  request_json = request.get_json()
  out=admin_uf.fun_admin_uf(request_json)
  return jsonify(out)





#start for upload code
#firmwares=UploadSet('firmware',('bin',))
#app.config['UPLOADED_FIRMWARE_DEST']='uploads/firmwares'
#configure_uploads(app,firmwares)


@app.route('/upload',methods=['POST'])
def upload():
    if request.method=='POST' and 'firmware' in request.files:
        uploadfile=request.files['firmware']
        uploadfile.filename = uuid.uuid4().hex +'__'+uploadfile.filename
        print(dir(uploadfile))
        filename= firmwares.save(request.files['firmware'])
        return jsonify({"uniqueFileId":filename})
#end for upload code

if __name__ == '__main__':
  app.run(debug=True)
