import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "paisa", // Unique app ID
  name: "paisa",
  retryFunction: async (attempt) => ({// retry function if something failed 
    delay: Math.pow(2, attempt) * 1000, // Exponential backoff
    maxAttempts: 2,
  }),
});
