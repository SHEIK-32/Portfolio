import Link from "next/link";
import { MoveLeft } from "lucide-react";

export default function MicroSaasPage() {
    return (
        <div className="min-h-screen p-8 sm:p-20 relative flex items-center justify-center overflow-hidden">
            {/* Background match to home - Subtle glowing accents */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" />

            <main className="relative z-10 text-center space-y-8">
                <Link
                    href="/"
                    className="absolute top-[-60px] left-0 md:left-[-100px] flex items-center gap-2 text-zinc-500 hover:text-primary transition-colors group"
                >
                    <MoveLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="font-medium">Back to Home</span>
                </Link>

                <div className="space-y-4">
                    <h1 className="text-7xl md:text-9xl font-bold tracking-tighter text-zinc-800 animate-pulse">
                        COMING <br /> SOON
                    </h1>
                    <p className="text-zinc-500 text-lg md:text-xl font-hand tracking-wide">
                        Building something amazing for the future.
                    </p>
                </div>

                {/* Decorative element */}
                <div className="flex justify-center mt-12">
                    <div className="h-1 w-24 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full opacity-50" />
                </div>
            </main>
        </div>
    );
}
