import { useState } from 'react';
import AppointmentForm from '../components/appointment/appointment-form.jsx';

function About() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="w-full bg-black text-white py-10 px-4 sm:px-0">
      <div className="max-w-2xl mx-auto flex flex-col gap-6">

        <section className="bg-white/5 border border-gray-800 rounded-2xl p-6 sm:p-8">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">Who am I?</h3>

          <div>
            <h4 className="text-lg font-medium mb-2">I'm emmanuelsamwel.me</h4>
            <p className="text-gray-400 leading-relaxed">
              A software developer and machine learning engineer, working
              productively in dynamic environments. Focusing on achieving
              project goals with an efficient and minimalist approach.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mt-6">
            <button
              onClick={() => setShowForm(true)}
              className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-sm font-medium transition-colors"
            >
              Schedule an appointment
            </button>

            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-full bg-gray-600 hover:bg-gray-500 text-sm font-medium transition-colors flex items-center gap-2">
              Résumé
              <span>→</span>
            </a>
          </div>
        </section>

        <section className="bg-white/5 border border-gray-800 rounded-2xl p-6 sm:p-8">
          <h3 className="text-2xl sm:text-3xl font-bold mb-3">Hobbies</h3>
          <ul className="flex flex-wrap gap-2 text-gray-400 text-sm">
            <li>Drawing</li>
            <li>|</li>
            <li>Photography</li>
            <li>|</li>
            <li>Music</li>
            <li>|</li>
            <li>Video Games</li>
          </ul>
        </section>

      </div>

      {showForm && <AppointmentForm onClose={() => setShowForm(false)} />}
    </div>
  );
}

export default About;
