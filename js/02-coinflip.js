var coinFlip = Math.floor((Math. random()* 100) + 1);   
var choice;
                                            
choice = window.prompt("Heads or Tails?");   

//Transfer the first letter of the user's input to an uppercase for reducing errors when checking with if statement 
choice = choice.charAt(0).toUpperCase() + choice.slice(1);  

if (choice != "") {
    if (coinFlip < 50 && choice == "Heads"){  
        alert("The flip was heads and you chose heads...you win!");
    }
    else if (coinFlip < 50 && choice == "Tails"){   
            alert("The flip was heads but you chose tails...you lose!");
    }
    else if (coinFlip > 50 && choice == "Heads"){   
        alert("The flip was tails but you chose heads...you lose!");
    }
    else if (coinFlip > 50 && choice == "Tails"){   
        alert("The flip was tails and you chose tails...you win!");
    }
}
else {
    alert("Please enter Heads or Tails");
}


