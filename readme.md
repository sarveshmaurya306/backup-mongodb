## NEEDS
### 1) To run this script you must have mongodb installed with #mongodump

### 2) Please provide following details in .env file 

- ACCESS_KEY_ID = <your_aws_access_key> <br/>
- SECRET_ACCESS_KEY = <your_aws_secret_access_key> <br/>
- MONGO_ATLAS_URI = <mongodb_atlas_uri> <br/>
- BUCKET_NAME = <s3_bucket_name> <br/>
- PROJECT_NAME = <project_name> <br/>
- BUCKET_REGION = <aws_bucket_region> <br/>
***eg: mongo_uri: mongodb+srv://ABC:123@abc.xyz.mno.net/<PROJECT_NAME>***

### 2) To restore
  - run : mongorestore --gzip --archive={backup_file_path}