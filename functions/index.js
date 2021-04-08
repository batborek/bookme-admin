const functions = require('firebase-functions');
const app = require('express')();

const {
    getAllRooms,
    postOneRoom,
    deleteRoom,
    editRoom
} = require('./APIs/rooms')



app.get('/rooms', getAllRooms);
app.post('/room', postOneRoom);
app.delete('/room/:roomId', deleteRoom);
app.put('/room/:roomId', editRoom);
exports.api = functions.https.onRequest(app);