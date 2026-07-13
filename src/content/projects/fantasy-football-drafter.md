---
title: 'Fantasy Football Drafter'
summary: 'An auction-draft engine that turns ML point projections into real-time dollar values for optimal fantasy football drafting strategy.'
tech: ['Python', 'Streamlit', 'Machine Learning']
date: 2026-06-01
featured: true
order: 1
github: 'https://fantasy-auction-drafter.streamlit.app/'
background: '/lumen_field.jpg'
---

## Context

I've been in a fantasy football league with my closest friends for over 5 years now, and we
have consistenly ran an auction draft. An auction draft is when we each have $200 and get to
bid for players on our football team, instead of the traditional snake draft. I wanted to 
create an engine to help me make optimal decisions.

## The Product

First, I fed this model the best-available free data, as well as the auction patterns
of my league in the past year. This engine focuses on value-over-replacement modeling, 
where the player's price is determine by how he compares to others in his position. Feeding
this model the patterns of my own league were important. Initially, the model suggested that 
I should pay around $65 for the best-available players, but this was just not a reality for my 
league, as the best players typically went for around $95. The model adjusted for this fact and now 
places Jahmyr Gibbs, arguably one of the best players to draft for 2026, at $91.

This is  meant to be a real-time app, recording all the purchases that have been made so far.
It tracks opponents' remaining budgets and roster needs (QB, RB, WR, TE, etc.) and not only 
suggest optimal maximal bids for each nominated player, but also suggest optimal nominations to 
drain opponents of their money for lower-value players.