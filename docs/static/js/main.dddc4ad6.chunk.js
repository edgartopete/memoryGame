(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,a,t){},15:function(e,a,t){},16:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(2),s=t.n(c),o=(t(14),t(3)),l=t(4),i=t(6),m=t(5),d=t(7),u=(t(15),[]),h=function(e){return e.sort(function(){return Math.random()-.5})},v=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={cards:["1","2","3","4","5","6","7","8","9","10","11","12"],score:0,topScore:0,message:"Click a Character but don't do it twice because you will lose"},t.handleOnClick=function(e){var a=h(t.state.cards),n=e.target.id;if(u.includes(n))return u=[],t.setState({cards:h(a),message:"You lose!",score:0});u.push(n);var r=t.state,c=r.topScore,s=r.score+1,o=s>c?s:c;return t.setState({cards:h(a),message:"You Guessed!",score:s,topScore:o})},t}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this,a=this.state.cards.map(function(a,t){return r.a.createElement("div",{className:"col s3",key:a,onClick:e.handleOnClick},r.a.createElement("div",{className:"Card z-depth-3 section"},r.a.createElement("div",{className:"card-image"},r.a.createElement("img",{src:"./img/"+a+".jpeg",alt:"",id:a}))))});return r.a.createElement("div",null,r.a.createElement("div",{className:"navbar-fixed"},r.a.createElement("nav",null,r.a.createElement("div",{className:"nav-wrapper blue-grey darken-4"},r.a.createElement("a",{href:"#!",className:"brand-logo"},"Memory Game"),r.a.createElement("ul",{className:"right hide-on-med-and-down"},r.a.createElement("li",null,r.a.createElement("span",{className:"badge white"},this.state.message)),r.a.createElement("li",null,r.a.createElement("span",{className:"badge white"},"Score: ",this.state.score," | Top Score: ",this.state.topScore)))))),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},a)))}}]),a}(n.Component);var p=function(){return r.a.createElement("div",null,r.a.createElement(v,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,a,t){e.exports=t(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.dddc4ad6.chunk.js.map