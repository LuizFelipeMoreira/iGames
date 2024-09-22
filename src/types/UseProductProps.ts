import { IGameType } from './IGameType';

export interface UseProductTYpe {
  gameList: IGameType[];
  calculateTotalPrice: () => string;
  productsBag: IGameType[];
  loading: boolean;
  error: string;
  fetchGames: () => Promise<IGameType[]>;
  addNewProduct: (game: IGameType) => void;
  RemoveProduct: (id: number) => void;
}
