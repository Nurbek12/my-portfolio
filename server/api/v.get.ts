export default defineEventHandler(async (ctx) => {
    const { BOT_TOKEN, BOT_USER } = useRuntimeConfig()
    const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${BOT_USER}&text=новый+посититель`)
    await response.json()
    return true
})