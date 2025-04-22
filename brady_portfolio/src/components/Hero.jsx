import me from "../assets/logo.png";
import { motion } from "motion/react"

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1 animate={{x: 100}} className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
              Brady Yang
            </motion.h1>
            <motion.span whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
              Full Stack Developer
            </motion.span>
            <p className="my-2 max-w-xl tracking-tighter">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque
              quisquam illo quo? Quaerat vitae sapiente quos sed possimus atque,
              aspernatur voluptatibus praesentium ipsa, tempore eligendi ratione
              cupiditate velit ab nulla.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
        <div className="flex justify-center">
          <img className="h-100 w-96 object-cover" src={me} alt="me" />
        </div>
          
        </div>
      </div>
    </div>
  );
};

export default Hero;
