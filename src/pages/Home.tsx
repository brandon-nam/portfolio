import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Experiences from "@/components/Experiences";
import Education from "@/components/Education";

export default function Home() {
    return (
        <div className="max-w-5xl mx-auto px-6 py-12">
            <Header />
            <main className="mt-12 space-y-12">
                <Hero />
                <Education />
                <Experiences />
                <Skills />
                <Projects />
                <Contact />
            </main>
        </div>
    );
}
