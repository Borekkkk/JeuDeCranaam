export interface Games {
    id: number;
    name: string;
    description: string;
    nbPlayerMin: number;
    nbPlayerMax: number;
  }
  
  export const games = [
    {
      id: 1,
      name: 'It\'s a wonderful Kingdom',
      description: 'Description',
      nbPlayerMin: 1,
      nbPlayerMax: 2
    },
    {
      id: 2,
      name: 'The Mind',
      description: 'desc',
      nbPlayerMin: 2,
      nbPlayerMax: 7
    }
  ];
  
  
  /*
  Copyright Google LLC. All Rights Reserved.
  Use of this source code is governed by an MIT-style license that
  can be found in the LICENSE file at https://angular.io/license
  */