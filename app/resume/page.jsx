"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaPython, FaSwift, FaGit, FaGithub, FaNodeJs, FaLinux} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import Link from "next/link";

// about data

const about = {
  title: "About me",
  description: "Hi, I'm Arhaan Keshwani, a computer science student from Atlanta, Georgia, with a strong passion for cybersecurity and app development. Specializing in cybersecurity, I frequently utilize Kali Linux to explore and address various security challenges. I am also skilled in developing sleek and functional iOS applications using Swift. My goal is to create innovative solutions that enhance digital experiences while ensuring robust security.",
  info: [
    {
      fieldName: "Experience",
      fieldValue: "2+ Years"

    },
    {
      fieldName: "Nationality",
      fieldValue: "American"

    },
    {
      fieldName: "Email",
      fieldValue: "akeshwanibusiness@gmail.com"

    },
  ]
};

// Experience data

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description: "I have been a part of numerous projects, gaining extensive experience in full stack software engineering and cybersecurity.",
  items: [
    {
      company: "Roast",
      position: "Full Stack Software Developer",
      duration: "2024 - Present",      
    },
    {
      company: "J.P. Morgan Chase & Co.",
      position: "Software Engineer Virtual Internship",
      duration: "2024",
    },
    {
      company: "J.P. Morgan Chase & Co.",
      position: "Agile Virtual Internship",
      duration: "2024",
    },
    {
      company: "Moneta",
      position: "Founder & Full Stack Developer",
      duration: "2023 - 2024",
    },
    {
      company: "National Cyber League",
      position: "Globally Top Ranked Member",
      duration: "2024",
    },
  ],
};

// Education Data

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description: "I am currently a Computer Science student with interest in Cybersecurity",
  items: [
    {
      institution: "CodePath Cybersecurity Program",
      degree: "Intermediate Cybersecurity",
      duration: "Sep 2024",
    },
    {
      institution: "Georgia State University",
      degree: "Majoring in Computer Science",
      duration: "2023 - 2027",
    },
  ],
};

// Skills Data

const skills = {
  title: "My Skills",
  description: "I have a solid foundation in a variety of programming languages",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "React.JS",
    },
    {
      icon: <FaPython />,
      name: "Python",
    },
    {
      icon: <FaLinux />,
      name: "Linux",
    },
    {
      icon: <FaSwift />,
      name: "Swift",
    },
    {
      icon: <FaGit />,
      name: "Git",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.JS",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.JS",
    },
    {
      icon: <SiTailwindcss />,
      name: "TailwindCSS",
    },
    {
      icon: <FaGithub />,
      name: "GitHub",
    },
  ],
};

// Certificates

const certificates = {
  title: "My Certificates and Licenses",
  description: "I have completed a variety of certificates that have helped me enhance and better my software engineering and cybersecurity skills.",
  items: [
    {
      company: "Accenture",
      position: "Coding Development and Advanced Engineer",
      accenture: "View",
    },
    {
      company: "Goldman Sachs",
      position: "Virtual Software Engineer",
      goldman: "View",
    },
    {
      company: "Amazon",
      position: "AWS Solutions Architect",
      amazon: "View",
    },
    {
      company: "Verizon",
      position: "Virtual Cloud Platform Engineer",
      verizon: "View",
    },
    {
      company: "Mastercard",
      position: "Virtual Cybersecurity Intern",
      mastercard: "View",
    },
    {
      company: "PepsiCo",
      position: "Advanced Virtual Software Engineer",
      pepsi: "View",
    },
    {
      company: "Wells Fargo",
      position: "Virtual Software Engineer",
      wellsfargo: "View",
    },
    {
      company: "Lyft",
      position: "Virtual Back-End Engineer",
      lyft: "View"
    },
    {
      company: "National Cyber League",
      position: "Globally Top Ranked Member",
      ncl: "View"
    },
  ]
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";

import { motion } from "framer-motion";



const Resume = () => {
  return (
    <motion.div 
    initial={{opacity: 0}}
    animate = {{
      opacity: 1, 
      transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},
  }}

  className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
  >
    <div className="container mx-auto">
      <Tabs defaultValue="about" className="flex flex-col xl:flex-row gap-[60px]">
        <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
          <TabsTrigger value="about">About Me</TabsTrigger>
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="certificates">Certificates</TabsTrigger>
        </TabsList>

        {/* content */}
        <div className="min-h-[70vh] w-full">

          {/* experience */}
          <TabsContent value="experience" className="w-full ">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold ">{experience.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
              <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[40px]">
                  {experience.items.map((item, index)=> {
                    return <li key={index} className="bg-[#232329] h-[180px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                      <span className="text-accent">{item.duration}</span>
                      <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                      <div className="flex items-center gap-3">
                        {/* dot */}
                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                        <p className="text-white/60">{item.company}</p>
                      </div>
                    </li>
                  })}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>

          {/* education */}
          <TabsContent value="education" className="w-full ">
          <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold ">{education.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
              <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[40px]">
                  {education.items.map((item, index)=> {
                    return <li key={index} className="bg-[#232329] h-[190px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                      <span className="text-accent">{item.duration}</span>
                      <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                      <div className="flex items-center gap-3">
                        {/* dot */}
                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                        <p className="text-white/60">{item.institution}</p>
                      </div>
                    </li>
                  })}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>

          {/* skills */}
          <TabsContent value="skills" className="w-full h-full">
            <div className="flex flex-col gap-[30px]">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold ">{skills.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
              </div>
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                {skills.skillList.map((skill, index)=> {
                  return <li key={index}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                          <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="capitalize">{skill.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    </li>;
                })}
              </ul>
            </div>
          </TabsContent>

          {/* about me */}
          <TabsContent value="about" className="w-full text-center xl:text-left">
            <div className="flex flex-col gap-[30px]">
              <h3 className="text-4xl font-bold">{about.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
              <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                {about.info.map((item, index)=> {
                  return <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                    <span className="text-white/60">{item.fieldName}:</span>
                    <span className="text-xl">{item.fieldValue}</span>
                  </li>
                })}
              </ul>
            </div>
          </TabsContent>
          {/* certificates */}
          <TabsContent value="certificates" className="w-full ">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold ">{certificates.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{certificates.description}</p>
              <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[40px]">
                  {certificates.items.map((item, index)=> {
                    return <li key={index} className="bg-[#232329] h-[180px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start">
                      <a href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/J.P.%20Morgan/R5iK7HMxJGBgaSbvk_J.P.%20Morgan_YkBtirDYFF5Nu4awK_1723086231842_completion_certificate.pdf" target="_blank">
                      <span className="text-accent">{item.jpmorg}</span>
                      </a>
                      <a href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/J.P.%20Morgan/5QiaMtZ4k8ngYKn4D_JPMorgan%20Chase%20&%20Co._YkBtirDYFF5Nu4awK_1723092821413_completion_certificate.pdf" target="_blank">
                      <span className="text-accent">{item.jpmorgagile}</span>
                      </a>
                      <a href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Accenture%20North%20America/XvvYRvb2YpfkyA52H_Accenture%20North%20America_YkBtirDYFF5Nu4awK_1723435508631_completion_certificate.pdf" target="_blank">
                        <span className="text-accent">{item.accenture}</span>
                      </a>
                      <a href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Goldman%20Sachs/NPdeQ43o8P9HJmJzg_Goldman%20Sachs_YkBtirDYFF5Nu4awK_1723088165806_completion_certificate.pdf" target="_blank">
                      <span className="text-accent">{item.goldman}</span>
                      </a>
                      <a href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/AWS/kkE9HyeNcw6rwCRGw_AWS%20APAC_YkBtirDYFF5Nu4awK_1723092195729_completion_certificate.pdf" target="_blank">
                      <span className="text-accent">{item.amazon}</span>
                      </a>
                      <a href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Verizon%20Communications%20Inc./aNJGnRtgfiK5fQqcR_Verizon_YkBtirDYFF5Nu4awK_1723091558324_completion_certificate.pdf" target="_blank">
                      <span className="text-accent">{item.verizon}</span>
                      </a>
                      <a href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/mastercard/vcKAB5yYAgvemepGQ_Mastercard_YkBtirDYFF5Nu4awK_1723091863771_completion_certificate.pdf" target="_blank">
                      <span className="text-accent">{item.mastercard}</span>
                      </a>
                      <a href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/PepsiCo/z8Pk6XzAgvtDYHJsg_PepsiCo_YkBtirDYFF5Nu4awK_1723434595728_completion_certificate.pdf" target="_blank">
                        <span className="text-accent">{item.pepsi}</span>
                      </a>
                      <a href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Wells%20Fargo/9Wvq4L2WCFQDyyPp3_Wells%20Fargo_YkBtirDYFF5Nu4awK_1723090661666_completion_certificate.pdf" target="_blank">
                      <span className="text-accent">{item.wellsfargo}</span>
                      </a>
                      <a href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Lyft/xSw9echtixLAoPdsH_Lyft_YkBtirDYFF5Nu4awK_1723093557058_completion_certificate.pdf" target="_blank">
                      <span className="text-accent">{item.lyft}</span>
                      </a>
                      <a href="https://cyberskyline.com/report/VAH0H988HYQG" target="_blank">
                      <span className="text-accent">{item.ncl}</span>
                      </a>
                      <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                      <div className="flex items-center gap-3">
                        {/* dot */}
                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                        <p className="text-white/60">{item.company}</p>
                      </div>
                    </li>
                  })}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
    
    </motion.div>
  );
};

export default Resume;