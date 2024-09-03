import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { TopModule } from './top/top.module';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SellerService } from './services/seller.service';
import { CommonModule } from '@angular/common';
import { CartServiceService } from './services/cart-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TopModule,HeaderComponent,RouterModule,FormsModule,HttpClientModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  constructor(private cartService : CartServiceService){}
  ngOnInit(): void {
    this.cartService.cartArray$.subscribe((result)=>{
      
    })
  }
  title = 'ecomm-app';

  
}
