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
 *  FOR CUSTOMIZE lessorBaseService PLEASE EDIT ../lessor.service.ts
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
import { Lessor } from '../../domain/cmo_db/lessor';

/**
 * THIS SERVICE MAKE HTTP REQUEST TO SERVER, FOR CUSTOMIZE IT EDIT ../Lessor.service.ts
 */

/*
 * SCHEMA DB Lessor
 *
	{
		externalid: {
			type: 'String'
		},
		genesis: {
			type: 'String',
			required : true
		},
		name: {
			type: 'String',
			required : true
		},
		number: {
			type: 'String',
			required : true
		},
		share: {
			type: 'Integer',
			required : true
		},
		type: {
			type: 'String',
			required : true,
			enum : ["Athlon", "JV", "Label"]
		},
		//RELATIONS
		//EXTERNAL RELATIONS
		country: {
			type: Schema.ObjectId,
			ref : "Lessor"
		},
		lessor: {
			type: Schema.ObjectId,
			ref : "Account"
		},
		lessor: {
			type: Schema.ObjectId,
			ref : "Partner"
		},
		lessor: {
			type: Schema.ObjectId,
			ref : "Organization"
		},
		operatingentity: {
			type: Schema.ObjectId,
			ref : "Lessor"
		},
	}
 *
 */
@Injectable()
export class LessorBaseService {

    contextUrl: string = environment.endpoint + '/lessor';
    constructor(
        protected http: HttpClient
        ) { }

    // CRUD METHODS

    /**
    * LessorService.create
    *   @description CRUD ACTION create
    *
    */
    create(item: Lessor): Observable<Lessor> {
        return this.http
            .post<Lessor>(this.contextUrl, item)
            .pipe(map(data => data));
    }

    /**
    * LessorService.delete
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
    * LessorService.findBycountry
    *   @description CRUD ACTION findBycountry
    *   @param Objectid key Id of model to search for
    *
    */
    findByCountry(id: string): Observable<Lessor[]> {
        return this.http
            .get<Lessor[]>(this.contextUrl + '/findBycountry/' + id)
            .pipe(
                map(response => response)
            );
    }

    /**
    * LessorService.get
    *   @description CRUD ACTION get
    *   @param ObjectId id Id resource
    *
    */
    get(id: string): Observable<Lessor> {
        return this.http
            .get<Lessor>(this.contextUrl + '/' + id)
            .pipe(map(data => data));
    }

    /**
    * LessorService.list
    *   @description CRUD ACTION list
    *
    */
    list(): Observable<Lessor[]> {
        return this.http
            .get<Lessor[]>(this.contextUrl)
            .pipe(map(data => data));
    }

    /**
    * LessorService.update
    *   @description CRUD ACTION update
    *   @param ObjectId id Id
    *
    */
    update(item: Lessor): Observable<Lessor> {
        return this.http
            .post<Lessor>(this.contextUrl + '/' + item._id, item)
            .pipe(map(data => data));
    }


    // Custom APIs

}
