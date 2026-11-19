"use client";
import { useState } from "react";

export default function Home() {
  const [qty, setQty] = useState(3);
  const [commune, setCommune] = useState("");

  const prixBloc = 4000;
  const livraison = qty <= 5 ? 8000 : qty <= 10 ? 10000 : qty < 20 ? 15000 : 20000;
  const total = qty * prixBloc + livraison;
  const wa = "https://wa.me/243810011861?text=";
  const message = `Bonjour HOLY BUSINESS 🧊, je veux commander ${qty} bloc(s) de glace. Ma commune : ${commune || "[ma commune]"}. Total : ${total.toLocaleString()} FC (livraison incluse). C'est possible ?`;
  
  return (
    <div style={{ fontFamily: 'sans-serif', background: '#f0f9ff', minHeight: '100vh', paddingBottom: 40 }}>
      
      {/* HEADER */}
      <div style={{ background: 'linear-gradient(135deg, #0284c7, #0ea5e9)', color: 'white', padding: '28px 20px 32px', borderRadius: '0 0 24px 24px', textAlign: 'center' }}>
        <div style={{ fontSize: 56 }}>🧊</div>
        <h1 style={{ fontSize: 32, margin: '8px 0 4px', letterSpacing: 1 }}>HOLY BUSINESS</h1>
        <p style={{ margin: 0, opacity: 0.9 }}>Blocs de Glace • Livraison Rapide Kinshasa</p>
        <div style={{ background: 'rgba(255,255,255,0.2)', display: 'inline-block', padding: '6px 14px', borderRadius: 20, marginTop: 12, fontSize: 13, fontWeight: 'bold' }}>🟢 OUVERT • 7h à 22h • 7j/7</div>
      </div>

      <div style={{ maxWidth: 480, margin: '-10px auto 0', padding: '0 16px' }}>

        {/* PRIX */}
        <div style={{ background: 'white', borderRadius: 16, padding: 18, boxShadow: '0 4px 20px rgba(0,0,0,0.08)', marginTop: 16 }}>
          <h2 style={{ margin: '0 0 12px', fontSize: 18 }}>💰 Nos Prix</h2>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #eee' }}><span>🧊 1 Bloc Standard</span><b>4.000 FC</b></div>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #eee' }}><span>🛵 Livraison 1 à 5 blocs</span><b>8.000 FC</b></div>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #eee' }}><span>🛵 Livraison 6 à 10 blocs</span><b>10.000 FC</b></div>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #eee' }}><span>🛵 Livraison 11 à 19 blocs</span><b>15.000 FC</b></div>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0' }}><span>🛵 Livraison 20 à 50 blocs</span><b>20.000 FC</b></div>
          <p style={{ background: '#fef9c3', padding: '8px 10px', borderRadius: 8, fontSize: 13, textAlign: 'center', margin: '12px 0 0' }}>NB: Paiement à la livraison 😉</p>
        </div>

        {/* CALCULATEUR */}
        <div style={{ background: '#0f172a', color: 'white', borderRadius: 16, padding: 20, marginTop: 16, boxShadow: '0 8px 25px rgba(0,0,0,0.15)' }}>
          <h2 style={{ margin: '0 0 4px', fontSize: 20 }}>🧮 Calculez votre commande</h2>
          <p style={{ margin: '0 0 16px', opacity: 0.7, fontSize: 13 }}>Choisissez le nombre de blocs, le total se calcule seul.</p>

          <label style={{ fontSize: 13, opacity: 0.8 }}>Nombre de blocs :</label>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '10px 0 16px' }}>
            <button onClick={() => setQty(Math.max(1, qty - 1))} style={{ width: 48, height: 48, borderRadius: 12, border: 'none', background: 'white', fontSize: 24, fontWeight: 'bold', cursor: 'pointer' }}>-</button>
            <div style={{ flex: 1, textAlign: 'center', background: 'white', color: 'black', padding: '12px', borderRadius: 12, fontSize: 22, fontWeight: 'bold' }}>{qty} bloc{qty > 1 ? 's' : ''} 🧊</div>
            <button onClick={() => setQty(Math.min(50, qty + 1))} style={{ width: 48, height: 48, borderRadius: 12, border: 'none', background: '#0ea5e9', color: 'white', fontSize: 24, fontWeight: 'bold', cursor: 'pointer' }}>+</button>
          </div>

          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 16 }}>
            {[1,2,3,5,8,10,20,30,50].map(n => (
              <button key={n} onClick={() => setQty(n)} style={{ padding: '8px 14px', borderRadius: 20, border: qty === n ? '2px solid #0ea5e9' : '1px solid #334155', background: qty === n ? '#0ea5e9' : 'transparent', color: 'white', fontWeight: 'bold', cursor: 'pointer' }}>{n} blocs</button>
            ))}
          </div>

          <label style={{ fontSize: 13, opacity: 0.8 }}>Votre commune :</label>
          <input value={commune} onChange={(e) => setCommune(e.target.value)} placeholder="Ex: Gombe, Bandal, Lemba..." style={{ width: '100%', boxSizing: 'border-box', padding: 12, borderRadius: 10, border: 'none', marginTop: 8, fontSize: 15 }} />

          <div style={{ background: 'rgba(255,255,255,0.1)', borderRadius: 12, padding: 14, marginTop: 16, fontSize: 14, lineHeight: 1.8 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>{qty} x 4.000 FC</span><span>{(qty * prixBloc).toLocaleString()} FC</span></div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Livraison</span><span>{livraison.toLocaleString()} FC</span></div>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px dashed rgba(255,255,255,0.3)', marginTop: 8, paddingTop: 8, fontSize: 18 }}><b>TOTAL</b><b style={{ color: '#4ade80' }}>{total.toLocaleString()} FC</b></div>
          </div>

          <a href={wa + encodeURIComponent(message)} target="_blank" style={{ display: 'block', background: '#22c55e', color: 'white', textAlign: 'center', padding: '14px', borderRadius: 12, fontWeight: 'bold', textDecoration: 'none', marginTop: 16, fontSize: 16 }}>📱 Commander sur WhatsApp</a>
          <p style={{ textAlign: 'center', fontSize: 12, opacity: 0.6, margin: '10px 0 0' }}>Paiement à la livraison 💵 • Livraison 30-60 min</p>
        </div>

        {/* COMMENT CA MARCHE */}
        <div style={{ background: 'white', borderRadius: 16, padding: 18, marginTop: 16, textAlign: 'center' }}>
          <h3 style={{ marginTop: 0 }}>Comment ça marche ?</h3>
          <p style={{ fontSize: 14, lineHeight: 1.8, margin: 0 }}>1️⃣ Choisissez vos blocs<br/>2️⃣ Écrivez votre commune<br/>3️⃣ Cliquez WhatsApp<br/>4️⃣ On livre, vous payez 🚀</p>
        </div>

        <a href={wa + encodeURIComponent("Bonjour, c'est URGENT, j'ai besoin de glace maintenant !")} target="_blank" style={{ display: 'block', background: '#ef4444', color: 'white', textAlign: 'center', padding: '14px', borderRadius: 12, fontWeight: 'bold', textDecoration: 'none', marginTop: 16 }}>🚨 BESOIN URGENT ? CLIQUEZ ICI</a>

      </div>
    </div>
  );
}