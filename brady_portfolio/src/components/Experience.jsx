const Experience = () => {
    const experience = [{
        years: "2020-2022", role: "Assistant", compony: "SINCA",  description: "I was an assistant in the SINCA company, where I learned about the importance of teamwork and communication. I also gained experience in project management and customer service."
    }, {
        years: "2022-2023", role: "Data Engineer", compony: "Hwacom", description: "I worked as a data engineer at Hwacom, where I was responsible for designing and implementing data pipelines. I also worked on data analysis and visualization projects, using tools like Python and Tableau."
    }, {
        years: "2023-2024", role: "Frontend Engineer", compony: "Hwacom", description: "I worked as a frontend engineer at Hwacom, where I was responsible for designing and implementing user interfaces. I also worked on web development projects, using tools like React and Next.js."
    }, {
        years: "2024-present", role: "Senior Software Engineer" ,compony: "Wistron", description: "I worked as a senior software engineer at Wistron, where I was responsible for leading a team of developers. I also worked on software development projects, using tools like Java and Spring."
    }]
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <h1 className="my-20 text-center text-4xl">Experience</h1>
      <div>
        {experience.toReversed().map((experience, index)=>(
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                <div className="w-full lg:w-1/4">
                    <p className="mb-2 text-sm text-neutral-400">{experience.years}</p>
                </div>
                <div className="w-full lg:w-3/4">
                    <h6 className="mb-2 font-semibold">{experience.role}-{' '}<span className="text-sm text-purple-100">{experience.compony}</span></h6>
                    <p className="mb-4 text-neutral-400">{experience.description}</p>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;