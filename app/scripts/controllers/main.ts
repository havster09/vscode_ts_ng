/// <reference path="../app.ts" />

'use strict';

module apmApp {
  export interface IProductListModel {
    title:string;
    showImage:boolean;
    products:any;
    toggleImage():void;
  }

  export class ProductListController implements IProductListModel {
    title:string;
    showImage:boolean;
    products:any;
    constructor () {
      this.title = 'Product List';
      this.products = [];
    }

    toggleImage():void {
    this.showImage = !this.showImage;
    }
  }  
}

angular.module('apmApp')
  .controller('ProductListController', apmApp.ProductListController);
