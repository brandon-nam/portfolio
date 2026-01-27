import React from 'react'
import { Input } from '@/components/ui/input'

export default function Contact() {
  return (
    <section id="contact">
      <h2 className="text-2xl font-semibold">Contact</h2>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <form className="p-4 bg-white rounded shadow-card border">
          <label className="block text-sm">Name</label>
          <Input className="mt-1" />
          <label className="block text-sm mt-3">Email</label>
          <Input type="email" className="mt-1" />
          <label className="block text-sm mt-3">Message</label>
          <textarea className="w-full mt-1 p-2 border rounded" rows={4} />
          <div className="mt-3">
            <button type="button" className="px-4 py-2 bg-primary text-white rounded">Send</button>
          </div>
        </form>
        <div className="p-4 rounded bg-white shadow-card border">
          <p className="text-sm">I'm actively looking for SWE / DevOps / SRE roles. Open to relocation and remote work.</p>
          <div className="mt-4 text-sm text-muted">Email: your.email@example.com</div>
        </div>
      </div>
    </section>
  )
}
