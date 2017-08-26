export class AuthService{
    isLoggedIn:boolean=false;

    isAuthenticated(){
        const promise=new Promise((resolve,reject)=>{
            resolve(this.isLoggedIn);
        });

        return promise;
    }

    LogIn(){
        this.isLoggedIn=true;
    }

    LogOut(){
        this.isLoggedIn=false;
    }
}