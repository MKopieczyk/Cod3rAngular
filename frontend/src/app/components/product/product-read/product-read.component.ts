import { HeaderService } from './../../template/header/header.service';
import { ProductService } from './../product.service';
import { Product } from './../product.model';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import  {Router} from '@angular/router'

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements AfterViewInit, OnInit {
  @ViewChild(MatTable) table: MatTable<Product>;
  displayedColumns = ['id', 'name','price', 'action'];
  products: Product[]
  constructor(private productService: ProductService, private router:Router) { 
    
  }

  ngOnInit(): void {
    this.productService.read().subscribe(products =>
    {
      this.products = products
      //this.table.dataSource = this.products;
      
    }
  )

  
  
  }

  ngAfterViewInit() {
    
    //this.table.dataSource = this.products;
    
  }

}






  

  

