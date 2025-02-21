"use client";

import { useState, useEffect } from "react";
import { LogOut, User, Star, FileText, Clock, Home, HomeIcon } from "lucide-react";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState({ name: "", email: "", profilePic: "" });
  const [search, setSearch] = useState("");
  const router = useRouter();

  
  const investors = [ 
    { name: "Amit Kumar", company: "Venture India" },
    { name: "Rajesh Gupta", company: "Global Investors" },
    { name: "Sandeep Singh", company: "Startup Angels" },
    { name: "Priya Sharma", company: "Capital Hub" },
    { name: "Neha Reddy", company: "NextGen Fund" },
  ];

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    setToken(storedToken);
    if (!storedToken) {
      router.push("/loginRegisterPage");
    }
  }, []);

  const getUserDetails = async () => {
    if (!token) return;
    try {
      const response = await fetch("https://vconnection-server.vercel.app/get-user-details", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });
      const data = await response.json();
      if (data.success) setUser(data.data);
      else alert("Something went wrong");
    } catch (error) {
      alert("Something went wrong");
    }
  };

  useEffect(() => {
    if (token) getUserDetails();
  }, [token]);

  return (
    <div className="flex min-h-screen bg-black text-white">
      <aside className="w-64 flex  bg-black/90 border-r border-lime-400 p-6  flex-col">
        <div className="flex flex-col items-center mb-6">
          {user.profilePic ? (
            <img src={user.profilePic} alt="profile_pic" className="w-16 h-16 rounded-full" />
          ) : (
            <div className="w-16 h-16 rounded-full bg-lime-400 flex items-center justify-center text-black font-bold text-2xl">
              {user.name ? user.name[0] : "U"}
            </div>
          )}
          <h2 className="mt-3 text-lg font-semibold">{user?.name}</h2>
          <p className="text-sm text-gray-400">{user?.email}</p>
        </div>

        <nav className="space-y-2">
          <SidebarItem icon={HomeIcon} label="Home" onClick={() => router.push("/")} />
          <SidebarItem icon={User} label="Profile" />
          <SidebarItem icon={Home} label="Dashboard" onClick={() => router.push("/dashboard")} active />
          <SidebarItem icon={FileText} label="Documents" />
          <SidebarItem icon={Star} label="Favorites" />
          <SidebarItem icon={Clock} label="History" />
        </nav>

        <button onClick={() => {localStorage.clear();router.push("/")}} className="mt-auto flex items-center gap-2 text-red-400 hover:text-red-500 transition">
          <LogOut className="w-5 h-5" />
          Logout
        </button>
      </aside>

      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-lime-400">Investor Dashboard</h1>

        {/* Search Input */}
        <div className="mt-4">
          <input
            type="text"
            placeholder="Search investors..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-md p-3 bg-black/50 border border-lime-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400 text-white"
          />
        </div>

        {/* Investor Cards */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {investors
            .filter((investor) => investor.name.toLowerCase().includes(search.toLowerCase()))
            .map((investor, index) => (
              <InvestorCard key={index} {...investor} />
            ))}
        </div>
      </main>
    </div>
  );
};

const SidebarItem = ({ icon: Icon, label, active, onClick }: any) => (
  <div
    onClick={onClick}
    className={`flex items-center gap-3 px-4 py-2 rounded-md cursor-pointer transition ${
      active ? "bg-lime-500 text-black" : "hover:bg-lime-500/20"
    }`}
  >
    <Icon className="w-5 h-5" />
    <span>{label}</span>
  </div>
);

const InvestorCard = ({ name, company }: any) => (
  <div className="flex items-center justify-between bg-black/80 border border-lime-400 p-4 rounded-lg">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 bg-lime-400 text-black flex items-center justify-center rounded-full">
        <User className="w-6 h-6" />
      </div>
      <div>
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm text-gray-400">{company}</p>
      </div>
    </div>
    <button className="bg-gray-800 hover:bg-lime-500 text-white py-2 px-4 rounded-md transition">
      View Profile
    </button>
  </div>
);

export default Dashboard;
