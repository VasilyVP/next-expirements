import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
    {
        id: "hello-world",
        retries: 2,
    },
    { event: "test/hello.world" },
    async ({ event, step, attempt }) => {
        console.log('in the function');

        console.log('attempt: ', attempt);

        await step.sleep("wait-a-minute", "10s");
        console.log('after sleep');

        //await step.waitForEvent("wait-for-event", { event: "test/hello.world-2", timeout: "2m" });
        //console.log('after waiting for event');

        await step.run('test/hello.world-3', () => {
            console.log('test/hello.world-3 executed');
            if (attempt < 2) throw Error('Some error');
        });

        console.log('after run');

        return { message: `Hello ${event.data.email}!` };
    }
);
