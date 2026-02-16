# Deploy ELRICH Trading Website Online

Your site is a static website (HTML, CSS, JS) and can be deployed for free on several platforms.

---

## Option 1: Netlify (Recommended – Easiest)

1. **Go to** [netlify.com](https://www.netlify.com) and create a free account.

2. **Deploy by drag-and-drop:**
   - Log in and click **"Add new site"** → **"Deploy manually"**
   - Drag your entire `project1` folder onto the deploy area
   - Netlify will upload and deploy; you’ll get a URL like `random-name.netlify.app`

3. **Optional – Custom domain:**
   - In Site settings → Domain management → Add custom domain
   - Example: `elrichtrading.com` or `www.elrichtrading.com`

---

## Option 2: Vercel

1. **Go to** [vercel.com](https://vercel.com) and sign up (GitHub, GitLab, or email).

2. **Deploy with Vercel CLI:**
   - Open PowerShell in your project folder:
   ```powershell
   cd c:\xampp\htdocs\project1
   npx vercel
   ```
   - Follow the prompts; use default settings
   - You’ll get a URL like `project1-xxx.vercel.app`

3. **Or deploy via website:**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Import from Git (if you use GitHub) or upload the folder

---

## Option 3: GitHub Pages

1. **Create a GitHub account** at [github.com](https://github.com) if needed.

2. **Create a new repository:**
   - Click **New repository**
   - Name it `elrichtrading` (or similar)
   - Make it Public

3. **Upload your files:**
   - In the repo, click **"Add file"** → **"Upload files"**
   - Drag and drop: `index.html`, `styles.css`, `script.js`, and the `assets` folder

4. **Enable GitHub Pages:**
   - Go to **Settings** → **Pages**
   - Under **Source**, choose **Deploy from a branch**
   - Branch: `main`, folder: `/ (root)`
   - Save

5. **Your site will be at:** `https://yourusername.github.io/elrichtrading`

---

## Option 4: Cloudflare Pages

1. **Go to** [pages.cloudflare.com](https://pages.cloudflare.com) and sign up.

2. **Create a project:**
   - **Create a project** → **Direct Upload**
   - Drag your `project1` folder

3. **Deploy** – You’ll get a URL like `project1.pages.dev`.

---

## Before You Deploy

- ✅ All paths are relative – no changes needed
- ✅ External resources (fonts, images) use HTTPS
- ✅ Ensure `assets/logo.png` exists in your project folder

---

## Quick Start (Netlify – No account required)

1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag the `project1` folder onto the page
3. Your site will be live in seconds

---

## Need a Custom Domain?

If you own a domain (e.g. `elrichtrading.com`):

- **Netlify/Vercel/Cloudflare:** Add it in their domain settings and follow their DNS instructions
- **Common registrars:** GoDaddy, Namecheap, Google Domains – add the DNS records they provide
