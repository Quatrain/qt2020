//Here we are looking at the user's languages settings to display the correct texts

exports.detectLanguage = function(JSONData){
  if (typeof navigator === `undefined`) {
    return JSONData.en;
  }

  const lang = navigator && navigator.language && navigator.language.split("-")[0];

  switch (lang) {
    case 'fr':
      return  JSONData.fr;
      break;
    default:
      return JSONData.en;
  }
}
