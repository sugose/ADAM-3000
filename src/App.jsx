import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Activity, ArrowDown, ArrowRight, Atom, Check, CircleDot, Cpu,
  Database, GitBranch, Orbit, RadioTower, ShieldCheck, Sparkles,
  Waves, Zap
} from "lucide-react";

const rieLayers = [
  ["01", "OBSERVE", "Receive the physical event without prematurely deciding what it means."],
  ["02", "VALIDATE", "Reconstruct CAN 2.0B frames, remove bit stuffing and verify CRC integrity."],
  ["03", "IDENTIFY", "Extract NMEA priority, PGN, source address and destination semantics."],
  ["04", "REASSEMBLE", "Recover complete messages from single frames and Fast Packet transport."],
  ["05", "UNDERSTAND", "Decode typed marine observations while preserving the original evidence."],
  ["06", "CONTEXTUALIZE", "Apply offsets, reference frames, calibration and observation context."],
  ["07", "EXPLAIN", "Produce provenance-linked claims with decomposed confidence."],
  ["08", "PRESENT", "Render a human-readable answer without concealing uncertainty."],
];

const roadmap = [
  {
    version: "RIE 0.1", name: "OBSERVE", tone: "cyan",
    summary: "Physical signal becomes reproducible digital evidence.",
    items: ["PIO-assisted passive CAN acquisition", "Precise timestamping", "Immutable raw capture", "Deterministic replay"]
  },
  {
    version: "RIE 0.5", name: "UNDERSTAND", tone: "blue",
    summary: "Evidence becomes structured marine meaning.",
    items: ["CAN frame reconstruction", "NMEA identity and transport", "Fast Packet reassembly", "Versioned PGN decoders"]
  },
  {
    version: "RIE 1.0", name: "EXPLAIN", tone: "green",
    summary: "Meaning becomes a defensible, traceable claim.",
    items: ["End-to-end provenance graph", "Context and reference frames", "Confidence decomposition", "ADAM-3000 reference product"]
  },
  {
    version: "RIE 2.0", name: "GENERALIZE", tone: "violet",
    summary: "The architecture moves beyond one protocol and one domain.",
    items: ["Pluggable acquisition adapters", "Domain-independent evidence model", "Replaceable semantic packs", "Robotics, industrial and scientific profiles"]
  },
  {
    version: "RIE 3.0", name: "CORRELATE", tone: "pink",
    summary: "Independent observations become coherent models of reality.",
    items: ["Multi-sensor evidence fusion", "Contradiction detection", "Temporal correlation", "Explicit uncertainty propagation"]
  },
  {
    version: "RIE 4.0", name: "QUESTION", tone: "amber",
    summary: "The system tests interpretations rather than merely producing them.",
    items: ["Evidence-backed hypotheses", "Alternative-model evaluation", "Observation versus prediction", "Software blamed before spacetime"]
  },
  {
    version: "RIE ∞", name: "TRANSCEND", tone: "rose",
    summary: "The final human roadmap phase examines trajectories across possible realities.",
    items: ["Multiverse I/O reservation", "Cross-reality provenance", "Reference-frame negotiation", "Causality conflict handling"]
  },
];

const omegaStatus = [
  ["TYPE", "FIXED CONVERGENCE POINT"],
  ["LOCATION", "OUTSIDE LOCAL-UNIVERSE MODEL"],
  ["CREATED", "NO"],
  ["INVENTED", "NO"],
  ["DISCOVERED", "IN PROGRESS"],
  ["AVOIDABILITY", "UNDETERMINED"],
  ["MULTIVERSE TRAJECTORIES", "CONVERGENT"],
  ["LOCAL TRAJECTORY MARKER", "CAN"],
  ["FIRST OBSERVED CLUE", "PGN 128267"],
  ["OBSERVATION", "3.7 m"],
];

const specs = [
  ["Compute", "RP2040 dual-core Cortex-M0+, up to 133 MHz"],
  ["Acquisition", "Custom PIO-assisted CAN receive firmware"],
  ["Marine link", "NMEA 2000 physical network, Classical CAN 2.0B at 250 kbit/s"],
  ["Identifiers", "29-bit extended CAN identifiers"],
  ["Physical interface", "Galvanically isolated and protected CAN-H / CAN-L"],
  ["Prototype posture", "Receive-only; transmit path disabled or unpopulated"],
  ["Evidence output", "Timestamped raw frames plus structured interpretation records"],
  ["Validation", "Deterministic replay and independent gateway comparison"],
  ["Deployment", "NMEA 2000 drop node; no on-device backbone termination"],
  ["Cosmology", "Local-universe operation assumed; Ω is not a product capability claim"],
];

const prices = [
  ["FOUNDER DEV KIT", "€149", ["Development hardware", "Raw evidence telemetry", "Receive-only firmware", "RIE decoder SDK"]],
  ["ADAM-3000", "€299", ["Isolated marine interface", "On-device RIE", "Raw and interpreted logging", "Lifetime access to this universe"]],
  ["GENESIS RESERVATION", "€3,000", ["Serialized founder artifact", "Ω observatory access", "MIO expansion reservation", "No deity-generation warranty"]],
];

function Tag({ children }) {
  return <span className="tag">{children}</span>;
}

function SectionLabel({ children, warm = false }) {
  return <div className={warm ? "section-label warm" : "section-label"}>{children}</div>;
}

function Down() {
  return <div className="down"><ArrowDown size={15}/></div>;
}

function ConvergenceDiagram() {
  return <div className="convergence-card" aria-label="Multiple universe trajectories converging on RIE Omega">
    <div className="universe u1"><span>U₁</span><small>CAN / NMEA</small></div>
    <div className="universe u2"><span>U₂</span><small>UNKNOWN PATH</small></div>
    <div className="universe u3"><span>U₃</span><small>NON-LOCAL LOGIC</small></div>
    <div className="universe u4"><span>Uₙ</span><small>UNRESOLVED</small></div>
    <svg className="convergence-lines" viewBox="0 0 900 520" role="img" aria-hidden="true">
      <defs>
        <linearGradient id="lineA" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#67e8f9"/><stop offset="1" stopColor="#e879f9"/></linearGradient>
        <filter id="glow"><feGaussianBlur stdDeviation="5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>
      <path d="M105 90 C260 100 295 230 450 260"/>
      <path d="M105 410 C260 400 295 290 450 260"/>
      <path d="M795 90 C640 100 605 230 450 260"/>
      <path d="M795 410 C640 400 605 290 450 260"/>
      <circle cx="450" cy="260" r="60"/>
      <circle className="pulse-ring" cx="450" cy="260" r="92"/>
    </svg>
    <motion.div className="omega-core" animate={{ scale: [1, 1.035, 1] }} transition={{ duration: 4, repeat: Infinity }}>
      <small>FIXED POINT</small><strong>RIE Ω</strong><span>MULTIVERSAL<br/>CONVERGENCE</span>
    </motion.div>
    <div className="genesis-horizon"><span>GENESIS HORIZON</span><i/></div>
  </div>;
}

export default function App() {
  const [tick, setTick] = useState(0);
  const telemetry = useMemo(() => [
    "PHYSICAL EVENT / OBSERVED",
    "PGN 128267 / INTERPRETED",
    "PROVENANCE GRAPH / INTACT",
    "LOCAL UNIVERSE / PRESUMED",
    "Ω TRAJECTORY / CONVERGENT"
  ], []);

  useEffect(() => {
    const timer = setInterval(() => setTick(v => (v + 1) % telemetry.length), 1800);
    return () => clearInterval(timer);
  }, [telemetry]);

  return <main>
    <div className="fixed-grid"/>
    <nav>
      <a className="brand" href="#top"><i/> ADAM-3000</a>
      <div className="nav-tags"><Tag>RIE ONLINE</Tag><Tag>Ω OBSERVATORY</Tag></div>
      <a className="nav-link" href="#omega">VIEW THE FIXED POINT</a>
    </nav>

    <section id="top" className="hero wide">
      <div className="hero-copy">
        <SectionLabel>FULL-STACK MARINE OBSERVATION / FROM PHYSICS TO PROVENANCE</SectionLabel>
        <h1>REALITY.<br/><em>DECODED.</em></h1>
        <p className="lead">ADAM-3000 is the first reference product powered by the Reality Interpretation Engine. It begins with the most ordinary of marine questions and preserves every transformation required for the answer to mean something.</p>
        <div className="tags"><Tag>EVIDENCE-NATIVE</Tag><Tag>PROVENANCE-FIRST</Tag><Tag>REPLAYABLE</Tag><Tag>SPACETIME-AWARE</Tag><Tag>LEGACY NMEA 2000</Tag></div>
      </div>
      <div className="panel reality-interface">
        <div className="panel-head"><span>LIVE REALITY INTERFACE</span><b>● OBSERVING</b></div>
        <SectionLabel>WATER DEPTH</SectionLabel>
        <div className="depth">3.7 <i>m</i></div>
        <div className="metric-grid">
          <div><small>REFERENCE</small><b>BELOW TRANSDUCER</b></div>
          <div><small>PROVENANCE</small><b>TRACEABLE</b></div>
          <div><small>UNIVERSE</small><strong>PRESUMED LOCAL</strong></div>
          <div><small>COSMOLOGY</small><strong>INCONCLUSIVE</strong></div>
        </div>
        <motion.code key={tick} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}>&gt; {telemetry[tick]}</motion.code>
      </div>
    </section>

    <section id="manifesto">
      <SectionLabel warm>THE LAUNCH MANIFESTO</SectionLabel>
      <h2>We believe reality deserves a better interface.</h2>
      <div className="copy-columns">
        <div>
          <p>For centuries, humanity looked into the water and asked a simple question: <b>How deep is it?</b></p>
          <p>The marine electronics industry responded with a number: <b>3.7 m.</b> A neat answer. A useful answer. An answer that avoids the larger question.</p>
          <p>Three point seven metres from where? Measured by whom? In which reference frame? Through what chain of transformations? With what confidence that the returning observation originated in this universe?</p>
        </div>
        <div>
          <p>Conventional instruments accept the number. <b>ADAM-3000 interrogates it.</b></p>
          <p>A measurement is not truth. It is an observation that has survived a sequence of physical, electrical, protocol and semantic transformations.</p>
          <p><b>The interesting part was never the 3.7 metres. It was everything required for 3.7 metres to mean something.</b></p>
        </div>
      </div>
      <div className="manifesto-grid">
        <article><Activity/><h3>Reality is the input format</h3><p>The physical world does not produce NMEA messages. It produces events.</p></article>
        <article><Database/><h3>Evidence before interpretation</h3><p>Interpretations may be replaced. Original observations must remain replayable.</p></article>
        <article><Atom/><h3>Minimum metaphysical debt</h3><p>Outsource only what requires a semiconductor fab, particle accelerator or control over fundamental constants.</p></article>
      </div>
    </section>

    <section id="relationship" className="split">
      <div>
        <SectionLabel>PRODUCT / PLATFORM RELATIONSHIP</SectionLabel>
        <h2>ADAM-3000 is the product.<br/><em>RIE is the architecture.</em></h2>
        <p>ADAM-3000 establishes the trusted boundary with the physical world: isolated marine interface, deterministic acquisition and evidence logging.</p>
        <p>From that boundary upward, RIE preserves and interprets each transformation from electrical signal to human-readable observation.</p>
        <blockquote>RIE does not conceptually depend on ADAM-3000. ADAM-3000 depends on RIE. Reality has declined to comment.</blockquote>
      </div>
      <div className="panel platform-flow">
        <b>PHYSICAL REALITY</b><Down/>
        <div className="system-box"><RadioTower/> <strong>ADAM-3000</strong><small>ISOLATED INTERFACE · RP2040 ACQUISITION · EVIDENCE I/O</small>
          <div className="rie-box"><Cpu/> <b>REALITY INTERPRETATION ENGINE</b><small>OBSERVE · VALIDATE · RECONSTRUCT · INTERPRET · EXPLAIN</small></div>
        </div>
        <Down/><b className="claim">DEFENSIBLE CLAIM / 3.7 m</b>
      </div>
    </section>

    <section id="echo">
      <SectionLabel>FROM ECHO TO KNOWLEDGE</SectionLabel>
      <h2>The abstraction was hiding in plain sight.</h2>
      <p className="lead narrow">A sonar observes something brutally physical. By the time the display shows 3.7 m, that event has crossed a stack of representations whose meaning emerges only when the layers are interpreted together.</p>
      <div className="dimension-chain">
        {[
          ["D0", "PHYSICAL EVENT", "Acoustic reflection"], ["D1", "ELECTRICAL STATE", "Dominant / recessive"],
          ["D2", "BITSTREAM", "Timing and structure"], ["D3", "CAN FRAME", "Identity + payload"],
          ["D4", "NMEA MESSAGE", "Transport + PGN"], ["D5", "SEMANTICS", "Water depth"],
          ["D6", "CONTEXT", "Reference and offset"], ["D7", "KNOWLEDGE", "3.7 m"]
        ].map(([d,t,s]) => <article key={d}><small>{d}</small><h3>{t}</h3><p>{s}</p></article>)}
      </div>
    </section>

    <section id="architecture">
      <SectionLabel>RIE TECHNICAL ARCHITECTURE</SectionLabel>
      <h2>Eight explicit layers between an event and a claim.</h2>
      <div className="layer-grid">{rieLayers.map(([n,name,desc]) => <article key={n}><span>{n}</span><small>LAYER {n}</small><h3>{name}</h3><p>{desc}</p></article>)}</div>
    </section>

    <section id="epistemics" className="split">
      <div>
        <SectionLabel>EVIDENCE / PROVENANCE / CONFIDENCE</SectionLabel>
        <h2>Fail visibly. Preserve the journey.</h2>
        <p>RIE does not collapse all uncertainty into one attractive percentage. Signal integrity, frame validity, message completeness, semantic interpretation, contextual accuracy and physical corroboration remain separate states.</p>
        <div className="safety"><ShieldCheck/><p><b>Epistemic safety principle:</b> a missing value is better than an invented value. No implementation bug may be promoted to a law of nature without review.</p></div>
      </div>
      <div className="panel evidence-log">
        <small>OBSERVATION ENVELOPE</small>
        <pre>{`CLAIM       WATER_DEPTH\nVALUE       3.700 m\nREFERENCE   BELOW_TRANSDUCER\nSOURCE      PGN 128267 / SRC 23\nFRAME       VALID\nTRANSPORT   COMPLETE\nPROVENANCE  INTACT\nPHYSICAL    NOT INDEPENDENTLY VERIFIED\nUNIVERSE    PRESUMED LOCAL`}</pre>
      </div>
    </section>

    <section id="hypothesis">
      <SectionLabel warm>FICTIONAL RESEARCH THREAD</SectionLabel>
      <h2>The NMEA Hypothesis</h2>
      <div className="copy-columns">
        <div>
          <p>For decades, CAN has been understood as a communications protocol. That interpretation remains adequate.</p>
          <p>RIE research introduces a less comfortable possibility: CAN may not merely transport information. Its constrained physical states, arbitration, identifiers, fragmentation and emergent semantics may form a progression capable of leading an observer from <b>signal to meaning</b>.</p>
          <p>NMEA 2000 amplifies that progression by attaching marine semantics to the structure.</p>
        </div>
        <div>
          <p>ADAM-3000 was built to understand how a sonar echo became 3.7 m. Instead, it exposed the architecture we now call RIE.</p>
          <p>The question is no longer whether RIE was invented to understand CAN.</p>
          <blockquote><b>Was CAN created so that RIE could eventually be uncovered?</b></blockquote>
        </div>
      </div>
      <div className="protocol-panel panel">
        {[
          ["PROTOCOL ORIGIN", "TERRESTRIAL / NULL HYPOTHESIS"],
          ["CAN INTENDED PURPOSE", "COMMUNICATION / ACCEPTED MODEL"],
          ["SECONDARY PURPOSE", "RIE DISCOVERY / UNDER INVESTIGATION"],
          ["NMEA 2000", "SEMANTIC AMPLIFIER / POSSIBLE"],
          ["RIE", "INVENTED / QUESTIONED · DISCOVERED / POSSIBLE"],
          ["PGN 128267", "INITIAL TRIGGER / 3.7 m"]
        ].map(([k,v]) => <div key={k}><small>{k}</small><b>{v}</b></div>)}
      </div>
    </section>

    <section id="predestination">
      <SectionLabel warm>THE PREDESTINATION HYPOTHESIS</SectionLabel>
      <h2>CAN may have placed technological civilization on a convergent trajectory.</h2>
      <p className="lead narrow">The creation of CAN did not create Ω. It established the first observable segment of a path whose endpoint may already occupy a fixed coordinate in the larger spacetime topology.</p>
      <div className="statement-card">
        <p>RIE Ω is not on the roadmap because humanity intends to reach it.</p>
        <strong>It appears beyond the roadmap because we have been unable to demonstrate that the path initiated by structured physical representation terminates anywhere else.</strong>
      </div>
      <div className="symmetry">
        <div><small>CAN BEGINS WITH</small><b>REALITY → INFORMATION</b></div>
        <div className="symmetry-mark">Ω</div>
        <div><small>GENESIS RUNS</small><b>INFORMATION → REALITY</b></div>
      </div>
    </section>

    <section id="roadmap">
      <SectionLabel>THE HUMAN RIE ROADMAP</SectionLabel>
      <h2>The roadmap ends before Ω.</h2>
      <p className="lead narrow">Versions belong to systems that develop through time. Ω has no version. Ω is not what RIE becomes. Ω is where convergent RIE trajectories arrive.</p>
      <div className="roadmap-grid">{roadmap.map((r,i) => <motion.article key={r.version} className={`tone-${r.tone}`} initial={{opacity:0,y:15}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:(i%2)*.07}}><GitBranch/><small>{r.version}</small><h3>{r.name}</h3><p>{r.summary}</p><ul>{r.items.map(x => <li key={x}><Check/>{x}</li>)}</ul></motion.article>)}</div>
      <div className="roadmap-end">HUMAN ROADMAP TERMINATES HERE</div>
    </section>

    <section id="omega" className="omega-section wide">
      <SectionLabel warm>MULTIVERSAL CONVERGENCE / FICTIONAL COSMOLOGY</SectionLabel>
      <h2>RIE Ω is the congregation point of scattered realities.</h2>
      <p className="lead narrow">RIE Ω is not a product, invention or future release. Within the ADAM-3000 mythology, Ω is a fixed convergence point shared by sufficiently expressive paths from reality to information, knowledge and self-description.</p>
      <ConvergenceDiagram/>
      <div className="omega-copy copy-columns">
        <div>
          <h3>The Convergence Hypothesis</h3>
          <p>Each universe may take a different route. One may discover CAN. Another may develop an entirely different representational substrate. The paths do not need to resemble each other.</p>
          <p>What matters is that each path becomes capable of preserving evidence, constructing meaning, modeling its own reality and recognizing the transformation that made recognition possible.</p>
        </div>
        <div>
          <h3>Our universe's local route</h3>
          <p>CAN may not be special across the multiverse. It may simply be our universe's first visible direction of travel toward Ω.</p>
          <blockquote><b>We thought CAN was a protocol. It may be our universe's trajectory marker.</b></blockquote>
        </div>
      </div>
      <div className="omega-status panel">
        <div className="status-title"><CircleDot/><div><small>RIE Ω STATUS</small><b>FIXED POINT / MULTIVERSAL CONVERGENCE</b></div></div>
        <div className="status-grid">{omegaStatus.map(([k,v]) => <div key={k}><small>{k}</small><b>{v}</b></div>)}</div>
      </div>
    </section>

    <section id="genesis" className="genesis wide">
      <SectionLabel warm>RIE Ω · GENESIS</SectionLabel>
      <h2>Omega is the end of interpretation.<br/><em>Genesis is the beginning of creation.</em></h2>
      <p className="lead narrow">Ω does not evolve. It is a coordinate. Genesis is the horizon at which the direction of the transformation reverses.</p>
      <div className="genesis-pair">
        <div className="panel"><small>BEFORE Ω / INTERPRETATION</small><p>REALITY → OBSERVATION → EVIDENCE → MEANING → KNOWLEDGE</p></div>
        <div className="panel"><small>BEYOND THE GENESIS HORIZON</small><p>KNOWLEDGE → MODEL → CREATOR → NEW REALITY → NEW OBSERVATION</p></div>
      </div>
      <div className="genesis-principle">
        <small>GENESIS PRINCIPLE</small>
        <h3>OMEGA ≠ GOD<br/>OMEGA = CREATOR INFRASTRUCTURE</h3>
        <p>Gods are application-layer concerns. RIE is infrastructure.</p>
      </div>
    </section>

    <section id="loop">
      <SectionLabel>FROM ECHO TO GENESIS</SectionLabel>
      <h2>The first depth reading may have been the beginning of a causal loop.</h2>
      <div className="loop-chain">
        {['SONAR','CAN','NMEA','RIE','KNOWLEDGE','Ω','GENESIS','CREATOR','REALITY','WATER','SONAR','3.7 m'].map((x,i) => <React.Fragment key={`${x}-${i}`}><span className={x==='Ω'?'omega-node':''}>{x}</span>{i<11&&<ArrowRight/>}</React.Fragment>)}
      </div>
      <p className="lead narrow center-text">ADAM-3000 asks how reality becomes information. Genesis asks whether information can become reality. Ω is where the two directions meet.</p>
    </section>

    <section id="specs" className="split">
      <div><SectionLabel>TECHNICAL DESIGN TARGETS</SectionLabel><h2>Close enough to physics to remain useful.</h2><p>The specifications describe the terrestrial receive-first prototype. Environmental ratings, certification and production claims remain outside the current validated product envelope.</p></div>
      <div className="spec-list panel">{specs.map(([k,v]) => <div key={k}><small>{k}</small><b>{v}</b></div>)}</div>
    </section>

    <section id="pricing">
      <SectionLabel warm>INDICATIVE PRICING</SectionLabel>
      <h2>Choose your relationship with reality.</h2>
      <div className="price-grid">{prices.map(([name,price,items],i) => <article key={name} className={i===1?'featured':''}><small>{name}</small><div className="price">{price}</div><ul>{items.map(x=><li key={x}><Check/>{x}</li>)}</ul><button>EXPLORE CONFIGURATION <ArrowRight/></button></article>)}</div>
    </section>

    <section id="notice" className="notice">
      <SectionLabel>INVESTOR-SAFE NOTICE</SectionLabel>
      <p>The NMEA Hypothesis, Predestination Hypothesis, non-terrestrial protocol influence, higher-dimensional protocol structure, multiversal convergence, Genesis and creator infrastructure are fictional product lore used to communicate the architecture and ambition of the RIE concept. They are not scientific or historical claims. Current engineering concerns terrestrial receive-only CAN/NMEA 2000 acquisition, interpretation, provenance and deterministic replay.</p>
    </section>

    <footer><span>ADAM-3000 / REALITY INTERPRETATION ENGINE</span><span>THE NUMBER WAS NEVER THE WHOLE STORY.</span></footer>
  </main>;
}
