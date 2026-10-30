# Zebra: putting it online

The whole game is one file, `index.html`. Any static web host works, and nothing needs installing.

## Fastest: Netlify Drop (free, about 2 minutes)
1. Unzip this folder.
2. Go to https://app.netlify.com/drop and drag the **folder** onto the page.
3. You get a live link right away, like `https://random-name.netlify.app`.
4. Create a free Netlify account when it asks, so the site stays up and you can rename it (Site configuration → Change site name, e.g. `zebra-dive.netlify.app`).
5. To update later: Deploys → drag the new folder onto the page.

## Other free hosts
| Host | How |
|---|---|
| GitHub Pages | Create a repo, upload `index.html`, then Settings → Pages → Deploy from branch → `main` / root. Your link: `https://<username>.github.io/<repo>/` |
| Cloudflare Pages | Workers & Pages → Create → Pages → Upload assets → drop the folder. |
| Vercel | Add New → Project → drag the folder in, or run `vercel deploy` in it. |

## Visitor stats on Vercel (optional)
The game already includes Vercel's analytics snippet. In your Vercel project, open the **Analytics** tab, click **Enable**, then redeploy. Visitors, page views, referrers, countries and devices appear there. Ad blockers can hide some visitors.

## Your own domain (optional)
Buy a domain (about $10–15/year from Namecheap, Cloudflare, Porkbun, etc.), then follow your host's "Custom domain" steps. They walk you through the DNS settings, and HTTPS is free and automatic.

## Live rankings (optional, about 5 minutes)
Without this, the bell curve shows an **estimate** of typical players in each profession. To rank people against real players, **separately for each profession and mode**:

1. Create a free project at https://supabase.com.
2. In the project: **SQL Editor → New query**, paste all of `supabase_setup.sql`, and click **Run**.
3. In **Project Settings → API Keys**, copy your **Project URL** and **Publishable key** (`sb_publishable_…`).
4. Open `index.html` in a text editor, search for `SCORE_SERVER`, and fill in:
   ```js
   url: "https://your-project.supabase.co",
   key: "sb_publishable_...",
   ```
5. Re-upload the folder to your host.

Both values are safe to put in public code. The database only lets browsers *add* a daily score, and *read* bucket counts for one profession. Nobody can read, edit or delete individual scores. `minPlayers` (default 10) is how many real scores a day needs before the live curve replaces the estimate.

## Good to know
- **Saved progress** (daily results, best scores, practice decks) lives in each player's browser. Clearing site data resets it.
- **Cheating:** scores come from the browser, so a determined person could submit a fake one (the database only accepts 0–700). If that becomes a problem, the fix is a server-side check of answers before saving.
- **Content review:** the answer lists and rarity scores are estimates. Have faculty review them before using Zebra for coursework or research.
- **Credit:** the rarity-scoring mechanic was inspired by Krillion. Zebra's name, art and content are its own.
