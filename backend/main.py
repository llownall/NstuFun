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


app.run(port=5009)
