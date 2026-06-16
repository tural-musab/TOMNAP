# TOMNAP Vercel Domain Cutover Operations

This file tracks domain and Vercel operations separately from the homepage code change.

## Current Production Project

- Vercel team: `tural-musabs-projects`
- Vercel project: `tomnap`
- Project ID: `prj_svgiAGFEJuigCyEj15o9xeyOc9eL`
- Preferred canonical URL in app metadata: `https://tomnap.com/`

## Completed

- Production deployment was published to the `tomnap` Vercel project.
- `tomnap.com` and `www.tomnap.com` are assigned to the same TOMNAP production deployment.
- SSL is active for both `https://tomnap.com/` and `https://www.tomnap.com/`.

## Remaining Domain Operation

The required final state is:

- `https://tomnap.com/` serves the canonical site.
- `https://www.tomnap.com/` permanently redirects to `https://tomnap.com/`.

Current live domain behavior observed during deployment:

- `https://tomnap.com/` redirects to `https://www.tomnap.com/`.

To complete the cutover, update the Vercel project domain settings so `tomnap.com` is the primary serving domain and `www.tomnap.com` redirects to it. Do this in Vercel domain settings or through the Project Domain API by clearing the redirect on `tomnap.com` and setting the redirect on `www.tomnap.com` to `tomnap.com`.

Do not add an application-level `www.tomnap.com` redirect while Vercel still redirects `tomnap.com` to `www.tomnap.com`; that creates a redirect loop.
