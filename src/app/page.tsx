'use client'

// Dependencies: pnpm install lucide-react

import { Button } from '@/components/ui/button'
import { ArrowRight, Mail } from 'lucide-react'

export default function Home() {
  return (

    <div className="flex-center flex-col gap-10">
      <span>shadcn test</span>
      <Button className="group" variant="secondary">
        <Mail className="-ms-1 me-2 opacity-60" size={16} strokeWidth={2} aria-hidden="true" />
        Email
        <ArrowRight
          className="-me-1 ms-2 opacity-60 transition-transform group-hover:translate-x-0.5"
          size={16}
          strokeWidth={2}
          aria-hidden="true"
        />
      </Button>
    </div>
  )
}
