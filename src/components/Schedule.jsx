import scheduleImages from "../assets/stats.webp";
import { motion } from "framer-motion";
import { fadeIn, slideIn } from "../utils/motion";
const Schedule = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8 md:py-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24">
        {/* left */}
        <motion.div variants={slideIn("left", "tween", 0.3, 0.7)} initial="hidden" whileInView="show" className="md:w-1/2 w-full">
          <img src={scheduleImages} alt="schedule image" className="w-full h-auto" />
        </motion.div>
        {/* right */}
        <motion.div variants={fadeIn("up", 0.3)} initial="hidden" whileInView="show" className="md:w-1/2 w-full px-6">
          <p className="text-red-600 font-semibold">SCHEDULE</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
            Stream Your Business <br /> With Smart Scheduling System
          </h2>
          <p className="text-gray-600 mb-8">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit laborum esse fugiat error dolore non ex magnam veniam optio maiores eligendi earum molestias, mollitia sunt.
          </p>
          <a className="text-blue-500 font-semibold " href="#">
            Explore scheduling system ➡️
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Schedule;
