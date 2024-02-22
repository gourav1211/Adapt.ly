from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
from ai_tutor.tutor import get_response
from dotenv import load_dotenv
import os

app = Flask(__name__)

CORS(app)

load_dotenv()

openai_key = os.environ['OPENAI_KEY']


@app.route('/', methods=['POST', 'GET'])
def index():
    if request.method == 'POST':
        data = request.json

        return jsonify({'message': 'POST request receiveed', 'data': data}), 200
    else:
        return jsonify({'message': 'GET request received'}), 200


@app.route('/pdf/<path:filename>', methods=['GET', 'POST'])
def send_pdf(filename):
    path = os.path.join(os.getcwd(), app.config['UPLOAD_FOLDER'])
    return send_from_directory(directory=path, path=filename)


@app.route("/ai_tutor", methods=['POST'])
def ai_tutor_reply():
    question = request.form.get('question')

    reply = get_response(openai_key, question)

    return jsonify({'response': 'reply'})


if __name__ == '__main__':
    app.run(debug=True)
