import multer from "multer";
import { randomUUID } from "crypto";
import mime from "mime";

export const generatePhotoFileName = (mimeType: string) => {
  const randomFileName = `${randomUUID()}-${Date.now()}`;
  const fileExtension = mime.getExtension(mimeType);
  const fileName = `${randomFileName}.${fileExtension}`;

  return fileName;
};

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, callback) => {
    return callback(null, generatePhotoFileName(file.mimetype));
  },
});

export const multerOptions = {};

export const initMulterMiddleware = () => {
  return multer({ storage, ...multerOptions });
};
