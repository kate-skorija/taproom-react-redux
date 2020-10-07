(this.webpackJsonptaproom=this.webpackJsonptaproom||[]).push([[0],{13:function(e,t,n){e.exports=n.p+"static/media/beer.2570c231.jpg"},14:function(e,t,n){e.exports=n.p+"static/media/fishbowl.8713e736.jpg"},22:function(e,t,n){e.exports=n(35)},27:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(5),l=n.n(r),o=(n(27),n(13)),c=n.n(o),s=n(14),p=n.n(s);var m=function(){var e={backgroundImage:"url(".concat(c.a,")"),padding:"10px 15px 40px 15px",backgroundColor:"darkolivegreen"};return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{style:e},i.a.createElement("h1",{style:{fontFamily:"Oleo Script Swash Caps",fontSize:"100px",padding:"30px 0 0 30px",marginBottom:"0",color:"#292b2c"}},"The Fishbowl ",i.a.createElement("img",{style:{borderRadius:"50%",width:"150px",height:"150px",float:"right",marginRight:"50px"},src:p.a})),i.a.createElement("h2",{style:{fontFamily:"Lato",fontSize:"30px",padding:"0 0 0 30px",color:"#292b2c"}},"Beers On Tap")))},d=n(15),u=n(16),g=n(21),h=n(20);var E=function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{style:{width:"100%"}},i.a.createElement("form",{style:{padding:"30px 0",width:"50%",margin:"0 auto"},className:"form-group row justify-content-center",onSubmit:e.formSubmissionHandler},i.a.createElement("input",{style:{margin:"20px"},className:"form-control input-sm",type:"text",name:"name",placeholder:"Name of Beer"}),i.a.createElement("input",{style:{margin:"20px"},className:"form-control input-sm",type:"text",name:"brand",placeholder:"Brand"}),i.a.createElement("input",{style:{margin:"20px"},className:"form-control input-sm",type:"text",name:"price",placeholder:"Price per Pint"}),i.a.createElement("input",{style:{margin:"20px"},className:"form-control input-sm",type:"text",name:"alcoholContent",placeholder:"ABV%"}),i.a.createElement("input",{style:{margin:"20px"},className:"form-control input-sm",type:"number",name:"pintsRemaining",placeholder:"Number of Pints"}),i.a.createElement("button",{className:"btn btn-secondary btn-lg",style:{marginLeft:"20px"},type:"submit"},e.buttonText))))},b=n(17);var f=function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(E,{formSubmissionHandler:function(t){t.preventDefault(),e.onNewKegCreation({name:t.target.name.value,brand:t.target.brand.value,price:t.target.price.value,alcoholContent:t.target.alcoholContent.value,pintsRemaining:t.target.pintsRemaining.value,id:Object(b.v4)()})},buttonText:"Add!"}))};var v=function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{style:{display:"flex",margin:"1em",flexDirection:"column",boxShadow:"1px 1px 5px rgba(0, 0, 0, 0.2)",borderRadius:".6em",padding:"1em",backgroundColor:"rgba(255, 140, 0, 0.7)"}},i.a.createElement("h3",{style:{fontSize:"35px"}},e.name),i.a.createElement("h4",null,e.brand),i.a.createElement("p",null,e.price),i.a.createElement("p",null,e.alcoholContent),i.a.createElement("p",{style:{fontSize:"20px"}},e.pintsRemaining),i.a.createElement("button",{style:{marginBottom:"5px"},className:"btn btn-dark",onClick:function(){return e.whenPintSold(e.id)}},"Pint Sold!"),i.a.createElement("button",{className:"btn btn-dark",onClick:function(){return e.whenKegClicked(e.id)}},"Details")))};var y=function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",gridTemplateRows:"43vh 43vh 43vh 43vh 43vh 43vh",width:"100vw",height:"65vh",overflow:"scroll"}},Object.values(e.kegList).map((function(t){return i.a.createElement(v,{whenKegClicked:e.onKegSelection,whenPintSold:e.onPintSoldClick,name:t.name,brand:t.brand,pintsRemaining:parseInt(t.pintsRemaining),id:t.id,key:t.id})}))))};var C=function(e){var t=e.keg,n=e.onClickingDelete,a=e.onClickingEdit;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{style:{padding:"100px"}},i.a.createElement("h2",null,Object.values(t)[0].name," - ",Object.values(t)[0].brand),i.a.createElement("p",{style:{fontSize:"20px"}},"Price: ",Object.values(t)[0].price," per pint"),i.a.createElement("p",{style:{fontSize:"20px"}},"Alcohol Content: ",Object.values(t)[0].alcoholContent),i.a.createElement("p",{style:{fontSize:"20px"}},"Pints Remaining: ",Object.values(t)[0].pintsRemaining),i.a.createElement("div",{className:"btn-group"},i.a.createElement("button",{className:"btn btn-secondary",onClick:a},"Update Keg"),i.a.createElement("button",{className:"btn btn-secondary",onClick:function(){return n(Object.values(t)[0].id)}},"Remove from Tap List"))))};var K=function(e){var t=e.keg;return i.a.createElement(i.a.Fragment,null,i.a.createElement(E,{formSubmissionHandler:function(n){n.preventDefault(),e.onEditKeg({name:n.target.name.value,brand:n.target.brand.value,alcoholContent:n.target.alcoholContent.value,pintsRemaining:n.target.pintsRemaining.value,id:Object.values(t)[0].id})},buttonText:"Update Keg"}))},O=n(6),x=function(e){return{type:"ADD_KEG",name:e.name,brand:e.brand,price:e.price,alcoholContent:e.alcoholContent,pintsRemaining:e.pintsRemaining,id:e.id}},w=function(e){Object(g.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).handleClick=function(){var e=a.props.dispatch;if(null!=a.props.selectedKeg&&0!=a.props.editing)e({type:"DESELECT_KEG"}),e({type:"TOGGLE_EDIT_FORM"});else if(null!=a.props.selectedKeg){e({type:"DESELECT_KEG"})}else{e({type:"TOGGLE_FORM"})}},a.handleAddingNewKegToList=function(e){var t=a.props.dispatch;t(x(e)),t({type:"TOGGLE_FORM"})},a.handleChangingSelectedKeg=function(e){var t,n=a.props.dispatch,i=a.props.masterKegList[e];n({type:"SELECT_KEG",name:(t=i).name,brand:t.brand,price:t.price,alcoholContent:t.alcoholContent,pintsRemaining:t.pintsRemaining,id:t.id})},a.handlePintSold=function(e){var t=a.props.dispatch,n=a.props.masterKegList[e];n.pintsRemaining>0&&n.pintsRemaining--,t(x(n))},a.handleDeletingKeg=function(e){var t=a.props.dispatch,n={type:"DESELECT_KEG"};t(function(e){return{type:"DELETE_KEG",id:e}}(e)),t(n)},a.handleEditClick=function(){(0,a.props.dispatch)({type:"TOGGLE_EDIT_FORM"})},a.handleEditingKeg=function(e){var t=a.props.dispatch,n={type:"TOGGLE_EDIT_FORM"},i={type:"DESELECT_KEG"};t(x(e)),t(n),t(i)},a.state={},a}return Object(u.a)(n,[{key:"render",value:function(){var e=null,t=null;this.props.editing?(e=i.a.createElement(K,{keg:this.props.selectedKeg,onEditKeg:this.handleEditingKeg}),t="Return to Keg List"):null!=this.props.selectedKeg?(e=i.a.createElement(C,{keg:this.props.selectedKeg,onClickingDelete:this.handleDeletingKeg,onClickingEdit:this.handleEditClick}),t="Return to Keg List"):this.props.formVisibleOnPage?(e=i.a.createElement(f,{onNewKegCreation:this.handleAddingNewKegToList}),t="Return to Keg List"):(e=i.a.createElement(y,{kegList:this.props.masterKegList,onKegSelection:this.handleChangingSelectedKeg,onPintSoldClick:this.handlePintSold}),t="Add Keg");return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{style:{width:"100vw",height:"82vh",backgroundColor:"darkolivegreen",fontFamily:"Lato",marginTop:"-20px",textAlign:"center",position:"relative",paddingBottom:"6em"}},e,i.a.createElement("div",{style:{position:"absolute",bottom:"0",width:"100vw",height:"20vh"}},i.a.createElement("button",{style:{width:"100vw",height:"20vh",backgroundColor:"#292b2c",border:"none",color:"antiquewhite",fontSize:"40px",fontFamily:"Oleo Script Swash Caps",outline:"none"},onClick:this.handleClick},t))))}}]),n}(i.a.Component),S=w=Object(O.b)((function(e){return{masterKegList:e.masterKegList,formVisibleOnPage:e.formVisibleOnPage,selectedKeg:e.selectedKeg,editing:e.editing}}))(w);var k=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(m,null),i.a.createElement(S,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var R=n(3),L=n(19),T=n(4),_=Object(R.b)({formVisibleOnPage:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE_FORM":return!e;default:return e}},selectedKeg:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0,n=t.name,a=t.brand,i=t.price,r=t.alcoholContent,l=t.pintsRemaining,o=t.id;switch(t.type){case"SELECT_KEG":return Object(T.a)({},o,{name:n,brand:a,price:i,alcoholContent:r,pintsRemaining:l,id:o});case"DESELECT_KEG":return null;default:return e}},masterKegList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=t.name,a=t.brand,i=t.price,r=t.alcoholContent,l=t.pintsRemaining,o=t.id;switch(t.type){case"ADD_KEG":return Object.assign({},e,Object(T.a)({},o,{name:n,brand:a,price:i,alcoholContent:r,pintsRemaining:l,id:o}));case"DELETE_KEG":var c=Object(L.a)({},e);return delete c[o],c;default:return e}},editing:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE_EDIT_FORM":return!e;default:return e}}}),D=Object(R.c)(_,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());D.subscribe((function(){return console.log(D.getState())})),l.a.render(i.a.createElement(O.a,{store:D},i.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.d1e13d88.chunk.js.map