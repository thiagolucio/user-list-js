/* Get the class for first Title of App and input  text value inside */
// var title = document.querySelector(".first-title");
    var title = document.querySelector(".first-title");
    title.textContent = "User List Management";
<<<<<<< HEAD
// var user_data = document.querySelector(".tr-user");
// console.log(user_data);



var users = document.querySelectorAll(".tr-user");   

for (var i = 0; i < users.length; i++) {
    var user = users[i];    
=======
    // console.log(title.textContent);
    //Get Data from User
    // var user_data = document.querySelector(".tr-user");
    // console.log(user_data);



var users = document.querySelectorAll(".tr-user");


for (var i = 0; i < users.length; i++) {
    var user = users[i];
>>>>>>> 18e5bcd738f132ac38d0e38cdefce6d784519ff0

    //Id from user
    var td_id = user.querySelector(".td-id-user");
    var id = td_id.textContent;
    //Name from user
    var td_name = user.querySelector(".td-firstName-user");
    var name = td_name.textContent;
    //Surname from user
    var td_surname = user.querySelector(".td-surname-user");
    var surname = td_surname.textContent;
    //Age from user
    var td_age = user.querySelector(".td-age-user");
    var age = td_age.textContent;
    //Email from user
    var td_email = user.querySelector(".td-email-user");
    var email = td_email.textContent;
    //Password from user
    var td_password = user.querySelector(".td-password-user");
    var password = td_password.textContent;
    // console.log(users[i]);
    // console.log(td_name.textContent);

    console.log(name);
    console.log(surname);
    console.log(age);
    console.log(email);
    console.log(password);

<<<<<<< HEAD
    // var message = "Not be empty";    
    // if (id == "" && name == "" && surname == "" && age == "" && email == "" && password == "") {
    //     td_id.textContent = message;
    //     td_name.textContent = message;
    //     td_surname.textContent = message;
    //     td_age.textContent = message;
    //     td_email.textContent = message;
    //     td_password.textContent = message;
    // }
    
    if (id == "") {                
        td_id.textContent = "ID not be empty!";
        //user.style.backgroundColor = "red";        
        user.classList.add("errorColor");
=======
    // var message = "Not be empty";
    // var style =  message.style.color = "#ff0000";

    if (id == "") {
        // td_id.textContent = message;
        td_id.textContent = "ID not be empty!";
        // message = style;
        // td_id.textContent = "ID not be empty!";
        // td_id.textContent = message.style.color = "#ff0000";

>>>>>>> 18e5bcd738f132ac38d0e38cdefce6d784519ff0
}
    if (name == "") {
        td_name.textContent = "NAME not be empty!";
       
}
    if (surname == "") {
        td_surname.textContent = "SURNAME not be empty!";
}      
    if (age == "") {
        td_age.textContent = "AGE not be empty!";       
}
    if (email == "") {
        td_email.textContent = "EMAIL not be empty!";       
}
    if (password == "") {
        td_password.textContent = "PASS not be empty!";       
}
<<<<<<< HEAD
}

=======
} //end for

var btnAdd = document.querySelector('#add-user');
btnAdd.addEventListener("click", function () {
    event.preventDefault();
    var form = document.querySelector("#form-add-user");

    var insertFirstName = form.inputFirstName.value;
    var insertSurname = form.inputSurName.value;
    var insertAge = form.inputAge.value;
    var insertEmail = form.inputEmail.value;
    var insertPassword = form.inputPassword.value;

    console.log(insertFirstName);
    console.log(insertSurname);
    console.log(insertAge);
    console.log(insertEmail);
    console.log(insertPassword);

})
//Parei na aula 4 - ultima video aula - Adicionando pacientes na tabela
>>>>>>> 18e5bcd738f132ac38d0e38cdefce6d784519ff0
