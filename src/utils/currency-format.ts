const currencyFormat = (price: number) => {
  const currency = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "brl",
  });

  return currency.format(price);
};

export default currencyFormat;
