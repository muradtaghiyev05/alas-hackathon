"use client";

import React from "react";
import axios from "axios";
import { useState } from "react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Model2 = () => {
  const [loading, setLoading] = useState(false);
  const [predict, setPredict] = useState("No value");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const fileInput = document.getElementById("fileInput") as HTMLInputElement;

    if (!fileInput.files) return;

    const file = fileInput.files[0];
    const formData = new FormData();
    formData.append("file", file);

    try {
      setLoading(true);
      const res = await axios.post(
        "http://10.30.0.27:8081/handwritten",
        formData
      );
      setPredict(res.data.result);
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
          <h1 className="text-3xl font-semibold pb-2">Enter Image</h1>
          <form onSubmit={handleSubmit} className="space-y-8">
            <Input
              id="fileInput"
              className="w-[70%] shadow-sm cursor-pointer"
              type="file"
              required
              disabled={loading}
              placeholder="Enter image"
            />
            <Button disabled={loading} type="submit">
              See result
            </Button>
          </form>
        </div>
      </div>
      <Button
        className="mt-10"
        variant="destructive"
        disabled={loading}
        type="button"
        onClick={() => window.location.reload()}
      >
        Reset
      </Button>
    </div>
  );
};

export default Model2;
