export default defineEventHandler(async (ctx) => {
    const { BOT_TOKEN, BOT_USER } = useRuntimeConfig()
    const body = await readBody<{message: string, name: string}>(ctx)
    const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${BOT_USER}&text=name:${body.name},+message:${body.message}`)
    await response.json()
    return true
})