export function formatMoney(amount: number, currency = 'USD', locale = 'en-US'): string {
  return new Intl.NumberFormat(locale, {
    currency,
    minimumFractionDigits: 0,
  }).format(amount);
}
