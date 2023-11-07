const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. I&apos;m Scott. Have a look around, enjoy.</p>
          </div>
          <div>
            <p>
              This is another summary of things that I am good at, maybe even a
              little longer than the last one. I really have to sell it in this
              one, make people excited to read about me and the stuff that I do.
              I have to really make them want to throw their money at me.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
