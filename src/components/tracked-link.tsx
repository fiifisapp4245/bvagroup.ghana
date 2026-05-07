'use client'

import Link from 'next/link'
import posthog from 'posthog-js'
import type { ComponentProps } from 'react'

type Props = ComponentProps<typeof Link> & {
  event: string
}

export function TrackedLink({ event, onClick, ...props }: Props) {
  return (
    <Link
      {...props}
      onClick={(e) => {
        posthog.capture(event)
        onClick?.(e)
      }}
    />
  )
}
