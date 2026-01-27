import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import Gallery from "./ui/gallery";

const images = [];

export default function Education() {
    const [currentIndex, setCurrentIndex] = React.useState(0);

    return (
        <section id="education">
            <h2 className="text-2xl font-semibold">Education</h2>
            <p className="mt-4 text-slate-600"></p>
            <div className="mt-4 flex flex-col sm:grid-cols-2 gap-6">
                <Card className="transition-all duration-300 hover:scale-105 hover:shadow-md">
                    <CardHeader>
                        <div className="flex justify-between items-center">
                            <div className="flex flex-row justify-between gap-2">
                                <CardTitle>BSc. in Computer Science (Honours)</CardTitle>
                                <CardTitle>|</CardTitle>
                                <CardTitle>2020 - 2026</CardTitle>
                            </div>
                        </div>
                        <CardDescription className="mt-2">
                            Took a leave of absence in 2021 to serve in the Republic of Korea Army.
                        </CardDescription>
                    </CardHeader>
                    <CardFooter />
                </Card>
            </div>
        </section>
    );
}
