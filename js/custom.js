/* Get the class for first Title of App and input  text value inside */
var title = document.querySelector(".first-title");
title.textContent = "User List Management";
console.log(title.textContent);

//Get Data from User
var user_data = document.querySelector(".tr-user");
console.log(user_data);

//Id from user
var td_id = user_data.querySelector(".td-id-user");
var id = td_id.textContent;
console.log(td_id);
console.log(id);

//Name from user
var td_name = user_data.querySelector(".td-firstName-user");
var name = td_name.textContent;
console.log(td_name);
console.log(name);

if(name.textContent = " ")  {
    name.textContent = "This field not be empty!";
}

//Surname from user
var td_surname = user_data.querySelector(".td-surname-user");
var surname = td_surname.textContent;
console.log(td_surname);
console.log(surname);

//Age from user
var td_age = user_data.querySelector(".td-age-user");
var age = td_age.textContent;
console.log(td_age);
console.log(age);

//Email from user
var td_email = user_data.querySelector(".td-email-user");
var email = td_email.textContent;
console.log(td_email);
console.log(email);

//Password from user
var td_password = user_data.querySelector(".td-password-user");
var password = td_password.textContent;
console.log(td_password);
console.log(password);

//Inform error if empty field


// || td_surname < 0 || td_email < 0 || td_password < 0 || td_age < 0)