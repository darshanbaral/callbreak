(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,n){e.exports=n(42)},41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(18),r=n(8),l=n(3),o=n(4),c=n(6),i=n(5),s=n(7),u=n(1),p=n(0),h=n.n(p),m=n(19),d=n.n(m),g=n(2);function f(){var e=Object(u.a)(["\n  border: 1px solid black;\n  outline: none;\n  padding: 5px;\n  color: white;\n  border-radius: 5px;\n  background-color: ",";\n  font-size: 1em;\n  width: 120px;\n  height: 50px;\n  margin-right: 20px;\n  margin-left: 20px;\n  &:hover {\n    background: ",";\n    cursor: ",";\n  }\n"]);return f=function(){return e},e}var b=g.a.button(f(),function(e){return e.allowClick?"#166730":"gray"},function(e){return e.allowClick?"green":"gray"},function(e){return e.allowClick?"pointer":"none"}),v=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(c.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).handleClick=function(){n.props.onClick()},n}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return h.a.createElement(b,{onClick:this.handleClick,allowClick:this.props.allowClick},this.props.label)}}]),t}(h.a.Component);function E(){var e=Object(u.a)(["\n  text-align: center;\n  border: none;\n  width: 97%;\n  height: 80%;\n  margin: auto;\n  display: block;\n  font-size: 1em;\n  background-color: ",";\n  &:focus {\n    outline: solid 1px #2962ff;\n  }\n"]);return E=function(){return e},e}var C=g.a.input(E(),function(e){return e.valid?"#286cc440":"#d75d5d"}),y=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(n=Object(c.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(o)))).state={value:"",placeholder:"0",valid:!0},n.handleChange=function(e){var t="call"===n.props.gameState?[1,8]:[0,13],a=Object(r.a)(t,2),l=a[0],o=a[1],c=Number(e.target.value);c<l||c>o||isNaN(c)?n.setState({valid:!1}):n.setState({valid:!0}),n.setState({value:e.target.value}),n.props.onChange(n.props.id,e.target.value)},n.handleBlur=function(){n.setState({placeholder:"0"})},n.handleFocus=function(){n.setState({placeholder:""}),n.setState({value:""})},n}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return h.a.createElement(C,{id:this.props.id,type:"tel",placeholder:this.state.placeholder,value:this.state.value,onChange:this.handleChange,onFocus:this.handleFocus,onBlur:this.handleBlur,valid:this.state.valid})}}]),t}(h.a.Component);function S(){var e=Object(u.a)(["\n  text-align: center;\n  outline: none;\n  border: none;\n  width: calc(100% - 10px);\n  padding: 5px;\n  height: 30px;\n  font-size: 1em;\n  font-weight: 700;\n  color: ",";\n  background-color: ",";\n  &:hover {\n    cursor: ",";\n  }\n"]);return S=function(){return e},e}var O=g.a.input(S(),function(e){return e.editing?"black":"#2962ff"},function(e){return e.editing?"#286cc440":"white"},function(e){return e.editing?"initial":"pointer"}),k=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(c.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={value:n.props.name,editing:!1},n.handleChange=function(e){n.setState({value:e.target.value},function(){n.props.onChange(n.props.id,n.state.value)})},n.handleFocus=function(e){e.target.select(),n.setState({editing:!0})},n.handleBlur=function(e){n.setState({editing:!1})},n}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return h.a.createElement(O,{"data-tip":!0,"data-for":"change-name-message",onChange:this.handleChange,onFocus:this.handleFocus,onBlur:this.handleBlur,value:this.state.value,editing:this.state.editing,title:"Click to edit"})}}]),t}(h.a.Component);function x(){var e=Object(u.a)(["\n  text-align: center;\n  border: 1px solid;\n"]);return x=function(){return e},e}var j=g.a.td(x()),N=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(c.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).onChange=function(e,t){n.props.onChange(e,t)},n}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return h.a.createElement("thead",null,h.a.createElement("tr",null,h.a.createElement(j,{width:"100"},h.a.createElement("strong",null,"Game")),h.a.createElement(j,null,h.a.createElement(k,{id:"p1-name",name:this.props.playerNames[0],onChange:this.onChange})),h.a.createElement(j,null,h.a.createElement(k,{id:"p2-name",name:this.props.playerNames[1],onChange:this.onChange})),h.a.createElement(j,null,h.a.createElement(k,{id:"p3-name",name:this.props.playerNames[2],onChange:this.onChange})),h.a.createElement(j,null,h.a.createElement(k,{id:"p4-name",name:this.props.playerNames[3],onChange:this.onChange}))))}}]),t}(h.a.Component);function w(){var e=Object(u.a)(["\n  text-align: center;\n  padding: 3px;\n  height: 35px;\n  border: solid 1px black;\n"]);return w=function(){return e},e}var R=g.a.td(w()),z=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){for(var e=[0,0,0,0],t=0;t<this.props.processedScores.length;t++)e[0]=Number(e[0])+Number(this.props.processedScores[t][0]),e[1]=Number(e[1])+Number(this.props.processedScores[t][1]),e[2]=Number(e[2])+Number(this.props.processedScores[t][2]),e[3]=Number(e[3])+Number(this.props.processedScores[t][3]);return h.a.createElement("tr",null,h.a.createElement(R,{width:"120"},h.a.createElement("strong",null,"Total")),h.a.createElement(R,null,h.a.createElement("strong",null,e[0])),h.a.createElement(R,null,h.a.createElement("strong",null,e[1])),h.a.createElement(R,null,h.a.createElement("strong",null,e[2])),h.a.createElement(R,null,h.a.createElement("strong",null,e[3])))}}]),t}(h.a.Component);function A(){var e=Object(u.a)(["\n  font-size: 1em;\n  font-weight: 700;\n  padding-left: 2px;\n  padding-right: 2px;\n  color: ",";\n  border-radius: ",";\n"]);return A=function(){return e},e}function B(){var e=Object(u.a)(["\n  margin-right: 0.6em;\n  font-size: 0.9em;\n  text-decoration: line-through;\n  font-style: italic;\n  color: #e6ee9c;\n"]);return B=function(){return e},e}function I(){var e=Object(u.a)(["\n  text-align: center;\n  padding: 3px;\n"]);return I=function(){return e},e}var F=g.a.td(I()),M=g.a.span(B()),D=g.a.span(A(),function(e){return e.negative?"#ff7070":"inherit"},function(e){return e.negative?"2px":"inherit"}),H=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.gameNumber,t=[],n=[],a="#1976d2",r="white",l="none",o=[];return this.props.processedScores[e]?(t=this.props.processedScores[e],o=this.props.processedScores[e].map(function(e){return e<0}),n=this.props.calls[e]):(t=this.props.calls[e],n=["","","",""],a="#bbdefb",r="black",l="italic"),h.a.createElement("tr",{style:{backgroundColor:a,color:r,fontStyle:l}},h.a.createElement(F,null,["i","ii","iii","iv","Final"][this.props.gameNumber]),h.a.createElement(F,null,h.a.createElement(M,null,n[0]),h.a.createElement(D,{negative:o[0]},t[0])),h.a.createElement(F,null,h.a.createElement(M,null,n[1]),h.a.createElement(D,{negative:o[1]},t[1])),h.a.createElement(F,null,h.a.createElement(M,null,n[2]),h.a.createElement(D,{negative:o[2]},t[2])),h.a.createElement(F,null,h.a.createElement(M,null,n[3]),h.a.createElement(D,{negative:o[3]},t[3])))}}]),t}(h.a.Component),P=n(13),T=n.n(P),V=n(22);n(41);function J(){var e=Object(u.a)(["\n  color: red;\n  display: ",";\n"]);return J=function(){return e},e}function q(){var e=Object(u.a)(["\n  min-width: 50px;\n  height: 30px;\n  border: 1px solid;\n"]);return q=function(){return e},e}n.d(t,"default",function(){return K});var G=g.a.td(q()),W=g.a.div(J(),function(e){return e.error?"block":"none"}),K=function(e){function t(){var e,n;Object(l.a)(this,t);for(var o=arguments.length,s=new Array(o),u=0;u<o;u++)s[u]=arguments[u];return(n=Object(c.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(s)))).state={round:0,ongoingRound:1,roundComplete:!1,gameNumber:0,gameState:"call",label:"Record Calls",playerNames:["p1","p2","p3","p4"],p1:0,p2:0,p3:0,p4:0,allowClick:!0,error:!1,errorMessages:[]},n.rounds={p1:[],p2:[],p3:[],p4:[]},n.playerCalls=[],n.playerScores=[],n.processedScores=[],n.newRound=function(){n.setState({ongoingRound:n.state.roundComplete?n.state.ongoingRound+1:n.state.ongoingRound,round:n.state.round+1,roundComplete:!1,gameNumber:0,gameState:"call",label:"Record Calls",p1:0,p2:0,p3:0,p4:0,allowClick:!0,errorMessages:[],error:!1}),n.playerCalls=[],n.playerScores=[],n.processedScores=[]},n.isValid=function(e){var t="call"===n.state.gameState?[1,8,32]:[0,13,13],a=Object(r.a)(t,3),l=a[0],o=a[1],c=a[2],i="call"===n.state.gameState?"calls":"hands",s=["each input for "+i+" must be an integer.","each input for "+i+" must be greater than than "+l+".","each input for "+i+" must be smaller than "+o+".","call"===n.state.gameState?"total of calls must be smaller than "+c+".":"total of hands must be equal to 13."],u=[],p=[];return u.push(e.some(function(e){return!Number.isInteger(Number(e))})),u.push(e.some(function(e){return Number(e)<l})),u.push(e.some(function(e){return Number(e)>o})),"call"===n.state.gameState?u.push(e.reduce(function(e,t){return Number(e)+Number(t)},0)>c):u.push(e.reduce(function(e,t){return Number(e)+Number(t)},0)!==c),u.forEach(function(e,t){e&&p.push(s[t])}),n.setState({errorMessages:p}),!u.some(function(e){return e})},n.processScores=function(e,t){for(var n=[],a=0;a<e.length;a++)Number(e[a])>=Number(t[a])?n[a]=t[a]+"."+(Number(e[a])-Number(t[a])):n[a]=-1*Number(t[a]);return n},n.gameCount=5,n.order=["p1","p2","p3","p4"],n.handleScoreInput=function(e){if(n.isValid(e)){n.setState({gameNumber:n.state.gameNumber+1,error:!1});var t=n.processScores(e,n.playerCalls[n.playerCalls.length-1]);if(n.playerScores.push(e),n.processedScores.push(t),n.state.gameNumber<n.gameCount-1)n.setState({label:"Record Calls"});else n.setState({label:"Round Over!!!",roundComplete:!0,allowClick:!1}),n.processedScores.reduce(function(e,t){return t.map(function(t,n){return Number(e[n]||0)+Number(t)})},[]).map(function(e,t){return n.rounds[n.order[t]].push(e)});n.setState({gameState:"call"})}else n.setState({error:!0})},n.onPlayerNameChange=function(e,t){var a=["p1-name","p2-name","p3-name","p4-name"].findIndex(function(t){return t===e});if(""===t|void 0===t)console.log(t),console.log("Player name for player ".concat(a+1," is empty"));else{var r=n.state.playerNames;r[a]=t,n.setState({playerNames:r})}},n.handleCallInput=function(e){n.isValid(e)?(n.setState({gameState:"play",label:"Record Hands",error:!1}),n.playerCalls.push(e)):n.setState({error:!0})},n.handleClick=function(){if("Round Over!!!"!==n.state.label){var e=n.state,t=[e.p1,e.p2,e.p3,e.p4];"call"===n.state.gameState?n.handleCallInput(t):n.handleScoreInput(t)}},n.handleChange=function(e,t){n.setState(Object(a.a)({},e,t))},n}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){for(var e=[],t=0;t<this.playerCalls.length;t++)e.push(h.a.createElement(H,{key:T.a.v4(),gameNumber:t,calls:this.playerCalls,processedScores:this.processedScores}));for(var n=[],a=0;a<this.state.errorMessages.length;a++)n.push(h.a.createElement("li",{key:T.a.v4()},this.state.errorMessages[a]));return h.a.createElement("div",{className:"App",style:{maxWidth:"900px",marginTop:"5px"}},h.a.createElement(V.Helmet,null,h.a.createElement("meta",{charSet:"utf-8"}),h.a.createElement("title",null,"Callbreak"),h.a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:"./images/apple-touch-icon.png"}),h.a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"./images/favicon-32x32.png"}),h.a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"./images/favicon-16x16.png"}),h.a.createElement("link",{rel:"manifest",href:"./images/site.webmanifest"})),h.a.createElement("header",{style:{display:"flex",alignItems:"flex-end",height:"60px",textAlign:"left",width:"100%"}},h.a.createElement("h1",null,"Call Break"," ",h.a.createElement("span",{style:{textDecoration:"underline",textDecorationColor:"#b71c1c"}},"\u2660 "))),h.a.createElement("div",{style:{minHeight:"calc(100vh - 150px)"}},h.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},h.a.createElement(v,{label:this.state.label,allowClick:this.state.allowClick,onClick:this.handleClick}),h.a.createElement(v,{label:"New Round",allowClick:!0,onClick:this.newRound})),h.a.createElement("hr",null),h.a.createElement("table",null,h.a.createElement(N,{playerNames:this.state.playerNames,onChange:this.onPlayerNameChange}),h.a.createElement("tbody",null,h.a.createElement("tr",{key:"Round"+this.state.round},h.a.createElement("td",{style:{textAlign:"center",border:"solid 1px black"}},"Ongoing"," ",h.a.createElement("span",{style:{fontSize:"0.7em"}},"(",h.a.createElement("i",null,"Round ",this.state.ongoingRound),")")),h.a.createElement(G,null,h.a.createElement(y,{id:"p1",gameState:this.state.gameState,onChange:this.handleChange})),h.a.createElement(G,null,h.a.createElement(y,{id:"p2",gameState:this.state.gameState,onChange:this.handleChange})),h.a.createElement(G,null,h.a.createElement(y,{id:"p3",gameState:this.state.gameState,onChange:this.handleChange})),h.a.createElement(G,null,h.a.createElement(y,{id:"p4",gameState:this.state.gameState,onChange:this.handleChange}))),e,h.a.createElement(z,{processedScores:this.processedScores}))),h.a.createElement(W,{error:this.state.error},h.a.createElement("h3",null,"The input is not valid."),h.a.createElement("ul",null,n))),h.a.createElement("footer",{style:{height:"60px",textAlign:"center"}},"Made by ",h.a.createElement("a",{href:"https://www.darshanbaral.com"},"Darshan")))}}]),t}(h.a.Component),L=document.getElementById("root");d.a.render(h.a.createElement(K,null),L)}},[[25,1,2]]]);
//# sourceMappingURL=main.481a204f.chunk.js.map