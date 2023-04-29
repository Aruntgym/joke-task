const log = (name) => console.log(name)

let container=document.createElement("div");
container.setAttribute("class","container");

let row=document.createElement("div");
row.setAttribute("class","row");


let col=document.createElement("div");
col.setAttribute("class","col-md-12");
col.style.textAlign="center";

row.append(col);
container.append(row);
document.body.append(container);

fetch("https://geek-jokes.sameerkumar.website/api?format=json")
.then((response)=>response.json())
.then((data)=>{
    log(data)
    //data.forEach(ele => {
   const createObject = {
    //...ele,
    joke : element.joke
   }  
    create(createObject)
    })
 //})
.catch((err)=>log(err))

function create(elements){
    document.body.innerHTML += `
    <div class="container">
    <div class="info">
    <h1>${data.Joks}</h1>
    <p><span>${elements.joke}</span></p>
    </div>
    </div>
    `
}
