export const CreateUrl = (url:URL,path:string)=> `${url}${path}`;

export interface ISpinner {
    on(): void;
    off(): void;
  }