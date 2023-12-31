export interface IPhoto {
  id: string;
  albumId: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export type PhotoCard = Pick<IPhoto, 'id' | 'title' | 'url'>;
