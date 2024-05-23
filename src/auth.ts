import NextAuth from "next-auth";
import Github from "next-auth/providers/github";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Github],
  pages: {
    signIn: "/auth/login",
  },
  callbacks: {
    authorized({ request, auth }) {
      const isLogginIn = !!auth?.user;
      const isOnLogin = request.nextUrl.pathname === "/auth/login";

      if (isLogginIn && isOnLogin) {
        return Response.redirect(new URL("/", request.nextUrl));
      }

      return true;
    },
  },
});
