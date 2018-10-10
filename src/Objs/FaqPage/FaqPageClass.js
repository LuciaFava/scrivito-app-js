// src/Objs/FaqPage/FaqPageClass.js

import * as Scrivito from 'scrivito';
Scrivito.provideObjClass('FaqPage', {
  attributes: {
    questions: ['widgetlist', { only: 'FaqWidget' }],
  },
});