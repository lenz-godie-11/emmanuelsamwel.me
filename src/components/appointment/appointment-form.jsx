import { useState } from 'react';

function AppointmentForm({ onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      //  PLACEHOLDER: replace this block with your real backend call later.
      // Example with a backend endpoint:
      // const res = await fetch('https://your-backend.com/api/appointments', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // });
      // if (!res.ok) throw new Error('Request failed');

      console.log('Appointment request submitted:', formData);
      await new Promise((resolve) => setTimeout(resolve, 800)); // fake delay

      setStatus('success');
      setFormData({ name: '', email: '', date: '', message: '' });
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-8 w-full max-w-md relative">

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
          aria-label="Close"
        >
          ✕
        </button>

        <h3 className="text-xl font-bold mb-4">Schedule an appointment</h3>

        {status === 'success' ? (
          <div className="text-center py-6">
            <p className="text-green-400 font-medium mb-2">Request sent!</p>
            <p className="text-gray-400 text-sm">I'll get back to you soon.</p>
            <button
              onClick={onClose}
              className="mt-4 px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 text-sm"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="block text-sm text-gray-400 mb-1">Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-gray-700 focus:outline-none focus:border-gray-400 text-white"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-1">Email</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-gray-700 focus:outline-none focus:border-gray-400 text-white"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-1">Preferred date</label>
              <input
                type="date"
                name="date"
                required
                value={formData.date}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-gray-700 focus:outline-none focus:border-gray-400 text-white"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-1">Message</label>
              <textarea
                name="message"
                rows="3"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-gray-700 focus:outline-none focus:border-gray-400 text-white resize-none"
              />
            </div>

            {status === 'error' && (
              <p className="text-red-400 text-sm">Something went wrong. Try again.</p>
            )}

            <button
              type="submit"
              disabled={status === 'sending'}
              className="mt-2 px-5 py-2.5 rounded-full bg-white text-black hover:bg-gray-200 text-sm font-medium transition-colors disabled:opacity-50"
            >
              {status === 'sending' ? 'Sending...' : 'Send request'}
            </button>
          </form>
        )}

      </div>
    </div>
  );
}

export default AppointmentForm;
