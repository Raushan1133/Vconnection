"use client";

import { useState, useEffect } from "react";
import { Menu, LogOut, Settings, BarChart3 } from "lucide-react";
import Image from "next/image";
import logoImage from "@/assets/images/logo.svg";
import { motion } from "framer-motion";
import { useSession, signOut } from "next-auth/react";

const Dashboard = () => {
  const [isProfileOpen, setProfileOpen] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [userData, setUserData] = useState<any>(null);
  const { data: session, status } = useSession();

  // Fetch user data from backend after login
  useEffect(() => {
    if (status === "authenticated") {
      fetch("http://localhost:8080/api/auth/authenticated", {
        credentials: "include", // Include cookies for session management
      })
        .then((response) => response.json())
        .then((data) => setUserData(data))
        .catch((error) => console.error("Error fetching user data:", error));
    }
  }, [status]);

  // Debugging the session object
  useEffect(() => {
    console.log("Session Data:", session);
  }, [session]);

  // Loading state while session is being fetched
  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "unauthenticated") {
    return <div>You are not logged in!</div>;
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar and Main Content */}
      {/* ... (rest of your dashboard code) ... */}
    </div>
  );
};

export default Dashboard;