const fs = require('fs');

const myString = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur libero eos labore, quaerat perspiciatis consequuntur provident omnis debitis veniam est aut error distinctio repellat magnam ratione deserunt id, quia vel."

function myFunction () {
    console.log('text file created!')
}


fs.writeFile("note.txt", myString, myFunction)