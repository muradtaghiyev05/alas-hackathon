"use client";

import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <div
      style={{
        backgroundColor: "rgba(255,115,3, 0.8)",
        minHeight: "95vh",
        paddingBottom: "2rem",
      }}
    >
      <div className="container p-0 lg:p-10">
        <div className="h-80 lg:h-auto pt-14 px-11">
          <TypeAnimation
            sequence={[
              "Learn with Alas Academy",
              1000,
              "Move forward with Alas Academy",
              1000,
              "Improve with Alas Academy",
              1000,
              "Find your passion with Alas Academy",
              1000,
            ]}
            speed={50}
            style={{ color: "white", fontSize: "3rem" }}
            repeat={Infinity}
          />
        </div>
        <div className="container my-32 flex flex-col md:flex-row text-center gap-3 lg:mb-0 lg:text-left">
          <Link
            href={`/problems`}
            className="group shadow-xl text-white hover:text-black flex-1 flex flex-col items-center lg:items-start rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-white hover:bg-orange-100 hover:dark:border-orange-700 hover:dark:bg-orange-800/30"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Problems{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[40ch] text-sm opacity-50`}>
              Click to see all the problems.
            </p>
          </Link>
          <Link
            href={`/model1`}
            className="group shadow-xl text-white hover:text-black flex-1 flex flex-col items-center lg:items-start rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-white hover:bg-orange-100 hover:dark:border-orange-700 hover:dark:bg-orange-800/30"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Model 1{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[40ch] text-sm opacity-50`}>
              Click to see the Model 1.
            </p>
          </Link>
          <Link
            href={`/model2`}
            className="group shadow-xl text-white hover:text-black flex flex-1 flex-col items-center lg:items-start rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-white hover:bg-orange-100 hover:dark:border-orange-700 hover:dark:bg-orange-800/30"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Model 2{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[40ch] text-sm opacity-50`}>
              Click to see the Model 2.
            </p>
          </Link>
          <Link
            href={`/model3`}
            className="group shadow-xl text-white hover:text-black flex flex-1 flex-col items-center lg:items-start rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-white hover:bg-orange-100 hover:dark:border-orange-700 hover:dark:bg-orange-800/30"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Model 3{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[40ch] text-sm opacity-50`}>
              Click to see the Model 3.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
