/// <reference path='../models/product.ts' />
/// <reference path='../app.ts' />

'use strict';

module apmApp {
  interface IProductDetailModel {
    title: string;
    product: apmApp.IProduct;
  }

  interface IProductParams extends ng.route.IRouteParamsService {
    productId: number;
  }

  export class ProductDetailController implements IProductDetailModel {
    title: string;
    product: apmApp.IProduct;

    static $inject = ['$routeParams', 'dataAccessService'];
    constructor(private $routeParams: IProductParams,
      private dataAccessSevice: apmApp.IDataAccessService) {
      this.title = 'Product Detail';

      const productResource = dataAccessSevice.getProductResource();
      productResource.get({ productId: $routeParams.productId }, (data: apmApp.IProduct) => {
        this.product = data;
      });
    }
  }
}

angular.module('apmApp')
  .controller('ProductDetailController', apmApp.ProductDetailController);