import { Injectable } from '@angular/core';


import { Plugins, CameraResultType, CameraSource, CameraPhoto, FilesystemDirectory } from '@capacitor/core';
import { StorageService } from './storage.service';
const { Camera, Filesystem } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class AlbumService
{

  constructor(
    private storageService: StorageService
  ) { }

 /**
   * Takes a photo.
   */
  async takePhoto()
  {
    const capture = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });
  }
}