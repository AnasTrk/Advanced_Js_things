
//arrow functions
var func = (value) => {
    return ()=>{
        console.log(value);
    };
}
func("yieks")();
//PROMISES 
let myPromise =()=>{
    return  new Promise((resolved, rejected)=>{
        let promiseDone = true;
        if(promiseDone)
            resolved(true);
        else    
            rejected(false);
    });
};
    //Second Promise
let mySecondPromise = (Pro)=> { 
    return new Promise((resolved, rejected)=>{
        resolved("my Second Promise   is done ...");
    });
};
    //Third Promise
    let myThirdPromise = (Pro)=>{
        return new Promise((resolved , rejected)=>{
            resolved("my Third Promise   is done ...");
        });
    };
//RESOLVE THE PROMISE ()::
    //resolve of a normal promise syntax :: 
myPromise().then((promiseResult)=>{
    console.log(promiseResult);
}).catch((alsoPromiseResult)=>{
    console.log(alsoPromiseResult);
});
    //a promise depends on the resolve of another promise ...
myPromise().then((resultFromFirstPromise)=>{
    console.log(resultFromFirstPromise);
    return mySecondPromise();
}).then((resultFromSecondPromise)=>{
    console.log(resultFromSecondPromise);
    return myThirdPromise();
}).then((resultFromThirdPromise)=>{
    console.log(resultFromThirdPromise);
}).catch((resultIfOneOfThePreviousPromisedIsRejected)=>{
    console.log(resultIfOneOfThePreviousPromisedIsRejected);
});
    //to execute all the promises at once :: 
Promise.all([myPromise(),mySecondPromise(),myThirdPromise()]).then((result)=>{
    console.log(`FINISHED :: ${result}`);
});
    //execute the promise once one of the promises is done ::
Promise.race([myPromise(),mySecondPromise(),myThirdPromise()]).then((result)=>{
        console.log(`FINISHED :: ${result}`);
});
//OBJECTS IN JS
class Person {
     name ;
     lastname;
     constructor(name,lastname){
         this.name = name;
         this.lastname =  lastname;
     }
}
class Student extends Person{
    constructor(id_student,name,lastname){
        super(name,lastname);
        this.id_student = id_student;
    }
    get __id_student(){
        return this.id_student;
    }
    set __id_student(id_student){
        this.id_student = id_student;
    }
    get __name_student(){
        return this.name;
    }
    set __name_student(name){
        this.name = name;
    }
    get __lastname_student(){
        return this.lastname;
    }
    set __lastname_student(lastname){
        this.lastname = lastname;
    }
    __show = ()=>{
        return `
        --student id :: ${this.id_student} \n 
        --student name :: ${this.name} \n
        --student lastname :: ${this.lastname}`
    }
}
let genId = (openPoint,endPoint) =>{
    return Math.floor(Math.random() * (endPoint - openPoint) + openPoint);
}
var student = new Student(genId(1,10),'anas','trak');
console.log(student.__show());
    //Modules exports
    module.exports = func;  