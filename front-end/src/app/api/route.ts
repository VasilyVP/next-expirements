import { NextRequest } from "next/server";

export function GET(request: NextRequest) {
    const userHeader = request.headers.get('user') || '';

    const user = JSON.parse(userHeader);

    return Response.json(user);
}

export function POST() {
    return Response.json("hello world POST");
}
