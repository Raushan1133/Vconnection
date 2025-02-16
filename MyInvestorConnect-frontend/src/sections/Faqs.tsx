"use client";

import Tag from "@/components/Tag";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

const faqs = [
  {
    question: "How is FirstSeed different from other platforms?",
    answer:
      "FirstSeed is designed to simplify the fundraising process for startups and investors. Unlike traditional platforms, we use AI-powered matching to connect you with the right opportunities quickly and efficiently.",
  },
  {
    question: "Is FirstSeed free to use?",
    answer:
      "Yes, signing up and creating a profile is free for both startups and investors. We offer premium features for those who want to unlock additional tools and insights.",
  },
  {
    question: "How do I get started as a startup?",
    answer:
      "Simply create a profile, upload your pitch deck, and provide key details about your business. Our algorithm will match you with relevant investors in no time.",
  },
  {
    question: "How do I join as an investor?",
    answer:
      "Sign up, complete your profile, and specify your investment preferences. You’ll start seeing curated startup opportunities tailored to your interests.",
  },
  {
    question: "How does FirstSeed ensure quality?",
    answer:
      "We rigorously vet all startups and investors on our platform to ensure credibility and alignment. Our due diligence process includes financial checks, legal compliance, and traction verification.",
  },
];

export default function Faqs() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section className="py-24">
      <div className="container max-w-5xl"> {/* Increased container width */}
        <div className="flex justify-center">
          <Tag>FAQs</Tag>
        </div>
        <h2 className="text-6xl font-medium mt-6 text-center max-w-xl mx-auto">
          Questions? We&apos;ve got{" "}
          <span className="text-lime-400">answers</span>
        </h2>

        <div className="mt-12 flex flex-col gap-6 max-w-4xl mx-auto"> {/* Increased FAQ box width */}
          {faqs.map((faq, faqIndex) => (
            <div
              key={faq.question}
              onClick={() => setSelectedIndex(faqIndex)}
              className="bg-neutral-900 rounded-2xl border border-white/10 p-6 cursor-pointer"
            >
              <div className="flex justify-between items-start">
                <h3 className="font-medium m-0">{faq.question}</h3>
                <Plus
                  size={30}
                  className={twMerge(
                    "feather feather-plus text-lime-400 flex-shrink-0 transition duration-300",
                    selectedIndex === faqIndex && "rotate-45"
                  )}
                />
              </div>

              <AnimatePresence>
                {selectedIndex === faqIndex && (
                  <motion.div
                    initial={{
                      height: 0,
                      marginTop: 0,
                    }}
                    animate={{
                      height: "auto",
                      marginTop: 24,
                    }}
                    exit={{
                      height: 0,
                      marginTop: 0,
                    }}
                    className="overflow-hidden"
                  >
                    <p className="text-white/50">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
