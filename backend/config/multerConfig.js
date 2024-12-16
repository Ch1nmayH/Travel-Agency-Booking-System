import multer from 'multer';
import path from 'path';
import fs from "fs";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const dir = "uploads/packages/";
        cb(null, dir);
        fs.mkdirSync(dir, { recursive: true });
        cb(null, dir); // Set where to store the images
      },
    filename: (req, file, cb) => {
        const { title } = req.body;
        if (!title) {
            return cb(new Error('Title is required for naming the image.'));
        }
        // Append the original file extension
        cb(null, `${title}${path.extname(file.originalname)}`);

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