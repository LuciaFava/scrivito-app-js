// src/Objs/FaqPage/FaqPageComponent.js

import * as React from 'react';
import * as Scrivito from 'scrivito';
Scrivito.provideComponent('FaqPage', ({ page }) => 
  <div className='container'>
    <h1 className='text-left faq'>FAQ</h1>
    <p>Title</p>
    <p>Description</p>
    <Scrivito.ContentTag content={ page } attribute='questions' />
  </div>
);