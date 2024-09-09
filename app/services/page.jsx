"use client";

import {BsArrowDownRight} from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "CNN for Brain Tumor Detection",
    description: "This project uses convolutional neural networks (CNNs) to detect and segment brain tumors through MRI scans using deep learning techniques.",
    href: "https://ak-cnn.vercel.app/", target: "_blank"
  },
  {
    num: "02",
    title: "Smart Contract Auditor",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. esse voluptatum.",
    href: ""
  },
  {
    num: "03",
    title: "UI/UX Design",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. esse voluptatum.",
    href: ""
  },
  {
    num: "04",
    title: "Software Development",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. esse voluptatum.",
    href: ""
  },
];

import { motion } from "framer-motion";
import { Target } from "lucide-react";


const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 2, duration: 0.4, ease: "easeIn"}}}
        className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index)=> {
            return (
            <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
              {/* top */}
              <div className="w-full flex justify-between items-center">
                <div className="text-8xl font-extrabold text-outline text-transparent group-hover:text-outline-hover
                transition-all duration-500">{service.num}</div>
                {/* rounded or not is here 'rounded-full' -> */}
                <Link href={service.href} passHref legacyBehavior>
                  <a target="_blank" rel="noopener noreferrer" className="w-[60px] h-[60px] bg-white group-hover:bg-accent transition-all duration-500 flex 
                  justify-center items-center hover:-rotate-45">
                    <BsArrowDownRight className="text-primary text-3xl"/>
                  </a>
                </Link>
              </div>
              {/* title */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
              {/* description */}
              <p className="text-white/60">{service.description}</p>
              {/* border */}
              <div className="border-b border-white/20 w-full"></div>
            </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Services