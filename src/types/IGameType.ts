import { ShortScreenshot } from './IGameResponse';

export interface IGameType {
  id: number;
  title: string;
  rating: number;
  image: string;
  price: string;
  screenshots: ShortScreenshot[];
}
