// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { ProductService } from '../../services/product.service';
import { AccountService } from '../../services/account.service';
// Import Models
import { Product } from '../../domain/cmo_db/product';
import { Account } from '../../domain/cmo_db/account';

// START - USED SERVICES
/**
* ProductService.create
*	@description CRUD ACTION create
*
* ProductService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
* ProductService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id resource
*
* AccountService.findByproduct
*	@description CRUD ACTION findByproduct
*	@param Objectid key Id of model to search for
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Product
 */
@Component({
    selector: 'app-product-edit',
    templateUrl: 'product-edit.component.html',
    styleUrls: ['product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
    item: Product;
    
    externalAccount_product: Account[];
    model: Product;
    formValid: Boolean;

    constructor(
    private productService: ProductService,
    private accountService: AccountService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Product();
        this.externalAccount_product = [];
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.productService.get(id).subscribe(item => this.item = item);
                this.accountService.findByProduct(id).subscribe(list => this.externalAccount_product = list);
            }
            // Get relations
        });
    }


    /**
     * Save Product
     *
     * @param {boolean} formValid Form validity check
     * @param Product item Product to save
     */
    save(formValid: boolean, item: Product): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.productService.update(item).subscribe(data => this.goBack());
            } else {
                this.productService.create(item).subscribe(data => this.goBack());
            } 
        }
    }

    /**
     * Go Back
     */
    goBack(): void {
        this.location.back();
    }


}



