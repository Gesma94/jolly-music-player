import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    const accessToken = cookies().get(process.env.ACCESS_TOKEN_COOKIE_NAME);

    if (accessToken !== null && accessToken !== undefined) {
        return NextResponse.next();
    }

    if (request.nextUrl.pathname.startsWith("/_next")) {
        return NextResponse.next();
    }

    if (request.nextUrl.pathname.startsWith("/api")) {
        return NextResponse.next();
    }
    
    if (request.nextUrl.pathname.startsWith('/auth')) {
        return NextResponse.next();
    }

    if (!!request.cookies.get("token")) {
        return NextResponse.next();
    }

    return NextResponse.redirect(new URL("/auth/login", request.url));
}