import { IPicture } from "./picture.interface";

export interface ICategory {
  flg?: number;
  id?: number;
  name?: string;
  sheetName?: string;
  importJsonName?: string; //TODO
  pictures: IPicture[];
}
