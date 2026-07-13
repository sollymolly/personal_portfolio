---
title: 'SafeConstruct'
summary: 'A blockchain-backed safety credentialing platform for construction workers.'
tech: ['Solidity', 'Next.js', 'TypeScript', 'Supabase', 'PostgreSQL']
date: 2026-06-01
featured: true
order: 2
demo: 'https://safeconstruct-test.vercel.app/'
slides: 'https://docs.google.com/presentation/d/1MWnFiYeX-mkFgl4K8TC9WIVmRn3JccUu2HsVTJe30Y8/edit?usp=sharing'
background: '/construction.jpg'
---

> Built as part of **The Initiative for CryptoCurrencies & Contracts (IC3)**
> at Princeton, June 2026.

## Context

Construction workers have to carry safety credentials in order to have approval of using 
certain construction equipment. It is vital for their safety and the safety of others.
The problem is that verifying these credentials can be a slow process. If people
lose their credentials, they may need to be needlessly retrained. These credentials are 
also forgeable, reflected by an infamous case in New York a few years back. My partner and I
wanted to create a safe, blockchain-backed credential system to solve these issues.

## The Product

Each construction worker has their own worker wallet, which stores their safety credentials on-chain.
A teacher/admin at a construction school has the ability to issue a safety credential to each of
these construction workers. A manager at a construction company then has the ability to view each
construction workers' wallet, and use that to verify whether or not the worker can have access to certain
construction equipment. Accreditors give construction schools permissions on which credentials they
are allowed to issue. This accreditor/school/company structure allows for a smooth credential issuance
and verification system.

We are still working on this project, so the system is deployed on Base Sepolia, using testnet ETH.
Scaling up to a useable product is simple. We would just need to deploy this on the ETH Mainnet.
We decided to create a relayer wallet pattern for this product, which essentially allows
construction schools to issue credentials on the chain without touching the worker's wallet directly.


