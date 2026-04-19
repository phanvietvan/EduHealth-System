import React, { useState } from 'react';
import { healthService } from '../services/api';

const AdminVitalsEntry = ({ setView }) => {
  const [formData, setFormData] = useState({
    userId: 'HS2024001',
    date: new Date().toISOString().split('T')[0],
    height: '',
    weight: '',
    heartRate: '',
    temperature: '',
    bloodPressure: ''
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await healthService.addVitals(formData.userId, formData);
      setMessage('Đã cập nhật chỉ số sinh tồn thành công!');
    } catch (error) {
      setMessage('Lỗi khi cập nhật: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-8 glass-panel border border-white/10 rounded-3xl animate-in fade-in zoom-in duration-500">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-black text-white tracking-tighter">Chỉ số BMI & Sinh hiệu</h2>
          <p className="text-slate-500 text-sm mt-1 uppercase tracking-widest font-bold">Vitals & Anthropometry</p>
        </div>
        <button onClick={() => setView('dashboard')} className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white transition-all">
          <span className="material-symbols-outlined">close</span>
        </button>
      </div>

      {message && (
        <div className={`mb-6 p-4 rounded-xl text-sm font-bold ${message.includes('Lỗi') ? 'bg-red-500/10 text-red-400' : 'bg-cyan-500/10 text-cyan-400'}`}>
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Mã học sinh</label>
          <input 
            className="w-full bg-white/5 border border-white/5 rounded-xl px-4 py-3 text-white focus:ring-1 focus:ring-cyan-400 outline-none transition-all"
            value={formData.userId}
            onChange={(e) => setFormData({...formData, userId: e.target.value})}
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Chiều cao (cm)</label>
            <input 
              type="number"
              step="0.1"
              className="w-full bg-white/5 border border-white/5 rounded-xl px-4 py-3 text-white focus:ring-1 focus:ring-cyan-400 outline-none transition-all"
              value={formData.height}
              onChange={(e) => setFormData({...formData, height: e.target.value})}
              required
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Cân nặng (kg)</label>
            <input 
              type="number"
              step="0.1"
              className="w-full bg-white/5 border border-white/5 rounded-xl px-4 py-3 text-white focus:ring-1 focus:ring-cyan-400 outline-none transition-all"
              value={formData.weight}
              onChange={(e) => setFormData({...formData, weight: e.target.value})}
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Nhiệt độ (°C)</label>
            <input 
              type="number"
              step="0.1"
              className="w-full bg-white/5 border border-white/5 rounded-xl px-4 py-3 text-white focus:ring-1 focus:ring-cyan-400 outline-none transition-all"
              value={formData.temperature}
              onChange={(e) => setFormData({...formData, temperature: e.target.value})}
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Nhịp tim (bpm)</label>
            <input 
              type="number"
              className="w-full bg-white/5 border border-white/5 rounded-xl px-4 py-3 text-white focus:ring-1 focus:ring-cyan-400 outline-none transition-all"
              value={formData.heartRate}
              onChange={(e) => setFormData({...formData, heartRate: e.target.value})}
            />
          </div>
        </div>

        <button 
          type="submit" 
          disabled={loading}
          className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-400 to-teal-600 text-white font-black uppercase tracking-widest shadow-xl shadow-cyan-900/40 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50"
        >
          {loading ? 'Đang cập nhật...' : 'Cập nhật sinh hiệu'}
        </button>
      </form>
    </div>
  );
};

export default AdminVitalsEntry;
