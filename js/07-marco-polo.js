for (var i=1; i <= 100; i++){
    
    var three_mult = i % 3;
    var five_mult = i % 5;

    if ((three_mult == 0) && (five_mult == 0)){
        document.write("Marco! Polo! <br>");
    }
    else if (three_mult == 0){
        document.write("Marco! <br>");
    }
    else if (five_mult == 0){
        document.write("Polo! <br>");
    }
    else {
        document.write(i + "<br>");
    }
}
