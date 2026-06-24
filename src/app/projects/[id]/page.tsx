import { Badge } from "@/components/ui/badge"
import { notFound } from "next/navigation"
import { PORTFOLIO } from "@/data/portfolio"
import Markdown from "react-markdown"
import Link from "next/link"
import { Icons } from "@/components/icons"
import Image from "next/image"

interface ProjectCaseStudyPageProps {
  params: {
    id: string
  }
}

// Pre-build a static page for every project that has a case study.
export function generateStaticParams() {
  return PORTFOLIO.projects.filter((p) => p.caseStudy).map((p) => ({ id: p._id }))
}

export default function ProjectCaseStudyPage({ params }: ProjectCaseStudyPageProps) {
  const project = PORTFOLIO.projects.find((p) => p._id === params.id)

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
    <main className="relative flex flex-col min-h-[100dvh] overflow-hidden">
      {/* Animated Background Elements - Same as Home Page */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-foreground/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-foreground/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-foreground/5 rounded-full blur-3xl animate-spin-slow"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="container mx-auto py-12 px-6 sm:px-8 lg:px-12 max-w-5xl space-y-16">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium hover:underline">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Back to Portfolio
        </Link>

      <section className="space-y-4">
        <h1 className="text-3xl sm:text-4xl font-bold">{project.title}</h1>
        <p className="text-base text-muted-foreground leading-relaxed max-w-3xl">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 pt-2">
          {project.links?.map((link: any, idx: number) => (
            <Link href={link.link} key={idx} target="_blank">
              <Badge className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-black text-white hover:bg-black/90">
                {link.type === "Website" && <Icons.globe className="size-3" />}
                {link.type === "Source" && <Icons.github className="size-3" />}
                {link.type}
              </Badge>
            </Link>
          ))}
        </div>
      </section>

      {embedUrl && (
        <section className="space-y-6">
          <h2 className="text-2xl font-bold">Live Demo</h2>
          <div className="relative aspect-video w-full rounded-lg overflow-hidden border">
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
          <h2 className="text-2xl font-bold">Project Overview</h2>
          <div className="text-base text-muted-foreground leading-relaxed">
            <Markdown className="prose prose-sm max-w-full text-muted-foreground leading-relaxed dark:prose-invert prose-p:leading-relaxed">
              {caseStudy.projectOverview}
            </Markdown>
          </div>
        </section>
      )}

      {project.technologies && project.technologies.length > 0 && (
        <section className="space-y-6">
          <h2 className="text-2xl font-bold">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech: string, idx: number) => (
              <Badge key={idx} className="px-3 py-1.5 text-xs font-medium bg-black text-white rounded-lg">
                {tech}
              </Badge>
            ))}
          </div>
        </section>
      )}

      {caseStudy.keyFeatures && caseStudy.keyFeatures.length > 0 && (
        <section className="space-y-6">
          <h2 className="text-2xl font-bold">Key Features</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 space-y-0">
            {caseStudy.keyFeatures.map((feature: string, idx: number) => (
              <li key={idx} className="p-4 text-sm text-muted-foreground flex items-start gap-2">
                <span className="text-foreground mt-0.5">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {caseStudy.databaseArchitectureImage?.url && (
        <section className="space-y-6">
          <h2 className="text-2xl font-bold">Database Architecture</h2>
          <div className="flex justify-center">
            <Image
              src={caseStudy.databaseArchitectureImage.url || "/placeholder.svg"}
              alt="Database Architecture"
              width={800}
              height={600}
              className="max-w-full h-auto rounded-lg border"
            />
          </div>
        </section>
      )}

      {caseStudy.systemArchitectureImage?.url && (
        <section className="space-y-6">
          <h2 className="text-2xl font-bold">System Architecture Diagram</h2>
          <div className="flex justify-center">
            <Image
              src={caseStudy.systemArchitectureImage.url || "/placeholder.svg"}
              alt="System Architecture Diagram"
              width={800}
              height={600}
              className="max-w-full h-auto rounded-lg border"
            />
          </div>
        </section>
      )}

      {caseStudy.systemArchitecture && caseStudy.systemArchitecture.length > 0 && (
        <section className="space-y-6">
          <h2 className="text-2xl font-bold">System Architecture Components</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {caseStudy.systemArchitecture.map((arch: any, idx: number) => (
              <div key={idx} className="space-y-2">
                <h3 className="text-lg font-semibold">{arch.title}</h3>
                <Markdown className="text-sm text-muted-foreground leading-relaxed">
                  {arch.description}
                </Markdown>
              </div>
            ))}
          </div>
        </section>
      )}

      {caseStudy.challengesAndSolutions && caseStudy.challengesAndSolutions.length > 0 && (
        <section className="space-y-6">
          <h2 className="text-2xl font-bold">Challenges & Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudy.challengesAndSolutions.map((cs: any, idx: number) => (
              <div key={idx} className="space-y-3">
                <div className="space-y-2">
                  <h3 className="text-sm font-semibold text-foreground">Challenge</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{cs.challenge}</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-sm font-semibold text-foreground">Solution</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{cs.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
      </div>
    </main>
  )
}
