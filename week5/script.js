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

    var arr = Array.from($(`.post`)).map(value=>value.outerHTML)
    var arrString = arr.join("")
    localStorage.setItem(`posts`, JSON.stringify(arrString));
});

console.log(JSON.parse(localStorage.getItem(`posts`)))

$(`#output`).innerHTML = JSON.parse(localStorage.getItem(`posts`))

$(`#btnDel`).addEventListener(`click`, (e)=>{
    e.target.disabled = `true`;
    $(`#btnSel`).removeAttribute(`disabled`)
    $(`#btnCancel`).removeAttribute(`disabled`)
    $(`#btnConfirm`).removeAttribute(`disabled`)
    let checkArr = [];
    checkArr = $(`input[name="delCheck"]`);
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
    checkArr = $(`input[name="delCheck"]`);
    checkArr.forEach((value, i)=>{
        value.hidden = "true";
    });
});

$(`#btnSel`).addEventListener(`click`, (e)=>{
    let checkArr = [];
    checkArr = $(`input[name="delCheck"]`);
    checkArr.forEach((value, i)=>{
        value.checked = "true";
    });
});

$(`#btnConfirm`).addEventListener(`click`, (e)=>{
    let checkIndex = [];
    let checkArr = [];
    let postArr = [];
    postArr = $(`.post`);
    checkArr = $(`input[name="delCheck"]`);
    checkArr.forEach((value, i)=>{
        if (value.checked == "true") {
            checkIndex.push(i);
        }
    });

    checkIndex.reverse();
    checkIndex.forEach((value, i)=>{
        postArr[value].remove();
    });
    $(`#btnSel`).disabled = `true`;
    $(`#btnCancel`).disabled = `true`;
    $(`#btnConfirm`).disabled = `true`;
    $(`#btnDel`).removeAttribute(`disabled`)
    checkArr = $(`input[name="delCheck"]`);
    checkArr.forEach((value, i)=>{
        value.hidden = "true";
    });
})