"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Mail, Lock, Loader2, User, Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  
  // Login State
  const [loginEmail, setLoginEmail] = useState("admin@regionalacademy.co.in");
  const [loginPassword, setLoginPassword] = useState("admin123");
  const [loginError, setLoginError] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);
  const [showLoginPassword, setShowLoginPassword] = useState(false);

  // Signup State
  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupError, setSignupError] = useState("");
  const [signupLoading, setSignupLoading] = useState(false);
  const [showSignupPassword, setShowSignupPassword] = useState(false);

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginLoading(true);
    setLoginError("");

    try {
      const res = await signIn("credentials", {
        email: loginEmail,
        password: loginPassword,
        redirect: false,
      });

      if (res?.error) {
        setLoginError("Invalid email or password");
      } else {
        router.push("/dashboard");
        router.refresh();
      }
    } catch (err) {
      setLoginError("An unexpected error occurred");
    } finally {
      setLoginLoading(false);
    }
  };

  const handleSignupSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSignupLoading(true);
    setSignupError("");

    try {
      // Mock signup for now as per instructions (or add API call here)
      await new Promise((resolve) => setTimeout(resolve, 1500));
      // After successful "signup", we can log them in or just switch to login pane
      setIsLogin(true);
      setLoginEmail(signupEmail);
    } catch (err) {
      setSignupError("Failed to create account");
    } finally {
      setSignupLoading(false);
    }
  };

  const overlayVariants = {
    login: {
      clipPath: "polygon(30% 0%, 100% 0%, 100% 100%, 70% 100%)",
    },
    signup: {
      clipPath: "polygon(0% 0%, 70% 0%, 30% 100%, 0% 100%)",
    },
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#030305] relative overflow-hidden font-sans p-4">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#7c3aed]/20 blur-[120px] rounded-full pointer-events-none" />

      {/* Main Container */}
      <div className="relative w-full max-w-[900px] h-[550px] bg-[#09090b] rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(124,58,237,0.3)] border border-[#7c3aed]/30">
        
        {/* ==================== LOGIN FORM (LEFT) ==================== */}
        <motion.div
          initial={false}
          animate={{
            opacity: isLogin ? 1 : 0,
            x: isLogin ? 0 : -50,
            pointerEvents: isLogin ? "auto" : "none",
          }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute top-0 left-0 w-[50%] h-full flex flex-col justify-center px-12 z-10"
        >
          <h2 className="text-4xl font-extrabold text-white text-center mb-8 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
            Login
          </h2>
          
          {loginError && (
            <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-2 rounded text-xs mb-4 text-center">
              {loginError}
            </div>
          )}

          <form onSubmit={handleLoginSubmit} className="space-y-6">
            <div className="relative border-b border-white/20 focus-within:border-[#7c3aed] transition-colors pb-2">
              <input
                type="email"
                required
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                className="w-full bg-transparent text-white placeholder-transparent focus:outline-none peer text-sm pt-4"
                placeholder="Email"
              />
              <label className="absolute left-0 top-0 text-xs text-white/50 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs peer-focus:text-[#7c3aed]">
                Email
              </label>
              <Mail className="absolute right-0 bottom-2 h-4 w-4 text-white/50" />
            </div>

            <div className="relative border-b border-white/20 focus-within:border-[#7c3aed] transition-colors pb-2">
              <input
                type={showLoginPassword ? "text" : "password"}
                required
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                className="w-full bg-transparent text-white placeholder-transparent focus:outline-none peer text-sm pt-4 pr-6"
                placeholder="Password"
              />
              <label className="absolute left-0 top-0 text-xs text-white/50 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs peer-focus:text-[#7c3aed]">
                Password
              </label>
              <button 
                type="button"
                onClick={() => setShowLoginPassword(!showLoginPassword)}
                className="absolute right-0 bottom-2 text-white/50 hover:text-white transition-colors"
              >
                {showLoginPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>

            <div className="flex items-center justify-between text-xs text-white/60">
              <label className="flex items-center gap-2 cursor-pointer hover:text-white transition-colors">
                <input type="checkbox" className="rounded border-white/20 bg-transparent text-[#7c3aed] focus:ring-[#7c3aed] focus:ring-offset-0" />
                Remember me
              </label>
              <a href="#" className="hover:text-white transition-colors">Forgot?</a>
            </div>

            <button
              type="submit"
              disabled={loginLoading}
              className="w-full bg-gradient-to-r from-[#8b5cf6] to-[#6d28d9] text-white rounded-full py-3 text-sm font-bold tracking-wider uppercase shadow-[0_0_20px_rgba(139,92,246,0.5)] hover:shadow-[0_0_30px_rgba(139,92,246,0.8)] transition-all flex justify-center items-center h-12"
            >
              {loginLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : "LOGIN"}
            </button>
          </form>

          <p className="text-center text-xs text-white/60 mt-6">
            Don't have an account?{" "}
            <button onClick={() => setIsLogin(false)} className="text-white font-bold hover:underline decoration-[#7c3aed] underline-offset-2">
              Sign Up
            </button>
          </p>
        </motion.div>

        {/* ==================== SIGNUP FORM (RIGHT) ==================== */}
        <motion.div
          initial={false}
          animate={{
            opacity: !isLogin ? 1 : 0,
            x: !isLogin ? 0 : 50,
            pointerEvents: !isLogin ? "auto" : "none",
          }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-[50%] h-full flex flex-col justify-center px-12 z-10"
        >
          <h2 className="text-4xl font-extrabold text-white text-center mb-8 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
            Sign Up
          </h2>

          {signupError && (
            <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-2 rounded text-xs mb-4 text-center">
              {signupError}
            </div>
          )}

          <form onSubmit={handleSignupSubmit} className="space-y-6">
            <div className="relative border-b border-white/20 focus-within:border-[#7c3aed] transition-colors pb-2">
              <input
                type="text"
                required
                value={signupName}
                onChange={(e) => setSignupName(e.target.value)}
                className="w-full bg-transparent text-white placeholder-transparent focus:outline-none peer text-sm pt-4"
                placeholder="Name"
              />
              <label className="absolute left-0 top-0 text-xs text-white/50 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs peer-focus:text-[#7c3aed]">
                Full Name
              </label>
              <User className="absolute right-0 bottom-2 h-4 w-4 text-white/50" />
            </div>

            <div className="relative border-b border-white/20 focus-within:border-[#7c3aed] transition-colors pb-2">
              <input
                type="email"
                required
                value={signupEmail}
                onChange={(e) => setSignupEmail(e.target.value)}
                className="w-full bg-transparent text-white placeholder-transparent focus:outline-none peer text-sm pt-4"
                placeholder="Email"
              />
              <label className="absolute left-0 top-0 text-xs text-white/50 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs peer-focus:text-[#7c3aed]">
                Email
              </label>
              <Mail className="absolute right-0 bottom-2 h-4 w-4 text-white/50" />
            </div>

            <div className="relative border-b border-white/20 focus-within:border-[#7c3aed] transition-colors pb-2">
              <input
                type={showSignupPassword ? "text" : "password"}
                required
                value={signupPassword}
                onChange={(e) => setSignupPassword(e.target.value)}
                className="w-full bg-transparent text-white placeholder-transparent focus:outline-none peer text-sm pt-4 pr-6"
                placeholder="Password"
              />
              <label className="absolute left-0 top-0 text-xs text-white/50 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs peer-focus:text-[#7c3aed]">
                Password
              </label>
              <button 
                type="button"
                onClick={() => setShowSignupPassword(!showSignupPassword)}
                className="absolute right-0 bottom-2 text-white/50 hover:text-white transition-colors"
              >
                {showSignupPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>

            <button
              type="submit"
              disabled={signupLoading}
              className="w-full bg-gradient-to-r from-[#8b5cf6] to-[#6d28d9] text-white rounded-full py-3 text-sm font-bold tracking-wider uppercase shadow-[0_0_20px_rgba(139,92,246,0.5)] hover:shadow-[0_0_30px_rgba(139,92,246,0.8)] transition-all flex justify-center items-center h-12 mt-4"
            >
              {signupLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : "SIGN UP"}
            </button>
          </form>

          <p className="text-center text-xs text-white/60 mt-6">
            Already have an account?{" "}
            <button onClick={() => setIsLogin(true)} className="text-white font-bold hover:underline decoration-[#7c3aed] underline-offset-2">
              Sign In
            </button>
          </p>
        </motion.div>


        {/* ==================== ANIMATED OVERLAY (PURPLE DIAGONAL) ==================== */}
        <motion.div
          variants={overlayVariants}
          initial="login"
          animate={isLogin ? "login" : "signup"}
          transition={{ duration: 0.8, ease: [0.77, 0, 0.17, 1] }}
          className="absolute inset-0 z-20 bg-gradient-to-br from-[#8b5cf6] to-[#4c1d95] pointer-events-none"
        >
          {/* Noise texture overlay for premium feel */}
          <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

          {/* Right Side Text (Visible during Login) */}
          <motion.div
            animate={{ opacity: isLogin ? 1 : 0, x: isLogin ? 0 : 50 }}
            transition={{ duration: 0.6, delay: isLogin ? 0.3 : 0 }}
            className="absolute right-0 w-[50%] h-full flex flex-col justify-center items-center px-12 text-center"
          >
            <h2 className="text-5xl font-extrabold text-white mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]">
              HELLO,<br/>FRIEND!
            </h2>
            <p className="text-white/90 text-sm leading-relaxed max-w-[250px]">
              Enter your details and start your journey with us.
            </p>
          </motion.div>

          {/* Left Side Text (Visible during Signup) */}
          <motion.div
            animate={{ opacity: !isLogin ? 1 : 0, x: !isLogin ? 0 : -50 }}
            transition={{ duration: 0.6, delay: !isLogin ? 0.3 : 0 }}
            className="absolute left-0 w-[50%] h-full flex flex-col justify-center items-center px-12 text-center"
          >
            <h2 className="text-5xl font-extrabold text-white mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]">
              WELCOME<br/>BACK!
            </h2>
            <p className="text-white/90 text-sm leading-relaxed max-w-[250px]">
              To keep connected with us please login with your personal info.
            </p>
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
}
