import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import Gallery from "./ui/gallery";

const experiences = [
    {
        company: "Nested Technologies",
        role: "Software Development Intern",
        date: "2026.01 - Present",
        desc: "Implementing agentic AI features to generate quotations.",
    },
    {
        company: "Hyundai Motor Group Innovation Center in Singapore",
        role: "DevOps Intern",
        date: "2025.07 - 2025.12",
        desc: "Involved in KIA Slovakia deployments, developed ThingWorx modules, improved CI/CD pipelines.",
        images: [
            `${import.meta.env.BASE_URL}experiences/hmgics/hmgics1.JPG`,
            `${import.meta.env.BASE_URL}experiences/hmgics/hmgics2.JPG`,
            `${import.meta.env.BASE_URL}experiences/hmgics/hmgics3.jpg`,
        ],
    },
];

export default function Experiences() {
    const [currentIndex, setCurrentIndex] = React.useState(0);

    return (
        <section id="experiences">
            <h2 className="text-2xl font-semibold">Experiences</h2>
            <div className="mt-4 flex flex-col sm:grid-cols-2 gap-6">
                {experiences.map((p) => (
                    <Card key={p.company} className="transition-all duration-300 hover:scale-105 hover:shadow-md">
                        <CardHeader>
                            <div className="flex justify-between items-center">
                                <div className="flex flex-row justify-between gap-2">
                                    <CardTitle>{`${p.role}`}</CardTitle>
                                    <CardTitle>|</CardTitle>
                                    <CardTitle>{` ${p.company}`}</CardTitle>
                                </div>
                                <div className="text-sm text-muted">{p.date}</div>
                            </div>
                            <CardDescription className="mt-2">{p.desc}</CardDescription>
                        </CardHeader>
                        {p.images && (
                            <CardContent>
                                <div className="mt-2">
                                    <Gallery images={p.images} />
                                </div>
                            </CardContent>
                        )}

                        <CardFooter />
                    </Card>
                ))}
            </div>
        </section>
    );
}
