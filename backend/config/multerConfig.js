import multer from 'multer';
import path from 'path';
import fs from "fs";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/packages');
        fs.mkdirSync(dir, { recursive: true });
        cb(null, dir); // Set where to store the images
      },
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);

    },        
    })

const upload = multer({

    storage,
    limits: { fileSize: 1000000 },
    fileFilter: (req, file, cb) => {
        const filetypes = /jpg|jpeg|png/;
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
        const mimetype = filetypes.test(file.mimetype);
        if (extname && mimetype) {
            return cb(null, true);
        } else {
            cb('Images only!');
        }
    }
});

export default upload;