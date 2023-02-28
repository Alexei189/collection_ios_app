export interface IMainReducer {
  collection: IMyCollection[];
  isLoading: boolean;
}
export interface IMyCollection {
  id: string;
  brand: string;
  name: string;
}
