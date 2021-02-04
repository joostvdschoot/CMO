// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { CountryService } from '../../services/country.service';
import { LessorService } from '../../services/lessor.service';
import { OrganizationService } from '../../services/organization.service';
import { PartnerService } from '../../services/partner.service';
// Import Models
import { Country } from '../../domain/cmo_db/country';
import { Partner } from '../../domain/cmo_db/partner';
import { Organization } from '../../domain/cmo_db/organization';
import { Lessor } from '../../domain/cmo_db/lessor';

// START - USED SERVICES
/**
* CountryService.create
*	@description CRUD ACTION create
*
* CountryService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
* CountryService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id resource
*
* LessorService.findBycountry
*	@description CRUD ACTION findBycountry
*	@param Objectid key Id of model to search for
*
* OrganizationService.findBycountry
*	@description CRUD ACTION findBycountry
*	@param Objectid key Id of model to search for
*
* PartnerService.findBycountry
*	@description CRUD ACTION findBycountry
*	@param Objectid key Id of model to search for
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Country
 */
@Component({
    selector: 'app-country-edit',
    templateUrl: 'country-edit.component.html',
    styleUrls: ['country-edit.component.css']
})
export class CountryEditComponent implements OnInit {
    item: Country;
    
    externalPartner_country: Partner[];
    externalOrganization_country: Organization[];
    externalLessor_country: Lessor[];
    model: Country;
    formValid: Boolean;

    constructor(
    private countryService: CountryService,
    private lessorService: LessorService,
    private organizationService: OrganizationService,
    private partnerService: PartnerService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Country();
        this.externalPartner_country = [];
        this.externalOrganization_country = [];
        this.externalLessor_country = [];
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.countryService.get(id).subscribe(item => this.item = item);
                this.partnerService.findByCountry(id).subscribe(list => this.externalPartner_country = list);
                this.organizationService.findByCountry(id).subscribe(list => this.externalOrganization_country = list);
                this.lessorService.findByCountry(id).subscribe(list => this.externalLessor_country = list);
            }
            // Get relations
        });
    }


    /**
     * Save Country
     *
     * @param {boolean} formValid Form validity check
     * @param Country item Country to save
     */
    save(formValid: boolean, item: Country): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.countryService.update(item).subscribe(data => this.goBack());
            } else {
                this.countryService.create(item).subscribe(data => this.goBack());
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



