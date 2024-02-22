import json
from openai import OpenAI


def generate_flashcard(context_text: str, OPENAI_KEY: str, tries=0):
    openai.api_key = OPENAI_KEY
    client = OpenAI(api_key=OPENAI_KEY)

    if tries > 5:
        raise Exception("Could not generate flashcards")

    messages = [{"role": "system", "content":
                 """You are top tier machine learning algortihm designed for making
                  flashcards for quick and thorough revision. The format of the
                  flashcards consists of a question and an answer in json format."""}]

    context_txt = context_text
    messages.append({"role": "user", "content": f"""The given context text is :
                     {context_txt} and now generate all possible flashcards for
                     the given text"""})

    chat = client.chat.completions.create(
        model="gpt-4", messages=messages
    )

    reply = chat.choices[0].message.content
    try:
        ans = json.loads(reply)
        return ans
    except Exception as e:
        tries += 1
        return generate_flashcard(context_text, OPENAI_KEY, tries)
