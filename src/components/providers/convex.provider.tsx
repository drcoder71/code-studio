import { ClerkProvider, useAuth } from "@clerk/clerk-react";
import { ConvexProviderWithAuth, ConvexReactClient } from "convex/react";
import { ReactElement } from "react";

const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL! as string);
console.log(import.meta.env.VITE_CONVEX_URL);


const ConvexClientProvider = ({ children }: { children: ReactElement }) => {
    return (
        <ClerkProvider publishableKey={import.meta.env.VITE_CLERK_PUBLISHABLE_KEY! as string} afterSignOutUrl="/">
            <ConvexProviderWithAuth client={convex} useAuth={useAuth as any}>{children}</ConvexProviderWithAuth>
        </ClerkProvider>
    )
}

export default ConvexClientProvider