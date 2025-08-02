"use client"

import { Badge } from "@/components/ui/badge"
import { notFound } from "next/navigation"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { loadData } from "@/redux/actions/data"
import { Loader2 } from "lucide-react"
import Markdown from "react-markdown"
import Link from "next/link"
import { Icons } from "@/components/icons"
import Image from "next/image"
import { Card, CardTitle } from "@/components/ui/card"

interface ProjectCaseStudyPageProps {
  params: {
    id: string
  }
}

export default function ProjectCaseStudyPage({ params }: ProjectCaseStudyPageProps) {
  const dispatch: any = useDispatch()
  const { DATA, loading, error } = useSelector((state: any) => state.PortfolioData)

  useEffect(() => {
    if (loading) {
      document.body.classList.add("no-scroll")
    } else {
      document.body.classList.remove("no-scroll")
    }

    return () => {
      document.body.classList.remove("no-scroll")
    }
  }, [loading])

  useEffect(() => {
    dispatch(loadData())
  }, [dispatch])

  if (loading) {
    return (
      <main className="flex flex-col h-[100%] items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin mb-4" />
        <p>Loading project data...</p>
      </main>
    )
  }

  if (error) {
    return (
      <main className="flex flex-col min-h-[100dvh] items-center justify-center text-red-500">
        <p>Error loading portfolio: {error}</p>
        <p>Please ensure your MongoDB is connected and data is saved via the admin panel.</p>
      </main>
    )
  }

  if (!DATA) {
    return (
      <main className="flex flex-col min-h-[100dvh] items-center justify-center text-gray-500">
        <p>No portfolio data found. Please add data via the admin panel.</p>
      </main>
    )
  }

  const project = DATA.projects.find((p: any) => p._id === params.id)

  if (!project || !project.caseStudy) {
    notFound()
  }

  const { caseStudy } = project

  const getYouTubeEmbedUrl = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
    const match = url.match(regExp)
    if (match && match[2].length === 11) {
      return `https://www.youtube.com/embed/${match[2]}`
    }
    return null
  }

  const isYouTubeUrl = (url: string) => {
    return /youtu\.?be/.test(url)
  }

  const embedUrl = caseStudy.youtubeVideoUrl || null
  const youtubeEmbedUrl = embedUrl && isYouTubeUrl(embedUrl) ? getYouTubeEmbedUrl(embedUrl) : null

  return (
    <main className="container mx-auto py-12 px-4 max-w-4xl space-y-12">
      <Link href="/" className="text-blue-600 hover:underline flex items-center gap-1 mb-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg>
        Back to Portfolio
      </Link>

      <section className="space-y-6">
        <h1 className="text-4xl font-bold text-center">{project.title} - Case Study</h1>
        <Markdown className="prose max-w-full text-pretty font-sans text-base text-muted-foreground dark:prose-invert text-center">
          {project.description}
        </Markdown>
        <div className="flex justify-center gap-4 mt-4">
          {project.links?.map((link: any, idx: number) => (
            <Link href={link.link} key={idx} target="_blank" className="group/link">
              <Badge className="flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all duration-200 group-hover/link:shadow-md">
                {link.type === "Website" && <Icons.globe className="size-4" />}
                {link.type === "Source" && <Icons.github className="size-4" />}
                {link.type}
              </Badge>
            </Link>
          ))}
        </div>
      </section>

      {embedUrl && (
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-center">Live Demo</h2>
          <div className="relative aspect-video w-full rounded-lg overflow-hidden shadow-lg">
            {youtubeEmbedUrl ? (
              <iframe
                src={youtubeEmbedUrl}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              ></iframe>
            ) : (
              <video
                src={embedUrl}
                controls
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            )}
          </div>
        </section>
      )}

      {caseStudy.projectOverview && (
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-center">Project Overview</h2>
          <Card className="p-6">
            <Markdown className="prose max-w-full text-pretty font-sans text-base text-muted-foreground dark:prose-invert">
              {caseStudy.projectOverview}
            </Markdown>
          </Card>
        </section>
      )}

      {project.technologies && project.technologies.length > 0 && (
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-center">Tech Stack</h2>
          <div className="flex flex-wrap justify-center gap-2">
            {project.technologies.map((tech: string, idx: number) => (
              <Badge key={idx} className="px-3 py-1.5 text-sm font-medium">
                {tech}
              </Badge>
            ))}
          </div>
        </section>
      )}

      {caseStudy.keyFeatures && caseStudy.keyFeatures.length > 0 && (
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-center">Key Features</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-disc list-inside text-muted-foreground">
            {caseStudy.keyFeatures.map((feature: string, idx: number) => (
              <li key={idx} className="bg-card p-4 rounded-lg shadow-sm">
                {feature}
              </li>
            ))}
          </ul>
        </section>
      )}

      {caseStudy.databaseArchitectureImage?.url && (
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-center">Database Architecture</h2>
          <div className="flex justify-center">
            <Image
              src={caseStudy.databaseArchitectureImage.url || "/placeholder.svg"}
              alt="Database Architecture"
              width={800}
              height={600}
              className="max-w-full h-auto rounded-lg shadow-lg border border-border"
            />
          </div>
        </section>
      )}

      {caseStudy.systemArchitectureImage?.url && (
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-center">System Architecture Diagram</h2>
          <div className="flex justify-center">
            <Image
              src={caseStudy.systemArchitectureImage.url || "/placeholder.svg"}
              alt="System Architecture Diagram"
              width={800}
              height={600}
              className="max-w-full h-auto rounded-lg shadow-lg border border-border"
            />
          </div>
        </section>
      )}

      {caseStudy.systemArchitecture && caseStudy.systemArchitecture.length > 0 && (
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-center">System Architecture Components</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudy.systemArchitecture.map((arch: any, idx: number) => (
              <Card key={idx} className="p-6 space-y-3">
                <CardTitle className="text-xl font-semibold mb-2">{arch.title}</CardTitle>
                <Markdown className="text-pretty font-sans text-base text-muted-foreground">
                  {arch.description}
                </Markdown>
              </Card>
            ))}
          </div>
        </section>
      )}

      {caseStudy.challengesAndSolutions && caseStudy.challengesAndSolutions.length > 0 && (
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-center">Challenges & Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudy.challengesAndSolutions.map((cs: any, idx: number) => (
              <Card key={idx} className="p-6 space-y-3">
                <Markdown className="prose max-w-full text-pretty font-sans text-base text-muted-foreground dark:prose-invert">
                  {`**Challenge:** ${cs.challenge}\n\n**Solution:** ${cs.solution}`}
                </Markdown>
              </Card>
            ))}
          </div>
        </section>
      )}
    </main>
  )
}
