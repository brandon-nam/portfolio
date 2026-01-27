import React from "react";
import { Monitor, Cloud, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
    return (
        <section className="grid md:grid-cols-2 gap-8 items-center">
            <div className="group relative w-full overflow-hidden rounded-lg">
                <img
                    src="/brandon/brandon.JPG"
                    className="relative w-full aspect-[16:9] object-cover transition-all duration-500 group-hover:scale-105 group-hover:blur-sm group-hover:brightness-50"
                    alt="Full Background"
                />

                <img
                    src="/brandon/brandon-rmvbg.png"
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:scale-105"
                    alt="Cutout"
                />
            </div>
            <div className="group transition-transform duration-300 hover:scale-105 cursor-pointer">
                <span>
                    <span className="inline-block text-4xl font-bold transition-transform duration-500 group-hover:rotate-[360deg]">
                        Hi,{" "}
                    </span>
                    <span className="text-4xl font-bold">I’m Dohyun!</span>
                </span>
                <p className="mt-4 text-slate-600">
                    I build reliable, automated systems and tools to help teams ship quickly and operate safely. I'm looking for
                    roles in software engineering, DevOps, SRE, Test Automation, and cloud.
                </p>
                <div className="mt-6 flex gap-4">
                    <Button asChild>
                        <a href="#experiences">See Experiences</a>
                    </Button>
                    <Button asChild>
                        <a href="#projects">See Projects</a>
                    </Button>
                    <Button variant="outline" asChild>
                        <a href="#contact">Contact</a>
                    </Button>
                </div>
            </div>
        </section>
    );
}
