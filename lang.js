function setLang(l){ document.documentElement.dataset.lang = l; document.documentElement.lang = l; try{localStorage.setItem('lang',l)}catch(e){} }
(function(){ var l; try{l=localStorage.getItem('lang')}catch(e){}
  if(!l){ var n=(navigator.language||'en').toLowerCase(); l = (n.startsWith('cs')||n.startsWith('sk')) ? 'cs' : 'en'; }
  setLang(l); })();
