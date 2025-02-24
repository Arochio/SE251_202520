function validateForm() {
    fnSpan = document.querySelector(`#fn-error`);
    lnSpan = document.querySelector(`#ln-error`);
    emailSpan = document.querySelector(`#email-error`);
    emailCSpan = document.querySelector(`#email-confirm-error`);
    phoneSpan = document.querySelector(`#phone-error`);

    if (document.forms["info"]["first-name"].value != "") {
        let pattern = /^[a-z]{1,}$/i;
        let text = document.forms["info"]["first-name"].value;
        
        if (pattern.test(text)) {
            fnSpan.innerHTML = ``;
            fnSpan.parentElement.classList.remove(`red`);
            var fNameInput = document.forms["info"]["first-name"].value
        }
        else {
            fnSpan.innerText = `Your name must not include special characters.`;
            fnSpan.parentElement.classList.add(`red`);
        }
    }
    else {
        fnSpan.innerText = `*`;
        fnSpan.parentElement.classList.add(`red`);
    }

    if (document.forms["info"]["last-name"].value != "") {
        let pattern = /^[a-z]{1,}$/i;
        let text = document.forms["info"]["last-name"].value;
        
        if (pattern.test(text)) {
            lnSpan.innerHTML = ``;
            lnSpan.parentElement.classList.remove(`red`);
            var lNameInput = document.forms["info"]["last-name"].value
        }
        else {
            lnSpan.innerText = `Your name must not include special characters.`;
            lnSpan.parentElement.classList.add(`red`);
        }
    }
    else {
        lnSpan.innerText = `*`;
        lnSpan.parentElement.classList.add(`red`);
    }

    if (document.forms["info"]["email"].value != "") {
        if (document.forms["info"]["email"].value == document.forms["info"]["emailConfirm"].value) {
            let pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;
            let text = document.forms["info"]["email"].value

            if (pattern.test(text)) {
                emailSpan.innerHTML = '';
                emailCSpan.innerHTML = '';
                emailSpan.parentElement.classList.remove(`red`);
                emailCSpan.parentElement.classList.remove(`red`);
                var emailInput = document.forms["info"]["email"].value;
            }
            else {
                emailSpan.innerText = `Invalid email format.`;
                emailSpan.parentElement.classList.add(`red`);
            }
        }
        else {
            emailSpan.innerText = `Email fields must match.`;
            emailSpan.parentElement.classList.add(`red`);
            emailCSpan.innerText = `Email fields must match.`;
            emailCSpan.parentElement.classList.add(`red`);
        }
    }
    else {
        emailSpan.innerText = `*`;
        emailSpan.parentElement.classList.add(`red`);
    }

    if (document.forms["info"]["phone"].value != "") {
        let pattern = /^\d{10}$/
        let text = document.forms["info"]["phone"].value

        if (pattern.test(text)) {
            phoneSpan.innerHTML = ``;
            phoneSpan.parentElement.classList.remove(`red`);
            var phoneInput = document.forms["info"]["phone"].value;
        }
        else {
            phoneSpan.innerText = `Invalid phone format.`;
            phoneSpan.parentElement.classList.add(`red`);
        }
    }
    else {
        phoneSpan.innerText = `*`;
        phoneSpan.parentElement.classList.add(`red`);
    }

    if (fNameInput != null && lNameInput != null && emailInput != null && phoneInput != null) {
        var person = {
            fname:fNameInput,
            lname:lNameInput,
            email:emailInput,
            phone:phoneInput
        }

        document.querySelector(`div#form`).style.display = `none`;
        document.querySelector(`#confirmation`).style.display = `block`;
        document.querySelector(`p#info`).innerHTML = `${person.fname} ${person.lname}<br />${person.email}<br />${person.phone.slice(0,3)}\-${person.phone.slice(3,6)}\-${person.phone.slice(6,10)}`;
    }
    
}