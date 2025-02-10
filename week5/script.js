function $(_element) {
    let e = document.querySelectorAll(_element)
    return (e.length > 1)?e:e[0]
}

$(`#btnAdd`).addEventListener(`click`, (e)=>{
    let post = document.createElement(`div`);
    post.setAttribute(`class`, `post`);
    let p = document.createElement(`p`);
    p.innerHTML = $(`textarea`).value;

    let check = document.createElement(`input`);
    check.setAttribute(`type`, `checkbox`);
    check.setAttribute(`hidden`, `true`);
    check.setAttribute(`name`, `delCheck`);
    post.appendChild(check)

    let time = document.createElement(`time`);
    time.innerHTML = new Date().toLocaleTimeString();
    post.appendChild(time);

    post.appendChild(p);
    $(`#output`).appendChild(post);

    let arr = Array.from(document.querySelectorAll(`.post`)).map(value=>value.outerHTML)
    let arrString = arr.join("")
    localStorage.setItem(`posts`, JSON.stringify(arrString));
});



$(`#btnDel`).addEventListener(`click`, (e)=>{
    e.target.disabled = `true`;
    $(`#btnSel`).removeAttribute(`disabled`)
    $(`#btnCancel`).removeAttribute(`disabled`)
    $(`#btnConfirm`).removeAttribute(`disabled`)
    let checkArr = [];
    checkArr = document.querySelectorAll(`input[name="delCheck"]`);
    checkArr.forEach((value, i)=>{
        value.removeAttribute(`hidden`)
    })
});

$(`#btnCancel`).addEventListener(`click`, (e)=>{
    $(`#btnSel`).disabled = `true`;
    $(`#btnCancel`).disabled = `true`;
    $(`#btnConfirm`).disabled = `true`;
    $(`#btnDel`).removeAttribute(`disabled`)
    let checkArr = [];
    checkArr = document.querySelectorAll(`input[name="delCheck"]`);
    checkArr.forEach((value, i)=>{
        value.hidden = "true";
    });
});

$(`#btnSel`).addEventListener(`click`, (e)=>{
    let checkArr = [];
    checkArr = document.querySelectorAll(`input[name="delCheck"]`);
    checkArr.forEach((value, i)=>{
        value.checked = "true";
    });
});

$(`#btnConfirm`).addEventListener(`click`, (e)=>{
    let checkArr = [];
    let checkIndex = [];
    checkArr = document.querySelectorAll(`input[name="delCheck"]`);
    var checkLength = checkArr.length
    for (let i = 0; i < checkLength; i++) {
        if (document.querySelectorAll(`input[name="delCheck"]`)[i].checked) {
            checkIndex.push(i)
        }
    }

    checkIndex.reverse();

    let posts = [];
    posts = document.querySelectorAll(`.post`);
    for (let i = 0; i < checkIndex.length; i++) {
        posts[checkIndex[i]].remove();
    }

    $(`#btnSel`).setAttribute(`disabled`, `true`);
    $(`#btnCancel`).setAttribute(`disabled`, `true`);
    $(`#btnConfirm`).setAttribute(`disabled`, `true`);
    $(`#btnDel`).removeAttribute(`disabled`);
    checkArr = document.querySelectorAll(`input[name="delCheck"]`);
    
    if (checkArr != undefined) {
        for (let i = 0; i < checkArr.length; i++) {
            document.querySelectorAll(`input[name="delCheck"]`)[i].hidden = "true";
        }
    }
    let arr = Array.from(document.querySelectorAll(`.post`)).map(value=>value.outerHTML)
    let arrString = arr.join("")
    localStorage.setItem(`posts`, JSON.stringify(arrString));
})

try {
    $(`#output`).innerHTML = JSON.parse(localStorage.getItem(`posts`))
}
catch {
    console.log("no local storage found. ")
}