const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Contact Me</h2>
        <div className="max-w-2xl mx-auto bg-slate-800 rounded-lg shadow-lg p-8">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-slate-400 mb-2">Name</label>
              <input type="text" id="name" name="name" className="w-full bg-slate-700 border border-slate-600 rounded-md py-2 px-3 text-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-slate-400 mb-2">Email</label>
              <input type="email" id="email" name="email" className="w-full bg-slate-700 border border-slate-600 rounded-md py-2 px-3 text-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-slate-400 mb-2">Message</label>
              <textarea id="message" name="message" rows={4} className="w-full bg-slate-700 border border-slate-600 rounded-md py-2 px-3 text-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="bg-cyan-500 text-slate-900 font-bold py-3 px-8 rounded-full hover:bg-cyan-400 transition-colors">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;