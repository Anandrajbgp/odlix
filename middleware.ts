import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyToken } from "./lib/auth";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("odlix-token")?.value;
  const { pathname } = request.nextUrl;

  const publicPaths = ["/login", "/signup", "/forgot-password"];
  const protectedPaths = ["/dashboard", "/admin", "/profile"];
  const adminPaths = ["/admin"];

  const isPublicPath = publicPaths.some((p) => pathname.startsWith(p));
  const isProtectedPath = protectedPaths.some((p) => pathname.startsWith(p));
  const isAdminPath = adminPaths.some((p) => pathname.startsWith(p));

  if (!token && isProtectedPath) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (token && isPublicPath) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  if (isAdminPath && token) {
    const payload = await verifyToken(token);
    if (!payload || payload.role !== "ADMIN") {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|public).*)"],
};
