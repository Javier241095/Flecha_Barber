function RemoverClass(Inputs = [], removeClass = 'class'){
    for(let input of Inputs){
        input.classList.remove(removeClass);
    }
}