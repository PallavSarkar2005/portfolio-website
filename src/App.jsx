import React, { useState, Suspense, lazy } from "react";
import Spline from "@splinetool/react-spline";
import HeroBar from "./components/HeroBar";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";

const MainContent = lazy(() => import("./components/MainContent"));

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative min-h-screen w-full bg-black text-white overflow-x-hidden">
      <CustomCursor />
      
      {isLoading && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-cyan-500 border-t-transparent"></div>
        </div>
      )}

      <div className="fixed inset-0 z-0 h-screen w-full">
        <Spline
          className="w-full h-full"
          scene="https://prod.spline.design/y5DzUjfC7M-eBfER/scene.splinecode"
          onLoad={() => setIsLoading(false)}
        />
      </div>

      <div 
        className={`relative z-50 w-full transition-opacity duration-1000 ${
          isLoading ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"
        }`}
      >
        <HeroBar />
        <Suspense fallback={null}>
          <MainContent />
        </Suspense>
        <Footer />
      </div>
    </div>
  );
}