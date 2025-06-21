"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Code, Database, Globe, Server, GraduationCap } from "lucide-react"

export function AboutSection() {
  const highlights = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Frontend Development",
      description: "React.js, Vue.js, Next.js, JavaScript",
    },
    {
      icon: <Server className="h-6 w-6" />,
      title: "Backend Development",
      description: "Laravel (PHP), Node.js, Nest.js, RESTful APIs",
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Database & Cloud",
      description: "MySQL, PostgreSQL, AWS Services, DynamoDB",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Full-Stack Solutions",
      description: "End-to-end web application development",
    },
  ]

  const education = [
    {
      degree: "Master Of Computer Application",
      institution: "Parul University, Vadodara",
      year: "2022",
    },
    {
      degree: "Bachelor Of Computer Application (BCA)",
      institution: "VNSGU, Surat",
      year: "2019",
    },
  ]

  return (
    <section id="about" className="py-16 mt-0 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
            About Me
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Fullstack Developer with strong experience in React, Laravel, Node.js, and AWS services. Proven track record
            in building scalable web applications, managing cloud infrastructure, and integrating payment systems.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card className="p-6 h-full">
              <CardContent className="p-0">
                <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  I'm a dedicated Software Engineer with expertise spanning across modern web technologies. My
                  experience includes successfully delivering projects in healthcare, AI, and marketing domains. I
                  specialize in database management, CRM customization, and driving process automation to boost
                  efficiency.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Throughout my career, I've collaborated with cross-functional teams to integrate multiple systems
                  through APIs, maintained complex databases, and provided comprehensive support for deployed
                  applications. I believe in writing clean, well-documented code and delivering projects that exceed
                  client expectations.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Problem Solver</Badge>
                  <Badge variant="secondary">Team Collaborator</Badge>
                  <Badge variant="secondary">Process Automation</Badge>
                  <Badge variant="secondary">Client-Focused</Badge>
                  <Badge variant="secondary">AWS Certified</Badge>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Education Section */}
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex items-center gap-2 mb-4">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-semibold">Education</h3>
                </div>
                <div className="space-y-4">
                  {education.map((edu, index) => (
                    <div key={index} className="border-l-2 border-primary/20 pl-4">
                      <h4 className="font-semibold text-sm">{edu.degree}</h4>
                      <p className="text-sm text-muted-foreground">{edu.institution}</p>
                      <p className="text-xs text-muted-foreground">{edu.year}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Languages */}
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold mb-4">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">English</Badge>
                  <Badge variant="outline">Hindi</Badge>
                  <Badge variant="outline">Gujarati</Badge>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Technical Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, staggerChildren: 0.1 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="hover:shadow-lg transition-shadow duration-300"
              >
                <Card className="p-4 h-full">
                  <CardContent className="p-0 flex flex-col items-center text-center space-y-3">
                    <div className="text-primary">{item.icon}</div>
                    <div>
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
