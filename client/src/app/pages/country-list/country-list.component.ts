import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { CountryService } from '../../services/country.service';
// Import Models
import { Country } from '../../domain/cmo_db/country';

// START - USED SERVICES
/**
* CountryService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* CountryService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of Country
 * @class CountryListComponent
 */
@Component({
    selector: 'app-country-list',
    templateUrl: './country-list.component.html',
    styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {
    list: Country[];
    search: any = {};
    idSelected: string;
    constructor(
        private countryService: CountryService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.countryService.list().subscribe(list => this.list = list);
    }

    /**
     * Select Country to remove
     *
     * @param {string} id Id of the Country to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected Country
     */
    deleteItem() {
        this.countryService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
