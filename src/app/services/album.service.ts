import { Injectable } from '@angular/core';


import { Plugins, CameraResultType, CameraSource, CameraPhoto, FilesystemDirectory } from '@capacitor/core';
import { StorageService } from './storage.service';
const { Camera, Filesystem } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class AlbumService
{
  profilePic: string = '';

  constructor(
    private storageService: StorageService
  ) { }

  async init()
  {
    this.profilePic = await this.storageService.get('profile-pic') || '/assets/shapes.svg';
  }

 /**
   * Takes a photo.
   */
  async takePhoto(key: string)
  {
    const capture = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });

    // Save the photo in the device folder -> not working in Chrome
    const imageFile = await this.savePicture(capture);

    await this.storageService.set(key, imageFile);
    this.profilePic = imageFile;
  }

  private async savePicture(photo: CameraPhoto): Promise<string>
  {
    // Convert photo to a base64 format, using the Filesystem API.
    const base64data = await this.readAsBase64(photo);

    // DEVICE ONLY - save the image file.
    const fileName = `${new Date().getTime()}.jpg`;
    const file = await Filesystem.writeFile({
      path: fileName,
      data: base64data,
      directory: FilesystemDirectory.Data
    });

    // Return the photo data.
    return base64data;
  }

  /**
   * Converts a camera photo to base64 data.
   * @param photo The camera photo.
   */
  private async readAsBase64(photo: CameraPhoto)
  {
    // Fetch the photo file and read as a blob.
    const response = await fetch(photo.webPath!);
    const blob = await response.blob();

    return await this.convertBlobToBase64(blob) as string;
  }

  /**
   * Converts an image file to base64.
   * @param blob The blob data.
   */
  private convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
    
    // define a file reader.
    const reader = new FileReader();

    // if there's an error, reject
    reader.onerror = reject;

    // when it's complete, resolve/label as successful
    reader.onload = () => {
      resolve(reader.result);
    };

    // read the file as a data URL
    reader.readAsDataURL(blob);
  });
}