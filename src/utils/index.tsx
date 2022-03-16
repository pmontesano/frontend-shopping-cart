export const sumFunc = (accumulator: number, curr: number) =>
  accumulator + curr;

export const getQuantity = (array: any) =>
  array.map((p: any) => p.quantity.qty);

export const getTotal = (array: any) =>
  array.map((p: any) => p.price.amount * p.quantity.qty);

export const formatPrice = (num: number) => {
  return `${num}€`;
};
