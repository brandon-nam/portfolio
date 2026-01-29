import React from "react";

const skills = [
  { name: "Python / Java / Typescript" },
  { name: "Kubernetes, Docker, Rancher" },
  { name: "AWS, GCP" },
  { name: "Terraform" },
  { name: "CI/CD (GitHub Actions)" },
];

export default function Skills() {
  return (
    <section id="skills">
      <h2 className="text-2xl font-semibold">Skills</h2>
      <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
        {skills.map((s) => (
          <div
            key={s.name}
            className="rounded-xl font-medium text-muted max-md:text-xs p-3 border bg-white shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-md"
          >
            {s.name}
          </div>
        ))}
      </div>
    </section>
  );
}
