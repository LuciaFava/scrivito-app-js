// src/Objs/FaqPage/FaqPageEditingConfig.js
import * as Scrivito from 'scrivito';
import DividerWidget from '../../Widgets/DividerWidget/DividerWidgetClass';
import HeadlineWidget from '../../Widgets/HeadlineWidget/HeadlineWidgetClass';
import TextWidget from '../../Widgets/TextWidget/TextWidgetClass';

Scrivito.provideEditingConfig("FaqPage", {
  initialContent: {
    questions: [
      new DividerWidget({ showLogo: 'no' }),
      new HeadlineWidget({ headline: "The question is?" }),
      new TextWidget({ text: "This is the eloquent answer to the question above." }),
      new DividerWidget({ showLogo: 'no' }),
    ],
  }
});