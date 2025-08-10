import multer from "multer";
import path from "path";
let limits = {
  fileSize: 1024 * 1024 * 5, // 5MB -MegaByte
  //     the maximum file size in bytes (1024)
  //  1 kilobyte equals to 1024 byte
};

let storage = multer.diskStorage({
  // (./) means root folder or main folder
  // note: you must make public
  //  folder manually or it will throw error like no such filepath or directory..
  // destination give the folder location where file is placed /stored..
  destination: (req, file, cb) => {
    let staticFolder = "./public";
    cb(null, staticFolder);
  },
  // any file has key and value
  // key is called fileName, value is called originalName
  // fileName give the title(name) of the file.
  filename: (req, file, cb) => {
    let fileName = Date.now() + file.originalname;
    cb(null, fileName);
  },
});

let fileFilter = (req, file, cb) => {
  let validExtensions = [
    ".jpeg",
    ".JPEG",
    ".PNG",
    ".png",
    ".jpg",
    ".JPG",
    ".svg",
    ".doc",
    ".docx",
    ".mp4",
  ];

  let originalName = file.originalname;

  //   note:path module is inbuilt module of node js
  let originalExtension = path.extname(originalName);
  let isValidExtension = validExtensions.includes(originalExtension);

  if (isValidExtension) {
    // true  means pass such type of file
    // note: null represent error since there is no error thus error is null
    cb(null, true);
  } else {
    // false means don't pass such type of file
    cb(new error("File is not supported"), false);
  }
};

const upload = multer({
  // storage define the location in server where the file is store and control the fileName
  storage: storage,
  // filter the file according to the extension
  fileFilter: fileFilter,

  // filter file according to its size
  limits: limits,
});

export default upload;
