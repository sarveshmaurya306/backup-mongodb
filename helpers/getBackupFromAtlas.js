const path = require('path')
const  {spawn} = require('promisify-child-process')
const keys = require('../keys')

const backupPath = path.join("/", "tmp", "dump");

const getBackup= async ()=>{
  console.log("Getting Backup From Atlas ... ")

  await spawn("rm", ["-rf", "/tmp/dump"])
  await spawn('mkdir', ["/tmp/dump"])

  await spawn('mongodump', [
    `--uri=${keys.mongo_db_uri}`,
    `--archive=${backupPath}`,
    '--gzip',
  ])
}
module.exports= { getBackup };