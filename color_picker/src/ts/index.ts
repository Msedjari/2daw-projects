function switchBg(color: string){
    let chosenColor = "white";
    switch (color){
        case "R" :
            chosenColor = "red" ;
            break;
        case "Y" :
                chosenColor = "yellow " ;
                break;
        case "G" :
            chosenColor = "green" ;
            break;
        case "B" :
            chosenColor = "blue " ;
            break;  
        default:
            break;      
    }
    document.body.style.backgroundColor = chosenColor ;
}

let redButton : HTMLButtonElement = document.getElementById("redButton") as HTMLButtonElement;
redButton.addEventListener("click" , () => switchBg('R'));
