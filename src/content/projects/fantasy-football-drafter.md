---
title: 'Fantasy Football Drafter'
summary: 'An auction-draft engine that turns ML point projections into real-time dollar values — and tells you exactly how high to bid.'
tech: ['Python', 'Streamlit', 'Machine Learning']
date: 2026-06-01
featured: true
order: 1
github: 'https://github.com/sollymolly/FF_Drafter'
background: '/lumen_field.jpg'
---

## The problem

In a fantasy football auction draft, every manager faces the same constraint: a
$200 budget and a full roster to fill. Projections tell you how many points a
player might score, but not what he's _worth_ — and worth shifts second by
second as opponents spend down their budgets and lock up roster slots. Most
managers guess. I wanted the math.

## What I built

A valuation engine in Python that transforms ML-based point projections into
auction dollar values through value-over-replacement modeling: a player's
price isn't his raw projection, it's how much he out-scores the best
freely-available alternative at his position.

On top of the engine sits a real-time draft-day app built with Streamlit.
During the draft it tracks every opponent's remaining budget and roster needs
live, then recommends an optimal maximum bid for the player on the block —
and a nomination strategy for who to put up next — all under the $200 budget
constraint.

## How it works

Value-over-replacement converts projected points into scarcity-adjusted
dollars: the league's total money is allocated across the player pool in
proportion to each player's marginal value above replacement level at his
position. As players come off the board, the recommendations update —
remaining money chasing remaining value — so the numbers stay honest even
when the room overpays early.

## Outcome

In active development since June 2026. Draft season is the real benchmark.
