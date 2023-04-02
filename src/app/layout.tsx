"use client";
import { GlobalStyles } from "@/styles/global";
import StyledComponentsRegistry from "../lib/registry";
import StyledJsxRegistry from "../lib/registry";
import { Inter } from "next/font/google";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { Menu } from "@/components/Menu";
import { Container } from "./styles";
import { FavoritesProvider } from "@/context/Favorites/favorites";

const inter = Inter({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();

  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryClientProvider client={queryClient}>
          <StyledComponentsRegistry>
            <FavoritesProvider>
              <Container>
                <Menu />
                <GlobalStyles />
                {children}
              </Container>
            </FavoritesProvider>
          </StyledComponentsRegistry>
        </QueryClientProvider>
      </body>
    </html>
  );
}
