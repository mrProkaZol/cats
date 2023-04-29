const block = document.querySelector(".wrapper");
const addBtn = document.querySelector(".add");

// const editBtn = document.querySelector(".edit");
const mdBox = document.querySelector(".modal-block");
const mdClose = mdBox.querySelector(".modal-close");

const addForm = document.forms.add;
// const editForm = document.forms.edit;
const prevTag = addForm.querySelector(".preview");


let name = "mrProkaZol";
let path = `https://cats.petiteweb.dev/api/single/${name}`;

/*
    JSON.stringify(obj) => преобразует объект в строку
    JSON.parse(str) => преобразует строку в объект
*/

let pets = localStorage.getItem("band-cats");
if (pets) {
    try {
        pets = JSON.parse(pets);
        for (let pet of pets) {
            createCard(pet, block);
        }
    } catch(err) {
        console.warn(err.message);
        pets = null;
    }
    
}

// const products = [
//     {name:"Яблоко", type:"фрукт"},
//     {name:"Арбуз", type:"ягода"},    
//     {name:"Помидор", type:"овощ"},
//     {name:"Огурец", type:"овощ"},
//     {name: "Вишня", type:"ягода"}
// ]

// sessionStorage.setItem('products', JSON.stringify(products))

// const getBerry = JSON.parse(sessionStorage.getItem('products')).filter(product =>product.type === 'ягода')

