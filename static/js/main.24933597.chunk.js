(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){e.exports=a(21)},18:function(e,t,a){},19:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(5),l=a.n(o),s=(a(18),a(10)),c=a(2),i=a(6),u=a(7),m=a(11),f=a(8),p=a(1),v=a(12),S=(a(19),a(9)),d=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={field:a.getField(),currentScore:a.getCurrentScore(),bestScore:a.getBestScore(),isGameActive:a.isGameActive(),isWin:a.getWinStatusFromStorage(),isLose:a.getLoseStatusFromStorage()},a.handleKeyUp=a.handleKeyUp.bind(Object(p.a)(a)),a}return Object(v.a)(t,e),Object(u.a)(t,[{key:"componentWillMount",value:function(){document.addEventListener("keyup",this.handleKeyUp)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keyup",this.handleKeyUp)}},{key:"componentDidMount",value:function(){this.state.isGameActive||(this.spawnTiles(2),this.setState({isGameActive:!0}))}},{key:"spawnTiles",value:function(e){for(var t=this,a=this.state.field,n=[],r=[],o=0;o<4;o++)for(var l=0;l<4;l++)0===a[o][l]&&n.push([o,l]);for(var i=0;i<e;i++){var u=Math.floor(Math.random()*n.length);r.push(n.splice(u,1)[0])}this.setState(function(e){for(var a=Object(c.a)(e.field),n=0,o=r;n<o.length;n++){var l=o[n],i=Object(s.a)(l,2),u=i[0],m=i[1];a[u][m]=t.getNewTileValue()}return{field:a}},function(){var e=t.state.field;t.isLose(e)&&(console.warn("You Lose"),localStorage.setItem("isLose","true"),t.setState({isLose:!0,isActive:!1})),localStorage.setItem("field",JSON.stringify(e)),localStorage.setItem("isActive","true")})}},{key:"getNewTileValue",value:function(){return 1===Math.floor(10*Math.random())+1?4:2}},{key:"handleKeyUp",value:function(e){var t=e.key;["ArrowDown","ArrowUp","ArrowLeft","ArrowRight"].includes(t)&&this.handleMove(t)}},{key:"handleMove",value:function(e){var t=this,a=this.state.field,n=[];if("ArrowRight"===e||"ArrowLeft"===e)for(var r=0;r<4;r++){var o=a[r].filter(function(e){return e>0});for(o=this.collapseSameTiles(o,e);o.length<4;)"ArrowRight"===e?o.unshift(0):"ArrowLeft"===e&&o.push(0);n.push(o)}else if("ArrowUp"===e||"ArrowDown"===e){for(var l=[[],[],[],[]],s=0;s<4;s++)for(var c=0;c<4;c++)0!==a[s][c]&&l[c].push(a[s][c]);for(var i=0;i<4;i++){var u=l[i].filter(function(e){return e>0});for(u=this.collapseSameTiles(u,e);u.length<4;)"ArrowDown"===e?u.unshift(0):"ArrowUp"===e&&u.push(0);l[i]=u}n=[[],[],[],[]];for(var m=0;m<4;m++)for(var f=0;f<4;f++)n[m].push(l[f][m])}Object(S.isEqual)(a,n)?console.log("no move"):this.setState({field:n},function(){t.spawnTiles(1)})}},{key:"collapseSameTiles",value:function(e,t){var a=this,n=Object(c.a)(e);if("ArrowRight"===t||"ArrowDown"===t)for(var r=function(e){n[e]===n[e-1]&&(n[e]+=n[e],n[e-1]=0,a.setState(function(t){var a,r=t.currentScore+n[e];return localStorage.setItem("currentScore",r),r>t.bestScore&&localStorage.setItem("bestScore",r),a="false"===t.isWin&&2048===n[e]?"true":"keep"===t.isWin?"keep":t.isWin,localStorage.setItem("isWin",a),{currentScore:r,bestScore:r>t.bestScore?r:t.bestScore,isWin:a}}))},o=n.length-1;o>0;o--)r(o);else if("ArrowLeft"===t||"ArrowUp"===t){var l=function(e){n[e]===n[e+1]&&(n[e]+=n[e],n[e+1]=0,a.setState(function(t){var a,r=t.currentScore+n[e];return localStorage.setItem("currentScore",r),r>t.bestScore&&localStorage.setItem("bestScore",r),a="false"===t.isWin&&2048===n[e]?"true":"keep"===t.isWin?"keep":t.isWin,localStorage.setItem("isWin",a),{currentScore:r,bestScore:r>t.bestScore?r:t.bestScore,isWin:a}}))};for(o=0;o<n.length-1;o++)l(o)}return n=n.filter(function(e){return e>0})}},{key:"isLose",value:function(e){for(var t=0;t<4;t++)for(var a=0;a<4;a++){if(0===e[t][a])return console.log("ne pysto"),!1;if(e[t][a]===e[t][a+1])return console.log("v stolbe ".concat(t+1,":").concat(a+1," - ").concat(t+1,"-").concat(a+2," (").concat(e[t][a],")(").concat(e[t][a+1],")")),!1;if(3!==t&&e[t][a]===e[t+1][a])return console.log("v stolbe ".concat(t+1,":").concat(a+1," - ").concat(t+2,"-").concat(a+1," (").concat(e[t][a],")(").concat(e[t+1][a],")")),!1}return!0}},{key:"newGameHandler",value:function(){var e=this;localStorage.setItem("currentScore","0"),localStorage.setItem("isWin","false"),localStorage.setItem("isLose","false"),this.setState({field:[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],currentScore:0,isWin:!1,isLose:!1},function(){e.spawnTiles(2)})}},{key:"keepGoingHandler",value:function(){localStorage.setItem("isWin","keep"),this.setState({isWin:"keep"})}},{key:"getCurrentScore",value:function(){return+localStorage.getItem("currentScore")||0}},{key:"getBestScore",value:function(){return localStorage.getItem("bestScore")||0}},{key:"getField",value:function(){var e=localStorage.getItem("field");return e=e?JSON.parse(e):[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]}},{key:"isGameActive",value:function(){var e=localStorage.getItem("isActive");return e=!!e&&JSON.parse(e)}},{key:"getLoseStatusFromStorage",value:function(){var e=localStorage.getItem("isLose");return e=!!e&&JSON.parse(e)}},{key:"getWinStatusFromStorage",value:function(){return localStorage.getItem("isWin")||"false"}},{key:"render",value:function(){var e=this,t=this.state,a=t.field,n=t.currentScore,o=t.bestScore,l=t.isLose,s=t.isWin;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"App-nav"},r.a.createElement("div",{className:"App-nav-status-bar"},r.a.createElement("span",{className:"App-nav-status-bar-2048-label"},"2048"),r.a.createElement("div",{className:"App-nav-status-bar-score-table"},r.a.createElement("div",{className:"App-nav-status-bar-score-table-cur"},r.a.createElement("p",null,"SCORE"),r.a.createElement("span",null,n)),r.a.createElement("div",{className:"App-nav-status-bar-score-table-best"},r.a.createElement("p",null,"BEST"),r.a.createElement("span",null,o)))),r.a.createElement("p",{className:"App-nav-restart-bar"},r.a.createElement("span",{className:"App-nav-restart-bar-join-label"},"Join the numbers and get to the ",r.a.createElement("b",null,"2048 tile!")),r.a.createElement("button",{className:"App-nav-restart-bar-join-btn",onClick:function(){return e.newGameHandler()}},"New Game"))),r.a.createElement("div",{className:"App-field"},l&&r.a.createElement("div",{className:"App-field-lose-modal"},r.a.createElement("div",{className:"App-field-lose-modal-message"},r.a.createElement("p",null,"Game over!"),r.a.createElement("button",{onClick:function(){return e.newGameHandler()}},"Try again"))),"true"===s&&r.a.createElement("div",{className:"App-field-win-modal"},r.a.createElement("div",{className:"App-field-win-modal-message"},r.a.createElement("p",null,"You win!"),r.a.createElement("button",{onClick:function(){return e.keepGoingHandler()}},"Keep going"),r.a.createElement("button",{onClick:function(){return e.newGameHandler()}},"Try again"))),a.map(function(e,t){return r.a.createElement("div",{key:"row ".concat(t),className:"App-field-row"},e.map(function(e,a){return r.a.createElement("div",{key:"cell ".concat(t,"_").concat(a),className:"App-field-cell"},e>0&&r.a.createElement("div",{className:"App-field-cell-tile","data-tile-value":e},e))}))})))}}]),t}(n.Component);l.a.render(r.a.createElement(d,null),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.24933597.chunk.js.map