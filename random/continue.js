const names = ['luis','javi','paco','emi']

for(const name of names){
    
    if(name === 'paco'){
        continue // skips iterations
        // break // finishes loop
    }
    console.log(name)
}