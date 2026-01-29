import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, CardSubtitle } from "@/components/ui/card";
import Gallery from "./ui/gallery";

const experiences = [
  {
    company: "Nested Technologies",
    role: "Software Development Intern",
    startDate: "2026.01",
    endDate: "Present",
    desc: "Implementing agentic AI features to generate quotations.",
  },
  {
    company: "Hyundai Motor Group Innovation Center in Singapore",
    role: "DevOps Intern",
    startDate: "2025.07",
    endDate: "2025.12",
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
            <CardHeader className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-3">
                <div className="w-2/3 grid grid-cols-1 gap-3 md:flex md:flex-row">
                  <CardTitle className="md:w-2/5">{p.role}</CardTitle>
                  <CardSubtitle className="md:w-3/5 flex justify-start items-center text-muted max-md:border-t-4 md:border-l-4 md:pl-3 max-md:pt-3">{` ${p.company}`}</CardSubtitle>
                </div>
                <CardSubtitle className="w-1/3 flex justify-end max-md:flex-col max-md:justify-center">
                  <div className="flex max-md:justify-center">{p.startDate}</div>
                  <div className="flex max-md:justify-center">-</div>
                  <div className="flex max-md:justify-center">{p.endDate}</div>
                </CardSubtitle>
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
