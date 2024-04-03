import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { MainCarouselComponent } from './components/home/main-carousel/main-carousel.component';
import { ProductSliderComponent } from './components/home/product-slider/product-slider.component';
import { HomeProductCardComponent } from './components/home/home-product-card/home-product-card.component';
import { DemoAngularMaterialModules } from 'src/app/DemoAngularMaterialModules';
import { SharedModule } from '../shared/shared.module';
import { FeatureComponent } from './components/feature.component';
import { ProductsComponent } from './components/products/products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './components/cart/cart.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { PaymentComponent } from './components/payment/payment.component';
import { PaymentSuccessComponent } from './components/payment-success/payment-success.component';
import { OrderComponent } from './components/order/order.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { ProductReviewCardComponent } from './components/product-details/product-review-card/product-review-card.component';
import { AddressFormComponent } from './components/checkout/address-form/address-form.component';
import { OrderCardComponent } from './components/order/order-card/order-card.component';



@NgModule({
	declarations: [
		FeatureComponent,
		HomeComponent,
		MainCarouselComponent,
		ProductSliderComponent,
		HomeProductCardComponent,
  ProductsComponent,
  CartComponent,
  ProductDetailsComponent,
  CheckoutComponent,
  PaymentComponent,
  PaymentSuccessComponent,
  OrderComponent,
  OrderDetailsComponent,
  ProductReviewCardComponent,
  AddressFormComponent,
  OrderCardComponent,
  
  ],
  imports: [
	  CommonModule,
	  DemoAngularMaterialModules,
	  SharedModule,
	  FormsModule,
	  ReactiveFormsModule
	],
	exports: [FeatureComponent, HomeComponent, ProductsComponent]
})
export class FeatureModule { }
