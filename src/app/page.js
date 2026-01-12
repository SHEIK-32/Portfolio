"use client";

import { useState } from "react";
import Link from "next/link";
import Card from "@/components/Card";
import Image from "next/image";
import { Mail, ArrowUpRight, ArrowRight, Play, X } from "lucide-react";
import { FaLinkedinIn, FaGithub, FaReact, FaJs, FaPython, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiResend, SiStripe, SiLemonsqueezy } from "react-icons/si";
import SnapShowcase from "@/components/SnapShowcase";


export default function Home() {
  const [showAdPlayer, setShowAdPlayer] = useState(false);


  return (
    <div className="min-h-screen p-8 sm:p-20">
      <main className="max-w-6xl mx-auto space-y-12">

        {/* Main Bento Grid Container */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start">

          {/* Row 1: Header (Cols 1-3) & Contacts (Col 4) */}
          <div className="md:col-span-3 space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-primary font-bold text-lg tracking-tight">Sheik.</h2>
            </div>
            <div className="py-10 pl-0">

              <h1 className="text-6xl md:text-8xl font-semibold tracking-tighter leading-[0.9] text-primary">
                Building Skills <br />
                For Future.
              </h1>
            </div>
          </div>

          <Card className="flex flex-col self-end p-5 gap-4 mb-2">
            <h3 className="text-zinc-500 text-sm uppercase tracking-wider mb-6">Catch Me Here!</h3>
            <div className="grid grid-cols-2 gap-3">
              <a
                href="mailto:mohammedsheikmohideen85@gmail.com"
                className="h-16 flex items-center justify-center bg-white/5 rounded-2xl border border-white/10 hover:border-primary/50 hover:text-primary transition-all cursor-pointer group/icon hover:bg-primary/5 shadow-inner"
              >
                <Mail size={24} className="group-hover/icon:scale-110 transition-transform" />
              </a>
              <a
                href="https://x.com/MohammedsheikZ6/"
                target="_blank"
                rel="noopener noreferrer"
                className="h-16 flex items-center justify-center bg-white/5 rounded-2xl border border-white/10 hover:border-primary/50 hover:text-primary transition-all cursor-pointer group/icon hover:bg-primary/5 shadow-inner"
              >
                <FaXTwitter size={24} className="group-hover/icon:scale-110 transition-transform" />
              </a>
              <a
                href="https://www.linkedin.com/in/mohammed-sheik-mohideen"
                target="_blank"
                rel="noopener noreferrer"
                className="h-16 flex items-center justify-center bg-white/5 rounded-2xl border border-white/10 hover:border-primary/50 hover:text-primary transition-all cursor-pointer group/icon hover:bg-primary/5 shadow-inner"
              >
                <FaLinkedinIn size={24} className="group-hover/icon:scale-110 transition-transform" />
              </a>
              <a
                href="https://github.com/SHEIK-32"
                target="_blank"
                rel="noopener noreferrer"
                className="h-16 flex items-center justify-center bg-white/5 rounded-2xl border border-white/10 hover:border-primary/50 hover:text-primary transition-all cursor-pointer group/icon hover:bg-primary/5 shadow-inner"
              >
                <FaGithub size={24} className="group-hover/icon:scale-110 transition-transform" />
              </a>
            </div>
          </Card>

          {/* Col 1: About Me & Learning */}
          <div className="space-y-6 flex flex-col relative">
            <Card className="min-h-[500px] flex flex-col justify-between group">
              <div>
                <h3 className="text-zinc-500 text-sm uppercase tracking-wider mb-6">Character Description</h3>
                <p className="text-3xl font-hand text-zinc-300 leading-relaxed">
                  I'm <span className="text-primary italic">Sheik</span>, a working professional and a student passionate about <span className="text-primary">Application development</span>, <span className="text-primary">AI & ML Development</span>, and <span className="text-primary">AI Filmaking</span>. I enjoy <span className="text-primary">building </span>and <span className="text-primary">iterating </span>interactive experiences in the digital world
                </p>
              </div>
            </Card>

            {/* Currently Learning Indicator (Moved to Left) */}
            <div className="hidden md:block absolute -left-36 bottom-[5%] z-10">
              <div className="flex flex-col items-center -translate-x-4">
                <span className="font-hand text-zinc-400 text-lg whitespace-nowrap mb-2">Currently Learning</span>
                <svg width="80" height="45" viewBox="0 0 80 45" fill="none" className="text-zinc-500 translate-x-12">
                  <path d="M10 5 Q 15 35 70 35" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M62 30 L 70 35 L 62 40" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>

            <Card className="min-h-[140px] border-primary/20 bg-primary/5 flex flex-col justify-center">

              <p className="text-3xl font-hand text-white">
                Learning about <span className="text-primary italic">building Automation Workflows, Agentic Systems</span> to thrive in the AI Era
              </p>
            </Card>
          </div>

          {/* Nested Grid for Columns 2-4 to eliminate the gap */}
          <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {/* Col 2: Featured Project */}
            <Card className="min-h-[400px] flex flex-col justify-between group">
              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop"
                alt="Featured Project"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white text-lg font-bold tracking-wider mb-1">Micro Saas That I have Built..</h3>

                <Link
                  href="/micro-saas"
                  className="bg-primary p-2 rounded-full text-white w-fit cursor-pointer hover:scale-110 transition-transform shadow-lg shadow-primary/20 block"
                >
                  <ArrowUpRight size={20} strokeWidth={3} />
                </Link>
              </div>
            </Card>

            {/* Col 3: Stack Tray & Main Stack */}
            <div className="space-y-4">
              {/* Most Used Icons Tray */}
              <Card className="p-3 bg-white/5 border-white/5 flex justify-around items-center relative overflow-visible">
                <div className="hidden lg:block absolute -top-16 right-0 z-10">
                  <div className="flex flex-col items-start translate-x-4">
                    <span className="font-hand text-zinc-400 text-lg whitespace-nowrap mb-2 translate-x-6 translate-y-6">Most Used</span>
                    <svg width="80" height="45" viewBox="0 0 80 45" fill="none" className="text-zinc-500 -translate-x-12">
                      <path d="M70 5 Q 10 5 10 35" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M3 27 L 10 35 L 17 27" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <SiNextdotjs size={24} className="text-white" />
                <SiMongodb size={24} className="text-green-500" />
                <FaReact size={24} className="text-cyan-400" />
                <FaPython size={28} className="text-blue-500" title="Python" />
              </Card>

              {/* Main Tech Stack Card */}
              <Card className="min-h-[300px] flex flex-col justify-between">
                <h3 className="text-zinc-500 text-sm uppercase tracking-wider mb-6">Arsenal</h3>
                <div className="grid grid-cols-4 gap-y-8 gap-x-4 items-center justify-items-center">
                  <FaJs size={28} className="text-yellow-400" title="JavaScript" />
                  <FaReact size={28} className="text-cyan-400" title="React" />
                  <SiNextdotjs size={28} className="text-white" title="Next.js" />
                  <SiTailwindcss size={28} className="text-cyan-300" title="TailwindCSS" />
                  <SiMongodb size={28} className="text-green-500" title="MongoDB" />
                  <div className="relative w-7 h-7" title="daisyUI">
                    <Image src="/icons/daisyui-icon.svg" alt="daisyUI" fill className="object-contain" />
                  </div>
                  <div className="relative w-7 h-7" title="AuthJS">
                    <Image src="/icons/Auth_js.png" alt="Auth-JS" fill className="object-contain" />
                  </div>
                  <div className="relative w-7 h-7" title="Higgsfield AI">
                    <Image src="/icons/higgsfield_logo.jpg" alt="Higgsfield AI" fill className="object-contain" />
                  </div>
                  <div className="relative w-7 h-7" title="fal.ai">
                    <Image src="/icons/fal_ai.jpg" alt="fal.ai" fill className="object-contain" />
                  </div>
                  <div className="relative w-7 h-7" title="n8n">
                    <Image src="/icons/n8n.png" alt="n8n" fill className="object-contain" />
                  </div>
                  <SiResend size={28} className="text-white" title="Resend" />
                  <div className="relative w-7 h-7" title="node">
                    <Image src="/icons/node_js.png" alt="node" fill className="object-contain" />
                  </div>
                  <SiLemonsqueezy size={28} className="text-yellow-500" title="LemonSqueezy" />
                  <FaPython size={28} className="text-blue-500" title="Python" />
                  <FaHtml5 size={28} className="text-orange-500" title="HTML5" />
                  <FaCss3Alt size={28} className="text-blue-600" title="CSS3" />
                </div>
              </Card>
            </div>

            {/* Col 4: Gallery Pillar */}
            <Card className="min-h-[400px] p-0 overflow-hidden relative group">
              <SnapShowcase />
            </Card>

            {/* Row 3: Ad Showcase (Spans across all 3 sub-columns) */}
            <Card className="md:col-span-3 p-6 flex flex-col justify-between group overflow-hidden relative border-primary/10">
              <div className="flex items-center justify-between gap-6 z-10">
                {/* Product Info */}
                <div className="flex-1 space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <h3 className="text-zinc-500 text-[10px] uppercase tracking-widest font-bold">The Product</h3>
                  </div>
                  <div className="relative aspect-square max-w-[140px] mx-auto rounded-2xl overflow-hidden border border-white/10 bg-white/5 shadow-2xl">
                    <img
                      src="/icons/Apple's lazer cannonjpeg.jpeg"
                      alt="Product"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                </div>

                {/* Arrow Transition (Hand-drawn style) */}
                <div className="flex flex-col items-center justify-center pt-4 pointer-events-none opacity-50">
                  <div className="flex flex-col items-center">
                    <svg width="60" height="25" viewBox="0 0 80 30" fill="none" className="text-zinc-500">
                      <path d="M10 15 Q 40 5 70 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M62 10 L 70 15 L 62 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>

                {/* Ad/Video Info */}
                <div className="flex-[1.2] space-y-3">
                  <div className="flex items-center justify-end gap-2">
                    <h3 className="text-zinc-500 text-[10px] uppercase tracking-widest font-bold text-right">The Ad</h3>
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                  </div>
                  <div
                    onClick={() => setShowAdPlayer(true)}
                    className="relative aspect-video max-w-[280px] mx-auto rounded-2xl overflow-hidden border border-white/10 bg-zinc-950 shadow-2xl group/video cursor-pointer flex items-center justify-center transition-all hover:border-primary/30"
                  >
                    {/* Blank Screen Background with subtle glow */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 to-transparent opacity-0 group-hover/video:opacity-100 transition-opacity duration-700" />

                    {/* Static Play Button - Always Visible */}
                    <div className="relative z-10 flex flex-col items-center gap-2">
                      <div className="p-3.5 rounded-full bg-primary/10 backdrop-blur-md border border-primary/20 text-primary group-hover/video:scale-110 group-hover/video:bg-primary/20 transition-all duration-500 shadow-2xl">
                        <Play size={24} fill="currentColor" className="translate-x-0.5" />
                      </div>
                      <span className="text-[9px] text-zinc-500 uppercase tracking-[0.2em] font-bold group-hover/video:text-primary transition-colors">Watch Ad</span>
                    </div>

                    {/* Bottom Status Tag */}
                    <div className="absolute bottom-3 left-3 pointer-events-none">
                      <div className="px-1.5 py-0.5 bg-white/5 backdrop-blur-md rounded-md border border-white/10">
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom CTA Section */}
              <div className="mt-6 pt-4 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="space-y-0.5">
                  <h4 className="text-white font-bold text-base">Got a product that needs an Ad?</h4>
                  <p className="text-zinc-500 text-xs">Let&apos;s turn your vision into a cinematic experience.</p>
                </div>
                <a
                  href="mailto:mohammedsheikmohideen85@gmail.com?subject=Inquiry regarding Ad Creation&body=Hi Sheik, I have a product and I am looking for a cinematic ad. Here are some details..."
                  className="group/mail flex items-center gap-2.5 bg-white text-black px-5 py-2 rounded-xl font-bold hover:bg-primary hover:text-white transition-all duration-300 shadow-xl text-sm"
                >
                  Mail Me For An Ad
                  <ArrowUpRight size={18} className="group-hover/mail:translate-x-1 group-hover/mail:-translate-y-1 transition-transform" />
                </a>
              </div>

              {/* Background Glow */}
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
            </Card>
            {/* Row 4: Buy Me a Coffee (Ultra Compact) */}
            <Card className="md:col-span-3 p-4 flex items-center justify-between group overflow-hidden relative border-primary/10">
              <div className="flex items-center gap-4 z-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center group-hover:border-primary/30 transition-colors">
                    <span className="text-xl">☕</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm">Caffeine for Creation</h4>
                    <p className="text-zinc-500 text-[11px]">Your support fuels new tools & automation.</p>
                  </div>
                </div>
              </div>

              <a
                href="https://buy.polar.sh/polar_cl_oBTlYSlsHEXZ82dMuVh8SJnxAiNSDfiPbnIAg3nFiTw"
                className="group/coffee flex items-center gap-2 bg-white text-black px-4 py-2 rounded-xl font-bold hover:bg-primary hover:text-white transition-all duration-300 shadow-xl text-[11px] relative z-10"
              >
                Buy me a coffee
                <ArrowRight size={14} className="group-hover/coffee:translate-x-1 transition-transform" />
              </a>

              {/* Background Glow */}
              <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-primary/5 blur-[80px] rounded-full pointer-events-none" />
            </Card>
          </div>

        </section>

      </main>

      {/* Fullscreen Video Player Modal */}
      {showAdPlayer && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-2xl p-4 md:p-12 animate-in fade-in duration-300">
          <button
            onClick={() => setShowAdPlayer(false)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors border border-white/10 group"
          >
            <X size={24} className="group-hover:rotate-90 transition-transform" />
          </button>

          <div className="w-full max-w-5xl aspect-video relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-black animate-in zoom-in-95 duration-300">
            <video
              src="/icons/AD_1.mp4"
              className="w-full h-full"
              autoPlay
              controls
              playsInline
            />
          </div>
        </div>
      )}
    </div>
  );
}
