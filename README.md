# Daily Macros (South-Indian-first Personal Tracker)

A lightweight mobile-first web app to log meals in plain text, track calories/macros, and compare against day-specific targets.

## Core Features

- Plain-text meal logging (`rice 180g, 1 cup dal, 3 egg whites`)
- Daily targets by weekday (rest/work day differences)
- Remaining calories/protein/carbs/fat for selected date
- Historical date view and historical data entry/edit
- Meal-slot workflow:
  - Pre Workout, Breakfast, Mid Morning, Lunch, Mid Evening, Dinner
- Pattern-based meal suggestions and remaining-day plan
- Compact mode + slot macro graph (x-axis meal slots, y-axis macro grams)
- Custom unknown item save flow:
  - fixed-entry save
  - scalable per-gram custom foods (example: `walnut 10g` -> supports `walnut 15g`)

## Run Locally

```bash
cd "/Users/sagar/Documents/Codex-Apps/Calorie intake test "
python3 -m http.server 8080
```

Open `http://localhost:8080`.

## Deploy For iPhone (PWA)

Use Vercel or Netlify and add to iPhone home screen via Safari.

See:

- `DEPLOY_IOS.md`

## Data Storage

- App data is currently local-only (`localStorage`) per device/browser/domain.
- No cloud sync yet.

## CI

GitHub Actions workflow checks JS syntax on push/PR:

- `.github/workflows/ci.yml`
