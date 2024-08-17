import useFormatCurrency from "@/ hooks/useFormatCurrency";
import React from "react";

interface TransactionSummaryItemProps {
  date: string;
  amount: number;
}

const TransactionSummaryItem: React.FC<TransactionSummaryItemProps> = ({
  date,
  amount,
}) => {
  const formattedCurrency = useFormatCurrency(amount);
  return (
    <>
      <div className=" flex text-gray-500 dark:text-gray-400 font-semibold">
        <div className="grow">{date}</div>
        <div className="min-w-[70px] text-right font-semibold">
          {formattedCurrency}
        </div>

        <div className="min-w-[50px]"></div>
      </div>
    </>
  );
};

export default TransactionSummaryItem;
