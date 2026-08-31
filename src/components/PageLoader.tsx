"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function PageLoader() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const progressRef = useRef<NodeJS.Timeout | null>(null);
  const isFirstLoad = useRef(true);

  const startLoading = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (progressRef.current) clearInterval(progressRef.current);

    setLoading(true);
    setVisible(true);
    setFadeOut(false);
    setProgress(0);

    let current = 0;
    progressRef.current = setInterval(() => {
      if (current < 30) {
        current += Math.random() * 12 + 8;
      } else if (current < 60) {
        current += Math.random() * 8 + 3;
      } else if (current < 85) {
        current += Math.random() * 3 + 1;
      } else {
        current += Math.random() * 0.5;
      }
      if (current > 92) current = 92;
      setProgress(current);
    }, 120);
  }, []);

  const stopLoading = useCallback(() => {
    if (progressRef.current) clearInterval(progressRef.current);

    setProgress(100);

    timerRef.current = setTimeout(() => {
      setFadeOut(true);
      setLoading(false);

      setTimeout(() => {
        setVisible(false);
        setFadeOut(false);
        setProgress(0);
      }, 500);
    }, 300);
  }, []);

  // Detect route changes — skip the very first load
  useEffect(() => {
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      return;
    }
    stopLoading();
  }, [pathname, searchParams, stopLoading]);

  // Intercept link clicks for navigation
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");

      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href) return;

      if (
        href.startsWith("http") ||
        href.startsWith("#") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        anchor.target === "_blank"
      ) {
        return;
      }

      if (href === pathname) return;

      startLoading();
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, [pathname, startLoading]);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className={`page-loader ${fadeOut ? "page-loader--fade-out" : ""}`}>
      {/* Gradient overlay background */}
      <div className="page-loader-bg" />

      {/* Center content */}
      <div className="page-loader-content">
        {/* Animated spinner ring with logo inside */}
        <div className="page-loader-logo-ring">
          <svg className="page-loader-ring-svg" viewBox="0 0 100 100">
            <circle
              className="page-loader-ring-track"
              cx="50" cy="50" r="45"
              fill="none"
              strokeWidth="2"
            />
            <circle
              className="page-loader-ring-fill"
              cx="50" cy="50" r="45"
              fill="none"
              strokeWidth="3"
              strokeDasharray="283"
              strokeDashoffset="200"
              strokeLinecap="round"
            />
          </svg>
          <div className="page-loader-logo-glow" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/kanwil-ditjenpas-kaltim/assets/logo_pas.png"
            alt=""
            className="page-loader-logo-img"
          />
        </div>

        {/* Progress bar */}
        <div className="page-loader-track">
          <div
            className="page-loader-fill"
            style={{ width: `${progress}%` }}
          />
          <div
            className="page-loader-shimmer"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Loading text */}
        <p className="page-loader-text">
          Memuat halaman<span className="page-loader-dots" />
        </p>
      </div>

      {/* Top accent bar */}
      <div className="page-loader-topbar">
        <div
          className="page-loader-topbar-fill"
          style={{ transform: `scaleX(${progress / 100})` }}
        />
      </div>
    </div>
  );
}
