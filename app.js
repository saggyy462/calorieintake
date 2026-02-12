const FOOD_DB = {
  idli: {
    perGram: { calories: 1.46, protein: 0.05, carbs: 0.28, fat: 0.03 },
    aliases: ["idli"]
  },
  dosa: {
    perGram: { calories: 1.68, protein: 0.04, carbs: 0.26, fat: 0.05 },
    aliases: ["dosa", "dal dosa", "moong dal dosa"]
  },
  adai: {
    perGram: { calories: 1.75, protein: 0.07, carbs: 0.22, fat: 0.06 },
    aliases: ["adai", "adai dosa"]
  },
  uttapam: {
    perGram: { calories: 1.72, protein: 0.045, carbs: 0.25, fat: 0.055 },
    aliases: ["uttapam", "uthappam", "oothappam"]
  },
  appam: {
    perGram: { calories: 1.65, protein: 0.03, carbs: 0.28, fat: 0.04 },
    aliases: ["appam", "palappam"]
  },
  pesarattu: {
    perGram: { calories: 1.58, protein: 0.08, carbs: 0.2, fat: 0.045 },
    aliases: ["pesarattu", "pesarattu dosa", "green gram dosa"]
  },
  "ragi dosa": {
    perGram: { calories: 1.5, protein: 0.045, carbs: 0.24, fat: 0.04 },
    aliases: ["ragi dosa"]
  },
  "idiyappam": {
    perGram: { calories: 1.5, protein: 0.025, carbs: 0.33, fat: 0.01 },
    aliases: ["idiyappam", "string hoppers"]
  },
  "semiya upma": {
    perGram: { calories: 1.54, protein: 0.04, carbs: 0.24, fat: 0.05 },
    gramsPerCup: 180,
    aliases: ["semiya upma", "upma", "bani upma", "plate bani upma"]
  },
  "aval upma": {
    perGram: { calories: 1.42, protein: 0.03, carbs: 0.25, fat: 0.035 },
    gramsPerCup: 170,
    aliases: ["aval upma", "poha", "poha upma"]
  },
  pongal: {
    perGram: { calories: 1.62, protein: 0.04, carbs: 0.23, fat: 0.05 },
    gramsPerCup: 185,
    aliases: ["pongal", "ven pongal", "khara pongal"]
  },
  sambar: {
    perGram: { calories: 0.68, protein: 0.03, carbs: 0.09, fat: 0.02 },
    gramsPerCup: 240,
    aliases: ["sambar", "sambhar"]
  },
  rasam: {
    perGram: { calories: 0.25, protein: 0.01, carbs: 0.03, fat: 0.01 },
    gramsPerCup: 240,
    aliases: ["rasam"]
  },
  "tomato chutney": {
    perGram: { calories: 1.2, protein: 0.02, carbs: 0.1, fat: 0.08 },
    gramsPerCup: 220,
    aliases: ["tomato chutney"]
  },
  "peanut chutney": {
    perGram: { calories: 3, protein: 0.12, carbs: 0.09, fat: 0.24 },
    gramsPerCup: 220,
    aliases: ["peanut chutney"]
  },
  "coconut chutney": {
    perGram: { calories: 2.2, protein: 0.03, carbs: 0.09, fat: 0.2 },
    gramsPerCup: 220,
    aliases: ["coconut chutney", "chutney"]
  },
  "mint chutney": {
    perGram: { calories: 1.15, protein: 0.02, carbs: 0.12, fat: 0.06 },
    gramsPerCup: 210,
    aliases: ["mint chutney", "pudina chutney"]
  },
  "onion chutney": {
    perGram: { calories: 1.35, protein: 0.02, carbs: 0.12, fat: 0.08 },
    gramsPerCup: 210,
    aliases: ["onion chutney"]
  },
  "tomato onion chutney": {
    perGram: { calories: 1.25, protein: 0.02, carbs: 0.11, fat: 0.07 },
    gramsPerCup: 210,
    aliases: ["tomato onion chutney"]
  },
  "chicken breast": {
    perGram: { calories: 1.4, protein: 0.29, carbs: 0, fat: 0.03 },
    aliases: ["chicken breast"]
  },
  rice: {
    perGram: { calories: 1.25, protein: 0.024, carbs: 0.265, fat: 0.003 },
    gramsPerCup: 195,
    aliases: ["rice", "cup rice"]
  },
  dal: {
    perGram: { calories: 0.9, protein: 0.055, carbs: 0.15, fat: 0.018 },
    gramsPerCup: 170,
    aliases: ["dal", "methi dal", "toor dal", "moong dal", "sambar dal"]
  },
  "curd rice": {
    perGram: { calories: 1.28, protein: 0.03, carbs: 0.2, fat: 0.04 },
    gramsPerCup: 200,
    aliases: ["curd rice", "thayir sadam"]
  },
  "lemon rice": {
    perGram: { calories: 1.82, protein: 0.03, carbs: 0.29, fat: 0.055 },
    gramsPerCup: 195,
    aliases: ["lemon rice", "chitranna"]
  },
  "tamarind rice": {
    perGram: { calories: 1.95, protein: 0.035, carbs: 0.31, fat: 0.06 },
    gramsPerCup: 195,
    aliases: ["tamarind rice", "puliyodarai", "pulihora"]
  },
  curd: {
    perGram: { calories: 0.61, protein: 0.035, carbs: 0.047, fat: 0.032 },
    gramsPerCup: 245,
    aliases: ["curd", "yogurt"]
  },
  "brinjal curry": {
    perGram: { calories: 0.82, protein: 0.018, carbs: 0.08, fat: 0.045 },
    gramsPerCup: 170,
    aliases: ["brinjal curry"]
  },
  "lady finger curry": {
    perGram: { calories: 0.78, protein: 0.02, carbs: 0.08, fat: 0.038 },
    gramsPerCup: 170,
    aliases: ["lady finger curry", "bhendi curry", "bhindi curry"]
  },
  "bittergourd curry": {
    perGram: { calories: 0.76, protein: 0.02, carbs: 0.07, fat: 0.04 },
    gramsPerCup: 170,
    aliases: ["bittergourd curry"]
  },
  "broad beans curry": {
    perGram: { calories: 0.8, protein: 0.029, carbs: 0.095, fat: 0.035 },
    gramsPerCup: 170,
    aliases: ["broad beans curry", "beans curry", "cluster beans curry", "long beans curry"]
  },
  "raw banana curry": {
    perGram: { calories: 0.98, protein: 0.014, carbs: 0.19, fat: 0.028 },
    gramsPerCup: 170,
    aliases: ["raw banana curry"]
  },
  "potato curry": {
    perGram: { calories: 1.12, protein: 0.02, carbs: 0.185, fat: 0.038 },
    gramsPerCup: 170,
    aliases: ["potato curry"]
  },
  "gobi tomato curry": {
    perGram: { calories: 0.74, protein: 0.027, carbs: 0.08, fat: 0.03 },
    gramsPerCup: 170,
    aliases: ["gobi tomato curry"]
  },
  avial: {
    perGram: { calories: 0.95, protein: 0.02, carbs: 0.09, fat: 0.05 },
    gramsPerCup: 180,
    aliases: ["avial"]
  },
  poriyal: {
    perGram: { calories: 0.88, protein: 0.022, carbs: 0.08, fat: 0.05 },
    gramsPerCup: 170,
    aliases: ["poriyal", "dry curry"]
  },
  kootu: {
    perGram: { calories: 0.85, protein: 0.03, carbs: 0.1, fat: 0.03 },
    gramsPerCup: 180,
    aliases: ["kootu"]
  },
  "egg white": {
    perUnit: { calories: 17, protein: 3.6, carbs: 0.2, fat: 0.05 },
    aliases: ["egg white", "egg whites"]
  },
  "whole egg": {
    perUnit: { calories: 72, protein: 6.3, carbs: 0.4, fat: 4.8 },
    aliases: ["whole egg", "egg", "eggs"]
  },
  banana: {
    perGram: { calories: 0.89, protein: 0.011, carbs: 0.23, fat: 0.003 },
    perUnit: { calories: 89, protein: 1.1, carbs: 23, fat: 0.3 },
    aliases: ["banana", "bananas"]
  },
  pear: {
    perGram: { calories: 0.57, protein: 0.004, carbs: 0.15, fat: 0.001 },
    perUnit: { calories: 101, protein: 0.6, carbs: 27, fat: 0.2 },
    aliases: ["pear", "pears"]
  },
  sapota: {
    perGram: { calories: 0.83, protein: 0.004, carbs: 0.2, fat: 0.011 },
    perUnit: { calories: 119, protein: 0.6, carbs: 29, fat: 0.3 },
    aliases: ["sapota", "sapodilla", "chikoo", "chiku"]
  },
  papaya: {
    perGram: { calories: 0.43, protein: 0.005, carbs: 0.11, fat: 0.003 },
    perUnit: { calories: 120, protein: 1.9, carbs: 30, fat: 0.7 },
    aliases: ["papaya"]
  },
  orange: {
    perGram: { calories: 0.47, protein: 0.009, carbs: 0.12, fat: 0.001 },
    perUnit: { calories: 62, protein: 1.2, carbs: 15.4, fat: 0.2 },
    aliases: ["orange", "oranges", "mosambi", "sweet lime"]
  },
  pomegranate: {
    perGram: { calories: 0.83, protein: 0.017, carbs: 0.19, fat: 0.012 },
    perUnit: { calories: 134, protein: 2.9, carbs: 33, fat: 1.8 },
    aliases: ["pomegranate", "anar"]
  },
  guava: {
    perUnit: { calories: 68, protein: 2.6, carbs: 14, fat: 1 },
    aliases: ["guava"]
  },
  apple: {
    perUnit: { calories: 95, protein: 0.5, carbs: 25, fat: 0.3 },
    aliases: ["apple"]
  },
  "amber date": {
    perUnit: { calories: 66, protein: 0.4, carbs: 18, fat: 0 },
    aliases: ["amber date", "amber dates", "date", "dates"]
  },
  ghee: {
    perGram: { calories: 9, protein: 0, carbs: 0, fat: 1 },
    aliases: ["ghee"]
  },
  "whey scoop": {
    perUnit: { calories: 120, protein: 24, carbs: 3, fat: 1.5 },
    aliases: ["whey scoop", "gm whey scoop", "whey"]
  },
  "energy bar": {
    perUnit: { calories: 200, protein: 20, carbs: 22, fat: 5 },
    aliases: ["energy bar"]
  }
};

const WEEK_DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const DEFAULT_TARGET = { calories: 2000, protein: 120, carbs: 220, fat: 60 };
const SLOT_ORDER = ["Pre Workout", "Breakfast", "Mid Morning", "Lunch", "Mid Evening", "Dinner"];
const SLOT_TARGET_SPLIT = {
  "Pre Workout": 0.08,
  Breakfast: 0.24,
  "Mid Morning": 0.08,
  Lunch: 0.3,
  "Mid Evening": 0.1,
  Dinner: 0.2
};
const SLOT_VARIANTS = {
  "Pre Workout": [
    ["1 banana"],
    ["2 banana 34g each"]
  ],
  Breakfast: [
    ["180 grams dosa", "0.5 cup tomato chutney", "3 egg whites", "1 whole egg", "1 whey scoop"],
    ["220 grams idli", "3 egg whites", "1 whole egg", "1 whey scoop", "50 grams sambar"],
    ["120 grams semiya upma", "3 egg whites", "1 whole egg", "1 whey scoop"]
  ],
  "Mid Morning": [
    ["1 apple"],
    ["1 guava"],
    ["1 banana", "2 amber dates"]
  ],
  Lunch: [
    ["150 grams chicken breast", "180 grams rice", "1 cup dal", "100 grams beans curry", "100 grams curd"],
    ["200 grams chicken breast", "200 grams rice", "1 cup dal", "1 cup brinjal curry", "1 cup curd"],
    ["150 grams chicken breast", "100 grams rice", "1 cup dal", "1 cup bittergourd curry", "1 cup curd"]
  ],
  "Mid Evening": [
    ["1 energy bar 200k"],
    ["1 energy bar 200k", "1 apple"]
  ],
  Dinner: [
    ["1 cup rice", "1 cup dal", "1 cup lady finger curry", "1 cup curd"],
    ["200 grams rice", "75 grams chicken breast", "1 cup brinjal curry", "100 grams curd", "10 grams ghee"],
    ["130 grams rice", "70 grams chicken breast", "100 grams bhendi curry", "100 grams rasam", "15 grams ghee", "100 grams curd"]
  ]
};

const STORAGE_KEYS = {
  targetsByDay: "macro_targets_by_day_v2",
  logs: "macro_logs_by_date_v2",
  customEntries: "macro_custom_entries_v1",
  customFoods: "macro_custom_foods_v1",
  compactMode: "macro_ui_compact_mode_v1"
};

const aliasLookup = buildAliasLookup();
let activeDate = new Date();

const targetsForm = document.getElementById("targets-form");
const targetDay = document.getElementById("target-day");
const targetMessage = document.getElementById("target-message");
const targetEditorToggle = document.getElementById("target-editor-toggle");
const logDateInput = document.getElementById("log-date");
const prevDayBtn = document.getElementById("prev-day");
const nextDayBtn = document.getElementById("next-day");
const gotoTodayBtn = document.getElementById("goto-today");
const viewBadge = document.getElementById("view-badge");

const mealForm = document.getElementById("meal-form");
const mealInput = document.getElementById("meal-input");
const mealSlot = document.getElementById("meal-slot");
const compactToggle = document.getElementById("compact-toggle");
const quickAction = document.getElementById("quick-action");
const runActionBtn = document.getElementById("run-action");
const parseMessage = document.getElementById("parse-message");
const suggestionBox = document.getElementById("suggestion-box");

const entriesContainer = document.getElementById("entries-container");
const mealGraph = document.getElementById("meal-graph");
const targetsVisual = document.getElementById("targets-visual");
const statsGrid = document.getElementById("stats-grid");
const todayHeading = document.getElementById("today-heading");

const targetCalories = document.getElementById("target-calories");
const targetProtein = document.getElementById("target-protein");
const targetCarbs = document.getElementById("target-carbs");
const targetFat = document.getElementById("target-fat");

let lastUnknownItems = [];
let isCompactMode = false;
let expandedSlot = "";
let targetEditorOpen = true;

function round(n, decimals = 1) {
  return Number(n.toFixed(decimals));
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function escapeHtml(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll("\"", "&quot;")
    .replaceAll("'", "&#39;");
}

function getMetricZone(percentComplete) {
  if (percentComplete >= 90 && percentComplete <= 110) return "zone-green";
  if ((percentComplete >= 75 && percentComplete < 90) || (percentComplete > 110 && percentComplete <= 125)) return "zone-amber";
  return "zone-red";
}

function getLocalDateKey(date = new Date()) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function getWeekDayName(date = new Date()) {
  return WEEK_DAYS[date.getDay()];
}

function parseDateKey(dateKey) {
  const [year, month, day] = dateKey.split("-").map(Number);
  if (!year || !month || !day) return new Date();
  return new Date(year, month - 1, day);
}

function getActiveDateKey() {
  return getLocalDateKey(activeDate);
}

function getActiveDayName() {
  return getWeekDayName(activeDate);
}

function isActiveToday() {
  return getActiveDateKey() === getLocalDateKey(new Date());
}

function formatActiveDateLabel() {
  return activeDate.toLocaleDateString(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric"
  });
}

function shiftActiveDate(days) {
  activeDate = new Date(activeDate.getFullYear(), activeDate.getMonth(), activeDate.getDate() + days);
}

function normalizeFood(text) {
  return text
    .toLowerCase()
    .replace(/\([^)]*\)/g, " ")
    .replace(/\bof\b/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function buildAliasLookup() {
  const map = new Map();
  Object.entries(FOOD_DB).forEach(([key, value]) => {
    map.set(key, key);
    (value.aliases || []).forEach((alias) => map.set(normalizeFood(alias), key));
  });
  return map;
}

function findFoodKey(text) {
  const norm = normalizeFood(text);
  if (!norm) return null;
  if (aliasLookup.has(norm)) return aliasLookup.get(norm);

  for (const [alias, key] of aliasLookup.entries()) {
    if (norm.includes(alias) || alias.includes(norm)) return key;
  }
  return null;
}

function macrosFromPerGram(foodKey, grams) {
  const per = FOOD_DB[foodKey].perGram;
  return {
    calories: per.calories * grams,
    protein: per.protein * grams,
    carbs: per.carbs * grams,
    fat: per.fat * grams
  };
}

function macrosFromPerUnit(foodKey, units) {
  const per = FOOD_DB[foodKey].perUnit;
  return {
    calories: per.calories * units,
    protein: per.protein * units,
    carbs: per.carbs * units,
    fat: per.fat * units
  };
}

function createEntry(foodKey, label, macros) {
  return {
    food: foodKey,
    label,
    calories: macros.calories,
    protein: macros.protein,
    carbs: macros.carbs,
    fat: macros.fat
  };
}

function parseLine(part) {
  const raw = part.trim();
  if (!raw) return { ignored: true };

  const cleaned = normalizeFood(raw);
  if (!cleaned || cleaned === "rest day") return { ignored: true };

  const customFoods = loadCustomFoods();
  const customGramsFront = cleaned.match(/^(\d+(?:\.\d+)?)\s*(g|gm|gms|grams|ml)\s*(.+)$/);
  if (customGramsFront) {
    const qty = Number(customGramsFront[1]);
    const foodKey = findCustomFoodKey(customGramsFront[3], customFoods);
    const customFood = foodKey ? customFoods[foodKey] : null;
    if (customFood?.perGram) {
      return createEntry(`custom-food:${foodKey}`, `${qty}${customGramsFront[2]} ${customFood.label || foodKey}`, {
        calories: customFood.perGram.calories * qty,
        protein: customFood.perGram.protein * qty,
        carbs: customFood.perGram.carbs * qty,
        fat: customFood.perGram.fat * qty
      });
    }
  }

  const customGramsEnd = cleaned.match(/^(.+?)\s*(\d+(?:\.\d+)?)\s*(g|gm|gms|grams|ml)$/);
  if (customGramsEnd) {
    const qty = Number(customGramsEnd[2]);
    const foodKey = findCustomFoodKey(customGramsEnd[1], customFoods);
    const customFood = foodKey ? customFoods[foodKey] : null;
    if (customFood?.perGram) {
      return createEntry(`custom-food:${foodKey}`, `${customFood.label || foodKey} ${qty}${customGramsEnd[3]}`, {
        calories: customFood.perGram.calories * qty,
        protein: customFood.perGram.protein * qty,
        carbs: customFood.perGram.carbs * qty,
        fat: customFood.perGram.fat * qty
      });
    }
  }

  const customEntries = loadCustomEntries();
  const custom = customEntries[cleaned];
  if (custom) {
    return createEntry(`custom:${cleaned}`, custom.label || raw, {
      calories: Number(custom.calories) || 0,
      protein: Number(custom.protein) || 0,
      carbs: Number(custom.carbs) || 0,
      fat: Number(custom.fat) || 0
    });
  }

  const bananaEach = cleaned.match(/^(\d+(?:\.\d+)?)\s*bananas?\s*(\d+(?:\.\d+)?)?\s*(g|gm|grams)?\s*each?$/);
  if (bananaEach) {
    const units = Number(bananaEach[1]);
    const eachWeight = Number(bananaEach[2]);
    if (Number.isFinite(eachWeight) && eachWeight > 0) {
      return createEntry("banana", `${units} banana (${eachWeight}g each)`, macrosFromPerGram("banana", units * eachWeight));
    }
    return createEntry("banana", `${units} banana`, macrosFromPerUnit("banana", units));
  }

  const energyBar = cleaned.match(/^(\d+(?:\.\d+)?)\s*energy bar\s*(\d+)?\s*k?$/);
  if (energyBar) {
    const units = Number(energyBar[1]);
    const kcal = Number(energyBar[2]);
    if (Number.isFinite(kcal) && kcal > 0) {
      return createEntry("energy bar", `${units} energy bar (${kcal} kcal each)`, {
        calories: units * kcal,
        protein: units * 20,
        carbs: units * 22,
        fat: units * 5
      });
    }
    return createEntry("energy bar", `${units} energy bar`, macrosFromPerUnit("energy bar", units));
  }

  const gramsFront = cleaned.match(/^(\d+(?:\.\d+)?)\s*(g|gm|gms|grams|ml)\s*(.+)$/);
  if (gramsFront) {
    const qty = Number(gramsFront[1]);
    const foodKey = findFoodKey(gramsFront[3]);
    if (!foodKey || !FOOD_DB[foodKey].perGram) return null;
    return createEntry(foodKey, `${qty}${gramsFront[2]} ${foodKey}`, macrosFromPerGram(foodKey, qty));
  }

  const gramsEnd = cleaned.match(/^(.+?)\s*(\d+(?:\.\d+)?)\s*(g|gm|gms|grams|ml)$/);
  if (gramsEnd) {
    const qty = Number(gramsEnd[2]);
    const foodKey = findFoodKey(gramsEnd[1]);
    if (!foodKey || !FOOD_DB[foodKey].perGram) return null;
    return createEntry(foodKey, `${foodKey} ${qty}${gramsEnd[3]}`, macrosFromPerGram(foodKey, qty));
  }

  const cups = cleaned.match(/^(\d+(?:\.\d+)?)\s*(cup|cups|dl)\s*(.+)$/);
  if (cups) {
    const qty = Number(cups[1]);
    const unit = cups[2];
    const foodKey = findFoodKey(cups[3]);
    if (!foodKey || !FOOD_DB[foodKey].perGram) return null;
    const gramsPerCup = FOOD_DB[foodKey].gramsPerCup || 200;
    const grams = unit === "dl" ? qty * 100 : qty * gramsPerCup;
    return createEntry(foodKey, `${qty} ${unit} ${foodKey}`, macrosFromPerGram(foodKey, grams));
  }

  const countGeneric = cleaned.match(/^(\d+(?:\.\d+)?)\s*(.+)$/);
  if (countGeneric) {
    const qty = Number(countGeneric[1]);
    const foodKey = findFoodKey(countGeneric[2]);
    if (!foodKey) return null;
    if (FOOD_DB[foodKey].perUnit) {
      return createEntry(foodKey, `${qty} ${countGeneric[2]}`, macrosFromPerUnit(foodKey, qty));
    }
    if (FOOD_DB[foodKey].perGram) {
      return createEntry(foodKey, `${foodKey} ${qty}g`, macrosFromPerGram(foodKey, qty));
    }
  }

  const justFood = findFoodKey(cleaned);
  if (justFood && FOOD_DB[justFood].perUnit) {
    return createEntry(justFood, `1 ${justFood}`, macrosFromPerUnit(justFood, 1));
  }

  return null;
}

function parseMealInput(text) {
  const parts = text
    .toLowerCase()
    .split(/[,;+\n]/)
    .map((p) => p.trim())
    .filter(Boolean);

  const parsed = [];
  const unknown = [];

  for (const part of parts) {
    const result = parseLine(part);
    if (result?.ignored) continue;
    if (!result) {
      unknown.push(part);
      continue;
    }
    parsed.push(result);
  }

  return { parsed, unknown };
}

function createDefaultTargetsByDay() {
  const map = {};
  WEEK_DAYS.forEach((day) => {
    map[day] = { ...DEFAULT_TARGET };
  });
  return map;
}

function sanitizeTarget(values) {
  return {
    calories: Math.max(0, Number(values.calories) || 0),
    protein: Math.max(0, Number(values.protein) || 0),
    carbs: Math.max(0, Number(values.carbs) || 0),
    fat: Math.max(0, Number(values.fat) || 0)
  };
}

function loadTargetsByDay() {
  const raw = localStorage.getItem(STORAGE_KEYS.targetsByDay);
  const defaults = createDefaultTargetsByDay();
  if (!raw) return defaults;

  try {
    const parsed = JSON.parse(raw);

    if (parsed && typeof parsed === "object" && "calories" in parsed) {
      const migrated = createDefaultTargetsByDay();
      const oneTarget = sanitizeTarget(parsed);
      WEEK_DAYS.forEach((day) => {
        migrated[day] = { ...oneTarget };
      });
      return migrated;
    }

    WEEK_DAYS.forEach((day) => {
      if (parsed[day]) {
        defaults[day] = sanitizeTarget(parsed[day]);
      }
    });
    return defaults;
  } catch {
    return defaults;
  }
}

function saveTargetsByDay(targetsByDay) {
  localStorage.setItem(STORAGE_KEYS.targetsByDay, JSON.stringify(targetsByDay));
}

function loadCustomEntries() {
  const raw = localStorage.getItem(STORAGE_KEYS.customEntries);
  if (!raw) return {};
  try {
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

function saveCustomEntries(customEntries) {
  localStorage.setItem(STORAGE_KEYS.customEntries, JSON.stringify(customEntries));
}

function loadCustomFoods() {
  const raw = localStorage.getItem(STORAGE_KEYS.customFoods);
  if (!raw) return {};
  try {
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

function saveCustomFoods(customFoods) {
  localStorage.setItem(STORAGE_KEYS.customFoods, JSON.stringify(customFoods));
}

function loadCompactMode() {
  const raw = localStorage.getItem(STORAGE_KEYS.compactMode);
  return raw === "true";
}

function saveCompactMode(value) {
  localStorage.setItem(STORAGE_KEYS.compactMode, value ? "true" : "false");
}

function applyCompactMode() {
  document.body.classList.toggle("compact-mode", isCompactMode);
  compactToggle.textContent = `Compact Mode: ${isCompactMode ? "On" : "Off"}`;
}

function applyTargetEditorState() {
  targetsForm.classList.toggle("collapsed", !targetEditorOpen);
  targetEditorToggle.textContent = targetEditorOpen ? "Hide Target Editor" : "Edit Selected Day Target";
}

function findCustomFoodKey(text, customFoods) {
  const norm = normalizeFood(text);
  if (!norm) return null;
  if (customFoods[norm]) return norm;

  const keys = Object.keys(customFoods);
  for (const key of keys) {
    if (norm.includes(key) || key.includes(norm)) return key;
  }
  return null;
}

function loadLogs() {
  const raw = localStorage.getItem(STORAGE_KEYS.logs);
  if (!raw) return {};
  try {
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

function saveLogs(logs) {
  localStorage.setItem(STORAGE_KEYS.logs, JSON.stringify(logs));
}

function getTodayEntries() {
  const logs = loadLogs();
  return logs[getActiveDateKey()] || [];
}

function setTodayEntries(entries) {
  const logs = loadLogs();
  logs[getActiveDateKey()] = entries;
  saveLogs(logs);
}

function deleteEntryByIndex(index) {
  const entries = getTodayEntries();
  if (index < 0 || index >= entries.length) return;
  entries.splice(index, 1);
  setTodayEntries(entries);
}

function clearEntriesBySlot(slotName) {
  const entries = getTodayEntries();
  const filtered = entries.filter((entry) => entry.slot !== slotName);
  setTodayEntries(filtered);
}

function computeTotals(entries) {
  return entries.reduce(
    (acc, current) => {
      if (typeof current.calories === "number") {
        acc.calories += current.calories;
        acc.protein += current.protein;
        acc.carbs += current.carbs;
        acc.fat += current.fat;
        return acc;
      }

      if (current.macrosPerGram && current.qty) {
        const factor = current.qty;
        acc.calories += current.macrosPerGram.calories * factor;
        acc.protein += current.macrosPerGram.protein * factor;
        acc.carbs += current.macrosPerGram.carbs * factor;
        acc.fat += current.macrosPerGram.fat * factor;
      }
      return acc;
    },
    { calories: 0, protein: 0, carbs: 0, fat: 0 }
  );
}

function buildStatCard(label, consumed, target) {
  const remaining = target - consumed;
  const percent = target > 0 ? (consumed / target) * 100 : 0;
  const ringPercent = clamp(percent, 0, 100);
  const zoneClass = getMetricZone(percent);
  const remainingClass = remaining >= 0 ? "remaining-ok" : "remaining-over";
  return `
    <article class="stat">
      <div class="stat-top">
        <div class="ring ${zoneClass}" style="--pct:${round(ringPercent)};">
          <div class="ring-inner ${zoneClass}">${round(percent)}%</div>
        </div>
        <h3>${label}</h3>
      </div>
      <p class="${zoneClass}">Complete: ${round(percent)}%</p>
      <p>Target: ${round(target)}</p>
      <p>Consumed: ${round(consumed)}</p>
      <p class="${remainingClass}">Left: ${round(remaining)}</p>
    </article>
  `;
}

function refreshTargetFormForDay(day, targetsByDay) {
  const selected = targetsByDay[day] || DEFAULT_TARGET;
  targetCalories.value = selected.calories;
  targetProtein.value = selected.protein;
  targetCarbs.value = selected.carbs;
  targetFat.value = selected.fat;
}

function addMealForSlot(slotName) {
  parseMessage.textContent = "";
  lastUnknownItems = [];

  const text = mealInput.value.trim();
  if (!text) {
    parseMessage.textContent = "Add at least one food item.";
    return;
  }

  const { parsed, unknown } = parseMealInput(text);
  lastUnknownItems = unknown;

  if (parsed.length === 0) {
    if (unknown.length) {
      parseMessage.textContent = `Could not parse. Use "Save Unparsed Item" for: ${unknown.join(", ")}`;
    } else {
      parseMessage.textContent = "Could not parse entries. Examples: rice 180g, 1 cup dal, 3 egg whites";
    }
    return;
  }

  const withSlot = parsed.map((item) => ({ ...item, slot: slotName }));
  const entries = getTodayEntries();
  setTodayEntries(entries.concat(withSlot));

  if (unknown.length) {
    parseMessage.textContent = `Saved ${parsed.length} item(s) to ${slotName} on ${getActiveDateKey()}. Unmatched: ${unknown.join(", ")}. Use "Save Unparsed Item".`;
  } else {
    parseMessage.textContent = `Saved ${parsed.length} item(s) to ${slotName} on ${getActiveDateKey()}.`;
  }

  mealInput.value = "";
  render();
}

function totalsFromParsed(parsed) {
  return parsed.reduce(
    (acc, item) => {
      acc.calories += item.calories || 0;
      acc.protein += item.protein || 0;
      acc.carbs += item.carbs || 0;
      acc.fat += item.fat || 0;
      return acc;
    },
    { calories: 0, protein: 0, carbs: 0, fat: 0 }
  );
}

function isHeavyOvershoot(candidateTotals, remaining, targets) {
  const calOver = candidateTotals.calories - remaining.calories;
  const proteinOver = candidateTotals.protein - remaining.protein;
  const carbsOver = candidateTotals.carbs - remaining.carbs;
  const fatOver = candidateTotals.fat - remaining.fat;

  const calLimit = Math.max(90, targets.calories * 0.06);
  const proteinLimit = Math.max(10, targets.protein * 0.08);
  const carbsLimit = Math.max(15, targets.carbs * 0.08);
  const fatLimit = Math.max(8, targets.fat * 0.1);

  return (
    calOver > calLimit ||
    proteinOver > proteinLimit ||
    carbsOver > carbsLimit ||
    fatOver > fatLimit
  );
}

function chooseSlotVariant(slotName, desired, remaining, targets) {
  const variants = SLOT_VARIANTS[slotName] || [];
  if (variants.length === 0) return null;

  const feasible = [];
  const fallback = [];

  variants.forEach((lines) => {
    const { parsed } = parseMealInput(lines.join(", "));
    const totals = totalsFromParsed(parsed);
    const score =
      Math.abs(totals.calories - desired.calories) * 1.2 +
      Math.abs(totals.protein - desired.protein) * 4 +
      Math.abs(totals.carbs - desired.carbs) * 2 +
      Math.abs(totals.fat - desired.fat) * 3;

    const item = { lines, totals, score, feasible: true };
    if (isHeavyOvershoot(totals, remaining, targets)) {
      fallback.push({ ...item, feasible: false });
      return;
    }
    feasible.push(item);
  });

  const pool = feasible.length ? feasible : fallback;
  if (!pool.length) return null;
  pool.sort((a, b) => a.score - b.score);
  return pool[0];
}

function estimateMealForSlot(slotName, entries, totals, targets) {
  const remaining = {
    calories: targets.calories - totals.calories,
    protein: targets.protein - totals.protein,
    carbs: targets.carbs - totals.carbs,
    fat: targets.fat - totals.fat
  };

  if (remaining.calories <= 0) {
    return {
      heading: `${slotName} suggestion`,
      summary: "You are already at/over calories for today. Keep this slot very light.",
      lines: ["1 cup rasam", "1 cup curd"],
      remaining
    };
  }

  const slotConsumedCalories = entries
    .filter((entry) => entry.slot === slotName)
    .reduce((sum, entry) => sum + (entry.calories || 0), 0);

  const slotBudget = targets.calories * (SLOT_TARGET_SPLIT[slotName] || 0.2);
  const slotRemainingPlan = Math.max(0, slotBudget - slotConsumedCalories);
  const suggestedCalories = clamp(Math.min(remaining.calories, Math.max(slotRemainingPlan, slotBudget * 0.7)), 120, remaining.calories);
  const desiredRatio = targets.calories > 0 ? suggestedCalories / targets.calories : 0;
  const desired = {
    calories: suggestedCalories,
    protein: targets.protein * desiredRatio,
    carbs: targets.carbs * desiredRatio,
    fat: targets.fat * desiredRatio
  };
  const picked = chooseSlotVariant(slotName, desired, remaining, targets);

  if (!picked) {
    return {
      heading: `${slotName} suggestion`,
      summary: "No pattern template available for this slot yet.",
      lines: [],
      remaining
    };
  }

  if (picked.feasible === false) {
    return {
      heading: `${slotName} suggestion`,
      summary: "Only macro-heavy options found for this slot. Consider a lighter custom entry.",
      lines: picked.lines,
      remaining
    };
  }

  return {
    heading: `${slotName} suggestion`,
    summary: `Pattern-based estimate near ${round(picked.totals.calories)} kcal for this slot.`,
    lines: picked.lines,
    remaining
  };
}

function renderSuggestion(slotName) {
  const entries = getTodayEntries();
  const totals = computeTotals(entries);
  const targetsByDay = loadTargetsByDay();
  const todayTargets = targetsByDay[getActiveDayName()] || DEFAULT_TARGET;
  const suggestion = estimateMealForSlot(slotName, entries, totals, todayTargets);

  const remaining = suggestion.remaining;
  const remainingPercent = todayTargets.calories > 0 ? (remaining.calories / todayTargets.calories) * 100 : 0;
  const zone = getMetricZone(100 - remainingPercent);

  suggestionBox.innerHTML = `
    <strong>${suggestion.heading}</strong>
    <p class="${zone}">${suggestion.summary}</p>
    <p>Remaining today: ${round(remaining.calories)} kcal, ${round(remaining.protein)}P, ${round(remaining.carbs)}C, ${round(remaining.fat)}F</p>
    <p>Try this as plain text:</p>
    <code>${escapeHtml(suggestion.lines.join(", "))}</code>
  `;

  if (suggestion.lines.length) {
    mealInput.value = suggestion.lines.join(", ");
  }
}

function getRemainingSlots(startSlot) {
  const startIndex = SLOT_ORDER.indexOf(startSlot);
  if (startIndex < 0) return SLOT_ORDER;
  return SLOT_ORDER.slice(startIndex);
}

function sumSlotWeights(slots) {
  return slots.reduce((sum, slot) => sum + (SLOT_TARGET_SPLIT[slot] || 0.2), 0);
}

function buildRemainingPlan(startSlot, entries, totals, targets) {
  const slots = getRemainingSlots(startSlot);
  const plan = [];
  const plannedTotals = { calories: 0, protein: 0, carbs: 0, fat: 0 };

  for (let index = 0; index < slots.length; index += 1) {
    const slot = slots[index];
    const slotAlreadyLogged = entries.some((entry) => entry.slot === slot);
    if (slotAlreadyLogged) continue;

    const remainingAfterPlanned = {
      calories: targets.calories - totals.calories - plannedTotals.calories,
      protein: targets.protein - totals.protein - plannedTotals.protein,
      carbs: targets.carbs - totals.carbs - plannedTotals.carbs,
      fat: targets.fat - totals.fat - plannedTotals.fat
    };

    // Stop adding meals once calorie target is reached in projected path.
    if (remainingAfterPlanned.calories <= 0) {
      break;
    }

    const pendingSlots = slots.slice(index);
    const pendingWeight = sumSlotWeights(pendingSlots);
    const slotWeight = SLOT_TARGET_SPLIT[slot] || 0.2;
    const weightRatio = pendingWeight > 0 ? slotWeight / pendingWeight : 0;
    const desired = {
      calories: Math.max(0, remainingAfterPlanned.calories) * weightRatio,
      protein: Math.max(0, remainingAfterPlanned.protein) * weightRatio,
      carbs: Math.max(0, remainingAfterPlanned.carbs) * weightRatio,
      fat: Math.max(0, remainingAfterPlanned.fat) * weightRatio
    };

    const picked = chooseSlotVariant(slot, desired, remainingAfterPlanned, targets);
    if (!picked || picked.feasible === false) break;

    plan.push({ slot, lines: picked.lines, totals: picked.totals });
    plannedTotals.calories += picked.totals.calories;
    plannedTotals.protein += picked.totals.protein;
    plannedTotals.carbs += picked.totals.carbs;
    plannedTotals.fat += picked.totals.fat;
  }

  const projected = {
    calories: totals.calories + plannedTotals.calories,
    protein: totals.protein + plannedTotals.protein,
    carbs: totals.carbs + plannedTotals.carbs,
    fat: totals.fat + plannedTotals.fat
  };

  const gap = {
    calories: targets.calories - projected.calories,
    protein: targets.protein - projected.protein,
    carbs: targets.carbs - projected.carbs,
    fat: targets.fat - projected.fat
  };

  return { plan, projected, gap, plannedTotals };
}

function gapLine(label, value, unit) {
  if (Math.abs(value) <= 5) return `<li class="zone-green">${label}: on target (${round(value)}${unit})</li>`;
  if (value > 0) return `<li class="zone-amber">${label}: short by ${round(value)}${unit}</li>`;
  return `<li class="zone-red">${label}: over by ${round(Math.abs(value))}${unit}</li>`;
}

function renderRemainingPlan(startSlot) {
  const entries = getTodayEntries();
  const totals = computeTotals(entries);
  const targetsByDay = loadTargetsByDay();
  const todayTargets = targetsByDay[getActiveDayName()] || DEFAULT_TARGET;
  const result = buildRemainingPlan(startSlot, entries, totals, todayTargets);

  const planLines = result.plan
    .map(
      (item) =>
        `<li><strong>${escapeHtml(item.slot)}:</strong> ${escapeHtml(item.lines.join(", "))} (${round(item.totals.calories)} kcal)</li>`
    )
    .join("");

  suggestionBox.innerHTML = `
    <strong>Remaining Day Plan (from ${startSlot})</strong>
    <p>Pattern-based slot plan to close remaining targets.</p>
    <ul>${planLines || "<li>No remaining plan found.</li>"}</ul>
    <p>Current logged: ${round(totals.calories)} kcal, ${round(totals.protein)}P, ${round(totals.carbs)}C, ${round(totals.fat)}F</p>
    <p>Plan adds: ${round(result.plannedTotals.calories)} kcal, ${round(result.plannedTotals.protein)}P, ${round(result.plannedTotals.carbs)}C, ${round(result.plannedTotals.fat)}F</p>
    <p>Projected if followed: ${round(result.projected.calories)} kcal, ${round(result.projected.protein)}P, ${round(result.projected.carbs)}C, ${round(result.projected.fat)}F</p>
    <p>Target gap after plan:</p>
    <ul>
      ${gapLine("Calories", result.gap.calories, " kcal")}
      ${gapLine("Protein", result.gap.protein, "g")}
      ${gapLine("Carbs", result.gap.carbs, "g")}
      ${gapLine("Fat", result.gap.fat, "g")}
    </ul>
  `;
}

function buildMacroSplit(totals) {
  const pCal = Math.max(0, totals.protein * 4);
  const cCal = Math.max(0, totals.carbs * 4);
  const fCal = Math.max(0, totals.fat * 9);
  const total = pCal + cCal + fCal || 1;
  return {
    p: (pCal / total) * 100,
    c: (cCal / total) * 100,
    f: (fCal / total) * 100
  };
}

function renderTargetsVisual(targetsByDay) {
  const maxCalories = Math.max(...WEEK_DAYS.map((day) => targetsByDay[day]?.calories || 0), 1);
  const cards = WEEK_DAYS.map((day) => {
    const target = targetsByDay[day] || DEFAULT_TARGET;
    const pct = clamp((target.calories / maxCalories) * 100, 0, 100);
    const dayClass = day === getActiveDayName() ? "day-card today" : "day-card";
    return `
      <button type="button" class="${dayClass}" data-day-card="${day}">
        <div class="mini-ring" style="--pct:${round(pct)};">
          <span>${round(target.calories)}</span>
        </div>
        <div class="day-meta">
          <strong>${day.slice(0, 3)}</strong>
          <small>${round(target.protein)}P ${round(target.carbs)}C ${round(target.fat)}F</small>
        </div>
      </button>
    `;
  }).join("");
  targetsVisual.innerHTML = cards;
}

function computeSlotTotals(entries) {
  return SLOT_ORDER.map((slot) => {
    const slotEntries = entries.filter((entry) => (entry.slot || "Lunch") === slot);
    return { slot, totals: computeTotals(slotEntries), count: slotEntries.length };
  });
}

function renderMealGraph(entries) {
  const slotTotals = computeSlotTotals(entries);
  const maxMacro = Math.max(
    1,
    ...slotTotals.flatMap((s) => [s.totals.protein || 0, s.totals.carbs || 0, s.totals.fat || 0])
  );

  const cards = slotTotals
    .map(({ slot, totals, count }) => {
      const pH = round((Math.max(0, totals.protein || 0) / maxMacro) * 88);
      const cH = round((Math.max(0, totals.carbs || 0) / maxMacro) * 88);
      const fH = round((Math.max(0, totals.fat || 0) / maxMacro) * 88);
      const selected = slot === expandedSlot ? "graph-slot selected" : "graph-slot";
      return `
        <button type="button" class="${selected}" data-action="select-slot" data-slot="${escapeHtml(slot)}">
          <div class="graph-bars">
            <span class="bar p" style="height:${pH}px" title="Protein ${round(totals.protein || 0)}g"></span>
            <span class="bar c" style="height:${cH}px" title="Carbs ${round(totals.carbs || 0)}g"></span>
            <span class="bar f" style="height:${fH}px" title="Fat ${round(totals.fat || 0)}g"></span>
          </div>
          <div class="graph-label">${slot}<br>${round(totals.calories || 0)} kcal${count ? ` | ${count} item(s)` : ""}</div>
        </button>
      `;
    })
    .join("");

  mealGraph.innerHTML = `
    <p class="hint">Macro Graph by Slot (x-axis: meal slot, y-axis: macro grams). Click a slot to expand details.</p>
    <div class="graph-grid">${cards}</div>
  `;
}

function renderEntriesTable(entries, dayTotals) {
  if (!entries.length) {
    entriesContainer.innerHTML = "<p class=\"entries-empty\">No entries yet for today.</p>";
    return;
  }

  const grouped = new Map();
  SLOT_ORDER.forEach((slot) => grouped.set(slot, []));
  entries.forEach((entry, index) => {
    const slot = entry.slot || "Lunch";
    if (!grouped.has(slot)) grouped.set(slot, []);
    grouped.get(slot).push({ ...entry, index });
  });

  const cards = [];
  grouped.forEach((items, slot) => {
    if (!items.length) return;
    const slotTotals = computeTotals(items);
    const split = buildMacroSplit(slotTotals);
    const dayShare = dayTotals.calories > 0 ? (slotTotals.calories / dayTotals.calories) * 100 : 0;
    const expanded = expandedSlot === slot;
    const cardClass = expanded ? "slot-card expanded" : "slot-card";
    const rows = items
      .map(
        (item) => `
          <li class="item-row">
            <div>
              <strong>${escapeHtml(item.label || item.food || "")}</strong>
              <span>${round(item.calories || 0)} kcal | ${round(item.protein || 0)}P ${round(item.carbs || 0)}C ${round(item.fat || 0)}F</span>
            </div>
            <div class="cell-actions">
              <button type="button" class="mini-btn edit" data-action="edit" data-index="${item.index}">Edit</button>
              <button type="button" class="mini-btn delete" data-action="delete" data-index="${item.index}">Delete</button>
            </div>
          </li>
        `
      )
      .join("");

    cards.push(`
      <article class="${cardClass}">
        <div class="slot-head">
          <h3>${escapeHtml(slot)}</h3>
          <div class="cell-actions">
            <span class="slot-meta">${round(slotTotals.calories)} kcal | ${round(dayShare)}% of day</span>
            <button type="button" class="mini-btn edit" data-action="toggle-slot" data-slot="${escapeHtml(slot)}">${expanded ? "Collapse" : "Expand"}</button>
            <button type="button" class="mini-btn delete" data-action="clear-slot" data-slot="${escapeHtml(slot)}">Clear Slot</button>
          </div>
        </div>
        <div class="macro-line">
          <span class="pill p">P ${round(slotTotals.protein)}g</span>
          <span class="pill c">C ${round(slotTotals.carbs)}g</span>
          <span class="pill f">F ${round(slotTotals.fat)}g</span>
        </div>
        <div class="split-bar">
          <span class="p-seg" style="width:${round(split.p)}%"></span>
          <span class="c-seg" style="width:${round(split.c)}%"></span>
          <span class="f-seg" style="width:${round(split.f)}%"></span>
        </div>
        <ul class="item-list">${rows}</ul>
      </article>
    `);
  });

  entriesContainer.innerHTML = cards.join("");
}

function render() {
  const entries = getTodayEntries();
  const totals = computeTotals(entries);
  const targetsByDay = loadTargetsByDay();
  const todayTargets = targetsByDay[getActiveDayName()] || DEFAULT_TARGET;

  todayHeading.textContent = `Viewing: ${formatActiveDateLabel()} (${getActiveDayName()})`;
  viewBadge.textContent = isActiveToday() ? "Today View" : "Historical View";
  logDateInput.value = getActiveDateKey();
  renderEntriesTable(entries, totals);
  renderMealGraph(entries);
  renderTargetsVisual(targetsByDay);

  statsGrid.innerHTML = [
    buildStatCard("Calories", totals.calories, todayTargets.calories),
    buildStatCard("Protein (g)", totals.protein, todayTargets.protein),
    buildStatCard("Carbs (g)", totals.carbs, todayTargets.carbs),
    buildStatCard("Fat (g)", totals.fat, todayTargets.fat)
  ].join("");

  const selectedDay = targetDay.value || getActiveDayName();
  refreshTargetFormForDay(selectedDay, targetsByDay);
  applyTargetEditorState();

  if (!suggestionBox.innerHTML.trim()) {
    suggestionBox.innerHTML = "Click \"Suggest Meal For Slot\" or \"Suggest Remaining Day Plan\" to generate pattern-based estimates.";
  }
}

function editEntryByIndex(index) {
  const entries = getTodayEntries();
  const existing = entries[index];
  if (!existing) return;

  const initial = existing.label || existing.food || "";
  const userText = window.prompt("Edit this item (plain text):", initial);
  if (userText === null) return;

  const { parsed, unknown } = parseMealInput(userText);
  if (unknown.length || parsed.length !== 1) {
    parseMessage.textContent = "Edit failed. Enter exactly one parseable item (e.g. rice 150g).";
    return;
  }

  entries[index] = { ...parsed[0], slot: existing.slot };
  setTodayEntries(entries);
  parseMessage.textContent = "Entry updated.";
  render();
}

function saveUnknownAsCustom() {
  if (!lastUnknownItems.length) {
    parseMessage.textContent = "No unparsed item found. Try logging a meal first.";
    return;
  }

  let phrase = lastUnknownItems[0];
  if (lastUnknownItems.length > 1) {
    const chosen = window.prompt(
      `Choose one unparsed item to save exactly as shown:\n${lastUnknownItems.join("\n")}`,
      lastUnknownItems[0]
    );
    if (!chosen) return;
    phrase = chosen.trim();
  }

  const key = normalizeFood(phrase);
  if (!key) return;

  const gramsFront = key.match(/^(\d+(?:\.\d+)?)\s*(g|gm|gms|grams|ml)\s*(.+)$/);
  const gramsEnd = key.match(/^(.+?)\s*(\d+(?:\.\d+)?)\s*(g|gm|gms|grams|ml)$/);
  const gramsMatch = gramsFront
    ? { qty: Number(gramsFront[1]), name: normalizeFood(gramsFront[3]) }
    : gramsEnd
      ? { qty: Number(gramsEnd[2]), name: normalizeFood(gramsEnd[1]) }
      : null;

  const calories = Number(window.prompt(`Calories for "${phrase}" (for the entered quantity):`, "100"));
  const protein = Number(window.prompt(`Protein (g) for "${phrase}":`, "5"));
  const carbs = Number(window.prompt(`Carbs (g) for "${phrase}":`, "10"));
  const fat = Number(window.prompt(`Fat (g) for "${phrase}":`, "3"));

  if (![calories, protein, carbs, fat].every((x) => Number.isFinite(x) && x >= 0)) {
    parseMessage.textContent = "Invalid values. Custom item not saved.";
    return;
  }

  if (gramsMatch && Number.isFinite(gramsMatch.qty) && gramsMatch.qty > 0 && gramsMatch.name) {
    const customFoods = loadCustomFoods();
    customFoods[gramsMatch.name] = {
      label: gramsMatch.name,
      perGram: {
        calories: calories / gramsMatch.qty,
        protein: protein / gramsMatch.qty,
        carbs: carbs / gramsMatch.qty,
        fat: fat / gramsMatch.qty
      }
    };
    saveCustomFoods(customFoods);
    parseMessage.textContent = `Saved "${gramsMatch.name}" as custom per-gram food. You can now log any quantity, e.g. ${gramsMatch.name} 15g.`;
    return;
  }

  const customEntries = loadCustomEntries();
  customEntries[key] = { label: phrase, calories, protein, carbs, fat };
  saveCustomEntries(customEntries);

  parseMessage.textContent = `Saved custom fixed item for "${phrase}". You can log it directly next time.`;
}

targetsForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const day = targetDay.value;
  const targetsByDay = loadTargetsByDay();
  targetsByDay[day] = sanitizeTarget({
    calories: targetCalories.value,
    protein: targetProtein.value,
    carbs: targetCarbs.value,
    fat: targetFat.value
  });
  saveTargetsByDay(targetsByDay);
  targetMessage.textContent = `${day} target saved.`;
  render();
});

logDateInput.addEventListener("change", () => {
  if (!logDateInput.value) return;
  activeDate = parseDateKey(logDateInput.value);
  targetDay.value = getActiveDayName();
  render();
});

prevDayBtn.addEventListener("click", () => {
  shiftActiveDate(-1);
  targetDay.value = getActiveDayName();
  render();
});

nextDayBtn.addEventListener("click", () => {
  shiftActiveDate(1);
  targetDay.value = getActiveDayName();
  render();
});

gotoTodayBtn.addEventListener("click", () => {
  activeDate = new Date();
  targetDay.value = getActiveDayName();
  render();
});

targetDay.addEventListener("change", () => {
  const targetsByDay = loadTargetsByDay();
  refreshTargetFormForDay(targetDay.value, targetsByDay);
  targetEditorOpen = true;
  targetMessage.textContent = "";
  applyTargetEditorState();
});

targetsVisual.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLElement)) return;
  const day = target.closest("[data-day-card]")?.getAttribute("data-day-card");
  if (!day) return;
  targetDay.value = day;
  const targetsByDay = loadTargetsByDay();
  refreshTargetFormForDay(day, targetsByDay);
  targetEditorOpen = true;
  targetMessage.textContent = `${day} selected.`;
  render();
});

targetEditorToggle.addEventListener("click", () => {
  targetEditorOpen = !targetEditorOpen;
  applyTargetEditorState();
});

mealForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addMealForSlot(mealSlot.value);
});

runActionBtn.addEventListener("click", () => {
  const action = quickAction.value;
  if (action === "suggest-slot") {
    renderSuggestion(mealSlot.value);
    return;
  }
  if (action === "suggest-plan") {
    renderRemainingPlan(mealSlot.value);
    return;
  }
  if (action === "save-unparsed") {
    saveUnknownAsCustom();
    return;
  }
  if (action === "clear-slot") {
    if (!isActiveToday()) {
      const ok = window.confirm(`Clear "${mealSlot.value}" entries for ${getActiveDateKey()}?`);
      if (!ok) return;
    }
    clearEntriesBySlot(mealSlot.value);
    parseMessage.textContent = `Cleared ${mealSlot.value} entries for ${getActiveDateKey()}.`;
    render();
    return;
  }
  if (action === "clear-day") {
    if (!isActiveToday()) {
      const ok = window.confirm(`Clear all entries for ${getActiveDateKey()}?`);
      if (!ok) return;
    }
    setTodayEntries([]);
    parseMessage.textContent = `Cleared entries for ${getActiveDateKey()}.`;
    suggestionBox.innerHTML = "";
    render();
  }
});

compactToggle.addEventListener("click", () => {
  isCompactMode = !isCompactMode;
  saveCompactMode(isCompactMode);
  applyCompactMode();
});

entriesContainer.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLElement)) return;

  const action = target.dataset.action;
  if (!action) return;

  if (action === "delete") {
    const index = Number(target.dataset.index);
    if (Number.isInteger(index)) {
      deleteEntryByIndex(index);
      parseMessage.textContent = "Entry deleted.";
      render();
    }
    return;
  }

  if (action === "edit") {
    const index = Number(target.dataset.index);
    if (Number.isInteger(index)) {
      editEntryByIndex(index);
    }
    return;
  }

  if (action === "clear-slot") {
    const slot = target.dataset.slot;
    if (slot) {
      if (!isActiveToday()) {
        const ok = window.confirm(`Clear "${slot}" entries for ${getActiveDateKey()}?`);
        if (!ok) return;
      }
      clearEntriesBySlot(slot);
      parseMessage.textContent = `Cleared ${slot} entries for ${getActiveDateKey()}.`;
      render();
    }
    return;
  }

  if (action === "toggle-slot") {
    const slot = target.dataset.slot;
    if (!slot) return;
    expandedSlot = expandedSlot === slot ? "" : slot;
    render();
  }
});

mealGraph.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLElement)) return;
  const slot = target.closest("[data-action='select-slot']")?.getAttribute("data-slot");
  if (!slot) return;
  expandedSlot = expandedSlot === slot ? "" : slot;
  render();
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", async () => {
    const isLocal =
      location.hostname === "localhost" ||
      location.hostname === "127.0.0.1" ||
      location.hostname === "::1";

    if (isLocal) {
      const regs = await navigator.serviceWorker.getRegistrations();
      await Promise.all(regs.map((reg) => reg.unregister()));
      if ("caches" in window) {
        const keys = await caches.keys();
        await Promise.all(keys.map((key) => caches.delete(key)));
      }
      return;
    }

    const SW_VERSION = "2026-02-12-v3";
    navigator.serviceWorker
      .register(`./sw.js?v=${SW_VERSION}`)
      .then((reg) => reg.update())
      .catch(() => {});
  });
}

isCompactMode = loadCompactMode();
applyCompactMode();
targetEditorOpen = window.matchMedia("(max-width: 720px)").matches ? false : true;
applyTargetEditorState();
targetDay.value = getActiveDayName();
logDateInput.value = getActiveDateKey();
render();
