const names = ['luis','javi','paco','emi']
const lasts = ['mora','test','etc']

outerLoop: for(const name of names){
    console.log(name)
    if(name === 'paco'){
        continue // skips iterations
        // break // finishes loop
    }
    for(const last of lasts){
        console.log(last)
        if (last === 'test'){
            break outerLoop; // laber statements
        }
    }
    
}