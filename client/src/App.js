import React, { useState, useRef, useEffect } from "react";
import "./styles.css";
import heroSlide0 from "./hero-slide-0.jpg";
import heroSlide1 from "./hero-slide-1.jpg";
import heroSlide2 from "./hero-slide-2.jpg";
import omAudio from "./Omkaar(Dhun) (mp3cut.net).mp3";
import aboutAcademyImg from "./about-academy.jpg";
import jasrajInspirationImg from "./pandit-jasraj-inspiration.jpg";
import jasrajGuruImg from "./pandit-jasraj-guru.png";
import chandraBanerjeeImg from "./chandra-banerjee.jpg";
import sougataBanerjeeImg from "./sougata-banerjee.jpg";
import logoImg from "./logo.svg";
import slHeroImg from "./sl-hero.jpg";
import slLearningImg from "./sl-learning.jpg";
import slRiyazImg from "./sl-riyaz.jpg";
import slIndependenceDayImg from "./sl-independence-day.jpg";
import slGaneshFestivalImg from "./sl-ganesh-festival.jpg";
import slAnnualProgrammeImg from "./sl-annual-programme.jpg";
import slCertificateImg from "./sl-certificate.jpg";
import slGallery1Img from "./sl-gallery-1.jpg";
import slGallery2Img from "./sl-gallery-2.jpg";
import slGallery3Img from "./sl-gallery-3.jpg";
import slGallery4Img from "./sl-gallery-4.jpg";
import slGallery5Img from "./sl-gallery-5.jpg";
import slGallery6Img from "./sl-gallery-6.jpg";
import slStageImg from "./sl-stage.jpg";
import guruPurnimaGroupImg from "./guru-purnima-group.jpg";
import guruPurnimaChandraImg from "./guru-purnima-chandra.jpg";
import guruPurnimaSougataImg from "./guru-purnima-sougata.jpg";
import guruPurnimaEaselImg from "./guru-purnima-easel.jpg";
import apLampLightingImg from "./annual-programme-lamp-lighting.jpg";
import apVocalPerfImg from "./annual-programme-vocal-performance.jpg";
import apGuestFelicitationImg from "./annual-programme-guest-felicitation.jpg";
import apGroupSingingImg from "./annual-programme-group-singing.jpg";
import apStageFelicitationImg from "./annual-programme-stage-felicitation.jpg";
import apDiscipleFelicitationImg from "./annual-programme-disciple-felicitation.jpg";
import apChoirPerfImg from "./annual-programme-choir-performance.jpg";
import apChoirWideImg from "./annual-programme-choir-wide.jpg";
import apDisciplesAwardGroupImg from "./annual-programme-disciples-award-group.jpg";
import apYoungDiscipleAwardImg from "./annual-programme-young-disciple-award.jpg";
import apTrioSingingImg from "./annual-programme-trio-singing.jpg";
import apStageAnchorImg from "./annual-programme-stage-anchor.jpg";
import apGuitarPerfImg from "./annual-programme-guitar-performance.jpg";
import idChoirImg from "./independence-day-choir.png";
import idGal01 from "./id-gallery-01.png";
import idGal02 from "./id-gallery-02.png";
import idGal03 from "./id-gallery-03.png";
import idGal04 from "./id-gallery-04.png";
import idGal05 from "./id-gallery-05.png";
import idGal06 from "./id-gallery-06.png";
import idGal07 from "./id-gallery-07.png";
import idGal08 from "./id-gallery-08.png";
import idGal09 from "./id-gallery-09.png";
import idGal10 from "./id-gallery-10.png";
import idGal11 from "./id-gallery-11.png";
import idGal12 from "./id-gallery-12.png";


const slidesData = [
  {
    image: heroSlide0,
    title: "Swar Sadhana",
    subtitle: "A Centre for Indian Classical Music",
    description: "Preserving the Guru-Shishya tradition through music, discipline, and devotion.",
  },
  {
    image: heroSlide1,
    title: "Learn Under Expert Guidance",
    subtitle: "Indian Classical Music Training",
    description: "Structured vocal music education for students of all ages, guided by experienced teachers and rooted in tradition.",
  },
  {
    image: heroSlide2,
    title: "Performance & Expression",
    subtitle: "Learning Beyond the Classroom",
    description: "Students participate in annual functions, cultural events, workshops, and live performances throughout the year.",
  },
];

function SectionDivider() {
  return (
    <div className="section-divider">
      <div className="ornamental-divider">
        <span className="divider-diamond"></span>
      </div>
    </div>
  );
}

function useSLFadeIn() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined" || !window.IntersectionObserver) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return [ref, visible];
}

function StudentLifePage() {
  const [ref1, vis1] = useSLFadeIn();
  const [ref2, vis2] = useSLFadeIn();
  const [ref3, vis3] = useSLFadeIn();
  const [ref4, vis4] = useSLFadeIn();
  const [ref5, vis5] = useSLFadeIn();
  const [ref6, vis6] = useSLFadeIn();
  const [ref7, vis7] = useSLFadeIn();
  const [refGallery, visGallery] = useSLFadeIn();
  const [lightboxImg, setLightboxImg] = useState(null);

  const galleryImages = [
    { src: slGallery1Img, alt: "Founder's Open Mic Performance", span: "wide" },
    { src: slGallery2Img, alt: "Nurturing Young Talent", span: "normal" },
    { src: slGallery3Img, alt: "Guest Performance", span: "normal" },
    { src: slGallery4Img, alt: "Young Students Stage Performance", span: "wide" },
    { src: slGallery5Img, alt: "Student Achievement", span: "normal" },
    { src: slGallery6Img, alt: "25th Year Celebration Stage Group", span: "normal" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="sl-hero-section">
        <div className="sl-hero-bg" style={{ backgroundImage: `url(${slHeroImg})` }}></div>
        <div className="sl-hero-overlay"></div>
        <div className="sl-hero-content">
          <span className="sl-hero-label">THE JOURNEY OF A STUDENT</span>
          <h2 className="sl-hero-title">Student Life & Riyaz</h2>
          <p className="sl-hero-desc">
            Every lesson, every Riyaz, every performance, and every celebration becomes a step in a student's musical journey.
          </p>
        </div>
      </section>

      {/* Section 1: Learning Together */}
      <section ref={ref1} className={`section sl-story-section fade-in-section ${vis1 ? "is-visible" : ""}`}>
        <div className="sl-section-label-wrapper"><span className="sl-section-label">THE CLASSROOM</span></div>
        <h3 className="sl-section-heading">Learning Together</h3>
        <div className="split-layout align-center">
          <div className="sl-image-frame">
            <img src={slLearningImg} alt="Students Learning Together in Classroom" className="sl-section-photo" />
          </div>
          <div className="split-text">
            <p>
              Students learn through the Guru–Shishya tradition in an environment that encourages discipline, listening, patience and musical excellence. Every class is a place where learning extends beyond music into values and character.
            </p>
          </div>
        </div>
        <SectionDivider />
      </section>

      {/* Section 2: The Importance of Riyaz */}
      <section ref={ref2} className={`section sl-story-section sl-dark fade-in-section ${vis2 ? "is-visible" : ""}`} style={{ background: "#050816" }}>
        <div className="sl-section-label-wrapper"><span className="sl-section-label">DAILY PRACTICE</span></div>
        <h3 className="sl-section-heading">The Importance of Riyaz</h3>
        <div className="split-layout align-center sl-reverse">
          <div className="split-text">
            <p>
              Regular Riyaz develops voice control, confidence, concentration and expression. Every student is encouraged to practice consistently under the guidance of experienced teachers.
            </p>
            <div className="sl-quote-card">
              <p className="sl-quote-card-text">"Daily Riyaz transforms effort into music."</p>
            </div>
          </div>
          <div className="sl-image-frame">
            <img src={slRiyazImg} alt="Students Practicing Riyaz with Tanpura" className="sl-section-photo" />
          </div>
        </div>
        <SectionDivider />
      </section>

      {/* Section 3: Celebrating Every Festival */}
      <section ref={ref3} className={`section sl-story-section fade-in-section ${vis3 ? "is-visible" : ""}`}>
        <div className="sl-section-label-wrapper"><span className="sl-section-label">CULTURE & CELEBRATION</span></div>
        <h3 className="sl-section-heading">Celebrating Every Festival</h3>
        <div className="sl-festival-gallery">
          <div className="sl-festival-large">
            <img src={slIndependenceDayImg} alt="Independence Day Celebration" />
            <div className="sl-festival-caption">Independence Day</div>
          </div>
          <div className="sl-festival-stack">
            <div className="sl-festival-small">
              <img src={slGaneshFestivalImg} alt="Ganesh Festival Celebration" />
              <div className="sl-festival-caption">Ganesh Festival</div>
            </div>
            <div className="sl-festival-small">
              <img src={guruPurnimaGroupImg} alt="Guru Purnima Celebration" />
              <div className="sl-festival-caption">Guru Purnima Celebration</div>
            </div>
          </div>
        </div>
        <SectionDivider />
      </section>

      {/* Section 4: From Classroom to Stage */}
      <section ref={ref4} className={`sl-cinematic-section fade-in-section ${vis4 ? "is-visible" : ""}`}>
        <div className="sl-cinematic-bg" style={{ backgroundImage: `url(${slStageImg})` }}></div>
        <div className="sl-cinematic-overlay"></div>
        <div className="sl-cinematic-content">
          <span className="sl-section-label" style={{ color: "var(--color-accent)" }}>THE STAGE</span>
          <h3 className="sl-cinematic-title">From Classroom to Stage</h3>
          <p className="sl-cinematic-desc">
            Months of dedicated Riyaz culminate in performances where students confidently present Indian Classical Music before audiences.
          </p>
        </div>
      </section>

      {/* Section 5: Annual Musical Programme */}
      <section ref={ref5} className={`section sl-story-section sl-dark fade-in-section ${vis5 ? "is-visible" : ""}`} style={{ background: "#050816" }}>
        <div className="sl-section-label-wrapper"><span className="sl-section-label">THE HIGHLIGHT</span></div>
        <h3 className="sl-section-heading">Annual Musical Programme</h3>
        <div className="split-layout align-center">
          <div className="split-text">
            <p>
              The annual programme is our biggest celebration where students showcase everything they have learned throughout the year.
            </p>
          </div>
          <div className="sl-image-frame sl-gold-border-anim">
            <img src={slAnnualProgrammeImg} alt="Aaj To Ananda Ananda Annual Programme" className="sl-section-photo" />
          </div>
        </div>
        <SectionDivider />
      </section>

      {/* Section 6: Music for Every Generation */}
      <section ref={ref6} className={`section sl-story-section fade-in-section ${vis6 ? "is-visible" : ""}`}>
        <div className="sl-section-label-wrapper"><span className="sl-section-label">ALL AGES WELCOME</span></div>
        <h3 className="sl-section-heading">Music Has No Age</h3>
        <div className="split-layout align-center sl-reverse">
          <div className="split-text">
            <p>
              Swar Sadhana welcomes children, teenagers and adults, creating a lifelong community of learners united through music.
            </p>
          </div>
          <div className="sl-image-frame">
            <img src={slRiyazImg} alt="Adult Students Learning Music" className="sl-section-photo" />
          </div>
        </div>
        <SectionDivider />
      </section>

      {/* Section 7: Recognising Achievement */}
      <section ref={ref7} className={`section sl-story-section sl-dark fade-in-section ${vis7 ? "is-visible" : ""}`} style={{ background: "#050816" }}>
        <div className="sl-section-label-wrapper"><span className="sl-section-label">ACHIEVEMENT</span></div>
        <h3 className="sl-section-heading">Recognising Achievement</h3>
        <div className="sl-glass-card-layout">
          <div className="sl-glass-card">
            <img src={slCertificateImg} alt="Certificate Ceremony" className="sl-glass-card-img" />
            <div className="sl-glass-card-text">
              <p>
                Every certificate represents years of dedication, disciplined practice and commitment to Indian Classical Music.
              </p>
            </div>
          </div>
        </div>
        <SectionDivider />
      </section>

      {/* Final Gallery */}
      <section ref={refGallery} className={`section sl-story-section fade-in-section ${visGallery ? "is-visible" : ""}`}>
        <div className="sl-section-label-wrapper"><span className="sl-section-label">MEMORIES</span></div>
        <h3 className="sl-section-heading">Gallery</h3>
        <div className="sl-gallery-grid">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className={`sl-gallery-item ${img.span === "wide" ? "sl-gallery-wide" : ""}`}
              onClick={() => setLightboxImg(img.src)}
            >
              <img src={img.src} alt={img.alt} />
            </div>
          ))}
        </div>
      </section>

      {/* Ending Quote */}
      <section className="section sl-ending-quote-section" style={{ background: "#050816" }}>
        <div className="sl-ending-quote">
          <p className="sl-ending-quote-text">
            "Music is not learned in a day. It is lived every day through Riyaz."
          </p>
          <div className="ornamental-divider">
            <span className="divider-diamond"></span>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImg && (
        <div className="sl-lightbox" onClick={() => setLightboxImg(null)}>
          <button className="sl-lightbox-close" onClick={() => setLightboxImg(null)} aria-label="Close lightbox">&times;</button>
          <img src={lightboxImg} alt="Enlarged view" className="sl-lightbox-img" />
        </div>
      )}
    </>
  );
}

const upcomingEvents = [];

const pastEvents = [
  {
    id: "annual-programme-2026",
    title: "Annual Programme 2026",
    subtitle: "Aaj To Anand Anand - 25th Year Celebration",
    date: "Annual Concert",
    category: "Annual Concert",
    tag: "ANNUAL CONCERT",
    time: "6:00 PM Onwards",
    venue: "Swar Sadhana Auditorium, Mumbai",
    image: slAnnualProgrammeImg,
    description: "The annual flag-ship programme of Swar Sadhana where disciples of all ages showcase their year-long Riyaz and classical vocal mastery on stage.",
    highlights: [
      "Group & Solo Classical Vocal Recitals",
      "Special Performances by Senior Disciples",
      "Felicitation & Certificate Distribution",
    ],
    images: [
      { src: apLampLightingImg, alt: "Traditional Lamp Lighting Ceremony with Ganesha Idol" },
      { src: apVocalPerfImg, alt: "Classical Vocal Performance with Tabla & Tanpura Accompaniment" },
      { src: apGroupSingingImg, alt: "Group Classical Vocal Performance by Disciples & Teachers" },
      { src: apTrioSingingImg, alt: "Classical Vocal Trio Recital on Stage" },
      { src: apGuitarPerfImg, alt: "Acoustic Guitar & Vocal Live Recital" },
      { src: apStageAnchorImg, alt: "Annual Programme Stage Host & Anchor Address" },
      { src: apChoirPerfImg, alt: "Stage Classical Vocal Ensemble Performance" },
      { src: apChoirWideImg, alt: "Grand Disciples Choir Performance on Stage" },
      { src: apGuestFelicitationImg, alt: "Honouring Distinguished Guests on Stage" },
      { src: apDiscipleFelicitationImg, alt: "Honouring Disciples with Flower Bouquet" },
      { src: apYoungDiscipleAwardImg, alt: "Felicitation of Young Disciples on Stage" },
      { src: apDisciplesAwardGroupImg, alt: "Group Photo of Awardees and Performers on Stage" },
      { src: apStageFelicitationImg, alt: "Grand Stage Felicitation & Artist Honouring" },
      { src: slRiyazImg, alt: "Daily Riyaz & Vocal Practice Session" },
      { src: slStageImg, alt: "Stage Performance & Riyaz Culmination" },
      { src: slGallery4Img, alt: "Young Students Stage Performance" },
    ],
  },
  {
    id: "guru-purnima-2026",
    title: "Guru Purnima Celebration",
    subtitle: "Sacred Guru-Shishya Parampara & Musical Baithak",
    date: "July 2026",
    category: "Tradition & Devotion",
    tag: "TRADITION & DEVOTION",
    time: "5:30 PM Onwards",
    venue: "Swar Sadhana Academy, Mumbai",
    image: guruPurnimaGroupImg,
    description: "A sacred evening celebrating the Guru-Shishya tradition with devotional compositions, classical recitals, and tributes to Sangeet Martand Pt. Jasraj Ji.",
    highlights: [
      "Guru Vandana & Devotional Stotrams by Disciples",
      "Harmonium & Classical Recital by Smt. Chandra Banerjee",
      "Vocal Performance & Bandishes by Shri Sougata Banerjee",
      "Blessings & Student Group Showcase",
    ],
    images: [
      { src: guruPurnimaGroupImg, alt: "Swar Sadhana Disciples & Teachers Group" },
      { src: guruPurnimaChandraImg, alt: "Smt. Chandra Banerjee playing Harmonium" },
      { src: guruPurnimaSougataImg, alt: "Shri Sougata Banerjee singing Classical Recital" },
      { src: guruPurnimaEaselImg, alt: "Guru Purnima Celebration Altar & Saraswati Portrait" },
    ],
  },
  {
    id: "independence-day-2026",
    title: "Independence Day Celebration",
    subtitle: "Patriotic Ragas, Flag Hoisting & Vande Mataram Chorus",
    date: "15th August",
    category: "National Celebration",
    tag: "NATIONAL CELEBRATION",
    time: "9:00 AM Onwards",
    venue: "Swar Sadhana Campus, Mumbai",
    image: idChoirImg,
    description: "Commemorating India's independence with patriotic ragas, Vande Mataram choruses, and uplifting classical performances by young disciples.",
    highlights: [
      "Flag Hoisting & National Anthem",
      "Patriotic Ragas & Vande Mataram Choruses",
      "Classical Vocal Recitals by Young Disciples",
    ],
    images: [
      { src: idChoirImg, alt: "Young Disciples Choir Singing Patriotic Songs & Vande Mataram" },
      { src: idGal01, alt: "Independence Day Celebration Performance" },
      { src: idGal02, alt: "Patriotic Ragas & Group Recital" },
      { src: idGal03, alt: "Independence Day Musical Recital" },
      { src: idGal04, alt: "Young Disciples Patriotic Songs Performance" },
      { src: idGal05, alt: "Students Independence Day Celebration" },
      { src: idGal06, alt: "Patriotic Vocal Recital by Disciples" },
      { src: idGal07, alt: "Independence Day Celebration Stage Group" },
      { src: idGal08, alt: "Swar Sadhana Disciples Patriotic Chorus" },
      { src: idGal09, alt: "Independence Day Cultural Performance" },
      { src: idGal10, alt: "Patriotic Songs & Music Performance" },
      { src: idGal11, alt: "Young Disciples Flag & Patriotic Recital" },
      { src: idGal12, alt: "Independence Day Disciples Group Performance" },
      { src: slIndependenceDayImg, alt: "Independence Day Celebration at Swar Sadhana" },
    ],
  },
];

function App() {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [activeGalleryEvent, setActiveGalleryEvent] = useState(null);
  const [eventLightboxImg, setEventLightboxImg] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setActiveGalleryEvent(null);
    setIsMobileMenuOpen(false);
  }, [currentPage]);

  useEffect(() => {
    if (typeof window !== "undefined" && window.scrollTo && process.env.NODE_ENV !== "test") {
      window.scrollTo(0, 0);
    }
  }, [currentPage]);

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % slidesData.length);
  };

  const handlePrev = () => {
    setActiveSlide((prev) => (prev - 1 + slidesData.length) % slidesData.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [activeSlide]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState({ type: "", message: "" });
  const audioRef = useRef(null);
  const aboutRef = useRef(null);
  const [isAboutVisible, setIsAboutVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !window.IntersectionObserver) {
      setIsAboutVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsAboutVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const guruRef = useRef(null);
  const [isGuruVisible, setIsGuruVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !window.IntersectionObserver) {
      setIsGuruVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsGuruVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (guruRef.current) {
      observer.observe(guruRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const inspirationRef = useRef(null);
  const [isInspirationVisible, setIsInspirationVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !window.IntersectionObserver) {
      setIsInspirationVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInspirationVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (inspirationRef.current) {
      observer.observe(inspirationRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const handleAudioToggle = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isAudioPlaying) {
      audio.pause();
      setIsAudioPlaying(false);
    } else {
      audio
        .play()
        .then(() => setIsAudioPlaying(true))
        .catch(() => {
          setFormStatus({
            type: "error",
            message: "Unable to play audio. Please check your browser settings.",
          });
        });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ type: "", message: "" });

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send enquiry");
      }

      setFormStatus({
        type: "success",
        message: "Thank you for your enquiry. We will get back to you soon.",
      });
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      setFormStatus({
        type: "error",
        message: "Something went wrong. Please try again later.",
      });
    }
  };

  return (
    <div className="app">
      <audio
        ref={audioRef}
        loop
        src={omAudio}
      />

      <header className="header">
        <div className="logo-container" onClick={() => { setCurrentPage("home"); setIsMobileMenuOpen(false); }}>
          <img src={logoImg} alt="Swar Sadhana Logo" className="navbar-logo" />
          <span className="logo-text">Swar Sadhana</span>
        </div>
        <nav className={`nav-menu ${isMobileMenuOpen ? "mobile-open" : ""}`}>
          <button className={`nav-link ${currentPage === "home" ? "active" : ""}`} onClick={() => { setCurrentPage("home"); setIsMobileMenuOpen(false); }}>Home</button>
          <button className={`nav-link ${currentPage === "student-life" ? "active" : ""}`} onClick={() => { setCurrentPage("student-life"); setIsMobileMenuOpen(false); }}>Student Life</button>
          <button className={`nav-link ${currentPage === "events" ? "active" : ""}`} onClick={() => { setCurrentPage("events"); setIsMobileMenuOpen(false); }}>Events</button>
          <button className={`nav-link ${currentPage === "recognition" ? "active" : ""}`} onClick={() => { setCurrentPage("recognition"); setIsMobileMenuOpen(false); }}>Recognition</button>
          <button className={`nav-link ${currentPage === "publications" ? "active" : ""}`} onClick={() => { setCurrentPage("publications"); setIsMobileMenuOpen(false); }}>Publications</button>
          <button className={`nav-link ${currentPage === "contact" ? "active" : ""}`} onClick={() => { setCurrentPage("contact"); setIsMobileMenuOpen(false); }}>Contact us</button>
        </nav>
        <div className="header-right-actions">
          <button className="audio-toggle" onClick={handleAudioToggle} aria-label={isAudioPlaying ? "Mute audio" : "Play audio"}>
            {isAudioPlaying ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                <line x1="23" y1="9" x2="17" y2="15" />
                <line x1="17" y1="9" x2="23" y2="15" />
              </svg>
            )}
          </button>
          <button
            className="mobile-hamburger-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {isMobileMenuOpen ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </header>

      <main>
        {currentPage === "home" && (
          <>
            {/* 1. Hero Section */}
            <section className="hero">
              <div className="hero-slider">
                {slidesData.map((slide, index) => (
                  <div
                    key={index}
                    className={`hero-slide ${index === activeSlide ? "active" : ""}`}
                  >
                    <div
                      className="hero-slide-bg"
                      style={{
                        backgroundImage: `linear-gradient(rgba(15, 16, 21, 0.2), rgba(15, 16, 21, 0.45)), url(${slide.image})`,
                      }}
                    />
                    <div className="hero-slide-content">
                      <span className="hero-slide-subtitle">{slide.subtitle}</span>
                      {index === 0 ? (
                        <h1 className="hero-slide-title">{slide.title}</h1>
                      ) : (
                        <h2 className="hero-slide-title">{slide.title}</h2>
                      )}
                      <p className="hero-slide-description">{slide.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button
                className="slider-arrow prev"
                onClick={handlePrev}
                aria-label="Previous slide"
              >
                &#10094;
              </button>
              <button
                className="slider-arrow next"
                onClick={handleNext}
                aria-label="Next slide"
              >
                &#10095;
              </button>
              <div className="slider-dots">
                {slidesData.map((_, index) => (
                  <button
                    key={index}
                    className={`slider-dot ${index === activeSlide ? "active" : ""}`}
                    onClick={() => setActiveSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </section>
            <SectionDivider />

            {/* OUR INSPIRATION: Pandit Jasraj Ji */}
            <section
              ref={inspirationRef}
              className={`section inspiration-section fade-in-section ${isInspirationVisible ? "is-visible" : ""}`}
              style={{ background: "#050816" }}
            >
              {/* Subtle Decorative Mandala Outline Background */}
              <div className="bg-mandala-container">
                <svg className="bg-mandala-svg" width="500" height="500" viewBox="0 0 200 200" fill="none" stroke="rgba(212, 175, 55, 0.025)" strokeWidth="0.5">
                  <circle cx="100" cy="100" r="90" />
                  <circle cx="100" cy="100" r="70" />
                  <circle cx="100" cy="100" r="50" />
                  <polygon points="100,10 120,60 170,60 130,100 150,150 100,120 50,150 70,100 30,60 80,60" />
                  <polygon points="100,30 112,72 150,72 120,100 135,138 100,115 65,138 80,100 50,72 88,72" transform="rotate(18, 100, 100)" />
                </svg>
              </div>

              {/* Subtle Decorative Tanpura Outline Background */}
              <svg className="bg-tanpura-svg" width="220" height="660" viewBox="0 0 100 300" fill="none" stroke="rgba(212, 175, 55, 0.025)" strokeWidth="0.75">
                <path d="M50,10 L50,230 M45,230 C45,260 55,260 55,230 Z" />
                <circle cx="50" cy="250" r="25" />
                <path d="M48,15 L52,15 M48,25 L52,25 M48,35 L52,35 M48,45 L52,45" />
                <path d="M46,230 L54,230" />
              </svg>

              <div className="split-layout align-center">
                {/* Left Column: Image in Circular Frame with Golden Glow */}
                <div className="inspiration-image-container">
                  <div className="inspiration-photo-frame">
                    <div className="gold-radial-glow"></div>
                    <img
                      src={jasrajInspirationImg}
                      alt="Pandit Jasraj Ji Portrait"
                      className="inspiration-photo"
                    />
                  </div>
                </div>

                {/* Right Column: Content */}
                <div className="inspiration-text-container">
                  <div className="inspiration-label-wrapper">
                    <span className="inspiration-label">OUR INSPIRATION </span>
                  </div>
                  <h3 className="inspiration-title">Pandit Jasraj Ji</h3>
                  <div className="inspiration-paragraphs">
                    <p>
                      Padma Vibhushan Sangeet Martand Pandit Jasraj Ji dedicated his life to preserving, promoting, and popularizing Indian Classical Music across the world. Through his music and teachings, he envisioned a future where the timeless values of the Guru–Shishya tradition would continue to inspire generations of learners.
                    </p>
                    <p>
                      His dream was to establish Gurukul-style music education that nurtures not only artistic excellence but also discipline, harmony, cultural awareness, and inner growth. Swar Sadhana draws inspiration from this vision and strives to carry forward his legacy through sincere training, devotion to the art, and respect for tradition.
                    </p>
                  </div>

                  {/* Highlight Quote */}
                  <div className="inspiration-quote-box">
                    <p className="inspiration-quote-text">
                      "His dream was to establish Gurukul-style schools throughout the world, preserving our cultural heritage and preparing future generations through music."
                    </p>
                  </div>
                </div>
              </div>

              {/* Cards Grid */}
              <div className="inspiration-cards-grid">
                <div className="inspiration-card">
                  <div className="inspiration-card-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2l3 6h6l-5 4 2 6-6-4-6 4 2-6-5-4h6z" />
                      <circle cx="12" cy="11" r="2" />
                    </svg>
                  </div>
                  <span className="inspiration-card-title">Padma Vibhushan</span>
                  <span className="inspiration-card-desc">India's Second Highest Civilian Honour</span>
                </div>

                <div className="inspiration-card">
                  <div className="inspiration-card-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="5" />
                      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M5.64 18.36l-1.42 1.42M19.78 4.22l-1.42 1.42" />
                    </svg>
                  </div>
                  <span className="inspiration-card-title">Sangeet Martand</span>
                  <span className="inspiration-card-desc">"Sun of Music"</span>
                </div>

                <div className="inspiration-card">
                  <div className="inspiration-card-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20M2 12h20" />
                    </svg>
                  </div>
                  <span className="inspiration-card-title">Global Vision</span>
                  <span className="inspiration-card-desc">Promoting Indian Classical Music Worldwide</span>
                </div>
              </div>

              {/* Bottom Optional Text */}
              <div className="inspiration-bottom-bar">
                <p className="inspiration-bottom-text">
                  Music, culture, and tradition are not merely taught—they are passed from one generation to the next through dedication, discipline, and devotion.
                </p>
              </div>

              <SectionDivider />
            </section>

            {/* 2. About Swar Sadhana */}
            <section
              ref={aboutRef}
              className={`section about-section-custom fade-in-section ${isAboutVisible ? "is-visible" : ""}`}
            >
              {/* Centered Section Header */}
              <div className="about-section-header">
                <span className="about-section-subtitle">ABOUT THE ACADEMY</span>
                <p className="about-section-tagline">
                  25 Years of Musical Tradition and Learning            </p>
              </div>

              <div className="split-layout align-center">
                {/* Left Side: Image */}
                <div className="split-image-container">
                  <img
                    src={aboutAcademyImg}
                    alt="Smt. Chandra Banerjee and Pt. Sougata Banerjee Performing"
                    className="about-academy-photo"
                  />
                </div>

                {/* Right Side: Text & Cards */}
                <div className="split-text">
                  <h3 className="about-academy-title">About Swar Sadhana</h3>

                  {/* Highlight Cards */}
                  <div className="about-highlight-cards">
                    <div className="about-card">
                      <span className="about-card-stat">25 Years</span>
                      <span className="about-card-label">Musical Tradition</span>
                    </div>
                    <div className="about-card">
                      <span className="about-card-stat">Authorized Centre</span>
                      <span className="about-card-label">Bangiya Sangeet Parishad</span>
                    </div>
                    <div className="about-card">
                      <span className="about-card-stat">Guru–Shishya</span>
                      <span className="about-card-label">Traditional Learning</span>
                    </div>
                  </div>

                  <div className="about-academy-paragraphs">
                    <p>
                      Swar Sadhana is a centre for Indian Classical Music dedicated to preserving and promoting the Guru–Shishya tradition of learning. Under the guidance of Smt. Chandra Banerjee and Pt. Sougata Banerjee, students receive structured training in Hindustani Classical Vocal Music through disciplined practice, performances, and examinations.
                    </p>
                    <p>
                      Affiliated with Bangiya Sangeet Parishad since 2003 as an authorized examination centre, the academy combines traditional teaching methods with formal music education while nurturing confidence, creativity, and lifelong devotion to the art.
                    </p>
                    <p>
                      Inspired by the teachings of Padma Vibhushan Sangeet Martand Pandit Jasraj Ji, Swar Sadhana views music not merely as performance, but as a path of learning, discipline, and inner growth.
                    </p>
                  </div>
                </div>
              </div>

              {/* Quote Block below layout */}
              <div className="about-quote-block">
                <p className="about-quote-text">
                  "Music is a form of prayer, meditation, healing, and relaxation."
                </p>
              </div>
              <SectionDivider />
            </section>

            {/* 3. Guru Parampara */}
            <section
              ref={guruRef}
              className={`section guru-section fade-in-section ${isGuruVisible ? "is-visible" : ""}`}
              style={{ background: "#050816" }}
            >
              <h2 className="section-title">Guru Shishya Parampara</h2>
              <p className="guru-description">
                The Guru Shishya Parampara is the soul of Indian Classical Music. Knowledge is transmitted through listening, observation, practice, and devotion, preserving an unbroken tradition that connects generations of musicians.          </p>

              {/* Lineage Tree */}
              <div className="lineage-tree">
                {/* Level 1 */}
                <div className="tree-level level-1">
                  <div className="lineage-node main-guru">
                    <div className="portrait-circle">
                      <img src={jasrajGuruImg} alt="Pandit Jasraj Ji" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                    </div>
                    <div className="node-text">
                      <h4 className="node-name">Pandit Jasraj Ji</h4>
                      <p className="node-desc">Padma Vibhushan • Sangeet Martand</p>
                      <p className="node-dates">(1930 - 2020)</p>
                    </div>
                  </div>
                </div>

                {/* Connection 1 to 2 */}
                <div className="tree-connector-block-1">
                  <div className="line-vertical-short"></div>
                  <div className="line-horizontal"></div>
                  <div className="line-vertical-branches">
                    <div className="branch-left"></div>
                    <div className="branch-right"></div>
                  </div>
                </div>

                {/* Level 2 */}
                <div className="tree-level level-2">
                  <div className="lineage-node left-guru">
                    <div className="portrait-circle">
                      <img src={chandraBanerjeeImg} alt="Smt. Chandra Banerjee" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 15%", display: "block" }} />
                    </div>
                    <div className="node-text">
                      <h4 className="node-name">Smt. Chandra Banerjee</h4>
                      <p className="node-desc">Founder & Principal Guru maa</p>
                      <p className="node-dates">(Vocal)</p>
                    </div>
                  </div>

                  <div className="lineage-node right-guru">
                    <div className="portrait-circle">
                      <img src={sougataBanerjeeImg} alt="Pt. Sougata Banerjee" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 18%", display: "block" }} />
                    </div>
                    <div className="node-text">
                      <h4 className="node-name">Pt. Sougata Banerjee</h4>
                      <p className="node-desc">Mentor</p>
                      <p className="node-dates">(Vocal)</p>
                    </div>
                  </div>
                </div>

                {/* Connection 2 to 3 */}
                <div className="tree-connector-block-2">
                  <div className="line-vertical-branches-up">
                    <div className="branch-left-up"></div>
                    <div className="branch-right-up"></div>
                  </div>
                  <div className="line-horizontal-down"></div>
                  <div className="line-vertical-short-down"></div>
                </div>

                {/* Level 3 */}
                <div className="tree-level level-3">
                  <div className="students-card">
                    <div className="students-icon">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                    </div>
                    <div className="students-info">
                      <h4 className="students-title">Students of Swar Sadhana</h4>
                      <p className="students-desc">Growing in the tradition of discipline, devotion, and musical excellence.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Value Cards */}
              <div className="guru-value-cards">
                <div className="guru-card">
                  <div className="guru-card-icon">
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 8.5a6.5 6.5 0 1 1 13 0c0 3-1.5 5-2.5 6.5a5.5 5.5 0 0 0-1.5 3.5v.5" />
                      <path d="M12 18.5a2.5 2.5 0 0 1-5 0" />
                    </svg>
                  </div>
                  <h4 className="guru-card-title">Listening First</h4>
                  <p className="guru-card-desc">Indian Classical Music is learnt through attentive listening and observation.</p>
                </div>

                <div className="guru-card">
                  <div className="guru-card-icon">
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 3l-6 6" />
                      <circle cx="7" cy="17" r="4" />
                      <path d="M10 14l5-5" />
                      <path d="M14 6l4 4" />
                    </svg>
                  </div>
                  <h4 className="guru-card-title">Disciplined Practice</h4>
                  <p className="guru-card-desc">Regular Riyaz builds technique, concentration, confidence, and expression.</p>
                </div>

                <div className="guru-card">
                  <div className="guru-card-icon">
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                      <path d="M12 6c-2 2.5-3 5-3 8 0 3.5 2.5 5 3 5s3-1.5 3-5c0-3-1-5.5-3-8z" />
                    </svg>
                  </div>
                  <h4 className="guru-card-title">Living Tradition</h4>
                  <p className="guru-card-desc">Knowledge is passed directly from teacher to student across generations.</p>
                </div>
              </div>

              {/* Quote Block */}
              <div className="guru-quote-block">
                <p className="guru-quote-text">
                  "Indian Classical Music is not written down; it is passed from Guru to Shishya through the process of listening."
                </p>
                <div className="ornamental-divider">
                  <span className="divider-diamond"></span>
                </div>
              </div>
            </section>
          </>
        )}

        {currentPage === "student-life" && (
          <StudentLifePage />
        )}

        {currentPage === "events" && !activeGalleryEvent && (
          <section className="section subpage-section">
            <div className="events-hero-header">
              <span className="events-section-subtitle">EVENTS & CELEBRATIONS</span>
              <h2 className="events-section-title">Academy Events</h2>
              <p className="events-section-description">
                Preserving tradition and inspiring future generations through classical concerts, workshops, and annual showcases.
              </p>
            </div>

            {/* 1. UPCOMING EVENTS SECTION */}
            <div className="events-status-block">
              <div className="events-status-header">
                <span className="events-section-subtitle" style={{ marginBottom: "0.25rem" }}>ANNOUNCEMENTS</span>
                <h3 className="events-status-title">Upcoming Events</h3>
              </div>

              {upcomingEvents.length === 0 ? (
                <div className="events-empty-state">
                  <div className="events-empty-icon">
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                  </div>
                  <h4 className="events-empty-heading">No Upcoming Events</h4>
                  <p className="events-empty-text">
                    No upcoming events at the moment. Please check back soon for announcements and new celebrations.
                  </p>
                </div>
              ) : (
                <div className="events-horizontal-grid">
                  {upcomingEvents.map((evt) => (
                    <div key={evt.id} className="events-card">
                      <div className="events-card-image-wrapper">
                        <img src={evt.image} alt={evt.title} className="events-card-image" />
                        <span className="events-card-tag">{evt.category || evt.tag}</span>
                      </div>
                      <div className="events-card-body">
                        <div className="events-card-date">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="16" y1="2" x2="16" y2="6"></line>
                            <line x1="8" y1="2" x2="8" y2="6"></line>
                            <line x1="3" y1="10" x2="21" y2="10"></line>
                          </svg>
                          <span>{evt.date}</span>
                        </div>
                        <h3 className="events-card-title">{evt.title}</h3>
                        <p className="events-card-desc">{evt.description}</p>
                        <div className="events-card-footer">
                          <button className="events-card-btn" onClick={() => setSelectedEvent(evt)}>
                            View Details &rarr;
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <SectionDivider />

            {/* 2. PAST / COMPLETED EVENTS SECTION */}
            <div className="events-status-block">
              <div className="events-status-header">
                <span className="events-section-subtitle" style={{ marginBottom: "0.25rem" }}>MEMORIES & MILESTONES</span>
                <h3 className="events-status-title">Past Events</h3>
                <p className="events-status-desc">Celebrating Our Musical Journey</p>
              </div>

              <div className="events-horizontal-grid">
                {pastEvents.map((evt) => (
                  <div key={evt.id} className="events-card">
                    <div className="events-card-image-wrapper">
                      {evt.image ? (
                        <img src={evt.image} alt={evt.title} className="events-card-image" />
                      ) : (
                        <div className="events-card-placeholder">
                          <div className="events-placeholder-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                              <circle cx="8.5" cy="8.5" r="1.5"></circle>
                              <polyline points="21 15 16 10 5 21"></polyline>
                            </svg>
                          </div>
                          <span className="events-placeholder-text">Cover Image Placeholder</span>
                        </div>
                      )}
                      <span className="events-card-tag">{evt.category || evt.tag}</span>
                    </div>
                    <div className="events-card-body">
                      <div className="events-card-date">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                          <line x1="16" y1="2" x2="16" y2="6"></line>
                          <line x1="8" y1="2" x2="8" y2="6"></line>
                          <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                        <span>{evt.date}</span>
                      </div>
                      <h3 className="events-card-title">{evt.title}</h3>
                      <p className="events-card-desc">{evt.description}</p>
                      <div className="events-card-footer">
                        <button
                          className="events-card-btn"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedEvent(evt);
                          }}
                        >
                          View Details &rarr;
                        </button>
                        <button
                          className="events-card-btn events-card-gallery-btn"
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveGalleryEvent(evt);
                          }}
                        >
                          View Gallery &rarr;
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <SectionDivider />

            {/* Event Detail Modal */}
            {selectedEvent && (
              <div className="event-modal-overlay" onClick={() => setSelectedEvent(null)}>
                <div className="event-modal-content" onClick={(e) => e.stopPropagation()}>
                  <button className="event-modal-close" onClick={() => setSelectedEvent(null)} aria-label="Close modal">&times;</button>
                  <div className="event-modal-banner">
                    {selectedEvent.image ? (
                      <img src={selectedEvent.image} alt={selectedEvent.title} />
                    ) : (
                      <div className="events-card-placeholder modal-banner-placeholder">
                        <div className="events-placeholder-icon">
                          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                            <circle cx="8.5" cy="8.5" r="1.5"></circle>
                            <polyline points="21 15 16 10 5 21"></polyline>
                          </svg>
                        </div>
                        <span className="events-placeholder-text">Cover Image Placeholder</span>
                      </div>
                    )}
                    <div className="event-modal-banner-overlay"></div>
                  </div>
                  <div className="event-modal-body">
                    <div className="event-modal-meta">
                      <div className="event-modal-meta-item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                          <line x1="16" y1="2" x2="16" y2="6"></line>
                          <line x1="8" y1="2" x2="8" y2="6"></line>
                          <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                        <span>{selectedEvent.date}</span>
                      </div>
                      <div className="event-modal-meta-item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10"></circle>
                          <polyline points="12 6 12 16 14"></polyline>
                        </svg>
                        <span>{selectedEvent.time}</span>
                      </div>
                      <div className="event-modal-meta-item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        <span>{selectedEvent.venue}</span>
                      </div>
                    </div>

                    <h3 className="event-modal-title">{selectedEvent.title}</h3>
                    <p className="event-modal-desc">{selectedEvent.description}</p>

                    <h4 className="event-modal-highlights-title">Event Highlights</h4>
                    <ul className="event-modal-highlights">
                      {selectedEvent.highlights.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>

                    <div className="event-modal-actions-row">
                      <button
                        className="submit-btn"
                        onClick={() => {
                          const evt = selectedEvent;
                          setSelectedEvent(null);
                          setActiveGalleryEvent(evt);
                        }}
                      >
                        View Event Gallery &rarr;
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </section>
        )}

        {/* DEDICATED EVENT GALLERY VIEW */}
        {currentPage === "events" && activeGalleryEvent && (
          <section className="section subpage-section event-gallery-view-section">
            <div className="event-gallery-top-bar">
              <button
                className="events-card-btn event-back-btn"
                onClick={() => setActiveGalleryEvent(null)}
              >
                &larr; Back to Events
              </button>
            </div>

            <div className="events-hero-header" style={{ marginBottom: "2rem" }}>
              <span className="events-section-subtitle">{activeGalleryEvent.category || activeGalleryEvent.tag}</span>
              <h2 className="events-section-title">{activeGalleryEvent.title} Gallery</h2>
              <div className="event-gallery-badge-row">
                <span className="event-gallery-date-badge">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  {activeGalleryEvent.date}
                </span>
              </div>
              <p className="events-section-description" style={{ marginTop: "1rem" }}>
                {activeGalleryEvent.description}
              </p>
            </div>

            {activeGalleryEvent.images && activeGalleryEvent.images.length > 0 ? (
              <div className="sl-gallery-grid">
                {activeGalleryEvent.images.map((img, i) => (
                  <div
                    key={i}
                    className="sl-gallery-item"
                    onClick={() => setEventLightboxImg(typeof img === "string" ? img : img.src)}
                  >
                    <img src={typeof img === "string" ? img : img.src} alt={img.alt || activeGalleryEvent.title} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="events-empty-state gallery-empty-box">
                <div className="events-empty-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                    <polyline points="21 15 16 10 5 21"></polyline>
                  </svg>
                </div>
                <h4 className="events-empty-heading">Gallery coming soon.</h4>
                <p className="events-empty-text">
                  Photographs for <strong>{activeGalleryEvent.title}</strong> will be published shortly. Please check back soon!
                </p>
              </div>
            )}

            <div className="event-gallery-bottom-bar">
              <button
                className="events-card-btn"
                onClick={() => setActiveGalleryEvent(null)}
              >
                &larr; Back to All Events
              </button>
            </div>

            <SectionDivider />
          </section>
        )}

        {currentPage === "recognition" && (
          <section className="section subpage-section">
            <h2 className="section-title">Recognition & Affiliations</h2>
            <div className="standard-grid">
              <div className="cert-item">
                <img src="https://images.unsplash.com/photo-1589330694653-afa59f46f36e?q=80&w=800&auto=format&fit=crop" alt="Certificate" className="cert-image" />
                <h4>Coming soon</h4>
              </div>
              <div className="cert-item">
                <img src="https://images.unsplash.com/photo-1589330694653-afa59f46f36e?q=80&w=800&auto=format&fit=crop" alt="Certificate" className="cert-image" />
                <h4>Coming soon</h4>
              </div>
              <div className="cert-item">
                <img src="https://images.unsplash.com/photo-1589330694653-afa59f46f36e?q=80&w=800&auto=format&fit=crop" alt="Certificate" className="cert-image" />
                <h4>Coming soon</h4>
              </div>
            </div>
            <SectionDivider />
          </section>
        )}

        {currentPage === "publications" && (
          <section className="section subpage-section">
            <h2 className="section-title">Books & Publications</h2>
            <div className="standard-grid">
              <div className="book-item">
                <div className="book-cover-placeholder">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                  </svg>
                  <span className="placeholder-tag">Publication</span>
                </div>
                <h4>Coming soon</h4>
              </div>
              <div className="book-item">
                <div className="book-cover-placeholder">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                  </svg>
                  <span className="placeholder-tag">Publication</span>
                </div>
                <h4>Coming soon</h4>
              </div>
              <div className="book-item">
                <div className="book-cover-placeholder">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                  </svg>
                  <span className="placeholder-tag">Publication</span>
                </div>
                <h4>Coming soon</h4>
              </div>
            </div>
            <SectionDivider />
          </section>
        )}

        {currentPage === "contact" && (
          <section className="section subpage-section" style={{ background: 'var(--color-surface)' }}>
            <div className="split-layout">
              <div className="contact-info">
                <h3>Get in Touch</h3>
                <p>Have a question about classes, events, or admissions? Send us a message.</p>
                <br />
                <p><strong>Addresses:</strong> <br /><br />Dahisar Centre Address : <br /> Swar Sadhana<br />401, D wing , NG Park Building number 6,<br />Shiv Vallabh Road, <br />Dahisar East, Mumbai : 400068</p>
                <p>Kandivali Centre Address : <br /> Swar Sadhana<br />Shop Number 3 , Krishna Building | Vasant Sagar,<br />Thakur Village, <br />Kandivali East, Mumbai : 400101</p>
                <p><strong>Email:</strong><br />diyabanerjee@yahoo.com</p>
                <p><strong>Phone:</strong><br />+91 98330 23262</p>
              </div>

              <div className="contact-container">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      required
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>
                  <button type="submit" className="submit-btn">
                    Send Enquiry
                  </button>
                  {formStatus.message && (
                    <p style={{ marginTop: '1rem', color: formStatus.type === 'success' ? '#4ade80' : '#f87171' }}>
                      {formStatus.message}
                    </p>
                  )}
                </form>
              </div>
            </div>
            <SectionDivider />
          </section>
        )}
      </main>

      <footer className="footer">
        <div className="footer-logo-container">
          <img src={logoImg} alt="Swar Sadhana Logo" className="footer-logo" />
          <span className="footer-logo-text">Swar Sadhana</span>
        </div>
        <p className="footer-tagline">A Centre for Indian Classical Music</p>
        <p className="footer-affiliation">Affiliated with Bangiya Sangeet Parishad since 2003</p>

        <div className="footer-socials">
          <a
            href="https://www.instagram.com/swarsadhana.academy//"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon instagram"
            aria-label="Swar Sadhana Instagram"
            title="Swar Sadhana Instagram"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
          <a
            href="https://www.youtube.com/@chandrabanerjee6281"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon youtube"
            aria-label="Smt. Chandra Banerjee YouTube Channel"
            title="Smt. Chandra Banerjee YouTube"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
              <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
            </svg>
          </a>
          <a
            href="https://www.youtube.com/@Sougatamusic18"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon youtube"
            aria-label="Shri Sougata Banerjee YouTube Channel"
            title="Shri Sougata Banerjee YouTube"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
              <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
            </svg>
          </a>
        </div>

        <p className="footer-copyright">
          © {new Date().getFullYear()} Swar Sadhana. All rights reserved.
        </p>
      </footer>

      {/* Event Gallery Lightbox Overlay */}
      {eventLightboxImg && (
        <div className="sl-lightbox" onClick={() => setEventLightboxImg(null)}>
          <button className="sl-lightbox-close" onClick={() => setEventLightboxImg(null)} aria-label="Close lightbox">&times;</button>
          <img src={eventLightboxImg} alt="Enlarged view" className="sl-lightbox-img" />
        </div>
      )}
    </div>
  );
}

export default App;
