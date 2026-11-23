import { NextRequest, NextResponse } from "next/server";

const commonPolicy = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
  "script-src-attr 'none'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https:",
  "font-src 'self' data:",
  "connect-src 'self'",
  "frame-src 'self' blob:",
  "object-src 'self'",
  "base-uri 'self'",
  "form-action 'self'",
];

export function proxy(request: NextRequest) {
  const isResumePdf = request.nextUrl.pathname === "/resume/jash-jivani-resume.pdf";
  const response = NextResponse.next();

  response.headers.set(
    "Content-Security-Policy",
    [...commonPolicy, `frame-ancestors ${isResumePdf ? "'self'" : "'none'"}`].join("; "),
  );
  response.headers.set("Strict-Transport-Security", "max-age=63072000; includeSubDomains; preload");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set(
    "Permissions-Policy",
    "accelerometer=(), ambient-light-sensor=(), autoplay=(), battery=(), camera=(), display-capture=(), document-domain=(), encrypted-media=(), geolocation=(), gyroscope=(), hid=(), idle-detection=(), magnetometer=(), microphone=(), midi=(), payment=(), picture-in-picture=(), publickey-credentials-get=(), screen-wake-lock=(), serial=(), usb=(), web-share=(), xr-spatial-tracking=()"
  );
  response.headers.set("X-Frame-Options", isResumePdf ? "SAMEORIGIN" : "DENY");
  response.headers.set("Cross-Origin-Opener-Policy", "same-origin");

  return response;
}

export const config = {
  matcher: "/:path*",
};
