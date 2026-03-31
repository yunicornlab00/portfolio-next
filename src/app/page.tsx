"use client";

import { useState, useEffect, useRef, useCallback } from "react";

// ─── Constants & Data ───────────────────────────────────────────
const PROFILE = {
  name: "김승윤",
  nameEn: "Seungyun Kim",
  title: "We를 향하는 프론트엔드 개발자",
  email: "yunicornlab00@gmail.com",
  phone: "010-2075-5851",
  github: "https://github.com/Attainy",
  blog: "https://yunicornlab.tistory.com",
  intro: `서비스 전반을 직접 책임지며 사용자 경험과 운영 효율을 함께 개선해온 실무형 프론트엔드 개발자입니다. 프론트엔드 전담 1인으로 다수 서비스를 레거시 React 환경부터 Next.js 기반 모던 환경까지 개발·운영하며, 배포, QA 대응, 리팩토링, 성능 개선까지 폭넓게 수행했습니다.`,
  highlights: [
    "AI 기반 코드리뷰 자동화와 Shadcn 기반 Storybook·Figma 플러그인 개발로 팀 생산성 향상",
    "Lovable을 활용해 실제 운영용 웹앱을 기획부터 배포까지 구현",
    "수작업 데이터 업무를 자동화해 수개월의 작업 시간 단축, 100% 정확도 달성",
    "협업 프로세스를 적극 개선하고 기술 이슈·의사결정 과정을 공유하는 문화 구축",
  ],
};

const EXPERIENCES = [
  {
    company: "ConsumerIntelligence",
    companyKr: "컨슈머인텔리전스",
    role: "1인 전담 프론트엔드 개발자",
    period: "2025.06 ~ 2026.03",
    desc: "브랜드·크리에이터 연결형 마케팅 플랫폼",
    url: "https://consumerintelligence.kr",
    tech: [
      "React",
      "Next.js",
      "React Native",
      "TypeScript",
      "TailwindCSS",
      "TanStack Query",
      "Zustand",
    ],
    projects: [
      {
        name: "숏폼쉐어",
        nameEn: "ShortFormShare",
        desc: "숏폼 크리에이터 마케팅 플랫폼",
        url: "https://shortformshare.com",
        details: [
          "메인 프리뷰 화면 분리와 중복 데이터 호출 단일화로 초기 로딩 속도 개선",
          "Middleware 기반 서브도메인 아키텍처, 사용자 유형별 라우팅·접근 제어 구현",
          "토스페이먼츠 결제 플로우 구현 및 수수료 정책 변경 반영",
          "SCSS → TailwindCSS·Shadcn, Redux → Zustand 전환 및 SEO 개선",
        ],
        color: "#FF6B35",
      },
      {
        name: "리뷰쉐어",
        nameEn: "ReviewShare",
        desc: "올인원 콘텐츠 마케팅 플랫폼",
        url: "https://reviewshare.io",
        details: [
          "React 16 기반 레거시 환경에서 웹 서비스 운영·개선·유지보수 수행",
          "React Native 메이저 버전 업그레이드와 네이티브 빌드 환경 정비",
          "iOS·Android WebView 레이아웃 및 UI 이슈 대응",
          "구독 개편 롤백 대응으로 정책 변경 사항 안정적 반영",
        ],
        color: "#4ECDC4",
      },
    ],
  },

  {
    company: "Student Management App",
    companyKr: "영국 학원 수강생 관리 웹앱",
    role: "1인 풀스택 (바이브코딩)",
    period: "2026.03",
    desc: "영국 학원 운영용 PWA 개발",
    url: "https://music-course-manager.lovable.app",
    tech: ["Lovable", "React", "TypeScript", "TailwindCSS", "Supabase"],
    projects: [
      {
        name: "UK Academy App",
        nameEn: "UK Academy",
        desc: "수강생 관리 웹앱 (PWA)",
        url: "https://music-course-manager.lovable.app",
        details: [
          "Lovable 활용 1인 바이브코딩으로 요구사항부터 배포까지 전 과정 수행",
          "PWA 설치 기능, 학생 정보 관리, 출결 체크·관리 기능 구현",
          "수업 회차 Cycle과 출석 기록 자동 연동",
        ],
        color: "#E8447A",
      },
    ],
  },
  {
    company: "Auto Communications",
    companyKr: "오토커뮤니케이션스",
    role: "데이터 관리 (프리랜서)",
    period: "2023.06 ~ 2026.03",
    desc: "신차견적 및 자동차 금융 서비스",
    url: undefined,
    tech: ["Python", "Pandas", "Selenium", "JupyterLab"],
    projects: [
      {
        name: "자동화 프로그램",
        nameEn: "Automation",
        desc: "데이터 관리 업무 자동화",
        url: undefined,
        details: [
          "반복적 수작업 데이터 업무를 Python·Selenium으로 자동화",
          "업무 처리 시간 수개월 단축, 100% 데이터 정확도 달성",
        ],
        color: "#7B68EE",
      },
    ],
  },
  {
    company: "Procyan",
    companyKr: "프로키언",
    role: "AI 개발",
    period: "",
    desc: "AI 수학 솔루션 에듀테크",
    url: undefined,
    tech: ["Python", "TensorFlow", "Keras", "PyTorch", "FastAPI"],
    projects: [
      {
        name: "LatexToSpeech",
        nameEn: "LatexToSpeech",
        desc: "수식 → 음성 스크립트 AI 모델",
        url: undefined,
        details: [
          "Latex 수식의 수학적 맥락을 반영한 스크립트 전환 AI 모델 개발",
          "Self-Attention 기반 Transformer 모델을 Keras로 구현",
          "FastAPI 기반 RESTful API로 배포",
        ],
        color: "#00C9A7",
      },
      {
        name: "자동코딩",
        nameEn: "AutoCoding",
        desc: "수학 문제 생성 코드 자동 예측",
        url: undefined,
        details: [
          "수학 문제 지문 입력 시 생성 코드를 자동 예측하는 AI 모델 개발",
          "TextRank 알고리즘 추가로 정확도 60% → 70% 향상",
        ],
        color: "#FFD93D",
      },
    ],
  },
];

const SKILLS: Record<string, string[]> = {
  Frontend: [
    "React",
    "Next.js",
    "React Native",
    "TailwindCSS",
    "SCSS",
    "Styled-components",
    "shadcn/ui",
  ],
  Language: ["JavaScript", "TypeScript", "Python", "HTML/CSS", "SQL"],
  "State Mgmt": ["TanStack Query", "Zustand", "Redux", "Axios"],
  "Infra / Tool": ["Vercel", "AWS EB", "S3", "PWA", "Sentry", "Storybook"],
  AI: ["TensorFlow", "Keras", "PyTorch", "FastAPI", "Hugging Face", "Pandas"],
  Collab: ["GitHub", "Bitbucket", "Slack", "Notion"],
};

const AWARDS = [
  {
    title: "월간 데이콘 발화자의 감정인식 AI 경진대회",
    result: "259팀 중 4위",
    date: "2023.01",
  },
];

const CERTS = ["정보처리기사", "SQLD", "사회조사분석사 2급", "MOS Master"];

// ─── Custom Cursor ───────────────────────────────────────────────
function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: -100, y: -100 });
  const ring = useRef({ x: -100, y: -100 });
  const hovering = useRef(false);
  const visible = useRef(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (!visible.current) {
        visible.current = true;
        if (dotRef.current) dotRef.current.style.opacity = "1";
        if (ringRef.current) ringRef.current.style.opacity = "1";
      }
    };
    const onLeave = () => {
      visible.current = false;
      if (dotRef.current) dotRef.current.style.opacity = "0";
      if (ringRef.current) ringRef.current.style.opacity = "0";
    };

    const checkHover = () => {
      const el = document.elementFromPoint(mouse.current.x, mouse.current.y);
      if (!el) return;
      const tag = el.tagName.toLowerCase();
      hovering.current =
        tag === "a" ||
        tag === "button" ||
        el.closest("a") !== null ||
        el.closest("button") !== null ||
        window.getComputedStyle(el).cursor === "pointer";
    };

    let raf: number;
    const animate = () => {
      const mx = mouse.current.x;
      const my = mouse.current.y;
      ring.current.x += (mx - ring.current.x) * 0.12;
      ring.current.y += (my - ring.current.y) * 0.12;

      checkHover();
      const h = hovering.current;

      if (dotRef.current) {
        const ds = h ? 20 : 12;
        dotRef.current.style.left = mx - ds / 2 + "px";
        dotRef.current.style.top = my - ds / 2 + "px";
        dotRef.current.style.width = ds + "px";
        dotRef.current.style.height = ds + "px";
        dotRef.current.style.background = h ? "#fff" : "#4ECDC4";
      }
      if (ringRef.current) {
        const rs = h ? 50 : 36;
        ringRef.current.style.left = ring.current.x - rs / 2 + "px";
        ringRef.current.style.top = ring.current.y - rs / 2 + "px";
        ringRef.current.style.width = rs + "px";
        ringRef.current.style.height = rs + "px";
        ringRef.current.style.borderColor = h
          ? "rgba(255,255,255,0.5)"
          : "rgba(78,205,196,0.4)";
      }
      raf = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    raf = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  const base: React.CSSProperties = {
    position: "fixed",
    borderRadius: "50%",
    pointerEvents: "none",
    zIndex: 10000,
    opacity: 0,
    transition:
      "width 0.25s ease, height 0.25s ease, background 0.25s ease, border-color 0.25s ease, opacity 0.3s ease",
  };

  return (
    <>
      <div ref={dotRef} style={{ ...base, background: "#4ECDC4" }} />
      <div
        ref={ringRef}
        style={{ ...base, border: "1.5px solid rgba(78,205,196,0.4)" }}
      />
    </>
  );
}

// ─── Typing Text Effect ─────────────────────────────────────────
function TypingText({
  texts,
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseTime = 2000,
  active = true,
}: {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
  active?: boolean;
}) {
  const [displayed, setDisplayed] = useState("");
  const indexRef = useRef(0);
  const charRef = useRef(0);
  const deletingRef = useRef(false);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!active) return;

    // Reset on first activation
    if (!startedRef.current) {
      startedRef.current = true;
      indexRef.current = 0;
      charRef.current = 0;
      deletingRef.current = false;
      setDisplayed("");
    }

    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      const current = texts[indexRef.current];
      const ci = charRef.current;
      const del = deletingRef.current;

      if (!del) {
        // Typing
        if (ci < current.length) {
          charRef.current = ci + 1;
          setDisplayed(current.slice(0, ci + 1));
          timer = setTimeout(tick, typingSpeed);
        } else {
          // Done typing, pause then start deleting
          timer = setTimeout(() => {
            deletingRef.current = true;
            tick();
          }, pauseTime);
        }
      } else {
        // Deleting
        if (ci > 0) {
          charRef.current = ci - 1;
          setDisplayed(current.slice(0, ci - 1));
          timer = setTimeout(tick, deletingSpeed);
        } else {
          // Done deleting, move to next text
          deletingRef.current = false;
          indexRef.current = (indexRef.current + 1) % texts.length;
          setDisplayed("");
          timer = setTimeout(tick, typingSpeed + 200);
        }
      }
    };

    timer = setTimeout(tick, 400);

    return () => clearTimeout(timer);
  }, [active, texts, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span>
      {displayed}
      <span
        style={{
          display: "inline-block",
          width: 2,
          height: "1em",
          background: "#FF6B35",
          marginLeft: 2,
          verticalAlign: "text-bottom",
          animation: active ? "cursorBlink 1s step-end infinite" : "none",
          opacity: active ? 1 : 0,
        }}
      />
    </span>
  );
}

// ─── Canvas Text Effect (Pretext-inspired) ───────────────────────
function CanvasHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const particlesRef = useRef<
    Array<{
      x: number;
      y: number;
      originX: number;
      originY: number;
      vx: number;
      vy: number;
      r: number;
      g: number;
      b: number;
      size: number;
      startX: number;
      startY: number;
      delay: number;
      arrived: boolean;
      frame: number;
    }>
  >([]);
  const animFrameRef = useRef<number>(0);

  const createParticles = useCallback(
    (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
      const dpr = window.devicePixelRatio || 1;
      const w = canvas.width / dpr;
      const h = canvas.height / dpr;

      ctx.save();
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.restore();

      const lines = [
        {
          text: "김승윤",
          font: `bold ${Math.min(w * 0.12, 90)}px "Noto Sans KR", sans-serif`,
          y: h * 0.35,
        },
        {
          text: "SEUNGYUN KIM",
          font: `300 ${Math.min(w * 0.04, 28)}px "Space Mono", monospace`,
          y: h * 0.35 + Math.min(w * 0.12, 90) * 0.65,
        },
        {
          text: "Frontend Developer",
          font: `bold ${Math.min(w * 0.05, 36)}px "Space Mono", monospace`,
          y: h * 0.35 + Math.min(w * 0.12, 90) * 0.65 + 50,
        },
      ];

      lines.forEach((line) => {
        ctx.font = line.font;
        ctx.fillStyle = "#fff";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(line.text, w / 2, line.y);
      });

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      const gap = 3;
      const particles: typeof particlesRef.current = [];

      for (let y = 0; y < canvas.height; y += gap) {
        for (let x = 0; x < canvas.width; x += gap) {
          const i = (y * canvas.width + x) * 4;
          if (data[i + 3] > 128) {
            const px = x / dpr;
            const py = y / dpr;
            particles.push({
              x: px,
              y: py,
              originX: px,
              originY: py,
              vx: 0,
              vy: 0,
              r: data[i],
              g: data[i + 1],
              b: data[i + 2],
              size: Math.random() * 1.5 + 0.8,
              startX: Math.random() * w,
              startY: Math.random() * h,
              delay: Math.random() * 120,
              arrived: false,
              frame: 0,
            });
          }
        }
      }

      ctx.save();
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.restore();

      return particles;
    },
    []
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const dpr = window.devicePixelRatio || 1;

    const resize = () => {
      const rect = canvas.parentElement!.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = rect.width + "px";
      canvas.style.height = rect.height + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      particlesRef.current = createParticles(canvas, ctx);
    };

    resize();

    const handleMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const handleLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    canvas.addEventListener("mousemove", handleMouse);
    canvas.addEventListener("mouseleave", handleLeave);
    window.addEventListener("resize", resize);

    let globalFrame = 0;

    const animate = () => {
      ctx.save();
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.restore();

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const particles = particlesRef.current;
      globalFrame++;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.frame++;

        if (p.frame < p.delay) {
          const t = p.frame / p.delay;
          const ease = t * t * (3 - 2 * t);
          p.x = p.startX + (p.originX - p.startX) * ease;
          p.y = p.startY + (p.originY - p.startY) * ease;
        } else {
          if (!p.arrived) p.arrived = true;

          const dx = mx - p.x;
          const dy = my - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const repelRadius = 80;

          if (dist < repelRadius && dist > 0) {
            const force = (repelRadius - dist) / repelRadius;
            const angle = Math.atan2(dy, dx);
            p.vx -= Math.cos(angle) * force * 3;
            p.vy -= Math.sin(angle) * force * 3;
          }

          p.vx += (p.originX - p.x) * 0.08;
          p.vy += (p.originY - p.y) * 0.08;
          p.vx *= 0.85;
          p.vy *= 0.85;
          p.x += p.vx;
          p.y += p.vy;
        }

        const pulse = p.arrived
          ? 1 + Math.sin(globalFrame * 0.02 + i * 0.01) * 0.15
          : 1;
        const alpha = p.frame < p.delay ? p.frame / p.delay : 1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * pulse, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.r},${p.g},${p.b},${alpha})`;
        ctx.fill();
      }

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      canvas.removeEventListener("mousemove", handleMouse);
      canvas.removeEventListener("mouseleave", handleLeave);
      window.removeEventListener("resize", resize);
    };
  }, [createParticles]);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "absolute", inset: 0, cursor: "crosshair" }}
    />
  );
}

// ─── Scroll Observer Hook ────────────────────────────────────────
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible] as const;
}

function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  direction?: string;
  className?: string;
}) {
  const [ref, visible] = useInView(0.1);
  const transforms: Record<string, string> = {
    up: "translateY(40px)",
    down: "translateY(-40px)",
    left: "translateX(40px)",
    right: "translateX(-40px)",
    none: "none",
  };
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : transforms[direction],
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

// ─── Project Card ────────────────────────────────────────────────
interface Project {
  name: string;
  nameEn: string;
  desc: string;
  url?: string;
  details: string[];
  color: string;
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [hovered, setHovered] = useState(false);
  const Wrapper = project.url ? "a" : "div";
  const linkProps = project.url
    ? { href: project.url, target: "_blank" as const, rel: "noreferrer" }
    : {};
  return (
    <FadeIn delay={index * 0.1}>
      <Wrapper
        {...linkProps}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          display: "block",
          textDecoration: "none",
          color: "inherit",
          background: hovered
            ? `linear-gradient(135deg, ${project.color}18, ${project.color}08)`
            : "rgba(255,255,255,0.03)",
          border: `1px solid ${
            hovered ? project.color + "60" : "rgba(255,255,255,0.06)"
          }`,
          borderRadius: 16,
          padding: "28px 24px",
          cursor: project.url ? "pointer" : "default",
          transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
          transform: hovered ? "translateY(-4px)" : "none",
          boxShadow: hovered ? `0 20px 60px ${project.color}15` : "none",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: hovered ? "100%" : "0%",
            height: 2,
            background: project.color,
            transition: "width 0.6s ease",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 12,
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: project.color,
              boxShadow: `0 0 12px ${project.color}80`,
            }}
          />
          <h4
            style={{
              margin: 0,
              fontSize: 18,
              fontWeight: 700,
              color: "#f0f0f0",
              fontFamily: "'Noto Sans KR', sans-serif",
            }}
          >
            {project.name}
          </h4>
          <span
            style={{
              fontSize: 12,
              color: "rgba(255,255,255,0.35)",
              fontFamily: "'Space Mono', monospace",
              letterSpacing: 1,
            }}
          >
            {project.nameEn}
          </span>
        </div>
        <p
          style={{
            margin: "0 0 16px",
            fontSize: 13,
            color: "rgba(255,255,255,0.5)",
            fontFamily: "'Space Mono', monospace",
          }}
        >
          {project.desc}
        </p>
        <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
          {project.details.map((d, i) => (
            <li
              key={i}
              style={{
                fontSize: 13.5,
                color: "rgba(255,255,255,0.7)",
                lineHeight: 1.7,
                paddingLeft: 16,
                position: "relative",
                fontFamily: "'Noto Sans KR', sans-serif",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  color: project.color,
                }}
              >
                &#x203A;
              </span>
              {d}
            </li>
          ))}
        </ul>
        {project.url && (
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              marginTop: 16,
              fontSize: 12,
              color: project.color,
              fontFamily: "'Space Mono', monospace",
              letterSpacing: 0.5,
              opacity: hovered ? 1 : 0.6,
              transition: "opacity 0.3s",
            }}
          >
            &#x2197; {project.url}
          </span>
        )}
      </Wrapper>
    </FadeIn>
  );
}

// ─── Contact Card ────────────────────────────────────────────────
function ContactCard({
  label,
  value,
  href,
  color,
  icon,
  delay,
}: {
  label: string;
  value: string;
  href: string;
  color: string;
  icon: string;
  delay: number;
}) {
  const [hovered, setHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const cardRef = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <FadeIn delay={delay} direction="up">
      <a
        ref={cardRef}
        href={href}
        {...(href.startsWith("mailto:") ? {} : { target: "_blank", rel: "noreferrer" })}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onMouseMove={handleMouseMove}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 14,
          padding: "36px 40px",
          borderRadius: 24,
          background: hovered
            ? `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, ${color}18 0%, rgba(255,255,255,0.04) 60%)`
            : "rgba(255,255,255,0.03)",
          border: `1px solid ${
            hovered ? color + "50" : "rgba(255,255,255,0.06)"
          }`,
          textDecoration: "none",
          transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
          minWidth: 200,
          position: "relative",
          overflow: "hidden",
          transform: hovered ? "translateY(-8px) scale(1.02)" : "none",
          boxShadow: hovered
            ? `0 24px 80px ${color}20, 0 0 40px ${color}10, inset 0 1px 0 ${color}15`
            : "0 4px 20px rgba(0,0,0,0.1)",
          cursor: "pointer",
        }}
      >
        {/* Animated border glow */}
        <div
          style={{
            position: "absolute",
            inset: -1,
            borderRadius: 24,
            background: hovered
              ? `conic-gradient(from ${mousePos.x * 3.6}deg at ${mousePos.x}% ${
                  mousePos.y
                }%, ${color}40, transparent 40%, transparent 60%, ${color}20 100%)`
              : "transparent",
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.5s ease",
            zIndex: 0,
            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            maskComposite: "exclude",
            WebkitMaskComposite: "xor",
            padding: 1,
          }}
        />

        {/* Floating icon */}
        <div
          style={{
            fontSize: 32,
            transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
            transform: hovered ? "scale(1.2) translateY(-4px)" : "scale(1)",
            filter: hovered ? `drop-shadow(0 4px 12px ${color}60)` : "none",
            animation: hovered
              ? "contactFloat 2s ease-in-out infinite"
              : "none",
            position: "relative",
            zIndex: 1,
          }}
        >
          {icon}
        </div>

        {/* Label */}
        <span
          style={{
            fontSize: 10,
            letterSpacing: 3,
            fontFamily: "'Space Mono', monospace",
            color: hovered ? color : "rgba(255,255,255,0.3)",
            textTransform: "uppercase" as const,
            transition: "all 0.4s ease",
            position: "relative",
            zIndex: 1,
          }}
        >
          {label}
        </span>

        {/* Value */}
        <span
          style={{
            fontSize: 15,
            fontWeight: 600,
            fontFamily: "'Space Mono', monospace",
            color: hovered ? "#fff" : color,
            transition: "all 0.4s ease",
            position: "relative",
            zIndex: 1,
            textShadow: hovered ? `0 0 20px ${color}60` : "none",
          }}
        >
          {value}
        </span>

        {/* Bottom accent line */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: hovered ? "60%" : "0%",
            height: 2,
            background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
            transition: "width 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
            borderRadius: 1,
            zIndex: 1,
          }}
        />

        {/* Shimmer effect on hover */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: hovered ? "120%" : "-60%",
            width: "40%",
            height: "100%",
            background: `linear-gradient(90deg, transparent, ${color}08, transparent)`,
            transition: "left 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
            transform: "skewX(-20deg)",
            zIndex: 0,
          }}
        />
      </a>
    </FadeIn>
  );
}

// ─── Skill Pill ──────────────────────────────────────────────────
function SkillPill({
  name,
  catIndex,
}: {
  name: string;
  catIndex: number;
  index: number;
}) {
  const colors = [
    "#FF6B35",
    "#4ECDC4",
    "#7B68EE",
    "#E8447A",
    "#00C9A7",
    "#FFD93D",
  ];
  const c = colors[catIndex % colors.length];
  const [hovered, setHovered] = useState(false);
  return (
    <span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "inline-block",
        padding: "6px 14px",
        fontSize: 13,
        fontFamily: "'Space Mono', monospace",
        borderRadius: 20,
        background: hovered ? c + "25" : "rgba(255,255,255,0.04)",
        color: hovered ? c : "rgba(255,255,255,0.6)",
        border: `1px solid ${hovered ? c + "50" : "rgba(255,255,255,0.08)"}`,
        transition: "all 0.3s ease",
        cursor: "default",
        letterSpacing: 0.3,
      }}
    >
      {name}
    </span>
  );
}

// ─── About Section ───────────────────────────────────────────────
function AboutSection() {
  const [ref, visible] = useInView(0.2);

  return (
    <section
      ref={ref}
      id="about"
      style={{ padding: "120px 24px", maxWidth: 1100, margin: "0 auto" }}
    >
      <FadeIn>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 48,
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#FF6B35",
            }}
          />
          <span
            style={{
              fontSize: 20,
              letterSpacing: 4,
              fontFamily: "'Space Mono', monospace",
              color: "#FF6B35",
              textTransform: "uppercase" as const,
            }}
          >
            About Me
          </span>
          <div
            style={{
              flex: 1,
              height: 1,
              background: "rgba(255,255,255,0.06)",
            }}
          />
        </div>
      </FadeIn>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 60,
          alignItems: "start",
        }}
      >
        <FadeIn delay={0.1}>
          <h2
            style={{
              fontSize: 32,
              fontWeight: 900,
              lineHeight: 1.4,
              marginBottom: 24,
              fontFamily: "'Noto Sans KR', sans-serif",
              minHeight: 100,
            }}
          >
            <span style={{ color: "#FF6B35" }}>
              <TypingText
                texts={[
                  "직접 책임지는",
                  "끊임없이 성장하는",
                  "함께 만들어가는",
                  "문제를 해결하는",
                ]}
                typingSpeed={80}
                deletingSpeed={40}
                pauseTime={2200}
                active={visible}
              />
            </span>
            <br />
            실무형 프론트엔드 개발자
          </h2>
          <p
            style={{
              fontSize: 15,
              lineHeight: 1.9,
              color: "rgba(255,255,255,0.6)",
              fontFamily: "'Noto Sans KR', sans-serif",
            }}
          >
            {PROFILE.intro}
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {PROFILE.highlights.map((h, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: 14,
                  alignItems: "flex-start",
                  padding: "16px 20px",
                  borderRadius: 12,
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.04)",
                }}
              >
                <span
                  style={{
                    fontSize: 20,
                    fontFamily: "'Space Mono', monospace",
                    color: "#FF6B35",
                    fontWeight: 700,
                    lineHeight: 1,
                  }}
                >
                  0{i + 1}
                </span>
                <span
                  style={{
                    fontSize: 14,
                    lineHeight: 1.7,
                    color: "rgba(255,255,255,0.65)",
                    fontFamily: "'Noto Sans KR', sans-serif",
                  }}
                >
                  {h}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── Nav ─────────────────────────────────────────────────────────
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
      const sections = [
        "about",
        "experience",
        "skills",
        "education",
        "contact",
      ];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top < 200) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: scrolled ? "12px 0" : "20px 0",
        background: scrolled ? "rgba(10,10,14,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.05)" : "none",
        transition: "all 0.4s ease",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <a
          href="#hero"
          style={{
            textDecoration: "none",
            fontFamily: "'Space Mono', monospace",
            fontSize: 16,
            fontWeight: 700,
            color: "#FF6B35",
            letterSpacing: -0.5,
          }}
        >
          SY.
        </a>
        <div style={{ display: "flex", gap: 24 }}>
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              style={{
                textDecoration: "none",
                fontSize: 12,
                fontFamily: "'Space Mono', monospace",
                letterSpacing: 1.5,
                textTransform: "uppercase" as const,
                color:
                  activeSection === item.id
                    ? "#FF6B35"
                    : "rgba(255,255,255,0.45)",
                transition: "color 0.3s",
                position: "relative",
              }}
            >
              {item.label}
              {activeSection === item.id && (
                <div
                  style={{
                    position: "absolute",
                    bottom: -6,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: 4,
                    height: 4,
                    borderRadius: "50%",
                    background: "#FF6B35",
                  }}
                />
              )}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

// ─── Main App ────────────────────────────────────────────────────
export default function Portfolio() {
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const update = () =>
      setCurrentTime(
        new Date().toLocaleTimeString("ko-KR", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      style={{
        background: "#0a0a0e",
        color: "#f0f0f0",
        minHeight: "100vh",
        fontFamily: "'Noto Sans KR', sans-serif",
        overflowX: "hidden",
      }}
    >
      <style>{`
        @keyframes pulse { 0%,100% { opacity: 1; } 50% { opacity: 0.5; } }
        @keyframes grain { 0% { transform: translate(0,0); } 10% { transform: translate(-2%,-2%); } 20% { transform: translate(2%,2%); } 30% { transform: translate(-1%,1%); } 40% { transform: translate(1%,-1%); } 50% { transform: translate(-2%,2%); } 60% { transform: translate(2%,-2%); } 70% { transform: translate(-1%,-1%); } 80% { transform: translate(1%,1%); } 90% { transform: translate(-2%,0); } 100% { transform: translate(0,0); } }
        @keyframes contactFloat { 0%,100% { transform: scale(1.2) translateY(-4px); } 50% { transform: scale(1.2) translateY(-10px); } }
        @keyframes cursorBlink { 0%,100% { opacity: 1; } 50% { opacity: 0; } }
        * { cursor: none !important; }
      `}</style>

      {/* Grain overlay */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 999,
          pointerEvents: "none",
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E")`,
          animation: "grain 0.5s steps(1) infinite",
        }}
      />

      <Nav />
      <CustomCursor />

      {/* HERO */}
      <section
        id="hero"
        style={{
          position: "relative",
          height: "700px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 600,
            height: 600,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, #FF6B3510 0%, transparent 70%)",
            top: "-10%",
            right: "-10%",
            filter: "blur(80px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 500,
            height: 500,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, #4ECDC410 0%, transparent 70%)",
            bottom: "-10%",
            left: "-10%",
            filter: "blur(80px)",
          }}
        />
        <CanvasHero />
        <div
          style={{
            position: "absolute",
            bottom: 40,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
          }}
        >
          <span
            style={{
              fontSize: 10,
              letterSpacing: 3,
              fontFamily: "'Space Mono', monospace",
              color: "rgba(255,255,255,0.3)",
              textTransform: "uppercase" as const,
            }}
          >
            Scroll
          </span>
          <div
            style={{
              width: 1,
              height: 40,
              background:
                "linear-gradient(to bottom, rgba(255,255,255,0.3), transparent)",
              animation: "pulse 2s infinite",
            }}
          />
        </div>
      </section>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 24,
          flexWrap: "wrap",
        }}
      >
        <ContactCard
          label="Email"
          value={PROFILE.email}
          href={`mailto:${PROFILE.email}`}
          color="#7B68EE"
          icon="✉"
          delay={0.2}
        />
        <ContactCard
          label="GitHub"
          value="Attainy"
          href={PROFILE.github}
          color="#f0f0f0"
          icon="⌘"
          delay={0.3}
        />
        <ContactCard
          label="GitHub"
          value="yunicornlab00"
          href="https://github.com/yunicornlab00"
          color="#f0f0f0"
          icon="⌘"
          delay={0.35}
        />
        <ContactCard
          label="Blog"
          value="Tistory"
          href={PROFILE.blog}
          color="#4ECDC4"
          icon="✎"
          delay={0.4}
        />
      </div>

      {/* ABOUT */}
      <AboutSection />

      {/* EXPERIENCE */}
      <section
        id="experience"
        style={{ padding: "80px 24px 120px", maxWidth: 1100, margin: "0 auto" }}
      >
        <FadeIn>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 64,
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#4ECDC4",
              }}
            />
            <span
              style={{
                fontSize: 20,
                letterSpacing: 4,
                fontFamily: "'Space Mono', monospace",
                color: "#4ECDC4",
                textTransform: "uppercase" as const,
              }}
            >
              Experience
            </span>
            <div
              style={{
                flex: 1,
                height: 1,
                background: "rgba(255,255,255,0.06)",
              }}
            />
          </div>
        </FadeIn>

        {EXPERIENCES.map((exp, ei) => (
          <div key={ei} style={{ marginBottom: 80, position: "relative" }}>
            <FadeIn>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: 8,
                  flexWrap: "wrap",
                  gap: 12,
                }}
              >
                <div>
                  <h3
                    style={{
                      fontSize: 26,
                      fontWeight: 800,
                      marginBottom: 4,
                      fontFamily: "'Noto Sans KR', sans-serif",
                    }}
                  >
                    {exp.companyKr}
                    <span
                      style={{
                        fontSize: 14,
                        fontWeight: 400,
                        color: "rgba(255,255,255,0.35)",
                        marginLeft: 12,
                        fontFamily: "'Space Mono', monospace",
                      }}
                    >
                      {exp.company}
                    </span>
                  </h3>
                  <p
                    style={{
                      fontSize: 13,
                      color: "rgba(255,255,255,0.4)",
                      fontFamily: "'Space Mono', monospace",
                    }}
                  >
                    {exp.desc}
                  </p>
                </div>
                <div style={{ textAlign: "right" as const }}>
                  <span
                    style={{
                      fontSize: 12,
                      color: "rgba(255,255,255,0.35)",
                      fontFamily: "'Space Mono', monospace",
                    }}
                  >
                    {exp.period}
                  </span>
                  <div
                    style={{
                      fontSize: 13,
                      color: "#FF6B35",
                      fontFamily: "'Space Mono', monospace",
                      marginTop: 4,
                    }}
                  >
                    {exp.role}
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div
                style={{
                  display: "flex",
                  gap: 8,
                  flexWrap: "wrap",
                  margin: "16px 0 24px",
                }}
              >
                {exp.tech.map((t, i) => (
                  <span
                    key={i}
                    style={{
                      fontSize: 11,
                      padding: "3px 10px",
                      borderRadius: 4,
                      background: "rgba(255,255,255,0.04)",
                      color: "rgba(255,255,255,0.4)",
                      fontFamily: "'Space Mono', monospace",
                      letterSpacing: 0.5,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </FadeIn>

            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  exp.projects.length > 1 ? "1fr 1fr" : "1fr",
                gap: 20,
              }}
            >
              {exp.projects.map((p, pi) => (
                <ProjectCard key={pi} project={p} index={pi} />
              ))}
            </div>

            {exp.url && (
              <FadeIn delay={0.2}>
                <a
                  href={exp.url}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    marginTop: 16,
                    fontSize: 12,
                    fontFamily: "'Space Mono', monospace",
                    color: "rgba(255,255,255,0.3)",
                    textDecoration: "none",
                    letterSpacing: 0.5,
                  }}
                >
                  &#x2197; {exp.url}
                </a>
              </FadeIn>
            )}
          </div>
        ))}
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        style={{ padding: "80px 24px 120px", maxWidth: 1100, margin: "0 auto" }}
      >
        <FadeIn>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 48,
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#7B68EE",
              }}
            />
            <span
              style={{
                fontSize: 20,
                letterSpacing: 4,
                fontFamily: "'Space Mono', monospace",
                color: "#7B68EE",
                textTransform: "uppercase" as const,
              }}
            >
              Skills
            </span>
            <div
              style={{
                flex: 1,
                height: 1,
                background: "rgba(255,255,255,0.06)",
              }}
            />
          </div>
        </FadeIn>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
          }}
        >
          {Object.entries(SKILLS).map(([cat, skills], ci) => (
            <FadeIn key={cat} delay={ci * 0.08}>
              <div
                style={{
                  padding: 24,
                  borderRadius: 16,
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                <h4
                  style={{
                    fontSize: 11,
                    letterSpacing: 3,
                    fontFamily: "'Space Mono', monospace",
                    color: "rgba(255,255,255,0.35)",
                    textTransform: "uppercase" as const,
                    marginBottom: 16,
                  }}
                >
                  {cat}
                </h4>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {skills.map((s, si) => (
                    <SkillPill key={si} name={s} catIndex={ci} index={si} />
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Awards & Certs */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 24,
            marginTop: 40,
          }}
        >
          <FadeIn delay={0.2}>
            <div
              style={{
                padding: 24,
                borderRadius: 16,
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              <h4
                style={{
                  fontSize: 20,
                  letterSpacing: 3,
                  fontFamily: "'Space Mono', monospace",
                  color: "#FFD93D",
                  textTransform: "uppercase" as const,
                  marginBottom: 16,
                }}
              >
                Award
              </h4>
              {AWARDS.map((a, i) => (
                <div key={i}>
                  <div
                    style={{
                      fontSize: 15,
                      fontWeight: 600,
                      color: "#f0f0f0",
                      marginBottom: 4,
                      fontFamily: "'Noto Sans KR', sans-serif",
                    }}
                  >
                    {a.title}
                  </div>
                  <div
                    style={{
                      fontSize: 13,
                      color: "#FFD93D",
                      fontFamily: "'Space Mono', monospace",
                    }}
                  >
                    {a.result}
                  </div>
                  <div
                    style={{
                      fontSize: 11,
                      color: "rgba(255,255,255,0.3)",
                      fontFamily: "'Space Mono', monospace",
                      marginTop: 4,
                    }}
                  >
                    {a.date}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div
              style={{
                padding: 24,
                borderRadius: 16,
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              <h4
                style={{
                  fontSize: 20,
                  letterSpacing: 3,
                  fontFamily: "'Space Mono', monospace",
                  color: "#00C9A7",
                  textTransform: "uppercase" as const,
                  marginBottom: 16,
                }}
              >
                Certificates
              </h4>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {CERTS.map((c, i) => (
                  <span
                    key={i}
                    style={{
                      fontSize: 13,
                      padding: "8px 16px",
                      borderRadius: 8,
                      background: "#E8447A10",
                      color: "#fff",
                      border: "1px solid #E8447A25",
                      fontFamily: "'Noto Sans KR', sans-serif",
                    }}
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* EDUCATION */}
      <section
        id="education"
        style={{ padding: "80px 24px 120px", maxWidth: 1100, margin: "0 auto" }}
      >
        <FadeIn>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 48,
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#00C9A7",
              }}
            />
            <span
              style={{
                fontSize: 20,
                letterSpacing: 4,
                fontFamily: "'Space Mono', monospace",
                color: "#00C9A7",
                textTransform: "uppercase" as const,
              }}
            >
              Education
            </span>
            <div
              style={{
                flex: 1,
                height: 1,
                background: "rgba(255,255,255,0.06)",
              }}
            />
          </div>
        </FadeIn>

        <div style={{ position: "relative", paddingLeft: 32 }}>
          <div
            style={{
              position: "absolute",
              left: 6,
              top: 0,
              bottom: 0,
              width: 1,
              background: "rgba(255,255,255,0.06)",
            }}
          />

          {[
            {
              period: "2024.09 ~ 2024.10",
              title: "자바스크립트 50일 완성",
              org: "제로베이스",
              desc: "모던 자바스크립트 딥다이브 도서 완독 및 발표",
            },
            {
              period: "2024.01 ~ 2024.05",
              title: "슈퍼코딩 웹 개발 과정",
              org: "슈퍼러닝",
              desc: "수강생 투표 긍정적인 에너지 수강생 1위 선정",
            },
            {
              period: "2023.08",
              title: "Figma UI/UX 웹디자인 과정",
              org: "이젠아카데미",
              desc: "컴포넌트, 오토레이아웃 등의 UX 실습",
            },
            {
              period: "2023.05 ~ 2023.06",
              title: "부스트코스 BEYOND AI BASIC",
              org: "네이버 커넥트재단",
              desc: "팀 리더로 최다 우수미션 팀 선정",
            },
            {
              period: "2023.01 ~ 2023.02",
              title: "LG Aimers 2기",
              org: "LG",
              desc: "앙상블 모델로 71% 정확도 달성",
            },
            {
              period: "2014.03 ~ 2018.08",
              title: "서울여자대학교 수학과",
              org: "졸업",
              desc: "학점 3.74 / 4.5 · 미분적분학(A+), 수리통계학(A+), 이산수학(A+) 등",
            },
          ].map((edu, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div style={{ marginBottom: 32, position: "relative" }}>
                <div
                  style={{
                    position: "absolute",
                    left: -32,
                    top: 6,
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    background: "#0a0a0e",
                    border: "2px solid #00C9A750",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      width: 4,
                      height: 4,
                      borderRadius: "50%",
                      background: "#00C9A7",
                    }}
                  />
                </div>
                <span
                  style={{
                    fontSize: 11,
                    color: "rgba(255,255,255,0.3)",
                    fontFamily: "'Space Mono', monospace",
                    letterSpacing: 1,
                  }}
                >
                  {edu.period}
                </span>
                <h4
                  style={{
                    fontSize: 16,
                    fontWeight: 700,
                    marginTop: 4,
                    fontFamily: "'Noto Sans KR', sans-serif",
                  }}
                >
                  {edu.title}
                  <span
                    style={{
                      fontSize: 12,
                      fontWeight: 400,
                      color: "rgba(255,255,255,0.3)",
                      marginLeft: 8,
                    }}
                  >
                    {edu.org}
                  </span>
                </h4>
                <p
                  style={{
                    fontSize: 13,
                    color: "rgba(255,255,255,0.5)",
                    marginTop: 4,
                    fontFamily: "'Noto Sans KR', sans-serif",
                  }}
                >
                  {edu.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        style={{
          padding: "80px 24px 120px",
          maxWidth: 1100,
          margin: "0 auto",
          textAlign: "center" as const,
        }}
      >
        <FadeIn>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 12,
              marginBottom: 48,
            }}
          >
            <div
              style={{
                width: 40,
                height: 1,
                background: "rgba(255,255,255,0.06)",
              }}
            />
            <span
              style={{
                fontSize: 11,
                letterSpacing: 4,
                fontFamily: "'Space Mono', monospace",
                color: "#FF6B35",
                textTransform: "uppercase" as const,
              }}
            >
              Contact
            </span>
            <div
              style={{
                width: 40,
                height: 1,
                background: "rgba(255,255,255,0.06)",
              }}
            />
          </div>
        </FadeIn>

        {/* <FadeIn delay={0.1}>
          <h2 style={{ fontSize: 40, fontWeight: 900, marginBottom: 16, fontFamily: "'Noto Sans KR', sans-serif" }}>
            함께 <span style={{ color: "#FF6B35" }}>성장</span>할 팀을 찾고 있습니다
          </h2>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.45)", fontFamily: "'Noto Sans KR', sans-serif", marginBottom: 48 }}>
            새로운 기회에 대해 이야기 나누고 싶습니다
          </p>
        </FadeIn> */}
      </section>

      {/* FOOTER */}
      <footer
        style={{
          padding: "40px 24px",
          borderTop: "1px solid rgba(255,255,255,0.04)",
          textAlign: "center" as const,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 24,
          }}
        >
          <span
            style={{
              fontSize: 11,
              fontFamily: "'Space Mono', monospace",
              color: "rgba(255,255,255,0.2)",
            }}
          >
            &copy; 2026 김승윤
          </span>
          <span
            style={{
              fontSize: 11,
              fontFamily: "'Space Mono', monospace",
              color: "rgba(255,255,255,0.15)",
            }}
          >
            {currentTime} KST
          </span>
          <span
            style={{
              fontSize: 11,
              fontFamily: "'Space Mono', monospace",
              color: "rgba(255,255,255,0.15)",
            }}
          >
            Built with Canvas + React
          </span>
        </div>
      </footer>
    </div>
  );
}
