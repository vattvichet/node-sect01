
const fs = require('fs');
const http = require('http');
const url = require('url');


const templateOverview = fs.readFileSync('./starter/templates/template-overview.html', 'utf-8',);
const templateCard = fs.readFileSync('./starter/templates/template-card.html', 'utf-8',);
const templateProduct = fs.readFileSync('./starter/templates/template-product.html', 'utf-8',);


const data = fs.readFileSync('./starter/dev-data/data.json', 'utf-8',);


const dataObj = JSON.parse(data);



const server = http.createServer((request, response) => {
    const pathName = request.url;
    if (pathName === '/' || pathName === '/overview') {
        response.writeHead(404, {
            'Content-type': 'text/html'
        });
        const cardHtml = dataObj.map(e => replaceTemp);
        response.end(templateOverview);
    } else if (pathName === '/product') {
        response.end("This is our product");
    } else if (pathName === '/api') {
        response.writeHead(200, { 'Content-type': 'application/json' });
        response.end(data);
    }
    else {
        response.writeHead(404, {
            'Content-type': 'text/html'
        });
        response.end("<h1> Not Found </h1>");
    }


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
