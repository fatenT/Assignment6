var user_input;

user_input = window.prompt("Please enter a number");
user_input = parseInt(user_input, 10);

for (var i=user_input; i >= 0; i--){
    document.write(i + "<br>");
}