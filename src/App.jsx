import React, { useState, useEffect } from "react";
import Spline from "@splinetool/react-spline";
import HeroBar from "./components/HeroBar";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
  }, []);

  return (
    <div className="relative w-full bg-black text-white">
      <CustomCursor />
      {isLoading && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-cyan-500 border-t-transparent shadow-[0_0_20px_cyan]"></div>
        </div>
      )}
      <div className="fixed inset-0 z-0 w-full h-full">
        <Spline
          style={{ width: "100%", height: "100%" }}
          scene="https://prod.spline.design/y5DzUjfC7M-eBfER/scene.splinecode"
          onLoad={() => setIsLoading(false)}
        />
      </div>
      <div
        className={`relative z-10 w-full pointer-events-none ${isLoading ? "opacity-0" : "opacity-100"}`}
      >
        <div className="sticky top-0 z-[60] pointer-events-auto">
          <HeroBar />
        </div>
        <div className="pointer-events-none">
          <MainContent />
        </div>
        <div className="pointer-events-auto">
          <Footer />
        </div>
      </div>
    </div>
  );
}
