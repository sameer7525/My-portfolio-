import { useEffect, useState } from "react";

const icon = (name, color = "ffffff") => `https://cdn.simpleicons.org/${name}/${color}`;

const profile = {
  name: "Sameer",
  role: "Frontend Developer",
  email: "sameer752591@gmail.com",
  phone: "xxxxxxx640",
  location: "Delhi, India",
  image: "profileimg.webp",
  about:
    "I'm a creative and passionate Frontend Developer with a keen eye for detail and a love for building beautiful, functional and user-friendly web experiences. My journey in web development is driven by the desire to turn complex problems into simple, elegant solutions. I specialize in modern web technologies and I'm always eager to learn and adapt to the ever-evolving digital landscape.",
};

const socials = [
  { name: "x", label: "X", href: "#" },
  { name: "github", label: "GitHub", href: "https://github.com/sameer7525" },
  // { name: "linkedin", label: "LinkedIn", href: "#" },
];

const skills = [
  { name: "HTML5", slug: "html5" },
  { name: "CSS3", slug: "css" },
  { name: "JavaScript", slug: "javascript" },
  { name: "React", slug: "react" },
  { name: "Git & GitHub", slug: "git" },
  { name: "C++", slug: "cplusplus" },
  { name: "Tailwindcss", slug: "tailwindcss"},
  { name: "GSAP", slug:"greensock"},
  { name: "Framer Motion", slug:"framer"}
];

const education = [
  {
    year: "2025",
    title: "Frontend Web Developer",
    text: "Started my journey in web development. Built responsive websites and learned modern frontend frameworks.",
  },
  {
    year: "2025 – 2028",
    title: "Graduate in Computer Science",
    place: "Deshbandhu College (University of Delhi)",
    text: "Focused on software engineering, and web technologies.",
  },
];

const projects = [
  {
    title: "To-Do App",
    text: "A fully responsive to-do app.",
    image: "PASTE_TODO_PROJECT_IMAGE_LINK_HERE",
    github: "https://github.com/sameer7525/To-Do-List-App",
    live: "https://sameer7525.github.io/To-Do-List-App/",
    tags: ["HTML", "Tailwind CSS", "JavaScript"],
  },
  {
    title: "Portfolio",
    text: "A fully responsive portfolio.",
    image: "PASTE_PORTFOLIO_PROJECT_IMAGE_LINK_HERE",
    github: "https://github.com/sameer7525/My-portfolio",
    live: "https://sameer7525.github.io/My-portfolio/",
    tags: ["HTML", "CSS"],
  },
  {
    title: "Password Generator",
    text: "Secure & responsive password generator.",
    image: "PASTE_PASSWORD_GENERATOR_IMAGE_LINK_HERE",
    github: "https://github.com/sameer7525/Password-generator",
    live: "https://password-generator-rosy-nine.vercel.app/",
    tags: ["HTML", "Tailwind CSS", "React"],
  },
  {
    title: "To-Do App",
    text: "A fully responsive to-do app.",
    image: "PASTE_ANOTHER_PROJECT_IMAGE_LINK_HERE",
    github: "https://github.com/sameer7525",
    live: "#",
    tags: ["HTML", "Tailwind CSS", "JavaScript"],
  },
];

const links = [
  ["About", "about"],
  ["Skills", "skills"],
  ["Services", "services"],
  ["Projects", "projects"],
  ["Education", "education"],
  ["Contact", "contact"],
];

const services = [
  {
    title: "Business websites",
    text: "Fast, mobile-friendly websites for shops, startups and personal brands.",
    icon: "googlechrome",
  },
  {
    title: "Landing pages",
    text: "Clean single-page designs built to turn visitors into enquiries.",
    icon: "tailwindcss",
  },
  {
    title: "React web apps",
    text: "Interactive dashboards, tools and apps built with React.",
    icon: "react",
  },
  {
    title: "Fixes and redesigns",
    text: "Make an existing site faster, responsive and better looking.",
    icon: "git",
  },
];

const hire = [
  {
    title: "Performance Focused",
    text: "I optimize every line of code for speed and efficiency, delivering fast user experiences.",
  },
  {
    title: "Clean & Reaponsive",
    text: "I write clean , well-structured and user-friendly interfaces that deliver a consistent experience",
  },
  {
    title: "Smooth Animations",
    text: "Create smooth and engaging animation that enhance user experience and bring interfaces to life.",
  }
]


const whatsapp = "https://wa.me/919170450640?text=Hi%20Sameer%2C%20I%20saw%20your%20portfolio";

function SectionTitle({ children }) {
  return (
    <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
      {children}
      <span className="mt-3 block h-1 w-14 rounded-full bg-gradient-to-r from-violet-500 to-amber-300" />
    </h2>
  );
}

function ContactItem({ label, value, href }) {
  return (
    <a
      href={href}
      className="group rounded-xl border border-white/10 bg-white/5 px-4 py-3 transition hover:border-violet-400/60"
    >
      <p className="text-xs text-slate-400">{label}</p>
      <p className="mt-0.5 break-all text-sm font-medium text-slate-100 group-hover:text-violet-300">{value}</p>
    </a>
  );
}

export default function App() {
  const [active, setActive] = useState("about");
  const [form, setForm] = useState({ name: "", message: "" });

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    links.forEach(([, id]) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <div className="min-h-screen scroll-smooth bg-[#0d0f1a] font-sans text-slate-300 antialiased selection:bg-violet-500/40">
      {/* soft background glow */}
      <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-violet-600/20 blur-[120px]" />
        <div className="absolute -right-32 top-1/3 h-96 w-96 rounded-full bg-amber-400/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-10 px-5 py-10 lg:grid-cols-[320px_1fr] lg:gap-14 lg:py-16">
        {/* Profile sidebar */}
        <aside className="lg:sticky lg:top-10 lg:h-fit">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-center backdrop-blur">
            <div className="mx-auto h-40 w-40 rounded-full bg-gradient-to-br from-violet-500 to-amber-300 p-1">
              <img
                src={profile.image}
                alt={`${profile.name} portrait`}
                className="h-full w-full rounded-full bg-[#0d0f1a] object-cover"
              />
            </div>
            <h1 className="mt-5 font-display text-3xl font-bold text-white">{profile.name}</h1>
            <p className="mt-1 text-amber-300">{profile.role}</p>
            <p className="mx-auto mt-4 flex w-fit items-center gap-2 rounded-full bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Available for freelance work
            </p>
            <div className="mt-5 grid grid-cols-2 gap-3">
              <a
                href="#contact"
                className="rounded-lg bg-amber-300 px-4 py-2.5 text-sm font-semibold text-[#0d0f1a] transition hover:bg-amber-200"
              >
                Hire me
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/15 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-white/10"
              >
                View Resume
              </a>
            </div>

            <div className="mt-6 grid gap-3 text-left">
              <ContactItem label="Email" value={profile.email} href={`mailto:${profile.email}`} />
              <ContactItem label="Phone" value={profile.phone} href={`tel:${profile.phone}`} />
              <ContactItem label="Location" value={profile.location} href="#" />
            </div>

            <div className="mt-6 flex justify-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:-translate-y-0.5 hover:border-violet-400/60"
                >
                  <img src={icon(s.name)} alt="" className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </aside>

        {/* Main column */}
        <main className="min-w-0">
          <nav className="sticky top-3 z-20 mb-14 flex gap-1 overflow-x-auto rounded-full border border-white/10 bg-[#0d0f1a]/80 p-1.5 backdrop-blur">
            {links.map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition ${
                  active === id ? "bg-violet-500 text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                {label}
              </a>
            ))}
          </nav>

          <section id="about" className="scroll-mt-24">
            <p className="mb-8 font-display text-3xl font-bold leading-tight text-white sm:text-5xl">
              {/* I build fast, responsive websites that help small businesses get noticed online. */}
              Turning ideas into interactive, responsive, and meaningful web experiences.
            </p>
            <SectionTitle>About Me</SectionTitle>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{profile.about}</p>
          </section>

          <section id="skills" className="mt-24 scroll-mt-24">
            <SectionTitle>My Skills</SectionTitle>
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {skills.map((s) => (
                <div
                  key={s.name}
                  className="flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-6 transition hover:border-violet-400/60 hover:bg-white/[0.07]"
                >
                  <img src={icon(s.slug)} alt="" className="h-10 w-10" />
                  <p className="font-display font-medium text-white">{s.name}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="education" className="mt-24 scroll-mt-24">
            <SectionTitle>Education</SectionTitle>
            <ol className="relative mt-8 space-y-8 border-l border-white/10 pl-8">
              {education.map((e) => (
                <li key={e.title} className="relative">
                  <span className="absolute -left-[2.45rem] top-1.5 h-3 w-3 rounded-full bg-amber-300 ring-4 ring-[#0d0f1a]" />
                  <p className="text-sm font-medium text-amber-300">{e.year}</p>
                  <h3 className="mt-1 font-display text-xl font-bold text-white">{e.title}</h3>
                  <p className="text-sm text-violet-300">{e.place}</p>
                  <p className="mt-2 max-w-xl text-slate-400">{e.text}</p>
                </li>
              ))}
            </ol>
          </section>

          <section id="services" className="mt-24 scroll-mt-24">
            <SectionTitle>What I Can Build For You</SectionTitle>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {services.map((sv) => (
                <div
                  key={sv.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition hover:border-violet-400/60 hover:bg-white/[0.1]"
                >
                  <img src={icon(sv.icon, "c4b5fd")} alt="" className="h-8 w-8" />
                  <h3 className="mt-4 font-display text-lg font-bold text-white">{sv.title}</h3>
                  <p className="mt-1 text-slate-400">{sv.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="projects" className="mt-24 scroll-mt-24">
            <SectionTitle>Projects</SectionTitle>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {projects.map((p, i) => (
                <article
                  key={i}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] transition hover:border-violet-400/60"
                >
                  <div className="aspect-video overflow-hidden bg-slate-800">
                    <img
                      src={p.image}
                      alt={`${p.title} preview`}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-display text-xl font-bold text-white">{p.title}</h3>
                    <p className="mt-1 text-slate-400">{p.text}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span key={t} className="rounded-full bg-violet-500/15 px-3 py-1 text-xs text-violet-200">
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="mt-auto flex gap-3 pt-6">
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1 rounded-full border border-white/15 px-3 py-1 text-xs font-medium text-white transition hover:bg-white/10"
                      >
                        <img src={icon("github")} alt="" className="h-4 w-4" />
                        GitHub
                      </a>
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1 rounded-full border border-white/15 px-3 py-1 text-xs font-medium text-white transition hover:bg-white/10"
                      >
                        Live Preview
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="hireme" className="mt-24 scroll-mt-24">
            <SectionTitle>Why Hire Me?</SectionTitle>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {hire.map((hm) => (
                <div
                  key={hm.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition hover:border-violet-400/60 hover:bg-white/[0.1]"
                >
                  <h3 className="mt-4 font-display text-lg font-bold text-white">{hm.title}</h3>
                  <p className="mt-1 text-slate-400">{hm.text}</p>
                </div>
              ))}
            </div>

          </section>

          <section id="contact" className="mt-24 scroll-mt-24">
            <SectionTitle>Let's Work Together</SectionTitle>
            <p className="mt-6 max-w-xl text-slate-400">
              Tell me what you need and I'll reply within 24 hours with ideas and a quote.
            </p>
            <div className="mt-8 grid gap-6 rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-8 md:grid-cols-[1fr_auto]">
              <div className="grid gap-4">
                <input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  className="rounded-xl border border-white/10 bg-[#0d0f1a] px-4 py-3 text-white placeholder:text-slate-500 focus:border-violet-400 focus:outline-none"
                />
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={4}
                  placeholder="What do you want built?"
                  className="rounded-xl border border-white/10 bg-[#0d0f1a] px-4 py-3 text-white placeholder:text-slate-500 focus:border-violet-400 focus:outline-none"
                />
                <a
                  href={`mailto:${profile.email}?subject=${encodeURIComponent(
                    "Project enquiry from " + (form.name || "your portfolio")
                  )}&body=${encodeURIComponent(form.message)}`}
                  className="rounded-xl bg-amber-300 px-6 py-3 text-center font-semibold text-[#0d0f1a] transition hover:bg-amber-200"
                >
                  Send message
                </a>
              </div>
              <div className="flex flex-col justify-center gap-3 md:w-56">
                <p className="text-sm text-slate-400">Prefer chat?</p>
                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl border border-emerald-400/40 px-5 py-3 font-medium text-emerald-300 transition hover:bg-emerald-400/10"
                >
                  <img src={icon("whatsapp", "6ee7b7")} alt="" className="h-5 w-5" />
                  WhatsApp me
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-center text-sm text-slate-400 hover:text-white"
                >
                  {profile.email}
                </a>
              </div>
            </div>
          </section>

          <footer className="mt-24 border-t border-white/10 pt-6 text-sm text-slate-500">
            © {new Date().getFullYear()} {profile.name}. Built with React and Tailwind CSS.
          </footer>
        </main>
      </div>
    </div>
  );
}



