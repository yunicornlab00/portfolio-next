import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "김승윤 | Frontend Developer",
  description: "We를 향하는 프론트엔드 개발자 김승윤의 포트폴리오",
  openGraph: {
    title: "김승윤 | Frontend Developer",
    description: "We를 향하는 프론트엔드 개발자 김승윤의 포트폴리오",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700;900&family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
