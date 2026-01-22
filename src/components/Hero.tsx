const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center text-center container mx-auto px-4 md:px-6 lg:px-8">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
          Mercy Nzisa
        </h1>
        <p className="text-xl md:text-2xl text-cyan-400 font-semibold mb-6">
          ICT Support & Network Specialist
        </p>
        <p className="text-lg text-slate-400 mb-8">
          Diploma in IT | BSc in Information Technology
        </p>
        <a 
          href="#projects" 
          className="bg-cyan-500 text-slate-900 font-bold py-3 px-8 rounded-full hover:bg-cyan-400 transition-transform transform hover:scale-105 inline-block"
        >
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Hero;