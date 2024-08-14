'use server'

export default async function sayHello({ whom }: { whom: string }) {
    return 'hello ' + whom;
}
