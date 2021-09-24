FROM python:3

# Define Environment Variables
ENV PYTHONUNBUFFERED=1

# Define working directory
WORKDIR /code

# Install Deps
COPY requirements.txt /code/
RUN pip install -r requirements.txt

# Copy Code
COPY . /code/