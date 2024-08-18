import { Suspense } from "react";
import TransactionList from "@/app/dashboard/components/transaction-list";
import TransactionListFallback from "@/app/dashboard/components/TransactionListFallback";
import TrendDashboard from "./components/TrendDashboard";
import TrendFallback from "./components/TrendFallback";
import Link from "next/link";
import { PlusCircle } from "lucide-react";
import { sizes, variants } from "@/lib/Variants";

const Page = () => {
  return (
    <>
      <section className="mb-8">
        <h1 className="text-4xl font-semibold">Summary</h1>
      </section>

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

      <section className="flex justify-between items-center mb-8">
        <h2 className="text-2xl">Transactions</h2>
        <Link
          href="/dashboard/transaction/add"
          className={`flex items-center space-x-1 ${variants["outline"]} ${sizes["sm"]}`}
        >
          <PlusCircle className="w-4 h-4" />
          <div>Add</div>
        </Link>
      </section>

      <Suspense fallback={<TransactionListFallback />}>
        <TransactionList />
      </Suspense>
    </>
  );
};

export default Page;
