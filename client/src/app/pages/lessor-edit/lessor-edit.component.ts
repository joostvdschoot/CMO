// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { LessorService } from '../../services/lessor.service';
import { CountryService } from '../../services/country.service';
import { AccountService } from '../../services/account.service';
import { OrganizationService } from '../../services/organization.service';
import { PartnerService } from '../../services/partner.service';
// Import Models
import { Lessor } from '../../domain/cmo_db/lessor';
import { Country } from '../../domain/cmo_db/country';
import { Account } from '../../domain/cmo_db/account';
import { Partner } from '../../domain/cmo_db/partner';
import { Organization } from '../../domain/cmo_db/organization';

// START - USED SERVICES
/**
* LessorService.create
*	@description CRUD ACTION create
*
* LessorService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
* LessorService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id resource
*
* CountryService.list
*	@description CRUD ACTION list
*
* LessorService.list
*	@description CRUD ACTION list
*
* AccountService.findBylessor
*	@description CRUD ACTION findBylessor
*	@param Objectid key Id of model to search for
*
* OrganizationService.findBylessor
*	@description CRUD ACTION findBylessor
*	@param Objectid key Id of model to search for
*
* PartnerService.findBylessor
*	@description CRUD ACTION findBylessor
*	@param Objectid key Id of model to search for
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Lessor
 */
@Component({
    selector: 'app-lessor-edit',
    templateUrl: 'lessor-edit.component.html',
    styleUrls: ['lessor-edit.component.css']
})
export class LessorEditComponent implements OnInit {
    item: Lessor;
    
    listCountry: Country[];
    
    listOperatingentity: Lessor[];
    
    externalAccount_lessor: Account[];
    externalPartner_lessor: Partner[];
    externalOrganization_lessor: Organization[];
    model: Lessor;
    formValid: Boolean;

    constructor(
    private lessorService: LessorService,
    private countryService: CountryService,
    private accountService: AccountService,
    private organizationService: OrganizationService,
    private partnerService: PartnerService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Lessor();
        this.externalAccount_lessor = [];
        this.externalPartner_lessor = [];
        this.externalOrganization_lessor = [];
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.lessorService.get(id).subscribe(item => this.item = item);
                this.accountService.findByLessor(id).subscribe(list => this.externalAccount_lessor = list);
                this.partnerService.findByLessor(id).subscribe(list => this.externalPartner_lessor = list);
                this.organizationService.findByLessor(id).subscribe(list => this.externalOrganization_lessor = list);
            }
            // Get relations
            this.countryService.list().subscribe(list => this.listCountry = list);
            this.lessorService.list().subscribe(list => this.listOperatingentity = list);
        });
    }


    /**
     * Save Lessor
     *
     * @param {boolean} formValid Form validity check
     * @param Lessor item Lessor to save
     */
    save(formValid: boolean, item: Lessor): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.lessorService.update(item).subscribe(data => this.goBack());
            } else {
                this.lessorService.create(item).subscribe(data => this.goBack());
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



