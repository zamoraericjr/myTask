let task = document.getElementById("task")
let details = document.getElementById("details");
var date = document.getElementById("idate");
var time = document.getElementById("itime");
const entr = document.getElementById("entr");
let schedList = document.querySelector('#schedList');
let nSchedList = document.querySelector('#nSchedList');
let dnList = document.querySelector('#dnList');

let stask = "";
let sdetails = "";
let stype = "";
let stime = "";
editi.value = "";

date.addEventListener("change", function(event){
  if(!date.value==""){
      
      time.style.display = 'block';
  }
  else{
      time.style.display = 'none';
  }              
})

entr.addEventListener("click", function(event){
  if(details.value == "" && task.value == ""){
      alert ("Please enter a task/ details.");
  }
  else{
      if(!date.value == ""){
          schedAdd(task.value, details.value, date.value, time.value)
          task.value="";
          details.value="";
          date.value = "";
          time.value = "";
          time.style.display = "none";
      }
      else{
          nSchedAdd(task.value, details.value, "9999-12-31")
          task.value="";
          details.value="";
          date.value = "";
          time.value = "";
          time.style.display = "none";
      }
  }
})   

let tasked = (task, details, date, time) => {
  let today = new Date();
  let year = today.getFullYear();
  let mnth = today.getMonth()+1;
  let day = today.getDate();
  let hr = today.getHours();
  let min = today.getMinutes();
  let now = year+"-"+mnth+"-"+day+" ( "+hr+":"+min+" )"

  console.log(day, year, mnth);
  let dtoday = new Date().getTime();
  let diff = new Date(date).getTime() - dtoday;
  let diff1 = (Math.round((diff / (1000 * 3600 * 24))*100/100));

  let dnTask = document.createElement("li");
  dnTask.id = dtoday;
  dnTask.className = dtoday+" taskedC";


  if(!date==""){
      if(time == ""){

          if(diff1<0){
              dnTask.innerHTML =
 `<input type="checkbox" checked name="done" id="done" style="margin-right:10px;">

 <div class="container-fluid" style = "display:flex; flex-direction:column;">

      <div>
         <h5 style="margin:0;"><b>${task}</b> ${details}</h5>
      </div> 

      <div style="font-size:10px; display:flex; align-item:center">
         <b style="font-size:15px; color:red;">${diff1} </b> <b style="font-size:15px; margin-left:5px;">|</b>
         <div style="margin-left:5px;">
             <div>
                ${date}
             </div>
             <div>
                ${now}
             </div>
          </div> 
      </div>
  </div>    
 <div style="display:flex;">
     <img src="./images/delete-icon.png" width="15px;" height="15px;" style="margin-left:7px;" id="icdel">
 </div>`;

          }
          else if(diff1==0){
              dnTask.innerHTML =
 `<input type="checkbox" checked name="done" id="done" style="margin-right:10px;">

 <div class="container-fluid" style = "display:flex; flex-direction:column;">

      <div>
         <h5 style="margin:0;"><b>${task}</b> ${details}</h5>
      </div> 

      <div style="font-size:10px; display:flex; align-item:center">
         <b style="font-size:15px; color:white;">${diff1} </b> <b style="font-size:15px; margin-left:5px;">|</b>
         <div style="margin-left:5px;">
             <div>
                ${date}
             </div>
             <div>
                ${now}
             </div>
          </div> 
      </div>
  </div>    
 <div style="display:flex;">
     <img src="./images/delete-icon.png" width="15px;" height="15px;" style="margin-left:7px;" id="icdel">
 </div>`;

          }
          else if(diff1>0){
              dnTask.innerHTML =
 `<input type="checkbox" checked name="done" id="done" style="margin-right:10px;">

 <div class="container-fluid" style = "display:flex; flex-direction:column;">

      <div>
         <h5 style="margin:0;"><b>${task}</b> ${details}</h5>
      </div> 

      <div style="font-size:10px; display:flex; align-item:center">
         <b style="font-size:15px; color:greenyellow;">${diff1} </b> <b style="font-size:15px; margin-left:5px;">|</b>
         <div style="margin-left:5px;">
             <div>
                ${date}
             </div>
             <div>
                ${now}
             </div>
          </div> 
      </div>
  </div>    
 <div style="display:flex;">
     <img src="./images/delete-icon.png" width="15px;" height="15px;" style="margin-left:7px;" id="icdel">
 </div>`;

          }
 
 dnTask.querySelector('#icdel').addEventListener("click",function(event){
     const editi1 = document.getElementById(dtoday);
     editi1.remove();
    
 })

 dnTask.querySelector('#done').addEventListener("click",function(event){
     const editi1 = document.getElementById(dtoday);
     editi1.remove();
     schedAdd(task, details, date, time)

    
 })
 dnList.appendChild(dnTask);

 var liDnList = document.querySelectorAll("#dnList li");
var sortDn = [].slice.call(liDnList).sort(sortOrder);

sortDn.forEach(function(dnList)  {
document.querySelector("#dnList").appendChild(dnList);      

});  

}
else{

if(diff1<0){
              dnTask.innerHTML =
 `<input type="checkbox" checked name="done" id="done" style="margin-right:10px;">

 <div class="container-fluid" style = "display:flex; flex-direction:column;">

      <div>
         <h5 style="margin:0;"><b>${task}</b> ${details}</h5>
      </div> 

      <div style="font-size:10px; display:flex; align-item:center">
         <b style="font-size:15px; color:red;">${diff1} </b> <b style="font-size:15px; margin-left:5px;">|</b>
         <div style="margin-left:5px;">
             <div>
                ${date} ( ${time} )
             </div>
             <div>
                ${now}
             </div>
          </div> 
      </div>
  </div>    
 <div style="display:flex;">
     <img src="./images/delete-icon.png" width="15px;" height="15px;" style="margin-left:7px;" id="icdel">
 </div>`;

          }
else if(diff1==0){
              dnTask.innerHTML =
 `<input type="checkbox" checked name="done" id="done" style="margin-right:10px;">

 <div class="container-fluid" style = "display:flex; flex-direction:column;">

      <div>
         <h5 style="margin:0;"><b>${task}</b> ${details}</h5>
      </div> 

      <div style="font-size:10px; display:flex; align-item:center">
         <b style="font-size:15px; color:white;">${diff1} </b> <b style="font-size:15px; margin-left:5px;">|</b>
         <div style="margin-left:5px;">
             <div>
                ${date} ( ${time} )
             </div>
             <div>
                ${now}
             </div>
          </div> 
      </div>
  </div>    
 <div style="display:flex;">
     <img src="./images/delete-icon.png" width="15px;" height="15px;" style="margin-left:7px;" id="icdel">
 </div>`;

          }
else if(diff1>0){
              dnTask.innerHTML =
 `<input type="checkbox" checked name="done" id="done" style="margin-right:10px;">

 <div class="container-fluid" style = "display:flex; flex-direction:column;">

      <div>
         <h5 style="margin:0;"><b>${task}</b> ${details}</h5>
      </div> 

      <div style="font-size:10px; display:flex; align-item:center">
         <b style="font-size:15px; color:greenyellow;">${diff1} </b> <b style="font-size:15px; margin-left:5px;">|</b>
         <div style="margin-left:5px;">
             <div>
                ${date} ( ${time} )
             </div>
             <div>
                ${now}
             </div>
          </div> 
      </div>
  </div>    
 <div style="display:flex;">
     <img src="./images/delete-icon.png" width="15px;" height="15px;" style="margin-left:7px;" id="icdel">
 </div>`;

          }
 
 dnTask.querySelector('#icdel').addEventListener("click",function(event){
     const editi1 = document.getElementById(dtoday);
     editi1.remove();
    
 })

 dnTask.querySelector('#done').addEventListener("click",function(event){
     const editi1 = document.getElementById(dtoday);
     editi1.remove();
     schedAdd(task, details, date, time)

 })
 dnList.appendChild(dnTask);

 var liDnList = document.querySelectorAll("#dnList li");
var sortDn = [].slice.call(liDnList).sort(sortOrder);

sortDn.forEach(function(dnList)  {
document.querySelector("#dnList").appendChild(dnList);      

});  
}
  
  }
  
  else{
      dnTask.innerHTML =
      `<input type="checkbox" checked name="done" id="done" style="margin-right:10px;">

<div class="container-fluid" style = "display:flex; flex-direction:column;">

<div>
<h5 style="margin:0;"><b>${task}</b> ${details}</h5>
</div> 

<div style="font-size:10px; display:flex; align-item:center">
${now}         
</div>
</div>    
<div style="display:flex;">
<img src="./images/delete-icon.png" width="15px;" height="15px;" style="margin-left:7px;" id="icdel">
</div>`;
        
         dnTask.querySelector('#icdel').addEventListener("click",function(event){
     const editi1 = document.getElementById(dtoday);
     editi1.remove();
    
 })

 dnTask.querySelector('#done').addEventListener("click",function(event){
     const editi1 = document.getElementById(dtoday);
     editi1.remove();
     nSchedAdd(task, details, "9999-12-31")

 })
 dnList.appendChild(dnTask);

 var liDnList = document.querySelectorAll("#dnList li");
var sortDn = [].slice.call(liDnList).sort(sortOrder);

sortDn.forEach(function(dnList)  {
document.querySelector("#dnList").appendChild(dnList);      

});  

  }

}

let schedAdd = (task, details, date, time) => {

  let today = new Date().getTime();
  let timeLeft = new Date(date).getTime() - today;
  let daysLeft = (Math.round((timeLeft / (1000 * 3600 * 24))*100/100));
  let schedTask = document.createElement("li");
  schedTask.id = today;

  if(daysLeft < 0){
      if(time == ""){

          schedTask.className = date+"23:59 schedEx schedExColor";
         
          schedTask.innerHTML =
          `
          <input type="checkbox" name="done" id="done" style="margin-right:10px;">

          <div class="container-fluid" style = "display:flex; flex-direction:column;">

              <div>
                  <h5 style="margin:0;"><b>${task}</b> ${details}</h5>
              </div> 
          
              <div style="font-size:10px; margin-left:10px;">
                  <b style="font-size:15px;"> ${daysLeft}  | </b>${date}
              </div> 

          </div>
          <div style="display:flex;">

              <img src="./images/edit-icon.png" width="15px;" height="15px;" style="margin-left:7px;" id="icedit">

              <img src="./images/delete-icon.png" width="15px;" height="15px;" style="margin-left:7px;" id="icdel">
          </div>`;

          schedTask.querySelector('#icedit').addEventListener("click",function(event){

              if(editi.value==""){

                  editi.value = today;
                  const editi1 = document.getElementById(today);
              editi1.remove();
              editf(today, task, details, date, time, "container-fluid g-0 schedExColor", "s")
              }
              else{

                  if(stype=="s"){
                      schedAdd(stask, sdetails, sdate, stime);
                      console.log(stask, sdetails, sdate, stime);
                      editi.value=today;
                      const editi1 = document.getElementById(today);
                      editi1.remove();
                      editf(today, task, details, date, time, "container-fluid g-0 schedExColor", "s")
                  }
                  else if(stype=="ns"){
                      console.log(sdate);
                      nSchedAdd(stask, sdetails, "9999-12-31");
                      editi.value=today;
                      const editi1 = document.getElementById(today);
                      editi1.remove();
                      editf(today, task, details, date, time, "container-fluid g-0 schedExColor", "s")
                  }
                 
                 
              }
            
          })

          schedTask.querySelector('#icdel').addEventListener("click",function(event){
              const editi1 = document.getElementById(today);
              editi1.remove();
             
          })

          schedTask.querySelector('#done').addEventListener('change', function(event){
              const editi1 = document.getElementById(today);
              editi1.remove();
              tasked(task, details, date, time)
          })
          schedList.appendChild(schedTask);

          var liSchedList = document.querySelectorAll("#schedList li");
  var sortSched = [].slice.call(liSchedList).sort(sortOrder);

  sortSched.forEach(function(schedList)  {
      document.querySelector("#schedList").appendChild(schedList);      
       
  });  

      }
      else{
          schedTask.className = date+time+" schedEx schedExColor";
         
          schedTask.innerHTML =
         `
         <input type="checkbox" name="done" id="done" style="margin-right:10px;">

         <div class="container-fluid" style = "display:flex; flex-direction:column;">

             <div>
                 <h5 style="margin:0;"><b>${task}</b> ${details}</h5>
             </div> 
         
             <div style="font-size:10px; margin-left:10px;">
                 <b style="font-size:15px;">${daysLeft}  |</b> ${date} <b style="font-size:15px;">| ${time}</b>
             </div> 

         </div>
         <div style="display:flex;">

             <img src="./images/edit-icon.png" width="15px;" height="15px;" style="margin-left:7px;" id="icedit">

             <img src="./images/delete-icon.png" width="15px;" height="15px;" style="margin-left:7px;" id="icdel">
         </div>`;

         schedTask.querySelector('#icedit').addEventListener("click",function(event){
  
             if(editi.value==""){
                  editi.value=today;
                  const editi1 = document.getElementById(today);
              editi1.remove();
              editf(today, task, details, date, time, "container-fluid g-0 schedExColor", "s")
              }
              else{
                 
                  if(stype=="s"){
                      schedAdd(stask, sdetails, sdate, stime);
                  editi.value=today;
                  const editi1 = document.getElementById(today);
              editi1.remove();
              editf(today, task, details, date, time, "container-fluid g-0 schedExColor", "s")
                  }
                  else if(stype=="ns"){
                      nSchedAdd(stask, sdetails, "9999-12-31");
                  editi.value=today;
                  const editi1 = document.getElementById(today);
              editi1.remove();
              editf(today, task, details, date, time, "container-fluid g-0 schedExColor", "s")
                  }
              }
            
         })

         schedTask.querySelector('#icdel').addEventListener("click",function(event){
             const editi1 = document.getElementById(today);
             editi1.remove();
            
         })

         schedTask.querySelector('#done').addEventListener('change', function(event){
             const editi1 = document.getElementById(today);
             editi1.remove();
             tasked(task, details, date, time)
         })
         schedList.appendChild(schedTask);

         var liSchedList = document.querySelectorAll("#schedList li");
 var sortSched = [].slice.call(liSchedList).sort(sortOrder);

 sortSched.forEach(function(schedList)  {
     document.querySelector("#schedList").appendChild(schedList);      
      
 });  
      }
  }
  else if(daysLeft == 0){
      if(time == ""){

          schedTask.className = date+"23:59 sched0 sched0Color";

          schedTask.innerHTML =
 `
 <input type="checkbox" name="done" id="done" style="margin-right:10px;">

 <div class="container-fluid" style = "display:flex; flex-direction:column;">

     <div>
         <h5 style="margin:0;"><b>${task}</b> ${details}</h5>
     </div> 
 
     <div style="font-size:10px; margin-left:10px;">
         <b style="font-size:15px;"> ${daysLeft}  | </b>${date}
     </div> 

 </div>
 <div style="display:flex;">

     <img src="./images/edit-icon.png" width="15px;" height="15px;" style="margin-left:7px;" id="icedit">

     <img src="./images/delete-icon.png" width="15px;" height="15px;" style="margin-left:7px;" id="icdel">
 </div>`;

 schedTask.querySelector('#icedit').addEventListener("click",function(event){

     if(editi.value==""){
                  editi.value=today;
                  const editi1 = document.getElementById(today);
     editi1.remove();
     editf(today, task, details, date, time, "container-fluid g-0 sched0Color", "s")
              }
              else{

                  if(stype=="s"){
                  schedAdd(stask, sdetails, sdate, stime);
                  editi.value=today;
                  const editi1 = document.getElementById(today);
     editi1.remove();
     editf(today, task, details, date, time, "container-fluid g-0 sched0Color", "s")
                 }
                 else if(stype=="ns"){
                  nSchedAdd(stask, sdetails, "9999-12-31");
                  editi.value=today;
                  const editi1 = document.getElementById(today);
     editi1.remove();
     editf(today, task, details, date, time, "container-fluid g-0 sched0Color", "s")
                 }
   
              }
    
 })

 schedTask.querySelector('#icdel').addEventListener("click",function(event){
     const editi1 = document.getElementById(today);
     editi1.remove();
    
 })

 schedTask.querySelector('#done').addEventListener('change', function(event){
     const editi1 = document.getElementById(today);
     editi1.remove();
     tasked(task, details, date, time)
 })
 schedList.appendChild(schedTask);

 var liSchedList = document.querySelectorAll("#schedList li");
var sortSched = [].slice.call(liSchedList).sort(sortOrder);

sortSched.forEach(function(schedList)  {
document.querySelector("#schedList").appendChild(schedList);      

});  

}
else{
schedTask.className = date+time+" sched0 sched0Color";

schedTask.innerHTML =
`
<input type="checkbox" name="done" id="done" style="margin-right:10px;">

<div class="container-fluid" style = "display:flex; flex-direction:column;">

    <div>
        <h5 style="margin:0;"><b>${task}</b> ${details}</h5>
    </div> 

    <div style="font-size:10px; margin-left:10px;">
        <b style="font-size:15px;">${daysLeft}  |</b> ${date} <b style="font-size:15px;">| ${time}</b>
    </div> 

</div>
<div style="display:flex;">

    <img src="./images/edit-icon.png" width="15px;" height="15px;" style="margin-left:7px;" id="icedit">

    <img src="./images/delete-icon.png" width="15px;" height="15px;" style="margin-left:7px;" id="icdel">
</div>`;

schedTask.querySelector('#icedit').addEventListener("click",function(event){
  
    if(editi.value==""){
                  editi.value=today;
                  const editi1 = document.getElementById(today);
    editi1.remove();
    editf(today, task, details, date, time, "container-fluid g-0 sched0Color", "s")
              }
              else{

if(stype=="s"){
schedAdd(stask, sdetails, sdate, stime);
                  editi.value=today;
                  const editi1 = document.getElementById(today);
    editi1.remove();
    editf(today, task, details, date, time, "container-fluid g-0 sched0Color", "s")
}
else if(stype=="ns"){
nSchedAdd(stask, sdetails, "9999-12-31");
                  editi.value=today;
                  const editi1 = document.getElementById(today);
    editi1.remove();
    editf(today, task, details, date, time, "container-fluid g-0 sched0Color", "s")
}
    
              }
   
})

schedTask.querySelector('#icdel').addEventListener("click",function(event){
    const editi1 = document.getElementById(today);
    editi1.remove();
   
})

schedTask.querySelector('#done').addEventListener('change', function(event){
    const editi1 = document.getElementById(today);
    editi1.remove();
    tasked(task, details, date, time)
})
schedList.appendChild(schedTask);

var liSchedList = document.querySelectorAll("#schedList li");
var sortSched = [].slice.call(liSchedList).sort(sortOrder);

sortSched.forEach(function(schedList)  {
document.querySelector("#schedList").appendChild(schedList);      

});  
}
  }
  else if(daysLeft == 1){
      if(time == ""){

          schedTask.className = date+"23:59 sched1 sched1Color";

          schedTask.innerHTML =
 `
 <input type="checkbox" name="done" id="done" style="margin-right:10px;">

 <div class="container-fluid" style = "display:flex; flex-direction:column;">

     <div>
         <h5 style="margin:0;"><b>${task}</b> ${details}</h5>
     </div> 
 
     <div style="font-size:10px; margin-left:10px;">
         <b style="font-size:15px;"> ${daysLeft}  | </b>${date}
     </div> 

 </div>
 <div style="display:flex;">

     <img src="./images/edit-icon.png" width="15px;" height="15px;" style="margin-left:7px;" id="icedit">

     <img src="./images/delete-icon.png" width="15px;" height="15px;" style="margin-left:7px;" id="icdel">
 </div>`;

 schedTask.querySelector('#icedit').addEventListener("click",function(event){
  
     if(editi.value==""){
                  editi.value=today;
                  const editi1 = document.getElementById(today);
    editi1.remove();
    editf(today, task, details, date, time, "container-fluid g-0 sched1Color", "s");
              }
              else{

if(stype=="s"){
schedAdd(stask, sdetails, sdate, stime);
                  editi.value=today;
                  const editi1 = document.getElementById(today);
    editi1.remove();
    editf(today, task, details, date, time, "container-fluid g-0 sched1Color", "s");
}
else if(stype=="ns"){
nSchedAdd(stask, sdetails, "9999-12-31");
                  editi.value=today;
                  const editi1 = document.getElementById(today);
    editi1.remove();
    editf(today, task, details, date, time, "container-fluid g-0 sched1Color", "s");
}
       
              }
    
 })

 schedTask.querySelector('#icdel').addEventListener("click",function(event){
     const editi1 = document.getElementById(today);
     editi1.remove();
    
 })

 schedTask.querySelector('#done').addEventListener('change', function(event){
     const editi1 = document.getElementById(today);
     editi1.remove();
     tasked(task, details, date, time)
 })
 schedList.appendChild(schedTask);

 var liSchedList = document.querySelectorAll("#schedList li");
var sortSched = [].slice.call(liSchedList).sort(sortOrder);

sortSched.forEach(function(schedList)  {
document.querySelector("#schedList").appendChild(schedList);      

});  

}
else{
schedTask.className = date+time+" sched1 sched1Color";

schedTask.innerHTML =
`
<input type="checkbox" name="done" id="done" style="margin-right:10px;">

<div class="container-fluid" style = "display:flex; flex-direction:column;">

    <div>
        <h5 style="margin:0;"><b>${task}</b> ${details}</h5>
    </div> 

    <div style="font-size:10px; margin-left:10px;">
        <b style="font-size:15px;">${daysLeft}  |</b> ${date} <b style="font-size:15px;">| ${time}</b>
    </div> 

</div>
<div style="display:flex;">

    <img src="./images/edit-icon.png" width="15px;" height="15px;" style="margin-left:7px;" id="icedit">

    <img src="./images/delete-icon.png" width="15px;" height="15px;" style="margin-left:7px;" id="icdel">
</div>`;

schedTask.querySelector('#icedit').addEventListener("click",function(event){
  

    if(editi.value==""){
                  editi.value=today;
                  const editi1 = document.getElementById(today);
    editi1.remove();
    editf(today, task, details, date, time, "container-fluid g-0 sched1Color", "s")
              }
              else{
                 
if(stype=="s"){
schedAdd(stask, sdetails, sdate, stime);
                  editi.value=today;
                  const editi1 = document.getElementById(today);
    editi1.remove();
    editf(today, task, details, date, time, "container-fluid g-0 sched1Color", "s")
}
else if(stype=="ns"){
nSchedAdd(stask, sdetails, "9999-12-31");
                  editi.value=today;
                  const editi1 = document.getElementById(today);
    editi1.remove();
    editf(today, task, details, date, time, "container-fluid g-0 sched1Color", "s")
}
              
              }
   
})

schedTask.querySelector('#icdel').addEventListener("click",function(event){
    const editi1 = document.getElementById(today);
    editi1.remove();
   
})

schedTask.querySelector('#done').addEventListener('change', function(event){
    const editi1 = document.getElementById(today);
    editi1.remove();
    tasked(task, details, date, time)
})
schedList.appendChild(schedTask);

var liSchedList = document.querySelectorAll("#schedList li");
var sortSched = [].slice.call(liSchedList).sort(sortOrder);

sortSched.forEach(function(schedList)  {
document.querySelector("#schedList").appendChild(schedList);      

});  
}

  }
  else if(daysLeft >= 2){
      if(time == ""){

          schedTask.className = date+"23:59 sched2 sched2Color";

          schedTask.innerHTML =
 `
 <input type="checkbox" name="done" id="done" style="margin-right:10px;">

 <div class="container-fluid" style = "display:flex; flex-direction:column;">

     <div>
         <h5 style="margin:0;"><b>${task}</b> ${details}</h5>
     </div> 
 
     <div style="font-size:10px; margin-left:10px;">
         <b style="font-size:15px;"> ${daysLeft}  | </b>${date}
     </div> 

 </div>
 <div style="display:flex;">

     <img src="./images/edit-icon.png" width="15px;" height="15px;" style="margin-left:7px;" id="icedit">

     <img src="./images/delete-icon.png" width="15px;" height="15px;" style="margin-left:7px;" id="icdel">
 </div>`;

 schedTask.querySelector('#icedit').addEventListener("click",function(event){

     if(editi.value==""){
                  editi.value=today;
                  const editi1 = document.getElementById(today);
    editi1.remove();
    editf(today, task, details, date, time, "container-fluid g-0 sched2Color", "s")
              }
              else{

if(stype=="s"){
schedAdd(stask, sdetails, sdate, stime);
                  editi.value=today;
                  const editi1 = document.getElementById(today);
    editi1.remove();
    editf(today, task, details, date, time, "container-fluid g-0 sched2Color", "s")
}
else if(stype=="ns"){
nSchedAdd(stask, sdetails, date);
                  editi.value=today;
                  const editi1 = document.getElementById(today);
    editi1.remove();
    editf(today, task, details, date, time, "container-fluid g-0 sched2Color", "s")
}
        
              }
    
 })

 schedTask.querySelector('#icdel').addEventListener("click",function(event){
     const editi1 = document.getElementById(today);
     editi1.remove();
    
 })

 schedTask.querySelector('#done').addEventListener('change', function(event){
     const editi1 = document.getElementById(today);
     editi1.remove();
     tasked(task, details, date, time)
 })
 schedList.appendChild(schedTask);

 var liSchedList = document.querySelectorAll("#schedList li");
var sortSched = [].slice.call(liSchedList).sort(sortOrder);

sortSched.forEach(function(schedList)  {
document.querySelector("#schedList").appendChild(schedList);      

});  

}
else{
schedTask.className = date+time+" sched2 sched2Color";

schedTask.innerHTML =
`
<input type="checkbox" name="done" id="done" style="margin-right:10px;">

<div class="container-fluid" style = "display:flex; flex-direction:column;">

    <div>
        <h5 style="margin:0;"><b>${task}</b> ${details}</h5>
    </div> 

    <div style="font-size:10px; margin-left:10px;">
        <b style="font-size:15px;">${daysLeft}  |</b> ${date} <b style="font-size:15px;">| ${time}</b>
    </div> 

</div>
<div style="display:flex;">

    <img src="./images/edit-icon.png" width="15px;" height="15px;" style="margin-left:7px;" id="icedit">

    <img src="./images/delete-icon.png" width="15px;" height="15px;" style="margin-left:7px;" id="icdel">
</div>`;

schedTask.querySelector('#icedit').addEventListener("click",function(event){

  if(editi.value==""){
      editi.value=today;
      const editi1 = document.getElementById(today);
      editi1.remove();
      editf(today, task, details, date, time, "container-fluid g-0 sched2Color", "s")
  }
  else{
      
      if(stype=="s"){
          schedAdd(stask, sdetails, sdate, stime);
          editi.value=today;
          const editi1 = document.getElementById(today);
          editi1.remove();
          editf(today, task, details, date, time, "container-fluid g-0 sched2Color", "s")
      }
      else if(stype=="ns"){
          nSchedAdd(stask, sdetails, date);
          editi.value=today;
          const editi1 = document.getElementById(today);
          editi1.remove();
          editf(today, task, details, date, time, "container-fluid g-0 sched2Color", "s")
      }
  }
})

schedTask.querySelector('#icdel').addEventListener("click",function(event){
  const editi1 = document.getElementById(today);
  editi1.remove();
   
})

schedTask.querySelector('#done').addEventListener('change', function(event){
  const editi1 = document.getElementById(today);
  editi1.remove();
  tasked(task, details, date, time)
})

schedList.appendChild(schedTask);

var liSchedList = document.querySelectorAll("#schedList li");
var sortSched = [].slice.call(liSchedList).sort(sortOrder);

sortSched.forEach(function(schedList)  {
document.querySelector("#schedList").appendChild(schedList);      

});  
}

  }

}

let nSchedAdd = (task, details, date) => {

  let today = new Date().getTime();
  let nSchedTask = document.createElement("li");
  nSchedTask.className = "nSchedColor";
  nSchedTask.id = today;
         
  nSchedTask.innerHTML =
      `<input type="checkbox" name="done" id="done" style="margin-right:10px;">

         <div class="container-fluid" style = "display:flex; flex-direction:column;">

             <div>
                 <h5 style="margin:0;"><b>${task}</b> ${details}</h5>
             </div> 
         

         </div>
         <div style="display:flex;">

             <img src="./images/edit-icon.png" width="15px;" height="15px;" style="margin-left:7px;" id="icedit">

             <img src="./images/delete-icon.png" width="15px;" height="15px;" style="margin-left:7px;" id="icdel">
         </div>`;

         nSchedTask.querySelector('#icedit').addEventListener("click",function(event){
             if(editi.value==""){
                 editi.value=today;
                 const editi1 = document.getElementById(today);
             editi1.remove();
             editf(today, task, details, date, "", "container-fluid g-0 nSchedColor", "ns")
             }
             else{

              if(stype=="s"){
                  schedAdd(stask, sdetails, sdate, stime);
                 editi.value=today;
                 const editi1 = document.getElementById(today);
                  editi1.remove();
             editf(today, task, details, date, "", "container-fluid g-0 nSchedColor", "ns")

              }
              else if(stype=="ns"){
                  nSchedAdd(stask, sdetails, sdate, stime);
                 editi.value=today;
                 const editi1 = document.getElementById(today);
             editi1.remove();
             editf(today, task, details, date, "", "container-fluid g-0 nSchedColor", "ns")
              }
                
                
             }
           
         })

         nSchedTask.querySelector('#icdel').addEventListener("click",function(event){
             const editi1 = document.getElementById(today);
             editi1.remove();
            
         })

         nSchedTask.querySelector('#done').addEventListener('change', function(event){
             const editi1 = document.getElementById(today);
             editi1.remove();
             tasked(task, details, "", "")
         })
         nSchedList.appendChild(nSchedTask);
}

let editf = (editi, etask1, edetails1, edate1, etime1, eclass, stype1) =>{

//     let etask1 = document.getElementById("etask");
//   let edetails1 = document.getElementById("edetails");
//   let edate1 = document.getElementById("eidate");
//   let etime1 = document.getElementById("eitime");
//   const eentr = document.getElementById("eentr");

              edit.style = "position: fixed;";
              edit.className = eclass;
              esel.innerHTML = etask1;
              esel.value = etask1;
              etask.value = etask1;
              edetails.value = edetails1;

              if(stype1=="s"){
                  eidate.value= edate1;
                  eitime.display='block';
              }
              else if(stype1=="ns"){
                  eidate.value= "";
                  eitime.style="display:none";
              }
              
              // eitime.style.display = 'block';  
              
              stask = etask1;
              sdetails = edetails1;
              sdate = edate1;
              stime = etime1;
              stype = stype1;                    

}


eidate.addEventListener("change", function(event){
  if(!eidate.value==""){
      eitime.style.display = 'block';
  }
  else{
      eitime.style.display = 'none';
  }              
})

eentr.addEventListener("click", function(event){
  
  if(edetails.value == "" && etask.value == ""){
      alert ("Please enter a task/ details.");
  }
  else{
      
      editi.value="";
      edit.style = "position: fixed; display: none;";
      
      if(!eidate.value == ""){
          schedAdd(etask.value, edetails.value, eidate.value, eitime.value)
      }
      else{
          nSchedAdd(etask.value, edetails.value, "9999-12-31")
      }
  }
})  

cncl.addEventListener("click", function(event){
  editi.value="";
  edit.style = "position: fixed; display: none;";
         
  if(stype=="s"){
      schedAdd(stask, sdetails, sdate, stime);
  }
  else if(stype=="ns"){
      nSchedAdd(stask, sdetails, sdate);
  }
})

function sortOrder(a, b){
  a = a.className;
  b = b.className;

  // if(!isNaN(parseInt(a)) && !isNaN(parseInt(b))){
  //     return parseInt(a) - parseInt(b);
  // }
  return ( a > b ) ? 1 : ( b > a ) ? -1 : 0;
}