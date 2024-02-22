from openai import OpenAI


def get_response(OPENAI_KEY: str, question: str):

    print("Running function with query: ", question)

    client = OpenAI(api_key=OPENAI_KEY)

    messages = [{"role": "system", "content": "You are a professor solving\
                 doubts for students"}]

    messages.append({"role": "user", "content": f"the question asked was\
                     {question}"})

    completion = client.chat.completions.create(
        model="gpt-4", messages=messages
    )
    response = completion.choices[0].message.content

    return response
