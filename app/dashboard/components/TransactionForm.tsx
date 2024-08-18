"use client";

import Input from "@/components/Input";
import Label from "@/components/Label";
import Select from "@/components/Select";
import Button from "@/components/Button";
import { types, categories } from "@/lib/consts";
import { SubmitHandler, useForm } from "react-hook-form";
import React from "react";
import { z } from "zod";
import { transactionSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";

type FormData = z.infer<typeof transactionSchema>;

const TransactionForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(transactionSchema),
  });

  const onSubmit: SubmitHandler<FormData> = (data) => console.log(data);

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label className="mb-1">Type</Label>
          <Select {...register("type")}>
            {types.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </Select>
        </div>

        <div>
          <Label className="mb-1">Category</Label>
          <Select {...register("category")}>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </Select>
        </div>

        <div>
          <Label className="mb-1"> Date</Label>
          <Input
            {...register("created_at", {
              required: "The date is required",
            })}
          />
          {errors.created_at && (
            <p className="mt-1 text-red-500">{errors.created_at.message}</p>
          )}
        </div>

        <div>
          <Label className="mb-1"> Amount</Label>
          <Input type="number" {...register("amount")} />
          {errors.amount && (
            <p className="mt-1 text-red-500">{errors.amount.message}</p>
          )}
        </div>

        <div className="col-span-1 md:col-span-2">
          <Label className="mb-1"> Description</Label>
          <Input {...register("description")} />
        </div>
        {errors.description && (
          <p className="mt-1 text-red-500">{errors.description.message}</p>
        )}
      </div>

      <div className="flex justify-end">
        <Button type="submit">Save</Button>
      </div>
    </form>
  );
};

export default TransactionForm;
