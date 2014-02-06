
// TIME AND DATE

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1;
var yyyy = today.getYear();
var minutes = today.getMinutes();
var hours = today.getHours();

$("#time").html("<span> "+hours+":"+minutes+"</span>");

if(dd<10){dd='0'+dd} 
if(mm<10){mm='0'+mm} 
date = mm+'/'+dd+'/'+yyyy;

$("#today").html("<span>"+date+"</span>");

//WEATHER
var temp_f;

$(document).ready(function() {
  $.ajax({
  url : "http://api.wunderground.com/api/e1d12a7b013c65c3/geolookup/conditions/q/MA/Boston.json",
  dataType : "jsonp",
  success : function(parsed_json) {
  	console.log(parsed_json);
		var location = parsed_json['location']['city'];
		 temp_f = parsed_json['current_observation']['temp_f'];
		var current_observation = parsed_json['current_observation']['weather'];
		$("#temp").html("" + temp_f + "&deg");
		$("#observation").html("" + current_observation + "");

			if(temp_f<35){
				$("#winter-coat").show();
			}
			if(temp_f>35){
				$("#jacket").show();
			}
			if(temp_f>55){
				$("#sweater").show();
			}
			if(weather==rain){
				$("#rain-coat").show();
			}
			
		}
    
});
});


//WHAT

//if <35 temp >-20 , change winter-coat to selected class

//when temp is 35-55 display light jacket

//when temp is 55-65 display sweater

//when the current.condition says rain, show rain coat

//when temp is 65 and over display no jacket







