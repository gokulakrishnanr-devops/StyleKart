const products = [
  {id:1,name:"Floral Summer Dress",category:"Dress",price:1499,image:"https://images.unsplash.com/photo-1496747611176-843222e1e57c"},
  {id:2,name:"Casual Crop Top",category:"Top",price:799,image:"https://images.unsplash.com/photo-1520975922203-bbd1b6e5a1b4"},
  {id:3,name:"High Waist Jeans",category:"Jeans",price:1899,image:"https://images.unsplash.com/photo-1523381210434-271e8be1f52b"},
  {id:4,name:"Printed Maxi Dress",category:"Dress",price:1699,image:"https://images.unsplash.com/photo-1503342217505-b0a15ec3261c"},
  {id:5,name:"Basic White Top",category:"Top",price:699,image:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"}
];

let currentProducts = products;
let cart = [];
let activeProduct = null;

/* RENDER PRODUCTS */

function renderProducts(){
  const container=document.getElementById("products");
  container.innerHTML="";
  currentProducts.forEach(p=>{
    container.innerHTML+=`
      <div class="card">
        <img src="${p.image}">
        <div class="card-content">
          <h4>${p.name}</h4>
          <div class="price">₹ ${p.price.toLocaleString("en-IN")}</div>
          <button class="btn" onclick="openModal(${p.id})">View</button>
        </div>
      </div>
    `;
  });
}

/* FILTER */

function filterCategory(cat){
  if(cat==="All") currentProducts=products;
  else currentProducts=products.filter(p=>p.category===cat);
  renderProducts();
}

/* MODAL */

function openModal(id){
  const p=products.find(x=>x.id===id);
  activeProduct=id;
  document.getElementById("modalImg").src=p.image;
  document.getElementById("modalTitle").innerText=p.name;
  document.getElementById("modalPrice").innerText="₹ "+p.price.toLocaleString("en-IN");
  document.getElementById("modal").style.display="flex";
}

function closeModal(){
  document.getElementById("modal").style.display="none";
}

/* CART */

function addToCart(id){
  const p=products.find(x=>x.id===id);
  cart.push(p);
  updateCart();
  closeModal();
}

function updateCart(){
  document.getElementById("cartCount").innerText=cart.length;
  const container=document.getElementById("cartItems");
  container.innerHTML="";
  let total=0;
  cart.forEach(item=>{
    total+=item.price;
    container.innerHTML+=`
      <div class="cart-item">
        <p>${item.name}</p>
        <p>₹ ${item.price.toLocaleString("en-IN")}</p>
      </div>
    `;
  });
  document.getElementById("cartTotal").innerText=total.toLocaleString("en-IN");
}

function toggleCart(){
  document.getElementById("cartPanel").classList.toggle("open");
}

document.addEventListener("DOMContentLoaded",renderProducts);
