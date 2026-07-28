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
    image: "/team/Umair.jpeg",
    imageFit: "object-cover object-top",
    bio: "With 15 years of hands-on experience in CCTV sales, overseas-grade system planning, installation supervision, and quality assurance, Umair leads UpEdge's security work end-to-end. He focuses on clean execution, correct coverage planning, and long-term reliability from small homes to complex commercial sites.",
    expertise: ["CCTV Planning", "Installation QA", "Project Delivery"],
  },
  {
    id: 2,
    name: "Rameez Raja",
    role: "Co-Founder, Networking Consultant (Remote)",
    image: "/team/avatar-placeholder.svg",
    imageFit: "object-contain p-8",
    bio: "A Computer Systems Engineer (UET Peshawar) with 10 years of experience in networking, IT infrastructure, and system integration. Rameez supports projects with remote consultancy and architecture design ensuring stable connectivity across CCTV, biometric, and digital systems.",
    expertise: ["Network Architecture", "Infrastructure", "System Integration"],
  },
  {
    id: 3,
    name: "Saad Mustafa",
    role: "Lead Software & Digital Solutions Engineer",
    image: "/team/saad.jpeg",
    imageFit: "object-cover object-center",
    bio: "A Software Engineering graduate leading UpEdge's software development, automation, and integrations. Saad builds business-focused systems: websites, POS, eCommerce, and dashboards so clients get a complete solution with secure infrastructure and digital operations.",
    expertise: ["Software Systems", "Automation", "Integrations"],
  },
];

function TeamCard({
  member,
  mobile = false,
}: {
  member: (typeof teamMembers)[number];
  mobile?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative flex h-full flex-col overflow-hidden border border-zinc-200 bg-white text-zinc-950 shadow-[0_16px_32px_rgba(18,18,18,0.06)] transition-all duration-300 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white dark:shadow-[0_16px_32px_rgba(0,0,0,0.2)]",
        mobile
          ? "rounded-tl-[2.25rem] rounded-tr-[1.25rem] rounded-bl-[1.25rem] rounded-br-[2.25rem]"
          : "rounded-tl-[2.25rem] rounded-tr-[1.25rem] rounded-bl-[1.25rem] rounded-br-[2.25rem]",
        "group-hover:-translate-y-1 group-hover:border-zinc-300 dark:group-hover:border-zinc-700"
      )}
    >
      <div
        className={cn(
          "relative w-full overflow-hidden bg-zinc-100 dark:bg-zinc-900",
          mobile
            ? "aspect-[5/4]"
            : "aspect-[5/4]"
        )}
      >
        <Image
          src={member.image}
          alt={member.name}
          fill
          className={cn(
            "transition-transform duration-300 group-hover:scale-[1.03]",
            member.image.includes("avatar-placeholder")
              ? "object-contain p-8 text-zinc-300 dark:text-zinc-700"
              : member.imageFit
          )}
          sizes={mobile ? "(max-width: 768px) 88vw, 420px" : "(max-width: 1024px) 50vw, 33vw"}
        />
      </div>

      <div
        className={cn(
          "flex flex-1 flex-col",
          mobile ? "px-5 py-5" : "px-7 py-7 lg:px-8 lg:py-8"
        )}
      >
        <div className="flex flex-1 flex-col">
          <p
            className={cn(
              "max-w-[20rem] text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-zinc-600 dark:text-zinc-400",
              mobile ? "min-h-[2.25rem]" : "min-h-[2.5rem]"
            )}
          >
            {member.role}
          </p>

          <h3
            className={cn(
              "mt-2 font-bold text-zinc-950 dark:text-white",
              mobile ? "text-[1.4rem]" : "text-[1.55rem] lg:text-[1.7rem]"
            )}
          >
            {member.name}
          </h3>

          <p
            className={cn(
              "mt-4 flex-grow leading-relaxed text-zinc-700 dark:text-zinc-300",
              mobile ? "text-sm" : "text-sm"
            )}
          >
            {member.bio}
          </p>

          <div
            className={cn(
              "mt-auto flex flex-wrap pt-5",
              mobile ? "gap-1.5" : "gap-2"
            )}
          >
            {member.expertise.map((skill, idx) => (
              <Badge
                key={idx}
                variant="secondary"
                className={cn(
                  "rounded-full border-0 bg-zinc-100 font-medium text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300",
                  mobile ? "px-2.5 py-1 text-[10px]" : "px-3 py-1.5 text-xs"
                )}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Team() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="team"
      className="relative overflow-hidden bg-zinc-50 py-16 sm:py-20 md:py-24 lg:py-32 scroll-mt-20 dark:bg-black"
    >
      <div className="relative container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0.3 : 0.6 }}
          className="mx-auto mb-12 max-w-3xl text-center sm:mb-16"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl">
            <span className="text-zinc-950 dark:text-white">Meet the Team</span>
          </h2>
          <p className="text-base leading-relaxed text-zinc-700 dark:text-zinc-200 sm:text-lg md:text-xl">
            A specialist team behind every installation and system we deliver.
          </p>
        </motion.div>

        <div className="mx-auto hidden max-w-7xl items-stretch gap-6 md:grid md:grid-cols-2 xl:grid-cols-3 lg:gap-8">
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
              whileHover={shouldReduceMotion ? {} : { y: -4 }}
              className="group h-full"
            >
              <TeamCard member={member} />
            </motion.div>
          ))}
        </div>

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
                className="group h-full px-1"
              >
                <TeamCard member={member} mobile />
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
