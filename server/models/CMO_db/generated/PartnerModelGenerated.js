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
 *  TO CUSTOMIZE PartnerModelGenerated.js PLEASE EDIT ../PartnerModel.js
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 * 
 */
// Database
import Database from "../../../classes/Database_CMO_db";
import Sequelize from "sequelize";

// Logger
import Logger from "../../../classes/Logger";

const generatedModel = {

  // Start queries
    

  // CRUD METHODS


  /**
  * PartnerModel.create
  *   @description CRUD ACTION create
  *
  */
  async create(item) {
    let result = await Database.getConnection().models.Partner.create(item);    return result;
  },
  
  /**
  * PartnerModel.delete
  *   @description CRUD ACTION delete
  *   @param ObjectId id Id
  *
  */
  async delete(id) {
    return await Database.getConnection().models.Partner.destroy({ where: { _id: id } });
  },
  
  /**
  * PartnerModel.findByaccount
  *   @description CRUD ACTION findByaccount
  *   @param Objectid key Id of model to search for
  *
  */
  async findByaccount(key) {
    return await Database.getConnection().models.Partner.findAll({ where: { "account": key } });
  },
  
  /**
  * PartnerModel.findBycountry
  *   @description CRUD ACTION findBycountry
  *   @param Objectid key Id of model to search for
  *
  */
  async findBycountry(key) {
    return await Database.getConnection().models.Partner.findAll({ where: { "country": key } });
  },
  
  /**
  * PartnerModel.findBylessor
  *   @description CRUD ACTION findBylessor
  *   @param Objectid key Id of model to search for
  *
  */
  async findBylessor(key) {
    return await Database.getConnection().models.Partner.findAll({ where: { "lessor": key } });
  },
  
  /**
  * PartnerModel.get
  *   @description CRUD ACTION get
  *   @param ObjectId id Id resource
  *
  */
  async get(id) {
    let result = await Database.getConnection().models.Partner.findByPk(id);
    return result;
  },
  
  /**
  * PartnerModel.list
  *   @description CRUD ACTION list
  *
  */
  async list() { 
    return await Database.getConnection().models.Partner.findAll();
      },
  
  /**
  * PartnerModel.update
  *   @description CRUD ACTION update
  *   @param ObjectId id Id
  *
  */
  async update(item) { 
    let result = await Database.getConnection().models.Partner.update(item, {
      where: { _id: item._id }
    });
    return result;
  },
  


};

export default generatedModel;
