"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Check, ChevronDown,
  ChevronRight, Factory, Layers3, Menu, Package, PackageCheck,
  ShieldCheck, Sparkles, Truck, X, MessageCircle, Send, MoveUpRight
} from "lucide-react";
import { site } from "@/lib/site";

const productImages = [
  "https://images.unsplash.com/photo-1607166452427-7e4477079cb9?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1605600659873-d808a13e4d9a?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=1200&q=85"
];

const faqs = [
  ["What information should I share to get a quotation?", "Share the box length, width and height, preferred ply, estimated monthly quantity, product weight and delivery location. If you do not have final specifications, tell us about the product and we can discuss the requirement."],
  ["Can you develop packaging for FMCG products?", "Custom FMCG packaging is one of the proposed focus areas. Share your product dimensions, packing configuration, stacking and distribution requirements so the team can review feasibility."],
  ["Do you offer both 3-ply and 5-ply boxes?", "The initial product range is planned around 3-ply and 5-ply corrugated boxes, subject to final machinery, material sourcing and production capability confirmation."],
  ["Where do you supply?", "The business is being established in Maharashtra, India. Share your delivery pin code and expected quantity so the team can assess logistics and serviceability."],
  ["What is your minimum order quantity?", "Order quantities and commercial terms are being finalised during setup. Submit your expected volume and the team can discuss a suitable arrangement."]
];

function Logo({ light = false }: { light?: boolean }) {
  return <a className={`brand ${light ? "brand-light" : ""}`} href="#home" aria-label="KRAFTLINE Packaging home">
    <span className="brand-symbol">K<span>.</span></span>
    <span className="brand-word">KRAFTLINE<small>PACKAGING SOLUTIONS</small></span>
  </a>;
}

function SectionEyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <div className={`eyebrow ${light ? "eyebrow-light" : ""}`}><span />{children}</div>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [form, setForm] = useState({
    name: "", company: "", email: "", phone: "", product: "Custom FMCG packaging",
    quantity: "", dimensions: "", message: "", consent: false
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const waUrl = site.whatsapp
    ? `https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hello KRAFTLINE, I would like to discuss a corrugated packaging requirement.")}`
    : "";

  function update(field: string, value: string | boolean) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function submitQuote(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setStatusMessage("");
    try {
      const res = await fetch("/api/quote", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "We could not submit your enquiry. Please try again.");
      setStatus("success");
      setStatusMessage("Thank you. Your enquiry has been received. Our team will get in touch.");
      setForm({ name: "", company: "", email: "", phone: "", product: "Custom FMCG packaging", quantity: "", dimensions: "", message: "", consent: false });
    } catch (err) {
      setStatus("error");
      setStatusMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  const nav = [["Products", "#products"], ["Industries", "#industries"], ["Capabilities", "#capabilities"], ["About", "#about"], ["Contact", "#contact"]];

  return (
    <main>
      <div className="topline"><div className="container topline-inner"><span>ENGINEERED FOR THE JOURNEY AHEAD</span><span className="topline-right">MADE FOR BUSINESS. BUILT AROUND YOUR PRODUCT. <ArrowUpRight size={12}/></span></div></div>
      <header className="header">
        <div className="container nav-wrap">
          <Logo />
          <nav className={menuOpen ? "nav nav-open" : "nav"} aria-label="Main navigation">
            {nav.map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
            <a className="mobile-quote" href="#quote" onClick={() => setMenuOpen(false)}>Request a quote <ArrowUpRight size={15}/></a>
          </nav>
          <a className="nav-cta" href="#quote">Request a quote <ArrowUpRight size={15}/></a>
          <button className="menu-toggle" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="hero-image" />
        <div className="hero-shade" />
        <div className="container hero-content">
          <SectionEyebrow light>YOUR PRODUCT. OUR PRIORITY.</SectionEyebrow>
          <h1>Packaging that<br/><em>moves business</em><br/>forward.</h1>
          <p className="hero-copy">Corrugated packaging built around the realities of FMCG — protection, handling, stacking and the journey from your facility to the shelf.</p>
          <div className="hero-actions">
            <a className="button button-copper" href="#quote">Discuss your requirement <ArrowUpRight size={17}/></a>
            <a className="text-link text-link-light" href="#products">Explore our solutions <ArrowDownRight size={16}/></a>
          </div>
          <div className="hero-note"><span className="note-line"/><span>PROPOSED CORRUGATED PACKAGING PARTNER</span></div>
        </div>
        <div className="hero-index"><span>01</span><i/>03</div>
        <div className="hero-bottom"><span>MAHARASHTRA, INDIA</span><span>BUILT AROUND YOUR PRODUCT <ArrowDownRight size={14}/></span></div>
      </section>

      <section className="intro section-pad">
        <div className="container intro-grid">
          <div><SectionEyebrow>THE KRAFTLINE APPROACH</SectionEyebrow><h2>Good packaging<br/>does more than <em>hold.</em></h2></div>
          <div className="intro-copy"><p className="lead">It protects product quality, supports efficient movement and helps every delivery arrive ready for what comes next.</p><p>We are building KRAFTLINE around a simple idea: corrugated packaging should be considered part of your product journey, not an afterthought. From everyday cartons to tailored FMCG requirements, we start by understanding what your packaging needs to do.</p><a className="text-link" href="#about">Get to know us <ArrowUpRight size={15}/></a></div>
        </div>
        <div className="container intro-stats">
          <div><strong>03</strong><span>CORE SOLUTION<br/>CATEGORIES</span></div>
          <div><strong>3–5</strong><span>PLY OPTIONS<br/>IN INITIAL RANGE</span></div>
          <div><strong>10–50K</strong><span>INDICATIVE MONTHLY<br/>CAPACITY TARGET</span></div>
          <div className="stats-note">A new packaging venture in Maharashtra, being built with a focus on dependable B2B partnerships.</div>
        </div>
      </section>

      <section className="products section-pad" id="products">
        <div className="container">
          <div className="section-head"><div><SectionEyebrow>WHAT WE MAKE</SectionEyebrow><h2>Packaging with<br/><em>a purpose.</em></h2></div><div className="section-aside"><p>Choose a practical starting point. We can discuss your product, handling conditions and packaging specifications before recommending a solution.</p><a className="text-link" href="#quote">Talk through a requirement <ArrowUpRight size={15}/></a></div></div>
          <div className="product-grid">
            {site.products.map((p, i) => <article className="product-card" key={p.code}>
              <div className="product-image" style={{backgroundImage: `url("${productImages[i]}")`}}><span className="product-number">{p.code} / 03</span><span className="product-arrow"><ArrowUpRight size={19}/></span></div>
              <div className="product-info"><div className="product-meta">{p.spec}<span>PACKAGING RANGE</span></div><h3>{p.name}</h3><p>{p.description}</p><a href={`#quote`} onClick={() => update("product", p.name)} className="card-link">Enquire about this solution <ArrowUpRight size={15}/></a></div>
            </article>)}
          </div>
        </div>
      </section>

      <section className="industries section-pad" id="industries">
        <div className="container industries-grid">
          <div className="industries-copy"><SectionEyebrow light>BUILT FOR THE WAY YOU SHIP</SectionEyebrow><h2>Every industry<br/>has a different<br/><em>journey.</em></h2><p>Packaging needs change with product weight, shelf life, distribution networks and the way goods are handled. We want to understand those details before we recommend a box.</p><a className="button button-outline-light" href="#quote">Tell us what you make <ArrowUpRight size={16}/></a></div>
          <div className="industry-list">
            <div className="industry-row"><span>01</span><div><h3>Food & beverages</h3><p>Cartons for movement, storage and distribution of packaged food and drinks.</p></div><Package size={22}/></div>
            <div className="industry-row"><span>02</span><div><h3>Home & personal care</h3><p>Outer packaging for everyday consumer products and multipack formats.</p></div><Layers3 size={22}/></div>
            <div className="industry-row"><span>03</span><div><h3>Consumer goods</h3><p>Transit packaging for products moving through warehouses and retail networks.</p></div><Truck size={22}/></div>
            <div className="industry-row"><span>04</span><div><h3>Distribution & e-commerce</h3><p>Packaging requirements shaped around handling, stacking and last-mile delivery.</p></div><PackageCheck size={22}/></div>
            <p className="industry-footnote">Industry examples are indicative. Final suitability depends on product and packaging requirements.</p>
          </div>
        </div>
      </section>

      <section className="capabilities section-pad" id="capabilities">
        <div className="container">
          <div className="section-head"><div><SectionEyebrow>FROM BRIEF TO BOX</SectionEyebrow><h2>Start with the<br/><em>right questions.</em></h2></div><div className="section-aside"><p>We are setting up with a customer-first process. Every enquiry is an opportunity to understand the job your packaging needs to perform.</p></div></div>
          <div className="process-grid">
            <div className="process-card"><span>01</span><div className="process-icon"><MessageCircle/></div><h3>Understand</h3><p>Product, dimensions, weight, quantity, handling and delivery destination.</p></div>
            <div className="process-card"><span>02</span><div className="process-icon"><Layers3/></div><h3>Specify</h3><p>Discuss board construction, ply, fit, stacking and printing requirements.</p></div>
            <div className="process-card"><span>03</span><div className="process-icon"><Factory/></div><h3>Plan</h3><p>Review feasibility, material availability, production planning and timelines.</p></div>
            <div className="process-card"><span>04</span><div className="process-icon"><PackageCheck/></div><h3>Deliver</h3><p>Align on approved specifications, order quantities and dispatch expectations.</p></div>
          </div>
          <div className="capability-strip"><div><ShieldCheck size={24}/><span><b>Specification-led</b><small>Discuss the job before the box</small></span></div><div><Layers3 size={24}/><span><b>Flexible formats</b><small>Initial focus on 3-ply and 5-ply</small></span></div><div><Truck size={24}/><span><b>B2B-first</b><small>Built around business requirements</small></span></div></div>
        </div>
      </section>

      <section className="about section-pad" id="about">
        <div className="container about-grid">
          <div className="about-photo"><div className="about-photo-image"/><div className="photo-caption"><span>01 — THE BEGINNING</span><span>MAHARASHTRA, INDIA</span></div></div>
          <div className="about-copy"><SectionEyebrow>WHO WE ARE</SectionEyebrow><h2>A new venture.<br/><em>A clear purpose.</em></h2><p className="lead">KRAFTLINE is an emerging corrugated packaging venture being established in Maharashtra, India.</p><p>Our ambition is to become a dependable packaging partner for businesses that value practical thinking, clear communication and packaging designed around real operating needs.</p><p>We are currently setting up our manufacturing operation. As we build, we are speaking with prospective customers to understand product categories, volumes and specifications that matter most.</p><div className="about-callout"><Sparkles size={19}/><span><b>Help shape what we build.</b><small>Share your packaging requirement and be part of our early customer conversations.</small></span></div><a className="text-link" href="#quote">Start a conversation <ArrowUpRight size={15}/></a></div>
        </div>
      </section>

      <section className="faq section-pad">
        <div className="container faq-grid">
          <div><SectionEyebrow>GOOD TO KNOW</SectionEyebrow><h2>Questions before<br/><em>the first order.</em></h2><p>Still figuring out your packaging specifications? That's a good place to start.</p><a className="text-link" href="#quote">Ask us directly <ArrowUpRight size={15}/></a></div>
          <div className="faq-list">{faqs.map(([q, a], i) => <div className={`faq-item ${openFaq === i ? "faq-open" : ""}`} key={q}><button onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i}><span>{q}</span><ChevronDown size={18}/></button>{openFaq === i && <p>{a}</p>}</div>)}</div>
        </div>
      </section>

      <section className="quote-section section-pad" id="quote">
        <div className="container quote-grid">
          <div className="quote-copy"><SectionEyebrow light>LET'S TALK PACKAGING</SectionEyebrow><h2>Tell us what<br/>you need to <em>move.</em></h2><p>Share a few details about your product and packaging requirement. The more you can tell us, the better we can understand your brief.</p><div className="quote-contact"><span>BASED IN</span><b>Maharashtra, India</b><span>EMAIL</span><b>{site.email}</b><small>Replace this placeholder email before launch.</small></div></div>
          <form className="quote-form" onSubmit={submitQuote}>
            <div className="form-heading"><div><span>01 / PROJECT ENQUIRY</span><h3>Request a quotation</h3></div><ArrowUpRight size={21}/></div>
            <div className="form-row"><label>Your name *<input required minLength={2} value={form.name} onChange={e => update("name", e.target.value)} placeholder="Name"/></label><label>Company name<input value={form.company} onChange={e => update("company", e.target.value)} placeholder="Business / organisation"/></label></div>
            <div className="form-row"><label>Work email *<input type="email" required value={form.email} onChange={e => update("email", e.target.value)} placeholder="you@company.com"/></label><label>Phone number *<input type="tel" required minLength={8} value={form.phone} onChange={e => update("phone", e.target.value)} placeholder="+91"/></label></div>
            <label>What are you looking for? *<select required value={form.product} onChange={e => update("product", e.target.value)}><option>Custom FMCG packaging</option><option>3-Ply Corrugated Boxes</option><option>5-Ply Corrugated Boxes</option><option>Not sure — need guidance</option></select></label>
            <div className="form-row"><label>Estimated quantity<input value={form.quantity} onChange={e => update("quantity", e.target.value)} placeholder="e.g. 5,000 boxes / month"/></label><label>Box dimensions (if known)<input value={form.dimensions} onChange={e => update("dimensions", e.target.value)} placeholder="L × W × H (mm)"/></label></div>
            <label>Tell us about your requirement<textarea rows={3} value={form.message} onChange={e => update("message", e.target.value)} placeholder="Product type, weight, use case, delivery location..."/></label>
            <label className="consent"><input type="checkbox" required checked={form.consent} onChange={e => update("consent", e.target.checked)}/><span>I agree to be contacted about this business enquiry.</span></label>
            <button className="button button-dark submit-button" disabled={status === "sending"}>{status === "sending" ? "Sending enquiry..." : "Send enquiry"} <Send size={16}/></button>
            {statusMessage && <p className={`form-status ${status}`}>{statusMessage}</p>}
            <p className="form-privacy">Your details will be used to respond to this enquiry. Configure the privacy policy before launch.</p>
          </form>
        </div>
      </section>

      <section className="final-cta"><div className="container final-cta-inner"><div><span>THE NEXT STEP STARTS HERE</span><h2>Let's build a better<br/><em>way to deliver.</em></h2></div><a href="#quote" className="round-cta" aria-label="Request a quote"><MoveUpRight size={27}/></a></div></section>

      <footer className="footer" id="contact"><div className="container footer-main"><div className="footer-brand"><Logo light/><p>Corrugated packaging solutions for businesses building what comes next.</p><span className="footer-location">MAHARASHTRA, INDIA</span></div><div className="footer-col"><span>EXPLORE</span><a href="#products">Products</a><a href="#industries">Industries</a><a href="#capabilities">Capabilities</a><a href="#about">About us</a></div><div className="footer-col"><span>GET IN TOUCH</span><a href="#quote">Request a quote</a><a href={`mailto:${site.email}`}>Email the team</a>{waUrl ? <a href={waUrl} target="_blank" rel="noreferrer">WhatsApp</a> : <span className="footer-muted">WhatsApp contact to be added</span>}</div><div className="footer-stamp"><span>K</span><small>PACKAGING<br/>WITH PURPOSE</small></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} KRAFTLINE PACKAGING. ALL RIGHTS RESERVED.</span><span>BUILT TO PROTECT. DESIGNED TO DELIVER.</span><a href="#home">BACK TO TOP ↑</a></div></footer>
      {site.whatsapp && <a className="whatsapp-float" href={waUrl} target="_blank" rel="noreferrer" aria-label="Chat with KRAFTLINE on WhatsApp"><MessageCircle size={22}/></a>}
    </main>
  );
}
