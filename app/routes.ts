import { type RouteConfig, index } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  { path: "/.well-known/*", file: "routes/.well-known.tsx" },
] satisfies RouteConfig;
