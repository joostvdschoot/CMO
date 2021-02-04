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
 *  TO CUSTOMIZE AccountBase PLEASE EDIT ../account.ts
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */
import { Lessor } from '../lessor';
import { Product } from '../product';

/**
 * This is the model of Account object
 *
 */
export class AccountBase {

    constructor() { }

    public _id: string;
    public channel?: string;
    public description: string;
    public maxcredit: number;
    public name: string;
    public retailcorpthreshold: number;
    public revolving: Boolean;
    public segment?: string;
    // Relations lessor
    public lessor: Lessor | string;
    // Relations product
    public product: Product | string;
}