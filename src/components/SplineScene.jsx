import { lazy, Suspense, memo } from "react";

const Spline = lazy(() => import("@splinetool/react-spline"));

function SplineScene() {
  return (
    <div
      className="
      fixed
      inset-0
      z-0

      pointer-events-none

      opacity-20

      hidden 2xl:block

      overflow-hidden
      "
    >
      <Suspense fallback={null}>
        <Spline
          scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode"
        />
      </Suspense>
    </div>
  );
}

export default memo(SplineScene);