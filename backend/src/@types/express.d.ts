import { RoleName } from "@prisma/client";
import { UploadFile } from "../storage/types";

declare global {
  namespace Express {
    interface Request {
      user?: {
        id: string;
        role: RoleName;
      };
      uploadFile?: UploadFile;
    }
  }
}

export {};