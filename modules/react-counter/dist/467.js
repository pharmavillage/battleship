"use strict";(self.webpackChunkshell=self.webpackChunkshell||[]).push([[467],{467:(e,t,n)=>{n.r(t);var a=n(575),l=n.n(a),r=n(807),o=n.n(r),i=n(368),d=n(103),c=n.n(d),m=n(159),s=n.n(m);const p=s().div`
  display: flex;
  flex-direction: column;
  border: 5px solid #edebfc;
  border-radius: 30px;
  padding: 0 40px 40px 40px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';

  &.main {
    height: 100%;
    border: none;
    border-radius: 0;
    padding: 0 0 30px 0;
    gap: 10px;
  }
`,u=s().div`
  display: flex;
  justify-content: space-around;
  height: 100%;
  align-items: center;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`,b=s().div`
  padding: 4px 16px;
  border-radius: 0 0 4px 4px;
  background-color: #edebfc;
  font-size: 14px;
  width: fit-content;
  align-self: center;
  margin-bottom: 20px;
`,g=s().div`
  height: auto;
  min-width: 100px;
  font-size: 70px;
  text-align: center;
  font-weight: 900;
  background-image: linear-gradient(
    45deg,
    #ca4246 16.666%,
    #e16541 16.666%,
    #e16541 33.333%,
    #f18f43 33.333%,
    #f18f43 50%,
    #8b9862 50%,
    #8b9862 66.666%,
    #476098 66.666%,
    #476098 83.333%,
    #a7489b 83.333%
  );

  background-size: cover;
  background-repeat: repeat;

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,E=l().lazy((()=>n.e(719).then(n.t.bind(n,719,23)))),f=l().lazy((()=>n.e(422).then(n.bind(n,422)))),x=()=>{const e=(0,i.useStore)(c());return l().createElement(p,{className:"main"},l().createElement(b,null,"Shell"),l().createElement(u,null,l().createElement(p,{"data-e2e":"REMOTE_REACT__BUTTONS_BLOCK_MODULE"},l().createElement(b,null,"Remote React module"),l().createElement(l().Suspense,{fallback:"Loading ReactCounter"},l().createElement(E,null))),l().createElement(g,{"data-e2e":"CLICKS_COUNTER"},e),l().createElement(p,{"data-e2e":"REMOTE_VUE__BUTTONS_BLOCK_MODULE"},l().createElement(b,null,"Remote Vue module"),l().createElement(l().Suspense,{fallback:"Loading VueCounter"},l().createElement(f,null)))))};o().render(l().createElement(x,null),document.getElementById("root"))}}]);