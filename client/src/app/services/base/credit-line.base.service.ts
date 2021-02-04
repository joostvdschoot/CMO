/**
 *
 *
  _____                      _              _ _ _     _   _     _        __ _ _
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|

 * DO NOT EDIT THIS FILE!!
 *
 *  FOR CUSTOMIZE credit-lineBaseService PLEASE EDIT ../credit-line.service.ts
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */
 // DEPENDENCIES
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

// CONFIG
import { environment } from '../../../environments/environment';

// MODEL
import { CreditLine } from '../../domain/cmo_db/credit-line';

/**
 * THIS SERVICE MAKE HTTP REQUEST TO SERVER, FOR CUSTOMIZE IT EDIT ../CreditLine.service.ts
 */

/*
 * SCHEMA DB CreditLine
 *
	{
		applicationid: {
			type: 'String'
		},
		creditlimit: {
			type: 'Integer',
			required : true
		},
		enddate: {
			type: 'Date',
			required : true
		},
		groupcreditlimit: {
			type: 'Integer'
		},
		revolving: {
			type: 'Boolean',
			required : true
		},
		startdate: {
			type: 'Date',
			required : true
		},
		status: {
			type: 'String',
			required : true,
			enum : ["Active", "Blocked", "NonActive"]
		},
		type: {
			type: 'String',
			required : true,
			enum : ["Corporate", "Retail"]
		},
		//RELATIONS
		//EXTERNAL RELATIONS
		account: {
			type: Schema.ObjectId,
			ref : "CreditLine"
		},
		organization: {
			type: Schema.ObjectId,
			ref : "CreditLine"
		},
	}
 *
 */
@Injectable()
export class CreditLineBaseService {

    contextUrl: string = environment.endpoint + '/creditline';
    constructor(
        protected http: HttpClient
        ) { }

    // CRUD METHODS

    /**
    * CreditLineService.create
    *   @description CRUD ACTION create
    *
    */
    create(item: CreditLine): Observable<CreditLine> {
        return this.http
            .post<CreditLine>(this.contextUrl, item)
            .pipe(map(data => data));
    }

    /**
    * CreditLineService.delete
    *   @description CRUD ACTION delete
    *   @param ObjectId id Id
    *
    */
    remove(id: string): Observable<void> {
        return this.http
            .delete<void>(this.contextUrl + '/' + id)
            .pipe(map(data => data));
    }

    /**
    * CreditLineService.findByAccount
    *   @description CRUD ACTION findByAccount
    *   @param Objectid key Id of model to search for
    *
    */
    findByAccount(id: string): Observable<CreditLine[]> {
        return this.http
            .get<CreditLine[]>(this.contextUrl + '/findByAccount/' + id)
            .pipe(
                map(response => response)
            );
    }

    /**
    * CreditLineService.findByOrganization
    *   @description CRUD ACTION findByOrganization
    *   @param Objectid key Id of model to search for
    *
    */
    findByOrganization(id: string): Observable<CreditLine[]> {
        return this.http
            .get<CreditLine[]>(this.contextUrl + '/findByOrganization/' + id)
            .pipe(
                map(response => response)
            );
    }

    /**
    * CreditLineService.findByaccount
    *   @description CRUD ACTION findByaccount
    *   @param Objectid key Id of model to search for
    *
    */
    findByAccount(id: string): Observable<CreditLine[]> {
        return this.http
            .get<CreditLine[]>(this.contextUrl + '/findByaccount/' + id)
            .pipe(
                map(response => response)
            );
    }

    /**
    * CreditLineService.findByorganization
    *   @description CRUD ACTION findByorganization
    *   @param Objectid key Id of model to search for
    *
    */
    findByOrganization(id: string): Observable<CreditLine[]> {
        return this.http
            .get<CreditLine[]>(this.contextUrl + '/findByorganization/' + id)
            .pipe(
                map(response => response)
            );
    }

    /**
    * CreditLineService.get
    *   @description CRUD ACTION get
    *   @param ObjectId id Id resource
    *
    */
    get(id: string): Observable<CreditLine> {
        return this.http
            .get<CreditLine>(this.contextUrl + '/' + id)
            .pipe(map(data => data));
    }

    /**
    * CreditLineService.list
    *   @description CRUD ACTION list
    *
    */
    list(): Observable<CreditLine[]> {
        return this.http
            .get<CreditLine[]>(this.contextUrl)
            .pipe(map(data => data));
    }

    /**
    * CreditLineService.update
    *   @description CRUD ACTION update
    *   @param ObjectId id Id
    *
    */
    update(item: CreditLine): Observable<CreditLine> {
        return this.http
            .post<CreditLine>(this.contextUrl + '/' + item._id, item)
            .pipe(map(data => data));
    }


    // Custom APIs

}
