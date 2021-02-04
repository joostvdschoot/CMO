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
 *  FOR CUSTOMIZE accountBaseService PLEASE EDIT ../account.service.ts
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
import { Account } from '../../domain/cmo_db/account';

/**
 * THIS SERVICE MAKE HTTP REQUEST TO SERVER, FOR CUSTOMIZE IT EDIT ../Account.service.ts
 */

/*
 * SCHEMA DB Account
 *
	{
		channel: {
			type: 'String',
			enum : ["Direct", "Indirect", "Online"]
		},
		description: {
			type: 'String',
			required : true
		},
		maxcredit: {
			type: 'Integer',
			required : true
		},
		name: {
			type: 'String',
			required : true
		},
		retailcorpthreshold: {
			type: 'Integer',
			required : true
		},
		revolving: {
			type: 'Boolean',
			required : true
		},
		segment: {
			type: 'String',
			enum : ["Large", "Medium", "Small"]
		},
		//RELATIONS
		//EXTERNAL RELATIONS
		account: {
			type: Schema.ObjectId,
			ref : "Partner"
		},
		account: {
			type: Schema.ObjectId,
			ref : "CreditLine"
		},
		lessor: {
			type: Schema.ObjectId,
			ref : "Account"
		},
		product: {
			type: Schema.ObjectId,
			required : true,
			ref : "Account"
		},
	}
 *
 */
@Injectable()
export class AccountBaseService {

    contextUrl: string = environment.endpoint + '/account';
    constructor(
        protected http: HttpClient
        ) { }

    // CRUD METHODS

    /**
    * AccountService.create
    *   @description CRUD ACTION create
    *
    */
    create(item: Account): Observable<Account> {
        return this.http
            .post<Account>(this.contextUrl, item)
            .pipe(map(data => data));
    }

    /**
    * AccountService.delete
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
    * AccountService.findBylessor
    *   @description CRUD ACTION findBylessor
    *   @param Objectid key Id of model to search for
    *
    */
    findByLessor(id: string): Observable<Account[]> {
        return this.http
            .get<Account[]>(this.contextUrl + '/findBylessor/' + id)
            .pipe(
                map(response => response)
            );
    }

    /**
    * AccountService.findByproduct
    *   @description CRUD ACTION findByproduct
    *   @param Objectid key Id of model to search for
    *
    */
    findByProduct(id: string): Observable<Account[]> {
        return this.http
            .get<Account[]>(this.contextUrl + '/findByproduct/' + id)
            .pipe(
                map(response => response)
            );
    }

    /**
    * AccountService.get
    *   @description CRUD ACTION get
    *   @param ObjectId id Id resource
    *
    */
    get(id: string): Observable<Account> {
        return this.http
            .get<Account>(this.contextUrl + '/' + id)
            .pipe(map(data => data));
    }

    /**
    * AccountService.list
    *   @description CRUD ACTION list
    *
    */
    list(): Observable<Account[]> {
        return this.http
            .get<Account[]>(this.contextUrl)
            .pipe(map(data => data));
    }

    /**
    * AccountService.update
    *   @description CRUD ACTION update
    *   @param ObjectId id Id
    *
    */
    update(item: Account): Observable<Account> {
        return this.http
            .post<Account>(this.contextUrl + '/' + item._id, item)
            .pipe(map(data => data));
    }


    // Custom APIs

}
