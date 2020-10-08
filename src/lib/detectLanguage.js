//Here we are looking at the user's languages settings to display the correct texts

exports.detectLanguage = function(JSONData){

  function language_switch(lang){
    switch (lang) {
      case 'fr':
        //localStorage.setItem('qt_lang', 'fr');
        return  JSONData.fr;
        break;
      default:
        //localStorage.setItem('qt_lang', 'en');
        return JSONData.en;
        break;
    }
  }

  /*const storedSetting = localStorage.getItem('qt_lang');

  if(!storedSetting){*/

    if (typeof navigator === `undefined`) {
      return JSONData.en;
    }

    const lang = navigator && navigator.language && navigator.language.split("-")[0];

    return language_switch(lang)

  /*}else{
    return language_switch(storedSetting)
  }*/
}
