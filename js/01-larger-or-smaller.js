var int1,int2;

int1 = window.prompt("Enter the first integer");
int1 = parseInt(int1, 10);

int2 = window.prompt("Enter the second integer");
int2 = parseInt(int2, 10);

if (int1 > int2){
    document.write(int1 + " is the larger" + "<br>");
}
else if (int2 > int1){
    document.write(int2 + " is the larger" + "<br>");
}
else if (int1 === int2){
    document.write(" Both numbers are equal" + "<br>");
}