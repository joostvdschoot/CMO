// Import Sequelize
import Sequelize from "sequelize";
import Database from "../classes/Database_CMO_db";

export default init => {
  let sequelize = Database.getConnection();


    /**
      * ------------------------------------
      * Start define generated schema
      *
      * The content of this section will be overwritten on each documentation, 
      * please insert your customization at the top or at the end of the file.
      * ------------------------------------
      */



    /**
      * ------------------------------------
      * Account
      * ------------------------------------
      */
    class Account extends Sequelize.Model{}
    Account.init({
      _id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
      channel: {
        type: Sequelize.STRING
      },
      
      description: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      maxcredit: {
        type: Sequelize.INTEGER, 
        allowNull: false
      },
      
      name: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      retailcorpthreshold: {
        type: Sequelize.INTEGER, 
        allowNull: false
      },
      
      revolving: {
        type: Sequelize.BOOLEAN, 
        allowNull: false
      },
      
      segment: {
        type: Sequelize.STRING
      },
      
      //RELATIONS
        
        
        
      lessor:  {
        type: Sequelize.INTEGER,
        references: {
          model: "Lessor",
          key: '_id',
        },
      },
        
      product:  {
        type: Sequelize.INTEGER, 
        allowNull: false,
        references: {
          model: "Product",
          key: '_id',
        },
      },
      
      
      //EXTERNAL RELATIONS
      /*
      account: {
        type: Sequelize.INTEGER,
        references: {
          model: Partner,
          key: '_id',
        }
      },
      account: {
        type: Sequelize.INTEGER,
        references: {
          model: CreditLine,
          key: '_id',
        }
      },
      */
    },
      { sequelize, tableName: "account", timestamps: false }
    );



    /**
      * ------------------------------------
      * Country
      * ------------------------------------
      */
    class Country extends Sequelize.Model{}
    Country.init({
      _id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
      code: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      name: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      //RELATIONS
        
        
        
      
      
      //EXTERNAL RELATIONS
      /*
      country: {
        type: Sequelize.INTEGER,
        references: {
          model: Partner,
          key: '_id',
        }
      },
      country: {
        type: Sequelize.INTEGER,
        references: {
          model: Organization,
          key: '_id',
        }
      },
      country: {
        type: Sequelize.INTEGER,
        references: {
          model: Lessor,
          key: '_id',
        }
      },
      */
    },
      { sequelize, tableName: "country", timestamps: false }
    );



    /**
      * ------------------------------------
      * CreditLine
      * ------------------------------------
      */
    class CreditLine extends Sequelize.Model{}
    CreditLine.init({
      _id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
      applicationid: {
        type: Sequelize.STRING
      },
      
      creditlimit: {
        type: Sequelize.INTEGER, 
        allowNull: false
      },
      
      enddate: {
        type: Sequelize.DATE, 
        allowNull: false
      },
      
      groupcreditlimit: {
        type: Sequelize.INTEGER
      },
      
      revolving: {
        type: Sequelize.BOOLEAN, 
        allowNull: false
      },
      
      startdate: {
        type: Sequelize.DATE, 
        allowNull: false
      },
      
      status: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      type: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      //RELATIONS
        
      account:  {
        type: Sequelize.INTEGER,
        references: {
          model: "Account",
          key: '_id',
        },
      },
        
      organization:  {
        type: Sequelize.INTEGER,
        references: {
          model: "Organization",
          key: '_id',
        },
      },
      
      
      //EXTERNAL RELATIONS
      /*
      */
    },
      { sequelize, tableName: "creditline", timestamps: false }
    );



    /**
      * ------------------------------------
      * Lessor
      * ------------------------------------
      */
    class Lessor extends Sequelize.Model{}
    Lessor.init({
      _id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
      externalid: {
        type: Sequelize.STRING
      },
      
      genesis: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      name: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      number: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      share: {
        type: Sequelize.INTEGER, 
        allowNull: false
      },
      
      type: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      //RELATIONS
        
      country:  {
        type: Sequelize.INTEGER,
        references: {
          model: "Country",
          key: '_id',
        },
      },
        
        
        
        
      operatingentity:  {
        type: Sequelize.INTEGER,
        references: {
          model: "Lessor",
          key: '_id',
        },
      },
      
      
      //EXTERNAL RELATIONS
      /*
      lessor: {
        type: Sequelize.INTEGER,
        references: {
          model: Account,
          key: '_id',
        }
      },
      lessor: {
        type: Sequelize.INTEGER,
        references: {
          model: Partner,
          key: '_id',
        }
      },
      lessor: {
        type: Sequelize.INTEGER,
        references: {
          model: Organization,
          key: '_id',
        }
      },
      */
    },
      { sequelize, tableName: "lessor", timestamps: false }
    );



    /**
      * ------------------------------------
      * Organization
      * ------------------------------------
      */
    class Organization extends Sequelize.Model{}
    Organization.init({
      _id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
      active: {
        type: Sequelize.BOOLEAN
      },
      
      externalid: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      formalname: {
        type: Sequelize.STRING
      },
      
      liable: {
        type: Sequelize.BOOLEAN
      },
      
      searchname: {
        type: Sequelize.STRING
      },
      
      type: {
        type: Sequelize.STRING
      },
      
      //RELATIONS
        
      country:  {
        type: Sequelize.INTEGER,
        references: {
          model: "Country",
          key: '_id',
        },
      },
        
      lessor:  {
        type: Sequelize.INTEGER,
        references: {
          model: "Lessor",
          key: '_id',
        },
      },
        
      liableparent:  {
        type: Sequelize.INTEGER,
        references: {
          model: "Organization",
          key: '_id',
        },
      },
        
        
      parent:  {
        type: Sequelize.INTEGER,
        references: {
          model: "Organization",
          key: '_id',
        },
      },
        
      partner:  {
        type: Sequelize.INTEGER,
        references: {
          model: "Partner",
          key: '_id',
        },
      },
        
      ultimateparent:  {
        type: Sequelize.INTEGER,
        references: {
          model: "Organization",
          key: '_id',
        },
      },
      
      
      //EXTERNAL RELATIONS
      /*
      organization: {
        type: Sequelize.INTEGER,
        references: {
          model: CreditLine,
          key: '_id',
        }
      },
      */
    },
      { sequelize, tableName: "organization", timestamps: false }
    );



    /**
      * ------------------------------------
      * Partner
      * ------------------------------------
      */
    class Partner extends Sequelize.Model{}
    Partner.init({
      _id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
      externalid: {
        type: Sequelize.STRING
      },
      
      name: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      partnercode: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      type: {
        type: Sequelize.STRING
      },
      
      //RELATIONS
        
      account:  {
        type: Sequelize.INTEGER,
        references: {
          model: "Account",
          key: '_id',
        },
      },
        
      country:  {
        type: Sequelize.INTEGER,
        references: {
          model: "Country",
          key: '_id',
        },
      },
        
      lessor:  {
        type: Sequelize.INTEGER,
        references: {
          model: "Lessor",
          key: '_id',
        },
      },
        
      
      
      //EXTERNAL RELATIONS
      /*
      partner: {
        type: Sequelize.INTEGER,
        references: {
          model: Organization,
          key: '_id',
        }
      },
      */
    },
      { sequelize, tableName: "partner", timestamps: false }
    );



    /**
      * ------------------------------------
      * Product
      * ------------------------------------
      */
    class Product extends Sequelize.Model{}
    Product.init({
      _id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
      description: {
        type: Sequelize.STRING
      },
      
      productname: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      //RELATIONS
        
      
      
      //EXTERNAL RELATIONS
      /*
      product: {
        type: Sequelize.INTEGER, 
        allowNull: false,
        references: {
          model: Account,
          key: '_id',
        }
      },
      */
    },
      { sequelize, tableName: "product", timestamps: false }
    );



    /**
      * ------------------------------------
      * User
      * ------------------------------------
      */
    class User extends Sequelize.Model{}
    User.init({
      _id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
      mail: {
        type: Sequelize.STRING
      },
      
      name: {
        type: Sequelize.STRING
      },
      
      password: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      surname: {
        type: Sequelize.STRING
      },
      
      username: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      //RELATIONS
      
      
      //EXTERNAL RELATIONS
      /*
      */
    },
      { sequelize, tableName: "user", timestamps: false }
    );


    /**
      * ------------------------------------
      * Relations many to many
      * ------------------------------------
      */

    
    
    
    
    
    
    
    
  /**
   * ------------------------------------
   * End define generated schema
      * ------------------------------------
      */

    /**
      * ------------------------------------
      * Roles
      * ------------------------------------
      */
    class Roles extends Sequelize.Model{}
    Roles.init({
      _id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
      role: {
        type: Sequelize.STRING
      },
      
      //RELATIONS
        
      _user:  {
        type: Sequelize.INTEGER,
        references: {
          model: "User",
          key: '_id',
        },
      }
      
      
      //EXTERNAL RELATIONS
      /*
      */
    },
      { sequelize, tableName: "roles", timestamps: false }
    );

    User.hasMany(Roles, {
      foreignKey: "_user"
    });

    /**
      * ------------------------------------
      * Insert here your custom models
      * ------------------------------------
      */

};
