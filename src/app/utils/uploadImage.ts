import multer from 'multer';
import AppError from '../error/AppError';
import { Request } from 'express';

const multerStorage = multer.diskStorage({
  destination: (req: Request, file: any, cb: any) => {
    cb(null, 'public/image/users');
  },
  filename: (req: Request, file: any, cb: any) => {
    const extension = file.mimetype.split('/')[1];
    cb(null, `${file.fieldname}-${Date.now()}.${extension}`);
  },
});

const multerFilter = (req: Request, file: any, cb: any) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb(new AppError(400, 'Only image can be uploaded'), false);
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

const uploadImage = upload.single('photo');

export default uploadImage;
