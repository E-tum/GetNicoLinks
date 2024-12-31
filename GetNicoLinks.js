// ==ClosureCompiler==
// @output_file_name default.js
// @compilation_level SIMPLE_OPTIMIZATIONS
// ==/ClosureCompiler==
javascript:(
  function GetAllLinks(){
    var linkNum = document.links.length;
    var iframes = document.querySelectorAll('iframe');
    var outputLinks = "";
    niconicoIdReg = /(?:sm|nm|so|ca|ax|yo|nl|ig|na|cw|z[a-e]|om|sk|yk)\d{1,14}\b/;
    
    for( var i=0 ; i < linkNum ; i++ ) {
      url=document.links[i].href;
      if (/(nicovideo\.jp|nico\.ms)/.test(url)) {
        let videoId = url.match(niconicoIdReg);
        if (videoId !== null) {
          smLinkTxt="https://www.nicovideo.jp/watch/" + videoId[0];
          outputLinks +=smLinkTxt + '\r\n';
        }
      }
    }
    iframes.forEach(iframe => {
      var src = iframe.getAttribute('src');
      if (/(nicovideo\.jp|nico\.ms)/.test(src)) {
        let videoId = src.match(niconicoIdReg);
        if (videoId !== null) {
          smLinkTxt="https://www.nicovideo.jp/watch/" + videoId[0];
          outputLinks +=smLinkTxt + '\r\n';
        }
      }
    });
    
    let result = window.confirm(outputLinks);
    if(result){
      const blob = new Blob([outputLinks],{type:"text/plan"});
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = document.title+ '_link.txt';
      link.click();
    }
  }
 )();
