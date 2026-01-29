import React from "react";
import { Monitor, Cloud, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="group relative w-full overflow-hidden rounded-lg">
                <img
                    src={`${import.meta.env.BASE_URL}brandon/brandon.JPG`}
                    className="relative w-full aspect-[16:9] object-cover transition-all duration-500 group-hover:scale-105 group-hover:blur-sm group-hover:brightness-50"
                    alt="Full Background"
                />

                <img
                    src={`${import.meta.env.BASE_URL}brandon/brandon-rmvbg.png`}
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:scale-105"
                    alt="Cutout"
                />
            </div>
            <div className="flex flex-col items-center text-center md:items-start md:text-left group transition-transform duration-300">
                <div className="space-y-2">
                    <span className="block text-3xl md:text-5xl font-light tracking-tight">
                        <span className="inline-block transition-transform duration-700 group-hover:rotate-[360deg] origin-center">
                            Hi,{" "}
                        </span>
                        <span className="text-slate-900"> I’m Dohyun!</span>
                    </span>
                </div>

                <p className="mt-6 text-base md:text-lg text-slate-600 leading-relaxed max-w-md">
                    I build reliable, automated systems and tools to help teams ship quickly and operate safely. I'm looking for
                    roles in <span className="font-semibold text-slate-800">Software Engineering, DevOps, SRE, and Cloud.</span>
                </p>

                <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-3 w-full">
                    <Button asChild className="w-full sm:w-auto">
                        <a href="#experiences">See Experiences</a>
                    </Button>
                    <Button asChild className="w-full sm:w-auto">
                        <a href="#projects">See Projects</a>
                    </Button>
                    <Button variant="outline" asChild className="w-full sm:w-auto">
                        <a href="#contact">Contact</a>
                    </Button>
                </div>
            </div>
        </section>
    );
}
