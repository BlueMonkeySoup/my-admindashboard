export const authConfig = {
  pages: {
    signIn: "/login",
  },
  providers: [],
  callbacks: {
    authorized({ auth, request }) {
      const admin = auth?.user;
      const isOnAdminPanel = request.nextUrl?.pathname.startsWith("/dashboard");
      if (isOnAdminPanel) {
        if (admin) return true;
        return false;
      } else if (admin) {
        return Response.redirect(new URL("/dashboard", request.nextUrl));
      }
      return true;
    },
  },
};
