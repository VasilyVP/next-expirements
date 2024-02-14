'use client'
import { useAppSelector } from "@/store"

export default function AuthenticatedStatus() {
    const isAuthenticated = useAppSelector(status => status.common.authenticated);

    return isAuthenticated ? 'Authenticated' : 'Guest';
}
