import React from 'react'

import { Button } from '@/components/ui/button'

export default function Header() {
  return (
    <header className="flex items-center justify-between py-4">
      <div className="text-xl font-semibold text-slate-900">Nam Dohyun</div>
      <nav className="hidden md:flex gap-6 text-sm text-muted">
        <a href="#skills" className="hover:text-primary transition items-center flex">Skills</a>
        <a href="#projects" className="hover:text-primary transition items-center flex">Projects</a>
        <a href="#contact" className="hover:text-primary transition items-center flex">Contact</a>
        <Button asChild size="sm">
          <a className="ml-2" href="/namdohyun-resume.pdf" target="_blank">Resume</a>
        </Button>
      </nav>
    </header>
  )
}
