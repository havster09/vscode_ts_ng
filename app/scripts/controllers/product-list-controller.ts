/// <reference path='../app.ts' />
/// <reference path='../models/product.ts' />
/// <reference path='../services/dataAccessService.ts' />

'use strict';

module apmApp {
  export interface IProductListModel {
    title: string;
    showImage: boolean;
    products: apmApp.Product[];
    toggleImage(): void;
  }

  export class ProductListController implements IProductListModel {
    title: string;
    showImage: boolean;
    products: apmApp.Product[];
		static $inject = ['dataAccessService'];
    constructor(private dataAccessService: apmApp.DataAccessService) {
      this.title = 'Product List';
      this.products = [];
			const productResource = dataAccessService.getProductResource();
			productResource.query((data: apmApp.IProduct[]) => {
				this.products = data;
				});
    }

    toggleImage(): void {
			console.log('make changes');
			this.showImage = !this.showImage;
    }
  }
}

angular.module('apmApp')
  .controller('ProductListController', apmApp.ProductListController);
