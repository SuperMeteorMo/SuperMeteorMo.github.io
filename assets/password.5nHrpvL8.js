import{ap as r}from"./index-B3GYLZIM.js";const{passwordStrength:e}=r,n={super:/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[~!@#$%^&*_\-+=`|\\(){}[\]:;"'<>,.?/])[0-9a-zA-Z~!@#$%^&*_\-+=`|\\(){}[\]:;"'<>,.?/]{8,16}$/,strong:/^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[~!@#$%^&*_\-+=`|\\(){}[\]:;"'<>,.?/])[0-9a-zA-Z~!@#$%^&*_\-+=`|\\(){}[\]:;"'<>,.?/]{8,16}$/,medium:/^(?![0-9]+$)(?![a-zA-Z]+$)(?![~!@#$%^&*_\-+=`|\\(){}[\]:;"'<>,.?/]+$)[0-9a-zA-Z~!@#$%^&*_\-+=`|\\(){}[\]:;"'<>,.?/]{8,16}$/,weak:/^(?=.*[0-9])(?=.*[a-zA-Z])[0-9a-zA-Z~!@#$%^&*_\-+=`|\\(){}[\]:;"'<>,.?/]{6,16}$/},o={normal:{noPwd:"请输入密码",noRePwd:"再次输入密码",rePwdErr:"两次输入密码不一致"},passwordStrengthError:{super:"密码必须包含大小写字母、数字和特殊符号，密码长度必须在8-16位之间",strong:"密码必须包含字母、数字和特殊符号，密码长度必须在8-16位之间",medium:"密码必须为字母、数字和特殊符号任意两种的组合，密码长度必须在8-16位之间",weak:"密码必须包含字母，密码长度必须在6-16位之间"}};function a(r){return!(e&&n[e]&&!new RegExp(n[e]).test(r))||o.passwordStrengthError[e]}const s={ERROR:o,validPwd:a,getPwdRules:function(r="password",e="password2"){const n={};return n[r]={rules:[{required:!0,errorMessage:o.normal.noPwd},{validateFunction:function(r,e,n,o){const s=a(e);return!0!==s&&o(s),!0}}]},e&&(n[e]={rules:[{required:!0,errorMessage:o.normal.noRePwd},{validateFunction:function(e,n,a,s){return n!=a[r]&&s(o.normal.rePwdErr),!0}}]}),n}};export{s as p};
