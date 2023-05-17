var p3 = fetch("https://restcountries.com/v3.1/all").then((data) => data.json()).then((data1) => console.log(data1));






// var p2=fetch("https://api.covidtracking.com/v2/us/daily.json").then((data)=>data.json()).then((data1)=>console.log(data1));




// var p1=fetch("https://restcountries.com/v3.1/all").then((data)=>data.json()).then((data1)=>foo(data1));

// function foo(data1){
//     for(let i=0;i<data1.length;i++){
//         var div=document.createElement("div");
//         div.innerHTML=`Country name:${data1[i].name.common} <br>
//         Capital:${data1[i].capital[0]}<br><br>`;
//         document.body.append(div);
//         }

// }


var container = document.createElement("div");
container.className="container";
var row = document.createElement("div");
row.className="row";

container.append(row);
var p1 = fetch("https://restcountries.com/v3.1/all");
p1.then((data) => data.json()).then((data1) => foo(data1));


function foo(data1) {
    for (var i = 0; i < data1.length; i++) {
        row.innerHTML+= `<div class="col-md-4">
        <div class="card border-primary mb-3" style="max-width: 18rem;">
        <div class="card-header">${data1[i].name.common}</div>
        <img src="${data1[i].flags.svg}" class="card-img-top" alt="...">
        <div class="card-body text-primary">
        <h5 class="card-title"> Capital:${data1[i].capital}</h5>
        <h5 class="card-title"> Region:${data1[i].region}</h5>
        <h5 class="card-title"> Country code:${data1[i].cioc}</h5>

        </div>
        </div>
        </div>`;

        document.body.append(container);


    }
}


