import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'

const projects = [
  {
    title: 'Infra Automation Toolkit',
    desc: 'A set of Terraform modules and GitHub Actions workflows to provision secure clusters and apps.'
  },
  {
    title: 'SRE Playbook',
    desc: 'Observability patterns, dashboards, SLO definitions and runbooks used for on-call readiness.'
  },
  {
    title: 'Microservice Demo',
    desc: 'React + Go microservice example with CI, canary deploy and infra-as-code.'
  }
]

export default function Projects() {
  return (
    <section id="projects">
      <h2 className="text-2xl font-semibold">Projects</h2>
      <div className="mt-4 grid sm:grid-cols-2 gap-6">
        {projects.map((p) => (
          <Card key={p.title} className="hover:shadow-md transition">
            <CardHeader>
              <CardTitle>{p.title}</CardTitle>
              <CardDescription className="mt-2">{p.desc}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mt-2">
                <a className="text-primary text-sm hover:underline" href="#">View repo</a>
              </div>
            </CardContent>
            <CardFooter />
          </Card>
        ))}
      </div>
    </section>
  )
}
