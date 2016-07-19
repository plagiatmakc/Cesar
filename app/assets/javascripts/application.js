// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require turbolinks
//= require angular
//= require_tree .


//основная функция
function Cesar(sign,tilt) {										//sign -это знак передаваемого смещения, '+'' и '-' смещение вправо и влево соответственно
var str = document.getElementById("code").value;      			//значение вводного сообщения
var status = document.getElementById("status");					//выводное сообщение
var tilt =sign + document.getElementById("tilt").value;  		//значение смещения
var tmp =0;
var tmp_result=""
status.innerHTML = "";
for (i=0;i<str.length;i++){										//цикл прохождения по строке
	if ((str.charCodeAt(i)>=65&&str.charCodeAt(i)<=90)||(str.charCodeAt(i)>=97&&str.charCodeAt(i)<=122)){  //проверка принадлежности символа строки к диапазону [A..Z] или [a..z] в кодировке ASCII
		if (str.charCodeAt(i)>=65&&str.charCodeAt(i)<=90){		//если символ принадлежит к A..Z
            tmp = +str.charCodeAt(i) + +tilt;					//производим смещение
            while (tmp >90){ tmp-=26;}							//если полученное зачение выходит за диапазон, то вычитаем  
            while (tmp<65){tmp+=26;}							//или прибавляем 26 соответственно
            //status.innerHTML += String.fromCharCode(tmp);  		//преабразовываем код символа обратно в символ и добавляем к строке вывода
        	tmp_result+=String.fromCharCode(tmp); 
        }
        else{													//если символ принадлежит к a..z
            tmp = +str.charCodeAt(i) + +tilt;					//производим смещение
            while (tmp >122){ tmp-=26;}							//если полученное зачение выходит за диапазон, то вычитаем
            while (tmp<97){tmp+=26;}							//или прибавляем 26 соответственно
            tmp_result+=String.fromCharCode(tmp);		//преабразовываем код символа обратно в символ и добавляем к строке вывода 
          	
            }
    }
    else { tmp_result += String.fromCharCode(str.charCodeAt(i));} //если символ не входит в диаапазон A..Z или a..z, то символ добавляетя без смещения 
}
status.innerHTML= JSON.stringify(tmp_result);					 //выводим результат в выводное поле в формате JSON
if(isEmpty(str)) status.innerHTML = "Поле пустое";				 //проверка, что  вводное поле не пустое
}

function isEmpty(str){											//функция проверки, что вводное поле не пустое
	return (str == null) || (str.length == 0);
}

function ROTFunction() {										//функция вывода всех возможных значений  смещения и кодированого текста
	var table = document.getElementById("myTable");
    var str = document.getElementById("code").value;
    var tmp =0;
   
    for (tilt=0;tilt<26;tilt++){
	   	 var row = table.insertRow(tilt);		//создание ряда таблицы
	     var cell1 = row.insertCell(0);			//создание ячейки с номером смещения
	     var cell2 = row.insertCell(1);			//создание ячейки для результата смещения
	     cell1.innerHTML = tilt;
	   	 for (i=0;i<str.length;i++){
	    	if ((str.charCodeAt(i)>=65&&str.charCodeAt(i)<=90)||(str.charCodeAt(i)>=97&&str.charCodeAt(i)<=122)){
	    		if (str.charCodeAt(i)>=65&&str.charCodeAt(i)<=90){
	                tmp = +str.charCodeAt(i) + +tilt;
	                while (tmp >90){ tmp-=26;}
	                while (tmp<65){tmp+=26;}
	                cell2.innerHTML += String.fromCharCode(tmp);  //заносим в ячейку результат смещения
	            }
	            else{
	                tmp = +str.charCodeAt(i) + +tilt;
	                while (tmp >122){ tmp-=26;}
	                while (tmp<97){tmp+=26;}
	                cell2.innerHTML += String.fromCharCode(tmp);   //заносим в ячейку результат смещения
	            }
	        }
	        else { cell2.innerHTML += String.fromCharCode(str.charCodeAt(i));}  //заносим в ячейку результат без смещения
	     }
     
    }      
    if(isEmpty(str)) status.innerHTML = "Поле пустое";
}
    
	
      
      
     
     
   

  