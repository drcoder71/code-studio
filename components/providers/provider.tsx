"use client";
import { ClerkProvider, useAuth } from "@clerk/nextjs";
import { ConvexReactClient } from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { ThemeProvider as NextThemesProvider } from "next-themes"

export const Provider = ({ children, ...props }: React.ComponentProps<typeof NextThemesProvider>) => {
    const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

    return (
        <NextThemesProvider {...props}>
            <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
                <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
                    {children}
                </ConvexProviderWithClerk>
            </ClerkProvider>
        </NextThemesProvider>
    )
};
