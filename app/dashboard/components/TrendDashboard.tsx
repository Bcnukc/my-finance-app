import Trend from "@/components/Trend";
import React from "react";

type type = "Income" | "Investment" | "Saving" | "Expense";

interface TrendData {
  amount: number;
  prevAmount: number;
}

interface TrendDashboardProps {
  type: type;
}

const TrendDashboard: React.FC<TrendDashboardProps> = async ({ type }) => {
  const response = await fetch(`http://localhost:3100/trends/${type}`);

  const { amount, prevAmount }: TrendData = await response.json();

  return <Trend type={type} amount={amount} prevAmount={prevAmount} />;
};

export default TrendDashboard;
