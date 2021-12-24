const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const cors = require('cors');

const loginRouter = require('./routes/login');
const registerRouter = require('./routes/register');
const otpRouter = require('./routes/otp');


const { addUser, removeUser, getUser, getUsersInRoom } = require('./users.js');

const router = require('./router');
const PORT = process.env.PORT || 5000;

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(cors())
app.use(express.json());

app.use('/', loginRouter);
app.use('/register', registerRouter);
app.use('/otp', otpRouter);

io.on('connection', (socket) => {
    socket.on('join', ({ name, room }, callback) => {
        const { error, user } = addUser({ id: socket.id, name, room });
        if (error) return callback(error);

        socket.emit('message', { user: 'admin', text: `${user.name}, welcome to the room ${user.room}` });
        socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name} has joined!` });

        socket.join(user.room);
        io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) })

        callback();
    });

    socket.on('sendMessage', (message, callback) => {
        const user = getUser(socket.id);
        io.to(user.room).emit('message', { user: user.name, text: message });
        io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });
        callback();
    });

    socket.on('disconnect', () => {
        const user = removeUser(socket.id);
        if (user) {
            io.to(user.room).emit('message', { user: 'admin', text: `${user.name} has left.` })
        }
    })
});

app.use(router);

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

