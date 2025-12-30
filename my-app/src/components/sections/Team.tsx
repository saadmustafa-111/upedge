"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { MobileSlider } from "@/components/shared/MobileSlider";

const teamMembers = [
  {
    id: 1,
    name: "Umair Mustafa",
    role: "Founder, Head of Security Solutions",
    image: "/team/UmairMustafa.jpeg",
    bio: "With 15 years of hands-on experience in CCTV sales, overseas-grade system planning, installation supervision, and quality assurance, Umair leads UpEdge's security work end-to-end. He focuses on clean execution, correct coverage planning, and long-term reliability from small homes to complex commercial sites.",
    expertise: ["CCTV Planning", "Installation QA", "Project Delivery"],
  },
  {
    id: 2,
    name: "Rameez Raja",
    role: "Co-Founder, Networking Consultant (Remote)",
    image: "/team/Rameez.jpg",
    bio: "A Computer Systems Engineer (UET Peshawar) with 10 years of experience in networking, IT infrastructure, and system integration. Rameez supports projects with remote consultancy and architecture design ensuring stable connectivity across CCTV, biometric, and digital systems.",
    expertise: ["Network Architecture", "Infrastructure", "System Integration"],
  },
  {
    id: 3,
    name: "Saad Mustafa",
    role: "Lead Software & Digital Solutions Engineer",
    image: "/team/saad.jpeg",
    bio: "A Software Engineering graduate leading UpEdge's software development, automation, and integrations. Saad builds business-focused systems: websites, POS, eCommerce, and dashboards so clients get a complete solution with secure infrastructure and digital operations.",
    expertise: ["Software Systems", "Automation", "Integrations"],
  },
];

export function Team() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="team"
      className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden scroll-mt-20"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent dark:via-cyan-400/5 pointer-events-none"></div>

      <div className="relative container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0.3 : 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 sm:mb-6">
            <span className="text-primary dark:text-white">Meet the </span>
            <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 dark:from-cyan-400 dark:via-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
              Team
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground dark:text-slate-300 leading-relaxed">
            A specialist team behind every installation and system we deliver.
          </p>
        </motion.div>

        {/* Desktop Grid - Hidden on Mobile */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: shouldReduceMotion ? 0.3 : 0.6,
                delay: shouldReduceMotion ? 0 : index * 0.1,
              }}
              whileHover={shouldReduceMotion ? {} : { y: -12 }}
              className="group"
            >
              <div
                className={cn(
                  "relative overflow-hidden rounded-3xl backdrop-blur-2xl border-2 transition-all duration-500 h-full",
                  "bg-gradient-to-br from-white/80 via-white/60 to-white/40 dark:from-slate-900/80 dark:via-slate-900/60 dark:to-slate-900/40",
                  "border-white/60 dark:border-white/20",
                  "shadow-[0_8px_32px_rgba(0,194,255,0.12),inset_0_1px_2px_rgba(255,255,255,0.5)] dark:shadow-[0_8px_32px_rgba(0,194,255,0.1),inset_0_1px_2px_rgba(255,255,255,0.15)]",
                  "hover:shadow-[0_16px_48px_rgba(0,194,255,0.24),inset_0_2px_4px_rgba(255,255,255,0.7)] dark:hover:shadow-[0_16px_48px_rgba(0,194,255,0.2),inset_0_2px_4px_rgba(255,255,255,0.2)]",
                  "hover:border-cyan-500/40 dark:hover:border-cyan-500/30"
                )}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-blue-500/0 to-indigo-500/0 group-hover:from-cyan-500/5 group-hover:via-blue-500/5 group-hover:to-indigo-500/5 transition-all duration-500 pointer-events-none"></div>
                
                {/* Top highlight */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent pointer-events-none"></div>

                <div className="relative p-6 lg:p-8">
                  {/* Image with gradient border */}
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                    <div className="relative w-full aspect-square overflow-hidden rounded-2xl ring-2 ring-white/40 dark:ring-white/20 group-hover:ring-cyan-500/50 dark:group-hover:ring-cyan-400/40 transition-all duration-500">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className={cn(
                          "object-cover transition-all duration-700 group-hover:scale-110",
                          member.id === 2 ? "object-[center_20%]" : "object-top"
                        )}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                      />
                      {/* Gradient overlay on image */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                  </div>

                  {/* Name & Role */}
                  <div className="mb-4">
                    <h3 className="text-xl lg:text-2xl font-bold text-foreground dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-sm text-cyan-600 dark:text-cyan-400 font-semibold">
                      {member.role}
                    </p>
                  </div>

                  {/* Bio */}
                  <p className="text-sm text-muted-foreground dark:text-slate-300 leading-relaxed mb-5">
                    {member.bio}
                  </p>

                  {/* Expertise Tags */}
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className={cn(
                          "text-xs font-medium px-3 py-1.5 rounded-full",
                          "bg-gradient-to-r from-cyan-500/15 to-blue-500/15 dark:from-cyan-500/15 dark:to-blue-500/15",
                          "text-cyan-700 dark:text-cyan-300",
                          "border border-cyan-500/30 dark:border-cyan-500/25",
                          "group-hover:from-cyan-500/25 group-hover:to-blue-500/25 group-hover:border-cyan-500/50",
                          "transition-all duration-300"
                        )}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Slider - Visible on Mobile Only */}
        <div className="md:hidden">
          <MobileSlider
            items={teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: shouldReduceMotion ? 0.3 : 0.6,
                  delay: shouldReduceMotion ? 0 : index * 0.1,
                }}
                className="h-full px-1"
              >
                <div
                  className={cn(
                    "relative overflow-hidden rounded-3xl backdrop-blur-2xl border h-full transition-all duration-500",
                    "bg-gradient-to-br from-white/90 via-white/70 to-white/50 dark:from-slate-900/90 dark:via-slate-900/70 dark:to-slate-900/50",
                    "border-white/50 dark:border-white/15",
                    "shadow-[0_8px_32px_rgba(0,194,255,0.15),inset_0_2px_4px_rgba(255,255,255,0.5)] dark:shadow-[0_8px_32px_rgba(0,194,255,0.12),inset_0_2px_4px_rgba(255,255,255,0.15)]"
                  )}
                >
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/3 via-blue-500/3 to-indigo-500/3 pointer-events-none transition-opacity duration-500"></div>
                  
                  {/* Top highlight */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent pointer-events-none"></div>

                  <div className="p-5">
                    {/* Image with gradient glow */}
                    <div className="relative mb-5 group">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-500 rounded-2xl blur-xl opacity-20 transition-opacity duration-500 group-hover:opacity-30"></div>
                      <div className="relative w-full aspect-square overflow-hidden rounded-2xl shadow-xl transition-transform duration-500">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className={cn(
                            "object-cover transition-transform duration-700",
                            member.id === 2 ? "object-[center_20%]" : "object-top"
                          )}
                          sizes="(max-width: 768px) 85vw, 400px"
                        />
                        {/* Subtle gradient overlay on image */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent transition-opacity duration-500"></div>
                      </div>
                    </div>

                    {/* Name & Role */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1, duration: 0.4 }}
                      className="mb-4 text-center"
                    >
                      <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent transition-all duration-300">
                        {member.name}
                      </h3>
                      <p className="text-xs text-cyan-600 dark:text-cyan-400 font-semibold transition-colors duration-300">
                        {member.role}
                      </p>
                    </motion.div>

                    {/* Bio */}
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2, duration: 0.4 }}
                      className="text-xs text-muted-foreground dark:text-slate-300 leading-relaxed mb-4 text-center"
                    >
                      {member.bio}
                    </motion.p>

                    {/* Expertise Tags */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3, duration: 0.4 }}
                      className="flex flex-wrap gap-1.5 justify-center"
                    >
                      {member.expertise.map((skill, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className={cn(
                            "text-[10px] font-medium px-2.5 py-1 rounded-full transition-all duration-300",
                            "bg-gradient-to-r from-cyan-500/15 to-blue-500/15 dark:from-cyan-500/15 dark:to-blue-500/15",
                            "text-cyan-700 dark:text-cyan-300",
                            "border border-cyan-500/30 dark:border-cyan-500/25",
                            "hover:from-cyan-500/25 hover:to-blue-500/25 hover:border-cyan-500/50"
                          )}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
            desktopGridClassName="grid gap-6"
            showDots={true}
            itemClassName="!ring-0 !shadow-none transition-all duration-500"
          />
        </div>
      </div>
    </section>
  );
}
