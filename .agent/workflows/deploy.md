---
description: how to host the application for free on a custom domain
---

To host your DigiStack website for free with a personal domain, follow these steps:

### 1. Push your code to GitHub
If you haven't already, push your project to a GitHub repository (it can be Private).

### 2. Choose a Hosting Platform (Recommended: Vercel or Netlify)
Both offer excellent free tiers for Vite-based projects.

#### For Vercel (Easiest):
1. Go to [Vercel](https://vercel.com) and sign up with GitHub.
2. Click **"Add New"** > **"Project"**.
3. Import your `StartupWeb` repository.
4. Framework Preset should auto-detect as **Vite**.
5. Click **"Deploy"**.

#### For Netlify:
1. Go to [Netlify](https://netlify.com) and sign up with GitHub.
2. Click **"Add new site"** > **"Import an existing project"**.
3. Select your repository.
4. Build command: `npm run build`, Publish directory: `dist`.
5. Click **"Deploy site"**.

### 3. Connect Your Personal Domain
Once deployed, you will get a `.vercel.app` or `.netlify.app` URL. To use your own domain:

1. In Vercel/Netlify, go to **Settings** > **Domains**.
2. Enter your personal domain (e.g., `yourname.com`).
3. You will be given DNS records (usually an **A record** or **CNAME**).
4. Log into your domain registrar (e.g., Namecheap, GoDaddy, Google Domains).
5. Add the provided records to your DNS settings.
6. Wait 5-30 minutes for propagation. **SSL (HTTPS) will be provided for free automatically.**

### 4. Zero-Cost Domains (If you don't own one)
- Use the free subdomains provided (`digistack.vercel.app`).
- If you are a student, the **GitHub Student Developer Pack** provides a free `.me` or `.tech` domain for 1 year.
