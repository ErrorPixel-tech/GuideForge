// src/localStorage.ts
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('GuideForgeState');
    if (serializedState === null) {
      // return undefined; // пусть RTK возьмёт initialState
      return (
        { "blocks": { "items": [{ "id": "1770472660814", "type": "h1", "value": "Что такое GuideForge?", "className": "steam__header-1", "tag": "h1", "isDisabled": false }, { "id": "1770473680101", "type": "p", "value": "GuideForge — это конструктор гайдов, который упрощает создание подробных и красиво оформленных статей для Steam и других платформ. Он помогает авторам сосредоточиться на содержании, а не на рутине форматирования и технических нюансах.", "className": "steam__paragraph", "tag": "p", "isDisabled": false }, { "id": "1770473718588", "type": "h1", "value": "Основные возможности", "className": "steam__header-1", "tag": "h1", "isDisabled": false }, { "id": "1770473766044", "type": "screenshot-horizontal", "value": "", "className": "steam__screenshot-horizontal", "tag": "", "isDisabled": true }, { "id": "1770473739900", "type": "p", "value": "В GuideForge можно собирать гайды из готовых блоков: заголовков, списков, цитат, предупреждений, вставок кода и изображений. Шаблоны структур, сохранённые пресеты оформления и удобный предпросмотр позволяют быстро настраивать единый стиль для серии материалов и экономить время на повторяющихся задачах.", "className": "steam__paragraph", "tag": "p", "isDisabled": false }, { "id": "1770473748444", "type": "h1", "value": "Для кого создан GuideForge", "className": "steam__header-1", "tag": "h1", "isDisabled": false }, { "id": "1770473761308", "type": "screenshot-block", "value": "", "className": "steam__screenshot-block", "tag": "", "isDisabled": true }, { "id": "1770473748884", "type": "p", "value": "GuideForge подойдёт авторам, которые регулярно пишут гайды по играм, модам, софту или обучающим материалам и хотят системности вместо хаоса в черновиках. Он будет полезен как начинающим создателям контента, которым нужен понятный инструмент, так и опытным авторам, стремящимся ускорить работу и поддерживать профессиональный уровень оформления.", "className": "steam__paragraph", "tag": "p", "isDisabled": false }, { "id": "1770473777204", "type": "screenshot", "value": "", "className": "steam__screenshot", "tag": "", "isDisabled": true }, { "id": "1770473789564", "type": "hr", "value": "", "className": "steam__separator", "tag": "hr", "isDisabled": true }] } }
      );
    }
    return JSON.parse(serializedState);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('GuideForgeState', serializedState);
  } catch (e) {
    console.warn(e);
  }
};
