(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){e.exports=n(21)},18:function(e,t,n){},19:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(5),i=n.n(a),c=(n(18),n(10)),l=n(2),s=n(6),u=n(7),f=n(11),h=n(8),v=n(1),p=n(12),d=(n(19),n(9)),w=function(e){function t(){var e,n;Object(s.a)(this,t);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(n=Object(f.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={field:[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],isGameActive:!1,isWin:!1,isLose:!1},n.handleKeyUp=n.handleKeyUp.bind(Object(v.a)(n)),n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentWillMount",value:function(){document.addEventListener("keyup",this.handleKeyUp)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keyup",this.handleKeyUp)}},{key:"componentDidMount",value:function(){this.state.isGameActive||(this.spawnTiles(2),this.setState({isGameActive:!0}))}},{key:"spawnTiles",value:function(e){for(var t=this,n=this.state.field,o=[],r=[],a=0;a<4;a++)for(var i=0;i<4;i++)0===n[a][i]&&o.push([a,i]);for(var s=0;s<e;s++){var u=Math.floor(Math.random()*o.length);r.push(o.splice(u,1)[0])}this.setState(function(e){for(var n=Object(l.a)(e.field),o=0,a=r;o<a.length;o++){var i=a[o],s=Object(c.a)(i,2),u=s[0],f=s[1];n[u][f]=t.getNewTileValue()}return{field:n}},function(){var e=t.state.field;t.isLose(e)&&(console.warn("You Lose"),t.setState({isLose:!0}))})}},{key:"getNewTileValue",value:function(){return 1===Math.floor(10*Math.random())+1?4:2}},{key:"handleKeyUp",value:function(e){var t=e.key;["ArrowDown","ArrowUp","ArrowLeft","ArrowRight"].includes(t)&&this.handleMove(t)}},{key:"handleMove",value:function(e){var t=this,n=this.state.field,o=[];if("ArrowRight"===e||"ArrowLeft"===e)for(var r=0;r<4;r++){var a=n[r].filter(function(e){return e>0});for(a=this.collapseSameTiles(a,e);a.length<4;)"ArrowRight"===e?a.unshift(0):"ArrowLeft"===e&&a.push(0);o.push(a)}else if("ArrowUp"===e||"ArrowDown"===e){for(var i=[[],[],[],[]],c=0;c<4;c++)for(var l=0;l<4;l++)0!==n[c][l]&&i[l].push(n[c][l]);for(var s=0;s<4;s++){var u=i[s].filter(function(e){return e>0});for(u=this.collapseSameTiles(u,e);u.length<4;)"ArrowDown"===e?u.unshift(0):"ArrowUp"===e&&u.push(0);i[s]=u}o=[[],[],[],[]];for(var f=0;f<4;f++)for(var h=0;h<4;h++)o[f].push(i[h][f])}Object(d.isEqual)(n,o)?console.log("no move"):this.setState({field:o},function(){t.spawnTiles(1)})}},{key:"collapseSameTiles",value:function(e,t){var n=Object(l.a)(e);if("ArrowRight"===t||"ArrowDown"===t)for(var o=n.length-1;o>0;o--)n[o]===n[o-1]&&(n[o]+=n[o],n[o-1]=0),2048===n[o]&&this.setState({isWin:!0});else if("ArrowLeft"===t||"ArrowUp"===t)for(var r=0;r<n.length-1;r++)n[r]===n[r+1]&&(n[r]+=n[r],n[r+1]=0),2048===n[r]&&this.setState({isWin:!0});return n=n.filter(function(e){return e>0})}},{key:"isLose",value:function(e){for(var t=0;t<4;t++)for(var n=0;n<4;n++){if(0===e[t][n])return console.log("ne pysto"),!1;if(e[t][n]===e[t][n+1])return console.log("v stolbe ".concat(t+1,":").concat(n+1," - ").concat(t+1,"-").concat(n+2," (").concat(e[t][n],")(").concat(e[t][n+1],")")),!1;if(3!==t&&e[t][n]===e[t+1][n])return console.log("v stolbe ".concat(t+1,":").concat(n+1," - ").concat(t+2,"-").concat(n+1," (").concat(e[t][n],")(").concat(e[t+1][n],")")),!1}return!0}},{key:"render",value:function(){var e=this.state.field;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"App-field"},e.map(function(e,t){return r.a.createElement("div",{key:"row ".concat(t),className:"App-field-row"},e.map(function(e,n){return r.a.createElement("div",{key:"cell ".concat(t,"_").concat(n),className:"App-field-cell"},e>0&&r.a.createElement("div",{className:"App-field-cell-tile"},e))}))})))}}]),t}(o.Component);i.a.render(r.a.createElement(w,null),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.91f684a5.chunk.js.map