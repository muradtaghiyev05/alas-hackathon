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
import { points } from "@/lib/points";

const Model1 = () => {
  const [loading, setLoading] = useState(false);
  const [predict, setPredict] = useState("No value");

  const formSchema = z.object({
    battery: z.coerce.number(),
    bluetooth: z.coerce.number(),
    speed: z.coerce.number(),
    number: z.coerce.number(),
    front_camera_megapixel: z.coerce.number(),
    four_g: z.coerce.number(),
    memory_gigabytes: z.coerce.number(),
    deep: z.coerce.number(),
    mobile_weight: z.coerce.number(),
    processor_cores: z.coerce.number(),
    main_camera_pixel: z.coerce.number(),
    pixel_resolution_height: z.coerce.number(),
    pixel_resolution_width: z.coerce.number(),
    ram_storage: z.coerce.number(),
    screen_height_cm: z.coerce.number(),
    screen_width_cm: z.coerce.number(),
    max_time: z.coerce.number(),
    three_g: z.coerce.number(),
    sensor: z.coerce.number(),
    wifi: z.coerce.number(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      battery: 0,
      bluetooth: 0,
      speed: 0,
      number: 0,
      front_camera_megapixel: 0,
      four_g: 0,
      memory_gigabytes: 0,
      deep: 0,
      mobile_weight: 0,
      processor_cores: 0,
      main_camera_pixel: 0,
      pixel_resolution_height: 0,
      pixel_resolution_width: 0,
      ram_storage: 0,
      screen_height_cm: 0,
      screen_width_cm: 0,
      max_time: 0,
      three_g: 0,
      sensor: 0,
      wifi: 0,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setLoading(true);
      const res = await axios.post(
        "http://10.30.0.27:8081/predict_mobile",
        values
      );
      setPredict(res.data.prediction);
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
              {points.map((item) => (
                <FormField
                  key={item.id}
                  control={form.control}
                  name={item.point}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg">
                        Enter {item.point}
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="w-[70%] shadow-sm"
                          type="number"
                          disabled={loading}
                          placeholder="Enter point..."
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

export default Model1;
