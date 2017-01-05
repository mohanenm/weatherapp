

/* var randomColor = Math.floor(Math.random()*16777215).toString(16);
$('head').append("<style> body { background-color: #"+randomColor+";"+"}"); */


var apiKey = "&units=imperial&appid=57fc5ce9c845cddc46abe979fb367c2d"; 
      
$(function(){

 var loc; 

// grab data from ip info (need to fix function, ipinfo is not the most accurate resource)
//need to change to $.getJSON("http://api.wunderground.com/api/1402eccb0c88b5ec/geolookup/q/", function(data) {
  $.getJSON('http://ipinfo.io', function(data){
}


//split method to turn coordinates into an array 

     var geo = data.loc.split(',');
 
 //grabbing data from open weather map


                $.getJSON("http://api.wunderground.com/api/1402eccb0c88b5ec/conditions/q/" + geo[0] + "," + geo[1] + ".json", 
                 function(zz){
 


 //current data
  

               
                var z = "&#xb0;";
                var currentTemp = zz.current_observation.temp_f;
                var currentState = zz.current_observation.display_location.full; 
                var cel = (currentTemp - 32) * (5/9);
                var currentState2 = zz.current_observation.weather; 

             
          
               $('#geo').append(currentState);
               $('#temp').append(Math.round(currentTemp) + z + "F" + "  " + '(' + Math.round(cel) + z + 'C' + ')' );
               $('#cond').append(currentState2);
  



  //forecast function 
             



             $(function(){
    
                
               $.getJSON("http://api.wunderground.com/api/1402eccb0c88b5ec/forecast/q/" + geo[0] + "," + geo[1] + ".json", 
                function(bc){



 //variable for degree                  
                 

                 var z = "&#xb0;"; 



  
              
//tomorrow var 
                 


                  var day = bc.forecast.simpleforecast.forecastday["1"].date.weekday;
                  var a = bc.forecast.simpleforecast.forecastday["1"].conditions;
                  var b = bc.forecast.simpleforecast.forecastday["1"].icon_url;
                  var c = bc.forecast.simpleforecast.forecastday["1"].high.fahrenheit;
                  var d = bc.forecast.simpleforecast.forecastday["1"].low.fahrenheit;
                  var e = bc.forecast.simpleforecast.forecastday["1"].maxwind.mph;
                  var f = bc.forecast.simpleforecast.forecastday["1"].maxwind.dir;
                  //var g = bc.forecast.simpleforecast.forecastday["1"].
                



//next day var
                  
                  var day1 = bc.forecast.simpleforecast.forecastday["2"].date.weekday;
                  var aa = bc.forecast.simpleforecast.forecastday["2"].conditions;
                  var bb = bc.forecast.simpleforecast.forecastday["2"].icon_url;
                  var cc = bc.forecast.simpleforecast.forecastday["2"].high.fahrenheit;
                  var dd = bc.forecast.simpleforecast.forecastday["2"].low.fahrenheit;
                  var ee = bc.forecast.simpleforecast.forecastday["2"].maxwind.mph;
                  var ff = bc.forecast.simpleforecast.forecastday["2"].maxwind.dir;

// next next 
                  var day2 = bc.forecast.simpleforecast.forecastday["3"].date.weekday;
                  var aaa = bc.forecast.simpleforecast.forecastday["3"].conditions;
                  var bbb = bc.forecast.simpleforecast.forecastday["3"].icon_url;
                  var ccc = bc.forecast.simpleforecast.forecastday["3"].high.fahrenheit;
                  var ddd = bc.forecast.simpleforecast.forecastday["3"].low.fahrenheit;
                  var eee = bc.forecast.simpleforecast.forecastday["3"].maxwind.mph;         
                  var fff = bc.forecast.simpleforecast.forecastday["3"].maxwind.dir;


//current day     
                 var aaaa = bc.forecast.txt_forecast.forecastday["0"].icon_url;
                 var bbbb = bc.forecast.txt_forecast.forecastday["0"].title;
                 var cccc = bc.forecast.txt_forecast.forecastday["0"].fcttext; 
                 var dddd = bc.forecast.txt_forecast.forecastday["1"].fcttext; 
               

//current day append 


                   $("#cond").append('<img src ="' + aaaa + '">');
                   $('#day0').append(bbbb + ", current conditions:"); 
                   $('#des1').append(cccc); 
                   $('#des2').append(dddd);



//tomorrow append 
                   


                   $("#day").append(day + ":");
                   $("#forecast").append(a);
                   $("#forecast").append('<img src ="' + b + '">');
                   $("#high1").append(c + " " + z + "F");
                   $("#low1").append(d + " " + z + "F");
                   $("#wind1").append(e + 'mph');
                   $('#winddir1').append(f);


//next day append
                    

                    $("#day1").append(day1 + ':');
                    $("#1").append(aa);
                    $("#1").append('<img src ="' + bb + '">');
                    $("#high2").append(cc + " " + z + "F");
                    $("#low2").append(dd + " " + z + "F");
                    $("#wind2").append(ee + 'mph');
                    $('#winddir2').append(ff);



//next next append 
                    

                    $("#day2").append(day2 + ':');
                    $("#2").append(aaa);
                    $("#2").append('<img src ="' + bbb + '">');
                    $("#high3").append(ccc + " " + z + "F");
                    $("#low3").append(ddd + " " + z + "F");
                    $("#wind3").append(eee + 'mph');
                    $('#winddir3').append(fff);


                 /* $(function(){
                 $.getJSON("http://api.wunderground.com/api/1402eccb0c88b5ec/satellite/q/" + geo[0] + "," + geo[1] + ".json", 
                 function(cd){


//satellite request 

                         var imagereq = cd.satellite.image_url_ir4;
//satellite append req
                         $('#satellite').append('<img class ="img-responsive" src ="' + imagereq + '">');

 

                            }) 
                          }) */
                      })
                 })
            })

      })
   })

