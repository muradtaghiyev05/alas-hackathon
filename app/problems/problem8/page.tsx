"use client";

import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const Problem8 = () => {
  const [answer, setAnswer] = useState(1);

  const formSchema = z.object({
    num: z.coerce.number().min(2),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      num: 2,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const fibonacci = (n: number) => {
      let a = 0,
        b = 1,
        c = n;

      for (let i = 2; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
      }

      return c;
    };
    setAnswer(fibonacci(values.num));
  };

  return (
    <div>
      <div className="container p-10">
        <h1 className="text-3xl mb-3">
          Problem 8 - Get the Fibonacci sequence
        </h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="num"
              render={({ field }) => (
                <>
                  <FormItem>
                    <FormLabel>Number</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        required
                        placeholder="Enter number..."
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Please enter the number to get the Fibonacci sequence.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                </>
              )}
            />
            <Button type="submit">See result</Button>
          </form>
        </Form>
        <div className="mt-4 text-xl font-bold">Answer: {answer}</div>
      </div>
    </div>
  );
};

export default Problem8;
