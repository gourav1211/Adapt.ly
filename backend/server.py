from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
from ai_tutor.tutor import get_response
from dotenv import load_dotenv
import os
import json

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
    if request.method == 'POST':
        question = request.json['question']
        # app.logger.debug(question)

        reply = get_response(openai_key, question)

        return jsonify({'response': reply})


@app.route("/list_courses", methods=['POST'])
def list_courses():
    if request.method == 'POST':
        studentId = request.json['studentId']

        courses = [{"course_code": "ai", "faculty": "sujatha v", "course_name":
                    "Artificial Intelligence", "course_info": "The course
                    accounts for 4 credits and serves as a foundation for future
                    career in AI / ML", "summary": "Covers basic ANN, CNNS, RNNS, VAE, Transformers and Random Forest"}]
        return json.dumps(courses)


@app.route("/course_page_info", methods=['POST'])
def course_page_info():
    if request.method == 'POST':
        course_code = request.json['course_code']

        course_info = [{"week_index": 1, 'files': ['ai_1.pdf', 'ai_2.pdf']},
                       {"week_index": 2, 'files': ['ai_1.pdf', 'ai_2.pdf']},
                       {"week_index": 3, 'files': ['ai_1.pdf', 'ai_2.pdf']},
                       {"week_index": 4, 'files': ['ai_1.pdf', 'ai_2.pdf']},
                       ]

        return json.dumps(course_info)


@app.route('/course_week_info', methods=['POST'])
def course_week_info():
    if request.method == 'POST':
        course_code = request.json['course_code']
        week_num = request.json['week_num']

        return json.dumps({'week_index': 1, 'files': ['ai_1.pdf', 'ai_2.pdf']}})

@ app.route('/weak_topics', methods=['POST'])
def get_weak_topics():
    pass

if __name__ == '__main__':
    app.run(debug=True)
