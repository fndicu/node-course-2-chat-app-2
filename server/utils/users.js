[{
    id: 'a23324j3',
    name: 'Francis',
    room: 'HubSpot'
}]
class Users {
    constructor () {
        this.users = [];
    } 
    addUser (id, name, room) {
        var user = {
            id, name, room
        };
        this.users.push(user);
        return user;
    }
    removeUser (id) {
        var user = this.getUser(id);

        if (user){
            this.users = this.users.filter((user) => user.id !== id);
        }
        return user;
        //return user that was removed
    }
    getUser (id){
       return this.users.filter((user) => user.id === id)[0];
    }
    getUserList (room) {
        var users = this.users.filter((user) => user.room === room);
        var namesArray = users.map((user) => user.name);


        return namesArray;
    }
}


module.exports = {Users}
//addUser(id, name, room)
//removeUser(id)
//getUser(id)
//getUserList(room)

// class Person {
//     constructor (name, room) {
//         this.name = name;
//         this.room = room;
//     }
//     getUserDescription () {
//         return `${this.name} is in ${this.room}`;
//     }
// }

// var me = new Person('Francis', 'HubSpot');