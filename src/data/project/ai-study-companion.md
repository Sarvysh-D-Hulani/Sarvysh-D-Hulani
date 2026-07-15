---
title: 'AI Study Companion'
excerpt: 'An AI-powered study companion built for BITS Pilani students. Uses RAG with fine-tuned embeddings to answer course-specific questions.'
coverImage: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=1200'
gallery:
  - 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800'
  - 'https://images.pexels.com/photos/5905702/pexels-photo-5905702.jpeg?auto=compress&cs=tinysrgb&w=800'
tags:
  - 'AI'
  - 'Education'
  - 'RAG'
technologies:
  - 'Python'
  - 'LangChain'
  - 'FastAPI'
  - 'PostgreSQL'
  - 'OpenAI'
status: 'In Progress'
github: 'https://github.com'
demo: 'https://example.com'
problem: 'Students struggle to get instant, course-specific help outside of office hours.'
whyBuilt: 'I noticed myself and my classmates spending hours looking for answers to specific course questions that could be answered instantly with the right context.'
process: 'Started with a simple RAG pipeline using OpenAI embeddings, then fine-tuned embeddings on course materials for better domain accuracy. Built a FastAPI backend with PostgreSQL for vector storage.'
challenges: 'Getting good retrieval accuracy on technical content was harder than expected. Had to experiment with chunking strategies and embedding models.'
learnings: 'Fine-tuned embeddings significantly outperform generic ones for domain-specific RAG. Chunking strategy matters more than the model choice.'
futureImprovements: 'Add multi-modal support for diagrams and equations. Implement collaborative study rooms.'
startDate: 2025-01-15
featured: true
order: 1
metric: '500+ questions answered in beta'
---

## Overview

The AI Study Companion is a tool I built to solve a problem I face every day: getting instant, accurate help with course material outside of office hours. It uses retrieval-augmented generation with fine-tuned embeddings to provide course-specific answers.

## The Problem

Students often struggle with course material outside of class hours. While general AI tools exist, they lack the specific context of course materials, lecture notes, and textbook content.

## Why I Built It

I noticed myself and my classmates spending hours searching for answers to specific course questions. General AI tools would give generic answers that missed the nuance of what we were studying.

## Process

1. Started with a basic RAG pipeline using OpenAI embeddings
2. Collected and processed course materials (lecture notes, textbooks, past papers)
3. Fine-tuned embeddings on the course corpus
4. Built a FastAPI backend with PostgreSQL for vector storage
5. Created a clean, intuitive frontend

## Challenges

The biggest challenge was retrieval accuracy. Technical content with formulas, diagrams, and specific terminology required careful chunking strategies and embedding model selection.

## What I Learned

Fine-tuned embeddings significantly outperform generic ones for domain-specific retrieval. The chunking strategy matters more than the choice of embedding model.

## Future Improvements

- Multi-modal support for diagrams and equations
- Collaborative study rooms
- Integration with LMS platforms
