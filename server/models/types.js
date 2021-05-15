import db from "./../mongodb.js";
let Types = db.Schema({
  list: Array
});
export default db.modle("types", Types, "types");
