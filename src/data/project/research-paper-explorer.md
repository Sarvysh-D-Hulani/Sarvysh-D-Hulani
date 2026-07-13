---
title: 'Research Paper Explorer'
excerpt: 'A tool that uses semantic search to help students and researchers discover relevant papers across multiple academic databases.'
coverImage: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1200'
tags:
  - 'AI'
  - 'Research'
  - 'Search'
technologies:
  - 'Python'
  - 'Sentence Transformers'
  - 'React'
  - 'Elasticsearch'
status: 'In Progress'
github: 'https://github.com'
problem: 'Finding relevant research papers across databases is time-consuming and fragmented.'
whyBuilt: 'I spent too many hours searching for papers across different databases with inconsistent search experiences.'
process: 'Built a unified search interface that indexes papers from multiple sources and uses semantic search for relevance.'
challenges: 'Indexing millions of papers while maintaining fast query response times.'
learnings: 'Semantic search dramatically improves discovery compared to keyword search alone.'
startDate: 2025-03-01
featured: false
order: 4
---

## Overview

A semantic search tool that helps students and researchers discover relevant papers across multiple academic databases in one place.

## Problem

Finding relevant research papers across different databases is time-consuming and fragmented. Each database has its own search interface and limitations.

## Why I Built It

I spent too many hours searching for papers across different databases with inconsistent search experiences. There had to be a better way.

## Process

1. Built crawlers for arXiv, Semantic Scholar, and PubMed APIs
2. Created embeddings using sentence-transformers
3. Set up Elasticsearch for fast similarity search
4. Built a clean React frontend

## Challenges

Indexing millions of papers while maintaining fast query response times required careful optimization.

## What I Learned

Semantic search dramatically improves discovery compared to keyword search alone. Users find relevant papers they would have missed with traditional search.

## Future Improvements

- Citation graph visualization
- Personalized recommendations
- Collaborative reading lists
