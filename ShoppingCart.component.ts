import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onlineshop',
  templateUrl: './onlineshop.component.html',
  styleUrls: ['./onlineshop.component.css']
})
export class OnlineshopComponent {
 public categories = ['Select a Category', 'Electronics', 'Shoes'];
 public electronics = ['Select Electronic Product', 'Samsung TV', 'MI Mobile'];
 public shoes = ['Select Shoe Product', 'Nike Casuals', 'Lee Cooper Boot'];
 public selectedProducts = [];
 public selectedCategory;

 public productsData = [
   {
     Name: 'Samsung TV',
     Price: 45000.53,
     Photo: 'assets/tv.jpg'
   },
   {
    Name: 'MI Mobile',
    Price: 15000.53,
    Photo: 'assets/mobile.jpg'
  },
  {
    Name: 'Nike Casuals',
    Price: 6000.53,
    Photo: 'assets/shoe.jpg'
  },
  {
    Name: 'Lee Cooper Boot',
    Price: 3000.53,
    Photo: 'assets/shoe1.jpg'
  }
 ];
 public selectedProduct;
 public searchResults = [];
 public prodName= '';
 public prodPrice=0;
 public prodPhoto='';
 public cartItems = [];
 public cartItemsCount=0;
 public isCartVisible=false;

 public CategoryChanged() {
   switch(this.selectedCategory) {
     case 'Electronics':
       this.selectedProducts=this.electronics;
       break;
       case 'Shoes':
         this.selectedProducts = this.shoes;
         break;
   }
 }

 public ProductChanged() {
   this.searchResults = this.productsData.filter(x=>x.Name==this.selectedProduct);
   this.prodName = this.searchResults[0].Name;
   this.prodPrice = this.searchResults[0].Price;
   this.prodPhoto = this.searchResults[0].Photo;
 }
 public AddToCart() {
   this.cartItems.push(this.searchResults[0]);
   this.cartItemsCount = this.cartItems.length;
 }
 public DeleteCartItem(index){
    let status = confirm('Are you sure, Want to Delete?');
    if(status==true) {
      this.cartItems.splice(index,1);
      this.cartItemsCount = this.cartItems.length;
    }
 }
 public ShowCart(){
   this.isCartVisible = (this.isCartVisible==false)?true:false;
 }
}
