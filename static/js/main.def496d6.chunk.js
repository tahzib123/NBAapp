(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,a,t){e.exports=t(20)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),s=t(7),r=t.n(s),c=(t(13),t(1)),o=t(2),i=t(4),m=t(3),p=t(5),h=function(e){var a=e.playerArray;return n.a.createElement("div",null,a)},u=(t(14),function(e){var a=e.searchChange;return n.a.createElement("form",null,n.a.createElement("input",{type:"search",id:"searchBox",placeholder:"Search for a player",className:"searchBox",onKeyPress:a}),n.a.createElement("button",{type:"button",onClick:a,className:"submitButton"},"Submit"))}),d=(t(15),function(e){var a=e.name,t=e.id,l=e.team,s=e.position,r=e.height,c=e.weight,o=e.imageLink,i=e.showModal;return null!={position:s}&&null!={weight:c}||(console.log("Position is null"),o="questionmark.png"),n.a.createElement("div",{className:"outerGrid"},n.a.createElement("div",{className:"div1"},n.a.createElement("div",{className:"div3"},n.a.createElement("img",{src:o,alt:"Player Profile"})),n.a.createElement("div",{className:"div4"},n.a.createElement("h1",{className:"Name"},a),n.a.createElement("p",{className:"Info"},l))),n.a.createElement("div",{className:"div2"},n.a.createElement("div",{className:"div5"},n.a.createElement("h3",null,"Height"),n.a.createElement("p",{className:"height"},r)),n.a.createElement("div",{className:"div6"},n.a.createElement("h3",null,"Weight"),n.a.createElement("p",{className:"weight"},c," lbs ")),n.a.createElement("div",{className:"div7"},n.a.createElement("h3",null,"Position"),n.a.createElement("p",{className:"pos"},s)),n.a.createElement("div",{className:"div8"},n.a.createElement("button",{type:"button",onClick:function(e){i(e,t)}},"View Stats"))))}),E=(t(16),t(17),function(e){var a=e.pts,t=e.ast,l=e.reb,s=e.stl,r=e.blk,c=e.fg_pct;return n.a.createElement("div",{className:"statscontainer"},n.a.createElement("div",{className:"PointsCol"},n.a.createElement("h1",{className:"StatTitle"}," Points "),n.a.createElement("p",{className:"StatAverage"}," ",a)),n.a.createElement("div",{className:"AssistsCol"},n.a.createElement("h1",{className:"StatTitle"}," Assists "),n.a.createElement("p",{className:"StatAverage"},t)),n.a.createElement("div",{className:"ReboundsCol"},n.a.createElement("h1",{className:"StatTitle"}," Rebounds "),n.a.createElement("p",{className:"StatAverage"},l," ")),n.a.createElement("div",{className:"StealsCol"},n.a.createElement("h1",{className:"StatTitle"}," Steals "),n.a.createElement("p",{className:"StatAverage"},s," ")),n.a.createElement("div",{className:"BlocksCol"},n.a.createElement("h1",{className:"StatTitle"}," Blocks "),n.a.createElement("p",{className:"StatAverage"},r," ")),n.a.createElement("div",{className:"FieldGoalCol"},n.a.createElement("h1",{className:"StatTitle"}," Field Goal "),n.a.createElement("p",{className:"StatAverage"},100*c+"%"," ")))}),v=(t(18),function(e){var a;return a=e.playerGames.map(function(e){return n.a.createElement("tr",{className:"tbl-content"},n.a.createElement("td",null,e.pts),n.a.createElement("td",null,e.ast),n.a.createElement("td",null,e.reb),n.a.createElement("td",null,e.blk),n.a.createElement("td",null,"".concat((100*e.fg_pct).toFixed(1),"%")))}),n.a.createElement("table",{cellPadding:"0",cellSpacing:"0",border:"0"},n.a.createElement("thead",{className:"tbl-header"},n.a.createElement("tr",null,n.a.createElement("th",null,"Points"),n.a.createElement("th",null,"Assists"),n.a.createElement("th",null,"Rebounds"),n.a.createElement("th",null,"Blocks"),n.a.createElement("th",null,"Field Goal"))),n.a.createElement("tbody",null,a))}),f=function(e){function a(){return Object(c.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this;if(!1===this.props.show)return null;if(this.props.children.props.playerArray.forEach(function(a){a.props.id===e.props.playerId&&(e.cardToRender=a)}),void 0===this.props.playerAverages)return n.a.createElement("div",{className:"modal"},n.a.createElement("p",{className:"content"},this.cardToRender),n.a.createElement("p",null,"Data For this Player cannot be found"),n.a.createElement("button",{className:"toggle-button",type:"button",onClick:this.props.closeModal},"Close"));var a=this.props.playerAverages,t=this.props.playerTable;return n.a.createElement("div",{className:"modal"},n.a.createElement("p",{className:"content"},this.cardToRender),n.a.createElement("h1",{className:"SeasonAvgTitle"},"Season Averages"),n.a.createElement(E,{pts:a.pts,ast:a.ast,reb:a.reb,stl:a.stl,blk:a.blk,fg_pct:a.fg_pct}),n.a.createElement("h1",{className:"statcardtitle"},"Last 25 Games"),n.a.createElement(v,{playerGames:t}),n.a.createElement("button",{className:"toggle-button",type:"button",onClick:this.props.closeModal},"Close"))}}]),a}(n.a.Component),y=(t(19),function(e){function a(){var e;Object(c.a)(this,a),(e=Object(i.a)(this,Object(m.a)(a).call(this))).showModal=function(a,t){e.playerId=t;var l="https://www.balldontlie.io/api/v1/season_averages?season=2018&player_ids[]=";l+=e.playerId,fetch(l).then(function(e){return e.json()}).then(function(a){e.playerAverages=a.data[0]});var n="https://www.balldontlie.io/api/v1/stats?seasons[]=2018&seasons[]=2019&player_ids[]=";n+=e.playerId,fetch(n).then(function(e){return e.json()}).then(function(a){e.playerTable=a.data,e.setState({show:!0})})},e.closeModal=function(a){e.setState({show:!1})},e.onSearchChange=function(a){if("Enter"===a.key||"BUTTON"===a.target.tagName){a.preventDefault();var t=document.getElementById("searchBox").value,l="https://www.balldontlie.io/api/v1/players?search=";fetch(l+=t).then(function(e){return e.json()}).then(function(a){e.playerArray=a.data.map(function(a){return n.a.createElement(d,{name:a.first_name+" "+a.last_name,id:a.id,team:a.team.full_name,position:a.position,height:a.height_feet+" ' "+a.height_inches,weight:a.weight_pounds,imageLink:"https://nba-players.herokuapp.com/players/"+a.last_name+"/"+a.first_name,showModal:e.showModal})}),e.setState({searchField:t})})}};return e.state={searchField:"",show:!1},e}return Object(p.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"forms"},n.a.createElement(u,{searchChange:this.onSearchChange})),n.a.createElement(h,{playerArray:this.playerArray}),n.a.createElement(f,{show:this.state.show,playerId:this.playerId,closeModal:this.closeModal,playerAverages:this.playerAverages,playerTable:this.playerTable},n.a.createElement(h,{playerArray:this.playerArray})))}}]),a}(n.a.Component));r.a.render(n.a.createElement(y,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.def496d6.chunk.js.map