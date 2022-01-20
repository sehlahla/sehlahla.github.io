const form = document.querySelector('.form');
const Name = document.querySelector('#names');
const surname = document.querySelector('#lnames');
const meals = document.querySelector('#meal-Input');
const meal_list = document.querySelector('.list meals-list');
const comment = document.querySelector('#rVcomment');
const submit = document.querySelector('.btn submit');

//const database = firebase.firestore();

submit.addEventListener('click', (e) => {
e.preventDefault();
})

database.collection('customer information').doc().set({
    Name: Name.value,
    surname: surname.value,
    meal: meal.value,
    comment: comment.value,
}).then(() => {
    form .reset();
}) 
