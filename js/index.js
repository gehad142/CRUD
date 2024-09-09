// 1- pop() ==============>delete last element in array and return it
// var friends = ["ahmed" ,"ali" ,"mohamed" ,"gehad" , "laila"];
// var x = friends.pop();
// console.log(friends);
// console.log(x);

// 2- shift()==============>delete first element in array and return it
// var x = friends.shift();
// console.log(x);

//3- push() ==========> add new element at the end of array and return the new length
// var x = friends.push("abdo" ,"gehad" ,"medo");
// console.log(friends);
// console.log(x);

//4- unshift() =========>add new element at the start of array and return the new length
// friends.unshift("laila");
// console.log(friends);

//5- sort() =========> order array according to a b c 
// friends.sort();
// console.log(friends);

//6- reverse() ==================> reverse the elements of array
// friends.reverse();
// console.log(friends);

//7- includes() =========> search in array from index 0 and return true or false
//  var x = friends.includes("mohamed");
//  console.log(x);

//8- indexof() ========> search about element and return index of it 
// var x = friends.indexOf("ali");
// console.log(x);

//9- lastindexof() =======> start search from the end of array
// var x = friends.lastIndexOf("ali");
// console.log(x);

//10- slice() =====> take copy from part of array and return it ,takes start and end < not  include the last index >
// var x = friends.slice(0,2);
// console.log(x);

// 11- splice =====> delete element  , add , update
// delete
// friends.splice(1 , 2);
// console.log(friends)

// add
// friends.splice(2 , 0 ,"medo");
// console.log(friends);

// update
// friends.splice(1 , 1 ,"ammar");
// console.log(friends);
// ************************************************************************************

// var product = [
//     {name:"oppo" , price:3000 , onsale:true},
//     {name:"iphone" , price:9000 , onsale:true},
//     {name:"samsung" , price:7000 , onsale:true}
// ];
// for(var i =0; i<product.length ; i++){
//     console.log(product[i].name);
// }

// ************************************************************************************
 var productNameInput = document.getElementById("productName");
 var productPriceInput = document.getElementById("productPrice");
 var productCategoryInput = document.getElementById("productCategory");
 var productDescriptionInput = document.getElementById("productDescription");

 var productContainer = [];

 function addProduct(){

    var product = {
       name:productNameInput.value,
       price:productPriceInput.value,
       category:productCategoryInput.value,
       desc:productDescriptionInput.value
    }
    productContainer.push(product);
    console.log(productContainer);
 }































