"use client"

import { HackathonCard } from "@/components/hackathon-card"
import BlurFade from "@/components/magicui/blur-fade"
import BlurFadeText from "@/components/magicui/blur-fade-text"
import { ProjectCard } from "@/components/project-card"
import { ResumeCard } from "@/components/resume-card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { cva } from "class-variance-authority"
import Markdown from "react-markdown"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loadData } from "@/redux/actions/data"
import type { IData } from "@/models/DataModel"

const BLUR_FADE_DELAY = 0.04
const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1.5 text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 hover:shadow-md",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:shadow-sm",
        destructive: "border-transparent bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "text-foreground border-border hover:bg-accent hover:text-accent-foreground hover:shadow-sm",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
)
export default function Page() {
  const dispatch: any = useDispatch()
  const { DATA, loading, error } = useSelector((state: any) => state.PortfolioData)
  useEffect(() => {
    if (loading) {
      document.body.classList.add("no-scroll")
    } else {
      document.body.classList.remove("no-scroll")
    }
    // Clean up the class when the component unmounts or loading state changes
    return () => {
      document.body.classList.remove("no-scroll")
    }
  }, [loading])
  useEffect(() => {
    dispatch(loadData())
  }, [dispatch])
  if (loading) {
    return (
      <div className="flex items-center justify-center h-[100%]">
        <div className="flex flex-col items-center space-y-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-foreground"></div>
          <p className="text-lg font-medium text-muted-foreground">Loading portfolio...</p>
        </div>
      </div>
    )
  }
  if (!DATA) {
    return (
      <div className="flex items-center justify-center min-h-screen max-h-screen">
        <div className="text-center space-y-4 p-8 rounded-2xl border border-destructive/20 bg-destructive/5">
          <div className="text-2xl font-bold text-destructive">⚠️ Error</div>
          <p className="text-muted-foreground">Failed to load portfolio data.</p>
        </div>
      </div>
    )
  }

  const portfolio: IData = DATA

  // Find the 'X' social link dynamically
  const xSocialLink = portfolio.contact.social.find((s) => s.name === "X")?.url || "#"

  return (
    <main className="flex flex-col min-h-[100dvh] space-y-16 px-4 py-8 max-w-4xl mx-auto">
      <section id="hero" className="pt-8">
        <div className="mx-auto w-full space-y-8">
          <div className="gap-8 flex justify-between items-start">
            <div className="flex-col flex flex-1 space-y-4">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-4xl font-bold tracking-tight sm:text-6xl xl:text-7xl"
                yOffset={8}
                text={`Hi, I'm ${portfolio.name.split(" ")[0]} 👋`}
              />
              <BlurFadeText
                className="max-w-[600px] text-lg md:text-xl text-muted-foreground leading-relaxed"
                delay={BLUR_FADE_DELAY * 2}
                text={portfolio.description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-2xl"></div>
                <Avatar className="size-32 border-4 border-background shadow-2xl relative">
                  <AvatarImage alt={portfolio.name} src={portfolio.avatarUrl.url || "/placeholder.svg"} />
                  <AvatarFallback className="text-2xl font-bold">{portfolio.initials}</AvatarFallback>
                </Avatar>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about" className="space-y-6">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <div className="flex items-center space-x-3">
            <div className="h-8 w-1 bg-primary rounded-full"></div>
            <h2 className="text-2xl font-bold">About</h2>
          </div>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <div className="bg-card border border-border/50 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
            <Markdown className="prose max-w-full text-pretty font-sans text-base text-muted-foreground dark:prose-invert prose-p:leading-relaxed">
              {portfolio.summary}
            </Markdown>
            <div className="mt-6">
              <a
                href={portfolio.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-foreground text-background font-semibold rounded-xl shadow-sm hover:shadow-md hover:bg-foreground/90 transition-all duration-200 group"
              >
                <span>Download Resume</span>
                <svg
                  className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </BlurFade>
      </section>
      <section id="skills" className="space-y-6">
        <BlurFade delay={BLUR_FADE_DELAY * 9}>
          <div className="flex items-center space-x-3">
            <div className="h-8 w-1 bg-primary rounded-full"></div>
            <h2 className="text-2xl font-bold">Skills</h2>
          </div>
        </BlurFade>
        <div className="flex flex-wrap gap-1">
          <div className="flex flex-wrap gap-1">
            {portfolio.skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge key={skill}>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="education" className="space-y-6">
        <BlurFade delay={BLUR_FADE_DELAY * 7}>
          <div className="flex items-center space-x-3">
            <div className="h-8 w-1 bg-primary rounded-full"></div>
            <h2 className="text-2xl font-bold">Education</h2>
          </div>
        </BlurFade>
        <div className="space-y-4">
          {portfolio.education.map((education, id) => (
            <BlurFade key={education.school} delay={BLUR_FADE_DELAY * 8 + id * 0.05}>
              <ResumeCard
                key={education.school}
                href={education.link}
                logoUrl={education.logoUrl.url}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="work" className="space-y-6">
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <div className="flex items-center space-x-3">
            <div className="h-8 w-1 bg-primary rounded-full"></div>
            <h2 className="text-2xl font-bold">Work Experience</h2>
          </div>
        </BlurFade>
        <div className="space-y-4">
          {portfolio.work.map((work, id) => (
            <BlurFade key={work.company} delay={BLUR_FADE_DELAY * 6 + id * 0.05}>
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl.url}
                altText={work.company}
                title={work.company}
                subtitle={work.location}
                href={work.link}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="projects" className="space-y-12">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <div className="text-center space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                ✨ My Projects
              </div>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                Check out my latest work
              </h2>
              <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                I've worked on a variety of projects, from simple websites to complex web applications. Here are a few
                of my favorites.
              </p>
            </div>
          </div>
        </BlurFade>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 max-w-5xl mx-auto">
          {portfolio.projects
            .slice()
            .reverse()
            .map((project, id) => (
              <BlurFade key={project.title} delay={BLUR_FADE_DELAY * 12 + id * 0.05}>
                <ProjectCard
                  link={project.link}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  video={project.video.url}
                  links={project.links}
                  projectId={project._id} // Pass project ID for case study link
                  hasCaseStudyVideo={!!project.caseStudy?.youtubeVideoUrl} // Pass new prop
                />
              </BlurFade>
            ))}
        </div>
      </section>
      <section id="hackathons" className="space-y-12">
        <BlurFade delay={BLUR_FADE_DELAY * 13}>
          <div className="text-center space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                🏆 Competitions
              </div>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                Competitive Programming Journey
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
                Explore my journey through the world of competitive programming, where I've tackled complex challenges,
                sharpened my coding skills, and consistently pushed the boundaries of problem-solving.
              </p>
            </div>
          </div>
        </BlurFade>
        {portfolio.hackathons && portfolio.hackathons.length > 0 ? (
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <div className="bg-card border border-border/50 rounded-2xl p-8 shadow-sm">
              <ul className="space-y-6 relative">
                <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/30 to-transparent"></div>
                {portfolio.hackathons
                  .slice()
                  .reverse()
                  .map((project, id) => (
                    <BlurFade key={`${project.title}-${project.dates}`} delay={BLUR_FADE_DELAY * 15 + id * 0.05}>
                      <HackathonCard
                        title={project.title}
                        description={project.description}
                        location={project.location}
                        dates={project.dates}
                        image={project.image.url}
                      />
                    </BlurFade>
                  ))}
              </ul>
            </div>
          </BlurFade>
        ) : (
          <div className="text-center py-12 text-muted-foreground">
            <p className="text-lg">No competitions available at the moment.</p>
          </div>
        )}
      </section>
      <section id="contact" className="space-y-8 pb-16">
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <div className="text-center space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                💬 Contact
              </div>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                Get in Touch
              </h2>
              <div className="bg-card border border-border/50 rounded-2xl p-8 shadow-sm max-w-2xl mx-auto">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Want to chat? Just shoot me a dm{" "}
                  <Link
                    href="https://www.linkedin.com/in/im-zain/"
                    className="text-primary hover:text-primary/80 underline underline-offset-4 decoration-2 transition-colors duration-200"
                  >
                    with a direct question on LinkedIn
                  </Link>{" "}
                  and I'll respond whenever I can. I will ignore all soliciting.
                </p>
              </div>
            </div>
          </div>
        </BlurFade>
      </section>
    </main>
  )
}
