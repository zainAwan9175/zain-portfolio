"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardHeader } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { ChevronRightIcon } from "lucide-react"
import Link from "next/link"
import React from "react"

interface ResumeCardProps {
  logoUrl: string
  altText: string
  title: string
  subtitle?: string
  href?: string
  badges?: readonly string[]
  period: string
  description?: string
}

export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false)

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (description) {
      e.preventDefault()
      setIsExpanded(!isExpanded)
    }
  }

  return (
    <Link href={href || "#"} className="block cursor-pointer" onClick={handleClick}>
      <Card className="flex">
        <div className="flex-none">
          <Avatar className="border size-12 m-auto bg-muted-background dark:bg-foreground">
            <AvatarImage src={logoUrl || "/placeholder.svg"} alt={altText} className="object-contain" />
            <AvatarFallback>{altText[0]}</AvatarFallback>
          </Avatar>
        </div>

        <div className="flex-grow ml-4 items-center flex-col group">
          <CardHeader className="p-0">
            <div className="flex items-center justify-between gap-x-4 text-base">
              <h3 className="inline-flex items-center justify-center font-semibold leading-none text-base group-hover:text-primary transition-colors duration-200">
                {title}
                {badges && (
                  <span className="inline-flex gap-x-2 ml-3">
                    {badges.map((badge, index) => (
                      <Badge
                        variant="secondary"
                        className="text-xs font-medium px-2 py-1 rounded-full bg-muted/50 border border-border/30"
                        key={index}
                      >
                        {badge}
                      </Badge>
                    ))}
                  </span>
                )}
                <ChevronRightIcon
                  className={cn(
                    "size-4 ml-2 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100",
                    isExpanded ? "rotate-90" : "rotate-0",
                  )}
                />
              </h3>
              <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">{period}</div>
            </div>
            {subtitle && <div className="font-sans text-sm text-muted-foreground mt-2 leading-relaxed">{subtitle}</div>}
          </CardHeader>

          {description && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: isExpanded ? 1 : 0,
                height: isExpanded ? "auto" : 0,
              }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="overflow-hidden"
            >
              {description}
            </motion.div>
          )}
        </div>
      </Card>
    </Link>
  )
}
