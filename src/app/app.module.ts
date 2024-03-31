import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoAngularMaterialModules } from './DemoAngularMaterialModules';
import { SharedModule } from './Module/shared/shared.module';
import { FeatureModule } from './Module/feature/feature.module';
import { AdminModule } from './Module/admin/admin.module';


@NgModule({
  declarations: [
    AppComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
	  DemoAngularMaterialModules,
	  FeatureModule,
	  SharedModule,
	  AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
