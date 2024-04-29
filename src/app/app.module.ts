import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoAngularMaterialModules } from './DemoAngularMaterialModules';
import { SharedModule } from './Module/shared/shared.module';
import { FeatureModule } from './Module/feature/feature.module';
import { AdminModule } from './Module/admin/admin.module';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { AuthModule } from './Module/auth/auth.module';
import { authReducer } from './State/Auth/auth.reducer';



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
	  AdminModule,
	  FormsModule,
	  AuthModule,
	  StoreModule.forRoot({auth:authReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
