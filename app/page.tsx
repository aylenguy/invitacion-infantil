"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  CalendarDays,
  MapPin,
  MessageCircleHeart,
  Sparkles,
  Gift,
  Copy,
  CheckCircle2,
  Navigation,
} from "lucide-react";
import { Bebas_Neue, Poppins } from "next/font/google";
import { useState, useEffect } from "react";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});


export default function InvitacionUnicornio() {
  const [color, setColor] = useState<string | null>(null);
  
// 1. Agregamos "seg" al estado inicial
  const [timeLeft, setTimeLeft] = useState({ dias: 0, horas: 0, min: 0, seg: 0 });

  useEffect(() => {
    const targetDate = new Date(2026, 6, 12, 16, 0, 0).getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
          horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
          min: Math.floor((difference / 1000 / 60) % 60),
          seg: Math.floor((difference / 1000) % 60), // <-- Cálculo de segundos
        });
      }
    };

    updateTimer();
    const timer = setInterval(updateTimer, 1000);
    return () => clearInterval(timer);
  }, []);


  return (
<main className={`overflow-x-hidden bg-gradient-to-b from-[#fff0fb] via-[#f3ecff] to-[#eaf6ff] ${poppins.className}`}> {/* HERO SECTION */}
<section className="relative flex min-h-screen items-center justify-center text-center px-6 overflow-hidden">

  {/* Imagen fondo */}
  <div className="absolute inset-0">
    <Image
      src="/images/descarga.jpg" // Referencia a image_ef27bd.jpg
      alt="Fondo unicornio"
      fill
      className="object-cover object-center"
      priority
    />
  </div>

  {/* Overlay de contraste: Gradiente oscuro superior para legibilidad */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/20" />

  {/* Overlay color suave */}
  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(123,44,255,0.2),rgba(255,255,255,0.1))]" />

  {/* CONTENIDO: Subido significativamente para no tapar a los personajes */}
  <div className="relative z-10 -mt-48 md:-mt-64">

    {/* Texto superior: Morado oscuro con sombra blanca */}
    <motion.p 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="uppercase tracking-[0.4em] text-[#5b1bc2] text-xs md:text-sm font-black mb-2 drop-shadow-[0_2px_4px_rgba(255,255,255,0.8)]"
    >
      Invitación mágica
    </motion.p>

    {/* Nombre: Blanco con resplandor morado */}
    <motion.h1 
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
className={`${bebas.className} text-7xl md:text-9xl tracking-wider text-white drop-shadow-[0_0_20px_rgba(123,44,255,0.8)]`}    >
      Valentina
    </motion.h1>

    {/* Subtítulo: Fucsia intenso con contorno blanco */}
    <motion.p 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="mt-2 text-[#e600a2] text-2xl md:text-3xl font-bold tracking-widest drop-shadow-[0_2px_10px_rgba(255,255,255,0.9)]"
    >
      ¡MIS <span className="text-[#5b1bc2] font-black text-4xl md:text-5xl drop-shadow-[0_2px_0_white]">5</span> AÑOS!
    </motion.p>

  </div>
</section>

     {/* CUENTA REGRESIVA */}
<section className="py-12 bg-white/50 backdrop-blur-md">
  {/* Usamos grid-cols-4 para que entren Días, Horas, Min y Seg en la misma línea */}
  <div className="max-w-2xl mx-auto grid grid-cols-4 gap-2 md:gap-4 px-2 md:px-6 text-center">
    {Object.entries(timeLeft).map(([label, value]) => (
      <div 
        key={label} 
        className="bg-white p-2 md:p-4 rounded-xl md:rounded-2xl shadow-sm border border-pink-100 flex flex-col justify-center items-center"
      >
        {/* El texto se ajusta dinámicamente para no romperse en pantallas chicas */}
        <span className="block text-xl sm:text-2xl md:text-4xl font-bold text-purple-600">
          {value < 10 ? `0${value}` : value}
        </span>
        <span className="text-[10px] md:text-xs uppercase text-pink-400 font-bold truncate w-full">
          {label}
        </span>
      </div>
    ))}
  </div>
</section>

      {/* FRASE INTERACTIVA */}
     <section className="text-center py-20 px-6 bg-gradient-to-b from-[#0f0f1a] to-[#1a1a2e] text-white">

  {/* FRASE */}
  <motion.p 
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
className="text-3xl md:text-4xl max-w-2xl mx-auto font-semibold text-[#ff4fd8] tracking-wide drop-shadow-[0_0_10px_rgba(255,79,216,0.5)]"  >
    "Esta fiesta no es para mirar… es para brillar en el escenario" 🎤✨
  </motion.p>

  {/* INTERACCIÓN */}
  <div className="mt-14">
    <h3 className="text-xl text-purple-300 mb-8 font-semibold uppercase tracking-widest">
      Elegí tu guerrera
    </h3>

    <div className="flex justify-center gap-6 flex-wrap">

      {[
        { name: "Zoey", color: "#ff4fd8" },
        { name: "Mira", color: "#7b5cff" },
        { name: "Rumi", color: "#00e5ff" },
      ].map((item) => (
        <button
          key={item.name}
          onClick={() => setColor(item.name)}
          className="px-6 py-3 rounded-full font-bold text-sm shadow-lg transition hover:scale-110"
          style={{
            background: item.color,
            color: "white",
            boxShadow: `0 0 15px ${item.color}`,
          }}
        >
          {item.name}
        </button>
      ))}
    </div>

    <AnimatePresence>
      {color && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="mt-8 font-bold text-xl"
        >
          {color === "Zoey" && "💖 Sos pura actitud y brillo arriba del escenario"}
          {color === "Mira" && "⚡ Tenés el poder y la energía de una verdadera idol"}
          {color === "Rumi" && "🌈 Tu estilo es único, naciste para destacar"}
        </motion.p>
      )}
    </AnimatePresence>
  </div>
</section>

      {/* CUANDO Y DONDE */}
      <section className="py-10 px-6">
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white rounded-[2rem] p-10 shadow-xl border-b-8 border-pink-200 text-center"
          >
            <CalendarDays className="mx-auto mb-4 text-pink-400" size={48} />
            <h3 className="text-2xl font-bold text-purple-700">Día y Hora</h3>
            <p className="text-lg mt-2 italic text-gray-600">Sábado 12 de Julio</p>
            <p className="text-3xl font-bold text-pink-500">16:00 HS</p>
          </motion.div>

         <motion.div 
  whileHover={{ y: -5 }}
  className="bg-white rounded-[2rem] p-10 shadow-xl border-b-8 border-blue-200 text-center"
>
  <MapPin className="mx-auto mb-4 text-blue-300" size={48} />
  
  <h3 className="text-2xl font-extrabold text-purple-800 uppercase tracking-widest">
    Ubicación
  </h3>
  
  <div className="space-y-1 mt-4 mb-8">
 <p className="text-2xl font-medium text-gray-900 border-b border-gray-200 pb-2 mb-2">
  Salón Nubes Mágicas
</p>
   <p className="text-gray-700 font-medium tracking-tight">
  Av. De las Estrellas 777, <span className="text-blue-500 font-bold">Rosario</span>
</p>
  </div>

  <a 
    href="https://maps.google.com" 
    target="_blank"
    className="inline-flex items-center gap-2 border-2 border-blue-400 text-blue-500 px-6 py-2 rounded-full text-xs font-bold hover:bg-blue-50 transition"
  >
    <Navigation size={14} /> VER UBICACIÓN
  </a>
</motion.div>
        </div>
      </section>

     

     {/* CONFIRMAR */}
<section className="py-24 text-center px-6 bg-gradient-to-b from-[#0f0f1a] to-[#1a1a2e] text-white relative overflow-hidden">

  {/* Glow de fondo */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,79,216,0.25),transparent_40%)]" />
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(0,229,255,0.2),transparent_40%)]" />

  <div className="relative z-10">

    <h2 className="text-4xl md:text-5xl font-bold mb-4">
      ¿Te unís al show?
    </h2>

    <p className="mb-10 text-purple-300 max-w-xl mx-auto">
      Confirmá tu lugar en el escenario antes del 5 de Julio y preparate para brillar como una verdadera idol ✨
    </p>
<motion.a
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  href="https://wa.me/5493410000000?text=¡Hola!%20Confirmamos%20asistencia%20al%20cumple%20de%20Valentina%20🎤"
  className="inline-flex items-center gap-3 bg-[#ff4fd8] text-white px-6 md:px-10 py-4 md:py-5 rounded-full text-base md:text-xl font-bold shadow-[0_0_30px_rgba(255,79,216,0.6)] hover:bg-[#ff6ae0] transition w-full md:w-auto justify-center whitespace-nowrap"
>
  <MessageCircleHeart size={24} className="shrink-0" />
  Confirmar asistencia
</motion.a>

  </div>
</section>

      {/* FOOTER */}
     <footer className="py-8 text-center text-purple-400 text-xs">
  Luces, música… y empieza el show 🎤✨
</footer>
    </main>
  );
}