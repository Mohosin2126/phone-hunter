const loadPhone = async(searchText="iphone",show)=>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    const data = await res.json()
    const phone = data.data
    displayPhone(phone,show)
}

const displayPhone=(phones,show)=>{
    const phoneContainer=document.getElementById("card-container")
   phoneContainer.textContent=" "
   const allPhone=document.getElementById("showAll")
   if(phones.length>15 && !show){
    allPhone.classList.remove("hidden")
   }
   else{
    allPhone.classList.add("hidden")
   }
   if(!show){
    phones=phones.slice(0,15)
   }
   
    phones.forEach(phone=>{
const phoneCard=document.createElement("div")
phoneCard.innerHTML=`
 
 <div class="card md:w-96 bg-gray-100 shadow-xl mt-10  ">
  <figure><img class="p-4 md:p-2" src="${phone.image}" /></figure>
  <div class="card-body">
    <h2 class="text-center text-xl font-semibold mb-2">${phone.phone_name}</h2>
    <div class="card-actions justify-center mt-2">
    <button onclick="handleDetails('${phone.slug}')"  class="btn btn-outline btn-success">Show Details</button>
    </div>
  </div>
</div>
 `
 phoneContainer.appendChild(phoneCard)
    });

    toggle(false)
}

// search button 

const handleSearch=(show)=>{
    toggle(true)
    const searchField=document.getElementById("search-field")
    const searchText=searchField.value 
    loadPhone(searchText,show)
}
 const toggle=(isLoding)=>{
    const loader=document.getElementById("loader")
    if(isLoding){
        loader.classList.remove("hidden")
    }
    else{
        loader.classList.add("hidden")
    }
 }
 
 const handleShowAll=()=>{
    handleSearch(true)
 }


const handleDetails= async(id)=>{
    const res= await fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
    const data =await res.json()
    showModal(data.data)
}

const showModal=(phone)=>{
    const showDetailsPhoneName=document.getElementById("show-details-phone-name")
    showDetailsPhoneName.innerText=phone.name
    const phoneDes=document.getElementById("phone-des")
    phoneDes.innerHTML=`
    
    <img class="flex mx-auto mt-3" src="${phone.image}" />
    <p class="mt-4">Storage: ${phone.mainFeatures.storage}</p> <br>
    <p>Chipset: ${phone.mainFeatures.chipSet}</p> <br>
    <p>Memory: ${phone.mainFeatures.memory}</p> <br>
    
    <p>Brand: ${phone.brand}</p> <br>
    <p>Release Date: ${phone.releaseDate}</p> <br>
    `
    show_details_5.showModal()
}

loadPhone()
