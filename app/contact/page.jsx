"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import emailjs from '@emailjs/browser';
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue, } from "@/components/ui/select"
import { useEffect } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"


const info = [
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "akeshwanibusiness@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Atlanta, GA",
  },
]

import { motion } from "framer-motion";


const Contact = () => {

  useEffect(() => {
    emailjs.init('n8NDrUx40HzYFneGm'); // Initialize EmailJS with your public key
  }, []);

  // Function to handle the form submission
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_y6zo5hd', 'template_g1pvj22', e.target, 'n8NDrUx40HzYFneGm')
      .then((result) => {
        console.log(result.text);
        alert('Message sent successfully!');
      }, (error) => {
        console.log(error.text);
        alert('Failed to send the message. Please try again.');
      });
  };
  // The JSX form with the onSubmit event linked to sendEmail function
  return <motion.section initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 1.8, duration: 0.4, ease: "easeIn"},}} className="py-6">
    <div className="container mx-auto">
      <div className="flex flex-col xl:flex-row gap-[30px] ">
        {/* form */}
        <div className="xl:w-[54%] order-2 xl:order-none">
          <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl" onSubmit={sendEmail}>
            <h3 className="text-4xl text-accent">Let's work together</h3>
            <p className="text-white/60">
              Ready to collaborate and create something extraordinary? Reach out, and let's bring your vision to life!
            </p>
            {/* input */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input type="first" required name="name" placeholder="First Name" />
              <Input type="last" required name="name" placeholder="Last Name"/>
              <Input type="email" required name="email" placeholder="Email Address"/>
              <Input type="phone" name="phone" placeholder="Phone Number"/>
            </div>
            {/* select */}
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Select a service</SelectLabel>
                  <SelectItem value="est">Web Development and Design</SelectItem>
                  <SelectItem value="cst">App Development and Design</SelectItem>
                  <SelectItem value="mst">Other</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            {/* textarea */}
            <Textarea className="h-[200px]" name="message" required placeholder="Type your message here"/>
            {/* btn */}
            <Button size="md" className="max-w-40" type="submit">Send Message</Button>
          </form>
        </div>
        {/* info */}
        <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
          <ul className="flex flex-col gap-10">
            {info.map((item, index)=> {
              return <li key={index} className="flex items-center gap-6">
                <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                  <div className="text=[28px]">{item.icon}</div>
                </div>
                <div className="flex-1">
                  <p className="text-white/60">{item.title}</p>
                  <h3 className="text-xl">{item.description}</h3>
                </div>
              </li>
            })}
          </ul>
        </div>
      </div>
    </div>
  </motion.section>;
};



export default Contact;

// return (
//   <div>
//     <h2>Contact Us</h2>
//     <form onSubmit={sendEmail}>
//       <input type="text" name="user_name" placeholder="Name" required />
//       <input type="email" name="user_email" placeholder="Email" required />
//       <textarea name="message" placeholder="Your message" required></textarea>
//       <button type="submit">Send</button>
//     </form>
//   </div>
// );
// };  
