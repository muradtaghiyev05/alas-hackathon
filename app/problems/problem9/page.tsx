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

const Problem9 = () => {
  const [answer, setAnswer] = useState("");

  const formSchema = z.object({
    word: z.string(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      word: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const str = values.word.split("").reverse().join("");
    setAnswer(str);
  };

  return (
    <div>
      <div className="container p-10">
        <h1 className="text-3xl mb-3">
          Problem 9 - Get the reverse of a string
        </h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="word"
              render={({ field }) => (
                <>
                  <FormItem>
                    <FormLabel>Word</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        required
                        placeholder="Enter word..."
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Please enter the word to get its reverse.
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

export default Problem9;
