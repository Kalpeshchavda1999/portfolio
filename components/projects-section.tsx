"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { ExternalLink, Github, Eye } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { ProjectGalleryModal } from "./project-gallery-modal"
import { useRouter } from "next/router"

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)


  const projects = [
    {
      title: "OmiDay - Loyalty Program",
      description:
        "Automated Google and Yelp review management system using Laravel and AWS Services, achieving 90% response rate to customer feedback. Successfully migrated WordPress data for 2,000+ users with zero data loss.",
      images: [
        "/projects/omiday/01.png",
        "/projects/omiday/02.png",
        "/projects/omiday/03.png",
        "/projects/omiday/04.png",
        "/projects/omiday/05.png",
        "/projects/omiday/06.png",
        "/projects/omiday/07.png",
      ],
      technologies: ["ReactJS", "Laravel", "MySQL", "Stripe", "AWS EC2", "S3 Bucket", "MUI"],
      liveUrl: "http://omi.day/",
      achievements: ["90% customer feedback response rate", "Zero data loss migration", "2,000+ users migrated"],
      challenges:
        "Orchestrated the migration of WordPress data to a Laravel database, including Stripe subscription data for 2,000+ users with zero data loss.",
      features: [
        "Automated review management",
        "Real-time notifications",
        "Customer feedback analytics",
        "Multi-platform integration",
      ],
    },
    {
      title: "SkimAI - Professional AI Service",
      description:
        "Developed AI-driven solutions to enhance employee productivity by streamlining tasks and improving operational efficiency. Conducted R&D on Strapi CRM customization for unique client requirements.",
      images: [
        "/projects/skimai/01.png",
        "/projects/skimai/02.png",

      ],
      technologies: ["ReactJS", "React Toolkit", "Strapi CRM", "Stripe", "MUI"],
      liveUrl: "https://app.skimai.com",
      achievements: ["Enhanced productivity", "Custom CRM solutions", "Process automation"],
      challenges:
        "Conducted research and development (R&D) on Strapi CRM, focusing on customization to meet unique client requirements.",
      features: [
        "AI-powered task automation",
        "Custom CRM integration",
        "Employee productivity tracking",
        "Workflow optimization",
      ],
    },
    {
      title: "RenderHealth - Hospital Management",
      description:
        "Comprehensive medical facility management system for streamlining hospital services, patient records, doctor management, and overall hospital administration with focus on efficiency and accuracy.",
      images: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      technologies: ["Laravel", "jQuery", "AWS DynamoDB", "MySQL", "Spatie", "Razorpay"],
      githubUrl: "#",
      liveUrl: "#",
      achievements: ["Streamlined hospital operations", "Integrated payment system", "Role-based access"],
      challenges: "Developing new features and maintaining the existing system while ensuring seamless integration.",
      features: [
        "Patient record management",
        "Doctor scheduling system",
        "Billing and payments",
        "Inventory management",
        "Report generation",
      ],
    },
    {
      title: "Ezlivingtrust - Attorney Services",
      description:
        "Developed comprehensive estate planning packages tailored to client needs, achieving 95% client satisfaction rate and 40% increase in referrals within the first year.",
      images: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      technologies: ["Next.js", "Nest.js", "PostgreSQL", "Docker", "Amazon ECS"],
      githubUrl: "#",
      liveUrl: "#",
      achievements: ["95% client satisfaction", "40% increase in referrals", "Scalable architecture"],
      challenges:
        "Orchestrated the migration of WordPress data to a Laravel database, including Stripe subscription data for 2,000+ users with zero data loss.",
      features: ["Estate planning tools", "Document generation", "Client portal", "Appointment scheduling"],
    },
    {
      title: "Reverijobs - Job Portal",
      description:
        "Job search and posting platform connecting companies with suitable candidates. Provides comprehensive job search services and company posting capabilities.",
      images: ["/projects/reveri/01.png"],
      technologies: ["Laravel", "MySQL", "Stripe Payment"],
      githubUrl: "#",
      liveUrl: "#",
      achievements: ["Job matching system", "Payment integration", "User-friendly interface"],
      features: ["Advanced job search", "Company profiles", "Application tracking", "Resume builder"],
    },
    {
      title: "Kloudd - Cloud Storage",
      description:
        "Cloud storage services similar to Google Drive, offering efficient solutions for managing, sharing, and hosting files with secure and seamless file access and collaboration.",
      images: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      technologies: ["Vue.js", "Laravel", "AWS EC2", "MySQL"],
      githubUrl: "#",
      liveUrl: "#",
      achievements: ["Secure file storage", "Collaboration features", "AWS integration"],
      features: ["File upload/download", "Folder organization", "File sharing", "Version control"],
    },
  ]

  const openProjectModal = (project: any) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const closeProjectModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Featured Projects
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            A showcase of my recent work across healthcare, AI, marketing, and cloud storage domains, demonstrating
            expertise in full-stack development and modern technologies.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col group border-2 hover:border-primary/20">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.images[0] || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => openProjectModal(project)}
                      className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      View Details
                    </Button>
                  </div>
                </div>
                <CardHeader className="flex-shrink-0">
                  <CardTitle className="flex items-center justify-between text-lg group-hover:text-primary transition-colors">
                    {project.title}
                    <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      {/* <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Github className="h-4 w-4" />
                      </Button> */}
                      <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => window.open(project.liveUrl, "_blank")}>
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <p className="text-muted-foreground mb-4 leading-relaxed text-sm flex-grow line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 3} more
                      </Badge>
                    )}
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => openProjectModal(project)}
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  >
                    View Project Details
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <ProjectGalleryModal project={selectedProject} isOpen={isModalOpen} onClose={closeProjectModal} />
    </section>
  )
}
