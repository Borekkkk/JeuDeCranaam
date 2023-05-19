export interface Question {
    id: number;
    title: string;
    type: string;
    choices: string[];
    reponse: string;
  }
  
  export const question = [
    {
      "id": 0,
      "title": "Comment s'appel mon chat ?",
      "type": "QCM",
      "choices": [
        "Filouterie",
        "Tu n'a pas de chat, Filou est ton maître",
        "Filou",
        "Le frère de Teemo"
        ],
      "reponse": "Filou"
    },
    {
      "id": 1,
      "title" : "Question 2",
      "type": "QCM",
      "choices": [
        "A",
        "B",
        "C",
        "D",
        "E"
      ],
      "reponse": "D"
    },
    {
      "id": 2,
      "title": "Question input ",
      "type": "userInput",
      "reponse": "Coucou Kiwi"
    },
    {
      "id": 3,
      "title":"En quelle année est sorti le jeu 'League of legends' ?",
      "type": "userInput",
      "reponse": "2009"
    }
  ];
  
  
  /*
  Copyright Google LLC. All Rights Reserved.
  Use of this source code is governed by an MIT-style license that
  can be found in the LICENSE file at https://angular.io/license
  */