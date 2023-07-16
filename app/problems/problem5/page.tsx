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

const Problem5 = () => {
  const [answer, setAnswer] = useState(1);

  const formSchema = z.object({
    num1: z.coerce.number(),
    num2: z.coerce.number(),
    num3: z.coerce.number(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      num1: 1,
      num2: 1,
      num3: 1,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const arr = [values.num1, values.num2, values.num3];
    setAnswer(Math.max(...arr));
  };

  return (
    <div>
      <div className="container p-10">
        <h1 className="text-3xl mb-3">Problem 5 - Find the biggest number</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="num1"
              render={({ field }) => (
                <>
                  <FormItem>
                    <FormLabel>Number 1</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        required
                        placeholder="Enter number 1..."
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Please enter the first number.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                </>
              )}
            />
            <FormField
              control={form.control}
              name="num2"
              render={({ field }) => (
                <>
                  <FormItem>
                    <FormLabel>Number 2</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        required
                        placeholder="Enter number 2..."
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Please enter the second number.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                </>
              )}
            />
            <FormField
              control={form.control}
              name="num3"
              render={({ field }) => (
                <>
                  <FormItem>
                    <FormLabel>Number 3</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        required
                        placeholder="Enter number 3..."
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Please enter the third number.
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

export default Problem5;
