const skills = [
  'Network Configuration & Troubleshooting',
  'Windows & Linux Server Administration',
  'Cybersecurity Fundamentals (Firewalls, VPNs)',
  'Hardware & Software Installation',
  'ERP Software Installation',
  'Computer Hardware Issue Resolution',
  'Technical Support & Helpdesk Management',
  'Cloud Services (AWS, Azure basics)',
  'Scripting (Bash, PowerShell)',
  'Database Management (SQL)',
  'Active Directory Management',
  'Virtualization (VMware, Hyper-V)',
  'install erp software',
  'resolve computer hardware issues',
  'more',
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-32 bg-slate-900">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Technical Skills</h2>
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="bg-slate-800 text-slate-300 py-2 px-5 rounded-full shadow-md hover:bg-cyan-500 hover:text-slate-900 transition-colors cursor-pointer">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
