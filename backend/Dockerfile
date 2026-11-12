FROM python:3.12-slim

WORKDIR /app

# Install compilation prerequisites if needed
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

COPY pyproject.toml README.md ./
COPY app ./app

RUN pip install --no-cache-dir .

ENV HOST=0.0.0.0
ENV PORT=8000
ENV CURRENT_SECURITY_PROFILE=STANDARD

EXPOSE 8000

CMD ["python", "-m", "uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
