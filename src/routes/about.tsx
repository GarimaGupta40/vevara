import { useState, useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  Building2,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Eye,
  Factory,
  Gem,
  Handshake,
  HeartHandshake,
  Layers,
  MapPin,
  Medal,
  Package,
  Settings,
  Shield,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Truck,
  Users,
  UsersRound,
  Leaf,
  X,
  ZoomIn,
} from "lucide-react";

import heroCratesImage from "@/assets/editorial/about-hero-crates.jpg";
import visionMountainImage from "@/assets/editorial/about-vision-mission-mountain.jpg";
import dunsCertificateImg from "@/assets/Certificate/DUNS.png";
import iso9001CertificateImg from "@/assets/Certificate/Certificate-of-regi-2.png";
import iso14001CertificateImg from "@/assets/Certificate/Certificate-of-regi-1.png";
import sustainableEarthImg from "@/assets/editorial/sustainable-earth-globe.jpg";
import { RfqButton, SiteLayout } from "@/components/site/SiteLayout";
import { WorldExpansionMap } from "@/components/site/WorldExpansionMap";
import { STATS } from "@/lib/site-content";

const CERTIFICATES = [
  {
    id: "duns",
    title: "D-U-N-S® Registered™",
    subtitle: "Global business identity and credibility",
    image: dunsCertificateImg,
    tag: "Business Identity",
  },
  {
    id: "iso-9001",
    title: "ISO 9001:2015",
    subtitle: "Quality Management System",
    image: iso9001CertificateImg,
    tag: "Quality Certified",
  },
  {
    id: "iso-14001",
    title: "ISO 14001:2015",
    subtitle: "Environmental Management System",
    image: iso14001CertificateImg,
    tag: "Environment Certified",
  },
];

const VALUES_LIST = [
  {
    step: "01",
    title: "Customer First",
    body: "We put the customer's requirements at the centre.",
    icon: HeartHandshake,
  },
  {
    step: "02",
    title: "Integrity",
    body: "We build relationships through transparency, trust and doing the right thing.",
    icon: ShieldCheck,
  },
  {
    step: "03",
    title: "Ownership",
    body: "We take responsibility for the problem, not just our part.",
    icon: Settings,
  },
  {
    step: "04",
    title: "Teamwork",
    body: "We work together with customers, partners and our people.",
    icon: UsersRound,
  },
  {
    step: "05",
    title: "Excellence",
    body: "We continuously improve how we design, deliver and manage solutions.",
    icon: Gem,
  },
];

const EVOLUTION_CARDS = [
  { step: "01", title: "Packaging Products" },
  { step: "02", title: "Returnable Packaging" },
  { step: "03", title: "Packaging Rental" },
  { step: "04", title: "PP / Plastic Solutions" },
  { step: "05", title: "Packaging Engineering" },
  { step: "06", title: "On-Site Packaging Operations" },
  { step: "07", title: "Warehouse & Logistics Support" },
  { step: "08", title: "End-to-End Packaging Management" },
];

const VERIFIED_STATS = [
  { value: "15+", label: "Years of Experience", icon: Medal },
  { value: "153+", label: "Employees", icon: Users },
  { value: "4", label: "Manufacturing Units", icon: Factory },
  { value: "11+", label: "Warehouses*", icon: Building2 },
  { value: "6,149+", label: "Customers*", icon: Award },
];

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About VEVRA — From Packaging Supplier to Problem Solver" },
      {
        name: "description",
        content:
          "VEVRA grew from making packaging to solving packaging and supply-chain problems through sustainable, efficient and customer-centred solutions.",
      },
      { property: "og:title", content: "About VEVRA Packaging" },
      {
        property: "og:description",
        content: "The VEVRA story, vision, mission, values and evolution toward end-to-end packaging management.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const [zoomedCertIndex, setZoomedCertIndex] = useState<number | null>(null);

  // Keyboard navigation for zoomed certificate modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (zoomedCertIndex === null) return;
      if (e.key === "Escape") setZoomedCertIndex(null);
      if (e.key === "ArrowRight") {
        setZoomedCertIndex((prev) => (prev !== null ? (prev + 1) % CERTIFICATES.length : null));
      }
      if (e.key === "ArrowLeft") {
        setZoomedCertIndex((prev) => (prev !== null ? (prev - 1 + CERTIFICATES.length) % CERTIFICATES.length : null));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [zoomedCertIndex]);

  return (
    <SiteLayout>
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-white py-14 sm:py-18 lg:py-22 text-slate-900">
        {/* Ambient background glow */}
        <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-rose-50/70 blur-3xl" />
        <div className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-rose-50/50 blur-2xl" />

        <div className="relative mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-14 xl:px-16 2xl:px-20">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
            {/* Left Content */}
            <div className="max-w-[660px]">
              <div className="flex items-center gap-2.5 text-xs font-black uppercase tracking-[0.28em] text-brand">
                <span className="h-1 w-8 bg-brand inline-block rounded-full" />
                ABOUT VEVRA
              </div>

              <h1 className="mt-4 text-3xl sm:text-4xl lg:text-[2.85rem] xl:text-[3.35rem] font-black tracking-tight leading-[1.08] text-brand-blue-dark">
                We started by making <br />
                packaging. We grew by <br />
                <span className="text-brand">solving problems.</span>
              </h1>

              <p className="mt-5 text-sm sm:text-base leading-relaxed text-slate-600 font-medium max-w-[560px]">
                VEVRA&apos;s story is about evolution — from packaging products and returnables to a broader end-to-end packaging and supply-chain solutions partnership.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="rounded-full bg-brand px-7 sm:px-8 py-3.5 text-xs sm:text-sm font-black uppercase tracking-[0.14em] text-white shadow-lg shadow-brand/25 transition-all duration-300 hover:bg-brand-dark hover:scale-105 inline-flex items-center gap-2.5"
                >
                  <span>Generate Quick RFQ</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  to="/contact"
                  className="rounded-full border border-slate-300 bg-white px-7 sm:px-8 py-3.5 text-xs sm:text-sm font-black uppercase tracking-[0.14em] text-brand-blue-dark transition-all duration-300 hover:border-brand hover:text-brand hover:scale-105 inline-flex items-center gap-2.5"
                >
                  <span>Talk to us</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Right Visual Image & Vertical Badges */}
            <div className="flex items-center justify-end gap-5 sm:gap-7">
              {/* Slanted Container for Industrial Image */}
              <div className="relative w-full max-w-[500px] rounded-3xl overflow-hidden shadow-2xl border border-slate-100 bg-slate-900 group">
                <img
                  src={heroCratesImage}
                  alt="VEVRA Returnable Packaging Factory and Returnable Crates"
                  className="w-full h-auto object-cover max-h-[360px] sm:max-h-[420px] transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Right-hand Vertical Badges */}
              <div className="hidden sm:flex flex-col justify-between self-stretch py-2 select-none shrink-0">
                <div className="text-[10px] font-black uppercase tracking-[0.22em] text-slate-600 leading-snug border-l-2 border-brand/60 pl-3">
                  PACK
                  <br />
                  PROTECT
                  <br />
                  MOVE
                  <br />
                  SUSTAIN
                </div>

                <div className="text-[10px] font-black uppercase tracking-[0.22em] text-slate-600 leading-snug border-l-2 border-brand/60 pl-3 mt-12">
                  PACKAGING
                  <br />
                  A STRONGER
                  <br />
                  TOMORROW
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OUR STORY SECTION */}
      <section className="relative overflow-hidden bg-[#FAFBFC] py-14 sm:py-18 lg:py-20 text-slate-900 border-t border-slate-100">
        <div className="relative mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-14 xl:px-16 2xl:px-20">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2.5 text-xs font-black uppercase tracking-[0.28em] text-brand">
                <span className="h-1 w-8 bg-brand inline-block rounded-full" />
                OUR STORY
              </div>

              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[2.6rem] font-black tracking-tight text-brand-blue-dark">
                From product supplier to <br className="hidden sm:inline" />
                problem solver
              </h2>
            </div>

            {/* Right Calligraphy Script */}
            <div className="select-none self-start lg:self-center">
              <span className="font-['Dancing_Script',cursive] text-2xl sm:text-3xl font-bold text-brand -rotate-2 block leading-tight">
                Engineering Packaging
                <br />
                <span className="text-xl sm:text-2xl font-semibold">for What&apos;s Next</span>
              </span>
            </div>
          </div>

          {/* Two-Column Story Narrative */}
          <div className="mt-8 sm:mt-10 grid gap-8 sm:gap-12 md:grid-cols-2 text-slate-600 font-medium leading-relaxed text-sm sm:text-base border-t border-slate-200/80 pt-8">
            <p>
              VEVRA was built around a simple question: why should packaging be purchased again and again when it can potentially be reused, circulated and managed more intelligently?
            </p>
            <p>
              That thinking led VEVRA toward returnable packaging, pooling and broader packaging-management solutions. Customers may forget a product, but they remember a partner who solves a difficult problem.
            </p>
          </div>
        </div>
      </section>

      {/* 3. OUR PURPOSE (VISION & MISSION) - Matching Reference Design */}
      <section className="relative overflow-hidden bg-[#FCFDFE] py-16 sm:py-20 lg:py-24 text-slate-900 border-t border-slate-100">

        {/* Scenic sunrise mountain summit background on the right */}
        <div className="pointer-events-none absolute top-0 right-0 h-full w-full lg:w-[50vw] max-w-[960px] select-none hidden lg:block -z-0">
          <img
            src={visionMountainImage}
            alt="Climber on Mountain Summit at Sunrise"
            className="h-full w-full object-cover object-center opacity-85"
          />
          {/* Smooth left & bottom gradient blending */}
          <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-[#FCFDFE] via-[#FCFDFE]/70 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#FCFDFE] to-transparent" />
          <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#FCFDFE]/60 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-14 xl:px-16 2xl:px-20 z-10">

          {/* Top Header Row with Left Title & Right Handwritten Calligraphy */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-2">

            {/* Left Header */}
            <div>
              <div className="flex items-center gap-2">
                <span className="inline-block w-6 h-0.5 bg-[#D9232A]" />
                <span className="text-[11px] font-black uppercase tracking-[0.24em] text-[#D9232A]">
                  OUR PURPOSE
                </span>
              </div>

              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#062141]">
                Vision <span className="text-[#D9232A]">&amp;</span> Mission
              </h2>

              <p className="mt-2 text-sm sm:text-base text-slate-600 font-medium max-w-xl">
                Guiding us towards a stronger, more sustainable tomorrow.
              </p>
            </div>

            {/* Right Handwritten Script */}
            <div className="select-none lg:text-right lg:pr-16 xl:pr-24 -mt-4 lg:mt-0 lg:-translate-y-14">
              <p className="font-['Caveat',cursive] text-2xl sm:text-3xl lg:text-4xl font-bold text-[#062141] leading-tight -rotate-2">
                Our Determination to Drive, <br />
                will Change <span className="text-[#D9232A] font-extrabold">&apos;THE WORLD&apos;</span>
              </p>
              <div className="w-36 sm:w-48 h-1 bg-[#D9232A] lg:ml-auto mt-1 rounded-full -rotate-2" />
            </div>

          </div>

          {/* Two Side-by-Side Cards (01 VISION & 02 MISSION) */}
          <div className="mt-10 sm:mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-5xl">

            {/* 01 VISION Card */}
            <div className="rounded-3xl border border-slate-100/90 bg-white/95 backdrop-blur-md p-6 sm:p-8 shadow-xl shadow-slate-200/50 flex flex-col sm:flex-row items-start gap-5 sm:gap-6 transition-transform hover:-translate-y-1 duration-300">
              {/* Left Circle Icon */}
              <div className="flex h-16 w-16 sm:h-20 sm:w-20 shrink-0 items-center justify-center rounded-full bg-rose-50 text-[#D9232A] border border-rose-100/80 shadow-sm">
                <svg
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-9 w-9 text-[#D9232A]"
                >
                  <circle cx="24" cy="24" r="16" stroke="#D9232A" strokeWidth="2.8" strokeLinecap="round" />
                  <circle cx="24" cy="24" r="10" stroke="#D9232A" strokeWidth="2.5" strokeLinecap="round" />
                  <circle cx="24" cy="24" r="4" fill="#D9232A" />
                  <path d="M34 14L40 8M40 8H35M40 8V13" stroke="#D9232A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              {/* Right Details */}
              <div className="flex-1">
                <span className="text-xs sm:text-sm font-black text-[#D9232A] block leading-none">
                  01
                </span>
                <h3 className="mt-1 text-xl sm:text-2xl font-black text-[#062141] tracking-tight">
                  VISION
                </h3>
                <div className="w-8 h-0.5 bg-[#D9232A] rounded-full mt-1 mb-3" />
                <p className="text-xs sm:text-[13.5px] leading-relaxed text-slate-600 font-medium">
                  &ldquo;To shape the future of global supply chains through innovative packaging, integrated logistics, and sustainable end-to-end solutions.&rdquo;
                </p>
              </div>
            </div>

            {/* 02 MISSION Card */}
            <div className="rounded-3xl border border-slate-100/90 bg-white/95 backdrop-blur-md p-6 sm:p-8 shadow-xl shadow-slate-200/50 flex flex-col sm:flex-row items-start gap-5 sm:gap-6 transition-transform hover:-translate-y-1 duration-300">
              {/* Left Circle Icon */}
              <div className="flex h-16 w-16 sm:h-20 sm:w-20 shrink-0 items-center justify-center rounded-full bg-rose-50 text-[#D9232A] border border-rose-100/80 shadow-sm">
                <svg
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-9 w-9 text-[#D9232A]"
                >
                  <path
                    d="M12 36L24 16L36 36H12Z"
                    stroke="#D9232A"
                    strokeWidth="2.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M24 16V10M24 10L30 13L24 16"
                    stroke="#D9232A"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="#D9232A"
                  />
                  <path
                    d="M21 36L24 28L27 36"
                    stroke="#D9232A"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Right Details */}
              <div className="flex-1">
                <span className="text-xs sm:text-sm font-black text-[#D9232A] block leading-none">
                  02
                </span>
                <h3 className="mt-1 text-xl sm:text-2xl font-black text-[#062141] tracking-tight">
                  MISSION
                </h3>
                <div className="w-8 h-0.5 bg-[#D9232A] rounded-full mt-1 mb-3" />
                <p className="text-xs sm:text-[13.5px] leading-relaxed text-slate-600 font-medium">
                  &ldquo;We are committed to strengthening our customers and partners and empowering our people through continual improvement and adoption of industry best practices.&rdquo;
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          3.5 OUR CERTIFICATIONS SECTION (Matching Reference Design)
         ========================================================================= */}
      <section className="relative overflow-hidden bg-white py-12 sm:py-16 lg:py-20 text-slate-900 border-t border-slate-100">

        {/* Right-Side Sustainable Earth & Leaves Graphic in Background */}
        <div className="pointer-events-none absolute -top-8 -right-8 h-full w-[380px] sm:w-[480px] lg:w-[560px] select-none opacity-20 lg:opacity-30 z-0 overflow-hidden">
          <img
            src={sustainableEarthImg}
            alt="Sustainable Earth Globe"
            className="h-full w-full object-contain object-right-top"
          />
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white via-white/50 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white to-transparent" />
        </div>

        <div className="relative mx-auto max-w-[1640px] px-4 sm:px-8 lg:px-12 xl:px-16 z-10">

          {/* Main Content Layout: Left Header + Wide Right 3 Certificate Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-12 items-center">

            {/* Left Header Column */}
            <div className="lg:col-span-4 xl:col-span-3 space-y-4">
              <div className="flex items-center gap-2">
                <span className="inline-block w-6 h-0.5 bg-[#D9232A]" />
                <span className="text-[11px] font-black uppercase tracking-[0.24em] text-[#D9232A]">
                  OUR CERTIFICATIONS
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[2.4rem] xl:text-[2.7rem] font-black tracking-tight text-[#062141] leading-[1.12]">
                Certified for a <br />
                <span className="text-[#D9232A]">Better Tomorrow</span>
              </h2>

              <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed max-w-sm">
                Our commitment to quality, safety and sustainability is validated by globally recognized certifications.
              </p>

          
            </div>

            {/* Right: 3 Large Prominent Certificate Display Cards with Click-to-Zoom */}
            <div className="lg:col-span-8 xl:col-span-9 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 xl:gap-6">
              {CERTIFICATES.map((cert, idx) => (
                <div
                  key={cert.id}
                  onClick={() => setZoomedCertIndex(idx)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setZoomedCertIndex(idx);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  className="group rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white p-3 sm:p-3.5 xl:p-4 shadow-xl shadow-slate-200/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-brand/40 cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand/40"
                  aria-label={`Zoom in on ${cert.title} certificate`}
                >
                  {/* Image Container with Zoom Badge overlay on hover */}
                  <div className="relative aspect-[3/3.85] w-full rounded-xl sm:rounded-2xl overflow-hidden bg-slate-50/40 border border-slate-100 flex items-center justify-center p-1 sm:p-1.5">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Hover Zoom Overlay Pill */}
                    <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 backdrop-blur-md px-3.5 py-1.5 text-[11px] font-black uppercase tracking-wider text-brand-blue-dark shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <ZoomIn className="h-3.5 w-3.5 text-brand" />
                        <span>Click to Zoom</span>
                      </span>
                    </div>
                  </div>

                  {/* Card Footer Details */}
                  <div className="mt-3 sm:mt-3.5 px-0.5">
                    <div className="w-5 h-0.5 bg-[#D9232A] rounded-full mb-1" />
                    <div className="flex items-center justify-between gap-1">
                      <h3 className="text-sm sm:text-[15px] xl:text-base font-black text-[#062141] leading-tight group-hover:text-brand transition-colors">
                        {cert.title}
                      </h3>
                      <ZoomIn className="h-3.5 w-3.5 text-slate-400 group-hover:text-brand transition-colors shrink-0" />
                    </div>
                    <p className="text-[11px] sm:text-xs text-slate-500 font-medium mt-0.5 leading-snug">
                      {cert.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        

        </div>
      </section>

      {/* 4. OUR VALUES (HOW WE WORK) */}
      <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24 text-slate-900 border-t border-slate-100">
        <div className="relative mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-14 xl:px-16 2xl:px-20">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.28em] text-brand">
                <span>OUR VALUES</span>
                <ChevronRight className="h-3.5 w-3.5 text-brand" />
              </div>

              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[2.75rem] font-black tracking-tight text-brand-blue-dark">
                How we work.
              </h2>
            </div>

            <p className="max-w-md text-xs sm:text-sm leading-relaxed text-slate-600 font-medium">
              Five principles that keep every decision grounded, every relationship trusted and every outcome accountable.
            </p>
          </div>

          {/* 5 Values Cards Grid */}
          <div className="mt-12 sm:mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {VALUES_LIST.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.step}
                  className="group rounded-3xl border border-slate-200/90 bg-white p-6 shadow-[0_4px_16px_-4px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/40 hover:shadow-xl flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-black text-slate-300 group-hover:text-brand transition-colors">
                      {val.step}
                    </span>
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-rose-50 text-brand shadow-sm transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-4.5 w-4.5 stroke-[2]" />
                    </div>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-base sm:text-lg font-black text-brand-blue-dark group-hover:text-brand transition-colors">
                      {val.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-[13px] leading-relaxed text-slate-600 font-medium">
                      {val.body}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. OUR EVOLUTION */}
      <section className="relative overflow-hidden bg-[#F8FAFC] py-18 sm:py-22 lg:py-26 text-slate-900 border-t border-slate-100" aria-labelledby="about-evolution-title">
        {/* Subtle background glow */}
        <div className="pointer-events-none absolute right-10 top-0 h-96 w-96 rounded-full bg-rose-100/40 blur-3xl" />
        <div className="pointer-events-none absolute left-0 bottom-0 h-80 w-80 rounded-full bg-slate-200/50 blur-3xl" />

        <div className="relative mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-14 xl:px-16 2xl:px-20">
          {/* Header Row */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-[700px]">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.28em] text-brand">
                <span>OUR EVOLUTION</span>
                <ChevronRight className="h-3.5 w-3.5 text-brand" />
              </div>

              <h2
                id="about-evolution-title"
                className="mt-3.5 text-3xl sm:text-4xl lg:text-[2.85rem] xl:text-[3.25rem] font-black tracking-tight leading-[1.08] text-brand-blue-dark"
              >
                Built through experience. <br />
                <span className="text-brand">Driven by evolution.</span>
              </h2>
            </div>

            <p className="max-w-[500px] text-xs sm:text-sm lg:text-base leading-relaxed text-slate-600 font-medium pb-1">
              From making packaging products to managing complete packaging ecosystems — each capability builds on the one before it.
            </p>
          </div>

          {/* 8 Step Cards with Timeline Rail */}
          <div className="relative mt-14 sm:mt-16">
            {/* Horizontal Timeline Connector Line (Visible on lg screens) */}
            <div className="hidden lg:block absolute top-[6px] left-6 right-6 h-[2px] bg-gradient-to-r from-brand/40 via-brand to-brand/40 z-0" />

            <div className="grid gap-4 sm:gap-4.5 grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 relative z-10">
              {EVOLUTION_CARDS.map((card) => (
                <div key={card.step} className="flex flex-col items-center group">
                  {/* Step Dot Node with Ping & Ring on Hover */}
                  <div className="relative mb-3.5 flex items-center justify-center">
                    <span className="h-3.5 w-3.5 rounded-full bg-brand ring-4 ring-white shadow-md shadow-brand/30 transition-transform duration-300 group-hover:scale-125" />
                  </div>

                  {/* Step Card */}
                  <div className="w-full rounded-2xl border border-slate-200/90 bg-white p-5 shadow-[0_4px_16px_-4px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-2 hover:border-brand hover:shadow-xl flex flex-col justify-between min-h-[175px] sm:min-h-[190px]">
                    <div>
                      <span className="text-xs sm:text-sm font-black text-brand tracking-wider block">
                        {card.step}
                      </span>
                      <h3 className="mt-3 text-xs sm:text-sm font-bold text-brand-blue-dark leading-snug group-hover:text-brand transition-colors">
                        {card.title}
                      </h3>
                    </div>

                    <div className="mt-4 flex items-center justify-end">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-rose-50 text-brand transition-all duration-300 group-hover:bg-brand group-hover:text-white group-hover:translate-x-1">
                        <ArrowRight className="h-3.5 w-3.5" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Ecosystem Spectrum Breadcrumb */}
          <div className="mt-12 sm:mt-14 flex justify-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-3 sm:gap-4 rounded-full border border-slate-200/80 bg-white px-6 sm:px-8 py-3 text-xs sm:text-sm font-black uppercase tracking-[0.24em] text-slate-600 shadow-sm select-none">
              <span className="hover:text-brand transition-colors">PRODUCTS</span>
              <span className="h-1.5 w-1.5 rounded-full bg-brand inline-block" />
              <span className="hover:text-brand transition-colors">SOLUTIONS</span>
              <span className="h-1.5 w-1.5 rounded-full bg-brand inline-block" />
              <span className="text-brand font-black">MANAGED ECOSYSTEMS</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. VALIDATED PROOF */}
      <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24 text-slate-900 border-t border-slate-100">
        <div className="relative mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-14 xl:px-16 2xl:px-20">
          <div className="max-w-[600px]">
            <div className="flex items-center gap-2.5 text-xs font-black uppercase tracking-[0.28em] text-brand">
              <span className="h-1 w-8 bg-brand inline-block rounded-full" />
              VALIDATED PROOF
            </div>

            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[2.6rem] font-black tracking-tight text-brand-blue-dark">
              Experience you can verify
            </h2>
          </div>

          {/* 5 Verified Metric Cards */}
          <div className="mt-10 sm:mt-12 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {VERIFIED_STATS.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="group rounded-3xl border border-slate-200/90 bg-white p-6 shadow-[0_6px_20px_-4px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-brand/40 flex flex-col items-center text-center"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-rose-50 text-brand shadow-sm transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-5 w-5 stroke-[2]" />
                  </div>

                  <span className="mt-4 text-3xl sm:text-4xl font-black text-brand tracking-tight">
                    {stat.value}
                  </span>

                  <span className="mt-2 text-[11px] font-black uppercase tracking-[0.2em] text-slate-600">
                    {stat.label}
                  </span>
                </div>
              );
            })}
          </div>

          <p className="mt-6 text-right text-[11px] text-slate-400 font-medium">
            * As per latest available data
          </p>
        </div>
      </section>

      {/* 7. WORLD EXPANSION MAP (PAN-INDIA & GLOBAL NETWORK) */}
      <WorldExpansionMap />

      {/* =========================================================================
          CERTIFICATE ZOOM LIGHTBOX MODAL
         ========================================================================= */}
      {zoomedCertIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setZoomedCertIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Certificate Preview"
        >
          {/* Modal Card Content (stops click propagation so clicking inside doesn't close) */}
          <div
            className="relative max-w-lg sm:max-w-xl md:max-w-2xl w-full max-h-[92vh] bg-white rounded-3xl p-3.5 sm:p-5 shadow-2xl flex flex-col items-stretch border border-slate-100 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-2.5 sm:pb-3 border-b border-slate-100 shrink-0">
              <div className="flex items-center gap-2.5">
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-rose-50 text-[#D9232A] text-[10px] font-black uppercase tracking-wider border border-rose-100/80">
                  {CERTIFICATES[zoomedCertIndex].tag}
                </span>
                <div>
                  <h3 className="text-sm sm:text-base font-black text-[#062141] leading-tight">
                    {CERTIFICATES[zoomedCertIndex].title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-500 font-medium">
                    {CERTIFICATES[zoomedCertIndex].subtitle}
                  </p>
                </div>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setZoomedCertIndex(null)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors hover:bg-rose-50 hover:text-[#D9232A] focus:outline-none focus:ring-2 focus:ring-rose-500/40"
                aria-label="Close zoomed view"
              >
                <X className="h-4.5 w-4.5 stroke-[2.2]" />
              </button>
            </div>

            {/* High-Resolution Certificate Zoomed Preview (Fit whole document snugly) */}
            <div className="relative w-full flex-1 min-h-0 flex items-center justify-center my-2 sm:my-3 bg-slate-50/50 rounded-2xl p-1.5 sm:p-2.5 border border-slate-100/80 overflow-hidden">
              <img
                src={CERTIFICATES[zoomedCertIndex].image}
                alt={CERTIFICATES[zoomedCertIndex].title}
                className="max-h-[60vh] sm:max-h-[68vh] w-auto h-auto max-w-full object-contain rounded-lg shadow-md"
              />
            </div>

            {/* Modal Footer Controls (Prev, Indicators, Next) */}
            <div className="flex items-center justify-between pt-2.5 sm:pt-3 border-t border-slate-100 shrink-0">
              {/* Previous Button */}
              <button
                type="button"
                onClick={() =>
                  setZoomedCertIndex((prev) =>
                    prev !== null ? (prev - 1 + CERTIFICATES.length) % CERTIFICATES.length : null
                  )
                }
                className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs font-bold text-slate-700 shadow-sm transition-all hover:border-[#D9232A] hover:text-[#D9232A] hover:bg-rose-50/50"
              >
                <ChevronLeft className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                <span className="hidden sm:inline">Previous</span>
              </button>

              {/* Dot / Indicator Pills */}
              <div className="flex items-center gap-2 select-none">
                {CERTIFICATES.map((cert, idx) => (
                  <button
                    key={cert.id}
                    type="button"
                    onClick={() => setZoomedCertIndex(idx)}
                    className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 ${idx === zoomedCertIndex
                        ? "w-6 sm:w-7 bg-[#D9232A]"
                        : "w-2 sm:w-2.5 bg-slate-200 hover:bg-slate-300"
                      }`}
                    aria-label={`View ${cert.title}`}
                  />
                ))}
                <span className="ml-1 sm:ml-2 text-[10.5px] sm:text-[11px] font-bold text-slate-400">
                  {zoomedCertIndex + 1} of {CERTIFICATES.length}
                </span>
              </div>

              {/* Next Button */}
              <button
                type="button"
                onClick={() =>
                  setZoomedCertIndex((prev) =>
                    prev !== null ? (prev + 1) % CERTIFICATES.length : null
                  )
                }
                className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs font-bold text-slate-700 shadow-sm transition-all hover:border-[#D9232A] hover:text-[#D9232A] hover:bg-rose-50/50"
              >
                <span className="hidden sm:inline">Next</span>
                <ChevronRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </SiteLayout>
  );
}
