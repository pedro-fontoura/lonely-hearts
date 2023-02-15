'use strict;'
const A0={viewport:null,viewport_width:0,pages_container:null,nr_pages:0,lst_pages:null,current_page_idx:0,previous_page_idx:0,client_onResize:null,client_onClick:null,mouse_or_touch:null,PAGE_FREE:0,PAGE_LANDSCAPE:1,PAGE_PORTRAIT:-1,page_before_rotate:-1,page_mode:0,page_rotate_id:0,error_node:null,error_page:null,f23:function(t,i){this.viewport=document.getElementById("AppViewport"),this.pages_container=document.getElementById("AppPagesContainer"),this.lst_pages=Array.from(document.querySelectorAll(".AppPage")),this.nr_pages=this.lst_pages.length,window.hasOwnProperty("cordova")?this.mouse_or_touch="mousedown":this.mouse_or_touch=void 0!==window.ontouchstart?"touchstart":"mousedown",A0.f18(null),this.client_onResize=t||null,this.client_onClick=i||null,window.visualViewport.addEventListener("resize",A0.f18.bind(this))},f18:function(t){this.viewport_width=this.viewport.offsetWidth,this.viewport.style.height=window.visualViewport.height+"px",this.pages_container.style.width=this.nr_pages*this.viewport_width+"px",this.pages_container.style.left=-this.current_page_idx*this.viewport.offsetWidth+"px",this.lst_pages.forEach(t=>t.style.width=this.viewport_width+"px"),this.f8(),this.f11(),null!==this.client_onResize&&this.client_onResize(this.viewport_width,this.viewport.offsetHeight)},f19:function(){return this.viewport_width},f15:function(){return this.viewport.offsetHeight},f20:function(t=""){if("string"==typeof t){var i=0,s=t;for(t=this.current_page_idx;i<this.nr_pages;){if(this.lst_pages[i].id===s){t=i;break}i++}}return this.pages_container.style.left=-t*this.viewport.offsetWidth+"px",this.previous_page_idx=this.current_page_idx,this.current_page_idx=t},f9:function(){return this.current_page_idx},f4:function(){return this.lst_pages[this.current_page_idx].id},f8:function(){this.f20(this.current_page_idx)},f5:function(){this.f20(this.current_page_idx)},f13:function(t,i){this.page_mode=t,this.page_rotate_id=i,this.f11()},f11:function(){return this.show_page=!1,this.page_mode!==this.PAGE_FREE&&(Math.sign(this.viewport.offsetWidth-this.viewport.offsetHeight)!==this.page_mode?(-1===this.page_before_rotate&&(this.page_before_rotate=this.current_page_idx),this.f20(this.page_rotate_id),this.show_page=!0):-1!==this.page_before_rotate&&(this.f20(this.page_before_rotate),this.page_before_rotate=-1,this.show_page=!0)),this.show_page||this.f8(),this.show_page},f0:function(t,i){t.addEventListener(this.mouse_or_touch,this.f21.bind(this,i)),t.addEventListener("contextmenu",this.f10.bind(this))},f6:function(t,i,s){"mousedown"===(i="MOUSE||TOUCH"===i?this.mouse_or_touch:i)&&t.addEventListener("contextmenu",this.f10.bind(this)),t.addEventListener(i,s)},f12:function(t){return t.stopPropagation(),t.preventDefault(),t.target},f21:function(t,i){this.f12(i),null!==this.client_onClick&&this.client_onClick(t,i.target)},f10:function(t){this.f12(t),t.target.click()},f1:function(t){if("serviceWorker"in navigator&&"https:"===window.location.protocol&&void 0===window.cordova){if(this.A1&&!this.A1.f22())return;navigator.serviceWorker.register(t).then(t=>{}).catch(t=>{})}},f7:function(t="AppError"){"string"==typeof t&&(t=document.getElementById(t)),this.error_node=t,this.error_page=g1(t,"section"),window.addEventListener("unhandledrejection",t=>{t.preventDefault(),this.f16("Unhandled rejection",t.reason)}),window.addEventListener("error",t=>{t.preventDefault();t=[t.error.message,t.error.fileName,t.error.lineNumber,this.f2(t.error)].join("<br>");this.f16("Error",t)})},f2:function(t){return t.stack.split("at ").join("<br>&bull; ")},f16:function(t,i){this.error_node.innerHTML+="<h3>"+t+"</h3>"+i,null!==this.error_page&&this.f20(this.error_page.id)}};class C0{#p93=null;#p90=1/0;#p79=1/0;#p72=1/0;#p66=1/0;#p60=null;constructor(t,i=!1){this.#p93=t,!0===i?this.#p60=this.#P20():i instanceof Node&&(this.#p60=i,this.#p60.id=this.#p93,this.#p60.classList.add("FlexBoxEntity"))}#P20(){var t=document.createElement("div");return t.id=this.#p93,t.classList.add("FlexBoxEntity"),t}M114(){return this.#p93}M49(){return[this.#p90,this.#p79]}M64(){return this.#p60}f19(){return this.#p72}f15(){return this.#p66}M109(){return this.#p90}M95(){return this.#p79}f18(t,i,s,h){this.M50(s,h),this.M96(t,i)}M50(t,i){this.#p90=t,this.#p79=i,null!==this.#p60&&(this.#p60.style.top=t+"px",this.#p60.style.left=i+"px")}M96(t,i){this.#p72=t,this.#p66=i,null!==this.#p60&&(this.#p60.style.width=t+"px",this.#p60.style.height=i+"px")}}class E3 extends C0{#p21=null;#p61=null;#p73=null;#p15=[];#p2=null;constructor(t,i,s,h,e=!1){super(t,e),this.#p21=i,this.#p61=s,this.#p73=h,e&&this.M64().classList.add("FlexBox")}M76(t,i=!0){this.#p15[i?"push":"unshift"](t),null!==this.#p2&&this.#p15.sort(this.#p2),this.M2()}M36(t,i=!0){g2(this.#p15,t),i&&this.M2()}f18(t,i,s,h){super.f18(t,i,s,h),this.M2()}M11(i,s){0<this.#p15.length&&this.#p15.forEach(t=>t.M96(i,s))}M2(){var i,s,h,e;0!==this.#p15.length&&(s=i=0,this.#p15.forEach(t=>{i+=t.f19(),s+=t.f15()}),i!==1/0)&&s!==1/0&&("row"===this.#p21?(h=this.#P6(this.#p61)(!0,"width",i),e=this.#P6(this.#p73)(!1,"height",s)):(e=this.#P6(this.#p61)(!0,"height",s),h=this.#P6(this.#p73)(!1,"width",i)),this.#p15.forEach(t=>{t.M50(e.shift(),h.shift())}))}M27(i){this.#p15.forEach(t=>i(t))}#P6(t){return"center"===t?this.#P1.bind(this):"start"===t?this.#P4.bind(this):"end"===t?this.#P5.bind(this):"evenly"===t?this.#P2.bind(this):"between"===t?this.#P0.bind(this):"around"===t?this.#P3.bind(this):void 0}#P7(t,i){for(var s,h="width"===i?this.M95():this.M109(),e=[],p=0;p<this.#p15.length;++p)t&&0<p&&(s=this.#p15[p-1],h+="width"===i?s.f19():s.f15()),e.push(h);return e}#P4(t,i,s){return this.#P7(t,i)}#P1(t,i,s){for(var h,e=this.#P7(t,i),p=this.#p15.length,n="width"===i?this.f19():this.f15(),r=Math.round((n-s)/2),o=0;o<p;++o)t?e[o]+=r:(h=this.#p15[o],e[o]+=Math.round((n-("width"===i?h.f19():h.f15()))/2));return e}#P5(t,i,s){for(var h,e=this.#P7(t,i),p=this.#p15.length,n="width"===i?this.f19():this.f15(),r=Math.round(n-s),o=0;o<p;++o)t?e[o]+=r:(h=this.#p15[o],e[o]+=n-("width"===i?h.f19():h.f15()));return e}#P2(t,i,s){for(var h=this.#P7(t,i),e=this.#p15.length,t="width"===i?this.f19():this.f15(),p=Math.round((t-s)/(e+1)),n=0;n<e;++n)h[n]+=(n+1)*p;return h}#P0(t,i,s){for(var h=this.#P7(t,i),e=this.#p15.length,t="width"===i?this.f19():this.f15(),p=Math.round((t-s)/(e-1)),n=1;n<e;++n)h[n]+=n*p;return h}#P3(t,i,s){for(var h=this.#P7(t,i),e=this.#p15.length,t="width"===i?this.f19():this.f15(),i=Math.round(s/this.#p15.length),p=Math.round((t-i*(this.#p15.length+1))/this.#p15.length),n=Math.round(i/2+p/2),r=0;r<e;++r)h[r]+=n;for(var o=Math.round((t-s-2*n)/(e-1)),r=1;r<e;++r)h[r]+=r*o;return h}M12(t){this.#p2=t}M65(t){this.#p61=t}}function g13(t){return document.getElementById(t)}function g11(t,i){return(i=i||document).getElementsByTagName(t)[0]}function g12(t,i){return(i=i||document).getElementsByTagName(t)}function g9(t,i=document){return i.querySelector(t)}function g10(t,i=document){return i.querySelectorAll(t)}function g1(t,i){for(i=i.toUpperCase();null!==t&&t.tagName!==i;)t=t.parentNode;return t}function g14(s,h=null){return new Promise((t,i)=>setTimeout(t,s,h))}function g5(i,t){t.forEach(t=>null!==t&&i.appendChild(t))}function QuerySeachString(t,i=null,s=!1){t=new URL(window.location).searchParams.get(t);return null===t?t=i:s&&(t=parseInt(t,10)),t}function g8(t,i){t=getComputedStyle(document.documentElement).getPropertyValue("--"+t.split("--").pop()).trim();return i?parseInt(t,10):t}function g6(t){for(var i=t.length-1;0<i;i--){var s=Math.floor(Math.random()*(i+1)),h=t[i];t[i]=t[s],t[s]=h}}function g7(t){return t.concat()}function g2(t,i){return t.includes(i)?t.splice(t.indexOf(i),1).pop():null}function g3(t,i){return i>=t.length?null:t.splice(i,1).pop()}function g0(t){return g3(t,Math.f17(0,t.length-1))}function g4(t){return t[Math.f17(0,t.length-1)]}A0.A1={},A0.A1.f22=function(){return 0<navigator.maxTouchPoints},A0.A1.f24=function(){return["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document},A0.A1.f3=function(){this.f24()||this.f22()&&(document.fullscreenElement?document.exitFullscreen instanceof Function&&document.exitFullscreen():document.documentElement.requestFullscreen instanceof Function&&document.documentElement.requestFullscreen({navigationUI:"hide"}).catch(t=>{}))},Math.f17=function(t,i){return Math.floor(Math.random()*(i-t+1))+t},Math.f14=function(t,i){return t+Math.random()*(i-t)};class E5 extends C0{#p93=null;#p80=-1;#p74=-1;#p75=-1;#p62=!0;#p51=!1;#p1=!0;#p52=null;#p67=null;#p68=null;#p69=null;#p63=null;#p31=null;#p70=null;#p81=null;#p71=!1;constructor(t,i,s){super("Card_"+t,!0),this.#p93=t,this.#p80=i.id,this.#p74=s.nr,this.#p75=i.color,this.M86(s.symbol,s.nr,i.symbol),this.M13(this.#p1)}M20(){return this.#p67}M13(t){(this.#p1=t)&&(this.M98()||this.M115())?this.#p31.classList.remove("Hidden"):this.#p31.classList.add("Hidden")}M86(t,i,s){this.#p67=document.createElement("div"),this.#p67.classList.add("CardBody"),this.#p67.classList.add("Clickable"),this.#p68=document.createElement("div"),this.#p68.classList.add("CardFace"),this.#p67.appendChild(this.#p68),this.#p69=document.createElement("div"),this.#p69.classList.add("CardBack"),this.#p67.appendChild(this.#p69),this.#p63=document.createElement("p"),this.#p63.classList.add("CardValue"),this.#p63.classList.add("CardValue"+this.#p75);var h=document.createElement("span"),t=(h.innerHTML=t,this.#p63.appendChild(h),this.#p68.appendChild(this.#p63),this.#p31=document.createElement("span"),(this.M98()||this.M115())&&(this.#p31.innerHTML=i),this.#p63.appendChild(this.#p31),this.#p70=document.createElement("p"),this.#p70.innerHTML=s,this.#p70.classList.add("CardSuit"),this.#p70.classList.add("CardSuit"+this.#p75),this.#p68.appendChild(this.#p70),this.#p62||this.#p67.classList.add("FaceDown"),this.M98()?this.#p68.classList.add("CardRoyal"):this.M99()?this.#p68.classList.add("CardJoker"):this.M115()&&this.#p68.classList.add("CardAce"),this.M64());t.classList.add("Card"),t.classList.add("CardSmooth"),t.classList.add("CardHidden"),t.appendChild(this.#p67)}M87(){return this.#p74}M97(){return this.#p80}M88(){return this.#p75}M96(t,i){super.M96(t,i),this.#p63.style.fontSize=Math.round(.3*t)+"px",this.#p63.children.length&&(this.#p63.children[1].style.fontSize=Math.round(.2*t)+"px"),this.#p70.style.fontSize=Math.round(.4*t)+"px"}M77(t){this.#p62=t,this.#p67.classList[t?"remove":"add"]("FaceDown")}M51(t){this.#p51=t,this.#p67.classList[t?"add":"remove"]("CardSelected")}M21(){return this.M51(!this.#p51),this.#p51}M52(t){this.#p52=t}M117(t){return this.#p52===t}M53(){return this.#p52}M98(){return[k23,k16,k24].includes(this.#p74)}M66(){return this.M98()}M99(){return this.#p74===k15}M115(){return this.#p74===k28}M89(){return this.#p62}M67(){return this.#p51}M78(t){this.M64().classList[t?"add":"remove"]("CardHidden")}M79(t){this.M64().classList[t?"add":"remove"]("CardSmooth")}M80(t){this.M64().style.zIndex=t}M37(){return this.M98()||this.M115()}M90(){return"#"+this.#p93+"="+this.#p74+"/"+k22[this.#p80]}M100(t){this.#p81=t}M101(){return this.#p81}M102(){return this.#p74===k16}M110(t){return this.#p80===t}M14(){return this.M102()&&this.M110(k14)}M81(t){return this.#p71=t,this.#p63.classList[t?"add":"remove"]("Marked"),t}}class C2{#p53=null;#p35=null;#p82=null;#p83=null;#p36=null;#p37=null;#p91=null;#p38=null;#p84=null;#p76=null;#p85=!1;#p39=!1;#p32=!1;#p22=!1;#p40=!0;#p54=0;#p41=1;#p23=1;#p5=null;#p24=null;#p42=0;#p55=null;#p43=null;#p16=null;constructor(){this.clicked_card=null,A0.f23(this.#P27.bind(this),this.#P28.bind(this)),A0.f7(),A0.f13(A0.PAGE_LANDSCAPE,"Rotate"),this.#p53=g13("GameViewport"),this.#p35=new C1(k26),this.#p82=new C4(g13("MenuPannel"),g13("MenuIcon")),this.#p83=new C3(k27),this.#p36=new E2,this.#p91=new E7(k31,this.onBotPlayCard.bind(this),this.onBotFlipQOS.bind(this)),this.#p76=new E4(g13("Stats")),this.#p43=new C0("StatsBot",g13("StatsBot")),this.#p16=new C0("StatsPlayer",g13("StatsPlayer")),this.#p37=this.#p36.M63(),this.#p5=new E0("DiscardPlayer"),this.#p24=new E0("DiscardBot"),this.#p38=new E1("TrickRow",k4,!1),this.#p84=new E6(2,k10),g13("Play").appendChild(this.#p35.M64()),this.#p53.appendChild(this.#p38.M64()),g5(this.#p53,this.#p36.M57()),g5(this.#p53,this.#p91.M57()),g5(this.#p53,this.#p84.M57()),g5(this.#p53,this.#p5.M57()),g5(this.#p53,this.#p24.M57()),A0.f6(window,"contextmenu",A0.f12.bind(A0)),A0.f0(g13("HomeCard"),null),A0.f0(g13("MenuIcon"),null),this.#p82.M57().forEach(t=>A0.f0(t,null)),A0.f0(this.#p38.M64(),this.#p38),this.#p38.M64().classList.add("Clickable"),A0.A1.f22()?A0.f0(g13("btnFullScreen"),null):g13("btnFullScreen").style.display="none",this.#p82.M119(),this.#P27(0,0),this.#P25(),this.#P29(),this.M56(),window.setTimeout(()=>{A0.f11(),g13("AppViewport").classList.remove("AppInit")},62.5),g13("UserAgent").innerHTML=navigator.userAgent}#P29(){window.DEV&&(this.Deck=this.#p83,this.Messenger=this.#p35,this.Hand=this.#p84,this.Bot=this.#p91,this.TrickRow=this.#p38,this.DrawPile=this.#p37,this.Stats=this.#p76,this.DiscardPlayer=this.#p5,this.StatsBot=this.#p43,this.#P14("Play"))}#P25(){for(var t;null!==(t=this.#p83.M107());)t.M13(!0),t.M14()&&(this.#p55=t,this.M39()),this.#p53.appendChild(t.M64()),A0.f0(t.M20(),t),t.M78(!1),this.#p24.M103(t);for(;!this.#p24.M104();)this.#p37.M103(this.#p24.M25())}#P27(t,i){var s=this.#p53.offsetTop,h=window.visualViewport.width-2*s,e=Math.round(h/10),p=Math.round(this.#p53.offsetHeight/5),[s,n]=this.#P17(e,p,s),r=(this.#p83.M46(s,n),7*e),h=(9*s<r&&(r=9*s),Math.ceil((h-r)/2)),o=(2*s<h&&(h=Math.round(2*s)),this.#p53.style.width=r+2*h+"px",this.#p35.f18(r,Math.round(n/2),0,this.#p53.offsetLeft+h),this.#p53.offsetHeight-3*p),s=(this.#p91.f18(r,o,0,h,n),this.#p36.f18(e,p,o,h+r/2-e/2,s,n),this.#p5.f18(e,p,o,h),this.#p5.M24(s,n),this.#p24.f18(e,p,o,h+r-e),this.#p24.M24(s,n),this.#p38.f18(r-2*e,p,o,h+e),Math.floor(.12*h)+"px");this.#p16.M64().style.fontSize=s,this.#p43.M64().style.fontSize=s,this.#p16.f18(h,3*p,o,0),this.#p43.f18(h,3*p,o,h+r),this.#p84.f18(r,2*p,o+=p,h,n)}#P17(t,i,s){var s=+s,t=t-s,h=Math.round(t*k1);return i-s<h&&(h=i-s,t=Math.round(h/k1)),[t,h]}#P11(t,i,s){if(0===i)return Promise.resolve(null);for(var h=[],e=k0*t,p=0;0<i--;)h.push(g14(p).then(t=>{s()})),p+=e;return h.push(g14(p-e+k0)),Promise.all(h)}#P10(i,s,t){return this.#P11(.02,Math.min(t,i.M68()),t=>{s.M103(i.M25())})}#P8(){this.#p83.M60(t=>t.M79(!1)),this.#p5.M70(this.#p24),this.#p38.M70(this.#p24)}#P18(){this.#P13(this.#p83.M6(),this.#p37),setTimeout(()=>this.#p83.M60(t=>{t.M64().style.transform="rotate(0deg)",t.M79(!0)}),0)}#P13(t,i){for(var s;0<t.length;)(s=t.pop()).M53().M69(s),i.M103(s)}#P31(t){this.#p35.M61(t)}#P28(t,i){return this.#p82.IsIcon(i)?this.#P14(i.id.split("_").pop()):"HomeCard"===i.id?this.#P14("Play"):"btnFullScreen"===i.id?A0.A1.f3():this.#p85?void 0:t instanceof E5&&t.M117(this.#p37)?this.#P31("Click the<img src='icons/play-button-svgrepo-com.svg'>icon to start a game."):void(this.#p40||(t instanceof E5?this.#P21(t):t instanceof E0?this.#P15(t):t===this.#p38&&this.onClickTrickRow()))}#P14(t){"MenuIcon"===t?this.#p82.M113():"Play"===t?"Play"===A0.f4()?this.#P30():(this.#p82.M93(!0),this.#p82.M118(),A0.f20("Play")):"Home"===t?(this.#p82.M119(),this.#p82.M93(!1),A0.f20("Home")):A0.f20(t)}#P21(t){if(this.clicked_card=t,!this.#p85)if(t.M89())if(t.M117(this.#p38))this.onClickTrickRow();else{if(t.M53().M111())return 0<this.#p42?this.M40(t):void(this.#p39?this.#p32||!(t.M97()===k13||this.#p23&&t.M14())||this.#p84.M84()?this.M38(t):(t.M97()===k13&&this.#P31("You cannot play hearts at the moment."),t.M14()&&this.#P31("You cannot play the Queen of Spades at the moment.")):this.#P31("Not your turn."));this.#P31("Click the Trick Row to make the bot play a card.")}else this.#P31("That card is face down.")}#P15(t){this.#p85}#P30(){this.#p85||(this.#p85=!0,this.#p39=!1,this.#p32=!1,this.#p22=!1,this.#p40=!1,this.#p42=0,this.#p37.M18(!0),this.#p35.M119(),this.#p82.M119(),this.#p76.M116(),this.#p91.M116(this.#p24),this.#p84.M116(this.#p24),this.#P8(),this.#p83.M116(),this.#p83.M106(),this.#P18(),this.#p5.M92(2.5*k0),this.#p24.M92(2.5*k0),this.#P10(this.#p37,this.#p84,k3).then(()=>{this.#p23&&this.xCleanHand(),this.#p84.M83(),this.#p42=k6,0===this.#p42?this.M41():(this.#p35.M62("Hand swap "+(k6-this.#p42+1)+"/"+k6+" &raquo; Click a card from your hand to redraw."),this.#p85=!1)}))}M38(t){this.#p85=!0,this.#p84.M69(t),this.#p38.M103(t),this.#p39=!1,this.#p84.M83(),this.#p54?g14(k0).then(()=>this.M54()):this.#p85=!1}onBotFlipQOS(t){}onBotPlayCard(t){this.#p32||t.M97()!==k13||(this.#p32=!0,this.#P31("Hearts are out!")),this.#p91.M69(t),this.#p38.M103(t),this.#p38.M68()<k4?this.#p54?g14(k0).then(()=>this.M54()):this.#p85=!1:(this.#p22=!0,this.#p85=!1)}M54(){this.#p22||this.#p39||this.#p91.M94(this.#p38.M91())}M28(){this.#p40=this.#p76.M31(this.#p38.M91());const i=this.#p76.M8();this.#P11(.5,k4,()=>{var t=this.#p38.M59();(i?this.#p5:this.#p24).M103(t)}).then(()=>{var t,i;this.#p22=!1,this.#p39=!0,this.#p40&&(i="Game over &raquo You "+((t=this.#p76.M108()).win?"win":"lose"),i+=" by "+t.score+" to "+t.bot+".",this.#p35.M62(i))})}onClickTrickRow(){if(!this.#p22)return this.#p39?this.#P31("Play a card from your hand."):this.#p54?this.#P31("Trick has not ended."):this.M54();this.M28()}M55(t){this.#p54=t}M56(){this.#p54=Boolean(QuerySeachString("autoplay",this.#p54,!0)),this.#p41=Boolean(QuerySeachString("winhearts",this.#p41,!0)),this.#p23=Boolean(QuerySeachString("qos",this.#p23,!0)),g13("option_autoplay_"+(this.#p54?1:0)).checked=!0,g13("option_winhearts_"+(this.#p41?1:0)).checked=!0,g13("option_qos_"+(this.#p23?1:0)).checked=!0,Array.from(g12("input")).forEach(t=>{t.addEventListener("change",this.onChangeOption.bind(this))}),this.#p91.M47(this.#p41),this.#p91.M32(this.#p23),this.#p76.M32(this.#p23),this.#p84.M32(this.#p23)}onChangeOption(t){var t=t.target.id.split("_"),i=t[1],t=Boolean(+t[2]);"autoplay"===i?(this.#p54=t,!this.#p54||this.#p40||this.#p22||this.M54()):"winhearts"===i?(this.#p41=t,this.#p91.M47(this.#p41)):"qos"===i&&(this.#p23=t,this.#p91.M32(this.#p23),this.#p76.M32(this.#p23),this.#p84.M32(this.#p23),this.M39())}M39(){this.#p55 instanceof E5&&this.#p55.M81(this.#p23)}M40(t){this.busy=!0,--this.#p42,this.#p35.M119(),this.xSwapHandCard(t).then(()=>{this.#p23&&this.xCleanHand(),0===this.#p42?this.M41():(this.#p35.M62("Hand swap "+(k6-this.#p42+1)+"/"+k6+" &raquo; Click a card from your hand to redraw."),this.busy=!1)})}xSwapHandCard(t){return this.#p84.M69(t),this.#p37.M103(t),g14(k0).then(()=>(this.#p37.M43(),this.#P10(this.#p37,this.#p84,1))).then(()=>{this.#p84.M83()})}async xCleanHand(){for(var t;null!==(t=this.#p84.M10())&&await this.xSwapHandCard(t),null!==t;);return t}M41(){this.#p85=!0,this.#P10(this.#p37,this.#p91,k5).then(()=>{this.#p37.M18(!1),this.#p76.M72(),this.#p39=!0,this.#p85=!1})}}class E0 extends E3{#p93=null;#p44=[];#p77=0;#p8=!1;#p86=null;#p45=null;constructor(t){super(t,"column","center","center",!0),this.#p93=t,this.#p86=new C0(this.#p93+"_Base",!0),this.M76(this.#p86);t=this.#p86.M64();t.classList.add("CardPileBase"),t.classList.add("Clickable"),this.#p45=document.createElement("p"),this.#p45.classList.add("Hidden"),t.appendChild(this.#p45)}M22(){return this.#p86.M64()}M57(){return[this.#p86.M64(),this.M64()]}M91(){return g7(this.#p44)}M23(t){this.#p8=t,0<this.#p44.length&&this.#p44[this.#p44.length-1].M77(t)}M24(t,i){this.M11(t,i),this.M2(),this.#P12(),this.#p45.style.fontSize=Math.round(.09*t)+"px"}#P12(){const[i,s]=this.#p86.M49();this.#p44.forEach(t=>t.M50(i,s))}M29(){var i=1;this.#p44.forEach(t=>t.M80(i++))}M92(t){this.#p77=t}M42(t){this.M103(t,!0)}M15(t){this.M103(t,!1)}M103(t,i=!0){var s,h;t instanceof E5&&(this.#p44.includes(t)||(this.#p44[i?"push":"unshift"](t),this.#p45.innerHTML=this.#p44.length,[s,h]=this.#p86.M49(),t.M51(!1),t.M77(!1),t.M50(s,h),i?t.M80(100+this.#p44.length):t.M80(0),t.M52(this),g14(this.#p77).then(t=>{this.M29(),this.M5()})))}M16(){return this.#p86.M49()}M25(){var t;return 0===this.#p44.length?null:((t=this.#p44.pop()).M80(100+this.#p44.length),t.M78(!1),this.M5(),this.#p45.innerHTML=this.#p44.length,t)}M5(){var t=this.#p44.length-1;if(0<=t){var i=this.#p44[t];for(i.M78(!1),i.M77(this.#p8),--t;0<=t;--t)(i=this.#p44[t]).M78(!0),i.M77(!1)}}M104(){return 0===this.#p44.length}M68(){return this.#p44.length}M69(t){if(this.#p44.includes(t))return g2(this.#p44,t),t.M78(!1),this.#p45.innerHTML=this.#p44.length,this.M5(),t}M58(t){this.#p45.classList[t?"remove":"add"]("Hidden"),t&&(this.#p45.innerHTML=this.#p44.length)}M17(t){for(var i;0<this.#p44.length;)i=this.#p44[0],this.M69(i),t.M103(i)}M20(){return this.#p86.M64()}M70(t){for(;0<this.#p44.length;)t.M103(this.M25())}M43(){1<this.#p44.length&&(g6(this.#p44),this.M29(),this.M5())}M82(t){this.M64().classList[t?"add":"remove"]("Highlight")}M18(t){this.#p86.M64().style.visibility=t?"":"hidden"}}class E1 extends E3{#p93=null;#p46=0;#p64=!1;#p44=[];#p0=!0;constructor(t,i,s){super(t,"row","evenly","center",!0),this.#p93=t,this.#p64=s,this.#p46=i}f18(t,i,s,h){super.f18(t,i,s,h)}M0(t){this.#p0=t}M103(t){this.#p44.length===this.#p46||this.#p44.includes(t)||(t.M52(this),t.M77(!0),t.M80(100+this.#p44.length),this.#p44.push(t),this.M76(t,!0))}M69(t){if(this.#p44.includes(t))return g2(this.#p44,t),this.M36(t,this.#p0),t}M70(t){for(var i;0<this.#p44.length;)i=this.#p44[0],this.M69(i),t.M103(i)}M9(t){return this.#p44.filter(t)}M68(){return this.#p44.length}M91(){return g7(this.#p44)}M111(){return this.#p64}M104(){return 0===this.#p44.length}M112(){return this.#p44.length===this.#p46}M105(t){return this.#p44.includes(t)}M59(){if(0!==this.#p44.length)return this.M69(this.#p44[this.#p44.length-1])}M10(){var i=null;return this.#p44.forEach(t=>{t.M14()&&(i=t)}),i}}class C3{#p44=[];#p9=[];#p47=0;#p25=0;constructor(t,i=null){this.#p47=t,this.#P26(),null!==i&&this.DiscardCards(i)}#P26(){for(var t,i,s,h=0,e=[],p=0;p<4;++p)for(s=this.M45(p),e.includes(s)||e.push(s),i=2;i<=14;++i)t=new E5(h++,{id:p,symbol:this.M30(p),color:s},{nr:i,symbol:this.M26(i)}),this.#p44.push(t),this.#p25+=1;for(var n=0,r=1;r<=this.#p47;++r)t=new E5(h++,{id:k21,symbol:this.M30(k21),color:e[n]},{nr:k15,symbol:this.M26(k15)}),this.#p44.push(t),this.#p25+=1,n=(1+n)%e.length}M44(t){if(!(0<this.#p9.length))return t=this.#p44.filter(t),this.#p25-=t.length,t.forEach(t=>{g2(this.#p44,t)}),t}f18(i,s){this.M60(t=>t.M96(i,s))}M60(t){this.#p44.forEach(t),this.#p9.forEach(t)}M106(){g6(this.#p44)}M107(){var t;return 0===this.#p44.length?null:(t=g0(this.#p44),this.#p9.push(t),t)}M116(){for(;this.#p9.length;)this.#p44.push(this.#p9.pop())}M30(i){return k30.filter(t=>t.id===i).pop().symbol}M45(i){return k30.filter(t=>t.id===i).pop().color}M26(i){return i===k15||11<=i&&i<=13||i===k28?k25.filter(t=>t.value===i).pop().symbol:i}M46(i,s){this.M60(t=>t.M96(i,s))}M9(t){t=this.#p44.filter(t);return t.forEach(t=>{g2(this.#p44,t),this.#p9.push(t)}),t}M68(){return this.#p44.length}M19(){return this.#p25}M6(){for(var t=[];0<this.#p44.length;){var i=this.#p44.pop();this.#p9.push(i),t.push(i)}return t}}class C4{#p60=null;#p87=null;#lst_elements=null;constructor(t,i){this.#p60=t,this.#p87=i,this.#lst_elements=Array.from(t.children),this.#p87.classList.add("Clickable"),this.#lst_elements.forEach(t=>t.classList.add("Clickable"))}M57(){return g7(this.#lst_elements)}M118(){this.#p60.style.right=0}M119(){this.#p60.style.right=-1.1*this.#p60.offsetWidth+"px"}M113(){"0px"===this.#p60.style.right?this.M119():this.M118()}M93(t=!0){this.#p87.classList[t?"remove":"add"]("Hidden")}IsIcon(t){return t.id.startsWith("Menu")}M71(t){g13("Menu_Play").classList[t?"remove":"add"]("Hidden")}}class C1{#p60=null;#p92=null;#p48=0;#p78=0;constructor(t){this.#p60=document.createElement("div"),this.#p60.id="Messenger",this.#p92=document.createElement("p"),this.#p60.appendChild(this.#p92),this.#p48=t<1e3?1e3*t:t}M64(){return this.#p60}f18(t,i,s,h){this.#p60.style.width=t+"px",this.#p60.style.height=i+"px",this.#p60.style.left=h+"px",this.#p92.style.fontSize=Math.min(Math.round(.25*i),17)+"px",this.M119()}M119(){this.#p60.style.top=-1.1*this.#p60.offsetHeight+"px"}M7(t,i){0<this.#p48&&this.M61("<span>"+t+"</span>: "+i)}M61(t){0<this.#p48&&(clearTimeout(this.#p78),this.#p78=setTimeout(this.M119.bind(this),this.#p48),this.#p92.innerHTML=t,this.#p60.style.top=0)}M62(t){clearTimeout(this.timer),this.#p92.innerHTML=t,this.#p60.style.top=0}}class E2 extends E3{#p93=null;#p88=null;constructor(t){super("PilesRow_"+t,"column","center","center",!0),this.#p93=t,this.#p88=new E0(t+"_Draw"),this.M76(this.#p88)}f18(t,i,s,h,e,p){super.f18(t,i,s,h);i=Math.round(1.2*p);this.M11(t,i),this.M2(),this.M27(t=>{t instanceof E0&&t.M24(e,p)})}M63(){return this.#p88}M57(){return[this.M64(),this.#p88.M64(),this.#p88.M22()]}}class E4 extends C0{#p56=0;#p3=0;#p6=0;#p10=0;#p7=!1;#p17=0;#p11=0;#p26=0;#p33=0;#p27=!1;#p49=0;#p89={win:null,score:-1,bot:-1};#p4=!1;#p23=!0;constructor(t){super("Stats",t)}M116(){this.#p56=0,this.#p3=0,this.#p6=0,this.#p10=0,this.#p7=!1,this.#p17=0,this.#p11=0,this.#p26=0,this.#p33=0,this.#p27=!1,this.#p49=0,this.#P22()}M72(){this.#p56+=1}#P22(t=0){g13("txt_player_winClean").innerHTML=this.#p3,g13("txt_player_winAll").innerHTML=this.#p6,g13("txt_player_hearts").innerHTML=this.#p10,g13("txt_bot_winClean").innerHTML=this.#p11,g13("txt_bot_winAll").innerHTML=this.#p26,g13("txt_bot_hearts").innerHTML=this.#p33,g13("txt_player_score").innerHTML=this.#p17,g13("txt_bot_score").innerHTML=this.#p49,this.#P16(t)}#P16(t=0){var i;0!==t&&((i=g13(this.#p4?"xPlayer":"xBot")).classList[0<t?"remove":"add"]("Penalty"),i.classList.add("Visible"),i.innerHTML=(0<t?"<small>+</small>":"")+t,setTimeout(()=>{i.classList.remove("Visible")},k2))}#P23(t,i){var s=0;return this.#p23?(0!==t||i?i&&(s=k12):s=k7,0<t&&(s+=t*k8)):s=0===t?k7:t*k8,s}M31(t){t.forEach(t=>{});var i=t.filter(t=>t.M97()===k13).length,s=this.#P9(t),h=t[0],e=h.M97(),e=this.#P24(e,t),t=(this.#p4=e===h,this.#p4?(this.#p6+=1,this.#p23?0!==i||s||(this.#p3+=1):0===i&&(this.#p3+=1),s&&(this.#p7=!0),this.#p10+=i):(this.#p26+=1,this.#p23?0!==i||s||(this.#p11+=1):0===i&&(this.#p11+=1),s&&(this.#p27=!0),this.#p33+=i),this.#P23(i,s)),e=(this.#p4?this.#p17+=t:this.#p49+=t,this.#P22(t),!1);return this.#p56<k18?this.#p56+=1:(e=!0,this.#p17=this.#P19(this.#p3,this.#p6,this.#p10,this.#p7),this.#p49=this.#P19(this.#p11,this.#p26,this.#p33,this.#p27),this.#p89.win=this.#p17>=this.#p49,this.#p89.score=this.#p17,this.#p89.bot=this.#p49,g13("txt_player_score").innerHTML=this.#p17,g13("txt_bot_score").innerHTML=this.#p49),e}#P19(t,i,s,h){var e=0;return this.#p23?s===k19&&h?e=k7*i+k9:(e=k7*t,e+=s*k8,h&&(e+=k12)):s===k19?e=k7*i+k9:(e=k7*t,e+=s*k8),e}M8(){return this.#p4}M108(){return this.#p89}#P24(s,t){var h=0,e=null;return t.forEach(t=>{var i;t.M97()===s&&(i=t.M87(),h<i)&&(h=i,e=t)}),e}#P9(t){var i=!1;return t.forEach(t=>{t.M14()&&(i=!0)}),i}M32(t){this.#p23=t}}class E6 extends C0{#p65=0;#p57=null;#p12=0;#p50=0;#p58=0;#p23=!0;constructor(t,i){super("Hand",!0),this.#p65=t,this.#p12=i,this.#p57=[];for(var s,h=0;h<t;++h)s=new E1("HandRow_"+h,i,!0),this.#p57.push(s)}M57(){for(var t=[this.M64()],i=0;i<this.#p65;++i)t.push(this.#p57[i].M64());return t}f18(t,i,s,h,e){for(var p=Math.floor(i/this.#p65),n=0;n<this.#p65;++n)this.#p57[n].f18(t,p,s,h),s+=p;super.f18(t,i,s,h)}M103(t){t.M64().style.transform="rotate(0deg)",t.M97()===k13&&(this.#p50+=1),this.#p58+=1;for(var i=0;this.#p57[i].M112();)i+=1;this.#p57[i].M103(t)}M116(t){this.#p50=0;for(var i=this.#p58=0;i<this.#p65;++i)this.#p57[i].M70(t)}M69(t){for(var i,s=0;s<this.#p65;++s)if((i=this.#p57[s]).M105(t))return i.M69(t),t.M97()===k13&&--this.#p50,--this.#p58,t;return null}M83(){for(var i=[],s=0;s<this.#p65;++s)for(h=this.#p57[s];!h.M104();)i.push(h.M59());i.sort((t,i)=>{var s=t.M97(),h=i.M97();return s!==h?s-h:t.M87()-i.M87()});var h=this.#p57[0],s=0;i.forEach(t=>{(h=s===k10?this.#p57[1]:h).M103(i[s++])})}M84(){return this.#p23?this.#p58===this.#p50||this.#p58-1===this.#p50&&this.M10():this.#p58===this.#p50}M10(){for(var t,i=0;i<this.#p65;++i)if(null!==(t=this.#p57[i].M10()))return t;return null}M32(t){this.#p23=t}}class E7 extends C0{#p65=0;#p57=null;#p28=0;#p18=0;#p13=0;#p29=null;#p14=null;#p19=null;#p20=null;#p30=null;#p34=!0;#p59=null;#p23=!0;constructor(t,i,s){super("Bot",!0),this.#p65=t,this.#p20=i,this.#p30=s,this.#p57=[];for(var h,e=0;e<t;++e)(h=new E1("BotRow_"+e,k10,!1)).M65(e%2==0?"between":"around"),h.M0(!1),this.#p57.push(h)}M47(t){this.#p34=t}M57(){var i=[this.M64()];return this.#p57.forEach(t=>{i.push(t.M64())}),i}f18(i,t,s,h,e){super.f18(i,t,s,h);const p=Math.round((t-this.#p65*e)/(this.#p65-1));var n=s;this.#p57.forEach(t=>{t.f18(i,e,n,h),n+=e+p})}M33(t){this.#p19.push(t),t.M14()&&(this.#p59=t),t.M64().style.transform="rotate(0deg)"}M103(t){this.#p57[this.#p28].M103(t),t.M77(this.#p28===this.#p65-1),t.M80(this.#p28),t.M100({row:this.#p28,column:this.#p18}),t.M89()?this.M33(t):t.M64().style.transform="rotate("+Math.f14(-3,3)+"deg)",this.#p14.push(t),this.#p18+=1,this.#p18===this.#p13&&(this.#p28+=1,this.#p28<this.#p65)&&(this.#p18=0,this.#p13=k10,this.#p28%2!=0&&--this.#p13,this.#p14=[],this.#p29.push(this.#p14))}M116(i){this.#p28=0,this.#p18=0,this.#p13=k10,this.#p14=[],this.#p29=[],this.#p29.push(this.#p14),this.#p19=[],this.#p59=null,this.#p57.forEach(t=>t.M70(i))}M94(t){var i,s,h;return 0===t.length||t.length===k4?null:(i=t[0].M97(),h=null,h=0<(s=this.M3(i)).length?this.M4(t,i,s):this.M1(),void this.#p20(h))}M3(i){return this.#p19.filter(t=>t.M97()===i)}M4(t,i,s){var h;return i!==k13&&!this.M34(t)||this.#p34?(t=this.M73(i,t),(h=this.M73(i,s)).M87()>t.M87()?h:this.M75(s)):this.M74(i,s)}M34(t){return null!==this.M73(k13,t)}M73(s,t){var h=0,e=null;return t.forEach(t=>{var i;t.M97()===s&&(i=t.M87(),h<i)&&(h=i,e=t)}),e}M74(s,t){var h=1/0,e=null;return t.forEach(t=>{var i;t.M97()===s&&(i=t.M87())<h&&(h=i,e=t)}),e}M75(t){var s=1/0,h=null;return t.forEach(t=>{var i=t.M87();i<s&&(s=i,h=t)}),h}M1(){if(this.#p23&&this.M10())return this.#p59;var t=this.M73(k13,this.#p19);if(null!==t)return t;const i=this.M75(this.#p19).M87();t=this.#p19.filter(t=>t.M87()===i);return 1===t.length?t[0]:t[Math.f17(0,t.length-1)]}M69(t){t.M14()&&(this.#p59=null),g2(this.#p19,t);var i=t.M101();this.#p29[i.row][i.column]=null,this.#p57[i.row].M69(t),t.M64().style.transform="rotate(0deg)",0<i.row&&this.M85(i.row,i.column)}M85(t,i){var s=t-1;this.M48(s,i),t%2!=0?this.M48(s,i+1):this.M48(s,i-1)}M48(t,i){var s;i<0||i>=(s=this.#p29[t]).length||null!==(s=s[i])&&(t%2==0?this.M35(t+1,i)&&this.M35(t+1,i-1):this.M35(t+1,i)&&this.M35(t+1,i+1))&&(s.M77(!0),s.M64().style.transform="rotate(0deg)",this.M33(s),s.M14())&&this.#p30(s)}M35(t,i){return i<0||i>=(t=this.#p29[t]).length||null===t[i]}M10(){return null!==this.#p59}M32(t){this.#p23=t}#P9(t){var i=null;return t.forEach(t=>{t.M14()&&(i=t)}),i}}const k1=16/11,k26=5,k27=0,k0=g8("CARD_TRANSLATE_TIME",!0),k2=10/3*1e3,k31=6,k10=7,k4=4,k3=13,k18=13,k5=52-k3,k19=13,k6=2,k7=4,k8=-1,k12=-13,k9=13,k13=0,k14=1,k11=2,k20=3,k21=4,k22=["hearts","spades","diamonds","clubs","joker"],k15=0,k23=11,k16=12,k24=13,k28=14,k29="Red",k17="Black",k30=[{id:k13,symbol:"&hearts;",color:k29},{id:k14,symbol:"&spades;",color:k17},{id:k11,symbol:"&diams;",color:k29},{id:k20,symbol:"&clubs;",color:k17},{id:k21,symbol:"",color:""}],k25=[{value:k23,symbol:"J"},{value:k16,symbol:"Q"},{value:k24,symbol:"K"},{value:k28,symbol:"A"},{value:k15,symbol:"&#x2605;"}];window.addEventListener("load",()=>{new C2});