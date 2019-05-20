var isIE = function isIE(ver) {
    var b = document.createElement('b');
    b.innerHTML = '<!--[if IE ' + ver + ']><i></i><![endif]-->';
    return b.getElementsByTagName('i').length === 1;
};
var productionEnvId = 3;
var isproductionEnv = window.location.host === 'www.eduzhixin.com';
var isUphoEnv = window.location.host.indexOf('.upho2015.com') !== -1;
var isDevelopEnv = !isUphoEnv && !isproductionEnv;
window.BJ_REPORT.init({
    id: isproductionEnv ? productionEnvId : 1,
    url: '//badjs.upho2015.com/badjs', // 指定上报地址
    repeat: 3,
    ext: {
        ua: navigator.userAgent
    }
});
window.APP = window.APP || {};
APP.IE = isIE(6) || isIE(7) || isIE(8);
var jqueryPath = '';
if (isDevelopEnv) {
    jqueryPath = '/js/libs/jquery/jquery.min.js';
} else if (APP.IE) {
    jqueryPath = '//cdn.eduzhixin.cn/cdn/js/libs/jquery/jquery_old.min.js';
} else {
    jqueryPath = '//cdn.eduzhixin.cn/cdn/js/libs/jquery/jquery.min.js';
}
require(['common-beada79a', jqueryPath], function (common, jq) {
    requirejs(['controllers/welcomeNew-703bbe13']);
    window.BJ_REPORT.tryJs().spyAll();
});