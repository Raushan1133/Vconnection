"use client";  // Ensure this file is treated as a client component

// import { SessionProvider } from "next-auth/react";
import "../globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // <SessionProvider>
      <div>{children}</div>
    // </SessionProvider> 
  );
}
