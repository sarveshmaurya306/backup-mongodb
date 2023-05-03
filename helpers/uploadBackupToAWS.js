const aws =require('aws-sdk');
const fs =require('fs');
const path =require('path');
const keys =require('../keys.js');

const s3 = new aws.S3({
  accessKeyId: keys.aws_access_key,
  secretAccessKey: keys.aws_secret_key,
  region: keys.aws_bucket_region
})

const singleFileUpload = (fileName, fileContent, folderName) => {
  const params = {
    Bucket: keys.aws_bucket_name,
    Key: folderName + "/" + fileName,
    Body: fileContent
  }

  return new Promise((resolve)=>{
    s3.upload(params, (err, data) => {
      if (err) {
        throw err;
      } else {
        resolve(data)
      }
    });
  }) 
}

function uploadToAWS() {
  return new Promise ((resolve, reject)=>{
    const backupPath = path.join("/", "tmp", "dump");
    const files = fs.readdirSync(backupPath);
  
    const folderName = Date.now();
  
    files.map(async(oneFile)=>{
      const fileName = oneFile;
      const fileContent = fs.readFileSync(path.join(backupPath, fileName));
  
      console.log("uploading: ", fileName)
      const uploadedData= await singleFileUpload(fileName, fileContent, folderName);
      console.log(uploadedData)
      resolve("done");
    });
})
}

module.exports= { uploadToAWS }