import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    if (req.nextUrl.pathname === "/") {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
    pages: {
      signIn: "/login",
    },
  }
);

export const config = {
  matcher: [
    "/",
    "/dashboard/:path*",
    "/colleges/:path*",
    "/courses/:path*",
    "/exams/:path*",
    "/blogs/:path*",
    "/enquiries/:path*",
    "/leads/:path*",
    "/counsellors/:path*",
    "/analytics/:path*",
    "/notifications/:path*",
    "/banners/:path*",
    "/settings/:path*",
  ],
};
