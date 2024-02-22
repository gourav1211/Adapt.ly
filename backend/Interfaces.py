from pydantic import List


class Course:
    name: str
    faculty: str
    course_code: str


class Student:
    name: str
    reg_no: str
    course_registered = None  # List of Courses Registered


class Quiz:
    length: int
    questions = None  # list of strings of questions
    answers = None  # list of answers of the questions


class FlashCards:
    questions = None  # list of questions
    answers = None  # list of answers


class Student_Answer_Quiz:
    length: int
    quiz: Quiz
    student_answers = None  # list of student answers which will be compared to
    # the quiz answers
