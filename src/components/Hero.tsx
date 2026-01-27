import React from 'react'
import { Monitor, Cloud, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section className="grid md:grid-cols-2 gap-8 items-center">
      <div>
        <h1 className="text-4xl font-bold">Hi, I’m Brandon — Fresh SWE focusing on Cloud & SRE</h1>
        <p className="mt-4 text-slate-600">I build reliable, automated systems and tools to help teams ship quickly and operate safely. I'm looking for roles in software engineering, DevOps, SRE, and cloud infrastructure.</p>
        <div className="mt-6 flex gap-4">
          <Button asChild>
            <a href="#projects">See Projects</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="#contact">Contact</a>
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4">
        <div className="p-4 rounded-lg bg-surface shadow-card border">
          <div className="flex items-center gap-3">
            <Cloud className="w-6 h-6 text-primary" />
            <div>
              <div className="text-sm font-medium">Cloud</div>
              <div className="text-xs text-muted">AWS, GCP, IaC</div>
            </div>
          </div>
        </div>
        <div className="p-4 rounded-lg bg-surface shadow-card border">
          <div className="flex items-center gap-3">
            <Monitor className="w-6 h-6 text-primary" />
            <div>
              <div className="text-sm font-medium">Automation</div>
              <div className="text-xs text-muted">CI/CD, Terraform, Ansible</div>
            </div>
          </div>
        </div>
        <div className="p-4 rounded-lg bg-surface shadow-card border">
          <div className="flex items-center gap-3">
            <Zap className="w-6 h-6 text-primary" />
            <div>
              <div className="text-sm font-medium">SRE</div>
              <div className="text-xs text-muted">Observability, SLIs, Runbooks</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
