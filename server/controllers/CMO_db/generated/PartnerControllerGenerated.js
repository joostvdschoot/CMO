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
 *  TO CUSTOMIZE PartnerControllerGenerated.js PLEASE EDIT ../PartnerController.js
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 * 
 */
import Properties from "../../../properties";
import PartnerModel from "../../../models/CMO_db/PartnerModel";
import ErrorManager from "../../../classes/ErrorManager";
import { authorize } from "../../../security/SecurityManager";
import PartnerController from "../PartnerController";

const generatedControllers = {
  /**
   * Init routes
   */
  init: router => {
    const baseUrl = `${Properties.api}/partner`;
    router.post(baseUrl + "", authorize([]), PartnerController.create);
    router.delete(baseUrl + "/:id", authorize([]), PartnerController.delete);
    router.get(baseUrl + "/findByAccount/:key", authorize([]), PartnerController.findByAccount);
    router.get(baseUrl + "/findByCountry/:key", authorize([]), PartnerController.findByCountry);
    router.get(baseUrl + "/findByLessor/:key", authorize([]), PartnerController.findByLessor);
    router.get(baseUrl + "/findByaccount/:key", authorize([]), PartnerController.findByaccount);
    router.get(baseUrl + "/findBycountry/:key", authorize([]), PartnerController.findBycountry);
    router.get(baseUrl + "/findBylessor/:key", authorize([]), PartnerController.findBylessor);
    router.get(baseUrl + "/:id", authorize([]), PartnerController.get);
    router.get(baseUrl + "", authorize([]), PartnerController.list);
    router.post(baseUrl + "/:id", authorize([]), PartnerController.update);
  },


  // CRUD METHODS


  /**
  * PartnerModel.create
  *   @description CRUD ACTION create
  *
  */
  create: async (req, res) => {
    try {
      const result = await PartnerModel.create(req.body);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * PartnerModel.delete
  *   @description CRUD ACTION delete
  *   @param ObjectId id Id
  *
  */
  delete: async (req, res) => {
    try {
      const result = await PartnerModel.delete(req.params.id);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * PartnerModel.findByAccount
  *   @description CRUD ACTION findByAccount
  *   @param Objectid key Id of model to search for
  *
  */
  findByAccount: async (req, res) => {
    try {
      const result = await PartnerModel.findByAccount(req.params.key);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * PartnerModel.findByCountry
  *   @description CRUD ACTION findByCountry
  *   @param Objectid key Id of model to search for
  *
  */
  findByCountry: async (req, res) => {
    try {
      const result = await PartnerModel.findByCountry(req.params.key);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * PartnerModel.findByLessor
  *   @description CRUD ACTION findByLessor
  *   @param Objectid key Id of model to search for
  *
  */
  findByLessor: async (req, res) => {
    try {
      const result = await PartnerModel.findByLessor(req.params.key);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * PartnerModel.findByaccount
  *   @description CRUD ACTION findByaccount
  *   @param Objectid key Id of model to search for
  *
  */
  findByaccount: async (req, res) => {
    try {
      const result = await PartnerModel.findByaccount(req.params.key);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * PartnerModel.findBycountry
  *   @description CRUD ACTION findBycountry
  *   @param Objectid key Id of model to search for
  *
  */
  findBycountry: async (req, res) => {
    try {
      const result = await PartnerModel.findBycountry(req.params.key);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * PartnerModel.findBylessor
  *   @description CRUD ACTION findBylessor
  *   @param Objectid key Id of model to search for
  *
  */
  findBylessor: async (req, res) => {
    try {
      const result = await PartnerModel.findBylessor(req.params.key);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * PartnerModel.get
  *   @description CRUD ACTION get
  *   @param ObjectId id Id resource
  *
  */
  get: async (req, res) => {
    try {
      const result = await PartnerModel.get(req.params.id);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * PartnerModel.list
  *   @description CRUD ACTION list
  *
  */
  list: async (req, res) => {
    try {
      const result = await PartnerModel.list();
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  
  /**
  * PartnerModel.update
  *   @description CRUD ACTION update
  *   @param ObjectId id Id
  *
  */
  update: async (req, res) => {
    try {
      const result = await PartnerModel.update(req.body);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  
  // Custom APIs

};

export default generatedControllers;
