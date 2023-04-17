from flask import Flask
from flask_cors import CORS
import storage

app = Flask(__name__)
CORS(app)


@app.route("/")
def hello_world():
    return storage.get_counter()


@app.route("/increase")
def increase():
    storage.increase_counter()
    return ''


app.run(host='0.0.0.0', port=443, ssl_context='adhoc')
