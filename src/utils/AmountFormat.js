
export function formatAmount(amount) {
  if (isNaN(amount)) return "0,00";
  const fixedAmount = (Math.round((Number(amount) + Number.EPSILON) * 100) / 100).toFixed(2);

  return fixedAmount
    .replace(".", ",")
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
