from flask import Flask, render_template
import os

flask = Flask(__name__, static_folder='./build', static_url_path='/')

@flask.route('/')
def index():
    return flask.send_static_file('index.html')

@flask.route('/checkIn-hardware/<projectId>/<qty>', methods=["GET"])
def checkIn_hardware(projectId, qty):
    data = {
        "value": qty + " hardware checked in"
    }
    return data

@flask.route('/checkOut-hardware/<projectid>/<qty>', methods=["GET"])
def checkOut_hardware(projectid, qty):
    data = {
        "value": qty + " hardware checked out"
    }
    return data

@flask.route('/joinProject/<projectid>', methods=["GET"])
def joinProject(projectid):
    data = {
        "value": "Joined " + projectid
    }
    return data

@flask.route('/leaveProject/<projectid>', methods=["GET"])
def leaveProject(projectid):
    data = {
        "value": "Left " + projectid
    }
    return data

@flask.errorhandler(404)
def not_found(e):
    return flask.send_static_file('index.html')

if __name__ == "__main__":
    flask.run(host='0.0.0.0', debug=False, port=os.environ.get('PORT', 80))