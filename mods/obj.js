/**
 * Created by ziberman on 1/16/17.
 */

function User (name, age){

     this.name = name;

     this.age = age;

     this.foo = ()=>{

         console.log("my fooo");

    }

     console.info("\nObj created");
}

module.exports = User;