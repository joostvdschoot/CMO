// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { OrganizationService } from '../../services/organization.service';
import { CountryService } from '../../services/country.service';
import { LessorService } from '../../services/lessor.service';
import { CreditLineService } from '../../services/credit-line.service';
import { PartnerService } from '../../services/partner.service';
// Import Models
import { Organization } from '../../domain/cmo_db/organization';
import { Country } from '../../domain/cmo_db/country';
import { Lessor } from '../../domain/cmo_db/lessor';
import { CreditLine } from '../../domain/cmo_db/credit-line';
import { Partner } from '../../domain/cmo_db/partner';

// START - USED SERVICES
/**
* OrganizationService.create
*	@description CRUD ACTION create
*
* OrganizationService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
* OrganizationService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id resource
*
* CountryService.list
*	@description CRUD ACTION list
*
* LessorService.list
*	@description CRUD ACTION list
*
* OrganizationService.list
*	@description CRUD ACTION list
*
* OrganizationService.list
*	@description CRUD ACTION list
*
* OrganizationService.list
*	@description CRUD ACTION list
*
* CreditLineService.findByorganization
*	@description CRUD ACTION findByorganization
*	@param Objectid key Id of model to search for
*
* PartnerService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Organization
 */
@Component({
    selector: 'app-organization-edit',
    templateUrl: 'organization-edit.component.html',
    styleUrls: ['organization-edit.component.css']
})
export class OrganizationEditComponent implements OnInit {
    item: Organization;
    
    listCountry: Country[];
    
    listLessor: Lessor[];
    
    listLiableparent: Organization[];
    
    listParent: Organization[];
    
    listPartner: Partner[];
    
    listUltimateparent: Organization[];
    
    externalCreditLine_organization: CreditLine[];
    model: Organization;
    formValid: Boolean;

    constructor(
    private organizationService: OrganizationService,
    private countryService: CountryService,
    private lessorService: LessorService,
    private creditlineService: CreditLineService,
    private partnerService: PartnerService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Organization();
        this.externalCreditLine_organization = [];
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.organizationService.get(id).subscribe(item => this.item = item);
                this.creditlineService.findByOrganization(id).subscribe(list => this.externalCreditLine_organization = list);
            }
            // Get relations
            this.countryService.list().subscribe(list => this.listCountry = list);
            this.lessorService.list().subscribe(list => this.listLessor = list);
            this.organizationService.list().subscribe(list => this.listLiableparent = list);
            this.organizationService.list().subscribe(list => this.listParent = list);
            this.partnerService.list().subscribe(list => this.listPartner = list);
            this.organizationService.list().subscribe(list => this.listUltimateparent = list);
        });
    }


    /**
     * Save Organization
     *
     * @param {boolean} formValid Form validity check
     * @param Organization item Organization to save
     */
    save(formValid: boolean, item: Organization): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.organizationService.update(item).subscribe(data => this.goBack());
            } else {
                this.organizationService.create(item).subscribe(data => this.goBack());
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



