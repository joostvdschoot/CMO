import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { LessorService } from '../../services/lessor.service';
// Import Models
import { Lessor } from '../../domain/cmo_db/lessor';

// START - USED SERVICES
/**
* LessorService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* LessorService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of Lessor
 * @class LessorListComponent
 */
@Component({
    selector: 'app-lessor-list',
    templateUrl: './lessor-list.component.html',
    styleUrls: ['./lessor-list.component.css']
})
export class LessorListComponent implements OnInit {
    list: Lessor[];
    search: any = {};
    idSelected: string;
    constructor(
        private lessorService: LessorService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.lessorService.list().subscribe(list => this.list = list);
    }

    /**
     * Select Lessor to remove
     *
     * @param {string} id Id of the Lessor to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected Lessor
     */
    deleteItem() {
        this.lessorService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
