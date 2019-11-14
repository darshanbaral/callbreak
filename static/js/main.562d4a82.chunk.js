(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,a){e.exports=a(42)},41:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(18),r=a(8),l=a(3),c=a(4),o=a(6),s=a(5),i=a(7),u=a(1),h=a(0),m=a.n(h),p=a(19),d=a.n(p),b=a(2);function g(){var e=Object(u.a)(["\n  border: 1px solid black;\n  outline: none;\n  padding: 5px;\n  color: white;\n  border-radius: 5px;\n  background-color: ",";\n  font-size: 1em;\n  width: 120px;\n  height: 50px;\n  margin-right: 20px;\n  margin-left: 20px;\n  &:hover {\n    background: ",";\n    cursor: ",";\n  }\n"]);return g=function(){return e},e}var f=b.a.button(g(),function(e){return e.allowClick?"#166730":"gray"},function(e){return e.allowClick?"green":"gray"},function(e){return e.allowClick?"pointer":"none"}),v=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).handleClick=function(){a.props.onClick()},a}return Object(i.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return m.a.createElement(f,{onClick:this.handleClick,allowClick:this.props.allowClick},this.props.label)}}]),t}(m.a.Component);function E(){var e=Object(u.a)(["\n  text-align: center;\n  border: none;\n  width: 97%;\n  height: 80%;\n  margin: auto;\n  display: block;\n  font-size: 1em;\n  background-color: ",";\n  &:focus {\n    outline: solid 1px;\n  }\n"]);return E=function(){return e},e}var C=b.a.input(E(),function(e){return e.valid?"#286cc440":"#d75d5d"}),S=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(a=Object(o.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(c)))).state={value:"",placeholder:"0",valid:!0},a.handleChange=function(e){var t="call"===a.props.gameState?[1,8]:[0,13],n=Object(r.a)(t,2),l=n[0],c=n[1],o=Number(e.target.value);o<l||o>c||isNaN(o)?a.setState({valid:!1}):a.setState({valid:!0}),a.setState({value:e.target.value}),a.props.onChange(a.props.id,e.target.value)},a.handleBlur=function(){a.setState({placeholder:"0"})},a.handleFocus=function(){a.setState({placeholder:""})},a}return Object(i.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return m.a.createElement(C,{id:this.props.id,type:"tel",placeholder:this.state.placeholder,value:this.state.value,onChange:this.handleChange,onFocus:this.handleFocus,onBlur:this.handleBlur,valid:this.state.valid})}}]),t}(m.a.Component);function O(){var e=Object(u.a)(["\n  text-align: center;\n  outline: none;\n  border: none;\n  width: calc(100% - 10px);\n  padding: 5px;\n  height: 30px;\n  font-size: 1em;\n  font-weight: 700;\n  color: ",";\n  background-color: ",";\n  &:hover {\n    cursor: ",";\n  }\n"]);return O=function(){return e},e}var y=b.a.input(O(),function(e){return e.editing?"white":"rgb(7, 104, 250)"},function(e){return e.editing?"#286cc440":"white"},function(e){return e.editing?"initial":"pointer"}),j=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={value:a.props.name,editing:!1},a.handleChange=function(e){a.setState({value:e.target.value})},a.handleFocus=function(e){e.target.select(),a.setState({editing:!0})},a.handleBlur=function(e){a.setState({editing:!1})},a}return Object(i.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return m.a.createElement(y,{"data-tip":!0,"data-for":"change-name-message",onChange:this.handleChange,onFocus:this.handleFocus,onBlur:this.handleBlur,value:this.state.value,editing:this.state.editing,title:"Click to edit"})}}]),t}(m.a.Component);function k(){var e=Object(u.a)(["\n  text-align: center;\n  border: 1px solid;\n"]);return k=function(){return e},e}var w=b.a.td(k()),N=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return m.a.createElement("thead",null,m.a.createElement("tr",null,m.a.createElement(w,{width:"100"},m.a.createElement("strong",null,"Game")),m.a.createElement(w,null,m.a.createElement(j,{name:"p1"})),m.a.createElement(w,null,m.a.createElement(j,{name:"p2"})),m.a.createElement(w,null,m.a.createElement(j,{name:"p3"})),m.a.createElement(w,null,m.a.createElement(j,{name:"p4"}))))}}]),t}(m.a.Component);function x(){var e=Object(u.a)(["\n  text-align: center;\n  padding: 3px;\n  height: 35px;\n  border: solid 1px black;\n"]);return x=function(){return e},e}var A=b.a.td(x()),B=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){for(var e=[0,0,0,0],t=0;t<this.props.processedScores.length;t++)e[0]=Number(e[0])+Number(this.props.processedScores[t][0]),e[1]=Number(e[1])+Number(this.props.processedScores[t][1]),e[2]=Number(e[2])+Number(this.props.processedScores[t][2]),e[3]=Number(e[3])+Number(this.props.processedScores[t][3]);return m.a.createElement("tr",null,m.a.createElement(A,{width:"120"},m.a.createElement("strong",null,"Total")),m.a.createElement(A,null,m.a.createElement("strong",null,e[0])),m.a.createElement(A,null,m.a.createElement("strong",null,e[1])),m.a.createElement(A,null,m.a.createElement("strong",null,e[2])),m.a.createElement(A,null,m.a.createElement("strong",null,e[3])))}}]),t}(m.a.Component);function F(){var e=Object(u.a)(["\n  text-align: center;\n  padding: 3px;\n"]);return F=function(){return e},e}var G=b.a.td(F()),I=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.gameNumber,t=[],a="#166730",n="white",r="none";return this.props.processedScores[e]?t=this.props.processedScores[e]:(t=this.props.calls[e],a="rgb(95, 205, 107)",n="black",r="italic"),m.a.createElement("tr",{style:{backgroundColor:a,color:n,fontStyle:r}},m.a.createElement(G,null,["i","ii","iii","iv","Final"][this.props.gameNumber]),m.a.createElement(G,null,t[0]),m.a.createElement(G,null,t[1]),m.a.createElement(G,null,t[2]),m.a.createElement(G,null,t[3]))}}]),t}(m.a.Component),R=a(13),z=a.n(R),H=a(22);a(41);function V(){var e=Object(u.a)(["\n  color: red;\n  display: ",";\n"]);return V=function(){return e},e}function J(){var e=Object(u.a)(["\n  min-width: 50px;\n  height: 30px;\n  border: 1px solid rgb(7, 104, 250);\n"]);return J=function(){return e},e}a.d(t,"default",function(){return D});var T=b.a.td(J()),q=b.a.div(V(),function(e){return e.error?"block":"none"}),D=function(e){function t(){var e,a;Object(l.a)(this,t);for(var c=arguments.length,i=new Array(c),u=0;u<c;u++)i[u]=arguments[u];return(a=Object(o.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(i)))).state={gameNumber:0,gameState:"call",label:"Record Calls",p1:0,p2:0,p3:0,p4:0,allowClick:!0,error:!1,messages:[]},a.playerCalls=[],a.playerScores=[],a.processedScores=[],a.newGame=function(){a.setState({gameNumber:0,gameState:"call",label:"Record Calls",allowClick:!0,messages:[],error:!1}),a.playerCalls=[],a.playerScores=[],a.processedScores=[]},a.isValid=function(e){var t="call"===a.state.gameState?[1,8,32]:[0,13,13],n=Object(r.a)(t,3),l=n[0],c=n[1],o=n[2],s="call"===a.state.gameState?"calls":"hands",i=["each input for "+s+" must be an integer.","each input for "+s+" must be greater than than "+l+".","each input for "+s+" must be smaller than "+c+".","call"===a.state.gameState?"total of calls must be smaller than "+o+".":"total of hands must be equal to 13."],u=[],h=[];return u.push(e.some(function(e){return!Number.isInteger(Number(e))})),u.push(e.some(function(e){return Number(e)<l})),u.push(e.some(function(e){return Number(e)>c})),"call"===a.state.gameState?u.push(e.reduce(function(e,t){return Number(e)+Number(t)},0)>o):u.push(e.reduce(function(e,t){return Number(e)+Number(t)},0)!==o),u.forEach(function(e,t){e&&h.push(i[t])}),a.setState({messages:h}),!u.some(function(e){return e})},a.processScores=function(e,t){for(var a=[],n=0;n<e.length;n++)Number(e[n])>=Number(t[n])?a[n]=t[n]+"."+(Number(e[n])-Number(t[n])):a[n]=-1*Number(t[n])+".0";return a},a.gameCount=5,a.handleScoreInput=function(e){if(a.isValid(e)){a.setState({gameNumber:a.state.gameNumber+1,error:!1});var t=a.processScores(e,a.playerCalls[a.playerCalls.length-1]);a.playerScores.push(e),a.processedScores.push(t),a.state.gameNumber<a.gameCount-1?a.setState({label:"Record Calls"}):a.setState({label:"Game Over!!!",allowClick:!1}),a.setState({gameState:"call"})}else a.setState({error:!0})},a.handleCallInput=function(e){a.isValid(e)?(a.setState({gameState:"play",label:"Record Hands",error:!1}),a.playerCalls.push(e)):a.setState({error:!0})},a.handleClick=function(){if("Game Over!!!"!==a.state.label){var e=a.state,t=[e.p1,e.p2,e.p3,e.p4];"call"===a.state.gameState?a.handleCallInput(t):a.handleScoreInput(t)}},a.handleChange=function(e,t){a.setState(Object(n.a)({},e,t))},a}return Object(i.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){for(var e=[],t=0;t<this.playerCalls.length;t++)e.push(m.a.createElement(I,{key:z.a.v4(),gameNumber:t,calls:this.playerCalls,processedScores:this.processedScores}));for(var a=[],n=0;n<this.state.messages.length;n++)a.push(m.a.createElement("li",{key:z.a.v4()},this.state.messages[n]));return m.a.createElement("div",{className:"App"},m.a.createElement(H.Helmet,null,m.a.createElement("meta",{charSet:"utf-8"}),m.a.createElement("title",null,"Callbreak")),m.a.createElement("header",{style:{height:"60px",textAlign:"left",width:"100%"}},m.a.createElement("h1",null,"Callbreak")),m.a.createElement("div",{style:{minHeight:"calc(100vh - 150px)"}},m.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},m.a.createElement(v,{label:this.state.label,allowClick:this.state.allowClick,onClick:this.handleClick}),m.a.createElement(v,{label:"New Game",allowClick:!0,onClick:this.newGame})),m.a.createElement("hr",null),m.a.createElement("table",null,m.a.createElement(N,null),m.a.createElement("tbody",null,m.a.createElement("tr",null,m.a.createElement("td",{style:{textAlign:"center",border:"solid 1px black"}},"Ongoing"),m.a.createElement(T,null,m.a.createElement(S,{id:"p1",gameState:this.state.gameState,onChange:this.handleChange})),m.a.createElement(T,null,m.a.createElement(S,{id:"p2",gameState:this.state.gameState,onChange:this.handleChange})),m.a.createElement(T,null,m.a.createElement(S,{id:"p3",gameState:this.state.gameState,onChange:this.handleChange})),m.a.createElement(T,null,m.a.createElement(S,{id:"p4",gameState:this.state.gameState,onChange:this.handleChange}))),e,m.a.createElement(B,{processedScores:this.processedScores}))),m.a.createElement(q,{error:this.state.error},m.a.createElement("h3",null,"The input is not valid."),m.a.createElement("ul",null,a))),m.a.createElement("footer",{style:{height:"60px",textAlign:"center"}},"Made by ",m.a.createElement("a",{href:"https://www.darshanbaral.com"},"Darshan")))}}]),t}(m.a.Component),M=document.getElementById("root");d.a.render(m.a.createElement(D,null),M)}},[[25,1,2]]]);
//# sourceMappingURL=main.562d4a82.chunk.js.map