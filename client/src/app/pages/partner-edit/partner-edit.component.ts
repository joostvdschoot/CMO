// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { PartnerService } from '../../services/partner.service';
import { AccountService } from '../../services/account.service';
import { CountryService } from '../../services/country.service';
import { LessorService } from '../../services/lessor.service';
import { OrganizationService } from '../../services/organization.service';
// Import Models
import { Partner } from '../../domain/cmo_db/partner';
import { Account } from '../../domain/cmo_db/account';
import { Country } from '../../domain/cmo_db/country';
import { Lessor } from '../../domain/cmo_db/lessor';
import { Organization } from '../../domain/cmo_db/organization';

// START - USED SERVICES
/**
* PartnerService.create
*	@description CRUD ACTION create
*
* PartnerService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
* PartnerService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id resource
*
* AccountService.list
*	@description CRUD ACTION list
*
* CountryService.list
*	@description CRUD ACTION list
*
* LessorService.list
*	@description CRUD ACTION list
*
* OrganizationService.findBypartner
*	@description CRUD ACTION findBypartner
*	@param Objectid key Id of model to search for
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Partner
 */
@Component({
    selector: 'app-partner-edit',
    templateUrl: 'partner-edit.component.html',
    styleUrls: ['partner-edit.component.css']
})
export class PartnerEditComponent implements OnInit {
    item: Partner;
    
    listAccount: Account[];
    
    listCountry: Country[];
    
    listLessor: Lessor[];
    
    externalOrganization_partner: Organization[];
    model: Partner;
    formValid: Boolean;

    constructor(
    private partnerService: PartnerService,
    private accountService: AccountService,
    private countryService: CountryService,
    private lessorService: LessorService,
    private organizationService: OrganizationService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Partner();
        this.externalOrganization_partner = [];
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.partnerService.get(id).subscribe(item => this.item = item);
                this.organizationService.findByPartner(id).subscribe(list => this.externalOrganization_partner = list);
            }
            // Get relations
            this.accountService.list().subscribe(list => this.listAccount = list);
            this.countryService.list().subscribe(list => this.listCountry = list);
            this.lessorService.list().subscribe(list => this.listLessor = list);
        });
    }


    /**
     * Save Partner
     *
     * @param {boolean} formValid Form validity check
     * @param Partner item Partner to save
     */
    save(formValid: boolean, item: Partner): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.partnerService.update(item).subscribe(data => this.goBack());
            } else {
                this.partnerService.create(item).subscribe(data => this.goBack());
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



