
// -----------------------------------------------------------
// Google
  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-52054709-1']);
  _gaq.push(['_trackPageview']);
(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = 'https://ssl.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

function cEvent(path, type){
    _gaq.push(['_trackEvent', path, type ]);    
    }


chrome.extension.onRequest.addListener(
  function(request, sender, sendResponse) {
//    console.log( (sender.tab ?
//                "from a content script:" + sender.tab.url :
//                "from the extension") + " / request.message: "+request.message + " / request.message: "+request.message);
    
    cEvent(request.message, request.type);
  });
