import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, CardSubtitle } from "@/components/ui/card";
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
            <div className="flex flex-row justify-between gap-2">
              <CardTitle>National University of Singapore - BSc. in Computer Science (Honours)</CardTitle>
              <CardSubtitle className="flex justify-end max-md:flex-col">
                <div className="flex max-md:justify-center">2020</div>
                <div className="flex max-md:justify-center">-</div>
                <div className="flex max-md:justify-center">2026</div>
              </CardSubtitle>
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
