import {RiReactjsLine} from 'react-icons/ri';
import { RiTailwindCssFill } from "react-icons/ri";
import { RiHtml5Fill } from "react-icons/ri";
import { FaNode } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaDocker } from "react-icons/fa";
import { BiLogoKubernetes } from "react-icons/bi";
import { SiMongodb } from "react-icons/si";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiReactjsLine className='text-7xl text-cyan-400'></RiReactjsLine>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiTailwindCssFill className='text-7xl text-cyan-400'></RiTailwindCssFill>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiHtml5Fill className='text-7xl text-orange-400'></RiHtml5Fill>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaNode className='text-7xl text-green-400'></FaNode>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <BiLogoPostgresql className='text-7xl text-sky-700'></BiLogoPostgresql>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiMongodb className='text-7xl text-green-300'></SiMongodb>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaDocker className='text-7xl text-blue-200'></FaDocker>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <BiLogoKubernetes className='text-7xl text-blue-700'></BiLogoKubernetes>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
