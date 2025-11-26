export const formatPrice = (value: number | string) => {
  const val = typeof value === 'string' ? Number(value) : value;

  const price = new Intl.NumberFormat('pt-PT', {
    style: 'currency',
    currency: 'AOA',
    maximumFractionDigits: 2,
  }).format(val);

  return price;
};
