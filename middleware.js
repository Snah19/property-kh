export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/profile", "/notifications", "/bookmarks", "/post-property", "/update-property"]
};