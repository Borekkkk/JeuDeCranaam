export interface Question {
    id: number;
    title: string;
    type: string;
    choices: string[];
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
      ]
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
      ]
    },
    {
      "id": 2,
      "title": "Question input ",
      "type": "userInput"
    }
  ];
  
  
  /*
  Copyright Google LLC. All Rights Reserved.
  Use of this source code is governed by an MIT-style license that
  can be found in the LICENSE file at https://angular.io/license
  */