function receivesAFunction(callback){
    return callback()
}

function returnsANamedFunction(){
    console.log("green")
    return function namedAction(){
        console.log("I was able to run and inside i had another function that executed!")
    }
}

function returnsAnAnonymousFunction(){
    console.log('red')
    return () => {return (1+3)}
}

  


receivesAFunction(() => console.log("I ran in blue"))
returnsANamedFunction()
returnsAnAnonymousFunction()