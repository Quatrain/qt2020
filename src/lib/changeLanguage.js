//When called, switch the localStorage to the other language

exports.changeLanguage = function() {

  const storedSetting = localStorage && localStorage.getItem('qt_lang')

  switch (storedSetting) {
    case 'fr':
      localStorage.setItem('qt_lang', 'en');
      break;
    case 'en':
    default:
      localStorage.setItem('qt_lang', 'fr');
      break;
  }

  document.location.reload(true);


}
