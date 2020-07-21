console.log('Assignment5 Ans2');

class User {
    constructor(name, age, email) {
        this.name =name;
        this.age =age;
        this.email =email;
        this.Addcoins = '';
        this.removecoins = '';
        this.courses = [];
    }

    login(){
        console.log(`${this.name} has logged in`);
    }
    logout(){
        console.log(`${this.name} has logged out`);
    }
}

class Moderator extends User{
        Addcoins(user, coins){
         user.Addcoins.push(coins);
         console.log(user);
     }
}

class Admin extends Moderator{
        addCourse(user, course){
            user.courses.push(course);
            console.log(user);
        }

}

 


let user1 =  new  User('Harsha', 25, 'harsha@gmail.com');
let user2 =  new  User('Reddy', 24, 'reddy@gmail.com');
let mod = new Moderator('Naveen', 24, 'N@gmail.com');
let admin = new Admin('Vardhan', 25, 'Var@gmail.com');

let users = [user1, user2, mod, admin];

users.forEach(element =>{
    console.log(element);
});

user2.login();
user1.logout();

admin.addCourse(user1, 'javascript');
admin.addCourse(user2, 'python');




