// this file is used to define the Inngest API route
import { serve } from "inngest/next";

import { inngest } from "@/lib/inngest/client.js"; // importing the Inngest client
import {// import functions from "@/lib/inngest/functions.js" for diff functionality like checking budget alerts, generating reports, etc.l
  checkBudgetAlerts,
  generateMonthlyReports,
  processRecurringTransaction,
  triggerRecurringTransactions,
} from "@/lib/inngest/functions.js";

export const { GET, POST} = serve({// Define HTTP methods for the route
  client: inngest,
  functions: [
    processRecurringTransaction,
    triggerRecurringTransactions,
    generateMonthlyReports,
    checkBudgetAlerts,
  ],
});
