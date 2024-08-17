import { useMemo } from "react";

const useFormatCurrency = (amount: number) => {
  return useMemo(() => {
    return new Intl.NumberFormat("en-NP", {
      style: "currency",
      currency: "NPR",
      currencyDisplay: "symbol",
    }).format(amount);
  }, [amount]);
};

export default useFormatCurrency;
