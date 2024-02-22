import pytesseract
import numpy as np
import cv2
from pdf2image import convert_from_path
from openai import OpenAI

# Replace 'input_file.pdf' with the path to your PDF file


def deskew(image):
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    gray = cv2.bitwise_not(gray)
    coords = np.column_stack(np.where(gray > 0))
    angle = cv2.minAreaRect(coords)[-1]

    if angle < -45:
        angle = -(90 + angle)
    else:
        angle = -angle

    (h, w) = image.shape[:2]
    center = (w // 2, h // 2)
    M = cv2.getRotationMatrix2D(center, angle, 1.0)
    rotated = cv2.warpAffine(
        image, M, (w, h), flags=cv2.INTER_CUBIC, borderMode=cv2.BORDER_REPLICATE)

    return rotated


def extract_text_from_image(image):
    text = pytesseract.image_to_string(image)
    return text


def get_all_text_pdf(pdf_path):

    pdf_file = pdf_path
    pages = convert_from_path(pdf_file)

    # Create a list to store extracted text from all pages
    extracted_text = []

    for page in pages:
        # Step 2: Preprocess the image (deskew)
        preprocessed_image = deskew(np.array(page))

        # Step 3: Extract text using OCR
        text = extract_text_from_image(preprocessed_image)
        extracted_text.append(text)

    extracted_text = [''.join(i.split("\n\n")[1:]) for i in extracted_text]
    return ''.join(extracted_text)


def create_short_notes(pdf_file_path, OPENAI_KEY):
    client = OpenAI(api_key) = OPENAI_KEY)

    all_text=get_all_text_pdf(pdf_file_path)

    messages=[{"role": "system", "content": """You are tasked to create short
                 concise notes from the given content and ensure the whole
                 topics are convered"""}]

    messages.append({'role': 'user', "content": f"""The provided text is
    {all_text}"""})

    chat=client.chat.completions.create(model = 'gpt-4', message = messages)

    reply=chat.choices[0].message.content

    return reply
