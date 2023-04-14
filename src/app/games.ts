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
      description: 'Description of the game named "It\'s a wonderful Kindgom"',
      nbPlayerMin: 1,
      nbPlayerMax: 2
    },
    {
      id: 2,
      name: 'The Mind',
      description: 'desc 2',
      nbPlayerMin: 2,
      nbPlayerMax: 7
    },
    {
      id: 3,
      name: 'The Mind',
      description: 'desc 3',
      nbPlayerMin: 2,
      nbPlayerMax: 7
    },
    {
      id: 4,
      name: 'The Mind',
      description: 'description de la quatre',
      nbPlayerMin: 2,
      nbPlayerMax: 7
    },
    {
      id: 5,
      name: 'It\'s a wonderful Kingdom',
      description: 'Description',
      nbPlayerMin: 1,
      nbPlayerMax: 2
    },
    {
      id: 6,
      name: 'The Mind',
      description: 'desc final(?)',
      nbPlayerMin: 2,
      nbPlayerMax: 7
    }
  ];
  
  
  /*
  Copyright Google LLC. All Rights Reserved.
  Use of this source code is governed by an MIT-style license that
  can be found in the LICENSE file at https://angular.io/license
  */