import {useState} from 'react';
// import {TranslationComponent} from './translationComponent';
// import {i18n} from './translations/i18n';

export default function Locali() {
   const [language, setLanguage] = useState('en');

   const handleOnclick = (e) => {
      e.preventDefault();
      setLanguage(e.target.value);
      // i18n.changeLanguage(e.target.value);
   };

   return (
      <div className="Locale">
         <button value="arab" onClick={handleOnclick}>
            اَلْعَرَبِيَّةُ
         </button>
         <button value="en" onClick={handleOnclick}>
            English
         </button>
         <button value="es" onClick={handleOnclick}>
            Español
         </button>
         <button value="ru" onClick={handleOnclick}>
            Русский
         </button>
         <button value="ua" onClick={handleOnclick}>
            Українська
         </button>
         <button value="zh" onClick={handleOnclick}>
            中文
         </button>
         {/* <TranslationComponent lang={language} /> */}
      </div>
   );
}
