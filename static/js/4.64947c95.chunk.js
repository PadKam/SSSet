(this["webpackJsonpproject-piz"]=this["webpackJsonpproject-piz"]||[]).push([[4],{259:function(e,a,s){e.exports={dialogs:"Dialogs_dialogs__2G9z8",dialogsItems:"Dialogs_dialogsItems__3RQUn",messages:"Dialogs_messages__1fhRg",message:"Dialogs_message__3cRk7",newMessage:"Dialogs_newMessage__24rM7"}},260:function(e,a,s){e.exports={message:"Message_message__2cmFV",iKing:"Message_iKing__25yRc",Holop:"Message_Holop__q8FCF"}},261:function(e,a,s){e.exports={dialog:"DialogsItem_dialog__3IRNy",active:"DialogsItem_active__3g4lF"}},268:function(e,a,s){"use strict";s.r(a);var t=s(0),n=s.n(t),i=s(259),r=s.n(i),o=s(260),c=s.n(o),l=function(e){return n.a.createElement("div",{className:"".concat(c.a.message," ").concat(1==e.idUser?c.a.iKing:c.a.Holop)},n.a.createElement("img",{src:e.imgAvatarUrl}),e.message)},m=s(261),g=s.n(m),d=s(9),u=function(e){var a="/dialogs/"+e.id;return n.a.createElement("div",{className:"".concat(g.a.dialog," ").concat(g.a.active)},n.a.createElement("img",{src:e.imgAvatarUrl}),n.a.createElement(d.b,{to:a},e.name))},_=s(257),v=s(256),f=function(e){return e?void 0:"Field is required"},p=s(55),E=function(e){return e&&e.length>30?"Max length 30":void 0},b=Object(v.a)({form:"dialogMessage"})((function(e){return n.a.createElement("form",{onSubmit:e.handleSubmit},n.a.createElement("div",null,n.a.createElement(_.a,{placeholder:"message",name:"message",component:p.b,validate:[f,E]})),n.a.createElement("div",null,n.a.createElement("button",null,"Add")))})),M=function(e){var a=e.messagesPage.dialogsDate.map((function(e){return n.a.createElement(u,{name:e.name,id:e.id,imgAvatarUrl:e.imgAvatarUrl,key:e.id})})),s=e.messagesPage.messagesDate.map((function(e){return n.a.createElement(l,{message:e.message,idUser:e.idUser,imgAvatarUrl:e.imgAvatarUrl,key:e.id})}));return n.a.createElement("div",{className:r.a.dialogs},n.a.createElement("div",{className:r.a.dialogsItems},a),n.a.createElement("div",{className:r.a.messages},s),n.a.createElement("div",{className:r.a.newMessage},n.a.createElement(b,{onSubmit:function(a){console.log(a),e.addMessageActionCreator(a.message)}})))},U=s(92),A=s(8),D=s(74),h=s(7);a.default=Object(h.d)(Object(A.b)((function(e){return{messagesPage:e.messagesPage}}),(function(e){return{addMessageActionCreator:function(a){e(Object(U.a)(a))}}})),D.a)(M)}}]);
//# sourceMappingURL=4.64947c95.chunk.js.map