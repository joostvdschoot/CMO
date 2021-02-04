import CreditLineModelGenerated from "./generated/CreditLineModelGenerated";

const customModel = {

  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await CreditLineModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...CreditLineModelGenerated,
  ...customModel
};
