// import { Telegraf } from 'telegraf'
// import { Server } from 'socket.io'

// const io = new Server(server)

// const users = {}
// const token = process.env.TOKEN
// const chatid = process.env.CHAT

// const bot = new Telegraf(token!)

// io.on('connection', socket => {
//     users[socket.id] = socket;

//     socket.on('send-to-admin', (data) => {
//         bot.sendMessage(chatid, `[${socket.id}]\n${data}`);
//     })

//     socket.on('disconnect', () => {
//         console.log('A user has disconnected');
//         for (const [chatId, userSocket] of Object.entries(users)) {
//           if (userSocket === socket) {
//             delete users[chatId];
//             break;
//           }
//         }
//     });

// })

// bot.onText(/\/start/, (msg) => {
//     const chatId = msg.chat.id;
//     io.emit('receive-from-bot', msg.text);
// });

// bot.on('message', (msg) => {
//     // const chatId = msg.chat.id;
//     if(msg.reply_to_message) {
//         const openBracketIndex = msg.reply_to_message.text.indexOf('[');
//         const closeBracketIndex = msg.reply_to_message.text.indexOf(']');

//         if (openBracketIndex !== -1 && closeBracketIndex !== -1) {
//             const id = msg.reply_to_message.text.substring(openBracketIndex + 1, closeBracketIndex);
//             users[id]?.emit('receive-from-bot', msg.text)
//         }
//     } else {
//         io.emit('receive-from-bot', msg.text);
//     }
// });