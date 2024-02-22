from openai import OpenAI


def weak_area(OPENAI_KEY, wrong_question_answer):
    client = OpenAI(api_key=OPENAI_KEY)
    questions = '\n'.join(wrong_question_answer[0])

    messages = [{
        "role": "system",
        "content": """You are a Professor who is correcting his/her students
        answers and you have just received the list of wrong answers"""
    }]

    messages.append({"role": "user",
                     "content": f''' questions whose answers
                     were wrong are { questions } list out all the weak areas 
                     that the student should focus more on'''})

    chat = client.chat.completions.create(model='gpt-4', message=messages)
    reply = chat.choices[0].message.content

    return reply
