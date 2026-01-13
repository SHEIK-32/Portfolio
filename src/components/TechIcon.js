"use client";

import React, { useState, useEffect } from "react";

const TechIcon = ({ children, name }) => {
    const [show, setShow] = useState(false);

    // Close tooltip when clicking elsewhere
    useEffect(() => {
        if (!show) return;
        const handleClickOutside = () => setShow(false);
        window.addEventListener("click", handleClickOutside);
        return () => window.removeEventListener("click", handleClickOutside);
    }, [show]);

    return (
        <div
            className="relative flex items-center justify-center cursor-help transition-transform hover:scale-110 active:scale-95"
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
            onClick={(e) => {
                e.stopPropagation();
                setShow(!show);
            }}
        >
            {children}

            {/* Tooltip Backdrop (Glassmorphism) */}
            <div
                className={`
          absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 
          bg-zinc-900/80 backdrop-blur-md border border-white/10 
          text-white text-[11px] font-medium tracking-wider rounded-lg
          transition-all duration-200 pointer-events-none z-[100]
          ${show ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-2 scale-90"}
        `}
            >
                <span className="relative z-10">{name}</span>

                {/* Glow Effect */}
                <div className="absolute inset-0 bg-primary/10 rounded-lg blur-sm -z-0" />

                {/* Arrow */}
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-zinc-900 border-r border-b border-white/10 rotate-45" />
            </div>
        </div>
    );
};

export default TechIcon;
