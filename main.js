function loadJson(file,callback){
    var xhr=new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open("GET",file,true);
    xhr.onreadystatechange=function(){
      if(xhr.readyState===4 && xhr.status=="200"){
         callback(xhr.responseText);
      }
    }
    xhr.send(null);
 }
 loadJson("data.json",function(text){
   let data=JSON.parse(text);
   console.log(data);
   fun_career(data.careerobjective);
   fun_education(data.education);
   fun_achieve(data.achievements);
   fun_skill(data.technicalskills);
   });
   var div2=document.getElementById("child2");
   function fun_career(careerobj){
     var headLine=document.createElement("h2");
     headLine.textContent="Career Objective";
     div2.appendChild(headLine);
     var underLine=document.createElement("hr");
     div2.appendChild(underLine);
     var info=document.createElement("p");
     info.textContent=careerobj.info;
     info.style.fontSize="17px";
     div2.appendChild(info);
   }
   function fun_education(edu){
     var h2=document.createElement("h2");
     h2.textContent="Educational Qualifications";
     div2.appendChild(h2);
     var underLine=document.createElement("hr");
     div2.appendChild(underLine);
     var list=document.createElement("ul");
     div2.appendChild(list);
     for(var i=0;i<edu.length;i++){
        var listItem1=document.createElement("li");
        listItem1.textContent=edu[i].degree;
        listItem1.style.fontWeight="600";
        listItem1.style.fontSize="25px";
        var listItem2=document.createElement("p");
        listItem2.textContent=edu[i].institute;
        var listItem3=document.createElement("p");
          listItem3.textContent=edu[i].data;
         list.appendChild(listItem1);
         list.appendChild(listItem2);
         list.appendChild(listItem3);

       }
     }
     function fun_achieve(art){
       var headLine=document.createElement("h2");
       headLine.textContent="Achievements";
       div2.appendChild(headLine);
       var underLine=document.createElement("hr");
       div2.appendChild(underLine);
       var list=document.createElement("ol");
       div2.appendChild(list);
      for(var j=0;j<art.length;j++){
          var listItem=document.createElement("li");
          listItem.innerHTML=art[j].nameofachivement;
           list.appendChild(listItem);
     }
   }
     function fun_skill(techs)
     {
       var headLine=document.createElement("h2");
       headLine.textContent="Technical Skills";
       div2.appendChild(headLine);
       var underLine=document.createElement("hr");
       div2.appendChild(underLine);
       var tr="";
       var table=document.createElement("table");
       table.border="1";
       div2.appendChild(table);
       for(var k=0;k<techs.length;k++)
       {
         tr+="<tr><td>"+techs[k].name+"</td><td>"+techs[k].data+"</td></tr>";
       }
      table.innerHTML=tr;
     }
