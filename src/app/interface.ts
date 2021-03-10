export interface IBoardGame {
  id: number;
  name: string;
  imageSrc: string;
  description: string;
  bought: boolean;
  rating: number;
}
export interface IFilterForm {
  name: string;
  bought: boolean | null;
}
