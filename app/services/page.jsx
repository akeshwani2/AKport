"use client";

import {BsArrowDownRight} from "react-icons/bs";
import Link from "next/link";

const projects = [
  {
    num: "01",
    title: "CNN for Brain Tumor Detection & Segmentation",
    description: "This project uses convolutional neural networks (CNNs) to detect and segment brain tumors through MRI scans using deep learning techniques.",
    href: "https://ak-cnn.vercel.app/"
  },
  {
    num: "02",
    title: "Breast Cancer Prediction Model",
    description: "This project implements a machine learning model to predict whether a breast tumor is malignant or benign based on various features extracted from medical images using logistic regression.",
    href: "https://docs.google.com/document/d/1ZnOqoBX--tSGoFDoJ93XW3hpVt0krFvL7_lmujfNcQA/edit?usp=sharing"
  },
  {
    num: "03",
    title: "Nosh (Work in Progress)",
    description: "Nosh is a dynamic restaurant reservation platform designed to help users find seating at their favorite restaurants whenever they need it.",
    href: "https://github.com/akeshwani2/nosh"
  },
  {
    num: "04",
    title: "Old Portfolio",
    description: "Check out another one of my portfolios that I had made previously using React.",
    href: "https://arhaankeshwaniportfolio.netlify.app/"
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