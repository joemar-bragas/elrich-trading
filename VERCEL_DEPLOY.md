# Deploy ELRICH Trading to Vercel

## Step 1: Sign up for Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click **"Sign Up"** and create an account (GitHub, GitLab, or email)

## Step 2: Log in via CLI

1. Open **PowerShell** or **Command Prompt**
2. Run:
   ```powershell
   npx vercel login
   ```
3. Choose your login method (email or GitHub) and complete the login

## Step 3: Deploy

1. Navigate to your project folder:
   ```powershell
   cd c:\xampp\htdocs\project1
   ```

2. Deploy:
   ```powershell
   npx vercel
   ```

3. When prompted:
   - **Set up and deploy?** → **Y** (Yes)
   - **Which scope?** → Press Enter (use your account)
   - **Link to existing project?** → **N** (No)
   - **Project name?** → Press Enter (use `project1` or type `elrichtrading`)
   - **Directory?** → Press Enter (use `./`)

4. **Done!** You’ll get a URL like:
   ```
   https://project1-xxxxx.vercel.app
   ```

## Step 4: Production (optional)

1. To deploy to production:
   ```powershell
   npx vercel --prod
   ```

2. Your site will be live at your permanent URL.

---

## Alternative: Deploy via Vercel Website (no CLI)

1. Go to [vercel.com/new](https://vercel.com/new)
2. Sign up or log in
3. Click **"Import Third-Party Git Repository"** or **"Deploy"** with a drag-and-drop zone
4. Or: connect your GitHub repo and push your code there; Vercel will deploy from there

---

## Files in your project

Your project should include:

- `index.html`
- `styles.css`
- `script.js`
- `assets/logo.png`
