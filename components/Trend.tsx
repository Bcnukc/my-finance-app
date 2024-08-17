import React from "react";
import { useMemo } from "react";
import { ArrowDownLeft, ArrowUpRight } from "lucide-react";
import useFormatCurrency from "@/ hooks/useFormatCurrency";

type TrendType = "Income" | "Expense" | "Investment" | "Saving";

type TrendProps = {
  type: TrendType;
  amount: number;
  prevAmount: number;
};

const Trend: React.FC<TrendProps> = ({ type, amount, prevAmount }) => {
  const formatCurrency = useFormatCurrency(amount);

  const colorClasses = {
    Income: "text-green-700 dark:text-green-300",
    Expense: "text-red-700 dark:text-red-300",
    Investment: "text-indigo-700 dark:text-indigo-300",
    Saving: "text-yellow-700 dark:text-yellow-300",
  };

  const calcPercentageChange = (current: number, previous: number): number =>
    previous === 0 ? 0 : ((current - previous) / previous) * 100;

  const percentageChange = useMemo(
    () => calcPercentageChange(amount, prevAmount),
    [amount, prevAmount]
  );

  return (
    <div>
      <div className={`font-semibold ${colorClasses[type]}`}>{type}</div>
      <div className="text-2xl font-semibold text-black dark:text-white mb-2">
        {formatCurrency}
      </div>
      <div className="flex space-x-1 items-center text-sm">
        {percentageChange < 0 && (
          <ArrowDownLeft className="text-red-700 dark:text-red-300" />
        )}
        {percentageChange > 0 && (
          <ArrowUpRight className="text-green-700 dark:text-green-300" />
        )}
        <div>{percentageChange} % vs last period</div>
      </div>
    </div>
  );
};

export default Trend;
