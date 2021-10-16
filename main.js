const productNameInput = document.getElementById("productName");
const productPriceInput = document.getElementById("productPrice");
const productCategoryInput = document.getElementById("productCategory");
const productDesInput = document.getElementById("productDes");

let productContainer =[];
if(localStorage.getItem("ourProducts") !=null){
    productContainer= JSON.parse(localStorage.getItem("ourProducts"))
    displayProduct();
}
function addProduct(){

    let product = {
        name: productNameInput.value,
        price: productPriceInput.value,
        category: productCategoryInput.value,
        desc:productDesInput.value,
    }
    productContainer.push(product);
    
    localStorage.setItem('ourProducts' , JSON.stringify(productContainer));
    console.log(productContainer);
    clearForm()
    displayProduct()
    
}

function clearForm(){
    productNameInput.value = "";
    productPriceInput.value = "";
    productCategoryInput.value = "";
    productDesInput.value = "";

}

function displayProduct(){
    let cartoon=``;
    for(let i=0 ; i < productContainer.length  ; i++ ){
        cartoon+=`<tr>
        <td>${i}</td>
        <td>${productContainer[i].name}</td>
        <td>${productContainer[i].price}</td>
        <td>${productContainer[i].category}</td>
        <td>${productContainer[i].desc}</td>
        <td><button onclick="updateProduct(${i})" class="btn btn-outline-info">Update</button></td>
        <td><button onclick="deleteProduct(${i})" class="btn btn-outline-dark">Delete</button></td>
    </tr>`
    }
    document.getElementById('tableBody').innerHTML = cartoon ;

}

function searchProduct(term){
    let cartoon=``;
    for(let i=0 ; i< productContainer.length  ;i++ ){
        if(productContainer[i].name.toLowerCase().includes(term.toLowerCase())== true){
        cartoon+=`<tr>
        <td>${i}</td>
        <td>${productContainer[i].name}</td>
        <td>${productContainer[i].price}</td>
        <td>${productContainer[i].category}</td>
        <td>${productContainer[i].desc}</td>
        <td><button onclick="updateProduct(${i})" class="btn btn-outline-info">Update</button></td>
        <td><button onclick="deleteProduct(${i})" class="btn btn-outline-dark">Delete</button></td>
    </tr>`}
    }
    document.getElementById("tableBody").innerHTML=cartoon;
}
function deleteProduct(i){
    productContainer.splice(i,1);
    localStorage.setItem('ourProducts' , JSON.stringify(productContainer));
    displayProduct();
}


function updateProduct(i){
    productNameInput.value = productContainer[i].name;
    productPriceInput.value = productContainer[i].price;
    productCategoryInput.value = productContainer[i].category;
    productDesInput.value = productContainer[i].desc;

    document.getElementById("button").innerHTML="Update";

    deleteProduct(i);
    
}
// function validateProductName(){
//     var regex = /^[A-Z][a-z]{2,5}$/
//     if(regex.test(productNameInput.value) == true)
//     {
//         return true ;
//     }
//     else
//     {
//     return false;
//     }
// }
// function validateProductPrice(){
//     var regex = /^([1-9][0-9]{3}|10000)$/
//     if(regex.test(productPriceInput.value) == true)
//     {
//         return true ;
//     }
//     else
//     {
//     return false;
//     }
// }
// function validateProductCategory(){
//     var regex = /^(laptop|tv|mobile)$/
//     if(regex.test(productCategoryInput.value) == true)
//     {
//         return true ;
//     }
//     else
//     {
//     return false;
//     }
// }
// function validateProductDesc(){
//     var regex = /^\s{10}$/g
//     if(regex.test(productDesInput.value) == true)
//     {
//         return true ;
//     }
//     else
//     {
//     return false;
//     }
// }
