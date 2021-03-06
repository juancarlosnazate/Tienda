import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Injectable()
export class DataService {
  shoppingCartArray:any = []
  shoppingCartTotal:number = 0;
  
  constructor(private http : Http, public router:Router) { }

  getProducts(){
    let promesa = new Promise((resolve, reject)=>{
      this.http.get('https://bd-tienda-3a77b.firebaseio.com/productos.json')
          .subscribe(
            (data: Response) => {
              resolve({products: JSON.parse(data["_body"])});
          }
        )
    })
    
    return promesa;
    
  }

  getProducto(x:number)
  {
    
    console.log(x);
   
    return this.http.get(`https://bd-tienda-3a77b.firebaseio.com/productos/${ x }.json`);
  }
  
  
  addProductToShoppingCart( product:any){
    this.shoppingCartTotal = this.shoppingCartTotal + product.subtotal;
    this.shoppingCartArray.push(product);
  }

  getShoppingCart(){
    
    return this.shoppingCartArray;
  }

  updateProductsStock(shoppingCartJSON){
    for(let i=0; i<shoppingCartJSON.length; i++){
      let index = shoppingCartJSON[i].product.stock;
      let stock = shoppingCartJSON[i].product.stock - shoppingCartJSON[i].quantity;
      let data = {
        stock : stock
      }
      
      this.http.patch(`https://bd-tienda-3a77b.firebaseio.com/productos/${ i }.json`,JSON.stringify(data)).subscribe(()=>{
          this.shoppingCartArray = [];
          this.shoppingCartTotal = 0;
          document.getElementById("badge").innerHTML  = '';
          this.router.navigate(['/home/products-catalog']);
          
      });
    }
  }

}
