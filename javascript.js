const loadPhone = async()=>{
    const res = await fetch("https://openapi.programming-hero.com/api/phones?search=iphone")
    const data = await res.json()
    const phone = data.data
    displayPhone(phone)
}

const displayPhone=phones=>{
    phones.forEach(phone=>{
const phoneContainer=document.getElementById("card-container")
const phoneCard=document.createElement("div")
 phoneCard.innerHTML=`
 
 <div class="card w-96 bg-gray-100 shadow-xl mt-10  ">
  <figure><img src="${phone.image}" /></figure>
  <div class="card-body">
    <h2 class="text-center text-xl font-semibold mb-2">${phone.phone_name}</h2>
    <div class="card-actions justify-center mt-2">
    <button class="btn btn-outline btn-success">Buy Now</button>
    </div>
  </div>
</div>
 `
 phoneContainer.appendChild(phoneCard)
    })
}

// search button 

const handleSearch=()=>{
    console.log("hello this is me ")
}



loadPhone()
