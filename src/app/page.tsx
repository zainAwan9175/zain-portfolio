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
import { useEffect, useState } from "react"
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

// Work Experience Item Component
function WorkExperienceItem({ work, id }: { work: any; id: number }) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <BlurFade key={work.company} delay={BLUR_FADE_DELAY * 11 + id * 0.1}>
      <div className="space-y-2 sm:space-y-3">
        <div 
          className="flex items-start gap-3 sm:gap-4 cursor-pointer group"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <Avatar className="size-10 sm:size-12 border flex-shrink-0">
            <AvatarImage
              alt={work.company}
              src={work.logoUrl?.url || work.logoUrl}
            />
            <AvatarFallback>{work.company[0]}</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
              <div className="inline-flex items-center gap-2">
                <span className="text-base sm:text-lg font-semibold">{work.company}</span>
                <svg 
                  className={`size-3.5 sm:size-4 flex-shrink-0 transition-transform duration-300 ease-in-out ${isExpanded ? 'rotate-90' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <span className="text-xs sm:text-sm text-muted-foreground">{work.start} - {work.end ?? "Present"}</span>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground mt-1">{work.location}</p>
          </div>
        </div>
        
        <div 
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="ml-12 sm:ml-16 text-sm sm:text-base text-muted-foreground space-y-2 sm:space-y-3 pt-2 leading-relaxed">
            {Array.isArray(work.description) ? (
              work.description.map((desc: string, i: number) => (
                <p key={i}>• {desc}</p>
              ))
            ) : (
              <p>{work.description}</p>
            )}
          </div>
        </div>
      </div>
    </BlurFade>
  );
}

// Work Experience List Component
function WorkExperienceList({ work }: { work: any[] }) {
  return (
    <div className="space-y-8">
      {work.map((workItem, id) => (
        <WorkExperienceItem key={workItem.company} work={workItem} id={id} />
      ))}
    </div>
  );
}

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
      <div className="flex items-center justify-center min-h-screen bg-background">
        <div className="flex flex-col items-center space-y-6">
          <div className="relative">
            <span className="inline-flex items-center justify-center w-20 h-20 text-7xl font-black text-white bg-black rounded-full shadow-lg animate-bounce">Z</span>
          </div>
          <p className="text-lg font-medium text-muted-foreground animate-pulse">Loading portfolio...</p>
        </div>
      </div>
    )
  }
  if (!DATA) {
    return (
      <div className="flex items-center justify-center min-h-screen">
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
    <main className="relative flex flex-col min-h-[100dvh] overflow-hidden">
      {/* Animated Background Elements - Black & White */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-foreground/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-foreground/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-foreground/5 rounded-full blur-3xl animate-spin-slow"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl mx-auto w-full space-y-16 sm:space-y-24 md:space-y-32 py-8 sm:py-12">
        {/* Hero Section - New Design */}
        <section id="hero" className="min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center pt-16 sm:pt-20">
          <div className="w-full max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-4 sm:space-y-6 md:space-y-8 order-2 lg:order-1">
                <BlurFade delay={BLUR_FADE_DELAY}>
                  <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-foreground/5 border border-foreground/10 backdrop-blur-sm hover:bg-foreground/10 transition-colors">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-foreground opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-foreground"></span>
                    </span>
                    <span className="text-xs sm:text-sm font-medium">Available for work</span>
                  </div>
                </BlurFade>

                <BlurFade delay={BLUR_FADE_DELAY * 1.5}>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    Hi, I'm {portfolio.name.split(" ")[0]} 👋
                  </h1>
                </BlurFade>

                <BlurFade delay={BLUR_FADE_DELAY * 2}>
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-xl">
                    {portfolio.description}
                  </p>
                </BlurFade>

                <BlurFade delay={BLUR_FADE_DELAY * 5}>
                  <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-2 sm:pt-4">
                    <Link
                      href="#contact"
                      className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-foreground text-background rounded-xl sm:rounded-2xl font-semibold overflow-hidden transition-all hover:shadow-2xl hover:scale-105 text-center text-sm sm:text-base"
                    >
                      <span className="relative z-10">Get in touch</span>
                    </Link>
                    <a
                      href={portfolio.resumeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-foreground/20 rounded-xl sm:rounded-2xl font-semibold hover:bg-foreground/5 hover:border-foreground/40 transition-all hover:scale-105 text-center text-sm sm:text-base"
                    >
                      View Resume
                    </a>
                  </div>
                </BlurFade>
              </div>

              {/* Right Content - Avatar */}
              <BlurFade delay={BLUR_FADE_DELAY} className="order-1 lg:order-2 flex justify-center lg:justify-end">
                <div className="relative">
                  <Avatar className="size-48 sm:size-64 md:size-72 lg:size-80 xl:size-96 border-2 sm:border-4 border-white shadow-lg ring-1 sm:ring-2 ring-gray-200">
                    <AvatarImage alt={portfolio.name} src={portfolio.avatarUrl.url || "/placeholder.svg"} className="object-cover" />
                    <AvatarFallback className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gray-100 text-gray-700">
                      {portfolio.initials}
                    </AvatarFallback>
                  </Avatar>
                </div>
              </BlurFade>
            </div>
          </div>
        </section>
        {/* About Section - New Design */}
        <section id="about" className="scroll-mt-16 sm:scroll-mt-20">
          <div className="max-w-6xl mx-auto">
            <BlurFade delay={BLUR_FADE_DELAY * 6}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8">
                About Me
              </h2>
            </BlurFade>
            
            <BlurFade delay={BLUR_FADE_DELAY * 7}>
              <div className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-6xl">
                <Markdown className="prose prose-sm sm:prose-base max-w-full text-muted-foreground prose-p:leading-relaxed prose-headings:text-foreground">
                  {portfolio.summary}
                </Markdown>
              </div>
            </BlurFade>
          </div>
        </section>
        {/* Skills Section - Simplified */}
        <section id="skills" className="scroll-mt-16 sm:scroll-mt-20">
          <div className="max-w-6xl mx-auto">
            <BlurFade delay={BLUR_FADE_DELAY * 8}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8">
                Skills & Technologies
              </h2>
            </BlurFade>
            
            <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-2">
              {portfolio.skills.map((skill, id) => (
                <BlurFade key={skill} delay={BLUR_FADE_DELAY * 9 + id * 0.02}>
                  <div className="py-2 sm:py-1.5 text-center text-xs sm:text-xs font-medium bg-black dark:bg-black text-white dark:text-white rounded-md hover:bg-black/90 transition-colors">
                    {skill}
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>

        {/* Work Experience - Expandable */}
        <section id="work" className="scroll-mt-16 sm:scroll-mt-20">
          <div className="max-w-6xl mx-auto">
            <BlurFade delay={BLUR_FADE_DELAY * 10}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8">
                Work Experience
              </h2>
            </BlurFade>
            
            <WorkExperienceList work={portfolio.work} />
          </div>
        </section>

        {/* Education - Simplified */}
        <section id="education" className="scroll-mt-16 sm:scroll-mt-20">
          <div className="max-w-6xl mx-auto">
            <BlurFade delay={BLUR_FADE_DELAY * 12}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8">
                Education
              </h2>
            </BlurFade>
            
            <div className="space-y-6 sm:space-y-8">
              {portfolio.education.map((education, id) => (
                <BlurFade key={education.school} delay={BLUR_FADE_DELAY * 13 + id * 0.1}>
                  <div className="flex items-start gap-3 sm:gap-4">
                    <Avatar className="size-10 sm:size-12 border flex-shrink-0">
                      <AvatarImage
                        alt={education.school}
                        src={education.logoUrl.url}
                      />
                      <AvatarFallback>{education.school[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                        <a 
                          href={education.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-base sm:text-lg font-semibold hover:underline inline-flex items-center gap-1 group"
                        >
                          <span className="break-words">{education.school}</span>
                          <svg 
                            className="size-3.5 sm:size-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all flex-shrink-0" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </a>
                        <span className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap">{education.start} - {education.end}</span>
                      </div>
                      <p className="text-sm sm:text-base text-muted-foreground mt-1">{education.degree}</p>
                    </div>
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>
        {/* Projects Section - Simplified */}
        <section id="projects" className="scroll-mt-16 sm:scroll-mt-20">
          <div className="max-w-6xl mx-auto">
            <BlurFade delay={BLUR_FADE_DELAY * 14}>
              <div className="text-center space-y-2 sm:space-y-4 mb-6 sm:mb-8 md:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                  Latest Work
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
                  A curated collection of my most impactful projects, showcasing innovation, technical excellence, and creative problem-solving
                </p>
              </div>
            </BlurFade>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {portfolio.projects
                .slice()
                .reverse()
                .map((project, id) => (
                  <BlurFade key={project.title} delay={BLUR_FADE_DELAY * 15 + id * 0.05}>
                    <ProjectCard
                      link={project.link}
                      key={project.title}
                      title={project.title}
                      description={project.description}
                      dates={project.dates}
                      tags={project.technologies}
                      video={project.video.url}
                      links={project.links}
                      projectId={(project as any)._id}
                      hasCaseStudyVideo={!!project.caseStudy?.youtubeVideoUrl}
                    />
                  </BlurFade>
                ))}
            </div>
          </div>
        </section>

        {/* Hackathons/Competitions Section - Simplified */}
        <section id="hackathons" className="scroll-mt-16 sm:scroll-mt-20">
          <div className="max-w-6xl mx-auto">
            <BlurFade delay={BLUR_FADE_DELAY * 16}>
              <div className="text-center space-y-2 sm:space-y-4 mb-6 sm:mb-8 md:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                  Competitions
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
                  My journey through competitive programming challenges and hackathons
                </p>
              </div>
            </BlurFade>
            
            {portfolio.hackathons && portfolio.hackathons.length > 0 ? (
              <div className="grid gap-4 sm:gap-6">
                {portfolio.hackathons
                  .slice()
                  .reverse()
                  .map((project, id) => (
                    <BlurFade key={`${project.title}-${project.dates}`} delay={BLUR_FADE_DELAY * 17 + id * 0.05}>
                      <HackathonCard
                        title={project.title}
                        description={project.description || ""}
                        location={project.location}
                        dates={project.dates}
                        image={project.image.url}
                      />
                    </BlurFade>
                  ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-base text-muted-foreground">No competitions available at the moment.</p>
              </div>
            )}
          </div>
        </section>

        {/* Contact Section - Simplified */}
        <section id="contact" className="scroll-mt-16 sm:scroll-mt-20 pb-16 sm:pb-24 md:pb-32">
          <div className="max-w-6xl mx-auto">
            <BlurFade delay={BLUR_FADE_DELAY * 18}>
              <div className="text-center space-y-4 sm:space-y-6 md:space-y-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                  Get in Touch
                </h2>
                
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto px-4">
                  I'm always open to discussing new opportunities, creative ideas, or collaborations. Feel free to reach out via{" "}
                  <Link
                    href="https://www.linkedin.com/in/im-zain/"
                    className="text-foreground font-semibold hover:underline"
                  >
                    LinkedIn
                  </Link>
                  {" "}and I'll get back to you as soon as possible!
                </p>
                
                <Link
                  href="https://www.linkedin.com/in/im-zain/"
                  target="_blank"
                  className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-black text-white rounded-lg font-medium hover:bg-black/90 transition-colors text-sm sm:text-base"
                >
                  Connect on LinkedIn
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </BlurFade>
          </div>
        </section>
      </div>
    </main>
  )
}
