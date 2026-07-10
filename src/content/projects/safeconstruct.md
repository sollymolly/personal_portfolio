---
title: 'SafeConstruct'
summary: 'A blockchain-backed safety credentialing platform for construction workers — verifiable on-chain credentials, without anyone handling private keys.'
tech: ['Solidity', 'Next.js', 'TypeScript', 'Supabase', 'PostgreSQL']
date: 2026-06-01
featured: true
order: 2
demo: 'https://safeconstruct-test.vercel.app/'
background: '/construction.jpg'
---

> Built as part of **The Initiative for CryptoCurrencies & Contracts (IC3)**
> at Princeton, June 2026.

## The problem

Construction workers carry safety credentials — certifications, training
records — between sites and employers, but the records themselves live in
filing cabinets and spreadsheets. Verification is slow and forgeable. Putting
credentials on-chain makes them tamper-proof and portable, but a naive
blockchain system hands every credential issuer a private key to manage,
which is unrealistic for a site office.

## What I built

A blockchain-based safety credential system deployed on Base Sepolia (EVM),
written in Solidity with Hardhat and ethers.js. The key design decision is a
**relayer wallet pattern**: organizations issue credentials through the
platform without ever touching a wallet, eliminating private-key exposure for
issuers entirely.

Around the chain sits a full-stack web application — Next.js, TypeScript,
Supabase Auth, and Prisma ORM on PostgreSQL — with a role system scoped per
organization: the same user can hold certain privileges in one organization
and different privileges in another.

## How it works

The platform includes a **shadow-user flow** that mirrors how job sites
actually onboard: credentials can be issued to a worker before they've
created an account, then claimed when they sign up. That means the paperwork
never waits on the worker having downloaded an app.

## Outcome

A live test deployment is up on Vercel — try the demo link above.
