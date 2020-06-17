(this.webpackJsonpbuildforsdgs=this.webpackJsonpbuildforsdgs||[]).push([[0],{14:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a(2),s=a(5),i=a(4),r=a(3),l=a(0),u=a.n(l),c=a(7),p=a.n(c),d=[{option:"All of the time",value:4,isSelected:!1},{option:"Most of the time",value:3,isSelected:!1},{option:"Some of the time",value:2,isSelected:!1},{option:"A little of the time",value:1,isSelected:!1},{option:"None of the time",value:0,isSelected:!1}],h={intro:{instructions:["Your consultant will soon be with you. As an head start, kindly answer the following questions to know how we may help you better.","The following questions ask about how you have been feeling during the past 30 days. For each question, please click the option that best describes how often you had this feeling."],buttonText:"Begin Assessment"},questions:[{title:"Hello!",text:["Your consultant will soon be with you. As an head start, kindly answer the following questions to know how we may help you better.","The following questions ask about how you have been feeling during the past 30 days. For each question, please click the option that best describes how often you had this feeling. The following questions ask about how you have been feeling during the past 30 days. For each question, please click the option that best describes how often you had this feeling."],keyword:null,options:[{option:"Begin Assessment",value:null,isSelected:!0}]},{title:"Question",text:"During the past 30 days, about how often did you feel nervous?",keyword:"nervous",options:d},{title:"Question",text:"During the past 30 days, about how often did you feel hopeless?",keyword:"hopeless",options:d},{title:"Question",text:"During the past 30 days, about how often did you feel restless or fidgety?",keyword:"restless or fidgety",options:d},{title:"Question",text:"During the past 30 days, about how often did you feel so depressed that nothing could cheer you up?",keyword:"so depressed that nothing could cheer you up",options:d},{title:"Question",text:"During the past 30 days, about how often did you feel that everything was an effort?",keyword:"that everything was an effort",options:d},{title:"Question",text:"During the past 30 days, about how often did you feel worthless?",keyword:"worthless",options:d},{title:"All Done",text:["Thank you for completing the initial screening.","We'll now link you up with a consultant. Click the finish button to proceed."],keyword:null,options:[{option:"Finish",value:null,isSelected:!0}]}]},g=function(e){Object(i.a)(a,e);var t=Object(r.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return u.a.createElement("nav",{id:"buildforsdgs-nav"},u.a.createElement("div",{className:"buildforsdgs-nav-brand"},u.a.createElement("a",{href:"/",class:"buildforsdgs-brand-link text-dark font-weight-bold"},"Forethought")),u.a.createElement("div",{className:"buildforsdgs-nav-links"},u.a.createElement("a",{href:"/about",className:"nav-link"},"About"),u.a.createElement("a",{href:"/emergency"},u.a.createElement("span",{class:"material-icons"},"call")," Emergency"),u.a.createElement("a",{href:"#",className:"nav-link"},"End Screening")))}}]),a}(u.a.Component),f=a(8),m={valuesArray:[],result:null},b=m.valuesArray,v=function(e){Object(i.a)(a,e);var t=Object(r.a)(a);function a(e){var o;return Object(n.a)(this,a),(o=t.call(this,e)).onInteractiveButtonClick=function(){var e;(o.props.pageNumber>0&&o.props.pageNumber<7&&(b[o.props.pageNumber-1]=o.props.data.value),o.props.pageNumber>6)&&((e=console).log.apply(e,["values: "].concat(Object(f.a)(b))),m.result=b.reduce((function(e,t){return e+t})),console.log("result: ",m.result),fetch("/api/test",{method:"POST",body:JSON.stringify(m.result)}).then((function(e){console.log(e),window.location.replace("/users/connect")})).catch((function(e){console.log(e),window.location.replace("/")})));o.props.onClick(),o.setState({value:o.props.data.value,isSelected:!0})},o.state={value:null,isSelected:!1},o.style={color:"white",backgroundColor:"var(--buildforsdgs-primary-color)",boxShadow:"0px 1px 3px rgba(0, 0, 0, 0.1)"},o}return Object(o.a)(a,[{key:"render",value:function(){return u.a.createElement("button",{className:"buildforsdgs-question-option",style:this.props.isSelectedInParent?this.style:{},onClick:this.onInteractiveButtonClick.bind(this)},this.props.data.option," ")}}]),a}(u.a.Component),y=function(e){Object(i.a)(a,e);var t=Object(r.a)(a);function a(e){var o;return Object(n.a)(this,a),(o=t.call(this,e)).setOptionState=function(e,t,a){o.optionState=Array(t.length).fill(!1),o.optionState[e]=!0,o.allOptionStates[a]=o.optionState,o.setState({allOptionStates:o.allOptionStates}),o.props.onClick()},o.getOptionState=function(e){var t=o.state.allOptionStates[o.props.pageNumber];return console.log("pageNumber",o.props.pageNumber,"optionState: ",t),t[e]},o.optionState=Array(o.props.data.length).fill(!1),o.allOptionStates=Array(h.questions.length).fill(o.optionState),o.state={allOptionStates:o.allOptionStates},o.getOptionState.bind(Object(s.a)(o)),o.setOptionState.bind(Object(s.a)(o)),o}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t=this.props.data,a=t.map((function(a){return u.a.createElement(v,{key:t.indexOf(a).toString(),data:a,onClick:function(){return e.setOptionState(t.indexOf(a),t,e.props.pageNumber)},pageNumber:e.props.pageNumber,isSelectedInParent:e.getOptionState(t.indexOf(a))})}));return u.a.createElement("div",{className:"question-options-div"},a)}}]),a}(u.a.Component),w=function(e){Object(i.a)(a,e);var t=Object(r.a)(a);function a(e){var o;return Object(n.a)(this,a),(o=t.call(this,e)).setAnswered=function(){o.setState({isAnswered:!0}),o.props.onClick()},o.state={value:null,isAnswered:!1},o}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t=this.props.questionData.keyword,a=this.props.questionData,n="",o="";0===this.props.pageNumber||this.props.pageNumber>6?(o=u.a.createElement("h2",{className:"buildforsdgs-question-header"},a.title),n=a.text.map((function(e){return u.a.createElement("p",{className:"buildforsdgs-question-text",key:e.toString(),style:{textAlign:"start"}},e)}))):(o=u.a.createElement("h2",{className:"buildforsdgs-question-header"},"Question ",this.props.pageNumber),n=u.a.createElement("p",{className:"buildforsdgs-question-text"},"During the past 30 days, about how often did you feel ",u.a.createElement("span",{className:"primary-color-text"},t),"?"));return u.a.createElement("div",{id:"buildforsdgs-screening-content"},u.a.createElement("div",{id:"header-div"},o),u.a.createElement("div",{id:"question-text-div"},n),u.a.createElement(y,{data:this.props.questionData.options,onClick:function(){return e.setAnswered()},pageNumber:this.props.pageNumber}))}}]),a}(u.a.Component),k=[1,2,3,4,5,6,7,8,9,10],O=function(e){Object(i.a)(a,e);var t=Object(r.a)(a);function a(e){var o;return Object(n.a)(this,a),(o=t.call(this,e)).state={style:{}},o}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return u.a.createElement("button",{className:"buildforsdgs-nav-button",style:this.props.style,onClick:function(){return e.props.onClick()},disabled:this.props.disabled},this.props.value)}}]),a}(u.a.Component),N=(u.a.Component,[]),S={color:"white",backgroundColor:"var(--buildforsdgs-primary-color)",boxShadow:"0px 1px 3px rgba(0, 0, 0, 0.1)"},E={color:"var(--buildforsdgs-primary-color)",backgroundColor:"transparent"},x={animation:"400ms ease-out animatePage"},A={animation:"400ms ease-out reverse animatePage"},j=function(e){Object(i.a)(a,e);var t=Object(r.a)(a);function a(e){var o;return Object(n.a)(this,a),(o=t.call(this,e)).comparePages=function(e){N.forEach((function(t){e===t&&(o.state.pageNumber>e?o.advancePage(e,A):o.advancePage(e,x))}))},o.state={pageNumber:0,style:E,pageAnimation:x,stateOfAllPages:[]},o.stateOfAllPages=Array(h.questions.length).fill(!1),o.stateOfAllPages[0]=!0,o.advancePage=o.advancePage.bind(Object(s.a)(o)),o.comparePages=o.comparePages.bind(Object(s.a)(o)),o}return Object(o.a)(a,[{key:"advancePage",value:function(e,t,a){var n=this;a&&(this.stateOfAllPages[e]=!0),this.setState({pageAnimation:t||x,pageNumber:e,stateOfAllPages:this.stateOfAllPages}),setTimeout((function(){n.setState({pageAnimation:{}})}),800)}},{key:"render",value:function(){for(var e=this,t=h.questions[this.state.pageNumber],a=[],n=function(t){a.push(u.a.createElement(O,{key:t.toString(),value:t,isCurrent:t===e.state.pageNumber,onClick:function(){return e.comparePages(t)},style:e.state.pageNumber===t?S:E,disabled:!e.state.stateOfAllPages[t]})),N.push(t)},o=1;o<h.questions.length;o++)n(o);return u.a.createElement("div",{id:"buildforsdgs-interactive-container"},u.a.createElement(g,null),u.a.createElement("main",null,u.a.createElement("div",{className:"container-fluid",style:this.state.pageAnimation},u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"offset-xl-2 col-xl-8 offset-lg-1 col-lg-10"},u.a.createElement(w,{questionData:t,pageNumber:this.state.pageNumber,onClick:function(){e.state.pageNumber<h.questions.length-1&&e.advancePage(e.state.pageNumber+1,x,!0)}}))))),u.a.createElement("section",{id:"bottom-navigation",className:"container-fluid"},u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"offset-lg-1 col-lg-10 bottom-navigation-group"},a))))}},{key:"componentDidUpdate",value:function(){}}]),a}(u.a.Component);p.a.render(u.a.createElement(j,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(14)}},[[9,1,2]]]);
//# sourceMappingURL=main.5b706814.chunk.js.map