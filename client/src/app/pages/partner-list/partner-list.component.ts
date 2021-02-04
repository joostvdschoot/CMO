import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { PartnerService } from '../../services/partner.service';
// Import Models
import { Partner } from '../../domain/cmo_db/partner';

// START - USED SERVICES
/**
* PartnerService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* PartnerService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of Partner
 * @class PartnerListComponent
 */
@Component({
    selector: 'app-partner-list',
    templateUrl: './partner-list.component.html',
    styleUrls: ['./partner-list.component.css']
})
export class PartnerListComponent implements OnInit {
    list: Partner[];
    search: any = {};
    idSelected: string;
    constructor(
        private partnerService: PartnerService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.partnerService.list().subscribe(list => this.list = list);
    }

    /**
     * Select Partner to remove
     *
     * @param {string} id Id of the Partner to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected Partner
     */
    deleteItem() {
        this.partnerService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
