const aws = require('aws-sdk');
const keys = require('../keys');

const s3 = new aws.S3({
  accessKeyId: keys.aws_access_key,
  secretAccessKey: keys.aws_secret_key,
  region: keys.aws_bucket_region
})

const params = { Bucket: keys.aws_bucket_name };
function deleteOldBackups() {
  console.log("Deleting older backups...");
  s3.listObjectsV2(params, (err, data) => {
    if(err) {
      throw err;
    }
    const last_date = Date.now() - (7*24*60*60*1000); // delete 7 days  older backups

    data.Contents.forEach(one_folder => {
      const root_folder_name = one_folder.Key.split('/')[0];
      console.log('root folder', data.Contents.length, root_folder_name, last_date , (parseInt(root_folder_name) < last_date), '\n')

      if (parseInt(root_folder_name) < last_date) {
        console.log("deleting", root_folder_name, "\n");
        s3.deleteObject({ ...params, Key: one_folder.Key }, function (err) {
          if (err) {
            throw err;
          }
        })
      }
    })
  })
}

module.exports= { deleteOldBackups };
