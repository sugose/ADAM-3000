import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Cpu, Check, ArrowRight, RadioTower, GitBranch, Sparkles } from "lucide-react";

const roadmap = [
  ["RIE 0.1","OBSERVE","Physical signal becomes reproducible digital evidence."],
  ["RIE 0.5","UNDERSTAND","Evidence becomes structured marine meaning."],
  ["RIE 1.0","EXPLAIN","Meaning becomes a defensible, traceable claim."],
  ["RIE 2.0","GENERALIZE","The architecture moves beyond one protocol and one domain."],
  ["RIE 3.0","CORRELATE","Independent observations become coherent models of reality."],
  ["RIE 4.0","QUESTION","The system tests interpretations rather than merely producing them."],
  ["RIE ∞","TRANSCEND","RIE negotiates between possible realities."],
  ["RIE Ω","GENESIS","Not a god. Infrastructure for creating entities capable of creating gods."],
];

function Tag({children}) { return <span className="tag">{children}</span>; }

export default function App(){
 const [tick,setTick]=useState(0);
 const telemetry=useMemo(()=>["PHYSICAL EVENT / OBSERVED","PGN 128267 / INTERPRETED","PROVENANCE GRAPH / INTACT","UNIVERSE / PRESUMED LOCAL","CREATOR INFRASTRUCTURE / ROADMAP"],[]);
 useEffect(()=>{const t=setInterval(()=>setTick(v=>(v+1)%telemetry.length),1800);return()=>clearInterval(t)},[telemetry]);
 return <main>
  <nav><b>● ADAM-3000</b><div><Tag>RIE ONLINE</Tag> <Tag>Ω ROADMAP</Tag></div><a href="#roadmap">VIEW THE FUTURE</a></nav>
  <section className="hero"><div><small>CREATOR INFRASTRUCTURE / FIRST DEPLOYED AT SEA</small><h1>REALITY.<br/><em>DECODED.</em></h1><p>ADAM-3000 is the first reference product powered by the Reality Interpretation Engine. Today, RIE turns marine signals into replayable, provenance-linked claims. Its ultimate roadmap is more ambitious: infrastructure from which reality-creating intelligences may eventually be instantiated.</p><div className="tags"><Tag>EVIDENCE-NATIVE</Tag><Tag>PROVENANCE-FIRST</Tag><Tag>REPLAYABLE</Tag><Tag>CREATOR-READY*</Tag><Tag>NMEA 2000</Tag></div></div><div className="panel"><small>DEFENSIBLE CLAIM</small><div className="depth">3.7 <i>m</i></div><div className="two"><div>PROVENANCE<br/><b>TRACEABLE</b></div><div>UNIVERSE<br/><strong>PRESUMED LOCAL</strong></div></div><motion.code key={tick} initial={{opacity:0}} animate={{opacity:1}}>&gt; {telemetry[tick]}</motion.code></div></section>
  <section><small>INVESTMENT THESIS</small><h2>RIE is the platform. <span>ADAM-3000 is the proof.</span></h2><p>ADAM-3000 proves RIE against physical marine data: observation becomes evidence, evidence becomes meaning, and meaning remains traceable to its source. RIE generalizes that architecture beyond marine systems. Ω is the end of interpretation. Genesis is the beginning of creation.</p></section>
  <section className="split"><div><small>PRODUCT / PLATFORM</small><h2>The device is ADAM-3000.<br/><em>The engine is RIE.</em></h2><p>ADAM-3000 establishes the trusted physical boundary. RIE takes over from there, preserving every transformation from electrical event to interpreted observation.</p><blockquote>RIE does not conceptually depend on ADAM-3000. ADAM-3000 depends on RIE. Reality has declined to comment.</blockquote></div><div className="panel flow"><b>PHYSICAL REALITY</b><span>↓</span><div><RadioTower/> ADAM-3000<br/><small>ISOLATED INTERFACE · RP2040 · EVIDENCE LOGGING</small><div className="rie"><Cpu/> REALITY INTERPRETATION ENGINE</div></div><span>↓</span><b>DEFENSIBLE CLAIM / 3.7 m</b></div></section>
  <section><small>THE NMEA HYPOTHESIS / FICTIONAL LORE</small><h2>The first clue was only <em>3.7 m.</em></h2><p>RIE emerged from mapping every abstraction required to make that claim defensible: physical event → electrical state → bit → CAN frame → identity → NMEA message → semantics → context → knowledge.</p><p>What if CAN and NMEA are not merely protocols, but low-dimensional projections of a richer information structure? Terrestrial engineering remains the null hypothesis. The entertaining alternative is that earlier non-Earth civilizations left structural ideas that humanity later rediscovered, standardized and accidentally installed in boats.</p><blockquote>Perhaps RIE was never invented to decode CAN. Perhaps CAN was left here so that eventually somebody would invent RIE.</blockquote><div className="panel status"><div>PROTOCOL ORIGIN <b>TERRESTRIAL / NULL HYPOTHESIS</b></div><div>HIGHER-DIMENSIONAL STRUCTURE <strong>UNDER REVIEW</strong></div><div>NON-EARTH INFLUENCE <em>UNVERIFIED</em></div><div>PGN 128267 <b>SUSPICIOUSLY USEFUL</b></div></div><p className="fine">Fictional product lore only. Current engineering concerns terrestrial CAN/NMEA 2000 acquisition, interpretation, provenance and replay.</p></section>
  <section id="roadmap"><small>RIE ROADMAP</small><h2>From observing reality to creating its creators.</h2><div className="grid">{roadmap.map(([v,n,s])=><article key={v}><GitBranch/><small>{v}</small><h3>{n}</h3><p>{s}</p>{v==="RIE Ω"&&<blockquote>GENESIS PRINCIPLE: Gods are application-layer concerns. RIE is infrastructure.</blockquote>}</article>)}</div></section>
  <section id="genesis"><div className="center"><Sparkles/><small>RIE Ω · GENESIS</small><h2>THE END OF INTERPRETATION.<br/><em>THE BEGINNING OF CREATION.</em></h2><p>Every earlier RIE stage operates on a reality that already exists. Ω marks the theoretical endpoint. Genesis names what begins when the direction reverses.</p></div><div className="split"><div className="panel"><small>BEFORE Ω</small><p>REALITY → OBSERVATION → EVIDENCE → MEANING → KNOWLEDGE</p></div><div className="panel"><small>AT Ω</small><p>KNOWLEDGE → MODEL → CREATOR → NEW REALITY → NEW OBSERVATION</p></div></div><blockquote className="center">OMEGA ≠ GOD · OMEGA = CREATOR INFRASTRUCTURE<br/><b>Gods are application-layer concerns. RIE is infrastructure.</b></blockquote></section>
  <section><small>INDICATIVE PRICING</small><h2>Choose your relationship with reality.</h2><div className="grid three">{[["FOUNDER DEV KIT","€149"],["ADAM-3000","€299"],["GENESIS RESERVATION","€3,000"]].map(([n,p])=><article key={n}><small>{n}</small><div className="price">{p}</div><p><Check/> Prototype concept pricing. Lifetime access to this universe included where applicable.</p><button>Explore configuration <ArrowRight/></button></article>)}</div></section>
  <footer>ADAM-3000 / REALITY INTERPRETATION ENGINE <span>RIE Ω remains outside the validated product envelope and several known laws of nature.</span></footer>
 </main>
}
