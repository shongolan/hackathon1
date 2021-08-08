let items=[["Nike pegasus 1.2",199],["Nike zoom XV",365],["Nike running shoes 3.5",245],["Nike jacket for men",349],["Jacket in black",350],["Tshirt in dark black",99]]
let num=0
let total=0
let s=document.getElementById("totalprice")
let badge=document.getElementById("badge")
function add_to_cart(item){
    let cont=document.getElementById("tablebody")
    num++
    badge.innerHTML=num
    cont.innerHTML +=`
    <tr>
    <th scope="row">${num}</th>
    <td>${items[item][0]}</td>
    <td>$${items[item][1]}</td>
  </tr>`
  total+=items[item][1]
  s.innerHTML=`$ ${total} `
} 

function paid(){
   let money=document.getElementById("money").value
   if (money<total){
     alert("you dont have enough money")
   }else if(money=>total){
    total=Math.abs(total-money)
    document.getElementById("change").value=total
    console.log(money)
   }
}

