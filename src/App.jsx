import React, { useState } from "react";

const nav = [
  { id: "about", label: "About" },
  { id: "films", label: "Films" },
  { id: "services", label: "Services" },
  { id: "testimonials", label: "Love" },
  { id: "contact", label: "Contact" },
];

function Section({ id, children, className = "" }) {
  return (
    <section id={id} className={`scroll-mt-24 py-16 md:py-24 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        <a href="#top" className="font-bold tracking-tight text-xl">
          <span className="text-gray-900">Fuming</span>
          <span className="text-red-600">Lyon</span>
          <span className="text-gray-900"> Network</span>
        </a>
        <nav className="hidden md:flex gap-8 text-sm">
          {nav.map((n) => (
            <a key={n.id} href={`#${n.id}`} className="text-gray-600 hover:text-gray-900">
              {n.label}
            </a>
          ))}
          <a href="#contact" className="rounded-full bg-red-600 px-4 py-2 text-white hover:bg-red-700 transition">Work with us</a>
        </nav>
        <button aria-label="Open menu" onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-2">
            {nav.map((n) => (
              <a key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)} className="py-2 text-gray-700">
                {n.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="mt-2 rounded-lg bg-red-600 px-4 py-2 text-white text-center">Work with us</a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-red-50 to-white" id="top">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
              Stories that enlighten, educate, <span className="text-red-600">and empower.</span>
            </h1>
            <p className="mt-6 text-gray-600 leading-relaxed">
              FumingLyon Network is a film & media brand creating Nollywood‑style movies, comedy skits, and behind‑the‑scenes content.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#films" className="rounded-full bg-gray-900 px-5 py-3 text-white hover:bg-black">Watch our work</a>
              <a href="#contact" className="rounded-full border border-gray-300 px-5 py-3 text-gray-800 hover:border-gray-400">Book the team</a>
            </div>
            <p className="mt-4 text-sm text-gray-500">Now streaming: <span className="font-medium">“Let the Poor Breathe”</span> on YouTube.</p>
          </div>
          <div>
            <div className="aspect-video w-full overflow-hidden rounded-2xl ring-1 ring-gray-200 shadow-sm">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Featured Film"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p className="mt-2 text-xs text-gray-500">Replace with your real trailer link.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function About() {
  return (
    <Section id="about">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Who we are</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Founded by Funmilayo Priscilla Fadele, FumingLyon Network is a creative house built on grit and purpose.
          </p>
          <ul className="mt-6 space-y-3 text-gray-700">
            <li>• Short films and web series with a social heartbeat</li>
            <li>• Comedy skits and BTS that show the real grind</li>
            <li>• Community for actors, directors, editors, MUAs & crew</li>
          </ul>
        </div>
        <div className="rounded-2xl overflow-hidden ring-1 ring-gray-200 shadow-sm">
          <img src="https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?q=80&w=1600&auto=format&fit=crop" alt="Set" className="h-full w-full object-cover" />
        </div>
      </div>
    </Section>
  );
}

const sampleFilms = [
  { title: "Let the Poor Breathe", tag: "Drama · 2025", thumb: "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?q=80&w=1400&auto=format&fit=crop", link: "#" },
  { title: "Not My Valentine", tag: "RomCom · 2025", thumb: "https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1400&auto=format&fit=crop", link: "#" },
  { title: "Melody of Redemption", tag: "Musical · 2026", thumb: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1400&auto=format&fit=crop", link: "#" },
];

function Films() {
  return (
    <Section id="films" className="bg-gray-50">
      <div className="flex items-end justify-between gap-4">
        <h2 className="text-3xl font-bold tracking-tight">Featured films</h2>
        <a href="#" className="text-sm text-red-600 hover:text-red-700">View all on YouTube →</a>
      </div>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sampleFilms.map((f) => (
          <a key={f.title} href={f.link} className="group rounded-2xl overflow-hidden ring-1 ring-gray-200 bg-white hover:shadow-md transition">
            <div className="aspect-video overflow-hidden">
              <img src={f.thumb} alt={f.title} className="h-full w-full object-cover group-hover:scale-105 transition" />
            </div>
            <div className="p-4">
              <div className="font-semibold">{f.title}</div>
              <div className="text-sm text-gray-500 mt-1">{f.tag}</div>
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}

const services = [
  { title: "Production", desc: "End‑to‑end short films, skits, BTS, and branded stories.", bullets: ["Script to screen", "Casting & crew", "Locations & permits"] },
  { title: "Post‑production", desc: "Editors, color, sound, and delivery for social & streaming.", bullets: ["DaVinci/Adobe", "Sound design", "Captions & reels"] },
  { title: "Consulting", desc: "Content strategy and creator coaching for brands and artists.", bullets: ["Content calendars", "YouTube growth", "Debate‑style hooks"] },
];

function Services() {
  return (
    <Section id="services">
      <h2 className="text-3xl font-bold tracking-tight">What we do</h2>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {services.map((s) => (
          <div key={s.title} className="rounded-2xl border bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold">{s.title}</h3>
            <p className="mt-2 text-gray-600">{s.desc}</p>
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              {s.bullets.map((b) => (
                <li key={b}>• {b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Testimonials() {
  return (
    <Section id="testimonials" className="bg-gray-50">
      <h2 className="text-3xl font-bold tracking-tight">What people say</h2>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {[1,2,3].map((i) => (
          <div key={i} className="rounded-2xl border bg-white p-6 shadow-sm">
            <p className="italic text-gray-700">“Professional, fast, and full of heart. The BTS alone taught our team so much.”</p>
            <div className="mt-4 text-sm text-gray-500">— Producer, Lagos</div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e) => { e.preventDefault(); setSent(true); };
  return (
    <Section id="contact">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Let’s build something legendary</h2>
          <p className="mt-4 text-gray-600">Tell us about your project, collab idea, or casting request. We reply within 48 hours.</p>
          <div className="mt-6 text-sm text-gray-700">
            <p>📍 Dublin · Lagos · Toronto</p>
            <p className="mt-1">📧 hello@fuminglyonnetwork.com</p>
            <p className="mt-1">▶️ YouTube: FumingLyon Network</p>
            <p className="mt-1">📸 IG: @fuminglyonnetwork</p>
          </div>
        </div>
        <form onSubmit={onSubmit} className="rounded-2xl border bg-white p-6 shadow-sm">
          <label className="block text-sm font-medium">Name</label>
          <input required className="mt-1 w-full rounded-lg border px-3 py-2" placeholder="Your name" />

          <label className="mt-4 block text-sm font-medium">Email</label>
          <input type="email" required className="mt-1 w-full rounded-lg border px-3 py-2" placeholder="you@example.com" />

          <label className="mt-4 block text-sm font-medium">Message</label>
          <textarea required className="mt-1 w-full rounded-lg border px-3 py-2 h-28" placeholder="Tell us about your project…" />

          <button className="mt-4 w-full rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700">Send</button>
          {sent && <p className="mt-3 text-sm text-green-700">Thanks! This demo form doesn’t send email here, but we’ll wire it to your inbox on deployment.</p>}
        </form>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500">© {new Date().getFullYear()} FumingLyon Network. All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <a href="#about" className="hover:text-gray-900">About</a>
          <a href="#services" className="hover:text-gray-900">Services</a>
          <a href="#contact" className="hover:text-gray-900">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <NavBar />
      <Hero />
      <About />
      <Films />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
