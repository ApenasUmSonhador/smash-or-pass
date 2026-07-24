import { randomUUID } from "node:crypto";

import {
  v2 as cloudinary,
  type UploadApiResponse,
} from "cloudinary";

import { env } from "../config/env";
import type { StorageProvider } from "./storage-provider";
import type {
  StoredFile,
  UploadFile,
  UploadFolder,
} from "./types";

export class CloudinaryStorageProvider
  implements StorageProvider
{
  constructor() {
    const {
      CLOUDINARY_CLOUD_NAME,
      CLOUDINARY_API_KEY,
      CLOUDINARY_API_SECRET,
    } = env;

    if (
      !CLOUDINARY_CLOUD_NAME ||
      !CLOUDINARY_API_KEY ||
      !CLOUDINARY_API_SECRET
    ) {
      throw new Error(
        "Cloudinary credentials are required when STORAGE_PROVIDER=cloudinary."
      );
    }

    cloudinary.config({
      cloud_name: CLOUDINARY_CLOUD_NAME,
      api_key: CLOUDINARY_API_KEY,
      api_secret: CLOUDINARY_API_SECRET,
      secure: true,
    });
  }

  async save(
    file: UploadFile,
    folder: UploadFolder
  ): Promise<StoredFile> {
    const publicId = randomUUID();

    const result = await this.uploadBuffer(
      file.buffer,
      folder,
      publicId
    );

    return {
      filename: result.public_id,
      url: result.secure_url,
    };
  }

  async delete(fileUrl: string): Promise<void> {
    const publicId = this.extractPublicId(fileUrl);

    if (!publicId) {
      return;
    }

    await cloudinary.uploader.destroy(publicId, {
      resource_type: "image",
      invalidate: true,
    });
  }

  private uploadBuffer(
    buffer: Buffer,
    folder: UploadFolder,
    publicId: string
  ): Promise<UploadApiResponse> {
    return new Promise((resolve, reject) => {
      const uploadStream =
        cloudinary.uploader.upload_stream(
          {
            resource_type: "image",
            folder: `smash-or-pass/${folder}`,
            public_id: publicId,
            format: "webp",
            overwrite: false,
            transformation: [
              {
                width: 1024,
                height: 1024,
                crop: "limit",
              },
            ],
          },
          (error, result) => {
            if (error) {
              return reject(error);
            }

            if (!result) {
              return reject(
                new Error(
                  "Cloudinary did not return an upload result."
                )
              );
            }

            return resolve(result);
          }
        );

      uploadStream.end(buffer);
    });
  }

  private extractPublicId(
    fileUrl: string
  ): string | null {
    const match = fileUrl.match(
      /\/upload\/(?:v\d+\/)?(.+)\.[^./]+$/
    );

    return match?.[1] ?? null;
  }
}