import { Suspense } from "react";
import TransactionList from "@/app/dashboard/components/transaction-list";
import TransactionListFallback from "@/app/dashboard/components/TransactionListFallback";
import TrendDashboard from "./components/TrendDashboard";
import TrendFallback from "./components/TrendFallback";
const Page = () => {
  return (
    <>
      <section className="mb-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
        <Suspense fallback={<TrendFallback />}>
          <TrendDashboard type="Income" />
        </Suspense>
        <Suspense fallback={<TrendFallback />}>
          <TrendDashboard type="Expense" />
        </Suspense>
        <Suspense fallback={<TrendFallback />}>
          <TrendDashboard type="Saving" />
        </Suspense>
        <Suspense fallback={<TrendFallback />}>
          <TrendDashboard type="Investment" />
        </Suspense>
      </section>

      <Suspense fallback={<TransactionListFallback />}>
        <TransactionList />
      </Suspense>
    </>
  );
};

export default Page;
