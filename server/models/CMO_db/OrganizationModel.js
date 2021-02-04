import OrganizationModelGenerated from "./generated/OrganizationModelGenerated";

const customModel = {

  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await OrganizationModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...OrganizationModelGenerated,
  ...customModel
};
