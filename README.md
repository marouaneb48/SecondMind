
<div align="center">

# 🧠 SecondMind
### Your AI-Powered Academic Assistant

[![FastAPI](https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi)](https://fastapi.tiangolo.com/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/)

<p align="center">
  <a href="#features">Features</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#roadmap">Roadmap</a>
</p>

</div>

---

## 🚀 About The Project

**SecondMind** is an innovative academic assistant designed to enhance your learning and research workflow. By leveraging the power of AI, successful transcription, and intelligent note-taking, SecondMind helps you capture, organize, and synthesize information effortlessly.

Whether you're attending lectures, conducting research, or brainstorming ideas, SecondMind acts as your second brain, ensuring no insight is lost.

## ✨ Features

| Feature | Description |
| :--- | :--- |
| **🎙️ Smart Transcription** | Convert audio recordings into accurate text with automatic speaker detection. |
| **📝 Intelligent Notes** | Rich text editing experience enhanced with AI assistance for summarizing and expanding ideas. |
| **🧠 Concept Mapping** | Visualize complex connections between topics to better understand relationships. |
| **❓ Q&A Assistant** | Ask questions about your uploaded documents and notes to get instant, context-aware answers. |
| **📅 Timeline & Tasks** | Stay organized with integrated task management and timeline views for your study schedule. |

## 🛠️ Tech Stack

### Frontend
- **Framework**: [React](https://reactjs.org/) with [Vite](https://vitejs.dev/)
- **Styling**: [TailwindCSS](https://tailwindcss.com/)
- **Editor**: [BlockNote](https://www.blocknotejs.org/)
- **Visualization**: [ReactFlow](https://reactflow.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)

### Backend
- **Framework**: [FastAPI](https://fastapi.tiangolo.com/)
- **Language**: Python 3.8+
- **AI Integration**: Custom AI modules for transcription and analysis

## 🏁 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- **Node.js**: v16 or higher
- **Python**: v3.8 or higher

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/SecondMind.git
   cd SecondMind
   ```

2. **Backend Setup**
   ```bash
   cd server
   # Create a virtual environment (optional but recommended)
   python -m venv venv
   # Activate the virtual environment
   # Windows:
   .\venv\Scripts\activate
   # macOS/Linux:
   source venv/bin/activate
   
   # Install dependencies (ensure you have requirements.txt)
   pip install -r requirements.txt
   ```

3. **Frontend Setup**
   ```bash
   cd .. # Go back to root
   npm install
   ```

### Running the Application

1. **Start the Backend Server**
   ```bash
   cd server
   uvicorn app.main:app --reload
   ```
   The API will be available at `http://localhost:8000`.

2. **Start the Frontend Development Server**
   ```bash
   # In a new terminal window, from the root directory
   npm run dev
   ```
   The application will be accessible at `http://localhost:5173`.

## 🗺️ Roadmap

- [ ] 📱 Mobile App (React Native)
- [ ] ☁️ Cloud Sync & Backup
- [ ] 🔌 Plugin System
- [ ] 🌙 Dark Mode Support
- [ ] 📤 Export to PDF/Markdown

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

<div align="center">
  <sub>Built with ❤️ by the SecondMind Team</sub>
</div>
