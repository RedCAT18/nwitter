(this.webpackJsonpnwitter=this.webpackJsonpnwitter||[]).push([[0],{32:function(e,t,a){e.exports=a(50)},49:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(29),l=a.n(c),u=a(5),i=a(15),o=a(2),s=a(3),m=a.n(s),p=a(9),f=a(18);a(38),a(40),a(51);f.initializeApp({apiKey:"AIzaSyBxGDpoDCvkch_-ARosJoAVcAihC3N_m4E",authDomain:"nwitter-e63ed.firebaseapp.com",databaseURL:"https://nwitter-e63ed.firebaseio.com",projectId:"nwitter-e63ed",storageBucket:"nwitter-e63ed.appspot.com",messagingSenderId:"231422130785",appId:"1:231422130785:web:40f60627845c7267588820"});var d=f,E=f.auth(),b=f.firestore(),h=f.storage(),v=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),i=Object(u.a)(l,2),o=i[0],s=i[1],f=Object(n.useState)(!0),d=Object(u.a)(f,2),b=d[0],h=d[1],v=Object(n.useState)(""),g=Object(u.a)(v,2),y=g[0],w=g[1],O=function(e){var t=e.target,a=t.name,n=t.value;"email"===a?c(n):"password"===a&&s(n)},j=function(){var e=Object(p.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!b){e.next=8;break}return e.next=5,E.createUserWithEmailAndPassword(a,o);case 5:n=e.sent,e.next=11;break;case 8:return e.next=10,E.signInWithEmailAndPassword(a,o);case 10:n=e.sent;case 11:console.log(n),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),w(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:j,className:"container"},r.a.createElement("input",{type:"text",name:"email",placeholder:"Email",value:a,required:!0,onChange:O,className:"authInput"}),r.a.createElement("input",{type:"password",name:"password",placeholder:"Password",value:o,required:!0,onChange:O,className:"authInput"}),r.a.createElement("input",{type:"submit",value:b?"Sign Up":"Sign In",className:"authInput authSubmit"}),y&&r.a.createElement("span",{className:"authError"},y)),r.a.createElement("span",{onClick:function(){h((function(e){return!e}))},className:"authSwitch"},b?"Sign In":"Sign Up"))},g=a(6),y=a(17),w=function(){var e=function(){var e=Object(p.a)(m.a.mark((function e(t){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(a=t.target.name)?n=new d.auth.GoogleAuthProvider:"github"===a&&(n=new d.auth.GithubAuthProvider),e.next=4,E.signInWithPopup(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"authContainer"},r.a.createElement(g.a,{icon:y.c,color:"#04aaff",size:"3x",style:{marginBottom:30}}),r.a.createElement(v,null),r.a.createElement("div",{className:"authBtns"},r.a.createElement("button",{onClick:e,name:"google",className:"authBtn"},"Continue with Google ",r.a.createElement(g.a,{icon:y.b})),r.a.createElement("button",{onClick:e,name:"github",className:"authBtn"},"Continue with Github ",r.a.createElement(g.a,{icon:y.a}))))},O=a(31),j=a(12),x=function(e){var t=e.nweetObj,a=e.isOwner,c=Object(n.useState)(!1),l=Object(u.a)(c,2),i=l[0],o=l[1],s=Object(n.useState)(t.text),f=Object(u.a)(s,2),d=f[0],E=f[1],v=function(){var e=Object(p.a)(m.a.mark((function e(){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=window.confirm("Are you sure you want to delete this?"),console.log(a),!a){e.next=7;break}return e.next=5,b.doc("nweets/".concat(t.id)).delete();case 5:return e.next=7,h.refFromURL(t.attachmentUrl).delete();case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){o((function(e){return!e}))},w=function(){var e=Object(p.a)(m.a.mark((function e(a){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),console.log(t,d),e.next=4,b.doc("nweets/".concat(t.id)).update({text:d});case 4:o(!1);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"nweet"},i?r.a.createElement(r.a.Fragment,null,a&&r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:w,className:"container nweetEdit"},r.a.createElement("input",{type:"text",placeholder:t.text,value:d,onChange:function(e){var t=e.target.value;E(t)},className:"formInput",required:!0}),r.a.createElement("input",{type:"submit",value:"Update",className:"formBtn"})),r.a.createElement("span",{onClick:y,className:"formBtn cancelBtn"},"Cancel"))):r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,t.text),t.attachmentUrl&&r.a.createElement("img",{src:t.attachmentUrl,alt:t.text}),a&&r.a.createElement("div",{className:"nweet__actions"},r.a.createElement("span",{onClick:v},r.a.createElement(g.a,{icon:j.d})),r.a.createElement("span",{onClick:y},r.a.createElement(g.a,{icon:j.a})))))},N=a(53),S=function(e){var t=e.userObj,a=Object(n.useState)(""),c=Object(u.a)(a,2),l=c[0],i=c[1],o=Object(n.useState)(""),s=Object(u.a)(o,2),f=s[0],d=s[1],E=function(){var e=Object(p.a)(m.a.mark((function e(a){var n,r,c,u;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==l){e.next=2;break}return e.abrupt("return");case 2:if(a.preventDefault(),n="",""===f){e.next=12;break}return r=h.ref().child("".concat(t.uid,"/").concat(Object(N.a)())),e.next=8,r.putString(f,"data_url");case 8:return c=e.sent,e.next=11,c.ref.getDownloadURL();case 11:n=e.sent;case 12:return u={text:l,createdAt:Date.now(),creatorId:t.uid,attachmentUrl:n},e.next=15,b.collection("nweets").add(u);case 15:i(""),d("");case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("form",{onSubmit:E,className:"factoryForm"},r.a.createElement("div",{className:"factoryInput__container"},r.a.createElement("input",{className:"factoryInput__input",type:"text",value:l,onChange:function(e){var t=e.target.value;i(t)},placeholder:"what's on your mind?",maxLength:120}),r.a.createElement("input",{type:"submit",value:"\u2192",className:"factoryInput__arrow"})),r.a.createElement("label",{for:"attach-file",className:"factoryInput__label"},r.a.createElement("span",null,"Add Photo"),r.a.createElement(g.a,{icon:j.b})),r.a.createElement("input",{id:"attach-file",type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],a=new FileReader;a.onloadend=function(e){var t=e.currentTarget.result;d(t)},a.readAsDataURL(t)},style:{opacity:0}}),f&&r.a.createElement("div",{className:"factoryForm__attachment"},r.a.createElement("img",{src:f,alt:"preview",style:{backgroundImage:f}}),r.a.createElement("div",{className:"factoryForm__clear",onClick:function(){return d("")}},r.a.createElement("span",null,"Remove"),r.a.createElement(g.a,{icon:j.c}))))},k=function(e){var t=e.userObj,a=Object(n.useState)([]),c=Object(u.a)(a,2),l=c[0],i=c[1];return Object(n.useEffect)((function(){b.collection("nweets").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(O.a)({id:e.id},e.data())}));i(t)}))}),[]),r.a.createElement("div",{className:"contianer"},r.a.createElement(S,{userObj:t}),r.a.createElement("div",{style:{marginTop:30}},l.map((function(e){return r.a.createElement(x,{key:e.id,nweetObj:e,isOwner:e.creatorId===t.uid})}))))},I=function(e){var t=e.refreshUser,a=e.userObj,c=Object(n.useState)(a.displayName),l=Object(u.a)(c,2),i=l[0],s=l[1],f=Object(o.g)(),d=function(){var e=Object(p.a)(m.a.mark((function e(n){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),a.displayName===i){e.next=4;break}return e.next=4,a.updateProfile({displayName:i});case 4:t();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(p.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.collection("nweets").where("creatorId","==",a.uid).orderBy("createdAt").get();case 2:t=e.sent,console.log(t.docs.map((function(e){return e.data()})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){h()}),[]),r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:d,className:"profileForm"},r.a.createElement("input",{type:"text",onChange:function(e){var t=e.target.value;s(t)},placeholder:a.displayName,value:i,autoFocus:!0,className:"formInput"}),r.a.createElement("input",{type:"submit",value:"Update Profile",className:"formBtn",style:{marginTop:10}})),r.a.createElement("span",{onClick:function(){E.signOut(),f.push("/")},className:"formBtn cancelBtn logOut"},"Sign out"))},C=function(e){var t=e.userObj;return r.a.createElement("nav",null,r.a.createElement("ul",{style:{display:"flex",justifyContent:"center",marginTop:50}},r.a.createElement("li",null,r.a.createElement(i.b,{to:"/",style:{marginRight:10}},r.a.createElement(g.a,{icon:y.c,color:"#04AAFF",size:"2x"}))),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/profile",style:{marginLeft:10,display:"flex",flexDirection:"column",alighItems:"center",fontSize:12}},r.a.createElement(g.a,{icon:j.e,color:"#04aaff",size:"2x"}),r.a.createElement("span",{style:{marginTop:10}},t.displayName?"".concat(t.displayName,"'s Profile"):"Profile")))))},U=function(e){var t=e.refreshUser,a=e.isLoggedIn,n=e.userObj;return r.a.createElement(i.a,null,a&&r.a.createElement(C,{userObj:n}),r.a.createElement(o.d,null,a?r.a.createElement("div",{style:{maxWidth:890,width:"100%",margin:"0 auto",marginTop:80,display:"flex",justifyContent:"center"}},r.a.createElement(o.b,{exact:!0,path:"/"},r.a.createElement(k,{userObj:n})),r.a.createElement(o.b,{exact:!0,path:"/profile"},r.a.createElement(I,{refreshUser:t,userObj:n})),r.a.createElement(o.a,{from:"*",to:"/"})):r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{exact:!0,path:"/"},r.a.createElement(w,null)),r.a.createElement(o.a,{from:"*",to:"/"}))))};var A=function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(null),i=Object(u.a)(l,2),o=i[0],s=i[1];return Object(n.useEffect)((function(){E.onAuthStateChanged((function(e){s(e?{displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}}:null),c(!0)}))}),[]),r.a.createElement(r.a.Fragment,null,a?r.a.createElement(U,{userObj:o,refreshUser:function(){var e=E.currentUser;s({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}})},isLoggedIn:Boolean(o)}):"Initializing...")};a(49);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(A,null)),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.d793ce3a.chunk.js.map