import TransactionForm from "../../components/TransactionForm";

export const metadata = {
  title: "Add transaction",
};

const Page = () => {
  return (
    <>
      <h1 className="text-4xl font-semibold mb-8"> Add Transaction</h1>
      <TransactionForm />
    </>
  );
};

export default Page;
