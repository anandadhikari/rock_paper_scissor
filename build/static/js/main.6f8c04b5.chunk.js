(this["webpackJsonprock-paper-scissors"]=this["webpackJsonprock-paper-scissors"]||[]).push([[0],{10:function(e,t,a){e.exports=a(17)},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(9),l=a.n(r),s=(a(16),a(2)),i=a(3),o=a(6),p=a(4),u=a(5),m=(a(7),function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"popup"},c.a.createElement("div",{className:"popup_inner"},c.a.createElement("p",null,"Player Choice: ",this.props.playerChoice),c.a.createElement("p",null,"Computer Choice: ",this.props.computerChoice),"computer"===this.props.winner?c.a.createElement("div",{className:"text-lose"}," ",c.a.createElement("p",null,"Winner: ",this.props.winner)):"player"===this.props.winner?c.a.createElement("div",{className:"text-win"}," ",c.a.createElement("p",null,"Winner: ",this.props.winner)):c.a.createElement("div",{className:"text-draw"}," ",c.a.createElement("p",null,"Winner: ",this.props.winner))))}}]),a}(c.a.Component)),h=a(1),d=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return c.a.createElement("div",null,"rock"===this.props.prechoice?c.a.createElement("div",null,c.a.createElement(h.a,{className:"FaHand"})):null,"paper"===this.props.prechoice?c.a.createElement("div",null,c.a.createElement(h.b,{className:"FaHand"})):null,"scissors"===this.props.prechoice?c.a.createElement("div",null,c.a.createElement(h.c,{className:"FaHand"})):null)}}]),a}(c.a.Component),E=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={player:0,computer:0,playerValue:"",computerValue:"",winner:"",prechoice:"",showPopup:!1,choice:!1},n.handleClick=n.handleClick.bind(Object(o.a)(n)),n}return Object(i.a)(a,[{key:"handleClick",value:function(e){var t=this,a=e,n=this.getComputerChoice(),c=this.getWinner(a,n);this.whoWon(c),this.setState({prechoice:n,computerValue:n,playerValue:a,winner:c,showPopup:!this.state.showPopup,choice:!1}),setTimeout((function(){t.setState({showPopup:!1})}),4e3)}},{key:"pop",value:function(){var e=this;setTimeout((function(){e.setState({choice:!0})}),3050)}},{key:"whoWon",value:function(e){"player"===e?this.setState((function(e){return{player:e.player+1}})):"computer"===e&&this.setState((function(e){return{computer:e.computer+1}}))}},{key:"getComputerChoice",value:function(){var e=Math.random();return e<.34?"rock":e<=.67?"paper":"scissors"}},{key:"getWinner",value:function(e,t){return e===t?"draw":"rock"===e?"paper"===t?"computer":"player":"paper"===e?"scissors"===t?"computer":"player":"scissors"===e?"rock"===t?"computer":"player":void 0}},{key:"render",value:function(){var e=this;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{class:"container mt-3"},c.a.createElement("div",{class:"d-flex justify-content-center bg-secondary mb-3"},c.a.createElement("div",{class:"p-2"},c.a.createElement("header",{className:"header"},c.a.createElement("h1",null,"Rock Paper Scissors"),c.a.createElement("button",{id:"restart",className:"restart-btn"},"Restart Game"),c.a.createElement("div",{id:"score",className:"score"},c.a.createElement("p",null,"Player: ",this.state.player),c.a.createElement("p",null,"Computer: ",this.state.computer))),c.a.createElement("h2",null,"Make Your Selection"),c.a.createElement("h3",null," PLAYER "),c.a.createElement("br",null)))),c.a.createElement("div",{class:"container-fluid"},c.a.createElement("div",{class:"row"},c.a.createElement("div",{className:"choices"},c.a.createElement("div",{class:"col-4"},c.a.createElement("div",{id:"rock",className:"choice",onClick:function(){return e.handleClick("rock")}},c.a.createElement(h.a,{className:"FaHand"}))),c.a.createElement("div",{class:"col-4]"}," ",c.a.createElement("div",{id:"paper",className:"choice",onClick:function(){return e.handleClick("paper")}},c.a.createElement(h.b,{className:"FaHand"}))),c.a.createElement("div",{class:"col-4"},c.a.createElement("div",{id:"scissors",className:"choice",onClick:function(){return e.handleClick("scissors")}},c.a.createElement(h.c,{className:"FaHand"})))))),c.a.createElement("div",{class:"container mt-3"},c.a.createElement("div",{class:"d-flex justify-content-center bg-secondary mb-3"},c.a.createElement("div",{class:"p-5S"},c.a.createElement("br",null),c.a.createElement("div",{style:{textAlign:"center"}}," ",c.a.createElement("h3",null," AI ")),c.a.createElement("br",null)))),c.a.createElement("div",{class:"container mt-3"},c.a.createElement("div",{class:"d-flex justify-content-center bg-secondary mb-3"},c.a.createElement("div",{class:"p-2  "},"  ",c.a.createElement("div",null," ",this.state.showPopup?c.a.createElement(d,{prechoice:this.state.prechoice,choice:this.state.choice}):null)))),this.pop(),this.state.showPopup&&!0===this.state.choice?c.a.createElement(m,{playerChoice:this.state.playerValue,computerChoice:this.state.computerValue,winner:this.state.winner}):null)}}]),a}(c.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},7:function(e,t,a){}},[[10,1,2]]]);
//# sourceMappingURL=main.6f8c04b5.chunk.js.map