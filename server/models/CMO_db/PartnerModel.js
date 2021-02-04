import PartnerModelGenerated from "./generated/PartnerModelGenerated";

const customModel = {

  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await PartnerModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...PartnerModelGenerated,
  ...customModel
};
