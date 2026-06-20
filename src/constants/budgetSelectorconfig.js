export const budgetLevels = {
  "₹": { api: "PRICE_LEVEL_INEXPENSIVE", label: "Budget", rank: 1 },
  "₹₹": { api: "PRICE_LEVEL_MODERATE", label: "Moderate", rank: 2 },
  "₹₹₹": { api: "PRICE_LEVEL_EXPENSIVE", label: "Premium", rank: 3 },
  "₹₹₹₹": { api: "PRICE_LEVEL_VERY_EXPENSIVE", label: "Luxury", rank: 4 },
};

// Reverse lookup: API string -> rank, needed because results come back
// from Google as the API string, not as your tier key.
export const priceLevelRank = {
  PRICE_LEVEL_FREE: 0,
  PRICE_LEVEL_INEXPENSIVE: 1,
  PRICE_LEVEL_MODERATE: 2,
  PRICE_LEVEL_EXPENSIVE: 3,
  PRICE_LEVEL_VERY_EXPENSIVE: 4,
};