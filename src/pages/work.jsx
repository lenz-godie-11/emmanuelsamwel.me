import { useState } from 'react';
import { Eye, ArrowUpRight, ChevronDown, ChevronUp, X } from 'lucide-react';

function Work() {
  const [openId, setOpenId] = useState(null);
  const [previewProject, setPreviewProject] = useState(null);

  const projects = [
    { id: 1, title: 'The Cookie App', link: 'https://the-cookie-app.vercel.app/', description: 'A web app for browsing and ordering cookies online. Built to explore a clean, responsive e-commerce style UI.' },
    { id: 2, title: 'Dervas Company', link: 'https://dervas-company.vercel.app/', description: 'Official website for Dervas Company. Currently in production, showcasing the company\'s services and brand.' },
    { id: 3, title: 'Irene.me', link: 'https://irene-me.vercel.app/', description: 'A personal portfolio website built for a client, showcasing their work and background.' },
    { id: 4, title: 'Water.com', link: 'https://water-com.vercel.app/', description: 'A website concept focused on clean water access and awareness.' },
    { id: 5, title: 'Skipper Weather', link: 'https://skipper-weather.vercel.app/', description: 'A weather forecast web app showing real-time conditions and forecasts for any location.' },
    { id: 6, title: 'Lipa Pamoja', link: 'https://lipa-pamoja.vercel.app/', description: 'A group payment/contribution platform concept. Frontend built, backend not yet live.' },
  ];

  const toggleDetails = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="w-full bg-black text-white py-8 sm:py-10 px-4 sm:px-0">
      <div className="max-w-5xl mx-auto flex flex-col gap-2 items-center text-center mb-8 sm:mb-10">
        <h1 className="text-2xl sm:text-4xl font-bold">Works &amp; Projects</h1>
        <p className="text-gray-400 text-sm sm:text-base max-w-xl">
          Here is a list of the projects and collaborations I have been involved in over the past few years.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 items-start">
        {projects.map((project) => {
          const isOpen = openId === project.id;
          return (
            <div key={project.id} className="bg-white/5 border border-gray-800 rounded-xl overflow-hidden flex flex-col">
              <div className="px-4 py-3">
                <h3 className="font-semibold text-sm">{project.title}</h3>
              </div>

              <div className="mx-4 aspect-[4/3] rounded-lg overflow-hidden bg-white flex items-center justify-center">
                <img
                  src={`https://api.microlink.io/?url=${encodeURIComponent(project.link)}&screenshot=true&meta=false&embed=screenshot.url`}
                  alt={project.title}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>

              <div className="flex items-center justify-between gap-2 p-4">
                <button
                  onClick={() => toggleDetails(project.id)}
                  className="flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-white text-black text-xs sm:text-sm font-medium hover:bg-gray-200 transition-colors"
                >
                  Details
                  {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setPreviewProject(project)}
                    className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                    aria-label={`Preview ${project.title}`}
                  >
                    <Eye size={16} />
                  </button>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 transition-colors" aria-label={`Open ${project.title}`}>
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>

              {isOpen && (
                <div className="px-4 pb-4 text-sm text-gray-300 leading-relaxed">
                  {project.description}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {previewProject && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4" onClick={() => setPreviewProject(null)}>
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-4 max-w-2xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold">{previewProject.title}</h3>
              <button onClick={() => setPreviewProject(null)} className="text-gray-400 hover:text-white">
                <X size={20} />
              </button>
            </div>
            <img
              src={`https://api.microlink.io/?url=${encodeURIComponent(previewProject.link)}&screenshot=true&meta=false&embed=screenshot.url`}
              alt={previewProject.title}
              className="w-full rounded-lg"
            />
            <a href={previewProject.link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white text-black text-sm font-medium hover:bg-gray-200 transition-colors">
              Visit site <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Work;
