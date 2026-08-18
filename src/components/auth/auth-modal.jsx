import { useState } from 'react';

export const auth = {
  getToken: () => localStorage.getItem('token'),
  isLoggedIn: () => !!localStorage.getItem('token'),
  logout: () => localStorage.removeItem('token'),
};

function AuthModal({ onClose, onSuccess }) {
  const [mode, setMode] = useState('register');
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [status, setStatus] = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');

    const endpoint = mode === 'register' ? '/api/register' : '/api/login';

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: formData.username,
          password: formData.password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      localStorage.setItem('token', data.token);
      onSuccess();
    } catch (err) {
      setErrorMsg(err.message);
      setStatus('error');
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-8 w-full max-w-sm relative">

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
          aria-label="Close"
        >
          ✕
        </button>

        <h3 className="text-xl font-bold mb-1">
          {mode === 'register' ? 'Create an account' : 'Log in'}
        </h3>
        <p className="text-gray-400 text-sm mb-4">
          {mode === 'register'
            ? 'Sign up to book an appointment.'
            : 'Log in to continue booking.'}
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Username</label>
            <input
              type="text"
              name="username"
              required
              value={formData.username}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-white/5 border border-gray-700 focus:outline-none focus:border-gray-400 text-white"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1">Password</label>
            <input
              type="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-white/5 border border-gray-700 focus:outline-none focus:border-gray-400 text-white"
            />
          </div>

          {status === 'error' && (
            <p className="text-red-400 text-sm">{errorMsg}</p>
          )}

          <button
            type="submit"
            disabled={status === 'sending'}
            className="mt-2 px-5 py-2.5 rounded-full bg-white text-black hover:bg-gray-200 text-sm font-medium transition-colors disabled:opacity-50"
          >
            {status === 'sending' ? 'Please wait...' : (mode === 'register' ? 'Sign up' : 'Log in')}
          </button>
        </form>

        <p className="text-center text-sm text-gray-400 mt-4">
          {mode === 'register' ? 'Already have an account?' : "Don't have an account?"}{' '}
          <button
            onClick={() => setMode(mode === 'register' ? 'login' : 'register')}
            className="text-white underline hover:text-gray-300"
          >
            {mode === 'register' ? 'Log in' : 'Sign up'}
          </button>
        </p>

      </div>
    </div>
  );
}

export default AuthModal;
