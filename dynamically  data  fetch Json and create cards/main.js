document.getElementById('thumb0')
.addEventListener("click", function(event) {
    element('rad1');
}, {once: true})



 const  element =()=>{
    fetch ("data.json")
.then(Response => Response.json())
.then(json=>{ 

   
    console.log(Object.entries(json))

let text = "";
for(const x of Object.entries(json)){

   
    console.log
    text += x + "<br>";

    
}
let max,min,
 last_value;
Object.entries(json).map(item=>{ 
let last= item[1]
last_value= last.pop();
console.log(last_value)
    // last_value= item.shift

console.log(item[0]);

  

   let value= item[1].sort(function(a, b){
        return a-b;
    })
 max= value.pop();
 min= value.shift();

 document.getElementById('app4').innerHTML+=` 
<div class=" card">




 <h2>${item[0]} </h2>

 <h2> <span class="last">Last_Value:
  ${last_value}</h3>
</span>
<div class="min_max">
<span class="min">
  Min-Value: ${min}</span>
  <span class="max"> Max-Value: ${max}
  
</span>
</div>
</div>
`;
 }) 
})
}

