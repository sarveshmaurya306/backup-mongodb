const { getBackup } =require('./helpers/getBackupFromAtlas');
const { uploadToAWS } =require('./helpers/uploadBackupToAWS');
const { deleteOldBackups } =require('./helpers/deleteOldBackups');

exports.handler = async ()=> {
  try {
    await getBackup();
    await uploadToAWS();
    await deleteOldBackups();
  } catch (err) {
    console.log("Error from root",err);
    throw err;
  }
}

async function callMe (){
  try {
    // await getBackup();
    // await uploadToAWS();
    deleteOldBackups();
  } catch (err) {
    console.log(err);
  }
};

callMe();