(this["webpackJsonpgithub-app"]=this["webpackJsonpgithub-app"]||[]).push([[0],{20:function(e,t,a){e.exports=a(47)},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){e.exports=a.p+"static/media/web.533b2a54.config"},47:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(17),i=a.n(r),s=a(6),c=a.n(s),o=a(7),p=a(18),u=a(2),m=a(3),f=a(5),h=a(4),E=a(19),d=a.n(E),v=(a(43),function(e){Object(f.a)(a,e);var t=Object(h.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"profile-container"},n.a.createElement("div",{className:"name-input"},n.a.createElement("input",{onChange:this.props.handleChange,required:!0}),n.a.createElement("button",{onClick:function(){return e.props.handleClick(e.props.profileKey)}},"Get Profile")),n.a.createElement("div",{className:"image-div"},this.props.profile&&n.a.createElement("img",{src:this.props.profile.avatar_url,alt:"nothing available"})||n.a.createElement("h4",null,"No Profile Selected")),this.props.profile&&n.a.createElement("h2",null,this.props.profile.name),this.props.profile&&n.a.createElement("h3",null,this.props.profile.location),n.a.createElement("div",{className:"stats"},n.a.createElement("div",null,this.props.profile&&n.a.createElement("div",{className:"stat"},n.a.createElement("p",null,"Followers:"),n.a.createElement("p",null,this.props.profile.followers))),n.a.createElement("div",null,this.props.profile&&n.a.createElement("div",{className:"stat"},n.a.createElement("p",null,"Following:"),n.a.createElement("p",null,this.props.profile.following)))," ",n.a.createElement("div",null,this.props.profile&&n.a.createElement("div",{className:"stat"},n.a.createElement("p",null,"Repos:"),n.a.createElement("p",null,this.props.profile.public_repos)))))}}]),a}(l.Component)),b=(a(44),function(e){var t=e.profile1,a=e.profile2,l=function(e){return e.following+e.followers+e.public_repos},r=l(t),i=l(a);return n.a.createElement("div",{className:"tallies-container"},n.a.createElement("div",{className:"scores"},n.a.createElement("div",{className:"tally-container"},t&&n.a.createElement("p",null,t.login),n.a.createElement("p",null,r)),n.a.createElement("div",{className:"tally-container"},a&&n.a.createElement("p",null,a.login),n.a.createElement("p",null,i))),n.a.createElement("div",{className:"winner blinking"},r>i?n.a.createElement("div",null,t.login," Wins!"):r<i?n.a.createElement("div",null,a.login," Wins!"):n.a.createElement("div",null,"Tie!")))}),g=(a(45),function(e){Object(f.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(u.a)(this,a);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={value:"",profile1:null,profile2:null},e.handleChange=function(t){return e.setState({value:t.target.value})},e.handleClick=function(){var t=Object(p.a)(c.a.mark((function t(a){var l,n,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.github.com/users/".concat(e.state.value),t.next=3,d()(n);case 3:r=t.sent,e.setState((l={},Object(o.a)(l,a,r.data),Object(o.a)(l,"value",""),l));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(m.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"app-container"},n.a.createElement("h1",{style:{margin:"25px 0 50px 0"}},"Github Profile App"),n.a.createElement("div",{className:"profiles-container"},n.a.createElement("div",{className:"app-profile"},n.a.createElement("p",null,"Enter First GitHub ID:"),n.a.createElement(v,{profileKey:"profile1",profile:this.state.profile1,handleClick:this.handleClick,handleChange:this.handleChange})),this.state.profile1&&n.a.createElement("div",{className:"vs-div"},"VS"),this.state.profile1&&n.a.createElement("div",{className:"app-profile"},n.a.createElement("p",null,"Enter Second GitHub ID:"),n.a.createElement(v,{profileKey:"profile2",profile:this.state.profile2,handleClick:this.handleClick,handleChange:this.handleChange}))),this.state.profile1&&this.state.profile2&&n.a.createElement(b,{profile1:this.state.profile1,profile2:this.state.profile2}))}}]),a}(n.a.Component));a(46);i.a.render(n.a.createElement(g,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.07012049.chunk.js.map