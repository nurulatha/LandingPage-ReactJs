import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
const Purpose = () => {
  return (
    <section className="w-full bg-gray-50 py-16 px-4 sm:px-6 md:px-8">
      <motion.div 
      variants={fadeIn("up", 0.3)} initial="hidden" whileInView="show"
    
      className="max-w-5xl mx-auto ">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
          <div className="">
            <p className="text-purple-600 text-sm font-medium mb-2">ACHIEVE MORE</p>
            <h2 className="text-3xl  w-full md:text-3xl font-bold text-gray-800">Purpose of a convoy is to keep your team</h2>
          </div>
          <div className="">
            <p className="text-purple-600 text-sm font-medium mb-2">ACHIEVE MORE</p>
            <h2 className="text-xl  w-full md:text-xl font-medium text-gray-800">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, nulla labore culpa odit aut eosulpa odit au.</h2>
          </div>
          <div className="">
            <p className="text-purple-600 text-sm font-medium mb-2">ACHIEVE MORE</p>
            <h2 className="text-3xl  w-full md:text-3xl font-bold text-gray-800">Purpose of a convoy is to keep your team</h2>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Purpose;
