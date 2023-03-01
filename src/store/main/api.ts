import mockCollection from './mockData';
import {IMyCollection} from './types';

export default function getCollectionList(): any {
  return new Promise<IMyCollection[]>(resolve => {
    setTimeout(() => {
      resolve(mockCollection);
    }, 1000);
  });
}
