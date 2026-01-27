import React from 'react'

const skills = [
  { name: 'Go / Python / Typescript' },
  { name: 'Kubernetes, Docker' },
  { name: 'AWS, GCP' },
  { name: 'Terraform, Pulumi' },
  { name: 'CI/CD (GitHub Actions)' },
  { name: 'Monitoring: Prometheus, Grafana' }
]

export default function Skills() {
  return (
    <section id="skills">
      <h2 className="text-2xl font-semibold">Skills</h2>
      <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
        {skills.map((s) => (
          <div key={s.name} className="p-3 rounded border bg-white shadow-sm">
            {s.name}
          </div>
        ))}
      </div>
    </section>
  )
}
