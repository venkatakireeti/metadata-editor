module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        ListName: String,
        id: Object,
      }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const MetaData = mongoose.model("test", schema, "test");
    return MetaData;
  };
  