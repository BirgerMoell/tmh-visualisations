(this["webpackJsonptmh-visualisations"]=this["webpackJsonptmh-visualisations"]||[]).push([[0],{124:function(t,e,a){},125:function(t,e,a){},128:function(t,e,a){},129:function(t,e,a){},140:function(t,e,a){"use strict";a.r(e);var n=a(1),r=a(42),i=a.n(r),c=(a(124),a(26)),s=a(9),o=a(30),l=a(10),d=a(2),u=a.p+"static/media/logo.10113774.svg",h=a.p+"static/media/Spectrogram-19thC.8446af6f.png",p=a.p+"static/media/tmh.18b3c121.png",x=(a(125),a(0));a.p,a.p;var j=a(5),g=a.n(j),b=a(17),m=(a(128),a(3)),f=[{id:1,name:"Tolvan Tolvansson",personalNumber:"19900101-xxxx",gender:"male",diagnosis:"Alzheimer",cognitiveProfile:{moca:27,speechPattern:1.23,pausePattern:2.26,languagePattern:3.7,drawingPattern:2.9,gazePattern:3.32,pupilPattern:3.2,heatPattern:2.9}},{id:2,name:"Tolvan Elvan",personalNumber:"19890101-xxxx",gender:"male",diagnosis:"Alzheimer",cognitiveProfile:{moca:23,speechPattern:1.22,pausePattern:2.26,languagePattern:3.7,drawingPattern:2.9,gazePattern:3.32,pupilPattern:3.2,heatPattern:2.7}},{id:3,name:"Tolvan Tio",personalNumber:"19880101-xxxx",gender:"male",diagnosis:"Alzheimer",cognitiveProfile:{moca:25,speechPattern:1.27,pausePattern:2.26,languagePattern:3.7,drawingPattern:2.9,gazePattern:3.32,pupilPattern:3.2,heatPattern:2.8}},{id:4,name:"Tolvan Nio",personalNumber:"19870101-xxxx",gender:"male",diagnosis:"Alzheimer",cognitiveProfile:{moca:24,speechPattern:1.82,pausePattern:2.26,languagePattern:3.7,drawingPattern:2.9,gazePattern:3.32,pupilPattern:3.2,heatPattern:2.2}},{id:5,name:"Tolvan \xe5tta",personalNumber:"19860101-xxxx",gender:"male",diagnosis:"Alzheimer",cognitiveProfile:{moca:22,speechPattern:1.23,pausePattern:2.26,languagePattern:3.7,drawingPattern:2.9,gazePattern:3.32,pupilPattern:3.2,heatPattern:2.7}}],v=function(){var t=Object(n.useState)(f[2]),e=Object(s.a)(t,2),a=e[0],r=e[1];return Object(x.jsxs)("div",{className:"Patient-view-container",children:[Object(x.jsx)("label",{for:"patient",children:"Choose a patient:"}),Object(x.jsx)("select",{onChange:function(t){return r(f[t.target.value-1])},name:"patient",id:"patient",children:f.map((function(t){return Object(x.jsx)("option",{value:t.id,children:t.personalNumber})}))}),Object(x.jsx)("div",{className:"Overview-grid-container",children:O(f,a)})]})},O=function(t,e){return Object.keys(e.cognitiveProfile).map((function(a){return Object(x.jsx)("div",{className:"Overview-grid-item",children:Object(x.jsxs)("p",{children:[a," ",P(t,e,a)," %"," "]})})}))},P=function(t,e,a){var n=function(t,e){t=t.sort();var a=0;t.forEach((function(t){e>=t&&a++}));var n=a/t.length;return console.log("perc is",n),100*n}(y(t,a),e.cognitiveProfile[a]);return console.log("the percent is",n),n},y=function(t,e){return Object.keys(t).map((function(a){return t[a].cognitiveProfile[e]}))};function N(t){var e=100,a=10,n=10,r=130,i=1200-e-a,c=800-n-r,s=m.h("#chart-area").append("svg").attr("width",i+e+a).attr("height",c+n+r).append("g").attr("transform","translate(".concat(e,", ").concat(n,")")),o=t.data&&t.data.value,l=t.data.x;console.log("the data is",t.data),console.log("the x value is",l);var d=t.data.y;s.append("text").attr("class","x axis-label").attr("x",i/2).attr("y",c+110).attr("font-size","28px").attr("text-anchor","middle").text(l),s.append("text").attr("class","y axis-label").attr("x",-c/2).attr("y",-60).attr("font-size","28px").attr("text-anchor","middle").attr("transform","rotate(-90)").text(d);var u=m.f().domain(o.map((function(t){return t[l]}))).range([0,i]).paddingInner(.3).paddingOuter(.2),h=m.g().domain([0,m.e(o,(function(t){return Number(t[d])}))]).range([0,c]),p=m.a(u);s.append("g").attr("class","x axis").attr("transform","translate(0, ".concat(c,")")).call(p).selectAll("text").attr("y","10").attr("text-align","center").attr("font-size","16px");var j=m.b(h).ticks(5).tickFormat((function(t){return t}));s.append("g").attr("class","y axis").call(j),m.d((function(){g(o)}),1e3);var g=function(t){if(t){var e=m.i().duration(750),a=s.selectAll("rect").data(t);a.exit().remove(),a.enter().append("rect").attr("fill","#fff").attr("y",h(0)).attr("height",0).merge(a).transition(e).attr("y",(function(t){return c-h(Number(t[d]))})).attr("x",(function(t){return u(t[l])})).attr("width",u.bandwidth).attr("height",(function(t){return h(Number(t[d]))})).attr("fill",(function(t){return"Healthy"===t.diagnose?"lightgreen":"MCI"===t.diagnose?"lightblue":"pink"}))}};return Object(x.jsx)("div",{id:"chart-area"})}var w=function(){var t=Object(n.useState)(),e=Object(s.a)(t,2),a=e[0],r=e[1],i=function(){var t=Object(b.a)(g.a.mark((function t(){var e;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"./data/biomarkers/diagnose_count.csv",t.next=3,m.c("./data/biomarkers/diagnose_count.csv");case 3:e=t.sent,console.log("the data is",console.log(JSON.stringify(e))),r({value:e,dataset:"diagnose_count",x:"diagnose",y:"count"}),console.log("the data is",e);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();Object(n.useEffect)((function(){a||i(),console.log("t")}));var c=function(){var t=Object(b.a)(g.a.mark((function t(e){var a,n,i;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a="./data/biomarkers/"+e+".csv",t.next=3,m.c(a);case 3:n=t.sent,i=o(e,n.columns),console.log("the labels are ",i),r({value:n,dataset:e,x:i.x,y:i.y});case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),o=function(t,e){return"result_biomarkers"===t?{x:e[3],y:e[4]}:{x:e[0],y:e[1]}};return Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)(v,{}),Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{for:"datasets",children:"Dataset"}),Object(x.jsxs)("select",{onChange:function(t){return c(t.target.value)},name:"dataset",id:"dataset",children:[Object(x.jsx)("option",{value:"",selected:!0,disabled:!0,hidden:!0,children:"Select dataset"}),Object(x.jsx)("option",{value:"result_biomarkers",children:"Result biomarkers"}),Object(x.jsx)("option",{value:"diagnose_count",children:"Diagnosis group"})]})]}),a&&a.value&&Object(x.jsx)(N,{data:a})]})};a(129);function k(t){var e=100,a=10,n=10,r=130,i=1200-e-a,c=800-n-r,s=m.h("#chart-area").append("svg").attr("width",i+e+a).attr("height",c+n+r).append("g").attr("transform","translate(".concat(e,", ").concat(n,")")),o=t.data&&t.data.value,l=(t.data&&t.data.dataset,t.data.x);console.log("the data is",t.data),console.log("the x value is",l);var d=t.data.y;s.append("text").attr("class","x axis-label").attr("x",i/2).attr("y",c+110).attr("font-size","28px").attr("text-anchor","middle").text(l),s.append("text").attr("class","y axis-label").attr("x",-c/2).attr("y",-60).attr("font-size","28px").attr("text-anchor","middle").attr("transform","rotate(-90)").text(d);var u=m.f().domain(o.map((function(t){return t[l]}))).range([0,i]).paddingInner(.3).paddingOuter(.2),h=m.g().domain([0,m.e(o,(function(t){return Number(t[d])}))]).range([0,c]),p=m.a(u);s.append("g").attr("class","x axis").attr("transform","translate(0, ".concat(c,")")).call(p).selectAll("text").attr("y","10").attr("text-align","center").attr("font-size","16px");var j=m.b(h).ticks(5).tickFormat((function(t){return t}));s.append("g").attr("class","y axis").call(j);return function(t){console.log("the data is",t);var e=m.i().duration(250),a=s.selectAll("rect").data(t);a.exit().remove(),a.enter().append("rect").attr("fill","#fff").attr("y",h(0)).attr("height",0).merge(a).transition(e).attr("y",(function(t){return c-h(Number(t[d]))})).attr("x",(function(t){return u(t[l])})).attr("width",u.bandwidth).attr("height",(function(t){return h(Number(t[d]))})).attr("fill",(function(t){return"Healthy"===t.diagnose?"lightgreen":"MCI"===t.diagnose?"lightblue":"pink"}))}(o),Object(x.jsx)("div",{id:"chart-area"})}var A,z,T=function(){var t=Object(n.useState)(),e=Object(s.a)(t,2),a=e[0],r=e[1],i=function(){var t=Object(b.a)(g.a.mark((function t(){var e;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"./data/models.csv",t.next=3,m.c("./data/models.csv");case 3:e=t.sent,r({value:e,dataset:"models",x:"model",y:"parameters"}),console.log("the data is",e);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(n.useEffect)((function(){a||i(),console.log("t")})),Object(x.jsx)("div",{className:"App",children:Object(x.jsx)("header",{className:"App-header",children:a&&a.value&&Object(x.jsx)(k,{data:a})})})};function C(){return Object(x.jsx)(l.a,{basename:"/tmh-visualisations",children:Object(x.jsxs)("div",{className:"App-container",children:[Object(x.jsxs)("nav",{className:"Nav-bar",children:[Object(x.jsx)(l.b,{to:"/",children:Object(x.jsx)("img",{className:"logo",width:"100px",height:"100px",src:u})}),Object(x.jsx)("div",{children:Object(x.jsx)(l.b,{to:"/",children:"Home"})}),Object(x.jsx)("div",{children:Object(x.jsx)(l.b,{to:"about",children:"About"})}),Object(x.jsx)("div",{children:Object(x.jsx)(l.b,{to:"ulme",children:"Ulme"})}),Object(x.jsx)("div",{children:Object(x.jsx)(l.b,{to:"anna",children:"Anna"})}),Object(x.jsx)("div",{children:Object(x.jsx)(l.b,{to:"birger",children:"Birger"})})]}),Object(x.jsxs)(d.c,{children:[Object(x.jsx)(d.a,{path:"/about",children:Object(x.jsx)(I,{})}),Object(x.jsx)(d.a,{path:"/ulme",children:Object(x.jsx)(T,{})}),Object(x.jsx)(d.a,{path:"/anna",children:Object(x.jsx)(_,{})}),Object(x.jsx)(d.a,{path:"/birger",children:Object(x.jsx)(w,{})}),Object(x.jsx)(d.a,{path:"/",children:Object(x.jsx)(S,{})})]}),Object(x.jsx)(F,{})]})})}function F(t){return Object(x.jsxs)("div",{className:"Footer-container",children:[Object(x.jsx)("img",{className:"logo",width:"300px",src:p}),Object(x.jsx)("p",{children:"Tal Musik H\xf6rsel 2020 \xa9"})]})}function S(t){return Object(x.jsxs)("div",{className:"Front-container",children:[Object(x.jsx)("h1",{children:"Speech Music and Hearing"}),Object(x.jsx)("div",{children:Object(x.jsx)("p",{children:"The department of speech music and hearing is really cool."})}),Object(x.jsx)("img",{width:"400px",height:"400px",src:h}),Object(x.jsx)("p",{children:"This is a spectogram, a visual representation of a sound."}),Object(x.jsxs)("p",{children:[Object(x.jsx)(l.b,{to:"/birger",children:"Birger"})," does research on speech and Alzheimer"]}),Object(x.jsxs)("p",{children:[" ",Object(x.jsx)(l.b,{to:"/ulme",children:"Ulme"})," does research on transformers"]}),Object(x.jsxs)("p",{children:[" ",Object(x.jsx)(l.b,{to:"/anna",children:"Anna"})," does research on face animation"]})]})}o.b.img(A||(A=Object(c.a)(["\n\n","\n\n  @keyframes App-logo-spin {\n    from {\n      transform: rotate(0deg);\n    }\n    to {\n      transform: rotate(360deg);\n    }\n  }\n"])),(function(t){return t.speed&&Object(o.a)(z||(z=Object(c.a)(["\n    animation: App-logo-spin infinite ","s linear; \n  "])),1/t.speed)}));function I(){return Object(x.jsx)("h2",{children:"This is a cool about page"})}function _(){return Object(x.jsx)("div",{children:"Coming soon"})}var E=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,141)).then((function(e){var a=e.getCLS,n=e.getFID,r=e.getFCP,i=e.getLCP,c=e.getTTFB;a(t),n(t),r(t),i(t),c(t)}))};i.a.render(Object(x.jsx)(C,{}),document.getElementById("root")),E()}},[[140,1,2]]]);
//# sourceMappingURL=main.5b07b456.chunk.js.map