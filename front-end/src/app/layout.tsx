import { ClerkProvider } from '@clerk/nextjs';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import ThemeRegistry from "@/theme/ThemeRegistry";
import StoreProvider from "@/store/StoreProvider";
import TrpcProvider from "@/trpc/TrpcProvider";


export const metadata = {
  title: 'Test app',
  description: 'This is a test app',
}

export const dynamic = 'force-dynamic';// process.env.CI ? 'force-dynamic' : 'auto';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <AppRouterCacheProvider>
            <StoreProvider>
              <ThemeRegistry>
                <TrpcProvider>
                  {children}
                </TrpcProvider>
              </ThemeRegistry>
            </StoreProvider>
          </AppRouterCacheProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
