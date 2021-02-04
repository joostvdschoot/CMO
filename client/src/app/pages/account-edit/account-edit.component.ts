// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { AccountService } from '../../services/account.service';
import { LessorService } from '../../services/lessor.service';
import { CreditLineService } from '../../services/credit-line.service';
import { PartnerService } from '../../services/partner.service';
import { ProductService } from '../../services/product.service';
// Import Models
import { Account } from '../../domain/cmo_db/account';
import { Partner } from '../../domain/cmo_db/partner';
import { CreditLine } from '../../domain/cmo_db/credit-line';
import { Lessor } from '../../domain/cmo_db/lessor';
import { Product } from '../../domain/cmo_db/product';

// START - USED SERVICES
/**
* AccountService.create
*	@description CRUD ACTION create
*
* AccountService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
* AccountService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id resource
*
* LessorService.list
*	@description CRUD ACTION list
*
* CreditLineService.findByaccount
*	@description CRUD ACTION findByaccount
*	@param Objectid key Id of model to search for
*
* PartnerService.findByaccount
*	@description CRUD ACTION findByaccount
*	@param Objectid key Id of model to search for
*
* ProductService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Account
 */
@Component({
    selector: 'app-account-edit',
    templateUrl: 'account-edit.component.html',
    styleUrls: ['account-edit.component.css']
})
export class AccountEditComponent implements OnInit {
    item: Account;
    
    listLessor: Lessor[];
    
    listProduct: Product[];
    
    externalPartner_account: Partner[];
    externalCreditLine_account: CreditLine[];
    model: Account;
    formValid: Boolean;

    constructor(
    private accountService: AccountService,
    private lessorService: LessorService,
    private creditlineService: CreditLineService,
    private partnerService: PartnerService,
    private productService: ProductService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Account();
        this.externalPartner_account = [];
        this.externalCreditLine_account = [];
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.accountService.get(id).subscribe(item => this.item = item);
                this.partnerService.findByAccount(id).subscribe(list => this.externalPartner_account = list);
                this.creditlineService.findByAccount(id).subscribe(list => this.externalCreditLine_account = list);
            }
            // Get relations
            this.lessorService.list().subscribe(list => this.listLessor = list);
            this.productService.list().subscribe(list => this.listProduct = list);
        });
    }


    /**
     * Save Account
     *
     * @param {boolean} formValid Form validity check
     * @param Account item Account to save
     */
    save(formValid: boolean, item: Account): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.accountService.update(item).subscribe(data => this.goBack());
            } else {
                this.accountService.create(item).subscribe(data => this.goBack());
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



