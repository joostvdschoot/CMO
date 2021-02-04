import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { ProductService } from '../../services/product.service';
// Import Models
import { Product } from '../../domain/cmo_db/product';

// START - USED SERVICES
/**
* ProductService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* ProductService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of Product
 * @class ProductListComponent
 */
@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    list: Product[];
    search: any = {};
    idSelected: string;
    constructor(
        private productService: ProductService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.productService.list().subscribe(list => this.list = list);
    }

    /**
     * Select Product to remove
     *
     * @param {string} id Id of the Product to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected Product
     */
    deleteItem() {
        this.productService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
