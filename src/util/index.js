export const moneyFormat = (value = 0) =>
  value.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL'
  });
