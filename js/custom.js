/* Get the class for first Title of App and input  text value inside */
// var title = document.querySelector(".first-title");
    var title = document.querySelector(".first-title");
    title.textContent = "User List Management";
    // console.log(title.textContent);
    //Get Data from User
    // var user_data = document.querySelector(".tr-user");
    // console.log(user_data);



var users = document.querySelectorAll(".tr-user");


for (var i = 0; i < users.length; i++) {
    var user = users[i];

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
        td_id.textContent = "ID?";
        td_id.classList.add("errorColor");
        //user.style.backgroundColor = "red";        
        // var message = "Not be empty";
        // var style =  message.style.color = "#ff0000";

}
    if (name == "") {
        td_name.textContent = "NAME empty!";
        td_name.classList.add("errorColor");
       
}
    if (surname == "") {
        td_surname.textContent = "SURNAME empty!";
        td_surname.classList.add("errorColor");
}      
    if (age == "") {
        td_age.textContent = "AGE empty!";
        td_age.classList.add("errorColor");
        
}
    if (email == "") {
        td_email.textContent = "EMAIL not be empty!";       
        td_email.classList.add("errorColor");      
}
    if (password == "") {
        td_password.textContent = "PASS not be empty!";       
        td_password.classList.add("errorColor");      
}
}



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
