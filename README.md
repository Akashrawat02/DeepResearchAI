# DeepResearchAI

Deep Research AI Agentic System
A multi-agent AI research system that uses Google's Gemini API, LangGraph, and LangChain to perform deep research on any topic, providing comprehensive, well-structured answers with source citations.

Project Overview
This system implements a multi-agent architecture where specialized agents collaborate to conduct thorough online research:

Research Agent: Searches the web for information using Tavily API, analyzes webpages, and synthesizes research findings
Drafting Agent: Takes the synthesized research and drafts coherent, well-structured answers with citations
Graph Orchestration: Uses LangGraph to coordinate the workflow between agents in a structured research pipeline
Key Features
Multi-Agent Architecture: Specialized agents working together for better results
Web Information Gathering: Integrates with Tavily API for comprehensive web searches
Webpage Scraping: Extracts and analyzes content from relevant webpages
Research Synthesis: Combines information from multiple sources, identifies key points and conflicts
Answer Drafting & Refinement: Creates clear, structured answers with proper source citations
Vector Storage: Stores and retrieves relevant information for faster access
PostgreSQL Database: Persistent storage of research queries and results
Flask Web Interface: Simple user interface for submitting queries and viewing results
Technical Stack
Python 3.11: Core programming language
Flask: Web framework for the user interface
SQLAlchemy & PostgreSQL: Database for persistent storage
LangChain: Framework for building applications with language models
LangGraph: Tool for creating multi-agent workflows
Google Generative AI (Gemini): Language model for intelligence
Tavily API: External search service for web information gathering
Trafilatura: Library for web scraping and text extraction
Project Structure
├── agents/               # Agent implementations
│   ├── drafting_agent.py # Handles answer creation
│   ├── graph.py          # Orchestrates the agent workflow
│   └── research_agent.py # Handles information gathering
├── static/               # Static assets (CSS, JS)
├── templates/            # HTML templates
├── utils/                # Utility modules
│   ├── tavily_search.py  # Integration with Tavily API
│   ├── vector_store.py   # Document storage and retrieval
│   └── web_scraper.py    # Web content extraction
├── app.py                # Flask application setup
├── main.py               # Application entry point
├── models.py             # Database models
└── README.md             # This file
How It Works
Query Submission: User submits a research query through the web interface
Initial Research: Research agent searches the web using Tavily API to gather relevant information
Webpage Analysis: The system scrapes and analyzes content from most relevant webpages
Research Synthesis: Information is compiled, organized, and key points are identified
Answer Drafting: Drafting agent creates an initial answer based on synthesized research
Answer Refinement: The draft is refined for clarity, structure, and accuracy
Result Storage: The query, answer, and sources are stored in the PostgreSQL database
Result Presentation: The final answer is presented to the user with sources and key points
Required API Keys
GOOGLE_API_KEY: Required for Google's Gemini AI models (for analysis, drafting, etc.)
TAVILY_API_KEY: Required for web search functionality
Getting Started
Environment Setup:

Ensure Python 3.11 is installed
Set up a PostgreSQL database
Configure environment variables for API keys and database
Installation:

pip install -r requirements.txt
Database Configuration:

Set the DATABASE_URL environment variable to your PostgreSQL connection string
The application will automatically create the necessary tables
Running the Application:

gunicorn --bind 0.0.0.0:5000 main:app
Using the System:

Access the application in a web browser
Submit a research query in the form
Wait for the system to process and generate a comprehensive answer
View the results with sources and key points
Future Improvements
Add user authentication system
Implement more advanced vector storage solutions
Add support for more specialized research domains
Implement caching for faster responses to similar queries
Enhance the web interface with real-time updates during research
