"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const IMAGES = [
    "/gallery/replicate-prediction-0wtq1xve5hrj20cnemvbkhnn04.webp",
    "/gallery/replicate-prediction-1rwsdxwsvsrj60cnen2at7ezyr.webp",
    "/gallery/replicate-prediction-39qp9pj78nrj40cnem99h1c7pr.webp",
    "/gallery/replicate-prediction-93zmm2n905rj00cnemf96z2fvr.webp",
    "/gallery/replicate-prediction-97km5n4kkhrj40cnemna564mmc.webp",
    "/gallery/replicate-prediction-a6xgk5hfa9rj00cnen38zaf86c.webp",
    "/gallery/replicate-prediction-c6e3wv21znrj60cnen09h9e904.webp",
    "/gallery/replicate-prediction-d4r8gzqr9nrj00cnemyrqxpptm.webp",
    "/gallery/replicate-prediction-e1j5d4j55hrj20cnem4sbmfzvw.webp",
    "/gallery/replicate-prediction-ekrwvsn5e5rj60cnekzsgcfn14 (1).webp",
    "/gallery/replicate-prediction-fxmtwwkeenrj60cnemttk5642g.webp",
    "/gallery/replicate-prediction-mrjfxtd0tdrj00cnen3st6apnc.webp",
    "/gallery/replicate-prediction-nkve2a9dsnrj00cnekv8zbwtnc.webp",
    "/gallery/replicate-prediction-nxc51y0t49rj40cnemztnmehj4.webp",
    "/gallery/replicate-prediction-pqen3rhrvsrj60cnemvszcqbp4.webp",
    "/gallery/replicate-prediction-qdmjdf9czxrj60cnem5v8kesjc.webp",
    "/gallery/replicate-prediction-qj9ahzg98nrj60cnemqsbm6cpg.webp",
    "/gallery/replicate-prediction-r00a357t29rj20cnem9vs6dzf4 (1).webp",
    "/gallery/replicate-prediction-r1h8y2ts31rj40cnemb9sa7h50.webp",
    "/gallery/replicate-prediction-s94dpdg3s9rj60cnem3argt2mm.webp",
    "/gallery/replicate-prediction-tzxcjj0fxxrj60cnekxvsm841g.webp",
    "/gallery/replicate-prediction-w7acrdtjrsrj60cnen195b3exw.webp",
    "/gallery/replicate-prediction-xv2f2kky65rj20cnen0sbtkgpr.webp",
];

export default function SnapShowcase() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (IMAGES.length === 0) return;

        // Use a simpler timeout-based recursion for stability
        const timer = setTimeout(() => {
            setIndex((prev) => (prev + 1) % IMAGES.length);
        }, 4000);

        return () => clearTimeout(timer);
    }, [index]); // Re-run effect when index changes

    return (
        <div className="absolute inset-0 w-full h-full bg-black overflow-hidden select-none">
            {/* Background stack for smooth transitions */}
            {IMAGES.map((src, i) => (
                <div
                    key={src}
                    className={`absolute inset-0 transition-all duration-1000 ease-out ${i === index ? "opacity-100 scale-100 z-10" : "opacity-0 scale-110 z-0"
                        }`}
                >
                    <Image
                        src={src}
                        alt={`Snap ${i + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                        priority={i === index || i === (index + 1) % IMAGES.length}
                    />
                </div>
            ))}

            {/* Glossy Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-20 pointer-events-none" />

            {/* Label and Counter */}
            <div className="absolute bottom-6 left-6 z-30 pointer-events-none">
                <h3 className="text-white font-bold tracking-[0.4em] text-[10px] uppercase mb-2 drop-shadow-2xl opacity-60">
                    Gallery
                </h3>
                <div className="flex items-center gap-3">
                    <span className="text-primary font-bold text-xl tabular-nums drop-shadow-lg">
                        {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="h-px w-6 bg-white/20" />
                    <span className="text-white/30 text-xs tabular-nums drop-shadow-lg">
                        {IMAGES.length}
                    </span>
                </div>
            </div>

            {/* Progress Bars (Stories Style) */}
            <div className="absolute top-4 left-0 right-0 z-30 flex gap-1 px-4 pointer-events-none">
                {IMAGES.map((_, i) => (
                    <div key={i} className="h-[2px] flex-1 bg-white/10 rounded-full overflow-hidden">
                        <div
                            className={`h-full bg-primary transition-all duration-300 ${i === index ? "w-full" : i < index ? "w-full opacity-30" : "w-0"
                                }`}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
