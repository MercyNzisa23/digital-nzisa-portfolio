const projects = [
  {
    title: 'Office Network Infrastructure Setup',
    description: 'Designed and implemented a secure and scalable network for a medium-sized enterprise, including router/switch configuration and cabling.',
    imageUrl: 'https://placehold.co/600x400/1e293b/94a3b8?text=Network+Setup',
  },
  {
    title: 'Automated System Backup Solution',
    description: 'Developed and deployed an automated backup and recovery system for critical servers, reducing potential data loss and downtime.',
    imageUrl: 'https://placehold.co/600x400/1e293b/94a3b8?text=Backup+Solution',
  },
  {
    title: 'Helpdesk Ticketing System Rollout',
    description: 'Led the implementation of a new helpdesk system, improving ticket resolution times and user satisfaction.',
    imageUrl: 'https://placehold.co/600x400/1e293b/94a3b8?text=Helpdesk+System',
  },
   {
    title: 'Corporate Firewall Configuration',
    description: 'Configured and managed corporate firewalls to enhance network security and protect against external threats.',
    imageUrl: 'https://placehold.co/600x400/1e293b/94a3b8?text=Firewall+Config',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-slate-800 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
              <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover"/>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-slate-400">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;