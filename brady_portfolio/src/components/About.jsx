import aboutImg from "../assets/about.jpg";
const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <h1 className="my-20 text-center text-4xl">
        About <span className="text-neutral-500">Me</span>
      </h1>
      <div className="flex flex-wrap justify-around">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img
              className="h-100 w-96 object-cover rounded-2xl"
              src={aboutImg}
              alt="about"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <p className="my-2 max-w-xl py-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas culpa
                corrupti aspernatur sequi vero quos maiores recusandae ullam
                quibusdam excepturi aut nihil, est non incidunt facere impedit
                numquam sit fuga.
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
