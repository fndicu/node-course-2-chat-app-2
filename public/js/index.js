 var socket = io();

            socket.on('connect', function () {
                console.log('connected to server');

                socket.emit('createMessage', {
                    from: 'jen@but.com',
                    text:' Hey this yo boy'
                });
            });

            socket.on('disconnect', function () {
                console.log('disconnected from Server')
            });

        socket.on('newMessage', function (message){
    console.log('New message', message);
});