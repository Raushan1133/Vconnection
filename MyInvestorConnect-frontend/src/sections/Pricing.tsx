"use client";

import { motion } from "framer-motion";
import { CheckCircle, Users, Mail, FileText, Rocket, Headphones } from "lucide-react";
import Tag from "@/components/Tag";

const parentVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function Pricing() {
  return (
    <section id="Pricing" className="py-24 bg-neutral-950/50">
      <div className="container">
        <div className="flex justify-center">
          <Tag>Pricing Plan</Tag>
        </div>

        <h2 className="text-5xl md:text-6xl font-medium text-center mt-6 max-w-3xl mx-auto">
          Scale your fundraising with{' '}
          <span className="text-lime-400">smart access</span>
        </h2>

        <motion.div
          variants={parentVariants}
          initial="hidden"
          animate="visible"
          className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {/* Founder Starter Plan (Larger Box) */}
          <motion.div
            variants={cardVariants}
            className="bg-neutral-900 border border-lime-400/20 rounded-2xl p-10 h-[500px] flex flex-col"  // Increased padding and height
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-lime-400/10 rounded-lg">
                <Rocket className="w-6 h-6 text-lime-400" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white">Founder Starter</h3>
                <p className="text-lime-400 mt-2">$10/month</p>
              </div>
            </div>

            <p className="text-lg text-white/70 mb-6">
              Essential tools for early-stage startups beginning their funding journey.
            </p>

            <ul className="space-y-4 mb-6">
              <li className="flex items-start">
                <CheckCircle className="text-lime-400 mr-3 mt-1 flex-shrink-0 w-5 h-5" />
                <span className="text-white/80">Access to 5,000+ investor profiles</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-lime-400 mr-3 mt-1 flex-shrink-0 w-5 h-5" />
                <span className="text-white/80">Basic investor matching algorithm</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-lime-400 mr-3 mt-1 flex-shrink-0 w-5 h-5" />
                <span className="text-white/80">Monthly funding webinars</span>
              </li>
            </ul>

            <div className="mt-auto border-t border-white/10 pt-6">
              <button className="w-full py-3 bg-lime-400/90 text-neutral-900 rounded-xl font-bold hover:bg-lime-300 transition-colors">
                Start Free Forever
              </button>
            </div>
          </motion.div>

          {/* Growth Accelerator Plan */}
          <motion.div
            variants={cardVariants}
            className="bg-neutral-900 border border-lime-400/30 rounded-2xl p-8 h-auto relative overflow-hidden"  // Keeping Growth Accelerator larger
          >
            <div className="absolute top-0 right-0 bg-lime-400 text-neutral-900 px-4 py-2 text-sm font-bold rounded-bl-xl">
              Most Popular
            </div>

            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-lime-400/10 rounded-lg">
                <Rocket className="w-6 h-6 text-lime-400" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white">Growth Accelerator</h3>
                <p className="text-lime-400 mt-2">$20/month</p>
              </div>
            </div>

            <p className="text-lg text-white/70 mb-8">
              Advanced tools for startups ready to accelerate their funding process.
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <CheckCircle className="text-lime-400 mr-3 mt-1 flex-shrink-0 w-5 h-5" />
                <span className="text-white/80">All Starter features plus:</span>
              </li>
              <li className="flex items-start">
                <Users className="text-lime-400 mr-3 mt-1 flex-shrink-0 w-5 h-5" />
                <span className="text-white/80">Priority investor matching AI</span>
              </li>
              <li className="flex items-start">
                <Mail className="text-lime-400 mr-3 mt-1 flex-shrink-0 w-5 h-5" />
                <span className="text-white/80">Direct investor outreach credits</span>
              </li>
              <li className="flex items-start">
                <FileText className="text-lime-400 mr-3 mt-1 flex-shrink-0 w-5 h-5" />
                <span className="text-white/80">Premium pitch deck templates</span>
              </li>
              <li className="flex items-start">
                <Headphones className="text-lime-400 mr-3 mt-1 flex-shrink-0 w-5 h-5" />
                <span className="text-white/80">24/7 investor relations support</span>
              </li>
            </ul>

            <div className="mt-auto border-t border-white/10 pt-6">
              <button className="w-full py-4 bg-lime-400 text-neutral-900 rounded-xl font-bold hover:bg-lime-300 transition-colors">
                Start Free Trial
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
