const { db } = require('../util/admin');

exports.getAllRooms = (request, response) => {
	db
		.collection('rooms')
		.orderBy('type', 'desc')
		.get()
		.then((data) => {
			let rooms = [];
			data.forEach((doc) => {
				rooms.push({
                    roomId: doc.id,
                    booked: doc.data().booked,
                    clean: doc.data().clean,
                    price: doc.data().price,
                    type: doc.data().type,
					
				});
			});
			return response.json(rooms);
		})
		.catch((err) => {
			console.error(err);
			return response.status(500).json({ error: err.code});
		});
};

exports.postOneRoom = (request, response) => {
    
    const newRoom = {
        type: request.body.type,
        price: request.body.price,
        booked: false,
        clean: true
    }
    db
        .collection('rooms')
        .add(newRoom)
        .then((doc)=>{
            const responseRoom = newRoom;
            responseRoom.id = doc.id;
            return response.json(responseRoom);
        })
        .catch((err) => {
			response.status(500).json({ error: 'Something went wrong' });
			console.error(err);
		});
};

exports.deleteRoom = (request, response) => {
    const document = db.doc(`/rooms/${request.params.roomId}`);
    document
        .get()
        .then((doc) => {
            if (!doc.exists) {
                return response.status(404).json({ error: 'Room not found' })
            }
            return document.delete();
        })
        .then(() => {
            response.json({ message: 'Delete successfull' });
        })
        .catch((err) => {
            console.error(err);
            return response.status(500).json({ error: err.code });
        });
};

exports.editRoom = ( request, response ) => { 
   
    let document = db.collection('rooms').doc(`${request.params.roomId}`);
    document.update(request.body)
    .then(()=> {
        response.json({message: 'Updated successfully'});
    })
    .catch((err) => {
        console.error(err);
        return response.status(500).json({ 
                error: err.code 
        });
    });
};