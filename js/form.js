var btnAdd = document.querySelector('#add-user');

btnAdd.addEventListener("click", function () {
    event.preventDefault();

    var form = document.querySelector("#form-add-user");
    var newUser = getUserForm(form);

    console.log(newUser);

    //new line in table user
    var userTr = document.createElement("tr");

    //create new cells in row of table
    var idTd = document.createElement("td");
    var nameTd = document.createElement("td");
    var surNameTd = document.createElement("td");
    var ageTd = document.createElement("td");
    var emailTd = document.createElement("td");
    var passTd = document.createElement("td");

    //insert new value inside the new td field
    idTd.textContent = newUser.inputNewId;
    nameTd.textContent = newUser.inputNewName;
    surNameTd.textContent = newUser.inputNewSurname;
    ageTd.textContent = newUser.inputNewAge;
    emailTd.textContent = newUser.inputNewEmail;
    passTd.textContent = newUser.inputNewPass;

    //insert new td cells(child) inside the new tr(father)
    userTr.appendChild(idTd);
    userTr.appendChild(nameTd);
    userTr.appendChild(surNameTd);
    userTr.appendChild(ageTd);
    userTr.appendChild(emailTd);
    userTr.appendChild(passTd);

    //select the object table(father) to insert new tr line(child)
    var table = document.querySelector("#table-users");
    //insert tr(child) in table(father)
    table.appendChild(userTr);
})

function getUserForm(form) {

    var newUser = {
        inputNewId: form.inputId.value,
        inputNewName: form.inputFirstName.value,
        inputNewSurname: form.inputSurName.value,
        inputNewAge: form.inputAge.value,
        inputNewEmail: form.inputEmail.value,
        inputNewPass: form.inputPassword.value
    }
    return newUser;
}