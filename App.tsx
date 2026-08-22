import { useState } from "react";
import iconLogo from "./assets/754d5a1d5a205fed-otochain_logo.png";
import lightLogo from "./assets/d86a143defe8278f-otochain_logo_light_text.png";
import darkLogo from "./assets/0dc5bb489ffc0fe5-otochain_logo_dark_text.png";
import { Mic, FileText, Layers, ArrowRight, Github, ExternalLink, Menu, X } from "lucide-react";

const content = {
  ja: {
    nav: { works: "Works", about: "About", contact: "Contact" },
    hero: {
      tagline: "音声が連鎖して資料になる",
      desc: "OtoChainは、音声会話から自動で構造化されたドキュメントを生成するLangGraphベースの3エージェント・チェーンアプリケーション。会話の文脈を保持しながら、自然な対話からビジネスで使える資料までを一気通貫で作成します。",
      demo: "Demoを見る",
      github: "GitHub",
      builtWith: "Built with LangGraph & Next.js",
    },
    worksTitle: "3つのエージェントが連鎖する",
    worksSub: "音声から資料まで、途切れないワークフローを一つの体験に。",
    cards: [
      {
        num: "01",
        title: "音声チャット",
        en: "Voice Chat",
        desc: "Web Speech APIとOpenAI Realtimeを活用した自然な音声対話。話すだけで思考を整理し、コンテキストを蓄積。",
        tech: ["Web Speech API", "OpenAI Realtime", "Streaming"],
        icon: "mic",
      },
      {
        num: "02",
        title: "文字起こし",
        en: "Transcription",
        desc: "高精度な文字起こしと話者分離。ノイズ除去、フィラー除去、タイムスタンプ付きで構造化。",
        tech: ["Whisper", "Diarization", "Post-processing"],
        icon: "transcript",
      },
      {
        num: "03",
        title: "まとめ資料作成",
        en: "Document Gen",
        desc: "LangGraphが文脈を理解し、要約・議事録・企画書まで自動生成。Markdown / Notion / PDFで出力可能。",
        tech: ["LangGraph", "GPT-4o", "Structured Output"],
        icon: "doc",
      },
    ],
    archTitle: "Architecture",
    archSub: "音声入力から最終ドキュメントまでの状態遷移をLangGraphで管理",
    arch: {
      voice: "Voice Input",
      voiceJp: "音声入力",
      trans: "Transcription",
      transJp: "文字起こし & 構造化",
      doc: "Document",
      docJp: "資料生成",
    },
    techTitle: "Tech Stack",
    techSub: "モダンで拡張性のあるスタックで構築",
    aboutTitle: "About",
    aboutName: "大畑 晃一 / Koichi Ohata",
    aboutRole: "AI Developer / LangGraph Specialist",
    aboutLoc: "大阪府和泉市出身",
    aboutDesc: "AIとプロダクトの交差点で、思考を加速させるツールを作っています。OtoChainは「話すだけで仕事が進む」世界を目指した実験的プロダクト。LangChain, LangGraph, Next.jsを中心に、実用的なAIアプリケーションの開発に取り組んでいます。",
    contactTitle: "話してみませんか？",
    contactSub: "プロジェクトのご相談、共同開発、採用のお話などお気軽に。",
    footer: "© 2025 Koichi Ohata. Built in Izumi, Osaka. Deployed on Vercel.",
  },
  en: {
    nav: { works: "Works", about: "About", contact: "Contact" },
    hero: {
      tagline: "Voice chains into documents.",
      desc: "OtoChain is a LangGraph-powered 3-agent chain that transforms spoken conversations into structured, business-ready documents — preserving context from natural dialogue to final deliverable in one seamless flow.",
      demo: "View Demo",
      github: "GitHub",
      builtWith: "Built with LangGraph & Next.js",
    },
    worksTitle: "Three agents, one chain",
    worksSub: "From voice to document — an uninterrupted workflow in a single experience.",
    cards: [
      {
        num: "01",
        title: "Voice Chat",
        en: "音声チャット",
        desc: "Natural voice interaction with Web Speech API and OpenAI Realtime. Just talk to organize thoughts and build context.",
        tech: ["Web Speech API", "OpenAI Realtime", "Streaming"],
        icon: "mic",
      },
      {
        num: "02",
        title: "Transcription",
        en: "文字起こし",
        desc: "High-accuracy transcription with speaker diarization. Noise removal, filler cleaning, and timestamped structuring.",
        tech: ["Whisper", "Diarization", "Post-processing"],
        icon: "transcript",
      },
      {
        num: "03",
        title: "Document Generation",
        en: "まとめ資料作成",
        desc: "LangGraph understands context and auto-generates summaries, minutes, and proposals. Export to Markdown / Notion / PDF.",
        tech: ["LangGraph", "GPT-4o", "Structured Output"],
        icon: "doc",
      },
    ],
    archTitle: "Architecture",
    archSub: "State transitions from voice to final doc managed by LangGraph",
    arch: {
      voice: "Voice Input",
      voiceJp: "Audio",
      trans: "Transcription",
      transJp: "Structure",
      doc: "Document",
      docJp: "Generate",
    },
    techTitle: "Tech Stack",
    techSub: "Built with a modern, extensible stack",
    aboutTitle: "About",
    aboutName: "Koichi Ohata / 大畑 晃一",
    aboutRole: "AI Developer / LangGraph Specialist",
    aboutLoc: "From Izumi, Osaka",
    aboutDesc: "Building tools that accelerate thinking at the intersection of AI and product. OtoChain is an experimental product aiming for a world where work progresses just by talking. Focused on practical AI apps with LangChain, LangGraph, and Next.js.",
    contactTitle: "Let's talk?",
    contactSub: "Open for project inquiries, collaborations, and opportunities.",
    footer: "© 2025 Koichi Ohata. Built in Izumi, Osaka. Deployed on Vercel.",
  },
};

export default function App() {
  const [lang, setLang] = useState<"ja" | "en">("ja");
  const [mobileOpen, setMobileOpen] = useState(false);
  const t = content[lang];

  return (
    <div className="min-h-screen bg-white text-zinc-900 antialiased selection:bg-[#FF7A00]/20">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600&family=Geist+Mono:wght@400;500&family=Noto+Sans+JP:wght@300;400;500;700&display=swap');
        *{font-family: 'Geist', 'Noto Sans JP', sans-serif;}
        .mono{font-family: 'Geist Mono', monospace;}
      `}</style>

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-zinc-100">
        <div className="mx-auto max-w-[1200px] px-6 md:px-8 h-[64px] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={iconLogo} alt="OtoChain icon" className="w-8 h-8 rounded-[9px] object-contain bg-white" />
            <span className="text-[14px] font-semibold tracking-tight">KOICHI OHATA</span>
            <span className="hidden md:inline h-3 w-px bg-zinc-200 ml-1" />
            <span className="hidden md:inline text-[11px] mono text-zinc-400 tracking-widest ml-2">PORTFOLIO 2025</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#works" className="text-[13px] font-medium text-zinc-600 hover:text-black transition">{t.nav.works}</a>
            <a href="#about" className="text-[13px] font-medium text-zinc-600 hover:text-black transition">{t.nav.about}</a>
            <a href="#contact" className="text-[13px] font-medium text-zinc-600 hover:text-black transition">{t.nav.contact}</a>
            <div className="flex items-center gap-1 ml-2 p-1 rounded-full bg-zinc-100">
              <button
                onClick={() => setLang("ja")}
                className={`px-3 py-1 rounded-full text-[11px] mono font-medium transition ${lang === "ja" ? "bg-black text-white shadow" : "text-zinc-500"}`}
              >
                JP
              </button>
              <button
                onClick={() => setLang("en")}
                className={`px-3 py-1 rounded-full text-[11px] mono font-medium transition ${lang === "en" ? "bg-black text-white shadow" : "text-zinc-500"}`}
              >
                EN
              </button>
            </div>
          </nav>

          <button className="md:hidden p-2 -mr-2" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {mobileOpen && (
          <div className="md:hidden border-t border-zinc-100 px-6 py-6 flex flex-col gap-4 bg-white">
            <a href="#works" onClick={() => setMobileOpen(false)} className="text-[14px] font-medium">{t.nav.works}</a>
            <a href="#about" onClick={() => setMobileOpen(false)} className="text-[14px] font-medium">{t.nav.about}</a>
            <a href="#contact" onClick={() => setMobileOpen(false)} className="text-[14px] font-medium">{t.nav.contact}</a>
            <div className="flex gap-2 pt-2">
              <button onClick={() => { setLang("ja"); setMobileOpen(false); }} className={`px-4 py-2 rounded-full text-[12px] border ${lang==="ja"?"bg-black text-white border-black":"border-zinc-200"}`}>日本語</button>
              <button onClick={() => { setLang("en"); setMobileOpen(false); }} className={`px-4 py-2 rounded-full text-[12px] border ${lang==="en"?"bg-black text-white border-black":"border-zinc-200"}`}>English</button>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-gradient-to-b from-[#FF7A00]/[0.08] to-transparent rounded-full blur-[60px]" />
        </div>

        <div className="relative mx-auto max-w-[1200px] px-6 md:px-8 pt-16 md:pt-24 pb-16 md:pb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 text-white text-[11px] mono tracking-widest mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A00] animate-pulse" />
            {t.hero.builtWith}
          </div>

          <div className="max-w-[720px]">
            <div className="mb-8">
              <img src={darkLogo} alt="OtoChain" className="h-[48px] md:h-[56px] w-auto object-contain" />
            </div>
            <h1 className="text-[42px] md:text-[64px] font-[700] tracking-[-0.03em] leading-[0.95] mb-6">
              {t.hero.tagline}
            </h1>
            <p className="text-[16px] md:text-[17px] leading-[1.8] text-zinc-600 font-light max-w-[560px]">
              {t.hero.desc}
            </p>

            <div className="flex flex-wrap gap-3 mt-10">
              <a href="#works" className="inline-flex items-center gap-2 px-6 h-[44px] rounded-full bg-black text-white text-[14px] font-medium hover:bg-zinc-800 transition">
                {t.hero.demo} <ArrowRight size={16} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener" className="inline-flex items-center gap-2 px-6 h-[44px] rounded-full border border-zinc-200 bg-white text-[14px] font-medium hover:border-zinc-900 transition">
                <Github size={16} /> {t.hero.github}
              </a>
            </div>

            <div className="mt-12 flex items-center gap-4 text-[11px] mono text-zinc-400">
              <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-emerald-500" /> All systems operational</span>
              <span>•</span>
              <span>v0.3.1 — Izumi Lab</span>
            </div>
          </div>

          {/* Hero visual – architecture mini */}
          <div className="mt-16 md:mt-20 grid md:grid-cols-[1.15fr_0.85fr] gap-6 items-start">
            <div className="rounded-[24px] border border-zinc-100 bg-zinc-50/80 p-6 md:p-8 shadow-[0_1px_0_0_rgba(0,0,0,0.04),0_20px_60px_-24px_rgba(0,0,0,0.12)]">
              <div className="flex items-center justify-between mb-8">
                <span className="text-[11px] mono tracking-widest text-zinc-500">OTOCHAIN FLOW</span>
                <span className="text-[11px] mono px-2 py-1 rounded-full bg-[#FF7A00] text-white">LIVE CHAIN</span>
              </div>
              <div className="space-y-3">
                {[
                  { k: "voice", label: "音声入力", time: "00:03", status: "listening" },
                  { k: "transcribe", label: "文字起こし中...", time: "00:12", status: "processing" },
                  { k: "doc", label: "議事録を生成", time: "00:27", status: "done" },
                ].map((row, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-[14px] bg-white border border-zinc-100">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${i===0?"bg-black text-white": i===1?"bg-[#FF7A00] text-white":"bg-zinc-900 text-white"}`}>
                      {i===0 ? <Mic size={14} /> : i===1 ? <FileText size={14} /> : <Layers size={14} />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="h-2 w-24 bg-zinc-900 rounded-full mb-2" style={{width: `${60 + i*20}%`}} />
                      <div className="text-[12px] text-zinc-500 mono">{row.label} • {row.time}</div>
                    </div>
                    <div className={`text-[10px] mono px-2 py-1 rounded-full ${row.status==="done"?"bg-emerald-50 text-emerald-700 border border-emerald-200": row.status==="processing"?"bg-orange-50 text-orange-700 border border-orange-200":"bg-zinc-100 text-zinc-600"}`}>
                      {row.status.toUpperCase()}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[24px] border border-zinc-100 bg-black text-white p-7 md:p-8 relative overflow-hidden">
              <img src={lightLogo} alt="" className="absolute -right-8 -top-8 w-[180px] opacity-[0.06] rotate-12" />
              <div className="relative">
                <div className="text-[11px] mono tracking-widest text-white/50 mb-6">PROMPT → OUTPUT</div>
                <div className="space-y-4 text-[13px] leading-relaxed font-light">
                  <div className="text-white/60 mono text-[11px]">USER SAID</div>
                  <div className="text-[15px]">「来週のMTGまでに競合調査と企画案まとめて」</div>
                  <div className="h-px bg-white/10 my-4" />
                  <div className="text-white/60 mono text-[11px]">OTOCHAIN GENERATED</div>
                  <div className="space-y-2">
                    <div className="flex gap-2"><span className="text-[#FF7A00]">—</span> 競合3社の機能比較表</div>
                    <div className="flex gap-2"><span className="text-[#FF7A00]">—</span> 企画案ドラフト (3案)</div>
                    <div className="flex gap-2"><span className="text-[#FF7A00]">—</span> 次回アジェンダ & TODO</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Works */}
      <section id="works" className="border-t border-zinc-100 bg-white">
        <div className="mx-auto max-w-[1200px] px-6 md:px-8 py-20 md:py-28">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="text-[11px] mono tracking-[0.2em] text-zinc-400 mb-3">WORKS / 01</div>
              <h2 className="text-[32px] md:text-[40px] font-semibold tracking-tight leading-[0.95]">{t.worksTitle}</h2>
            </div>
            <p className="text-[15px] text-zinc-500 max-w-[380px] leading-relaxed">{t.worksSub}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 md:gap-6">
            {t.cards.map((card, idx) => (
              <div key={idx} className="group relative rounded-[20px] border border-zinc-200 bg-white p-7 md:p-8 hover:border-zinc-900 hover:shadow-[0_20px_60px_-20px_rgba(0,0,0,0.15)] transition-all duration-300">
                <div className="flex items-start justify-between mb-8">
                  <div className={`w-11 h-11 rounded-[12px] flex items-center justify-center ${idx===0?"bg-black text-white": idx===1?"bg-[#FF7A00] text-white":"bg-zinc-100 text-zinc-900"}`}>
                    {card.icon==="mic" ? <Mic size={18} /> : card.icon==="transcript" ? <FileText size={18} /> : <Layers size={18} />}
                  </div>
                  <span className="mono text-[12px] tracking-widest text-zinc-400">{card.num}</span>
                </div>
                <h3 className="text-[20px] font-semibold tracking-tight mb-1">{card.title}</h3>
                <div className="text-[11px] mono text-zinc-400 tracking-widest mb-4">{card.en}</div>
                <p className="text-[14px] leading-[1.7] text-zinc-600 mb-6 min-h-[66px]">{card.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {card.tech.map((tech) => (
                    <span key={tech} className="px-2.5 py-1 rounded-full bg-zinc-50 border border-zinc-200 text-[11px] mono text-zinc-600">{tech}</span>
                  ))}
                </div>
                <div className="absolute bottom-7 right-7 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center"><ArrowRight size={14} /></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="border-y border-zinc-100 bg-zinc-50/60">
        <div className="mx-auto max-w-[1200px] px-6 md:px-8 py-20 md:py-24">
          <div className="text-center max-w-[640px] mx-auto mb-14">
            <div className="text-[11px] mono tracking-[0.2em] text-zinc-400 mb-3">{t.archTitle.toUpperCase()}</div>
            <h2 className="text-[28px] md:text-[36px] font-semibold tracking-tight mb-3">{t.archSub}</h2>
          </div>

          <div className="relative rounded-[28px] border border-zinc-200 bg-white p-6 md:p-10 shadow-[0_1px_0_0_rgba(0,0,0,0.03),0_30px_80px_-30px_rgba(0,0,0,0.12)] overflow-x-auto">
            <div className="min-w-[720px] md:min-w-0">
              {/* Flow line */}
              <div className="relative flex items-center justify-between gap-4">
                <div className="absolute top-[44px] left-[60px] right-[60px] h-px bg-gradient-to-r from-zinc-900 via-[#FF7A00] to-zinc-900 opacity-20 hidden md:block" />
                <div className="absolute top-[44px] left-[60px] right-[60px] h-px bg-[length:8px_1px] bg-repeat-x bg-[linear-gradient(to_right,black_50%,transparent_50%)] opacity-10 hidden md:block" />

                {[
                  { icon: Mic, label: t.arch.voice, jp: t.arch.voiceJp, color: "bg-black", desc: "Web Speech API\nReal-time streaming" },
                  { icon: FileText, label: t.arch.trans, jp: t.arch.transJp, color: "bg-[#FF7A00]", desc: "Whisper + Diarization\nLangGraph state" },
                  { icon: Layers, label: t.arch.doc, jp: t.arch.docJp, color: "bg-zinc-900", desc: "GPT-4o Structured\nMD / Notion / PDF" },
                ].map((node, i) => (
                  <div key={i} className="relative flex-1 flex flex-col items-center text-center">
                    <div className={`w-[88px] h-[88px] rounded-[20px] ${node.color} text-white flex items-center justify-center shadow-[0_10px_30px_-10px_rgba(0,0,0,0.4)] relative z-10`}>
                      <node.icon size={28} />
                      {i < 2 && (
                        <div className="absolute -right-[26px] top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white border border-zinc-200 flex items-center justify-center md:hidden">
                          <ArrowRight size={12} />
                        </div>
                      )}
                    </div>
                    <div className="hidden md:flex absolute top-1/2 -right-6 -translate-y-1/2 w-12 h-12 items-center justify-center z-20">
                      <div className="w-7 h-7 rounded-full bg-white border border-zinc-200 flex items-center justify-center shadow-sm">
                        <ArrowRight size={12} className="text-zinc-700" />
                      </div>
                    </div>
                    <div className="mt-5">
                      <div className="text-[14px] font-semibold tracking-tight">{node.label}</div>
                      <div className="text-[11px] mono text-zinc-400 mt-1 tracking-widest">{node.jp}</div>
                      <div className="mt-3 text-[11px] mono leading-relaxed text-zinc-500 whitespace-pre text-center">{node.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 grid grid-cols-3 gap-3">
                <div className="rounded-[12px] bg-zinc-50 border border-zinc-100 p-3 text-[11px] mono text-zinc-500">state: <span className="text-zinc-900">listening</span> → transcript</div>
                <div className="rounded-[12px] bg-orange-50 border border-orange-100 p-3 text-[11px] mono text-zinc-600">state: <span className="text-[#FF7A00]">structuring</span> • checkpoint</div>
                <div className="rounded-[12px] bg-zinc-900 text-white p-3 text-[11px] mono">state: <span className="text-white">final_output</span> → export</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1200px] px-6 md:px-8 py-16 md:py-20">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <div className="text-[11px] mono tracking-[0.2em] text-zinc-400 mb-2">{t.techTitle.toUpperCase()}</div>
              <p className="text-[13px] text-zinc-500">{t.techSub}</p>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {[
                { name: "Next.js 14", sub: "App Router" },
                { name: "LangChain", sub: "Orchestration" },
                { name: "LangGraph", sub: "State Machine", accent: true },
                { name: "OpenAI", sub: "GPT-4o / Whisper" },
                { name: "Vercel", sub: "Edge Deploy" },
                { name: "Tailwind", sub: "Styling" },
              ].map((s) => (
                <div key={s.name} className={`inline-flex items-center gap-2.5 px-4 h-[40px] rounded-full border text-[13px] ${s.accent ? "bg-[#FF7A00] border-[#FF7A00] text-white" : "bg-white border-zinc-200"}`}>
                  <span className="font-medium">{s.name}</span>
                  <span className={`text-[10px] mono px-1.5 py-0.5 rounded-full ${s.accent ? "bg-white/20 text-white" : "bg-zinc-100 text-zinc-500"}`}>{s.sub}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-zinc-100 bg-zinc-50/40">
        <div className="mx-auto max-w-[1200px] px-6 md:px-8 py-20 md:py-28 grid md:grid-cols-[0.9fr_1.1fr] gap-12 md:gap-20 items-start">
          <div>
            <div className="text-[11px] mono tracking-[0.2em] text-zinc-400 mb-4">ABOUT / 02</div>
            <div className="flex items-center gap-4 mb-6">
              <img src={iconLogo} alt="KO" className="w-14 h-14 rounded-[16px] bg-white border border-zinc-100 shadow-sm object-contain" />
              <div>
                <div className="text-[18px] font-semibold tracking-tight">{t.aboutName}</div>
                <div className="text-[12px] mono text-zinc-500 mt-0.5">{t.aboutLoc}</div>
              </div>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black text-white text-[11px] mono tracking-widest">
              {t.aboutRole}
            </div>
          </div>
          <div>
            <p className="text-[18px] md:text-[20px] leading-[1.7] tracking-[-0.01em] font-light text-zinc-800 mb-8">
              {t.aboutDesc}
            </p>
            <div className="grid grid-cols-2 gap-6 border-t border-zinc-200 pt-8">
              <div>
                <div className="text-[11px] mono tracking-widest text-zinc-400 mb-2">LOCATION</div>
                <div className="text-[14px] font-medium">Izumi, Osaka, JP — 34.48°N</div>
              </div>
              <div>
                <div className="text-[11px] mono tracking-widest text-zinc-400 mb-2">FOCUS</div>
                <div className="text-[14px] font-medium">Voice UI / Agent Systems / DX Tools</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <img src={lightLogo} alt="" className="absolute right-[-80px] top-[-40px] w-[520px] opacity-[0.04]" />
          <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_20%_0%,rgba(255,122,0,0.15),transparent)]" />
        </div>
        <div className="relative mx-auto max-w-[1200px] px-6 md:px-8 py-20 md:py-28">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
            <div className="max-w-[520px]">
              <div className="text-[11px] mono tracking-[0.2em] text-white/40 mb-4">CONTACT / 03</div>
              <h2 className="text-[36px] md:text-[52px] font-semibold tracking-[-0.03em] leading-[0.9] mb-4">{t.contactTitle}</h2>
              <p className="text-[15px] leading-relaxed text-white/60 font-light">{t.contactSub}</p>
            </div>
            <div className="flex flex-col gap-3 w-full md:w-auto">
              <a href="mailto:hello@otochain.dev" className="group inline-flex items-center justify-between gap-8 px-6 h-[56px] rounded-full bg-white text-black text-[14px] font-medium hover:bg-zinc-100 transition w-full md:w-[320px]">
                <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#FF7A00]" /> hello@otochain.dev</span>
                <ExternalLink size={16} className="group-hover:translate-x-0.5 transition" />
              </a>
              <div className="flex gap-3">
                <a href="https://github.com" target="_blank" rel="noopener" className="flex-1 md:w-[156px] inline-flex items-center justify-center gap-2 h-[44px] rounded-full border border-white/15 text-[13px] hover:bg-white/10 transition">
                  <Github size={16} /> GitHub
                </a>
                <a href="#" className="flex-1 md:w-[156px] inline-flex items-center justify-center gap-2 h-[44px] rounded-full border border-white/15 text-[13px] hover:bg-white/10 transition">
                  X / Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10">
        <div className="mx-auto max-w-[1200px] px-6 md:px-8 h-[64px] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={iconLogo} alt="OtoChain" className="w-6 h-6 rounded-[6px] object-contain bg-white" />
            <span className="text-[11px] mono tracking-widest text-white/50">{t.footer}</span>
          </div>
          <div className="hidden md:flex items-center gap-2 text-[11px] mono text-white/30">
            <span>Built with</span>
            <span className="px-2 py-1 rounded-full bg-white/10 text-white/60">Next.js</span>
            <span className="px-2 py-1 rounded-full bg-[#FF7A00]/20 text-[#FF7A00]">LangGraph</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
