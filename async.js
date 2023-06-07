

fetch("https://fakestoreapi.com/products").then((data)=>{

return data.json()
}).then((ObjectData)=>{

    let data1="";
    ObjectData.map((values=>{
        data1+=`<div class="card" style="width: 18rem; mx-3 my-3">
        <img src="${values.image}" class="card-img" alt="...">
        <div class="card-body">
          <h4 class="card-title">${values.title}</h4>
          <h5 class="card-price">${values.price}</h5>
          <p class="card-desc">${values.description}</p>
          <p class="card-cata">${values.catagory}</p>

          <a href="#" class="btn btn-primary">BUY NOW</a>
        </div>
      </div>`
    }));
    document.getElementById("cards").innerHTML=data1
    
}) .catch((err)=>{console.log(err)})
 


