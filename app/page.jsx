import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi"
const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}          
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Full Stack SWE | Cybersecurity Enthusiast</span>
            <h1 className="h1 mb-6">
              Hello, I'm <br />  <span className="text-accent">Arhaan Keshwani</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I excel at crafting elegant digital experiences and I am proficient in 
              various programming languages and technologies.
            </p>
            {/* btn and socials*/}
            <div className="flex flex-col xl:flex-row items items-center gap-8">
            <a href="https://drive.google.com/file/d/1Iw3Rc85ZJYKxyAyeEVdj89ze8ZFC7leo/view?usp=sharing" target="_blank">
              <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                <p>Download CV</p>
                <FiDownload className="text-xl"/>
              </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  )
}

export default Home;