import { NextRequest, NextResponse } from "next/server";
//import { jwtVerify } from 'jose';


export default async function middleware(request: NextRequest) {
    /* const token = request.cookies.get('token')?.value;

    if (!token) {
        console.log('no jwt token');
        const response = NextResponse.json({ success: true });

        const tokenToSet = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.psX8I8qIXCnpUawqHvnMnkPHISq5ipqpkPPtmmdyOMk';

        response.cookies.set('token', tokenToSet, { httpOnly: true, secure: true });
        return response;
    } */

    const user = {
        name: 'John Doe',
        role: 'admin',
    };

    /* if (token) {
        try {
            console.log('token: ', token);
            
            const secret = new TextEncoder().encode('test-secret-key');
            const { payload } = await jwtVerify(token, secret);

            console.log('payload: ', payload);
        } catch (err) {
            return new Response('Invalid Token', { status: 401 });
        }
    } */

    const response = NextResponse.next();

    response.headers.set('user', JSON.stringify(user));

    return response;
}
