"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[573],{8573:function(t,e,s){s.r(e),s.d(e,{default:function(){return E}});var n=s(8683),o=s(5671),r=s(3144),i=s(136),u=s(5716),a=s(2791),l="Profile_section__ai+0H",c="Profile_section__profile__LXolN",f="Post_avatar__tX11S",p=s(184),d=function(t){return(0,p.jsxs)("div",{children:[(0,p.jsx)("img",{src:"https://avatars.githubusercontent.com/u/85486375?v=4",alt:"avatar",className:f}),(0,p.jsx)("div",{children:t.postInfo.user}),(0,p.jsx)("div",{children:t.postInfo.text})]})},h=function(t){console.log("RENDER");var e=t.posts.map((function(t){return(0,p.jsx)(d,{postInfo:t})}));return(0,p.jsx)("div",{children:e})},x=a.memo(h),j=s(885),v="ProfileInfo_avatar__YhCBy",m="ProfileInfo_profile__info__-WZ-B",P=function(t){var e,s=(0,a.useState)(!1),n=(0,j.Z)(s,2),o=n[0],r=n[1],i=(0,a.useState)(t.status),u=(0,j.Z)(i,2),l=u[0],c=u[1];(0,a.useEffect)((function(){c(t.status)}),[t.status]);return(0,p.jsxs)("div",{className:m,children:[(0,p.jsx)("div",{children:(0,p.jsx)("img",{src:null!==(e=t.profile.photos)&&void 0!==e&&e.small?t.profile.photos.small:"https://avatars.githubusercontent.com/u/85486375?v=4",alt:"avatar",className:v})}),o?(0,p.jsx)("input",{type:"text",autoFocus:!0,onBlur:function(){r(!1),t.setStatusThunk(l)},defaultValue:l,onChange:function(t){c(t.currentTarget.value)}}):(0,p.jsx)("div",{onDoubleClick:function(){r(!0)},children:l}),(0,p.jsx)("div",{className:"profile-description",children:(0,p.jsxs)("ul",{children:[(0,p.jsx)("li",{children:t.profile.fullName}),(0,p.jsx)("li",{children:t.profile.userId}),(0,p.jsx)("li",{children:t.profile.aboutMe})]})})]})},_=s(6139),g=s(704),k=s(9978),S=s(137),T=function(t){return(0,p.jsx)("div",{children:(0,p.jsx)(Z,{onSubmit:function(e){t.addNewPostText(e.post)}})})},Z=(0,g.Z)({form:"post"})((function(t){var e=t.handleSubmit;return(0,p.jsxs)("form",{onSubmit:e,children:[(0,p.jsx)(_.Z,{component:S.S,name:"post",validate:[k.C6,k.Ei],placeholder:"Post text..."}),(0,p.jsx)("button",{children:"Send"})]})})),N=function(t){return(0,p.jsx)("section",{className:l,children:(0,p.jsxs)("div",{className:c,children:[(0,p.jsx)(P,{profile:t.profile,status:t.status,setStatusThunk:t.setStatusThunk}),(0,p.jsx)(T,{newPost:t.newPost,addNewPostText:t.addNewPostText}),(0,p.jsx)(x,{posts:t.posts})]})})},b=s(2355),w=s(6871),I=s(4802),C=s(2793),y=s(7781),B=function(t){(0,i.Z)(s,t);var e=(0,u.Z)(s);function s(){return(0,o.Z)(this,s),e.apply(this,arguments)}return(0,r.Z)(s,[{key:"componentDidMount",value:function(){var t=this.props.router.params.userId||this.props.authId;this.props.getProfileThunk(t),this.props.getStatusThunk(t)}},{key:"render",value:function(){return(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(N,(0,n.Z)({},this.props))})}}]),s}(a.Component),E=(0,y.qC)((0,I.$j)((function(t){return{newPost:t.profilePage.newPost,posts:t.profilePage.posts,profile:t.profilePage.profile,status:t.profilePage.status,authId:t.auth.id}}),{addNewPostText:b.Zr,getProfileThunk:b.VB,getStatusThunk:b.$b,setStatusThunk:b.oI}),(function(t){return function(e){var s=(0,w.TH)(),o=(0,w.s0)(),r=(0,w.UO)();return(0,p.jsx)(t,(0,n.Z)((0,n.Z)({},e),{},{router:{location:s,navigate:o,params:r}}))}}),C.P)(B)},2793:function(t,e,s){s.d(e,{P:function(){return a}});var n=s(8683),o=(s(2791),s(6871)),r=s(4802),i=s(184),u=function(t){return{isAuth:t.auth.isAuth}};function a(t){return(0,r.$j)(u)((function(e){return e.isAuth?(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(t,(0,n.Z)({},e))}):(0,i.jsx)(o.Fg,{to:"/login"})}))}}}]);
//# sourceMappingURL=573.a4c20537.chunk.js.map