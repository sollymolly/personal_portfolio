---
title: 'HabitKnight'
summary: 'A todo list where finishing things levels up a medieval character — deadlines are sworn oaths worth real XP.'
tech: ['Next.js', 'TypeScript', 'React', 'PostgreSQL', 'Tailwind CSS']
date: 2026-08-01
featured: true
order: 3
github: 'https://github.com/sollymolly/todo'
---

## Context

Every todo app I've used has the same problem: nothing happens when you finish
something, and nothing happens when you don't. A checkbox going grey is not a
consequence. I wanted the opposite — an app where a deadline actually costs
something to miss, and where the reward for hitting one is visible enough that I
care about it.

So the quests are grouped into categories, deadlines are sworn oaths, and the
thing on the other side of the screen is a pixel-art knight who levels up when
you keep your word.

## The Product

The XP economy is the whole design. A quest with no due date is barely worth
anything (+5); one finished on time pays +25; one finished late pays +8; and a
deadline that passes without you costs −15. Anything still open 24 hours past its
deadline gets swept and marked **missed** on your next page load, with a banner
telling you how many oaths broke while you were away. A missed quest stays in its
category box rather than disappearing — late is not the same as gone, and
finishing it refunds the penalty and pays the late award.

Twenty named ranks run from *Ragged Peasant* at 0 XP to *Living Legend* at
15,770, with five equipment slots that unlock by level. The character is
composited at runtime from Liberated Pixel Cup sprite layers — body, hair, eyes,
armour, weapon, cloak, shield — drawn onto a canvas in LPC's own z-order and
recoloured through palette ramps, so every combination of gear and appearance
renders without a single pre-baked image. Click the knight and it walks.

Recurring habits are stored as *definitions*, not quests: each day one is due, an
ordinary todo is materialised from it, earning the usual XP. Beside that there's
per-category "strengths" (the share of deadlines you've missed, worst first),
end-to-end encrypted messaging between friends, and self-contained auth — scrypt
password hashing and a signed JWT cookie, no third-party provider.

## What made it interesting

The lesson I keep coming back to is that **XP had to be reconciled, not
accumulated.** My first version applied incremental deltas on each transition,
which quietly double-charged: undoing a completion returned a quest to `open`
with its deadline still long past, so the next page load swept it and took the
−15 again. One quest in my own database had four ledger entries totalling −30 for
a single missed deadline.

The fix was to make each quest's XP contribution a pure function of its state and
move only `target − already_applied` on every transition. A missed deadline now
costs 15 once and a completion pays once, however many times the checkbox gets
toggled. Everything funnels through one database function; complete, uncomplete,
abandon and sweep are thin wrappers that pick a target state.

Recurring habits needed the same kind of thinking. "Create tomorrow's copy when
today's is ticked" breaks the instant someone un-ticks it — you either double up
or lose the next occurrence. Materialising on read instead ("does today already
have one?") is idempotent, so it survives any amount of toggling. And because
completed quests are pruned after a week, every completion metric had to become a
durable counter incremented at the moment of deletion rather than a `count(*)`
that pruning would silently walk back to zero.

A row can only be deleted once, so it can only be counted once. Most of the bugs
I fixed in this project came from picking the wrong thing to count.
