import LessorModelGenerated from "./generated/LessorModelGenerated";

const customModel = {

  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await LessorModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...LessorModelGenerated,
  ...customModel
};
