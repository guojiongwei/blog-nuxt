import mongoose from "mongoose";
import conf from "./config";

const { username, pwd, address, db } = conf.mongodb

const DB_URL = `mongodb://${username}@${pwd}:${address}/${db}`; // 账号登陆
mongoose.Promise = global.Promise;
console.log(DB_URL)
mongoose.connect(DB_URL, { useMongoClient: true }, err => {
  if (err) {
    console.log("数据库连接失败！", err);
  } else {
    console.log("数据库连接成功！");
  }
});
export default mongoose;
