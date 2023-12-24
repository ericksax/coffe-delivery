export function TransformCurrency(amount: number) {
  return amount.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
}
