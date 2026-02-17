# Make elrich-trading.com Visible in Google

These files are already in place:
- **sitemap.xml** – Tells Google which pages to index
- **robots.txt** – Allows crawlers and points to the sitemap
- **index.html** – Updated with canonical URL, meta description, and Open Graph tags

## Submit Your Site to Google (required)

### 1. Google Search Console

1. Go to **[search.google.com/search-console](https://search.google.com/search-console)** and sign in with a Google account.
2. Click **“Add property”**.
3. Choose **“URL prefix”** and enter: `https://elrich-trading.com`
4. Click **Continue**.
5. **Verify ownership** using one of these:
   - **HTML file upload** – Download the file Google gives you, upload it to your site’s root (same folder as `index.html`), then click Verify.
   - **HTML tag** – Copy the meta tag Google gives you and add it inside the `<head>` of `index.html`, then click Verify.
   - **DNS** – If you use a DNS provider (e.g. Cloudflare, your domain registrar), add the TXT record they show, then click Verify.
6. After verification, go to **Sitemaps** in the left menu.
7. Under “Add a new sitemap”, enter: `sitemap.xml`
8. Click **Submit**.

### 2. Request Indexing (optional but useful)

1. In Search Console, open **URL Inspection** (left menu).
2. Enter: `https://elrich-trading.com`
3. Click **Request indexing** so Google crawls the page sooner.

### 3. Check After a Few Days

- Search for: `site:elrich-trading.com` on Google.
- It can take a few days to a few weeks for new sites to appear.

## Files You Must Have Online

Ensure these are live at the root of elrich-trading.com:

- `index.html`
- `sitemap.xml`
- `robots.txt`

So that these URLs work:
- https://elrich-trading.com/
- https://elrich-trading.com/sitemap.xml
- https://elrich-trading.com/robots.txt

## Optional: Fix Typo in Title

If you still have “Provision Servies” in the title anywhere, change it to “Provision Services” (already updated in the main title in `index.html`).
