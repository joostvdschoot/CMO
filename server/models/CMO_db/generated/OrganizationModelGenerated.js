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
 *  TO CUSTOMIZE OrganizationModelGenerated.js PLEASE EDIT ../OrganizationModel.js
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
  * OrganizationModel.create
  *   @description CRUD ACTION create
  *
  */
  async create(item) {
    let result = await Database.getConnection().models.Organization.create(item);    return result;
  },
  
  /**
  * OrganizationModel.delete
  *   @description CRUD ACTION delete
  *   @param ObjectId id Id
  *
  */
  async delete(id) {
    return await Database.getConnection().models.Organization.destroy({ where: { _id: id } });
  },
  
  /**
  * OrganizationModel.findBycountry
  *   @description CRUD ACTION findBycountry
  *   @param Objectid key Id of model to search for
  *
  */
  async findBycountry(key) {
    return await Database.getConnection().models.Organization.findAll({ where: { "country": key } });
  },
  
  /**
  * OrganizationModel.findBylessor
  *   @description CRUD ACTION findBylessor
  *   @param Objectid key Id of model to search for
  *
  */
  async findBylessor(key) {
    return await Database.getConnection().models.Organization.findAll({ where: { "lessor": key } });
  },
  
  /**
  * OrganizationModel.findBypartner
  *   @description CRUD ACTION findBypartner
  *   @param Objectid key Id of model to search for
  *
  */
  async findBypartner(key) {
    return await Database.getConnection().models.Organization.findAll({ where: { "partner": key } });
  },
  
  /**
  * OrganizationModel.get
  *   @description CRUD ACTION get
  *   @param ObjectId id Id resource
  *
  */
  async get(id) {
    let result = await Database.getConnection().models.Organization.findByPk(id);
    return result;
  },
  
  /**
  * OrganizationModel.list
  *   @description CRUD ACTION list
  *
  */
  async list() { 
    return await Database.getConnection().models.Organization.findAll();
      },
  
  /**
  * OrganizationModel.update
  *   @description CRUD ACTION update
  *   @param ObjectId id Id
  *
  */
  async update(item) { 
    let result = await Database.getConnection().models.Organization.update(item, {
      where: { _id: item._id }
    });
    return result;
  },
  


};

export default generatedModel;
