import React, { useState, useEffect } from 'react';
import WavesBackground from './WavesBackground';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaYoutube, FaTwitch, FaTiktok } from 'react-icons/fa';

const defaultData = {
  title: "Hi I'm Melih Kochan",
  description: "This is a simple welcome page for now. Feel free to explore the links and discover more!",
  links: {
    linkedin: 'https://www.linkedin.com/in/melih-kochan-7961371a2/',
    github: 'https://github.com/melihkochan',
    twitter: 'https://x.com/melihkochan1',
    instagram: 'https://www.instagram.com/melih_kochan/'
  },
};

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [form, setForm] = useState({ username: '', password: '' });
  const [data, setData] = useState(defaultData);
  const [editData, setEditData] = useState(defaultData);

  useEffect(() => {
    const saved = localStorage.getItem('siteData');
    if (saved) {
      setData(JSON.parse(saved));
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (form.username === 'admin' && form.password === '1234') {
      setIsAdmin(true);
      setShowLogin(false);
      setEditData(data);
    } else {
      alert('Kullanıcı adı veya şifre yanlış!');
    }
  };

  const handleSave = () => {
    setData(editData);
    localStorage.setItem('siteData', JSON.stringify(editData));
    setIsAdmin(false);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <WavesBackground />
      {/* Sağ üstte Giriş Yap butonu */}
      {!isAdmin && (
        <button
          onClick={() => setShowLogin(true)}
          className="absolute top-6 right-6 z-20 px-4 py-2 border border-white rounded-lg text-white hover:bg-white hover:text-blue-700 transition"
        >
          Log in
        </button>
      )}
      {/* Giriş Modalı */}
      {showLogin && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-30">
          <form
            onSubmit={handleLogin}
            className="bg-white rounded-lg p-8 flex flex-col gap-4 min-w-[300px]"
          >
            <h2 className="text-xl font-bold text-center text-blue-700">Admin Girişi</h2>
            <input
              type="text"
              placeholder="Kullanıcı Adı"
              className="border p-2 rounded text-gray-800"
              value={form.username}
              onChange={e => setForm({ ...form, username: e.target.value })}
              autoFocus
            />
            <input
              type="password"
              placeholder="Şifre"
              className="border p-2 rounded text-gray-800"
              value={form.password}
              onChange={e => setForm({ ...form, password: e.target.value })}
            />
            <button
              type="submit"
              className="bg-blue-700 text-white rounded p-2 hover:bg-blue-800"
            >
              Giriş Yap
            </button>
            <button
              type="button"
              className="text-gray-500 hover:underline"
              onClick={() => setShowLogin(false)}
            >
              Vazgeç
            </button>
          </form>
        </div>
      )}
      {/* Admin Paneli */}
      {isAdmin ? (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-30">
          <div className="bg-white rounded-lg p-8 w-full max-w-md flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">Admin Paneli</h2>
            <label className="font-semibold">Başlık</label>
            <input
              className="border p-2 rounded text-gray-800"
              value={editData.title}
              onChange={e => setEditData({ ...editData, title: e.target.value })}
            />
            <label className="font-semibold">Açıklama</label>
            <textarea
              className="border p-2 rounded text-gray-800"
              value={editData.description}
              onChange={e => setEditData({ ...editData, description: e.target.value })}
            />
            <label className="font-semibold">Sosyal Medya Linkleri</label>
            <div className="grid grid-cols-2 gap-2">
              {['linkedin', 'github', 'twitter', 'instagram'].map((key) => (
                <div key={key} className="flex flex-col">
                  <label className="text-xs text-gray-600 mb-1">
                    {key === 'linkedin' && 'LinkedIn Profili'}
                    {key === 'github' && 'GitHub Profili'}
                    {key === 'twitter' && 'Twitter Profili'}
                    {key === 'instagram' && 'Instagram Profili'}
                  </label>
                  <input
                    className="border p-2 rounded text-gray-800"
                    value={editData.links[key]}
                    placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
                    onChange={e => setEditData({
                      ...editData,
                      links: { ...editData.links, [key]: e.target.value }
                    })}
                  />
                </div>
              ))}
            </div>
            <div className="flex gap-2 mt-4">
              <button
                className="bg-blue-700 text-white rounded p-2 flex-1 hover:bg-blue-800"
                onClick={handleSave}
              >
                Kaydet
              </button>
              <button
                className="bg-gray-300 text-gray-700 rounded p-2 flex-1 hover:bg-gray-400"
                onClick={() => setIsAdmin(false)}
              >
                Vazgeç
              </button>
            </div>
          </div>
        </div>
      ) : null}
      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center max-w-2xl w-full mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 text-center">{data.title}</h1>
        <p className="text-gray-200 mb-8 text-center max-w-xl">
          {data.description}
        </p>
        <div className="flex flex-wrap justify-center gap-6 text-2xl md:text-3xl">
        <a href={data.links.linkedin} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#0e76a8] transition-colors" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href={data.links.github} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#333] transition-colors" aria-label="GitHub"><FaGithub /></a>
          <a href={data.links.twitter} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#1da1f2] transition-colors" aria-label="Twitter"><FaTwitter /></a>
          <a href={data.links.instagram} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#e1306c] transition-colors" aria-label="Instagram"><FaInstagram /></a>
        </div>
      </div>
    </div>
  );
}

export default App; 