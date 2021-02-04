import CountryModelGenerated from "./generated/CountryModelGenerated";

const customModel = {

  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await CountryModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...CountryModelGenerated,
  ...customModel
};
