import type React from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

interface Props {
  title: string
  description: string
  dates: string
  location: string
  image?: string
  links?: readonly {
    icon: React.ReactNode
    title: string
    href: string
  }[]
}

export function HackathonCard({ title, description, dates, location, image, links }: Props) {
  return (
    <li className="relative ml-12 py-6 group">
      <div className="absolute -left-16 top-4 flex items-center justify-center">
        <div className="relative">
          <Avatar className="border-2 border-primary/20 size-14 bg-card shadow-lg group-hover:border-primary/40 transition-colors duration-300">
            <AvatarImage src={image || "/placeholder.svg"} alt={title} className="object-contain" />
            <AvatarFallback className="font-semibold text-sm bg-primary/10 text-primary">{title[0]}</AvatarFallback>
          </Avatar>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>

      <div className="bg-card/50 border border-border/50 rounded-xl p-6 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:border-primary/20 hover:-translate-y-0.5">
        <div className="flex flex-1 flex-col justify-start gap-3">
          {dates && (
            <time className="text-xs text-muted-foreground bg-muted/50 px-3 py-1 rounded-full border border-border/30 w-fit">
              {dates}
            </time>
          )}

          <h2 className="font-semibold text-lg leading-tight group-hover:text-primary transition-colors duration-200">
            {title}
          </h2>

          {location && (
            <p className="text-sm text-muted-foreground flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              {location}
            </p>
          )}

          {description && (
            <div className="prose dark:prose-invert text-sm text-muted-foreground leading-relaxed">{description}</div>
          )}
        </div>

        {links && links.length > 0 && (
          <div className="mt-4 flex flex-row flex-wrap items-start gap-2">
            {links?.map((link, idx) => (
              <Link href={link.href} key={idx} className="group/link">
                <Badge
                  className="flex items-center gap-2 px-3 py-2 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all duration-200 group-hover/link:shadow-md"
                  title={link.title}
                >
                  {link.icon}
                  {link.title}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </div>
    </li>
  )
}
