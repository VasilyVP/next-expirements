import { Inngest } from "inngest";

// Create a client to send and receive events
export const inngest = new Inngest({ 
    id: "my-app",
    eventKey: process.env.INGEST_EVENT_KEY,
 });
