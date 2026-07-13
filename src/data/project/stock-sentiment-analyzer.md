---
title: 'Stock Sentiment Analyzer'
excerpt: 'A real-time sentiment analysis tool that tracks financial news and social media to predict short-term stock movements.'
coverImage: 'https://images.pexels.com/photos/7567486/pexels-photo-7567486.jpeg?auto=compress&cs=tinysrgb&w=1200'
tags:
  - 'Finance'
  - 'NLP'
  - 'Data'
technologies:
  - 'Python'
  - 'Transformers'
  - 'Streamlit'
  - 'Pandas'
status: 'Shipped'
github: 'https://github.com'
demo: 'https://example.com'
problem: 'Individual investors lack access to institutional-grade sentiment analysis tools.'
whyBuilt: 'I wanted to understand how news sentiment correlates with stock price movements, and existing tools were either too expensive or too simplistic.'
process: 'Built a data pipeline that scrapes financial news and social media, runs it through a fine-tuned BERT model for sentiment, and correlates with price data.'
challenges: 'Financial text is full of sarcasm and irony that standard sentiment models struggle with.'
learnings: 'Sentiment alone is not predictive. Combining with technical indicators improves accuracy significantly.'
startDate: 2024-09-01
endDate: 2024-12-15
featured: true
order: 2
---

## Overview

A real-time sentiment analysis tool that tracks financial news and social media to help predict short-term stock movements. Built as a side project to understand the intersection of NLP and finance.

## Problem

Individual investors lack access to the kind of sentiment analysis tools that institutional investors use daily.

## Why I Built It

I wanted to understand how news sentiment correlates with stock price movements. Existing tools were either too expensive for a student or too simplistic to be useful.

## Process

1. Built a data pipeline to scrape financial news and social media posts
2. Fine-tuned a BERT model on financial text for sentiment classification
3. Correlated sentiment scores with historical price data
4. Created an interactive dashboard with Streamlit

## Challenges

Financial text is full of sarcasm, irony, and domain-specific jargon that standard sentiment models struggle with. Had to create a custom labeled dataset.

## What I Learned

Sentiment alone is not predictive of price movements. However, when combined with technical indicators, it significantly improves prediction accuracy.

## Future Improvements

- Real-time streaming with Kafka
- Multi-language support
- Options market sentiment
