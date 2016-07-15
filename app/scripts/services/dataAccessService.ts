/// <reference path="../../../typings/angularjs/angular-resource.d.ts" />

'use strict';

module apmApp {
    export interface IDataAccessService {
        getProductResource():ng.resource.IResourceClass<IProductResource>;
    }

    export interface IProductResource extends ng.resource.IResource<apmApp.IProduct> {

    }

    export class DataAccessService implements IDataAccessService {
        static $inject = ["$resource"];
        constructor(private $resource: ng.resource.IResourceService) {

        }
        getProductResource():ng.resource.IResourceClass<IProductResource> {
            return this.$resource("/api/products/:productId");
        }
    }
    angular.module("apmApp")
    .service("dataAccessService", DataAccessService);
}

