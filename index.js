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
