if(!pets) {
    fetch(path + "/show")
    .then(function(res) {
        return res.json();
    })
    .then(function(data) {
        if (data.length) {
            pets = data;
            localStorage.setItem("band-cats", JSON.stringify())
            for (let pet of data) {
                createCard(pet, block);
            }
        }
    })
<<<<<<< HEAD
}
=======
>>>>>>> 48f72756ec2d2bddd2c72f720972922f109dd8bc


addBtn.addEventListener("click", e => {
    mdBox.classList.toggle("active");
});
<<<<<<< HEAD
// editBtn.addEventListener("click", e => {
//     mdBox.classList.toggle("active");
// });
=======
>>>>>>> 48f72756ec2d2bddd2c72f720972922f109dd8bc
mdClose.addEventListener("click", e => {
    mdBox.classList.remove("active");
});
mdBox.addEventListener("click", e => {
    if (e.target === e.currentTarget) {
        mdBox.classList.remove("active");
    }
});
<<<<<<< HEAD

addForm.elements.image.addEventListener("change", e => {
    prevTag.style.backgroundImage = `url(${e.currentTarget.value})`;
})

addForm.addEventListener("submit", e => {
    e.stopPropagation(); // Всплытие пузырька
    e.preventDefault(); // Остановить действие по умолчанию 
    // console.log(e.currentTarget);
    // console.log(addForm.children); // обращение ко всем дочерним тегам, прямым потомкам
    // console.log(addForm.elements); // элементы формы 
    
    const body = {}
    for (let i = 0; i < addForm.elements.length; i++) {
        const el = addForm.elements[i];
        // console.log(el.name, el.value);
        if (el.name) {
            if (el.name === "favorite") {
                body[el.name] = el.checked;
            } else {
                body[el.name] = el.value;    
            }
            
        }
    }
    // console.log(body);
    fetch(path + "/ids")
        .then(res => res.json())
        .then(ids => {
            console.log(ids);
            body.id = ids[ids.length - 1] + 1;
            console.log(body);
            return fetch(path + "/add", {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            })    
    })
    .then(res => {
        if (res.status === 200) {
            addForm.reset();
            prevTag.style = null;    
            mdBox.classList.remove("active");
            createCard(body, block);
            pets.push(body);
            localStorage.setItem("band-cats", JSON.stringify(pets));
        }
    })
    .catch(err => {
        console.log(res.status);
    })
})
=======
>>>>>>> 48f72756ec2d2bddd2c72f720972922f109dd8bc
