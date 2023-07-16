"use client";

import React, { useEffect, useState } from "react";
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

const Problem2 = () => {
  const [answer, setAnswer] = useState(32);

  const formSchema = z.object({
    celcius: z.coerce.number(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      celcius: 0,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setAnswer((values.celcius * 9) / 5 + 32);
  };

  return (
    <div>
      <div className="container p-10">
        <h1 className="text-3xl mb-3">
          Problem 2 - Convert from Celcius to Farenheit
        </h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="celcius"
              render={({ field }) => (
                <>
                  <FormItem>
                    <FormLabel>Celcius</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        required
                        placeholder="Enter Celcius..."
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Please enter the Celcius you want to convert to Farenheit.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                </>
              )}
            />
            <Button type="submit">See result</Button>
          </form>
        </Form>
        <div className="mt-4 text-xl font-bold">Answer: {answer}&deg; F</div>
      </div>
    </div>
  );
};

export default Problem2;
