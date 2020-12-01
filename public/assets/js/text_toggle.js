var text = ["Day 4", "Day 28", "Day 41","Day 67"];
var index = 0;

$("#description").fadeTo( 1, 0 );

setInterval(function(){
    $("#description").stop().html(text[index]).fadeTo(500,1,function(){
    	index++;
      
    	if (index == 4) {
        	index = 0;
    	};
    });
},2200);


var text1 = ["What goals are you working towards?", "Who inspired you today?", "What are you afraid of?","In what ways are you growing?"];
var index1 = 0;

$("#description1").fadeTo( 1, 0 );

setInterval(function(){
    $("#description1").stop().html(text1[index1]).fadeTo(500,1,function(){
    	index1++;
      
    	if (index1 == 4) {
        	index1 = 0;
    	};
    });
},2200);