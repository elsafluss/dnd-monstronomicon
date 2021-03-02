(this.webpackJsonpmonstronomicon=this.webpackJsonpmonstronomicon||[]).push([[0],{40:function(e,t,n){},41:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var s=n(1),c=n(19),a=n.n(c),r=n(14),i=n(6),o=(n(40),n(4)),l=n(5),d=n(8),j=n(7),u=n(3),h=(n(41),n(0)),b=function(e){var t=e.monsterLinks;return Object(h.jsx)("div",{className:"monster-list",children:t})},m=n(13),O=n(29),p="FETCH_MONSTERS",x="FETCH_ONE_MONSTER",N="GET_MONSTERS_BY_CR",f="SEARCH_MONSTER_NAME",v="ADD_TO_ENCOUNTER",g="REMOVE_FROM_ENCOUNTER",E=function(e,t){return function(n){if(t){var s=e.filter((function(e){if(e.name.toLowerCase().includes(t))return e.name}));n({type:f,payload:s})}else n({type:f,payload:e})}},C=(n(43),function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={},e.clickHandler=e.clickHandler.bind(Object(m.a)(e)),e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.getOneMonster(this.props.location.state.url)}},{key:"clickHandler",value:function(){this.props.addToEncounter(this.props.monster.name,this.props.monster.index,this.props.location.state.url,this.props.encounter)}},{key:"render",value:function(){if(this.props.monster.url===this.props.location.state.url){var e=this.props.monster,t=e.subtype?Object(h.jsxs)("div",{className:"one-stat subtype",children:["SUBTYPE: ",Object(h.jsx)("span",{children:e.subtype})]}):Object(h.jsx)("div",{className:"one-stat subtype",children:"SUBTYPE: n/a"});if(e.specialAbilities)var n=e.special_abilities.map((function(e,t){return Object(h.jsx)("div",{children:Object(h.jsxs)("p",{className:"stat-detail",children:[e.name,": ",e.desc]})},t)}));var s=e.proficiencies.map((function(e,t){return Object(h.jsx)("div",{children:Object(h.jsxs)("p",{className:"stat-detail",children:[e.proficiency.name,": ",e.value]})},t)})),c=e.condition_immunities.map((function(t,n){return e.condition_immunities?Object(h.jsx)("div",{children:Object(h.jsx)("p",{className:"stat-detail",children:t.name})},n):Object(h.jsx)("div",{children:Object(h.jsx)("p",{className:"stat-detail",children:"CONDITION IMMUNITIES: n/a"})})})),a=e.damage_immunities.map((function(t,n){return e.damage_immunities?Object(h.jsx)("div",{children:Object(h.jsx)("p",{className:"stat-detail",children:t})},n):Object(h.jsx)("div",{children:Object(h.jsx)("p",{className:"stat-detail",children:"DAMAGE IMMUNITIES: n/a"})})})),r=e.damage_resistances.map((function(t,n){return e.damage_resistances?Object(h.jsx)("div",{children:Object(h.jsx)("p",{className:"stat-detail",children:t})},n):Object(h.jsx)("div",{children:Object(h.jsx)("p",{className:"stat-detail",children:"DAMAGE RESISTANCES: n/a"})})})),i=e.damage_vulnerabilities.map((function(t,n){return e.damage_vulnerabilities?Object(h.jsx)("div",{children:Object(h.jsx)("p",{className:"stat-detail",children:t})},n):Object(h.jsx)("div",{children:Object(h.jsx)("p",{className:"stat-detail",children:"DAMAGE VULNERABILITIES: n/a"})})}));if(e.actions)var o=e.actions.map((function(e,t){return Object(h.jsx)("div",{children:Object(h.jsxs)("div",{className:"stat-detail",children:[e.name,": ",e.desc]})},t)}));if(e.legendary_actions)var l=e.legendary_actions.map((function(e,t){return Object(h.jsx)("div",{children:Object(h.jsxs)("div",{className:"stat-detail",children:[e.name,": ",e.desc]})},t)}));var d=e.legendary_actions?Object(h.jsxs)("div",{className:"one-stat legendary-actions",children:["LEGENDARY ACTIONS: ",l]}):Object(h.jsx)("div",{className:"one-stat legendary-actions",children:"LEGENDARY ACTIONS: n/a"}),j=e.special_abilities?Object(h.jsx)("div",{className:"one-stat special-abilities",children:"SPECIAL ABILITIES: n/a"}):Object(h.jsxs)("div",{className:"one-stat special-abilities",children:["SPECIAL ABILITIES: ",n]});return Object(h.jsxs)("div",{className:"monster-stats",children:[Object(h.jsx)("button",{className:"add-button",onClick:this.clickHandler,children:"ADD TO ENCOUNTER"}),Object(h.jsx)("br",{}),Object(h.jsxs)("div",{className:"name-box",children:[Object(h.jsxs)("p",{className:"one-stat name",children:["NAME: ",Object(h.jsx)("span",{children:e.name})]}),Object(h.jsxs)("p",{className:"one-stat type",children:["TYPE: ",Object(h.jsx)("span",{children:e.type})]}),t,Object(h.jsxs)("p",{className:"one-stat alignment",children:["ALIGNMENT: ",Object(h.jsx)("span",{children:e.alignment})]}),Object(h.jsxs)("p",{className:"one-stat xp",children:["XP: ",Object(h.jsx)("span",{children:e.xp})]}),Object(h.jsxs)("p",{className:"one-stat languages",children:["LANGUAGES: ",Object(h.jsx)("span",{children:e.languages})]})]}),Object(h.jsxs)("div",{className:"size-box",children:[Object(h.jsxs)("p",{className:"one-stat size",children:["SIZE: ",Object(h.jsx)("span",{children:e.size})]}),Object(h.jsxs)("p",{className:"one-stat challenge-rating",children:["CHALLENGE RATING: ",Object(h.jsx)("span",{children:e.challenge_rating})]}),Object(h.jsxs)("p",{className:"one-stat hit-dice",children:["HIT DICE: ",Object(h.jsx)("span",{children:e.hit_dice})]}),Object(h.jsxs)("p",{className:"one-stat hit-points",children:["HIT POINTS: ",Object(h.jsx)("span",{children:e.hit_points})]}),Object(h.jsxs)("p",{className:"one-stat armor-class",children:["ARMOR CLASS: ",Object(h.jsx)("span",{children:e.armor_class})]}),Object(h.jsxs)("div",{className:"one-stat proficiencies",children:["PROFICIENCIES: ",s]})]}),Object(h.jsxs)("div",{className:"modifier-box",children:[Object(h.jsxs)("p",{className:"one-stat charisma",children:["CHARISMA: ",Object(h.jsx)("span",{children:e.charisma})]}),Object(h.jsxs)("p",{className:"one-stat constitution",children:["CONSTITUTION: ",Object(h.jsx)("span",{children:e.constitution})]}),Object(h.jsxs)("p",{className:"one-stat dexterity",children:["DEXTERITY: ",Object(h.jsx)("span",{children:e.dexterity})]}),Object(h.jsxs)("p",{className:"one-stat intelligence",children:["INTELLIGENCE: ",Object(h.jsx)("span",{children:e.intelligence})]}),Object(h.jsxs)("p",{className:"one-stat strength",children:["STRENGTH: ",Object(h.jsx)("span",{children:e.strength})]}),Object(h.jsxs)("p",{className:"one-stat wisdom",children:["WISDOM: ",Object(h.jsx)("span",{children:e.wisdom})]})]}),Object(h.jsxs)("div",{className:"immunities-box",children:[Object(h.jsxs)("div",{className:"one-stat damage-vulnerabilities",children:["DAMAGE VULNERABILITIES: ",i]}),Object(h.jsxs)("div",{className:"one-stat damage-resistances",children:["DAMAGE RESISTANCES: ",r]}),Object(h.jsxs)("div",{className:"one-stat condition-immunities",children:["CONDITION IMMUNITIES: ",c]}),Object(h.jsxs)("div",{className:"one-stat damage-immunities",children:["DAMAGE IMMUNITIES: ",a]})]}),Object(h.jsxs)("div",{className:"one-stat actions",children:["ACTIONS: ",o]}),Object(h.jsxs)("div",{className:"legendary",children:[" ",d]}),j]})}return null}}]),n}(s.Component)),y=Object(i.b)((function(e){return{monster:e.monsters.monster,encounter:e.encounter.encounter}}),{getOneMonster:function(e){return function(t){fetch("https://www.dnd5eapi.co".concat(e)).then((function(e){return e.json()})).then((function(e){return t({type:x,payload:e})})).catch((function(e){return console.log(e)}))}},addToEncounter:function(e,t,n,s){return function(c){s=[].concat(Object(O.a)(s),[{monsterName:e,monsterIndex:t,monsterUrl:n}]),c({type:v,payload:s})}}})(C),I=n.p+"static/media/light-die.7412bdb4.svg",S=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={monsterName:""},e.handleChange=e.handleChange.bind(Object(m.a)(e)),e.handleClick=e.handleClick.bind(Object(m.a)(e)),e}return Object(l.a)(n,[{key:"handleChange",value:function(e){var t=e.target.value;this.setState({monsterName:t})}},{key:"handleClick",value:function(e){e.preventDefault(),this.props.searchMonster(this.props.monsters,this.state.monsterName),this.clearInput()}},{key:"checkEnter",value:function(e){13===e.keyCode&&(e.preventDefault(),this.btn.click())}},{key:"clearInput",value:function(){this.setState({monsterName:""})}},{key:"render",value:function(){var e=this;return Object(h.jsx)("div",{className:"nav-button",children:Object(h.jsx)("div",{className:"search-field1",children:Object(h.jsxs)("form",{className:"search-field",children:[Object(h.jsx)("input",{type:"text",placeholder:"Search by name",name:"search",className:"search-input",value:this.state.monsterName,onChange:this.handleChange,onKeyDown:function(t){return e.checkEnter(t)}}),Object(h.jsx)("button",{className:"search-btn",ref:function(t){return e.btn=t},onClick:function(t){return e.handleClick(t)},children:Object(h.jsx)("img",{className:"dice",src:I,alt:"a d20"})})]})})})}}]),n}(s.Component),k=Object(i.b)((function(e){return{monsters:e.monsters.monsters}}),{searchMonster:E})(S),T=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={CR:0},e.handleClick=e.handleClick.bind(Object(m.a)(e)),e.handleChange=e.handleChange.bind(Object(m.a)(e)),e}return Object(l.a)(n,[{key:"handleChange",value:function(e){this.setState({CR:e.target.value})}},{key:"handleClick",value:function(e){e.preventDefault(),this.props.getMonstersByCR(this.state.CR),this.clearInput()}},{key:"clearInput",value:function(){this.setState({CR:""})}},{key:"render",value:function(){var e=[0,.125,.25,.5,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,19,20,21,22,23,24,30].map((function(e,t){return Object(h.jsx)("option",{value:e,children:e},e)}));return Object(h.jsx)("div",{className:"nav-button",children:Object(h.jsxs)("form",{className:"filter-form",onChange:this.handleChange,children:[Object(h.jsx)("label",{className:"filter-label",children:"Challenge Rating"}),Object(h.jsx)("select",{className:"filter-select",children:e}),Object(h.jsx)("button",{className:"filter-button",onClick:this.handleClick,children:Object(h.jsx)("img",{className:"dice",src:I,alt:"a d20"})})]})})}}]),n}(s.Component),A=Object(i.b)((function(e){return{}}),{getMonstersByCR:function(e){return function(t){fetch("https://www.dnd5eapi.co/api/monsters?challenge_rating=".concat(e)).then((function(e){return e.json()})).then((function(e){return t({type:N,payload:e.results})})).catch((function(e){return console.log(e)}))}}})(T),M=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={},e.handleClick=e.handleClick.bind(Object(m.a)(e)),e}return Object(l.a)(n,[{key:"handleClick",value:function(){this.props.searchMonster(this.props.monsters,"")}},{key:"render",value:function(){return Object(h.jsx)("div",{className:"nav-button",children:Object(h.jsx)("button",{className:"show-all-btn",onClick:this.handleClick,children:"Show All Monsters"})})}}]),n}(s.Component),R=Object(i.b)((function(e){return{monsters:e.monsters.monsters}}),{searchMonster:E})(M),_=(n(44),n.p+"static/media/dragon.597395b0.svg"),D=n.p+"static/media/dragonR.a9079756.svg",w=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.encounter.length;return Object(h.jsxs)("header",{className:"header",children:[Object(h.jsxs)("div",{className:"title",children:[Object(h.jsx)("img",{className:"dragon",src:_,alt:"a dragon"}),Object(h.jsx)(r.b,{to:"/home",className:"app-name",children:Object(h.jsx)("h1",{children:"MONSTRONOMICON"})}),Object(h.jsx)("img",{className:"dragon",src:D,alt:"a dragon"})]}),Object(h.jsxs)("div",{className:"nav",children:[Object(h.jsx)(k,{}),Object(h.jsx)(R,{}),Object(h.jsx)(A,{}),Object(h.jsx)("div",{className:"nav-button",children:Object(h.jsxs)(r.b,{to:"/encounter",className:"encounter-button",children:["Encounter (",e,")"]})})]})]})}}]),n}(s.Component),L=Object(i.b)((function(e){return{encounter:e.encounter.encounter}}),{})(w),G=(n(48),function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this;if(this.props.encounter.length){var t=this.props.encounter.map((function(t,n){return Object(h.jsxs)("div",{className:"encounter-element",children:[Object(h.jsx)(r.b,{to:{pathname:"/monster/".concat(t.monsterIndex),state:{url:t.monsterUrl}},children:Object(h.jsx)("div",{className:"encounter-tag",children:t.monsterName})}),Object(h.jsxs)("button",{className:"delete-button",onClick:function(){return e.props.removeFromEncounter(n,e.props.encounter)},children:["X",Object(h.jsx)("span",{className:"delete-tooltip",children:"\u2b05 remove monster"})]})]},n)}));return Object(h.jsx)("div",{className:"encounter-list",children:t})}return Object(h.jsx)("h2",{children:"You have no monsters in your encounter."})}}]),n}(s.Component)),U=Object(i.b)((function(e){return{monsters:e.monsters.monsters,encounter:e.encounter.encounter}}),{removeFromEncounter:function(e,t){return function(n){var s=t.filter((function(n){return t.indexOf(n)!==e}));n({type:g,payload:s})}}})(G),H=(n(49),n(50),s.Component,function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.getMonsters()}},{key:"render",value:function(){if(this.props.monsters.length&&!this.props.results.length)var e=this.props.monsters.map((function(e){return Object(h.jsx)("div",{children:Object(h.jsx)(r.b,{to:{pathname:"/monster/".concat(e.index),state:{url:e.url}},children:Object(h.jsx)("div",{className:"monster-tag",children:e.name})})},e.index)}));else{if(!this.props.results.length)return null;e=this.props.results.map((function(e){return Object(h.jsx)("div",{children:Object(h.jsx)(r.b,{to:{pathname:"/monster/".concat(e.index),state:{url:e.url}},children:Object(h.jsx)("div",{className:"monster-tag",children:e.name})})},e.index)}))}return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(L,{}),Object(h.jsxs)(u.d,{children:[Object(h.jsx)(u.b,{exact:!0,path:"/",children:Object(h.jsx)(u.a,{to:"/home"})}),Object(h.jsx)(u.b,{exact:!0,path:"/home",render:function(){return Object(h.jsx)(b,{monsterLinks:e})}}),Object(h.jsx)(u.b,{path:"/encounter",component:U}),Object(h.jsx)(u.b,{path:"/monster/",component:y})]})]})}}]),n}(s.Component)),B=Object(i.b)((function(e){return{monsters:e.monsters.monsters,results:e.returned.returned}}),{getMonsters:function(){return function(e){fetch("https://www.dnd5eapi.co/api/monsters").then((function(e){return e.json()})).then((function(t){return e({type:p,payload:t.results})})).catch((function(e){return console.log(e)}))}}})(H),P=n(16),Y=n(28),F=n(9),J={monsters:[],monster:{},returned:[],encounter:[]},z={monsters:[],monster:{},returned:[],encounter:[]},V={monsters:[],monster:{},returned:[],encounter:[]},X=Object(P.c)({monsters:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(F.a)(Object(F.a)({},e),{},{monsters:t.payload});case x:return Object(F.a)(Object(F.a)({},e),{},{monster:t.payload});default:return e}},returned:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:case N:return Object(F.a)(Object(F.a)({},e),{},{returned:t.payload});default:return e}},encounter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:case g:return Object(F.a)(Object(F.a)({},e),{},{encounter:t.payload});default:return e}}}),K=function(){try{var e=localStorage.getItem("state");if(null===e)return;return JSON.parse(e)}catch(t){return}}()||{},W=[Y.a],Z=Object(P.e)(X,K,Object(P.d)(P.a.apply(void 0,W)));Z.subscribe((function(){!function(e){try{var t=JSON.stringify(e);localStorage.setItem("state",t)}catch(n){console.log(n)}}({encounter:Z.getState().encounter})}));var q=Z;a.a.render(Object(h.jsx)(i.a,{store:q,children:Object(h.jsx)(r.a,{children:Object(h.jsx)(B,{})})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.69368264.chunk.js.map