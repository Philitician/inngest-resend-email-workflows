import { EventSchemas, Inngest } from "inngest";
import { orderCreatedEvent } from "./schemas";

// Create a client to send and receive events
export const inngest = new Inngest({
  id: "my-app",
  schemas: new EventSchemas().fromZod([orderCreatedEvent]),
});
