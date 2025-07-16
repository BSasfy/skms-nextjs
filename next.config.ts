import type { NextConfig } from "next";

/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";

/** @type {import("next").NextConfig} */
const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/shop",
        destination: "https://scottish-krav-maga-systems-ltd.sumupstore.com/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
