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
 *  FOR CUSTOMIZE countryBaseService PLEASE EDIT ../country.service.ts
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
import { Country } from '../../domain/cmo_db/country';

/**
 * THIS SERVICE MAKE HTTP REQUEST TO SERVER, FOR CUSTOMIZE IT EDIT ../Country.service.ts
 */

/*
 * SCHEMA DB Country
 *
	{
		code: {
			type: 'String',
			required : true
		},
		name: {
			type: 'String',
			required : true
		},
		//RELATIONS
		//EXTERNAL RELATIONS
		country: {
			type: Schema.ObjectId,
			ref : "Partner"
		},
		country: {
			type: Schema.ObjectId,
			ref : "Organization"
		},
		country: {
			type: Schema.ObjectId,
			ref : "Lessor"
		},
	}
 *
 */
@Injectable()
export class CountryBaseService {

    contextUrl: string = environment.endpoint + '/country';
    constructor(
        protected http: HttpClient
        ) { }

    // CRUD METHODS

    /**
    * CountryService.create
    *   @description CRUD ACTION create
    *
    */
    create(item: Country): Observable<Country> {
        return this.http
            .post<Country>(this.contextUrl, item)
            .pipe(map(data => data));
    }

    /**
    * CountryService.delete
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
    * CountryService.get
    *   @description CRUD ACTION get
    *   @param ObjectId id Id resource
    *
    */
    get(id: string): Observable<Country> {
        return this.http
            .get<Country>(this.contextUrl + '/' + id)
            .pipe(map(data => data));
    }

    /**
    * CountryService.list
    *   @description CRUD ACTION list
    *
    */
    list(): Observable<Country[]> {
        return this.http
            .get<Country[]>(this.contextUrl)
            .pipe(map(data => data));
    }

    /**
    * CountryService.update
    *   @description CRUD ACTION update
    *   @param ObjectId id Id
    *
    */
    update(item: Country): Observable<Country> {
        return this.http
            .post<Country>(this.contextUrl + '/' + item._id, item)
            .pipe(map(data => data));
    }


    // Custom APIs

}
