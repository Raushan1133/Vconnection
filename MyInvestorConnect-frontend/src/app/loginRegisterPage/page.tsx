"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import GoogleLogo from "../../assets/images/google-icon-logo-svgrepo-com.svg";
import { useRouter } from "next/navigation";

const LoginPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"login" | "signup">("login");
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState<{ name?: string; email?: string; password?: string }>({});

  const handleTabClick = (tab: "login" | "signup") => {
    setActiveTab(tab);
    setErrors({}); // Clear errors when switching tabs
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    validateField(e.target.name, e.target.value);
  };

  const validateField = (field: string, value: string) => {
    let error = "";
    if (field === "name" && activeTab === "signup" && !value) error = "Name is required";
    if (field === "email" && !/^\S+@\S+\.\S+$/.test(value)) error = "Invalid email format";
    if (field === "password" && activeTab === "signup" && value.length < 8)
      error = "Password must be at least 8 characters";
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (Object.values(errors).some((error) => error)) return;
    console.log("Success:", formData);
  };

  const handleGoogleSignIn = async() => {
    // Implement Google Auth logic
    window.open(
        `http://localhost:8080/auth/google`,
        "_self"
    )
  };

  const router = useRouter()
//   const token = localStorage.getItem("authToken")
//   if(token){
//     router.push("/dashboard")
//   }
  useEffect(() => {
    // Get token from URL query params
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    console.log(token)
    if (token) {
      localStorage.setItem("authToken", token); // Save token for authentication
      router.push("/dashboard"); // Redirect user after login
    }
  }, []);

  return (
    <div className="flex justify-center items-center h-[100vh]  mt-4">
              <button
                type="button"
                onClick={handleGoogleSignIn}
                className="flex items-center bg-white/10 hover:bg-white/20 transition-all duration-300 text-white py-2 px-4 rounded-lg border border-gray-500 shadow-md"
              >
                <Image src={GoogleLogo} alt="Google" width={24} height={24} className="mr-2" />
                {activeTab === "login" ? "Sign in" : "Sign up"} with Google
              </button>
            </div>
    // <div className="flex justify-center items-center min-h-screen bg-black/90 px-4">
    //   <motion.div
    //     initial={{ opacity: 0, scale: 0.9 }}
    //     animate={{ opacity: 1, scale: 1 }}
    //     transition={{ duration: 0.3 }}
    //     className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl rounded-lg p-8 w-full max-w-md"
    //   >
    //     {/* Tab Navigation */}
    //     <div className="flex justify-center gap-6 mb-6">
    //       {["login", "signup"].map((tab) => (
    //         <button
    //           key={tab}
    //           className={`px-6 py-2 rounded-full transition-all duration-300 ${
    //             activeTab === tab ? "bg-lime-500 text-white shadow-md" : "text-gray-400 hover:text-white"
    //           }`}
    //           onClick={() => handleTabClick(tab as "login" | "signup")}
    //         >
    //           {tab === "login" ? "Login" : "Sign Up"}
    //         </button>
    //       ))}
    //     </div>

    //     {/* Animated Form Content */}
    //     <AnimatePresence mode="wait">
    //       <motion.form
    //         key={activeTab}
    //         initial={{ opacity: 0, y: 10 }}
    //         animate={{ opacity: 1, y: 0 }}
    //         exit={{ opacity: 0, y: -10 }}
    //         transition={{ duration: 0.2 }}
    //         className="space-y-5"
    //         onSubmit={handleSubmit}
    //       >
            
    //         {/* <div>
    //           <input
    //             type="email"
    //             name="email"
    //             placeholder="Email Address"
    //             className="w-full bg-black/30 border border-gray-500 rounded-lg p-3 text-white focus:ring-2 focus:ring-lime-400"
    //             value={formData.email}
    //             onChange={handleInputChange}
    //           />
    //           {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
    //         </div> */}
    //         {/* <div>
    //           <input
    //             type="password"
    //             name="password"
    //             placeholder="Password"
    //             className="w-full bg-black/30 border border-gray-500 rounded-lg p-3 text-white focus:ring-2 focus:ring-lime-400"
    //             value={formData.password}
    //             onChange={handleInputChange}
    //           />
    //           {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
    //         </div> */}

    //         {/* Submit Button */}
    //         {/* <button
    //           type="submit"
    //           className="w-full bg-lime-500 hover:bg-lime-600 transition-all duration-300 text-white py-3 rounded-lg shadow-lg"
    //         >
    //           {activeTab === "login" ? "Login" : "Sign Up"}
    //         </button> */}

    //         {/* Google Sign-In */}
    //         <div className="flex justify-center  mt-4">
    //           <button
    //             type="button"
    //             onClick={handleGoogleSignIn}
    //             className="flex items-center bg-white/10 hover:bg-white/20 transition-all duration-300 text-white py-2 px-4 rounded-lg border border-gray-500 shadow-md"
    //           >
    //             <Image src={GoogleLogo} alt="Google" width={24} height={24} className="mr-2" />
    //             {activeTab === "login" ? "Sign in" : "Sign up"} with Google
    //           </button>
    //         </div>
    //       </motion.form>
    //     </AnimatePresence>
    //   </motion.div>
    // </div>
  );
};

export default LoginPage;
