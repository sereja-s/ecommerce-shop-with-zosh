import { Component } from '@angular/core';
import { filters, singleFilter } from './FilterData';
import { ActivatedRoute, Router } from '@angular/router';
import { mensPantsPage1 } from 'src/Data/pants/men_page1';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

	filterData:any;
  singleFilterData:any;
  menPants:any;

  constructor(private activatedRoute:ActivatedRoute, private router:Router){}
	
  ngOnInit(){
	this.filterData = filters;
	this.singleFilterData = singleFilter;
	this.menPants = mensPantsPage1
 }

 /**
  * Метод обработки фильтра множественного выбора
  * @param value 
  * @param sectionId 
  */
 handleMultipleSelectFilter(value:string, sectionId:string){
	const queryParams = {...this.activatedRoute.snapshot.queryParams};

	 const filterValues = queryParams[sectionId] ? queryParams[sectionId].split(",") : [];

	const valueIndex = filterValues.indexOf(value);

	if(valueIndex != -1){
		filterValues.splice(valueIndex, 1);
	}
	else{
		filterValues.push(value);
	}

	if(filterValues.length>0){
		queryParams[sectionId] = filterValues.join(",");
	}
	else{
		delete queryParams[sectionId];
	}

	 this.router.navigate([], { queryParams });
 }

/**
 * Метод обработки фильтра одиночного выбора
 * @param value 
 * @param sectionId 
 */
 handleSingleSelectFilter(value:string, sectionId:string){

	 const queryParams = { ...this.activatedRoute.snapshot.queryParams };
	 queryParams[sectionId] = value;

	 this.router.navigate([], { queryParams });

 }

}
