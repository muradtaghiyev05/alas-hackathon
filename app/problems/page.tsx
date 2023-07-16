import React from "react";
import Link from "next/link";

import { problems } from "@/lib/problems";

const ProblemsPage = () => {
  return (
    <div className="flex items-center justify-center min-h-[90vh] pt-4">
      <div className="container mb-32 grid text-center gap-3 lg:mb-0 lg:grid-cols-4 lg:text-left">
        {problems.map((item) => (
          <Link
            href={`/problems/problem${item.id}`}
            className="group flex flex-col items-center lg:items-start rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-orange-300 hover:bg-orange-100 hover:dark:border-orange-700 hover:dark:bg-orange-800/30"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              {item.label}{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[40ch] text-sm opacity-50`}>
              Click to see the problem {item.id} and its result.
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProblemsPage;
