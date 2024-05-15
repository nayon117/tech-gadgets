import { authMiddleware } from "@clerk/nextjs/server";
export default authMiddleware({
  publicRoutes: ["/", "/api/webhook","/api/send", "/products", "/blog", "/contact"],
  ignoredRoutes: ["/api/webhook","/api/send"],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
