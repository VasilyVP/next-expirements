import { NextRequest, NextResponse } from "next/server";

type User = {
    name: string;
}

export default function middleware(request: NextRequest) {
    const user = {
        name: 'John Doe',
        role: 'admin',
    };

    const response = NextResponse.next();

    response.headers.set('user', JSON.stringify(user));

    return response;
}