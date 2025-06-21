"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Calendar, MapPin } from "lucide-react"

export function ExperienceSection() {
  const experiences = [
     {
      title: "Freelance Fullstack Developer",
      company: "Self-Employed",
      location: "Surat, Gujarat, India",
      period: "May 2025 - Present",
      duration: "Ongoing",
      description:
        "Developing custom web applications and websites for various clients, focusing on delivering high-quality, scalable solutions. Specializing in integrating third-party APIs and maintaining robust databases to ensure seamless user experiences.",
      technologies: ["Laravel", "React.js", "Node.js", "MySQL", "AWS", "API Integration"],
      achievements: [
        "Successfully delivered client projects on time",
        "Achieved 100% client satisfaction with repeat business",
        "Integrated multiple third-party APIs for enhanced functionality",
        "Maintained high code quality with comprehensive documentation",
      ],
    },
    {
      title: "Software Engineer",
      company: "Logix Built Solutions Limited",
      location: "Surat, Gujarat, India",
      period: "October 2023 - April 2025",
      duration: "1 year 6 months",
      description:
        "Provided comprehensive support for end users by resolving issues related to deployed applications. Collaborated with cross-functional development teams to integrate multiple systems through APIs and maintained complex databases using SQL queries and stored procedures.",
      technologies: ["Laravel", "React.js", "Node.js", "MySQL", "AWS", "API Integration"],
      achievements: [
        "Resolved 95% of user-reported issues within SLA",
        "Successfully integrated 10+ third-party systems via APIs",
        "Optimized database queries reducing response time by 40%",
        "Maintained 99.9% application uptime",
      ],
    },
    {
      title: "Fullstack Developer",
      company: "Globaliasoft LLP",
      location: "Surat, Gujarat, India",
      period: "September 2021 - November 2023",
      duration: "2 years 2 months",
      description:
        "Developed custom websites and web applications to meet individual client needs. Created clean, well-documented code and worked closely with clients to understand requirements and deliver projects on time. Specialized in debugging and resolving complex technical issues.",
      technologies: ["Laravel", "React.js", "Vue.js", "MySQL", "jQuery", "Bootstrap", "Stripe", "AWS"],
      achievements: [
        "Delivered 25+ custom client projects on time",
        "Achieved 98% client satisfaction rate",
        "Reduced development time by 35% through code optimization",
        "Successfully debugged and resolved 200+ technical issues",
        "Implemented responsive designs for mobile-first approach",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            4 years of professional software development experience, specializing in full-stack development, system
            integration, and delivering scalable web solutions.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-border"></div>

            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-12 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Timeline dot */}
                <motion.div
                  className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                />

                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"} ml-12 md:ml-0`}>
                  <Card className="hover:shadow-lg transition-shadow border hover:border-primary/50">
                    <CardHeader>
                      <CardTitle className="text-xl">{experience.title}</CardTitle>
                      <div className="space-y-2">
                        <p className="text-lg font-semibold text-primary">{experience.company}</p>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {experience.period}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {experience.location}
                          </div>
                        </div>
                        <Badge variant="outline">{experience.duration}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4 leading-relaxed">{experience.description}</p>

                      <div className="mb-4">
                        <h4 className="font-semibold mb-2">Key Achievements:</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                          {experience.achievements.map((achievement, achIndex) => (
                            <motion.li
                              key={achIndex}
                              initial={{ opacity: 0, y: 10 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.4, delay: achIndex * 0.1 }}
                            >
                              {achievement}
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
