import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  /**
   * Specify your server-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars.
   */
  server: {
    NODE_ENV: z.enum(["development", "test", "production"]),
    BREVO_API_KEY: z.string().min(1).optional(),
    BREVO_NEWSLETTER_LIST_ID: z.coerce.number().int().positive().optional(),
    BREVO_CONTACT_AUTOREPLY_TEMPLATE_ID: z.coerce
      .number()
      .int()
      .positive()
      .optional(),
    BREVO_SENDER_EMAIL: z.string().email().optional(),
    BREVO_CONTACT_TO_EMAIL: z.string().email().optional(),
  },

  /**
   * Specify your client-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars. To expose them to the client, prefix them with
   * `NEXT_PUBLIC_`.
   */
  client: {},

  /**
   * You can't destruct `process.env` as a regular object in the Next.js edge runtimes (e.g.
   * middlewares) or client-side so we need to destruct manually.
   */
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    BREVO_API_KEY: process.env.BREVO_API_KEY,
    BREVO_NEWSLETTER_LIST_ID: process.env.BREVO_NEWSLETTER_LIST_ID,
    BREVO_CONTACT_AUTOREPLY_TEMPLATE_ID:
      process.env.BREVO_CONTACT_AUTOREPLY_TEMPLATE_ID,
    BREVO_SENDER_EMAIL: process.env.BREVO_SENDER_EMAIL,
    BREVO_CONTACT_TO_EMAIL: process.env.BREVO_CONTACT_TO_EMAIL,
  },
  /**
   * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially
   * useful for Docker builds.
   */
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  /**
   * Makes it so that empty strings are treated as undefined. `SOME_VAR: z.string()` and
   * `SOME_VAR=''` will throw an error.
   */
  emptyStringAsUndefined: true,
});
