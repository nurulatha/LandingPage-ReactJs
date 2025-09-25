import heroImage from "../assets/hero-image.png";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const Hero = () => {
  return (
    <section id="home" className="container mx-auto flex flex-col md:flex-row justify-between items-center pt-44 pb-6 px-4 sm:px-6 lg:px-8 ">
      {/* left column */}
      <div className="w-full md:w-1/2 space-y-8">
        {/* star emoji */}
        <motion.div variants={fadeIn("right", 0.2)} initial="hidden" whileInView="show">
          <div className="flex items-center bg-gray-50 w-fit gap-2 px-4 py-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer group">
            <span className="group-hover:scale-130 transition-transform">🌟</span>
            <span className="text-sm font-medium">Jump Start Your Growth</span>
          </div>
        </motion.div>
        <motion.h1 variants={textVariant(0.3)} initial="hidden" whileInView="show" className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight">
          We boost the growth for
          <span className="text-blue-600 relative inline-block">
            Startup to Fortune 300
            <span className="absolute bottom-0 left-0 h-0.5 w-full bg-blue-200/60"></span>
          </span>
          Companies
          <span className="inline-block ml-2 animate-pulse">📈</span>
        </motion.h1>

        <motion.p variants={fadeIn("up", 0.4)} initial="hidden" whileInView="show" className="text-gray-600 text-lg md:text-xl max-w-xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae mollitia dicta aperiam ducimus officiis sed quas ipsam?
        </motion.p>

        <motion.div variants={fadeIn("up", 0.5)} initial="hidden" whileInView="show" className="flex gap-3  max-w-md">
          <input
            type="email"
            placeholder="Email address"
            className="flex-1 px-6 py-4 border border-gray-200 rounded-xl
            focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all"
          />
          <button className="bg-blue-600 px-8 py-4 text-white rounded-xl hover:bg-blue-700 cursor-pointer transition-all hover:shadow-lg ">➜</button>
        </motion.div>
      </div>

      {/* right column */}
      <motion.div variants={fadeIn("left", 0.4)} initial="hidden" whileInView="show" className="w-full md:w-1/2 mt-16 md:mt-0 pl-0 md:pl-12">
        <div className="relative">
          <img src={heroImage} alt="hero image" className="rounded-lg relative z-10 hover:scale-[1.02] transition-transform duration-300" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
