(this.webpackJsonpmaze=this.webpackJsonpmaze||[]).push([[0],{23:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),a=n(8),o=n.n(a),s=(n(23),n(3)),c=n(4),u=n(6),l=n(5),h=n(1),d=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(h.jsx)("header",{children:"\u8ff7\u8def\u30b2\u30fc\u30e0"})}}]),n}(i.a.Component),f=n(13),p=n.n(f),v={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}};p.a.setAppElement("#root");var j=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{className:"menu",children:[Object(h.jsx)("button",{onClick:function(){return e.props.openModalWindow()},children:"\u30e1\u30cb\u30e5\u30fc"}),Object(h.jsxs)(p.a,{isOpen:this.props.isModalOpen,onRequestClose:function(){return e.props.closeModalWindow()},style:v,contentLabel:"EXAMPLE",overlayClassName:"overlay",children:[Object(h.jsx)("h3",{children:"\u8ff7\u8def\u30aa\u30d7\u30b7\u30e7\u30f3"}),Object(h.jsx)("p",{children:"\u3008 \u8ff7\u8def\u30b5\u30a4\u30ba\u30fb\u30e2\u30fc\u30c9\u3092\u6d17\u6fef\u3057\u3066\u304f\u3060\u3055\u3044 \u3009"}),Object(h.jsxs)("ul",{className:"list",children:[Object(h.jsxs)("li",{children:["\u8ff7\u8def\u30b5\u30a4\u30ba:"," ",Object(h.jsxs)("select",{className:"selectSize",onChange:function(t){return e.props.handleSizeChange(t.target.value)},children:[Object(h.jsxs)("option",{value:"",children:[this.props.size," \xd7 ",this.props.size]}),Object(h.jsx)("option",{value:"10",children:"10 \xd7 10"}),Object(h.jsx)("option",{value:"20",children:"20 \xd7 20"}),Object(h.jsx)("option",{value:"30",children:"30 \xd7 30"}),Object(h.jsx)("option",{value:"40",children:"40 \xd7 40"}),Object(h.jsx)("option",{value:"50",children:"50 \xd7 50"})]})]}),Object(h.jsxs)("li",{children:["\u30e2\u30fc\u30c9\u9078\u629e:"," ",Object(h.jsxs)("select",{className:"selectMode",onChange:function(t){return e.props.handleModeChange(t.target.value)},children:[Object(h.jsxs)("option",{value:"",children:[1===this.props.mode?"\u5230\u9054":"\u6700\u9577","\u30e2\u30fc\u30c9"]}),Object(h.jsx)("option",{value:"1",children:"\u5230\u9054\u30e2\u30fc\u30c9"}),Object(h.jsx)("option",{value:"2",children:"\u6700\u9577\u30e2\u30fc\u30c9"})]})]})]}),Object(h.jsxs)("h4",{children:["\u73fe\u5728\u306e\u8ff7\u8def\u30b5\u30a4\u30ba\u306f",this.props.size," \xd7 ",this.props.size]}),Object(h.jsxs)("h4",{children:[1===this.props.mode?"\u5230\u9054":"\u6700\u9577"," \u30e2\u30fc\u30c9\u3067\u3059"]}),Object(h.jsx)("br",{}),"stop"!==e.props.timer?Object(h.jsxs)("div",{children:[Object(h.jsx)("button",{onClick:function(){return e.props.handleSetMaze()},children:"\u751f\u6210\uff06\u30b9\u30bf\u30fc\u30c8"}),Object(h.jsx)("button",{onClick:function(){return e.props.handleShowAnswer()},children:"\u89e3\u7b54"}),Object(h.jsx)("button",{onClick:function(){return e.props.closeModalWindow()},children:"\u9589\u3058\u308b"})]}):Object(h.jsx)("button",{onClick:function(){return e.props.handleSetMaze()},children:"\u751f\u6210\uff06\u30b9\u30bf\u30fc\u30c8"})]})]})}}]),n}(i.a.Component),b=n(2),m=[[0,-1],[1,0],[0,1],[-1,0]],g=function(){function e(t){Object(s.a)(this,e),this.xSize=t,this.ySize=t}return Object(c.a)(e,[{key:"createMaze",value:function(){for(var e=new Array(this.xSize),t=0;t<this.xSize;t++){e[t]=new Array(this.ySize);for(var n=0;n<this.ySize;n++)e[t][n]=!1}return e[this.xSize-2][1]=!0,e}},{key:"judgeEdge",value:function(e,t){for(var n=[0,this.ySize-1,this.xSize-1,0],r=0;r<4;r++)if(r%2===0&&e===n[r]||r%2===1&&t===n[r])return!1;return!0}},{key:"judgeDirections",value:function(e,t,n,r){var i=e+m[n][0],a=t+m[n][1];return!(!1!==r[i][a]||!this.judgeEdge(i,a))}},{key:"getMovableDirections",value:function(e,t,n){for(var r=[],i=0;i<4;i++){for(var a=0,o=0;o<4;o++){var s=(o+2)%4;if(this.judgeDirections(e,t,i,n)){var c=e+m[i][0]+m[s][0],u=t+m[i][1]+m[s][1];n[c][u]||a++}}3===a&&r.push(i)}return r}},{key:"isDigable",value:function(e,t,n){return!(!n[e][t]||0===this.getMovableDirections(e,t,n).length)}},{key:"hasDigableRoads",value:function(e){for(var t=1;t<this.xSize-1;t++)for(var n=1;n<this.ySize-1;n++)if(this.isDigable(t,n,e))return!0;return!1}},{key:"digRoad",value:function(e,t,n,r){var i=[];return i[0]=e+m[n][0],i[1]=t+m[n][1],r[i[0]][i[1]]=!0,i}},{key:"digMaze",value:function(e){for(var t=this.xSize-2,n=1;this.hasDigableRoads(e);){var r=this.getMovableDirections(t,n,e);if(r.length>0){var i=Math.floor(Math.random()*r.length),a=this.digRoad(t,n,r[i],e);a.length>0&&(t=a[0],n=a[1])}else if(0===r.length){var o=this.getRestartPoint(e);0!==o&&(t=o[0],n=o[1])}}return e}},{key:"getRestartPoint",value:function(e){for(var t=[],n=1;n<this.xSize-1;n++)for(var r=1;r<this.ySize-1;r++)if(e[n][r]&&this.getMovableDirections(n,r,e).length>0){var i=[n,r];t.push(i);break}return t.length>0?t[Math.floor(Math.random()*t.length)]:0}},{key:"digGoal",value:function(e){for(var t=[1,this.ySize-2],n=this.createMaze(),r=this.digMaze(n);!n[t[0]][t[1]];)n=this.createMaze(),r=this.digMaze(n);return r[this.xSize-1][1]=!0,1===Number(e)&&(r[0][this.ySize-2]=!0),r}}]),e}(),O=[[0,-1],[1,0],[0,1],[-1,0]],x=function(){function e(t){Object(s.a)(this,e),this.mazeSize=t.length,this.mazeData=t}return Object(c.a)(e,[{key:"getAvailableRoads",value:function(e,t){for(var n=0;n<4;n++){var r=[t[0]+O[n][0],t[1]+O[n][1]];if(e[r[0]][r[1]])return r}return!1}},{key:"hasRoads",value:function(e){for(var t=0;t<this.mazeSize;t++)for(var n=0;n<this.mazeSize;n++)if(e[t][n])return!0;return!1}},{key:"getBranchPoint",value:function(e,t){if(!1===t)return!1;for(var n=0,r=0;r<4;r++){var i=[t[0]+O[r][0],t[1]+O[r][1]];e[i[0]][i[1]]&&n++}return n>1&&t}},{key:"getMeetingTermsRoute",value:function(e,t){for(var n=e[0],r=1;r<e.length;r++)for(var i=0;i<e[r].length;i++)e[r][i]===t&&(n=e[r]);return n}},{key:"getRouteToBranch",value:function(e,t){if(0===t.length)return[e];for(var n=this.getMeetingTermsRoute(t,e),r=n.length-1;r>=0;r--)if(n[r]===e)return n.slice(0,r+1);return[e]}},{key:"getStartPoint",value:function(e,t){for(var n=t.length-1;n>=0;n--)if(!1!==this.getAvailableRoads(e,t[n]))return t[n]}},{key:"getRoutes",value:function(e,t,n,r){for(var i=this.getRouteToBranch(t,n);this.hasRoads(e);){var a=this.getAvailableRoads(e,t),o=this.getBranchPoint(e,t);if(!1!==o&&r.push(o),e[t[0]][t[1]]=!1,!1===a)return 0!==i.length&&n.push(i),t=this.getStartPoint(e,r),this.getRoutes(e,t,n,r);i.push(a),t=a}return n}},{key:"getAnswerRoute",value:function(e){var t=JSON.parse(JSON.stringify(this.mazeData));t[this.mazeSize-1][1]=!1,t[0][this.mazeSize-2]=!1;var n=[this.mazeSize-2,1],r=[0,this.mazeSize-2],i=this.getRoutes(t,n,[],[]);if(1===Number(e))for(var a=0;a<i.length;a++)for(var o=0;o<i[a].length;o++)if(i[a][o][0]===r[0]+1&&i[a][o][1]===r[1]){var s=i[a].slice(0,o+1);return s.push(r),s}if(2===Number(e)){for(var c=i[0],u=1;u<i.length;u++)c.length<i[u].length&&(c=i[u]);return c}}}]),e}(),y=n(15),z=function(e){switch(e){case"ArrowUp":return[-1,0];case"ArrowRight":return[0,1];case"ArrowDown":return[1,0];case"ArrowLeft":return[0,-1];default:return[0,0]}},w=new g(10).digGoal(1),S=new x(w).getAnswerRoute(1),k=function(e){return e.goal[0]===e.xIndex&&e.goal[1]===e.yIndex?"finish":e.xIndex===e.start[0]&&e.yIndex===e.start[1]?"stop":"start"},I=function(e){return("000"+e).slice(-3)},M={size:10,mode:1,data:w,answerData:S,answerShow:!1,isModalOpen:!0,start:[9,1],goal:[0,8],movable:!1,xIndex:9,yIndex:1,minutes:"000",seconds:"000",milliSeconds:"000",time:0,timer:"stop",intervalID:-1},D=Object(y.b)({name:"mazeState",initialState:M,reducers:{sizeChange:function(e,t){return Object(b.a)(Object(b.a)({},e),{},{size:t.payload})},modeChange:function(e,t){return Object(b.a)(Object(b.a)({},e),{},{mode:t.payload})},setMaze:function(e){var t,n,r,i=new g(e.size).digGoal(e.mode),a=new x(i).getAnswerRoute(e.mode);return clearInterval(e.intervalID),Object(b.a)(Object(b.a)({},e),{},{data:i,answerData:a,isModalOpen:!1,answerShow:!1,xIndex:e.size-1,yIndex:1,start:[e.size-1,1],goal:(t=e.size,n=e.mode,r=a,2===n?[r.slice(-1)[0][0],r.slice(-1)[0][1]]:[0,t-2]),minutes:"000",seconds:"000",milliSeconds:"000",time:0,timer:"stop",intervalID:-1})},openWindow:function(e,t){return clearInterval(e.intervalID),Object(b.a)(Object(b.a)({},e),{},{isModalOpen:t.payload,timer:"pause"})},closeWindow:function(e,t){return Object(b.a)(Object(b.a)({},e),{},{isModalOpen:t.payload,timer:k(e)})},movePoint:function(e,t){var n=function(e){return(e.xIndex!==e.goal[0]||e.yIndex!==e.goal[1])&&!0!==e.isModalOpen}(e);if(!n)return Object(b.a)({},e);var r=function(e,t){if(e.xIndex===e.size-1&&"ArrowUp"!==t.key)return[e.xIndex,e.yIndex];var n=[e.xIndex+t.nextX,e.yIndex+t.nextY];return e.data[n[0]][n[1]]?n:[e.xIndex,e.yIndex]}(e,t.payload);return Object(b.a)(Object(b.a)({},e),{},{xIndex:r[0],yIndex:r[1],movable:n})},showAnswer:function(e,t){return Object(b.a)(Object(b.a)({},e),{},{answerShow:t.payload,isModalOpen:!1})},startTimer:function(e,t){return Object(b.a)(Object(b.a)({},e),{},{intervalID:t.payload,timer:"start"})},stopTimer:function(e){return clearInterval(e.intervalID),Object(b.a)(Object(b.a)({},e),{},{intervalID:-1})},updateTimer:function(e){var t=e.time+1,n=parseInt(t/100/60%100,10),r=parseInt(t/100%60,10),i=parseInt(t%100,10);return Object(b.a)(Object(b.a)({},e),{},{minutes:I(n),seconds:I(r),milliSeconds:I(i),time:t})}}}),A=Object(y.a)({reducer:D.reducer}),C=n(7),R=Object(C.b)((function(e){return e}),(function(e){return{handleSizeChange:function(t){var n=D.actions.sizeChange(Number(t));e(n)},handleModeChange:function(t){var n=D.actions.modeChange(Number(t));e(n)},handleSetMaze:function(){var t=D.actions.setMaze();e(t);var n=D.actions.updateTimer(),r=setInterval((function(){return e(n)}),10),i=D.actions.startTimer(r);e(i)},openModalWindow:function(){var t=D.actions.openWindow(!0);e(t)},closeModalWindow:function(){var t=A.getState().timer,n="stop"===t,r=D.actions.closeWindow(n);if(e(r),"start"===t||"pause"===t){var i=D.actions.updateTimer(),a=setInterval((function(){return e(i)}),10),o=D.actions.startTimer(a);e(o)}},handleShowAnswer:function(){var t=D.actions.showAnswer(!0);e(t)}}}))(j),T=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).componentDidMount=function(){document.addEventListener("keydown",(function(t){return e.props.handleUseTimer(t.key)}))},e.componentWillUnmount=function(){document.removeEventListener("keydown",(function(t){return e.props.handleUseTimer(t.key)}))},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{className:"timer",onKeyDown:function(){return e.props.handleUseTimer()},children:[Object(h.jsx)("h5",{children:"\u3008\u3008 Timer \u3009\u3009"}),Object(h.jsx)("div",{id:"showTimer",children:Object(h.jsxs)("h5",{children:[this.props.minutes," : ",this.props.seconds," :"," ",this.props.milliSeconds]})})]})}}]),n}(i.a.Component),N=Object(C.b)((function(e){return e}),(function(e){return{handleUseTimer:function(t){var n=A.getState(),r=n.xIndex,i=n.yIndex,a=n.goal,o=r+z(t)[0],s=i+z(t)[1];if(a[0]===o&&a[1]===s){var c=D.actions.stopTimer();e(c)}}}}))(T),P=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).componentDidMount=function(){document.addEventListener("keydown",(function(t){return e.props.keyDownAction(t.key)}))},e.componentWillUnmount=function(){document.removeEventListener("keydown",(function(t){return e.props.keyDownAction(t.key)}))},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.data,r=t.answerData,i=t.size,a=function(t,n){return t===e.props.xIndex&&n===e.props.yIndex},o=function(t,n,i){if(!1===i)return!!function(t,n){return t===e.props.goal[0]&&n===e.props.goal[1]}(t,n);for(var a=0;a<r.length;a++)if(r[a][0]===t&&r[a][1]===n)return!0;return!1},s=500/i,c={padding:0,width:s,height:s,lineheight:s,border:"none",display:"inline-block",boxsizing:"border-box"},u={padding:0,height:500/i};return Object(h.jsx)("div",{className:"show",onKeyDown:function(){return e.props.keyDownAction()},children:Object(h.jsx)("div",{className:"maze-wrapper",children:n.map((function(t,n){return Object(h.jsx)("div",{style:u,children:t.map((function(t,r){var i=t;return Object(h.jsx)("input",{type:"button",className:a(n,r)?"move":"unmove".concat(n).concat(r),style:Object(b.a)(Object(b.a)({},c),{},{backgroundColor:i?o(n,r,e.props.answerShow)?"skyblue":"":"black"})},"row:".concat(n,",col:").concat(r))}))},"row:".concat(n))}))})})}}]),n}(i.a.Component),W=Object(C.b)((function(e){return e}),(function(e){return{keyDownAction:function(t){var n=function(e){var t=z(e);return{nextX:t[0],nextY:t[1],key:e}}(t),r=D.actions.movePoint(n);e(r)}}}))(P),E=(n(37),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(d,{}),Object(h.jsx)(R,{}),Object(h.jsx)(N,{}),Object(h.jsx)(W,{})]})}}]),n}(i.a.Component)),L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,39)).then((function(t){var n=t.getCLS,r=t.getFID,i=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),r(e),i(e),a(e),o(e)}))};o.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(C.a,{store:A,children:Object(h.jsx)(E,{})})}),document.getElementById("root")),L()}},[[38,1,2]]]);
//# sourceMappingURL=main.a65383f0.chunk.js.map