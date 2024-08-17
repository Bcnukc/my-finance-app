import PageHeader from "@/components/PageHeader";
import TransactionItems from "@/components/TransactionItem";
import Trend from "@/components/Trend";
import React from "react";
import TransactionSummaryItem from "@/components/TransactionSummaryItem";
import Button from "@/components/Button";
import Label from "@/components/Label";
import Input from "@/components/Input";
import Select from "@/components/Select";
import Separator from "@/components/Separator";
import Skeleton from "@/components/Skeleton";

const Page: React.FC = () => {
  return (
    <main className="space-y-8 mb-44">
      <h1 className="text-4xl mt-8">playground</h1>
      <div>
        <h2 className="mb-4 text-lg font-mono">PageHeader</h2>
        <Separator />
        <div>
          <PageHeader />
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-lg font-mono">Trend</h2>
        <Separator />
        <div className="flex space-x-4">
          <Trend type="Income" amount={1000} prevAmount={200} />
          <Trend type="Expense" amount={1700} prevAmount={200} />
          <Trend type="Investment" amount={1000} prevAmount={200000} />
          <Trend type="Saving" amount={1000} prevAmount={200} />
        </div>

        <div>
          <h2 className="mb-4 text-lg font-mono">TransactionItems</h2>
          <Separator />
          <div className=""></div>
          <TransactionItems
            type="Income"
            category=""
            description="salary"
            amount={2000}
          />
          <TransactionItems
            type="Expense"
            category="Food"
            description="Going out to eat"
            amount={29}
          />
          <TransactionItems
            type="Investment"
            category="In Microsoft"
            description="In Microsoft"
            amount={9000}
          />
          <TransactionItems
            type="Saving"
            category=""
            description="For children"
            amount={500}
          />
        </div>

        <div>
          <h2 className="mb-4 text-lg font-mono">
            TransactionSummaryItems + TransactionItems
          </h2>

          <div className=""></div>

          <TransactionSummaryItem date="2025-05-01" amount={200} />
          <Separator />
          <TransactionItems
            type="Income"
            category=""
            description="salary"
            amount={2000}
          />
          <TransactionItems
            type="Expense"
            category="Food"
            description="Going out to eat"
            amount={29}
          />
          <TransactionItems
            type="Investment"
            category="In Microsoft"
            description="In Microsoft"
            amount={9000}
          />
          <TransactionItems
            type="Saving"
            category=""
            description="For children"
            amount={500}
          />
        </div>

        <div>
          <h2 className="mb-4 text-lg font-mono">Button</h2>
          <hr className="mb-4 border-gray-200  dark:border-gray-800"></hr>
          <div className="space-x-4">
            <Button>Hello</Button>
            <Button variant="outline">Hello</Button>
            <Button variant="ghost">Hello</Button>
            <Button size="xs">Hello</Button>
            <Button size="sm">Hello</Button>
            <Button size="lg">Hello</Button>
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-lg font-mono">Form</h2>
          <Separator />
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label className="mb-1">Your Name</Label>
              <Input type="text" placeholder="Type something in here.." />
            </div>

            <div>
              <Label className="mb-1">City</Label>
              <Select>
                <option>Kathamandu</option>
                <option>Jhapa</option>
                <option>Pokhara</option>
              </Select>
            </div>
            <div className="flex items-center">
              <Input type="checkbox" id="terms" />
              <Label className="ml-2" htmlFor="terms">
                Accept the terms
              </Label>
            </div>
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-lg font-mono">Loading Skeleton</h2>
          <Separator />
          <div className="space-y-8">
            <div className="flex space-x-4">
              <Skeleton />
              <Skeleton />
              <Skeleton />
            </div>
            <div className="space-y-4">
              <Skeleton />
              <Skeleton />
              <Skeleton />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
