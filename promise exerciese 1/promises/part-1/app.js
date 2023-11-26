let favNumber = 5; 
let baseURL = "http://numberapi.com"; 

//part one
$.getJSON(`${baseURL}/${favNumber}?json`).then(data => {
    console.log(data); 
}); 

//part two
let favNumbers = [7, 11, 22];
$.getJSON(`${baseURL}/${favNumbers}?json`).then(data => {
  console.log(data);
});

//part three
Promise.all(
    Array.from({ length: 4 }, () => {
        return $.getJSON(`${baseURL}/${favNumber}?json`); 
    })
).then(facts => {
    facts.forEach(data => $("body").append(`<p>${data.text}</p>`)); 
}); 