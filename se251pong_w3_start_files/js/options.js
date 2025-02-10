/*--------
    Make the Options Button 
    . on click
    . show or hide the `.sides` div
---------*/

optionsBtn = document.querySelector("#options");
optionsBtn.children[0].addEventListener(`click`, (e) => {
    optionsBtn.children[1].classList.toggle(`hidden`);
})

/*---------
    Program the two fill inputs to do the following:
    . Display the correct colors on the inputs and outputs and paddles    
    . using an `input` event
        . Change the player's fill property to the value of the input
        . Change the pad's fill property  to the player's fill property
        . Show the fill's hex code in the output div 

-----------*/

fillList = document.querySelectorAll(".fill");
for (let i = 0; i < fillList.length; i++) {
    fillList[i].value = player[i].fill;
    fillList[i].nextElementSibling.innerText = player[i].fill;
    fillList[i].parentElement.children[4].innerHTML = player[i].fill;
    fillList[i].addEventListener(`input`, (e)=> {
        player[i].fill = e.target.value;
        fillList[i].nextElementSibling.innerText = player[i].fill;
        pad[i].fill = player[i].fill;
        fillList[i].parentElement.children[4].innerHTML = player[i].fill;
    })
}

strokeList = document.querySelectorAll(".stroke");
for (let i = 0; i < strokeList.length; i++) {
    strokeList[i].value = player[i].stroke;
    strokeList[i].nextElementSibling.innerText = player[i].stroke;
    strokeList[i].parentElement.children[7].innerHTML = player[i].stroke;
    strokeList[i].addEventListener(`input`, (e)=> {
        player[i].stroke = e.target.value;
        pad[i].stroke = player[i].stroke;
        strokeList[i].parentElement.children[7].innerHTML = player[i].stroke;
        strokeList[i].nextElementSibling.innerText = player[i].stroke;
    })
}

/*---------
    Program the six key inputs to do the following:
    . Display the correct key names for each player   
    . using a `keydown` event
        .Display the correct key name in the input
        .Change the player's key to the value of the input
        .Show the player's key in the output div 
-----------*/

upInputs = document.querySelectorAll(`.u`);
for (let i = 0; i < upInputs.length; i++) {
    upInputs[i].value = player[i].keys.u;
    upInputs[i].addEventListener(`keydown`, (e)=> {
        upInputs[i].value = e.key;
        player[i].keys.u = e.key;
        upInputs[i].parentElement.children[10].innerHTML = e.key;
    })
    upInputs[i].addEventListener(`focus`, (e)=> {
        currentState = `pause`;
    })
}

downInputs = document.querySelectorAll(`.d`);
for (let i = 0; i < downInputs.length; i++) {
    downInputs[i].value = player[i].keys.d;
    downInputs[i].addEventListener(`keydown`, (e)=> {
        downInputs[i].value = e.key;
        player[i].keys.d = e.key;
        downInputs[i].parentElement.children[13].innerHTML = e.key;
    })
    downInputs[i].addEventListener(`focus`, (e)=> {
        currentState = `pause`;
    })
}

straightInputs = document.querySelectorAll(`.s`);
for (let i = 0; i < straightInputs.length; i++) {
    straightInputs[i].value = player[i].keys.s;
    straightInputs[i].addEventListener(`keydown`, (e)=> {
        straightInputs[i].value = e.key;
        player[i].keys.s = e.key;
        straightInputs[i].parentElement.children[16].innerHTML = e.key;
    })
    straightInputs[i].addEventListener(`focus`, (e)=> {
        currentState = `pause`;
    })
}

//change username
username = document.querySelectorAll(`.username`);
for (let i = 0; i < username.length; i++) {
    username[i].value = "Player " + (i + 1)
    username[i].addEventListener(`focus`, (e)=> {
        currentState = `pause`;
    })
    username[i].addEventListener(`focusout`, (e)=> {
        username[i].parentElement.children[0].innerHTML = e.target.value;
    })
}