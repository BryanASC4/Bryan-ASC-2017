var apiRoot='https://wordsapiv1.p.mashape.com/words/';$(document).ready(function(){$("#getWord").click(function(e){e.preventDefault();$("#word").focus().parent().removeClass("has-error");var word=$("#word").val();if(word){if(typeof _gaq!=="undefined"){_gaq.push(['_trackEvent','web','demo',word]);}
var resultType=$("#resultType").val();var request=word;var url=apiRoot+ word;if(resultType){url+="/"+ resultType;request+="/"+ resultType;}
$("#json pre code").html("Getting results...");$("#requestUrl").val(url);$.ajax({url:"/mashape/words/"+ request+"?when="+ when+"&encrypted="+ encrypted,method:'GET',dataType:'json',success:function(result){if(!resultType){var definitions=result.results;if(definitions){definitions.forEach(function(definition){_.each(definition,function(value,key){if(_.isArray(definition[key])&&key!="examples"){var arr=value;for(var i=0,len=arr.length;i<len;i++){if(_.isString(arr[i])){arr[i]="<a class='exampleLink' href='#'>"+ arr[i]+"</a>"}}}});});}}else{var arr=result[resultType];for(var i=0,len=arr.length;i<len;i++){if(_.isString(arr[i])){arr[i]="<a class='exampleLink' href='#'>"+ arr[i]+"</a>"}}}
var formatted=JSON.stringify(result,null,'  ');$("#json pre code").html(formatted);$('pre code').each(function(i,block){hljs.highlightBlock(block);});},error:function(jqXHR,textStatus,errorThrown){if(jqXHR.status===404){$("#json pre code").html("No results for that word.");}else{$("#json pre code").html("Please refresh the page.");}}});}else{$("#word").parent().addClass("has-error");}});$(document).on("click","a.exampleLink",function(e){e.preventDefault();var word=$(this).text();var type=$(this).data('type')||'';$("#word").val(word);$("#resultType").val(type);$("#getWord").click();});$("#word").val('example');$("#getWord").click();});

