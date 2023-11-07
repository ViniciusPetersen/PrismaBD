import { FileFilterCallback, Multer } from 'multer';
import { Request } from 'express';
const path = require("path");

const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req: Request, file: Express.Multer.File, cb: FileFilterCallback) {
    cb(null, true );
  },
  filename: function (req: Request, file: Express.Multer.File, cb: FileFilterCallback) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
