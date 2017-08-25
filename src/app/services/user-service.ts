import {User} from '../models/user-model';

export class UserService{
    private user:User;
    private users:User[]=[
    {id:1,name:'Ravi',active:true},
    {id:2,name:'Prabhat',active:true},
    {id:3,name:'Nithin',active:true}
    ];

    getUsers(){
        return this.users.slice();
    }

    updateUser(user:User){
        for(let currentUser of this.users){
            if(user.id==currentUser.id){
                currentUser.id=user.id;
                currentUser.name=user.name;
                break;
            }
        }
    }

    getUserById(id:number){
        for(let user of this.users){
            if(user.id==id){
                this.user=user;
                break;
            }
        }
        return this.user;
    }
}