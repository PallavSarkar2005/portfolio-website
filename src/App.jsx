import Spline from "@splinetool/react-spline";
import HeroBar from "./components/HeroBar";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";

export default function App() {
  return (
    <div className="relative min-h-screen w-full bg-black text-white">
      <CustomCursor />
      <div className="fixed inset-0 z-0 h-screen w-full">
        <Spline
          className="w-full h-full"
          scene="https://prod.spline.design/y5DzUjfC7M-eBfER/scene.splinecode"
        />
      </div>
      <div className="relative z-50 w-full pointer-events-none">
        <div className="pointer-events-auto">
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