export class User {
    private id:string;private username:string;private email:string;private password:string;
    constructor(id:string, username:string, email:string, password:string){
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
    }    
    public get getId() : string {return this.id;}      
    public get getUsername() : string {return this.id;}
    public get getEmail() : string {return this.id;}      
    public get getPassword() : string {return this.id;}
    
}
