import mockCollection from './mockData';
import {IMyCollection} from './types';

export default function getCollectionList() {
  return new Promise<IMyCollection[]>(resolve => {
    setTimeout(() => {
      resolve(mockCollection);
    }, 1000);
  });
}
