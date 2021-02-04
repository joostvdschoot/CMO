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
 *  FOR CUSTOMIZE partnerBaseService PLEASE EDIT ../partner.service.ts
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
import { Partner } from '../../domain/cmo_db/partner';

/**
 * THIS SERVICE MAKE HTTP REQUEST TO SERVER, FOR CUSTOMIZE IT EDIT ../Partner.service.ts
 */

/*
 * SCHEMA DB Partner
 *
	{
		externalid: {
			type: 'String'
		},
		name: {
			type: 'String',
			required : true
		},
		partnercode: {
			type: 'String',
			required : true
		},
		type: {
			type: 'String',
			enum : ["Broker", "Dealer", "JV", "Label"]
		},
		//RELATIONS
		//EXTERNAL RELATIONS
		account: {
			type: Schema.ObjectId,
			ref : "Partner"
		},
		country: {
			type: Schema.ObjectId,
			ref : "Partner"
		},
		lessor: {
			type: Schema.ObjectId,
			ref : "Partner"
		},
		partner: {
			type: Schema.ObjectId,
			ref : "Organization"
		},
	}
 *
 */
@Injectable()
export class PartnerBaseService {

    contextUrl: string = environment.endpoint + '/partner';
    constructor(
        protected http: HttpClient
        ) { }

    // CRUD METHODS

    /**
    * PartnerService.create
    *   @description CRUD ACTION create
    *
    */
    create(item: Partner): Observable<Partner> {
        return this.http
            .post<Partner>(this.contextUrl, item)
            .pipe(map(data => data));
    }

    /**
    * PartnerService.delete
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
    * PartnerService.findByAccount
    *   @description CRUD ACTION findByAccount
    *   @param Objectid key Id of model to search for
    *
    */
    findByAccount(id: string): Observable<Partner[]> {
        return this.http
            .get<Partner[]>(this.contextUrl + '/findByAccount/' + id)
            .pipe(
                map(response => response)
            );
    }

    /**
    * PartnerService.findByCountry
    *   @description CRUD ACTION findByCountry
    *   @param Objectid key Id of model to search for
    *
    */
    findByCountry(id: string): Observable<Partner[]> {
        return this.http
            .get<Partner[]>(this.contextUrl + '/findByCountry/' + id)
            .pipe(
                map(response => response)
            );
    }

    /**
    * PartnerService.findByLessor
    *   @description CRUD ACTION findByLessor
    *   @param Objectid key Id of model to search for
    *
    */
    findByLessor(id: string): Observable<Partner[]> {
        return this.http
            .get<Partner[]>(this.contextUrl + '/findByLessor/' + id)
            .pipe(
                map(response => response)
            );
    }

    /**
    * PartnerService.findByaccount
    *   @description CRUD ACTION findByaccount
    *   @param Objectid key Id of model to search for
    *
    */
    findByAccount(id: string): Observable<Partner[]> {
        return this.http
            .get<Partner[]>(this.contextUrl + '/findByaccount/' + id)
            .pipe(
                map(response => response)
            );
    }

    /**
    * PartnerService.findBycountry
    *   @description CRUD ACTION findBycountry
    *   @param Objectid key Id of model to search for
    *
    */
    findByCountry(id: string): Observable<Partner[]> {
        return this.http
            .get<Partner[]>(this.contextUrl + '/findBycountry/' + id)
            .pipe(
                map(response => response)
            );
    }

    /**
    * PartnerService.findBylessor
    *   @description CRUD ACTION findBylessor
    *   @param Objectid key Id of model to search for
    *
    */
    findByLessor(id: string): Observable<Partner[]> {
        return this.http
            .get<Partner[]>(this.contextUrl + '/findBylessor/' + id)
            .pipe(
                map(response => response)
            );
    }

    /**
    * PartnerService.get
    *   @description CRUD ACTION get
    *   @param ObjectId id Id resource
    *
    */
    get(id: string): Observable<Partner> {
        return this.http
            .get<Partner>(this.contextUrl + '/' + id)
            .pipe(map(data => data));
    }

    /**
    * PartnerService.list
    *   @description CRUD ACTION list
    *
    */
    list(): Observable<Partner[]> {
        return this.http
            .get<Partner[]>(this.contextUrl)
            .pipe(map(data => data));
    }

    /**
    * PartnerService.update
    *   @description CRUD ACTION update
    *   @param ObjectId id Id
    *
    */
    update(item: Partner): Observable<Partner> {
        return this.http
            .post<Partner>(this.contextUrl + '/' + item._id, item)
            .pipe(map(data => data));
    }


    // Custom APIs

}