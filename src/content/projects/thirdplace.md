---
title: 'ThirdPlace'
summary: "A mobile app that turns your city into a fog-of-war map — it clears only where you've actually been, nudging you somewhere new."
tech: ['React Native', 'Supabase', 'PostgreSQL', 'Google Places API']
date: 2026-03-01
featured: true
order: 3
github: 'https://github.com/sollymolly/ThirdPlace'
background: '/cafe.jpg'
---

## The problem

A "third place" is anywhere that isn't home or work — and most of us loop
between the same few. Discovery apps hand you lists and reviews; I wanted the
exploring itself to be the game.

## What I built

A mobile app in React Native that renders your map covered in fog, which
permanently clears wherever you physically go — video-game fog-of-war for
real life. The UI updates in real time through Supabase, so the map reacts
as you move.

## How it works

The backend is a PostgreSQL schema in Supabase, designed across multiple
tables with cascading deletes so removing a user's data is clean and
complete. Location comes from the Google Places API: responses are
normalized and matched with coordinate-based queries so the app tracks
where you actually are — not just the nearest named pin.

## Outcome

In active development since March 2026.
