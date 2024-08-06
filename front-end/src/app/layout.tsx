import ThemeRegistry from "@/theme/ThemeRegistry";
import StoreProvider from "@/store/StoreProvider";
import TrpcProvider from "@/trpc/TrpcProvider";


export const metadata = {
  title: 'Test app',
  description: 'This is a test app',
}

console.log('CI: ', process.env.CI);

//export const dynamic = 'force-dynamic';// process.env.CI ? 'force-dynamic' : 'auto';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <ThemeRegistry>
            <TrpcProvider>
              {children}
            </TrpcProvider>
          </ThemeRegistry>
        </StoreProvider>
      </body>
    </html>
  )
}
