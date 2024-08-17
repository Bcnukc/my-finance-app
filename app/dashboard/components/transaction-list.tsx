import Separator from "@/components/Separator";
import TransactionItem, { TransactionType } from "@/components/TransactionItem";
import TransactionSummaryItem from "@/components/TransactionSummaryItem";

interface Transaction {
  id: string | number;
  type: TransactionType;
  category: string;
  description: string;
  amount: number;
  created_at: string;
}

interface GroupedTransactions {
  [date: string]: {
    transactions: Transaction[];
    amount: number;
  };
}

const groupAndSumTransactionByDate = (
  transactions: Transaction[]
): GroupedTransactions => {
  const grouped: GroupedTransactions = {};

  for (const transaction of transactions) {
    const date = transaction.created_at.split("T")[0];
    if (!grouped[date]) {
      grouped[date] = { transactions: [], amount: 0 };
    }
    grouped[date].transactions.push(transaction);
    const amount =
      transaction.type === "Expense" ? -transaction.amount : transaction.amount;
    grouped[date].amount += amount;
  }

  return grouped;
};

const TransactionList = async () => {
  const response = await fetch("http://localhost:3100/transactions", {
    cache: "no-store",
  });

  const transactions: Transaction[] = await response.json();

  const grouped = groupAndSumTransactionByDate(transactions);

  return (
    <div className="space-y-8">
      {Object.entries(grouped).map(([date, { transactions, amount }]) => (
        <div key={date}>
          <TransactionSummaryItem date={date} amount={amount} />
          <Separator />
          <section className="space-y-4">
            {transactions.map((transaction) => (
              <div key={transaction.id}>
                <TransactionItem {...transaction} />
              </div>
            ))}
          </section>
        </div>
      ))}
    </div>
  );
};

export default TransactionList;
