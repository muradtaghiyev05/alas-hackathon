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

const Problem4 = () => {
  const [answer, setAnswer] = useState("");

  const formSchema = z.object({
    num: z.coerce.number(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      num: 0,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    if (values.num % 2 == 0) {
      setAnswer("even");
    }
    if (values.num % 2 != 0) {
      setAnswer("odd");
    }
  };

  return (
    <div>
      <div className="container p-10">
        <h1 className="text-3xl mb-3">
          Problem 4 - Check if a number is odd or even
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
                      Please enter the number to check if it is odd or even.
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

export default Problem4;
