import React from "react";

import { Button } from "@/components/ui/button";

export default function Header() {
    return (
        <header className="flex items-center justify-between py-4">
            <div className="text-xl font-semibold text-slate-900">Nam Dohyun</div>
            <nav className="hidden md:flex gap-3 text-sm text-muted">
                <a href="#experiences" className="hover:text-primary transition items-center flex">
                    Experiences
                </a>
                <a href="#projects" className="hover:text-primary transition items-center flex">
                    Projects
                </a>
                <a href="#contact" className="hover:text-primary transition items-center flex">
                    Contact
                </a>
                <span className="items-center flex">|</span>
                <Button asChild size="sm" className="w-15" variant={"ghost"}>
                    <a href="https://github.com/brandon-nam" target="_blank">
                        <img src="GitHub.png" alt="GitHub" className="w-4 h-4" />
                    </a>
                </Button>
                <Button asChild size="sm" className="w-15" variant={"ghost"}>
                    <a href="https://linkedin.com/in/nam-dohyun" target="_blank">
                        <img src="linkedin.png" alt="LinkedIn" className="w-4 h-4" />
                    </a>
                </Button>
                <Button asChild size="sm" className="w-15" variant={"ghost"}>
                    <a href="namdohyun-resume.pdf" target="_blank">
                        Resume
                    </a>
                </Button>
            </nav>
        </header>
    );
}
