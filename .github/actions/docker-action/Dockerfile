FROM python:3

COPY requirements.txt /requirements

RUN pip install -r requirements.txt

COPY deployment.py /deployment.py

CMD ["python", "/deployment.py"]