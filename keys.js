const dotEnv= require('dotenv');
dotEnv.config();
const keys= {
  aws_access_key : process.env.ACCESS_KEY_ID,
  aws_secret_key : process.env.SECRET_ACCESS_KEY,
  aws_bucket_name : process.env.BUCKET_NAME,
  aws_bucket_region: process.env.BUCKET_REGION,
  atlas_project_name : process.env.PROJECT_NAME,
  mongo_db_uri : process.env.MONGO_ATLAS_URI,
}

module.exports= keys;