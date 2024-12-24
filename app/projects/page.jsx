"use client";

import {BsArrowDownRight} from "react-icons/bs";
import Link from "next/link";

const projects = [
  {
    num: "01",
    title: "Lyra",
    description: "Lyra is an innovative platform that enhances productivity and simplifies workflows through smart automation and intuitive tools. Secured $5,000 in seed funding, and currently holds 100+ active users.",
    href: "https://lyra.services"
  },
  {
    num: "02",
    title: "AK Notch",
    description: "This is a sleek and intuitive macOS utility that provides a convenient drag-and-drop tray for quick file handling/storing, AirDrop integration, and includes settings to suit your workflow.",
    href: "https://github.com/akeshwani2/AK-Notch"
  },
  {
    num: "03",
    title: "CNN for Brain Tumor Detection",
    description: "This project uses convolutional neural networks (CNNs) to detect and segment brain tumors through MRI scans using deep learning techniques.",
    href: "https://ak-cnn.vercel.app/"
  },
  
  {
    num: "04",
    title: "Breast Cancer Prediction Model",
    description: "This project uses logistic regression to predict whether a breast tumor is malignant or benign based on various features extracted from medical images.",
    href: "https://docs.google.com/document/d/1ZnOqoBX--tSGoFDoJ93XW3hpVt0krFvL7_lmujfNcQA/edit?usp=sharing"
  },

];

import { motion } from "framer-motion";
import { Target } from "lucide-react";


const Projects = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 2, duration: 0.4, ease: "easeIn"}}}
        className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {projects.map((service, index)=> {
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

export default Projects