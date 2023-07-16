"use client";

import React from "react";
import axios from "axios";
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { points3 } from "@/lib/points3";

const Model3 = () => {
  const [loading, setLoading] = useState(false);
  const [predict, setPredict] = useState("No value");

  const formSchema = z.object({
    age: z.coerce.number(),
    dependent_persons_count: z.coerce.number(),
    education: z.string(),
    income_range: z.string(),
    card_type: z.string(),
    time: z.coerce.number(),
    count: z.coerce.number(),
    last_two_month_activate: z.coerce.number(),
    last_relation: z.coerce.number(),
    credit_limit: z.coerce.number(),
    balance: z.coerce.number(),
    purchase_ratio: z.coerce.number(),
    four_to_1: z.coerce.number(),
    toplam__amount: z.coerce.number(),
    operation_count: z.coerce.number(),
    toplam_count_4_1: z.coerce.number(),
    user_ratio: z.coerce.number(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      age: 0,
      dependent_persons_count: 0,
      education: "",
      income_range: "",
      card_type: "",
      time: 0,
      count: 0,
      last_two_month_activate: 0,
      last_relation: 0,
      credit_limit: 0,
      balance: 0,
      purchase_ratio: 0,
      four_to_1: 0,
      toplam__amount: 0,
      operation_count: 0,
      toplam_count_4_1: 0,
      user_ratio: 0,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setLoading(true);
      const res = await axios.post(
        "http://10.30.0.27:8081/predict_credit",
        values
      );
      // setPredict(res.data);
      window.scrollTo({ top: 0, behavior: "smooth" });
      console.log(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container p-10">
      <div className="flex flex-col md:flex-row">
        <div className="flex-1 order-1 md:order-2">
          <h1 className="text-3xl font-semibold">Output: </h1>
          <span className="inline-block text-3xl py-10">{predict}</span>
        </div>
        <div className="flex-1 order-2 md:order-1">
          <h1 className="text-3xl font-semibold pb-2">Enter data points</h1>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {points3.map((item) => (
                <FormField
                  key={item.id}
                  control={form.control}
                  name={item.point}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg">
                        Point {item.point}
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="w-[70%] shadow-sm"
                          type="number"
                          disabled={loading}
                          placeholder="Enter point"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ))}
              <Button disabled={loading} type="submit">
                See result
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Model3;
