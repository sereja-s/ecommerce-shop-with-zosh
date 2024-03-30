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
import { FormsModule } from '@angular/forms';



@NgModule({
	declarations: [
		FeatureComponent,
		HomeComponent,
		MainCarouselComponent,
		ProductSliderComponent,
		HomeProductCardComponent,
  ProductsComponent,
  
  ],
  imports: [
	  CommonModule,
	  DemoAngularMaterialModules,
	  SharedModule,
	  
	],
	exports: [FeatureComponent, HomeComponent, ProductsComponent]
})
export class FeatureModule { }
