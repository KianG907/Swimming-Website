from flask import Flask, jsonify, render_template_string
from flask_cors import CORS
import pandas as pd
from progression import create_dataframe

app = Flask(__name__)
CORS(app)

if __name__ == "__main__":
    app.run(debug=True, host = "localhost", port = 5000)

