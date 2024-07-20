
export default async function ServerComponent() {
    const res = await new Promise(resolve => setTimeout(() => resolve('ok'), 500));

    return 'Hello'
}
