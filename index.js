
const fs = require('fs');
const http = require('http');

const server = http.createServer((request, response) => {
    console.log(request);
    response.end("Hello from the sever");

});

server.listen(8000, '127.0.0.1', () => {
    console.log("Listening to request on port 8000");
});

























// const textInput = fs.readFileSync('./starter/txt/input.txt', 'utf-8');
// console.log(textInput);

// const textOutput = `My name is vichet: ${textInput}. \n Created on ${Date.now()}`;

// fs.writeFileSync('./starter/txt/input.txt', textOutput);
// console.log("File has been written......")

// fs.readFile('./starter/txt/start.txt', 'utf-8', (err, data1) => {
//     fs.readFile(`./starter/txt/${data1}.txt`, 'utf-8', (err, data2) => {
//         console.log(data2);
//         fs.readFile('./starter/txt/append.txt', 'utf-8', (err, data3) => {
//             console.log(data3);
//             fs.writeFile('./starter/txt/final.txt', `${data2} \n ${data3}`, 'utf-8', err => {
//                 console.log("File Has Been Read");
//             })
//         })
//     })
// })
// console.log("will be reading async");
