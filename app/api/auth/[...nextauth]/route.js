import nextAuth from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";

export const AuthOptions = {
  providers: [
    SpotifyProvider({
      clientId: process.env.CLIENTID,
      clientSecret: process.env.CLIENTSECRET,
      site: "http://localhost:3001/api/auth/callback",
    }),
  ],
};

export const handler = nextAuth(AuthOptions);
export { handler as GET, handler as POST };
