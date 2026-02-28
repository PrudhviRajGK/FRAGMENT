# Fragment Video Generator

## Objective

The objective of the Fragment Video Generator is to automate the creation of educational videos using Artificial Intelligence.  

The system transforms a simple text topic into a complete MP4 video that includes:
- AI-generated narration
- AI-generated images
- Voiceover audio
- Subtitles
- Intro and outro cards

The goal is to save time and eliminate the need for manual scripting, illustration, voice recording, and video editing.

---

## Project Overview

Fragment Video Generator is an AI-powered video automation tool.

When a user enters:
- A topic (e.g., "Solar System")
- A duration in seconds
- Optional key points

The system automatically:

1. Generates a structured script using GPT-4
2. Creates scene-wise AI images using DALL-E 3
3. Produces voice narration using Kokoro TTS
4. Generates subtitles (.srt)
5. Assembles everything into a final MP4 video using MoviePy

The entire process runs in the background and typically takes 5–10 minutes.

Input:
- Topic
- Duration
- Key points (optional)

Output:
- A fully edited MP4 educational video with narration and subtitles

---

## Project Scope

The project is designed for:

- Educational content creation
- Quick explainer videos
- Automated content generation
- Internal team productivity enhancement

Recommended video length:
- Best: 30–90 seconds
- Maximum recommended: 120 seconds

Current limitations:
- Only one video can be generated at a time
- Requires OpenAI API key
- Generation cost depends on number of scenes (image API calls)

The system can be extended in the future to:
- Support multiple concurrent generations
- Add user authentication
- Deploy as a cloud-based SaaS platform
- Support multiple voice styles

---

## Key Features

- Fully automated video generation
- AI script writing (scene-by-scene structure)
- AI image generation (one per scene)
- Local voice generation (no per-audio API cost)
- Automatic subtitle generation with perfect timing
- Intro and outro video cards
- Background processing (browser does not freeze)
- Clean file management system
- Simple web interface (no complex frontend frameworks)

---

## Sora-Style Comparison

Fragment Video Generator is inspired by the idea of AI-powered video creation similar to systems like OpenAI's Sora.

However, there are key differences:

### Similarities
- Text-to-video concept
- AI-driven scene generation
- Automated visual storytelling

### Differences

Fragment Video Generator:
- Uses static AI images per scene
- Adds zoom/pan effects for motion
- Separates script, image, and audio generation
- Runs as a backend pipeline
- Educational focus

Sora-style systems:
- Generate full motion video natively
- Use advanced generative video diffusion models
- Produce continuous animation rather than scene-based slides

Fragment acts as a modular pipeline-based educational video builder, whereas Sora-style systems aim for end-to-end generative cinematic video creation.

---

## Technology Stack

### Backend
- Python 3.10+
- FastAPI (Web framework)
- Uvicorn (ASGI server)

### AI Services
- GPT-4 (Script generation)
- DALL-E 3 (Image generation)
- Kokoro TTS (Voice generation, runs locally)

### Video Processing
- MoviePy (Video assembly)
- pysrt (Subtitle generation)

### Validation & Configuration
- Pydantic (Input and configuration validation)
- dotenv (.env configuration management)

### Frontend
- HTML (templates/index.html)
- Vanilla JavaScript (static/app.js)

## 👥 Contributors

- Bhavya Suman
- Anushka Sharma
- GK
- Manavi Bangani
- Rayan Qamar
