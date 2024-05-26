!function(){let t=function(t){let e=document.getElementById(t);if(e)return e;throw Error(`Element with id ${t} not found`)}("taskbar-status-time");function e(){let e=new Date;e.setHours(e.getHours()+2),t.innerText=e.toLocaleTimeString("en-US",{hour:"numeric",minute:"numeric"})}setInterval(()=>{e()},1e3),e()}();
//# sourceMappingURL=index.098c4902.js.map
