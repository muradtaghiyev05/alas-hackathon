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

const Problem1 = () => {
  const [answer, setAnswer] = useState(1);

  const formSchema = z.object({
    width: z.coerce.number().min(0),
    height: z.coerce.number().min(0),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      width: 1,
      height: 1,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setAnswer(values.width * values.height);
  };

  return (
    <div>
      <div className="container p-10">
        <h1 className="text-3xl mb-3">Problem 1 - Find area of a rectangle</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="width"
              render={({ field }) => (
                <>
                  <FormItem>
                    <FormLabel>Width</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        required
                        placeholder="Width"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Please enter the width of the rectangle.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                </>
              )}
            />
            <FormField
              control={form.control}
              name="height"
              render={({ field }) => (
                <>
                  <FormItem>
                    <FormLabel>Height</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        required
                        placeholder="Height"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Please enter the height of the rectangle.
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

export default Problem1;
