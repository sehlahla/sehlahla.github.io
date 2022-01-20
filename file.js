function customerInfo(){
    const info = document.querySelector('#info');
    const Name = document.querySelector('#names').value;
    const Last_name = document.querySelector('#lnames').value;
    const comment= document.querySelector('#rVcomment').value;
    const meal = document.querySelector('#meal-Input').value
    const rating = document.querySelector('.lcontainer').value
    
    const customer = document.createElement('div')
    customer.innerHTML= `
    <h2>${Name}</h2>
    <h2>${Last_name}</h2>
    <h4>${comment}</h4>
    <h4>${meal}</h4>
    <p>${rating}</p>
    `;
    
    info.appendChild(customer);
}