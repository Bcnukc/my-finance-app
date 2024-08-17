import Skeleton from "@/components/Skeleton";

const TransactionListFallback = () => {
  return (
    <div className="space-y-8">
      <div className=" space-y-4">
        <TransactionSummaryItemSkeletton />
        <TransactionItemSkeleton />
        <TransactionItemSkeleton />
        <TransactionItemSkeleton />
        <TransactionItemSkeleton />
      </div>
      <div className="space-y-4">
        <TransactionSummaryItemSkeletton />
        <TransactionItemSkeleton />
        <TransactionItemSkeleton />
        <TransactionItemSkeleton />
        <TransactionItemSkeleton />
      </div>
    </div>
  );
};

const TransactionItemSkeleton = () => {
  return (
    <div className="w-full flex items-center space-x-4">
      <div className="flex items-center mr-4 grow">
        <Skeleton />
      </div>
      <div className="min-w-[150px] items-center hidden md:flex">
        <Skeleton />
      </div>
      <div className="min-w-[70px] text-right">
        <Skeleton />
      </div>
      <div className="min-w-[50px] flex justify-end">
        <Skeleton />
      </div>
    </div>
  );
};

const TransactionSummaryItemSkeletton = () => {
  return (
    <>
      <div className=" flex space-x-4">
        <div className="grow">
          <Skeleton />
        </div>
        <div className="min-w-[70px] ">
          <Skeleton />
        </div>

        <div className="min-w-[50px]"></div>
      </div>
    </>
  );
};

export default TransactionListFallback;
