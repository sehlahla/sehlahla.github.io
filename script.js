document.querySelector('.select-field').addEventListener('click',()=>{
  document.querySelector('.list').classList.toggle('show');
  document.querySelector('.down-arrow').classList.toggle('rotate180');

});
/*Below is the function to send data to the database + return thanks reply to the user*/
function sDatabase(){
  /*taking input*/  
var PostRview = document.getElementById('PostRview');
var name = document.getElementById('names').value;
var lname = document.getElementById('lnames').value;
var comment = document.getElementById('rVcomment').value;
  /*star rating + input*/
let star = document.querySelectorAll('input').value;
let showValue = document.querySelector('#rating-value');


for (let i = 0; i < star.length; i++) {
	star[i].addEventListener('click', function() {
		i = this.value;
		showValue.innerHTML = i + " out of 5";
	});
}
console.log(name,lname,comment);
}


const database = firebase.firestore();


