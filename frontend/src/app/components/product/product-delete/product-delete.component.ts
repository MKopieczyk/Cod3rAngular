import { Router, ActivatedRoute } from '@angular/router';
import { Product } from './../product.model';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  product: Product;
  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    console.log(id)
    const name = this.route.snapshot.paramMap.get('name')
    console.log(name)
    this.productService.readById(id).subscribe(product =>{
      this.product = product
    });
    const snackBarRef = this.snackBar.open('Confirma Apagar o Produto: ' + name + ' ?', 'SIM', { duration: 5000, horizontalPosition: 'center', verticalPosition:'top' });


    snackBarRef.afterDismissed().subscribe(info => {
      if (info.dismissedByAction === true) {
        
        this.productService.delete(id).subscribe(product => {
          this.product = product
          this.router.navigate(['/products'])
        });
        this.productService.showMessage('Produto Apagado com Sucesso')
      }
      else{
        this.router.navigate(['/products'])
      }
    });



  }

  deleteProduct(): void {


  }

}
