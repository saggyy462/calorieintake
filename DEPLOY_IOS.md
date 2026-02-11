# Deploy And Install On iPhone (No Localhost Needed)

## Fastest Path: Vercel (Recommended)

1. Put this project in a GitHub repo.
2. Go to https://vercel.com/new
3. Import that GitHub repo.
4. Framework preset: `Other`
5. Build command: leave empty
6. Output directory: leave empty
7. Deploy

Vercel will give you a permanent URL like:
`https://your-app-name.vercel.app`

## Install On iPhone

1. Open the deployed URL in Safari on iPhone.
2. Tap Share.
3. Tap `Add to Home Screen`.
4. Launch it from your home screen like an app.

## Update Flow

1. Change files locally.
2. Push to GitHub.
3. Vercel auto-deploys updates.
4. Reopen app on iPhone and refresh once.

## Alternative: Netlify Drop (No Git Needed)

1. Go to https://app.netlify.com/drop
2. Drag this folder into the page.
3. Netlify gives you a URL.
4. Use the same `Add to Home Screen` steps on iPhone.

## Notes

- Data is stored in your browser local storage on each device.
- iPhone and laptop data are separate unless you later add cloud sync.
- Service worker is already included, so installed app behavior is supported.
