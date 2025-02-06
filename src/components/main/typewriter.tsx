"use client";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { useTheme } from "@/contexts/ThemeProvider";

export function TypeWriterAnimation() {
  const { theme } = useTheme();

  const words = [
    {
      text: "Learn",
    },
    {
      text: "Tunisian",
    },
    {
      text: "Algorithm",
    },
    {
      text: "with",
    },
    {
      text: "AlgoTN.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-[40rem] bg-white dark:bg-gray-900 transition-colors duration-200">
      <p className="text-neutral-600 dark:text-neutral-200 text-base mb-10">
        The road to success is always by your side.
      </p>
      <TypewriterEffect words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
        <button className="w-40 h-10 rounded-xl bg-black dark:bg-white dark:text-black border dark:border-white border-transparent text-white text-sm transition-colors duration-200">
          Join now
        </button>
        <button className="w-40 h-10 rounded-xl bg-white dark:bg-gray-800 text-black dark:text-white border border-black dark:border-white text-sm transition-colors duration-200">
          Signup
        </button>
      </div>
    </div>
  );
}