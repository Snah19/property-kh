const getRateDisplay = (rates) => {
  if (rates.nightly) return `$${rates.nightly.toLocaleString()}/night`;
  if (rates.weekly) return `$${rates.weekly.toLocaleString()}/week`;
  if (rates.monthly) return `$${rates.monthly.toLocaleString()}/month`;
};

export default getRateDisplay;