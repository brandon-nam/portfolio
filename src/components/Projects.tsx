import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import Gallery from "./ui/gallery";
import { Button } from "./ui/button";

const projects = [
  {
    title: "LecBuddy - Panopto Lecture Summarizer",
    desc: "Chrome extension to summarize lecture videos using OpenAI's Whisper. Presented at Hack & Roll 2026. I use it on a daily basis. ",
    images: [
      `${import.meta.env.BASE_URL}projects/lecbuddy/lecbuddy1.jpeg`,
      `${import.meta.env.BASE_URL}projects/lecbuddy/lecbuddy2.jpeg`,
      `${import.meta.env.BASE_URL}projects/lecbuddy/lecbuddy3.jpeg`,
    ],
    repoLink: "https://github.com/brandon-nam/lec-buddy",
  },
  {
    title: "GrantSync - Orchestrating Funding Sustainability",
    desc: "AI-powered Platform to help non-profits find and manage grants. Presented at Hack4Good 2026.",
    images: [
      `${import.meta.env.BASE_URL}projects/grantsync/grantsync1.png`,
      `${import.meta.env.BASE_URL}projects/grantsync/grantsync2.png`,
      `${import.meta.env.BASE_URL}projects/grantsync/grantsync3.png`,
    ],
    repoLink: "https://github.com/brandon-nam/grantsync",
  },
  {
    title: "TravelWise - Travel site recommendation platform",
    desc: "AI-powered travel site recommendation platform that executes ETL pipelines to gather and analyze user reviews from Reddit. Presented at STePs 2025.",
    images: [`${import.meta.env.BASE_URL}projects/travelwise/travelwise.png`],
    repoLink: "https://github.com/brandon-nam/travel-wise",
  },
  {
    title: "Omniversity - Global Exchange Students Platform",
    desc: "An app that connects exchange students with recommendation systems.",
    images: [
      `${import.meta.env.BASE_URL}projects/omniversity/omniversity1.png`,
      `${import.meta.env.BASE_URL}projects/omniversity/omniversity2.png`,
      `${import.meta.env.BASE_URL}projects/omniversity/omniversity3.png`,
      `${import.meta.env.BASE_URL}projects/omniversity/omniversity4.png`,
      `${import.meta.env.BASE_URL}projects/omniversity/omniversity5.png`,
    ],
    repoLink: "https://github.com/exchange-reddit",
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <h2 className="text-2xl font-semibold">Projects</h2>

      <div className="mt-4 grid sm:grid-cols-2 gap-6">
        {projects.map((p) => (
          <Card key={p.title} className="transition-all duration-300 hover:scale-105 hover:shadow-md">
            <CardHeader>
              <div className="flex flex-row justify-between items-center">
                <CardTitle>{p.title}</CardTitle>
                <div>
                  <Button asChild size="sm" className="w-15" variant={"ghost"}>
                    <a href={p.repoLink} target="_blank" className="flex shrink-0">
                      <img src={`${import.meta.env.BASE_URL}GitHub.png`} alt="GitHub" className="w-4 h-4 shrink-0" />
                    </a>
                  </Button>
                </div>
              </div>
              <CardDescription className="mt-2">{p.desc}</CardDescription>
            </CardHeader>
            <CardContent>{p.images && <Gallery images={p.images} />}</CardContent>
            <CardFooter />
          </Card>
        ))}
      </div>
    </section>
  );
}
