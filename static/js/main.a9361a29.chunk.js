(this.webpackJsonptrello=this.webpackJsonptrello||[]).push([[0],{17:function(e,a,t){e.exports={footer_btn:"ListAddCard_footer_btn__1C03C",plus:"ListAddCard_plus__2r1Lw",disc:"ListAddCard_disc__30qAx",form:"ListAddCard_form__2jpud",add_card:"ListAddCard_add_card__1DSxL",btns_wrapp:"ListAddCard_btns_wrapp__1UQ8M",btn_add:"ListAddCard_btn_add__3JY7N",btn_close:"ListAddCard_btn_close__UABOV"}},19:function(e,a,t){e.exports={list_wrapper:"CardsList_list_wrapper__2idlp",list_content:"CardsList_list_content__1rhxv",list_header:"CardsList_list_header__3Kog3",dots:"CardsList_dots__2YXoc",list_cards:"CardsList_list_cards__2xqWH",list_footer:"CardsList_list_footer__2UCoB"}},25:function(e,a,t){e.exports={login:"Login_login__25J6D",logo_container:"Login_logo_container__3v7Dm",btn_span:"Login_btn_span__3zoJL",btn_span_name:"Login_btn_span_name__FmTSc",login_send:"Login_login_send__anFhZ"}},31:function(e,a,t){e.exports={card:"Cards_card__249z0",badges:"Cards_badges__3okNH",card_content:"Cards_card_content__2ZDhF"}},34:function(e,a,t){e.exports={board_name:"BoardName_board_name__36C6o",input:"BoardName_input__3sKkO"}},35:function(e,a,t){e.exports={elemLi:"Boards_elemLi__2ZYVg",image:"Boards_image__191G4"}},5:function(e,a,t){e.exports={container:"Board_container__2Kww9",board_header:"Board_board_header__3mj-x",link_item:"Board_link_item__BmPPz",link_round:"Board_link_round__3cyjb",star:"Board_star__3-IB3",icon_start:"Board_icon_start__2eZb0",icon:"Board_icon__19vdz",wrapp_round_chevron:"Board_wrapp_round_chevron__3FQlv",chevron:"Board_chevron__3I4kB",line:"Board_line__1DSOE",board_content_container:"Board_board_content_container__2XPEK",board_content:"Board_board_content__b5G50",addList:"Board_addList__2EutJ",plus:"Board_plus__BAdNB",text:"Board_text__3YW3D"}},57:function(e,a,t){"use strict";t.r(a);var n,c=t(1),s=t(29),r=t(14),i=t(2),o=t(21),l=t(22),_=t(24),d=t(23),j=t(3),b=t(9),u=t(28),p=t(40);!function(e){e.SET_TOKEN="@@AUTH/SET_TOKEN",e.READ_TOKEN="@@AUTH/READ_TOKEN",e.SET_PROFILE="@@AUTH/SET_PROFILE",e.RESET_STATE="@@AUTH/RESET_STATE"}(n||(n={}));var O,h={token:"",userProfile:void 0},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case n.SET_TOKEN:return Object(i.a)(Object(i.a)({},e),{},{token:a.payload});case n.SET_PROFILE:return Object(i.a)(Object(i.a)({},e),{},{userProfile:Object(p.a)(a.payload)});case n.RESET_STATE:return Object(i.a)(Object(i.a)({},e),{},{state:h});default:return e}},f=function(e){return e.auth.token},x=function(e){return!!e.auth.token},N=function(e){return e.auth.userProfile},v=t(11),E=t.n(v),S=t(16),T=function(e){return{type:n.SET_PROFILE,payload:e}};!function(e){e.FETCH="@@BOARDS/FETCH",e.SET_BOARDS="@@BOARDS/SET",e.SET_SELECTED="@@BOARDS/SET_SELECTED"}(O||(O={}));var A,C={list:[],selected:""},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,a=arguments.length>1?arguments[1]:void 0,t=a.type,n=a.payload;switch(t){case O.SET_BOARDS:return Object(i.a)(Object(i.a)({},e),{},{list:n});case O.SET_SELECTED:return Object(i.a)(Object(i.a)({},e),{},{selected:n});default:return e}},P=Object({NODE_ENV:"production",PUBLIC_URL:"/trello_thunk",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_DOMAIN:"https://api.trello.com",REACT_APP_API_KEY:"3444d04aec28c17cb97d3487e5548586",REACT_APP_APP_NAME:"webAcademy",REACT_APP_REDIRECT_URL:"https://sergmus.github.io/trello_thunk/oauth",REACT_APP_SCOPE:"read,write,account"}),D=P.REACT_APP_API_DOMAIN,y=P.REACT_APP_API_KEY,L=function(e,a,t){var n=D+e+"key=".concat(y);return t&&a&&(n+="&token=".concat(a)),n},k=function(e){return{type:O.SET_BOARDS,payload:e}},R=function(e){return e.boards.list};!function(e){e.FETCH_LISTS="@@LISTS/FETCH_LISTS",e.SET_LISTS="@@LISTS/SET_LISTS"}(A||(A={}));var B,w={cardLists:""},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case A.SET_LISTS:return Object(i.a)(Object(i.a)({},e),{},{cardLists:a.payload});default:return e}},H=t(39);!function(e){e.FETCH_CARDS="@@CARDS/FETCH_CARDS",e.SET_CARDS="@@CARDS/SET_CARDS"}(B||(B={}));var F={cardItems:""},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case B.SET_CARDS:return Object(i.a)(Object(i.a)({},e),{},{cardItems:a.payload});default:return e}},U=function(e){return function(){var a=Object(S.a)(E.a.mark((function a(t,n){var c,s,r,i;return E.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c=n(),s=f(c),a.next=4,fetch("".concat("https://api.trello.com/1/","boards/").concat(e,"/cards?key=").concat("3444d04aec28c17cb97d3487e5548586","&token=").concat(s),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}});case 4:return r=a.sent,a.next=7,r.json();case 7:i=a.sent,t((o=i,{type:B.SET_CARDS,payload:o}));case 9:case"end":return a.stop()}var o}),a)})));return function(e,t){return a.apply(this,arguments)}}()},W=function(e){return e.cards.cardItems};var M,Y=t(18),z=t(34),G=t.n(z),J=t(0),V=function(e){var a=Object(c.useState)(e.name),t=Object(Y.a)(a,2),n=t[0],s=t[1],r=Object(c.useState)(!1),i=Object(Y.a)(r,2),o=i[0],l=i[1];Object(c.useEffect)((function(){s(e.name)}),[s,e.name]);return Object(J.jsxs)(J.Fragment,{children:[!o&&Object(J.jsx)("div",{className:G.a.board_name,onDoubleClick:function(){l(!0)},children:n}),o&&Object(J.jsx)("input",{type:"text",autoFocus:!0,onChange:function(e){s(e.target.value)},onBlur:function(){l(!1)},className:G.a.input,value:n})]})},q=t(5),X=t.n(q),Z=t(19),Q=t.n(Z),$=t(31),ee=t.n($),ae=function(e){return Object(J.jsxs)("div",{className:ee.a.card,children:[Object(J.jsx)("div",{className:ee.a.card_content,children:e.cards.name}),Object(J.jsx)("div",{className:ee.a.badges,children:Object(J.jsx)("i",{className:"fas fa-align-left"})})]})},te=t(17),ne=t.n(te),ce=function(e){var a=e.addListCard,t=e.listId,n=e.boardId,s=Object(c.useState)(!0),r=Object(Y.a)(s,2),i=r[0],o=r[1],l=Object(c.useState)(""),_=Object(Y.a)(l,2),d=_[0],j=_[1];return Object(J.jsxs)(J.Fragment,{children:[i&&Object(J.jsxs)(J.Fragment,{children:[Object(J.jsxs)("button",{className:ne.a.footer_btn,onClick:function(){o(!1)},children:[Object(J.jsx)("span",{className:ne.a.plus,children:Object(J.jsx)("i",{className:"fas fa-plus"})}),"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0435\u0449\u0435 \u043e\u0434\u043d\u0443 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443"]}),Object(J.jsx)("span",{className:ne.a.disc,children:Object(J.jsx)("i",{className:"far fa-window-restore"})})]}),!i&&Object(J.jsxs)("form",{action:"",onSubmit:function(e){e.preventDefault(),a(d,t,n),o(!0)},className:ne.a.form,children:[Object(J.jsx)("input",{type:"text",className:ne.a.add_card,value:d,onChange:function(e){j(e.target.value)},placeholder:"\u0412\u0432\u0435\u0441\u0442\u0438 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u0434\u043b\u044f \u044d\u0442\u043e\u0439 \u043a\u0430\u0440\u0442\u044b"}),Object(J.jsxs)("div",{className:ne.a.btns_wrapp,children:[Object(J.jsx)("button",{className:ne.a.btn_add,type:"submit",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443"}),Object(J.jsx)("button",{className:ne.a.btn_close,onClick:function(){o(!0),j("")},children:Object(J.jsx)("i",{className:"fas fa-times"})})]})]})]})},se=function(e){return console.log(e),e.lists&&e.lists.map((function(a){return Object(J.jsx)("div",{className:Q.a.list_wrapper,children:Object(J.jsxs)("div",{className:Q.a.list_content,children:[Object(J.jsxs)("div",{className:Q.a.list_header,children:[a.name,Object(J.jsx)("span",{className:Q.a.dots,children:Object(J.jsx)("i",{className:"fas fa-ellipsis-h"})})]}),Object(J.jsx)("div",{className:Q.a.list_cards,children:e.cards&&e.cards.filter((function(e){return e.idList===a.id&&e.idBoard===a.idBoard})).map((function(e){return Object(J.jsx)(ae,{cards:e})}))}),Object(J.jsx)("div",{className:Q.a.list_footer,children:Object(J.jsx)(ce,{addListCard:e.addListCard,listId:a.id,boardId:a.idBoard})})]})})}))},re=Object(b.b)((function(e){return{token:f(e),lists:(t=e,t.lists.cardLists),boards:R(e),selectedBoard:(a=e,a.boards.selected),cards:W(e)};var a,t}),(function(e){return{setList:function(a){return e((t=a,function(){var e=Object(S.a)(E.a.mark((function e(a,n){var c,s,r,i;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=n(),s=f(c),e.next=4,fetch("".concat("https://api.trello.com/1/","boards/").concat(t,"/lists?key=").concat("3444d04aec28c17cb97d3487e5548586","&token=").concat(s),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}});case 4:return r=e.sent,e.next=7,r.json();case 7:i=e.sent,console.log(i),a((o=i,{type:A.SET_LISTS,payload:o}));case 10:case"end":return e.stop()}var o}),e)})));return function(a,t){return e.apply(this,arguments)}}()));var t},setCards:function(a){return e(U(a))},addListCard:function(a,t,n){return e(function(e,a,t){return function(){var n=Object(S.a)(E.a.mark((function n(c,s){var r,i,o,l;return E.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=s(),i=f(r),n.next=4,fetch("".concat("https://api.trello.com/1/","cards?key=").concat("3444d04aec28c17cb97d3487e5548586","&token=").concat(i,"&idList=").concat(a,"&name=").concat(e),{method:"POST",mode:"no-cors",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)});case 4:return o=n.sent,n.next=7,o.text();case 7:l=n.sent,console.log(l),U(t);case 10:case"end":return n.stop()}}),n)})));return function(e,a){return n.apply(this,arguments)}}()}(a,t,n))}}}))((function(e){var a=e.setList,t=e.setCards,n=e.lists,s=e.boards,r=e.selectedBoard,i=e.cards,o=e.addListCard;return Object(c.useEffect)((function(){a(r)}),[r,a]),Object(c.useEffect)((function(){t(r)}),[r,t]),s.map((function(e){return e.id===r?Object(J.jsxs)("div",{className:X.a.container,style:{background:"url('".concat(e.prefs.backgroundImage,"') no-repeat center/cover")},children:[Object(J.jsxs)("div",{className:X.a.board_header,children:[Object(J.jsx)("div",{className:X.a.link_item,children:Object(J.jsx)(V,{name:e.name})}),Object(J.jsx)("div",{className:[X.a.link_item,X.a.star].join(" "),children:Object(J.jsx)("span",{className:X.a.icon_star,children:Object(J.jsx)("i",{className:"far fa-star"})})}),Object(J.jsx)("span",{className:X.a.line}),Object(J.jsxs)("div",{className:X.a.link_item,children:[Object(J.jsx)("span",{className:X.a.icon,children:Object(J.jsx)("i",{className:"fas fa-user-check"})}),Object(J.jsx)("span",{className:X.a.span_text,children:"\u041f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u0430\u044f"})]}),Object(J.jsx)("span",{className:X.a.line}),Object(J.jsxs)("div",{className:X.a.link_item,children:[Object(J.jsx)("span",{className:X.a.icon,children:Object(J.jsx)("i",{className:"fas fa-lock"})}),Object(J.jsx)("span",{className:X.a.span_text,children:"\u041f\u0440\u0438\u0432\u0430\u0442\u043d\u0430\u044f"})]}),Object(J.jsx)("span",{className:X.a.line}),Object(J.jsxs)("span",{className:X.a.wrapp_round_chevron,children:[Object(J.jsx)("div",{className:X.a.link_round,children:"S"}),Object(J.jsx)("span",{className:X.a.chevron,children:Object(J.jsx)("i",{className:"fas fa-angle-double-up"})})]}),Object(J.jsx)("div",{className:X.a.link_item,children:Object(J.jsx)("span",{className:X.a.span_text,children:"\u041f\u0440\u0438\u0433\u043b\u0430\u0441\u0438\u0442\u044c"})})]}),Object(J.jsx)("div",{className:X.a.board_content_container,children:Object(J.jsxs)("div",{className:X.a.board_content,children:[Object(J.jsx)(se,{lists:n,cards:i,addListCard:o}),Object(J.jsxs)("button",{className:X.a.addList,children:[Object(J.jsx)("span",{className:X.a.plus,children:Object(J.jsx)("i",{className:"fas fa-plus"})}),Object(J.jsx)("span",{className:X.a.text,children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0435\u0449\u0435 \u043e\u0434\u043d\u0443 \u043a\u043e\u043b\u043e\u043d\u043a\u0443"})]})]})})]}):null}))})),ie=t(6),oe=t.n(ie),le=t(35),_e=t.n(le),de=function(e){var a=e.items;return Object(J.jsxs)("li",{className:_e.a.elemLi,onClick:function(a){return e.setBoardId(a.target.parentNode.parentNode.id)},id:a.id,children:[a.name,Object(J.jsx)(r.c,{to:M.BOARD,children:Object(J.jsx)("img",{src:a.prefs.backgroundImage,className:_e.a.image,alt:"board"})})]})},je=function(e){Object(_.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=a.call.apply(a,[this].concat(c))).setBoardId=function(a){e.props.onSelected(a)},e}return Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.onFetchBoards()}},{key:"render",value:function(){var e=this;return Object(J.jsx)("div",{className:oe.a.container_root,children:Object(J.jsxs)("div",{className:oe.a.container_sticky,children:[Object(J.jsx)("div",{className:oe.a.left_menu,children:Object(J.jsxs)("div",{className:oe.a.navbar,children:[Object(J.jsx)("h1",{children:"\u041c\u0435\u043d\u044e"}),Object(J.jsxs)("ul",{className:oe.a.tab_section,children:[Object(J.jsxs)("li",{className:oe.a.item,children:[Object(J.jsx)("span",{className:oe.a.span_icon,children:Object(J.jsx)("i",{className:"fas fa-door-open"})}),"\u041d\u0430\u0447\u0430\u043b\u043e \u0440\u0430\u0431\u043e\u0442\u044b"]}),Object(J.jsxs)("li",{className:oe.a.item,children:[Object(J.jsx)("span",{className:oe.a.span_icon,children:Object(J.jsx)("i",{className:"far fa-heart"})}),"\u0412\u0430\u0436\u043d\u044b\u0435 \u0441\u043e\u0431\u044b\u0442\u0438\u044f"]}),Object(J.jsxs)("li",{className:oe.a.item,children:[Object(J.jsx)("span",{className:oe.a.span_icon,children:Object(J.jsx)("i",{className:"fas fa-table"})}),"\u0422\u0430\u0431\u043b\u0438\u0446\u044b"]}),Object(J.jsxs)("li",{className:oe.a.item,children:[Object(J.jsx)("span",{className:oe.a.span_icon,children:Object(J.jsx)("i",{className:"fas fa-user-friends"})}),"\u0423\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u0438"]}),Object(J.jsxs)("li",{className:oe.a.item,children:[Object(J.jsx)("span",{className:oe.a.span_icon,children:Object(J.jsx)("i",{className:"fas fa-cog"})}),"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"]})]})]})}),Object(J.jsx)("div",{className:oe.a.right_menu,children:Object(J.jsxs)("div",{className:oe.a.content,children:[Object(J.jsx)("div",{className:oe.a.content_title,children:"\u0412\u0410\u0428\u0418 \u0420\u0410\u0411\u041e\u0427\u0418\u0415 \u041f\u0420\u041e\u0421\u0422\u0420\u0410\u041d\u0421\u0422\u0412\u0410"}),Object(J.jsxs)("div",{className:oe.a.all_boards,children:[Object(J.jsxs)("div",{className:oe.a.all_boards_header,children:[Object(J.jsx)("div",{className:oe.a.header_icon,children:this.props.profile?this.props.profile[0].memberCreator.initials:""}),Object(J.jsx)("div",{className:oe.a.header_title,children:"\u0410\u043a\u0442\u0438\u0432\u043d\u044b\u0435 \u0434\u043e\u0441\u043a\u0438"})]}),Object(J.jsxs)("div",{className:oe.a.all_boards_content,children:[this.props.boards.map((function(a){return Object(J.jsx)(de,{items:a,setBoardId:e.setBoardId})})),Object(J.jsx)("div",{className:oe.a.create,children:"\u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0434\u043e\u0441\u043a\u0443"})]})]})]})})]})})}}]),t}(c.Component),be=Object(b.b)((function(e){return{boards:R(e),profile:N(e)}}),(function(e){return{onFetchBoards:function(){return e(function(){var e=Object(S.a)(E.a.mark((function e(a,t){var n,c,s,r,i;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t(),c=f(n),s={method:"GET",headers:{Accept:"application/json"}},e.next=5,fetch(L("/1/members/me/boards?",c,!0),s);case 5:return r=e.sent,e.next=8,r.json();case 8:i=e.sent,a(k(i));case 10:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}())},onSelected:function(a){return e((t=a,{type:O.SET_SELECTED,payload:t}));var t}}}))(je),ue=t(25),pe=t.n(ue),Oe=function(e){Object(_.a)(t,e);var a=Object(d.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){var e=Object({NODE_ENV:"production",PUBLIC_URL:"/trello_thunk",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_DOMAIN:"https://api.trello.com",REACT_APP_API_KEY:"3444d04aec28c17cb97d3487e5548586",REACT_APP_APP_NAME:"webAcademy",REACT_APP_REDIRECT_URL:"https://sergmus.github.io/trello_thunk/oauth",REACT_APP_SCOPE:"read,write,account"}),a=e.REACT_APP_API_KEY,t=e.REACT_APP_APP_NAME,n=e.REACT_APP_REDIRECT_URL,c=e.REACT_APP_SCOPE,s="https://trello.com/1/authorize?return_url=".concat(n,"&expiration=1day&name=").concat(t,"&scope=").concat(c,"&response_type=token&key=").concat(a);return Object(J.jsxs)("div",{className:pe.a.login,children:[Object(J.jsxs)("div",{className:pe.a.logo_container,children:[Object(J.jsx)("span",{className:pe.a.btn_span,children:Object(J.jsx)("i",{className:"fab fa-trello"})}),Object(J.jsx)("span",{className:pe.a.btn_span_name,children:"Trello"})]}),Object(J.jsx)("a",{href:s,className:pe.a.login_send,children:"Login with trello account"}),Object(J.jsxs)("ul",{children:[Object(J.jsx)("li",{children:"You are not Logged in!"}),Object(J.jsx)("li",{children:"Please, login"})]})]})}}]),t}(c.Component),he=function(e){return Object(J.jsx)("h2",{children:"Not Found!"})},me=t(8),fe=t.n(me),xe=function(e){var a=Object(b.c)((function(e){return e.auth.userProfile[4].memberCreator})),t=Object(c.useState)(a.username),n=Object(Y.a)(t,2),s=n[0],r=n[1];Object(c.useEffect)((function(){console.log("hi")}),[a]);return console.log(a),Object(J.jsxs)("div",{className:fe.a.profileContainer,children:[Object(J.jsx)("div",{className:fe.a.tabe_panel_header,children:Object(J.jsx)("div",{className:fe.a.tabe_panel_header_wrapper,children:Object(J.jsxs)("div",{className:fe.a.tabe_panel_header_content,children:[Object(J.jsx)("div",{className:fe.a.logo_wrapp,children:a.initials}),Object(J.jsxs)("div",{className:fe.a.nickname_wrapp,children:[Object(J.jsx)("span",{className:fe.a.nickname_wrapp_span1,children:a.fullName}),Object(J.jsx)("span",{className:fe.a.nickname_wrapp_span2,children:"@"+a.username})]})]})})}),Object(J.jsx)("div",{className:fe.a.tabe_panel_nav}),Object(J.jsx)("div",{className:fe.a.tabe_panel_main,children:Object(J.jsxs)("div",{className:fe.a.tabe_panel_main_container,children:[Object(J.jsx)("img",{src:"https://a.trellocdn.com/prgb/dist/images/member-home/taco-privacy.eff3d701a9c3a71105ea.svg",alt:"picture1",className:fe.a.image_content}),Object(J.jsx)("h3",{style:{color:"#172B4D",marginBottom:0},children:"\u041e \u043d\u0430\u0441"}),Object(J.jsx)("hr",{className:fe.a.hr}),Object(J.jsxs)("form",{onSubmit:function(e){e.preventDefault()},className:fe.a.form_container,children:[Object(J.jsxs)("label",{className:fe.a.label,children:["\u0418\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f:",Object(J.jsx)("input",{type:"text",value:s,onChange:function(e){r(e.target.value)},className:fe.a.inp})]}),Object(J.jsxs)("label",{className:fe.a.label,children:["\u041e \u0441\u0435\u0431\u0435:",Object(J.jsx)("textarea",{className:fe.a.inp})]}),Object(J.jsx)("input",{type:"submit",value:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c",className:fe.a.submitBtn})]})]})})]})};!function(e){e.HOME="/",e.LOGIN="/login",e.DASHBOARD="/dashboard",e.NOT_FOUND="/404",e.USER_PROFILE="/profile",e.OAUTH="/oauth",e.PROFILE="/profile",e.BOARD="/board"}(M||(M={}));var Ne=[{path:M.LOGIN,render:function(e){return Object(J.jsx)(Oe,Object(i.a)({},e))},title:"Login"},{path:M.DASHBOARD,render:function(e){return Object(J.jsx)(be,Object(i.a)({},e))},title:"Dashboard",isProtected:!0},{path:M.PROFILE,render:function(e){return Object(J.jsx)(xe,Object(i.a)({},e))},title:"Profile",isProtected:!0},{path:M.HOME,exact:!0,isHidden:!0,render:function(e){return Object(J.jsx)(j.a,{to:M.DASHBOARD})}},{path:M.NOT_FOUND,isHidden:!0,render:function(e){return Object(J.jsx)(he,Object(i.a)({},e))}},{path:M.BOARD,render:function(e){return Object(J.jsx)(re,Object(i.a)({},e))},title:"board",isProtected:!0}],ve=Object(b.b)(void 0,(function(e){return{onSetToken:function(a){return e(function(e){return{type:n.SET_TOKEN,payload:e}}(a))},onSetProfile:function(a){return e(function(e){return function(){var a=Object(S.a)(E.a.mark((function a(t){var n,c;return E.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,fetch("".concat("https://api.trello.com/1/members/me/","actions/?fields=avatarHash,fullName,initials,username&key=").concat("3444d04aec28c17cb97d3487e5548586","&token=").concat(e));case 2:return n=a.sent,a.next=5,n.json();case 5:c=a.sent,t(T(c));case 7:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}(a))}}}))((function(e){var a=e.location.hash,t=e.onSetToken,n=e.onSetProfile,s=a.split("=")[1];return Object(c.useEffect)((function(){return t&&t(s)})),Object(c.useEffect)((function(){return n&&n(s)})),Object(J.jsx)(j.a,{to:M.DASHBOARD})})),Ee=t(41),Se=["render","isAuthenticated"],Te=Object(b.b)((function(e){return{isAuthenticated:x(e)}}))((function(e){var a=e.render,t=e.isAuthenticated,n=Object(Ee.a)(e,Se);return Object(J.jsx)(j.b,Object(i.a)(Object(i.a)({},n),{},{render:function(e){return t?a(e):Object(J.jsx)(j.a,{to:{pathname:"/login",state:{from:e.location}}})}}))})),Ae=t(7),Ce=t.n(Ae),ge=function(e){var a=Object(b.c)((function(e){return e.auth.userProfile?e.auth.userProfile[0].memberCreator:void 0}));return Object(J.jsxs)("header",{className:Ce.a.header,children:[Object(J.jsxs)("div",{className:Ce.a.header_container,children:[Object(J.jsxs)("div",{className:Ce.a.left_menu,children:[Object(J.jsx)("div",{className:Ce.a.btn_menu,children:Object(J.jsx)(r.c,{to:"/",activeClassName:Ce.a.active,style:{textDecoration:"none"},children:Object(J.jsx)("span",{className:Ce.a.btn_span,children:Object(J.jsx)("i",{className:"fas fa-th"})})})}),Object(J.jsx)("div",{className:Ce.a.btn_menu,children:Object(J.jsx)(r.c,{to:M.LOGIN,activeClassName:Ce.a.active,style:{textDecoration:"none"},children:Object(J.jsx)("span",{className:Ce.a.btn_span,children:Object(J.jsx)("i",{className:"fas fa-home"})})})}),Object(J.jsx)("div",{className:Ce.a.btn_menu,children:Object(J.jsxs)(r.c,{to:M.DASHBOARD,activeClassName:Ce.a.active,style:{display:"flex",textDecoration:"none"},children:[Object(J.jsx)("span",{className:Ce.a.btn_span,children:Object(J.jsx)("i",{className:"fab fa-trello"})}),Object(J.jsx)("span",{className:Ce.a.btn_span_name,children:"\u0414\u043e\u0441\u043a\u0438"})]})})]}),Object(J.jsx)("div",{className:Ce.a.center_menu,children:Object(J.jsxs)(r.c,{to:M.HOME,activeClassName:Ce.a.active,style:{display:"flex",textDecoration:"none"},children:[Object(J.jsx)("span",{className:Ce.a.btn_span,style:{color:"#80B4D3"},children:Object(J.jsx)("i",{className:"fab fa-trello"})}),Object(J.jsx)("span",{className:Ce.a.btn_span_name,style:{fontSize:"20px",fontWeight:"bold",color:"#80B4D3"},children:"Trello"})]})}),Object(J.jsxs)("div",{className:Ce.a.right_menu,children:[a?Object(J.jsx)("button",{className:Ce.a.logout,onClick:e.logOut,children:"\u0412\u044b\u0439\u0442\u0438"}):null,Object(J.jsx)("div",{className:Ce.a.btn_menu_logo,children:Object(J.jsx)(r.c,{to:M.PROFILE,activeClassName:Ce.a.active,style:{textDecoration:"none"},children:Object(J.jsx)("span",{className:Ce.a.user_logo,children:a?a.initials:"-"})})})]})]}),Ne.map((function(e,a){return e.isHidden?null:Object(J.jsx)(r.b,{to:e.path,children:e.title},a)}))]})},Pe=function(e){Object(_.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=a.call.apply(a,[this].concat(s))).logOut=function(){e.redirectToLogin()},e.renderRoute=function(e,a){return e.isProtected?Object(c.createElement)(Te,Object(i.a)(Object(i.a)({},e),{},{key:a,render:function(){return e.render()}})):Object(J.jsx)(j.b,{exact:e.exact,path:e.path,render:function(a){return e.render(Object(i.a)({},a))}},a)},e}return Object(l.a)(t,[{key:"redirectToLogin",value:function(){this.props.history.push(M.LOGIN)}},{key:"redirectToDashboard",value:function(){this.props.history.push(M.DASHBOARD)}},{key:"renderContent",value:function(){return Object(J.jsx)("main",{children:Object(J.jsxs)(j.d,{children:[Ne.map(this.renderRoute),Object(J.jsx)(j.b,{path:M.OAUTH,render:function(e){return Object(J.jsx)(ve,Object(i.a)({},e))}}),Object(J.jsx)(j.a,{to:M.NOT_FOUND})]})})}},{key:"render",value:function(){return Object(J.jsxs)("div",{children:[Object(J.jsx)(ge,{logOut:this.logOut}),this.renderContent()]})}}]),t}(c.Component),De=Object(j.g)(Pe),ye=Object(b.b)(void 0,(function(e){return{logOut:function(){return e({type:n.RESET_STATE})}}}))(De),Le=function(){var e=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||u.c,a=Object(u.b)({auth:m,boards:g,lists:I,cards:K});return Object(u.d)(a,void 0,e(Object(u.a)(H.a)))}();s.render(Object(J.jsx)(b.a,{store:Le,children:Object(J.jsx)(r.a,{children:Object(J.jsx)(ye,{})})}),document.querySelector("#root"))},6:function(e,a,t){e.exports={container_root:"Dashboard_container_root__oL_yB",container_sticky:"Dashboard_container_sticky__3LS-U",left_menu:"Dashboard_left_menu__1Igzt",navbar:"Dashboard_navbar__1htv9",tab_section:"Dashboard_tab_section__8l5ko",span_icon:"Dashboard_span_icon__VZmkx",item:"Dashboard_item__1Z3OR",right_menu:"Dashboard_right_menu__1KoxW",content:"Dashboard_content__3F-02",content_title:"Dashboard_content_title__aeOlF",all_boards:"Dashboard_all_boards__w5Kih",all_boards_header:"Dashboard_all_boards_header__MStap",header_icon:"Dashboard_header_icon__7DFh7",header_title:"Dashboard_header_title__3WVmd",all_boards_content:"Dashboard_all_boards_content__23EID",create:"Dashboard_create__3CtYK"}},7:function(e,a,t){e.exports={header:"Header_header__3N8j3",header_container:"Header_header_container__1ro8a",left_menu:"Header_left_menu__2gg1H",center_menu:"Header_center_menu__1CIUY",right_menu:"Header_right_menu__1OI-K",btn_menu:"Header_btn_menu__27jXd",btn_span:"Header_btn_span__3kfp0",btn_span_name:"Header_btn_span_name__1Xwm9",btn_menu_logo:"Header_btn_menu_logo__1K9If",user_logo:"Header_user_logo__DEF9j",logout:"Header_logout__1JB2V"}},8:function(e,a,t){e.exports={profileContainer:"Profile_profileContainer__37KhW",tabe_panel_header:"Profile_tabe_panel_header__2AwPP",tabe_panel_header_wrapper:"Profile_tabe_panel_header_wrapper__WYKqH",tabe_panel_header_content:"Profile_tabe_panel_header_content__2qlWI",logo_wrapp:"Profile_logo_wrapp__1lCxW",nickname_wrapp:"Profile_nickname_wrapp__2TA5O",nickname_wrapp_span1:"Profile_nickname_wrapp_span1__1kpHO",nickname_wrapp_span2:"Profile_nickname_wrapp_span2__3u7f3",tabe_panel_main:"Profile_tabe_panel_main__2flh7",tabe_panel_main_container:"Profile_tabe_panel_main_container__3lqWx",image_content:"Profile_image_content__2gzpr",hr:"Profile_hr__2N96t",form_container:"Profile_form_container__1hUzE",label:"Profile_label__1oDoR",inp:"Profile_inp__36maA",submitBtn:"Profile_submitBtn__3qEhe"}}},[[57,1,2]]]);
//# sourceMappingURL=main.a9361a29.chunk.js.map