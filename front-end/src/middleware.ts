import { NextResponse } from 'next/server'
import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware(async (auth, req) => {
    const session = await auth();

    if (!session.userId) {
        if (req.nextUrl.pathname !== '/') {
            return NextResponse.redirect(req.nextUrl.origin);
        }
    } else if (req.nextUrl.pathname === '/') {
        return NextResponse.redirect(req.nextUrl.origin + '/page1');
    }
});

export const config = {
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Always run for API routes
        '/(api|trpc)(.*)',
    ],
};
