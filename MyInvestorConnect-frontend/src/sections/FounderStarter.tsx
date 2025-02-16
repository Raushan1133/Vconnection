"use client";

import { useState } from "react";
import { Search, ChevronDown, Eye } from "lucide-react";
import Image from "next/image";
import { NextPage } from "next";

interface Investor {
  name: string;
  headline: string;
  company: string;
  location: string;
  avatar?: string;
}

const investors: Investor[] = [
  { name: "RXXX BXXXXXX", headline: "BrightChamps' dynamic Founder and CEO.", company: "Brightchamps", location: "India", avatar: "" },
  { name: "CXXXXXX RXXX", headline: "Claster Ventures' dynamic Entrepreneur and Investor.", company: "Claster Ventures", location: "France", avatar: "" },
  { name: "YXXX SXXXX", headline: "Specialist in M&A Business Consultancy at HumanCap, Beangels.", company: "Beangels", location: "Belgium", avatar: "" },
  { name: "KXXX HXXXXXXX", headline: "COO at StratNXT, specializing in Retail Management, Omnichannel Commerce, and Digital Strategy Consulting.", company: "Stratnxt", location: "France", avatar: "" },
];

const InvestorDatabase: NextPage = () => {
  const [search, setSearch] = useState("");
  const [locationFilter, setLocationFilter] = useState("All Locations");
  const [showViewed, setShowViewed] = useState(false);

  return (
    <div className="p-6 bg-neutral-950 min-h-screen text-white">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-medium text-center text-lime-400 mb-6">Investor Database</h1>

        <div className="flex gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="pl-10 p-3 w-full rounded-lg border bg-neutral-900 text-white"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <button className="flex items-center gap-2 border p-3 rounded-lg bg-neutral-900 text-white">
            {locationFilter} <ChevronDown />
          </button>

          <label className="flex items-center gap-2">
            <input type="checkbox" checked={showViewed} onChange={() => setShowViewed(!showViewed)} />
            Show Viewed
          </label>
        </div>

        <table className="w-full bg-neutral-900 rounded-lg shadow-md border border-lime-400/20">
          <thead>
            <tr className="bg-neutral-800 text-left text-lime-400">
              <th className="p-4">INVESTOR NAME</th>
              <th>HEADLINE</th>
              <th>COMPANY</th>
              <th>LOCATION</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {investors.map((investor, index) => (
              <tr key={index} className="border-b border-white/10">
                <td className="p-4 flex items-center gap-2">
                  {investor.avatar ? (
                    <Image src={investor.avatar} alt={investor.name} width={30} height={30} className="rounded-full" />
                  ) : (
                    <div className="w-8 h-8 flex items-center justify-center bg-gray-700 text-lime-400 rounded-full">
                      {investor.name.charAt(0)}
                    </div>
                  )}
                  {investor.name}
                </td>
                <td className="text-white/80">{investor.headline}</td>
                <td className="text-white/80">{investor.company}</td>
                <td className="text-white/80">{investor.location}</td>
                <td>
                  <button className="px-4 py-2 bg-lime-400 text-neutral-900 rounded-lg font-bold hover:bg-lime-300 transition-colors flex items-center gap-1">
                    <Eye size={16} /> View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InvestorDatabase;