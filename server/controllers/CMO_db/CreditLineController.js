import CreditLineControllerGenerated from "./generated/CreditLineControllerGenerated";

// Properties
import Properties from "../../properties";

// Database
import CreditLineModel from "../../models/CMO_db/CreditLineModel";

// Security
import { authorize } from "../../security/SecurityManager";

// Errors
import Errors from "../../classes/Errors";
import ErrorManager from "../../classes/ErrorManager";

const customControllers = {
  
  /**
   * Override here your custom routes
   * EXAMPLE:
   *
    
   init: router => {
     const baseUrl = `${Properties.api}/creditline`;
     
     // custom route
     router.get(baseUrl + "/:id", customControllers.get);
     
     // Init super
     CreditLineControllerGenerated.init(router);
    },

  */

  /**
   * Override here your custom controllers
   * EXAMPLE:
   *
   
    get: async (req, res) => {
      try {
        console.log("This is my custom controller");
        const result = await CreditLineModel.get(req.params.id);
        res.json(result);
      } catch (err) {
        const safeErr = ErrorManager.getSafeError(err);
        res.status(safeErr.status).json(safeErr);
      }
    }

   */
   
};

export default {
  ...CreditLineControllerGenerated,
  ...customControllers
};

