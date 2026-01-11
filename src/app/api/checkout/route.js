import { Checkout } from "@polar-sh/nextjs";

export const GET = Checkout({
    accessToken: process.env.POLAR_ACCESS_TOKEN,
    successUrl: process.env.NEXT_PUBLIC_SUCCESS_URL,
    // We use "sandbox" for testing. 
    // Once you go live, you can change this to "production" or remove the line.
    server: "sandbox",
});
