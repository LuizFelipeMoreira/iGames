import { IGameType } from './IGameType';

export interface UseProductTYpe {
  gameList: IGameType[];
  productsBag: IGameType[];
  loading: boolean;
  error: string;
  calculateTotalPrice: () => string;
  fetchGames: () => Promise<IGameType[]>;
  addNewProduct: (game: IGameType) => void;
  RemoveProduct: (id: number) => void;
}
