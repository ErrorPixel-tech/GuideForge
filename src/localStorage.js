// src/localStorage.ts
import data from './welcomeData';
// import { useI18n } from 'vue-i18n';
import i18n from './i18n';

export const loadState = () => {

  try {
    const serializedState = localStorage.getItem('GuideLabState');
    if (serializedState === null) {
      // return undefined; // пусть RTK возьмёт initialState
      
      const lng = i18n.language || localStorage.getItem('i18nextLng') || 'en';

      const dataRu = data.ru;
      const dataEn = data.en;

      const data2 = lng.startsWith('ru') ? dataRu : dataEn;
      return (
        data2
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
    localStorage.setItem('GuideLabState', serializedState);
  } catch (e) {
    console.warn(e);
  }
};
