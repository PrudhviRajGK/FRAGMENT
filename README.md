# Fragment Video Generator

Fragment Video Generator is an AI-powered backend pipeline that converts a text topic into a fully assembled educational MP4 video.

The system automates script writing, image generation, voice narration, subtitle timing, and final video assembly without manual editing. It is designed as a modular and scalable AI-driven production workflow.

---

## Overview

**Input**

* Topic
* Duration (seconds)
* Optional key points

**Output**

* Fully rendered MP4 video
* AI narration
* Scene-based AI images
* Timed subtitles

Generation runs asynchronously and typically completes in 5–10 minutes.

---

## Architecture

The system follows a structured pipeline:

1. GPT-4 generates scene-wise narration and image prompts
2. DALL·E 3 creates one image per scene
3. Kokoro TTS generates local voice narration
4. Subtitles are timed using actual audio duration
5. MoviePy assembles the final MP4 with intro and outro

Backend is built with FastAPI using a service-oriented modular structure.

---

## Key Features

* Fully automated video generation
* Scene-based AI scripting
* AI image generation (1024×1024)
* Local TTS voice synthesis
* Automatic subtitle synchronization
* Cinematic zoom and pan effects
* Background processing (non-blocking)
* Clean temporary file management

---

## Tech Stack

Backend:

* Python 3.10+
* FastAPI
* Uvicorn

AI Services:

* GPT-4
* DALL·E 3
* Kokoro TTS

Processing:

* MoviePy
* pysrt
* Pydantic
* python-dotenv

Frontend:

* HTML
* Vanilla JavaScript

---

## Installation

### Clone Repository

```bash
git clone https://github.com/your-username/fragment-video-generator.git
cd fragment-video-generator
```

### Setup Environment

```bash
python -m venv venv
```

Activate:

Windows:

```bash
venv\Scripts\activate
```

Mac/Linux:

```bash
source venv/bin/activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

---

### Configure Environment

Copy example file:

```bash
cp .env.example .env
```

Add your OpenAI key:

```env
OPENAI_API_KEY=your_api_key_here
```

---

### Run Server

```bash
python -m uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload
```

Open:

```
http://localhost:8000
```

---

## API Endpoints

POST `/api/v1/videos/generate` – Start video generation
GET `/api/v1/videos/list` – Retrieve completed videos
GET `/health` – Server status
GET `/docs` – API documentation

---

## Recommended Limits

* Ideal video length: 30–90 seconds
* Maximum recommended: 120 seconds
* Only one video generation at a time

---

## Contributors

* Bhavya Suman
* Anushka Sharma
* G K Prudhvi Raj
* Manavi Bangani
* Rayan Qamar
  
