define('models/ZhugeModel',[], function () {
    var events = {
        track: function track(eventName, propsList) {
            var props = {};
            propsList = propsList || [];
            _.each(propsList, function (prop) {
                props[prop.key] = prop.value;
            });
            zhuge.track(eventName, props);
        },
        'ENTER_COUPON_PAGE': {
            'name': '进入兑换码页面',
            'props': {
                'access': '进入途径'
            },
            'desp': '统计进入兑换码页面次数',
            'SCAN_CODE': '扫码',
            'OFFICIAL_WEBSITE': '官网'
        },
        'SEARCH_CODE_SUCCESS': {
            'name': '兑换码查询成功',
            'desp': '统计查询成功次数'
        },
        'EXCHANGE_COUPON': {
            'name': '兑换码兑换',
            'props': {
                'name': '兑换结果'
            },
            'desp': '统计兑换次数',
            'SUCCESS': '兑换成功',
            'ERROR': '兑换失败'
        },
        'loginEvents': {
            'LOGIN_PAGE': '进入登录/注册页面',
            'LOGIN_SUCCESS': '登录成功',
            'FIND_PASSWORD': {
                'name': '找回密码',
                'desp': '点击“忘记密码？”文字链接时'
            },
            'SIGN_STEP_ONE': {
                'name': '注册步骤1',
                'desp': '点击“戳我去注册”文字链接时'
            },
            'SIGN_STEP_TWO': {
                'name': '注册步骤2',
                'desp': '在注册step1点击【下一步】时'
            },
            'SIGN_STEP_THREE': {
                'name': '注册步骤3',
                'desp': '在注册step2点击【下一步】时'
            },
            'SUBMIT_SIGNIN': {
                'name': '提交注册请求',
                'props': {
                    'SIGN_RESULT': '注册结果'
                },
                'SIGN_SUCCESS': '注册成功',
                'EXISTING_ACCOUNT': '账号已存在'
            },
            'SEND_SMS_CLICK': '注册_发送验证码_点击'
        },
        'live': {
            'ENTER_MYCLASS': '进入“我的课程”',
            'ENTER_MYSHEDULE': '进入“我的课表”',
            'TAB_REGISTRATION': '直播_报名中心_进入',
            'TAB_RECENT': '直播_直播预告_进入',
            'TAB_REPLAY': '直播_直播回放_进入',
            'TAB_MINE_CLASSES': '直播_我的课程_进入',
            'FILTER_CLICK': '直播_课程筛选_点击',
            'CLICK_REG_CLASS_DETAIL': '直播_报名_课程详情_点击',
            'ENYER_REG_CLASS_DETAIL': '直播_报名_课程详情_进入',
            'CLICK_BUY_BUTTON': '直播_详情_报名按钮_点击',
            'CLICK_SELECT_ALL': '直播_详情_全选按钮_点击',
            'CLICK_ORDER_BUTTON': '直播_详情_预约按钮_点击',
            'CLICK_SUBCLASS_BUY_BUTTON': '直播_详情_小课报名按钮_点击',
            'CLICK_TO_PAY': '直播_详情_报名大课_点击',
            'CLICK_CONFIRM_ORDER': '直播_详情_确认订单_点击',
            'CLICK_DETAIL_CONFIRM_PAY': '直播_详情_确认支付_点击',
            'CLICK_CONFIRM_PAY': '直播_确认支付_点击',
            'PROP_CLASS_NAME': '大课',
            'PROP_SUBCLASS_NAME': '小课',
            'PROP_PRICE': '价格',
            'PROP_SUBJECT': '学科',
            'PROP_ONLINE': '是否上线',
            'PROP_TOP': '是否置顶',
            'PROP_STATUS': '大课状态',
            'PROP_PLAY_STATUS': '观看状态',
            'PROP_PAY_METHOD': '支付方式',
            'PROP_SELECTED_AMOUNT': '所选课数',
            'PROP_REG_ORDER_NO': '直播_详情_订单号',
            'PROP_RECENT_ORDER_NO': '直播_预告_订单号',
            'PROP_REPLAY_ORDER_NO': '直播_回放_订单号',
            'PROP_LIVE_STATUS': '观看状态',
            'PROP_LIVE_TAB': 'Tab状态',
            'PROP_LIVE_BARRAGE': '功能',
            'PROP_LIVE_FUNCTION': '功能',
            'PROP_CONTENT': '标签名称',
            'PROP_TAB_ACTIVE': '课程类型',
            'RECENT_ENTER_LIVE_CLICK': '直播_预告_进入直播_点击',
            'RECENT_REG_SUBCLASS_CLICK': '直播_预告_报名小课_点击',
            'RECENT_CONFIRM_PAY_CLICK': '直播_预告_确认支付_点击',
            'RECENT_CONFIRM_ORDER_CLICK': '直播_预告_确认订单_点击',
            'RECENT_DETAIL_CLICK': '直播_预告_查看详情_点击',
            'RECENT_BOOK_CLICK': '直播_预告_预约_点击',
            'REPLAY_ENTER_REPLAY_CLICK': '直播_回放_看回放_点击',
            'REPLAY_REG_SUBCLASS_CLICK': '直播_回放_报名小课_点击',
            'REPLAY_CONFIRM_ORDER_CLICK': '直播_回放_确认报名_点击',
            'REPLAY_CONFIRM_PAY_CLICK': '直播_回放_确认支付_点击',
            'REPLAY_DETAIL_CLICK': '直播_回放_查看详情_点击',
            'MINE_CLASS_DETAIL_CLICK': '直播_我的_课程详情_点击',
            'LIVE_WATCHING_ENTER': '直播_观看_页面_进入',
            'LIVE_RIGHT_TAB_CLICK': '直播_观看_功能Tab_点击',
            'LIVE_REPLAY_PLAY_CLICK': '直播_观看_播放回放_点击',
            'LIVE_FEEDBACK_CLICK': '直播_观看_评分_点击',
            'LIVE_MORE_BTN_CLICK': '直播_观看_更多_点击',
            'LIVE_SHARE_BTN_CLICK': '直播_观看_分享_点击',
            'LIVE_ONLINE_10MIN': '直播_观看_10分钟_在线',
            'LIVE_ONLINE_30MIN': '直播_观看_30分钟_在线',
            'LIVE_BARRAGE_BTN_CLICK': '直播_观看_开关弹幕_点击',
            'LIVE_SEND_CHAT_CLICK': '直播_观看_发送聊天_点击',
            'LIVE_CLARITY_CHECK': '直播_观看_切换清晰度_点击',
            'LIVE_ADJUST_VOICE': '直播_观看_调整音量量_点击',
            'LIVE_FULL_SCREEN': '直播_观看_切换全屏_点击',
            'RECOMMEND_PAGE_LOADED': '直播推荐_页面加载',
            'SYSTEM_CLS_PAGE_LOADED': '系统课_页面加载',
            'SPECIAL_CLS_PAGE_LOADED': '专题课_页面加载',
            'FREE_CLS_PAGE_LOADED': '免费课_页面加载',
            'RECOMMEND_REPLAY_button_CLICK': '直播推荐_直播回放_点击看回放',
            'RECOMMEND_LIVE_BUTTON_CLICK': '直播推荐_直播预告_点击进入直播',
            'SEARCH_CLS_RESULT': '直播_搜索课程',
            'PROP_KEY_WORDS': '关键字',
            'PROP_SEARCH_CLS_RESULT_FALSE': '无课程',
            'PROP_SEARCH_CLS_RESULT_TRUE': '有课程',
            'PROP_TAG_CATEGORY': '标签分类',
            'PROP_TAG_NAME': '标签名称',
            'RECOMMEND_BANNER_CLICK': '直播推荐_banner图片_点击',
            'BIG_CLS_CARD_CLICK': '直播_大课卡片_点击',
            'PROP_CLS_CATEGORY': '课程分类',
            'PROP_CLS_ID': '大课ID',
            'PROP_CLS_PRICE': '课程价格',
            'PROP_SEARCH_RESULT': '搜索结果',
            'REGISTER_SUCCESS_PAGE_ENTER': '直播_报名成功页_进入',
            'COURSE_SYSTEM_CLICK': '直播_课程体系_点击'
        },
        'secondPages': {
            'OFFICIAL_PAGE': '进入官网页面',
            'COURSES': '进入知识点',
            'QUIZ': '进入刷题',
            'EXAMS': '进入比赛',
            'DOWNLOADS': '进入资料',
            'ARTICLE': '进入新闻站',
            'LIVES': '进入直播',
            'FORUM': '进入论坛',
            'COURSE_CENTER': '进入课程中心',
            'CAMP_REGISTER': '进入质心营报名',
            'WELCOME_PAGE': '欢迎页_页面加载'
        },
        'ENTRY_CAMP_PAGE': {
            'name': '报名_质心营报名_进入',
            'props': ['类型']
        },
        'ENTRY_TAB_CLICK': {
            'name': '报名_切换标签_点击',
            'props': ['类型']
        },
        'ENTRY_CLASSINTRO_CLICK': {
            'name': '报名_课程介绍_点击',
            'props': ['产品']
        },
        'ENTRY_BTN_CLICK': {
            'name': '报名_报名按钮_点击',
            'props': ['产品']
        },
        'ENTRY_STEP1_CLICK': {
            'name': '报名_1选班_点击',
            'props': ['产品']
        },
        'ENTRY_STEP2_CLICK': {
            'name': '报名_2须知_点击',
            'props': ['产品']
        },
        'ENTRY_STEP3_CLICK': {
            'name': '报名_3考试_点击',
            'props': ['产品']
        },
        'ENTRY_STEP4_CLICK': {
            'name': '报名_4选座_点击',
            'props': ['产品']
        },
        'ENTRY_STEP5_CLICK': {
            'name': '报名_5确认_点击',
            'props': ['产品']
        },
        'ENTRY_MODAL_CLICK': {
            'name': '报名_确认订单_点击',
            'props': ['产品']
        },
        'ENTRY_ORDER_PAY': {
            'name': '报名_确认支付_点击',
            'props': ['产品']
        },
        'ENTRY_ORDER_FINISH': {
            'name': '报名_报名成功_进入',
            'props': ['产品']
        },
        'ENTRY_PUBLICIZE': {
            'name': '招简招简进入',
            'props': ['学科']
        },
        'SIGN_UP_NOW': {
            'name': '招简立即报名点击',
            'props': ['学科']
        },
        'SIGN_UP_TEAM': {
            'name': '招简团队报名点击',
            'props': ['学科']
        },
        'OUTLINE_TAB_CLICK': {
            'name': '招简大纲切换点击',
            'props': ['学科']
        },
        'SIGN_UP_NOTICE': {
            'name': '招简报名须知点击',
            'props': ['学科']
        },
        'SIGN_UP_PROCESS': {
            'name': '招简报名流程点击',
            'props': ['学科']
        },
        'MORE_COMMENTS_CLICK': {
            'name': '招简更多评价点击',
            'props': ['学科']
        },
        'MORE_STUDENTS_CLICK': {
            'name': '招简更多学员点击',
            'props': ['学科']
        },
        'SHOW_COMMENTS_CLICK': {
            'name': '招简查看评价点击',
            'props': ['学科']
        },
        'SCROLL_PUBLICIZE': {
            'name': '招简滚动位置滚动',
            'props': ['学科', '位置']
        },
        'ENTRY_ACTIVITIES': {
            'name': '活动2017分享进入',
            'props': ['类型']
        },
        'SCROLL_LAST': {
            'name': '活动2017分享滚动',
            'props': ['类型']
        },
        'ENTRY_MESSAGEBOARD2018': {
            'name': '2018留言墙页面_加载完成',
            'props': ['登录状态']
        },
        'MSGBD_SHARE_CLICK': {
            'name': '2018留言墙页面_点击分享',
            'props': ['登录状态']
        },
        'MSGBD_PUBLISH_CLICK': {
            'name': '2018留言墙页面_点击发布留言'
        },
        'ENTRY_SHARE2018': {
            'name': '2018年终盘点页面_加载完成'
        },
        'SHARE2018_PUBLISH_CLICK': {
            'name': '2018年终盘点页面_点击发布留言'
        },
        'SHARE2018_GOTOMSGBD_CLICK': {
            'name': '2018年终盘点页面_点击看留言'
        },
        'SHARE_LOOK': {
            'name': '活动分享/点击查看',
            'props': ['类型']
        },
        'DOWNLOAD_APP': {
            'name': '活动下载App点击',
            'props': ['类型']
        },
        'CLASS_CENTER': {
            'PROPS_NUMBER': '序号',
            'PROPS_SUBJECT': '学科',
            'PROPS_PRODUCTION': '产品名称',
            'PROPS_MODULE': '所属栏目',
            'CLASS_CENTER_ENTER': '导航_课程中心_进入',
            'VIDEO_CLICK_CLICK': '课程_视频点击_点击',
            'VIDEO_PLAY_CLICK': '课程_播放按钮_点击',
            'VIDEO_SWITCH': '课程_视频切换_点击',
            'PICTURE_CLICK': '课程_图片点击_点击',
            'LINK_CLICK': '课程_链接点击_点击'
        },
        'NAVIGATE': {
            'PROPS_SUBJECT': '学科',
            'SWITCH_SUBJECT': '导航_切换学科_点击',
            'CHECKIN': '导航_每日签到_点击',
            'PHO_NEWS': '导航_物竞新闻_点击',
            'BIO_NEWS': '导航_生竞新闻_点击',
            'CHEM_NEWS': '导航_化竞新闻_点击'
        },
        'ZCHEM_ENTRY': {
            'name': '导航_课程体系_进入'
        },
        'PAGE_WEL': {
            'NAV_CLICK': {
                'name': '欢迎页_锚点_点击',
                'props': ['锚点名称']
            },
            'ZHIHU_CLICK': {
                'name': '欢迎页_质心名师_知乎link_点击',
                'props': ['链接地址']
            },
            'ARTICLE_CLICK': {
                'name': '欢迎页_新手指引_阅读全文_点击',
                'props': ['文章标题', '竞赛学科']
            },
            'KNOWLEDGE_PLAY': {
                'name': '欢迎页_知识点_视频播放_点击',
                'props': ['视频名称']
            },
            'LIVE_PLAY': {
                'name': '欢迎页_在线课程_视频播放_点击',
                'props': ['视频名称']
            },
            'CAMP_PAGE_CLICK': {
                'name': '欢迎页_招简链接_点击',
                'props': ['学科']
            },
            'MORE_KNOWLEDGE_CLICK': '欢迎页_知识点_查看更多_点击',
            'MORE_QUIZ_CLICK': '欢迎页_题库_查看更多_点击',
            'MORE_LIVE_CLICK': '欢迎页_在线课程_查看更多_点击',
            'MORE_CAMP_CLICK': '欢迎页_质心营_查看更多_点击',
            'REGIST_CAMP_CLICK': '欢迎页_质心营_立即报名_点击',
            'LOGIN_CLICK': '导航_登录注册_点击'
        }
    };
    return events;
});
/**
 * Swiper 4.0.7
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * http://www.idangero.us/swiper/
 *
 * Copyright 2014-2017 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: November 28, 2017
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define('swiper',t):e.Swiper=t()}(this,function(){"use strict";function e(e,t){var a=[],i=0;if(e&&!t&&e instanceof r)return e;if(e)if("string"==typeof e){var s,n,o=e.trim();if(o.indexOf("<")>=0&&o.indexOf(">")>=0){var l="div";for(0===o.indexOf("<li")&&(l="ul"),0===o.indexOf("<tr")&&(l="tbody"),0!==o.indexOf("<td")&&0!==o.indexOf("<th")||(l="tr"),0===o.indexOf("<tbody")&&(l="table"),0===o.indexOf("<option")&&(l="select"),(n=document.createElement(l)).innerHTML=o,i=0;i<n.childNodes.length;i+=1)a.push(n.childNodes[i])}else for(s=t||"#"!==e[0]||e.match(/[ .<>:~]/)?(t||document).querySelectorAll(e.trim()):[document.getElementById(e.trim().split("#")[1])],i=0;i<s.length;i+=1)s[i]&&a.push(s[i])}else if(e.nodeType||e===window||e===document)a.push(e);else if(e.length>0&&e[0].nodeType)for(i=0;i<e.length;i+=1)a.push(e[i]);return new r(a)}function t(e){for(var t=[],a=0;a<e.length;a+=1)-1===t.indexOf(e[a])&&t.push(e[a]);return t}function a(){var e="onwheel"in d;if(!e){var t=d.createElement("div");t.setAttribute("onwheel","return;"),e="function"==typeof t.onwheel}return!e&&d.implementation&&d.implementation.hasFeature&&!0!==d.implementation.hasFeature("","")&&(e=d.implementation.hasFeature("Events.wheel","3.0")),e}var i,s=i="undefined"==typeof window?{navigator:{userAgent:""},location:{},history:{},addEventListener:function(){},removeEventListener:function(){},getComputedStyle:function(){return{}},Image:function(){},Date:function(){},screen:{}}:window,r=function(e){for(var t=this,a=0;a<e.length;a+=1)t[a]=e[a];return t.length=e.length,this};e.fn=r.prototype,e.Class=r,e.Dom7=r;"resize scroll".split(" ");var n={addClass:function(e){var t=this;if(void 0===e)return this;for(var a=e.split(" "),i=0;i<a.length;i+=1)for(var s=0;s<this.length;s+=1)void 0!==t[s].classList&&t[s].classList.add(a[i]);return this},removeClass:function(e){for(var t=this,a=e.split(" "),i=0;i<a.length;i+=1)for(var s=0;s<this.length;s+=1)void 0!==t[s].classList&&t[s].classList.remove(a[i]);return this},hasClass:function(e){return!!this[0]&&this[0].classList.contains(e)},toggleClass:function(e){for(var t=this,a=e.split(" "),i=0;i<a.length;i+=1)for(var s=0;s<this.length;s+=1)void 0!==t[s].classList&&t[s].classList.toggle(a[i]);return this},attr:function(e,t){var a=arguments,i=this;if(1!==arguments.length||"string"!=typeof e){for(var s=0;s<this.length;s+=1)if(2===a.length)i[s].setAttribute(e,t);else for(var r in e)i[s][r]=e[r],i[s].setAttribute(r,e[r]);return this}if(this[0])return this[0].getAttribute(e)},removeAttr:function(e){for(var t=this,a=0;a<this.length;a+=1)t[a].removeAttribute(e);return this},data:function(e,t){var a,i=this;if(void 0!==t){for(var s=0;s<this.length;s+=1)(a=i[s]).dom7ElementDataStorage||(a.dom7ElementDataStorage={}),a.dom7ElementDataStorage[e]=t;return this}if(a=this[0]){if(a.dom7ElementDataStorage&&e in a.dom7ElementDataStorage)return a.dom7ElementDataStorage[e];var r=a.getAttribute("data-"+e);if(r)return r}},transform:function(e){for(var t=this,a=0;a<this.length;a+=1){var i=t[a].style;i.webkitTransform=e,i.transform=e}return this},transition:function(e){var t=this;"string"!=typeof e&&(e+="ms");for(var a=0;a<this.length;a+=1){var i=t[a].style;i.webkitTransitionDuration=e,i.transitionDuration=e}return this},on:function(){function t(t){var a=t.target;if(a){var i=t.target.dom7EventData||[];if(i.unshift(t),e(a).is(o))l.apply(a,i);else for(var s=e(a).parents(),r=0;r<s.length;r+=1)e(s[r]).is(o)&&l.apply(s[r],i)}}function a(e){var t=e&&e.target?e.target.dom7EventData||[]:[];t.unshift(e),l.apply(this,t)}for(var i=this,s=[],r=arguments.length;r--;)s[r]=arguments[r];var n=s[0],o=s[1],l=s[2],d=s[3];if("function"==typeof s[1]){var p;n=(p=s)[0],l=p[1],d=p[2],o=void 0}d||(d=!1);for(var c,u=n.split(" "),h=0;h<this.length;h+=1){var v=i[h];if(o)for(c=0;c<u.length;c+=1)v.dom7LiveListeners||(v.dom7LiveListeners=[]),v.dom7LiveListeners.push({type:n,listener:l,proxyListener:t}),v.addEventListener(u[c],t,d);else for(c=0;c<u.length;c+=1)v.dom7Listeners||(v.dom7Listeners=[]),v.dom7Listeners.push({type:n,listener:l,proxyListener:a}),v.addEventListener(u[c],a,d)}return this},off:function(){for(var e=this,t=[],a=arguments.length;a--;)t[a]=arguments[a];var i=t[0],s=t[1],r=t[2],n=t[3];if("function"==typeof t[1]){var o;i=(o=t)[0],r=o[1],n=o[2],s=void 0}n||(n=!1);for(var l=i.split(" "),d=0;d<l.length;d+=1)for(var p=0;p<this.length;p+=1){var c=e[p];if(s){if(c.dom7LiveListeners)for(var u=0;u<c.dom7LiveListeners.length;u+=1)r?c.dom7LiveListeners[u].listener===r&&c.removeEventListener(l[d],c.dom7LiveListeners[u].proxyListener,n):c.dom7LiveListeners[u].type===l[d]&&c.removeEventListener(l[d],c.dom7LiveListeners[u].proxyListener,n)}else if(c.dom7Listeners)for(var h=0;h<c.dom7Listeners.length;h+=1)r?c.dom7Listeners[h].listener===r&&c.removeEventListener(l[d],c.dom7Listeners[h].proxyListener,n):c.dom7Listeners[h].type===l[d]&&c.removeEventListener(l[d],c.dom7Listeners[h].proxyListener,n)}return this},trigger:function(){for(var e=this,t=[],a=arguments.length;a--;)t[a]=arguments[a];for(var i=t[0].split(" "),s=t[1],r=0;r<i.length;r+=1)for(var n=0;n<this.length;n+=1){var o=void 0;try{o=new window.CustomEvent(i[r],{detail:s,bubbles:!0,cancelable:!0})}catch(e){(o=document.createEvent("Event")).initEvent(i[r],!0,!0),o.detail=s}e[n].dom7EventData=t.filter(function(e,t){return t>0}),e[n].dispatchEvent(o),e[n].dom7EventData=[],delete e[n].dom7EventData}return this},transitionEnd:function(e){function t(r){if(r.target===this)for(e.call(this,r),a=0;a<i.length;a+=1)s.off(i[a],t)}var a,i=["webkitTransitionEnd","transitionend"],s=this;if(e)for(a=0;a<i.length;a+=1)s.on(i[a],t);return this},outerWidth:function(e){if(this.length>0){if(e){var t=this.styles();return this[0].offsetWidth+parseFloat(t.getPropertyValue("margin-right"))+parseFloat(t.getPropertyValue("margin-left"))}return this[0].offsetWidth}return null},outerHeight:function(e){if(this.length>0){if(e){var t=this.styles();return this[0].offsetHeight+parseFloat(t.getPropertyValue("margin-top"))+parseFloat(t.getPropertyValue("margin-bottom"))}return this[0].offsetHeight}return null},offset:function(){if(this.length>0){var e=this[0],t=e.getBoundingClientRect(),a=document.body,i=e.clientTop||a.clientTop||0,s=e.clientLeft||a.clientLeft||0,r=e===window?window.scrollY:e.scrollTop,n=e===window?window.scrollX:e.scrollLeft;return{top:t.top+r-i,left:t.left+n-s}}return null},css:function(e,t){var a,i=this;if(1===arguments.length){if("string"!=typeof e){for(a=0;a<this.length;a+=1)for(var s in e)i[a].style[s]=e[s];return this}if(this[0])return window.getComputedStyle(this[0],null).getPropertyValue(e)}if(2===arguments.length&&"string"==typeof e){for(a=0;a<this.length;a+=1)i[a].style[e]=t;return this}return this},each:function(e){var t=this;if(!e)return this;for(var a=0;a<this.length;a+=1)if(!1===e.call(t[a],a,t[a]))return t;return this},html:function(e){var t=this;if(void 0===e)return this[0]?this[0].innerHTML:void 0;for(var a=0;a<this.length;a+=1)t[a].innerHTML=e;return this},text:function(e){var t=this;if(void 0===e)return this[0]?this[0].textContent.trim():null;for(var a=0;a<this.length;a+=1)t[a].textContent=e;return this},is:function(t){var a,i,s=this[0];if(!s||void 0===t)return!1;if("string"==typeof t){if(s.matches)return s.matches(t);if(s.webkitMatchesSelector)return s.webkitMatchesSelector(t);if(s.msMatchesSelector)return s.msMatchesSelector(t);for(a=e(t),i=0;i<a.length;i+=1)if(a[i]===s)return!0;return!1}if(t===document)return s===document;if(t===window)return s===window;if(t.nodeType||t instanceof r){for(a=t.nodeType?[t]:t,i=0;i<a.length;i+=1)if(a[i]===s)return!0;return!1}return!1},index:function(){var e,t=this[0];if(t){for(e=0;null!==(t=t.previousSibling);)1===t.nodeType&&(e+=1);return e}},eq:function(e){if(void 0===e)return this;var t,a=this.length;return e>a-1?new r([]):e<0?(t=a+e,new r(t<0?[]:[this[t]])):new r([this[e]])},append:function(){for(var e=this,t=[],a=arguments.length;a--;)t[a]=arguments[a];for(var i,s=0;s<t.length;s+=1){i=t[s];for(var n=0;n<this.length;n+=1)if("string"==typeof i){var o=document.createElement("div");for(o.innerHTML=i;o.firstChild;)e[n].appendChild(o.firstChild)}else if(i instanceof r)for(var l=0;l<i.length;l+=1)e[n].appendChild(i[l]);else e[n].appendChild(i)}return this},prepend:function(e){var t,a,i=this;for(t=0;t<this.length;t+=1)if("string"==typeof e){var s=document.createElement("div");for(s.innerHTML=e,a=s.childNodes.length-1;a>=0;a-=1)i[t].insertBefore(s.childNodes[a],i[t].childNodes[0])}else if(e instanceof r)for(a=0;a<e.length;a+=1)i[t].insertBefore(e[a],i[t].childNodes[0]);else i[t].insertBefore(e,i[t].childNodes[0]);return this},next:function(t){return new r(this.length>0?t?this[0].nextElementSibling&&e(this[0].nextElementSibling).is(t)?[this[0].nextElementSibling]:[]:this[0].nextElementSibling?[this[0].nextElementSibling]:[]:[])},nextAll:function(t){var a=[],i=this[0];if(!i)return new r([]);for(;i.nextElementSibling;){var s=i.nextElementSibling;t?e(s).is(t)&&a.push(s):a.push(s),i=s}return new r(a)},prev:function(t){if(this.length>0){var a=this[0];return new r(t?a.previousElementSibling&&e(a.previousElementSibling).is(t)?[a.previousElementSibling]:[]:a.previousElementSibling?[a.previousElementSibling]:[])}return new r([])},prevAll:function(t){var a=[],i=this[0];if(!i)return new r([]);for(;i.previousElementSibling;){var s=i.previousElementSibling;t?e(s).is(t)&&a.push(s):a.push(s),i=s}return new r(a)},parent:function(a){for(var i=this,s=[],r=0;r<this.length;r+=1)null!==i[r].parentNode&&(a?e(i[r].parentNode).is(a)&&s.push(i[r].parentNode):s.push(i[r].parentNode));return e(t(s))},parents:function(a){for(var i=this,s=[],r=0;r<this.length;r+=1)for(var n=i[r].parentNode;n;)a?e(n).is(a)&&s.push(n):s.push(n),n=n.parentNode;return e(t(s))},closest:function(e){var t=this;return void 0===e?new r([]):(t.is(e)||(t=t.parents(e).eq(0)),t)},find:function(e){for(var t=this,a=[],i=0;i<this.length;i+=1)for(var s=t[i].querySelectorAll(e),n=0;n<s.length;n+=1)a.push(s[n]);return new r(a)},children:function(a){for(var i=this,s=[],n=0;n<this.length;n+=1)for(var o=i[n].childNodes,l=0;l<o.length;l+=1)a?1===o[l].nodeType&&e(o[l]).is(a)&&s.push(o[l]):1===o[l].nodeType&&s.push(o[l]);return new r(t(s))},remove:function(){for(var e=this,t=0;t<this.length;t+=1)e[t].parentNode&&e[t].parentNode.removeChild(e[t]);return this},add:function(){for(var t=[],a=arguments.length;a--;)t[a]=arguments[a];var i,s,r=this;for(i=0;i<t.length;i+=1){var n=e(t[i]);for(s=0;s<n.length;s+=1)r[r.length]=n[s],r.length+=1}return r},styles:function(){return this[0]?window.getComputedStyle(this[0],null):{}}};Object.keys(n).forEach(function(t){e.fn[t]=n[t]});var o,l={deleteProps:function(e){var t=e;Object.keys(t).forEach(function(e){try{t[e]=null}catch(e){}try{delete t[e]}catch(e){}})},nextTick:function(e,t){return void 0===t&&(t=0),setTimeout(e,t)},now:function(){return Date.now()},getTranslate:function(e,t){void 0===t&&(t="x");var a,i,r,n=s.getComputedStyle(e,null);return s.WebKitCSSMatrix?((i=n.transform||n.webkitTransform).split(",").length>6&&(i=i.split(", ").map(function(e){return e.replace(",",".")}).join(", ")),r=new s.WebKitCSSMatrix("none"===i?"":i)):a=(r=n.MozTransform||n.OTransform||n.MsTransform||n.msTransform||n.transform||n.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,")).toString().split(","),"x"===t&&(i=s.WebKitCSSMatrix?r.m41:16===a.length?parseFloat(a[12]):parseFloat(a[4])),"y"===t&&(i=s.WebKitCSSMatrix?r.m42:16===a.length?parseFloat(a[13]):parseFloat(a[5])),i||0},parseUrlQuery:function(e){var t,a,i,r,n={},o=e||s.location.href;if("string"==typeof o&&o.length)for(r=(a=(o=o.indexOf("?")>-1?o.replace(/\S*\?/,""):"").split("&").filter(function(e){return""!==e})).length,t=0;t<r;t+=1)i=a[t].replace(/#\S+/g,"").split("="),n[decodeURIComponent(i[0])]=void 0===i[1]?void 0:decodeURIComponent(i[1])||"";return n},isObject:function(e){return"object"==typeof e&&null!==e&&e.constructor&&e.constructor===Object},extend:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];for(var a=Object(e[0]),i=1;i<e.length;i+=1){var s=e[i];if(void 0!==s&&null!==s)for(var r=Object.keys(Object(s)),n=0,o=r.length;n<o;n+=1){var d=r[n],p=Object.getOwnPropertyDescriptor(s,d);void 0!==p&&p.enumerable&&(l.isObject(a[d])&&l.isObject(s[d])?l.extend(a[d],s[d]):!l.isObject(a[d])&&l.isObject(s[d])?(a[d]={},l.extend(a[d],s[d])):a[d]=s[d])}}return a}},d=o="undefined"==typeof document?{addEventListener:function(){},removeEventListener:function(){},activeElement:{blur:function(){},nodeName:""},querySelector:function(){return{}},querySelectorAll:function(){return[]},createElement:function(){return{style:{},setAttribute:function(){},getElementsByTagName:function(){return[]}}},location:{hash:""}}:document,p={touch:s.Modernizr&&!0===s.Modernizr.touch||!!("ontouchstart"in s||s.DocumentTouch&&d instanceof s.DocumentTouch),transforms3d:s.Modernizr&&!0===s.Modernizr.csstransforms3d||function(){var e=d.createElement("div").style;return"webkitPerspective"in e||"MozPerspective"in e||"OPerspective"in e||"MsPerspective"in e||"perspective"in e}(),flexbox:function(){for(var e=d.createElement("div").style,t="alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "),a=0;a<t.length;a+=1)if(t[a]in e)return!0;return!1}(),observer:"MutationObserver"in s||"WebkitMutationObserver"in s,passiveListener:function(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});s.addEventListener("testPassiveListener",null,t)}catch(e){}return e}(),gestures:"ongesturestart"in s},c=function(e){void 0===e&&(e={});var t=this;t.params=e,t.eventsListeners={},t.params&&t.params.on&&Object.keys(t.params.on).forEach(function(e){t.on(e,t.params.on[e])})},u={components:{}};c.prototype.on=function(e,t){var a=this;return"function"!=typeof t?a:(e.split(" ").forEach(function(e){a.eventsListeners[e]||(a.eventsListeners[e]=[]),a.eventsListeners[e].push(t)}),a)},c.prototype.once=function(e,t){function a(){for(var s=[],r=arguments.length;r--;)s[r]=arguments[r];t.apply(i,s),i.off(e,a)}var i=this;return"function"!=typeof t?i:i.on(e,a)},c.prototype.off=function(e,t){var a=this;return e.split(" ").forEach(function(e){void 0===t?a.eventsListeners[e]=[]:a.eventsListeners[e].forEach(function(i,s){i===t&&a.eventsListeners[e].splice(s,1)})}),a},c.prototype.emit=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a=this;if(!a.eventsListeners)return a;var i,s,r;return"string"==typeof e[0]||Array.isArray(e[0])?(i=e[0],s=e.slice(1,e.length),r=a):(i=e[0].events,s=e[0].data,r=e[0].context||a),(Array.isArray(i)?i:i.split(" ")).forEach(function(e){if(a.eventsListeners[e]){var t=[];a.eventsListeners[e].forEach(function(e){t.push(e)}),t.forEach(function(e){e.apply(r,s)})}}),a},c.prototype.useModulesParams=function(e){var t=this;t.modules&&Object.keys(t.modules).forEach(function(a){var i=t.modules[a];i.params&&l.extend(e,i.params)})},c.prototype.useModules=function(e){void 0===e&&(e={});var t=this;t.modules&&Object.keys(t.modules).forEach(function(a){var i=t.modules[a],s=e[a]||{};i.instance&&Object.keys(i.instance).forEach(function(e){var a=i.instance[e];t[e]="function"==typeof a?a.bind(t):a}),i.on&&t.on&&Object.keys(i.on).forEach(function(e){t.on(e,i.on[e])}),i.create&&i.create.bind(t)(s)})},u.components.set=function(e){var t=this;t.use&&t.use(e)},c.installModule=function(e){for(var t=[],a=arguments.length-1;a-- >0;)t[a]=arguments[a+1];var i=this;i.prototype.modules||(i.prototype.modules={});var s=e.name||Object.keys(i.prototype.modules).length+"_"+l.now();return i.prototype.modules[s]=e,e.proto&&Object.keys(e.proto).forEach(function(t){i.prototype[t]=e.proto[t]}),e.static&&Object.keys(e.static).forEach(function(t){i[t]=e.static[t]}),e.install&&e.install.apply(i,t),i},c.use=function(e){for(var t=[],a=arguments.length-1;a-- >0;)t[a]=arguments[a+1];var i=this;return Array.isArray(e)?(e.forEach(function(e){return i.installModule(e)}),i):i.installModule.apply(i,[e].concat(t))},Object.defineProperties(c,u);var h={updateSize:function(){var e,t,a=this,i=a.$el;e=void 0!==a.params.width?a.params.width:i[0].clientWidth,t=void 0!==a.params.height?a.params.height:i[0].clientHeight,0===e&&a.isHorizontal()||0===t&&a.isVertical()||(e=e-parseInt(i.css("padding-left"),10)-parseInt(i.css("padding-right"),10),t=t-parseInt(i.css("padding-top"),10)-parseInt(i.css("padding-bottom"),10),l.extend(a,{width:e,height:t,size:a.isHorizontal()?e:t}))},updateSlides:function(){var e=this,t=e.params,a=e.$wrapperEl,i=e.size,s=e.rtl,r=e.wrongRTL,n=a.children("."+e.params.slideClass),o=e.virtual&&t.virtual.enabled?e.virtual.slides.length:n.length,d=[],c=[],u=[],h=t.slidesOffsetBefore;"function"==typeof h&&(h=t.slidesOffsetBefore.call(e));var v=t.slidesOffsetAfter;"function"==typeof v&&(v=t.slidesOffsetAfter.call(e));var f=o,m=e.snapGrid.length,g=e.snapGrid.length,b=t.spaceBetween,w=-h,y=0,x=0;if(void 0!==i){"string"==typeof b&&b.indexOf("%")>=0&&(b=parseFloat(b.replace("%",""))/100*i),e.virtualSize=-b,s?n.css({marginLeft:"",marginTop:""}):n.css({marginRight:"",marginBottom:""});var T;t.slidesPerColumn>1&&(T=Math.floor(o/t.slidesPerColumn)===o/e.params.slidesPerColumn?o:Math.ceil(o/t.slidesPerColumn)*t.slidesPerColumn,"auto"!==t.slidesPerView&&"row"===t.slidesPerColumnFill&&(T=Math.max(T,t.slidesPerView*t.slidesPerColumn)));for(var E,S=t.slidesPerColumn,C=T/S,M=C-(t.slidesPerColumn*C-o),z=0;z<o;z+=1){E=0;var P=n.eq(z);if(t.slidesPerColumn>1){var k=void 0,$=void 0,I=void 0;"column"===t.slidesPerColumnFill?(I=z-($=Math.floor(z/S))*S,($>M||$===M&&I===S-1)&&(I+=1)>=S&&(I=0,$+=1),k=$+I*T/S,P.css({"-webkit-box-ordinal-group":k,"-moz-box-ordinal-group":k,"-ms-flex-order":k,"-webkit-order":k,order:k})):$=z-(I=Math.floor(z/C))*C,P.css("margin-"+(e.isHorizontal()?"top":"left"),0!==I&&t.spaceBetween&&t.spaceBetween+"px").attr("data-swiper-column",$).attr("data-swiper-row",I)}"none"!==P.css("display")&&("auto"===t.slidesPerView?(E=e.isHorizontal()?P.outerWidth(!0):P.outerHeight(!0),t.roundLengths&&(E=Math.floor(E))):(E=(i-(t.slidesPerView-1)*b)/t.slidesPerView,t.roundLengths&&(E=Math.floor(E)),n[z]&&(e.isHorizontal()?n[z].style.width=E+"px":n[z].style.height=E+"px")),n[z]&&(n[z].swiperSlideSize=E),u.push(E),t.centeredSlides?(w=w+E/2+y/2+b,0===y&&0!==z&&(w=w-i/2-b),0===z&&(w=w-i/2-b),Math.abs(w)<.001&&(w=0),x%t.slidesPerGroup==0&&d.push(w),c.push(w)):(x%t.slidesPerGroup==0&&d.push(w),c.push(w),w=w+E+b),e.virtualSize+=E+b,y=E,x+=1)}e.virtualSize=Math.max(e.virtualSize,i)+v;var L;if(s&&r&&("slide"===t.effect||"coverflow"===t.effect)&&a.css({width:e.virtualSize+t.spaceBetween+"px"}),p.flexbox&&!t.setWrapperSize||(e.isHorizontal()?a.css({width:e.virtualSize+t.spaceBetween+"px"}):a.css({height:e.virtualSize+t.spaceBetween+"px"})),t.slidesPerColumn>1&&(e.virtualSize=(E+t.spaceBetween)*T,e.virtualSize=Math.ceil(e.virtualSize/t.slidesPerColumn)-t.spaceBetween,e.isHorizontal()?a.css({width:e.virtualSize+t.spaceBetween+"px"}):a.css({height:e.virtualSize+t.spaceBetween+"px"}),t.centeredSlides)){L=[];for(var D=0;D<d.length;D+=1)d[D]<e.virtualSize+d[0]&&L.push(d[D]);d=L}if(!t.centeredSlides){L=[];for(var O=0;O<d.length;O+=1)d[O]<=e.virtualSize-i&&L.push(d[O]);d=L,Math.floor(e.virtualSize-i)-Math.floor(d[d.length-1])>1&&d.push(e.virtualSize-i)}0===d.length&&(d=[0]),0!==t.spaceBetween&&(e.isHorizontal()?s?n.css({marginLeft:b+"px"}):n.css({marginRight:b+"px"}):n.css({marginBottom:b+"px"})),l.extend(e,{slides:n,snapGrid:d,slidesGrid:c,slidesSizesGrid:u}),o!==f&&e.emit("slidesLengthChange"),d.length!==m&&e.emit("snapGridLengthChange"),c.length!==g&&e.emit("slidesGridLengthChange"),(t.watchSlidesProgress||t.watchSlidesVisibility)&&e.updateSlidesOffset()}},updateAutoHeight:function(){var e,t=this,a=[],i=0;if("auto"!==t.params.slidesPerView&&t.params.slidesPerView>1)for(e=0;e<Math.ceil(t.params.slidesPerView);e+=1){var s=t.activeIndex+e;if(s>t.slides.length)break;a.push(t.slides.eq(s)[0])}else a.push(t.slides.eq(t.activeIndex)[0]);for(e=0;e<a.length;e+=1)if(void 0!==a[e]){var r=a[e].offsetHeight;i=r>i?r:i}i&&t.$wrapperEl.css("height",i+"px")},updateSlidesOffset:function(){for(var e=this,t=e.slides,a=0;a<t.length;a+=1)t[a].swiperSlideOffset=e.isHorizontal()?t[a].offsetLeft:t[a].offsetTop},updateSlidesProgress:function(e){void 0===e&&(e=this.translate||0);var t=this,a=t.params,i=t.slides,s=t.rtl;if(0!==i.length){void 0===i[0].swiperSlideOffset&&t.updateSlidesOffset();var r=-e;s&&(r=e),i.removeClass(a.slideVisibleClass);for(var n=0;n<i.length;n+=1){var o=i[n],l=(r+(a.centeredSlides?t.minTranslate():0)-o.swiperSlideOffset)/(o.swiperSlideSize+a.spaceBetween);if(a.watchSlidesVisibility){var d=-(r-o.swiperSlideOffset),p=d+t.slidesSizesGrid[n];(d>=0&&d<t.size||p>0&&p<=t.size||d<=0&&p>=t.size)&&i.eq(n).addClass(a.slideVisibleClass)}o.progress=s?-l:l}}},updateProgress:function(e){void 0===e&&(e=this.translate||0);var t=this,a=t.params,i=t.maxTranslate()-t.minTranslate(),s=t.progress,r=t.isBeginning,n=t.isEnd,o=r,d=n;0===i?(s=0,r=!0,n=!0):(r=(s=(e-t.minTranslate())/i)<=0,n=s>=1),l.extend(t,{progress:s,isBeginning:r,isEnd:n}),(a.watchSlidesProgress||a.watchSlidesVisibility)&&t.updateSlidesProgress(e),r&&!o&&t.emit("reachBeginning toEdge"),n&&!d&&t.emit("reachEnd toEdge"),(o&&!r||d&&!n)&&t.emit("fromEdge"),t.emit("progress",s)},updateSlidesClasses:function(){var e=this,t=e.slides,a=e.params,i=e.$wrapperEl,s=e.activeIndex,r=e.realIndex,n=e.virtual&&a.virtual.enabled;t.removeClass(a.slideActiveClass+" "+a.slideNextClass+" "+a.slidePrevClass+" "+a.slideDuplicateActiveClass+" "+a.slideDuplicateNextClass+" "+a.slideDuplicatePrevClass);var o;(o=n?e.$wrapperEl.find("."+a.slideClass+'[data-swiper-slide-index="'+s+'"]'):t.eq(s)).addClass(a.slideActiveClass),a.loop&&(o.hasClass(a.slideDuplicateClass)?i.children("."+a.slideClass+":not(."+a.slideDuplicateClass+')[data-swiper-slide-index="'+r+'"]').addClass(a.slideDuplicateActiveClass):i.children("."+a.slideClass+"."+a.slideDuplicateClass+'[data-swiper-slide-index="'+r+'"]').addClass(a.slideDuplicateActiveClass));var l=o.nextAll("."+a.slideClass).eq(0).addClass(a.slideNextClass);a.loop&&0===l.length&&(l=t.eq(0)).addClass(a.slideNextClass);var d=o.prevAll("."+a.slideClass).eq(0).addClass(a.slidePrevClass);a.loop&&0===d.length&&(d=t.eq(-1)).addClass(a.slidePrevClass),a.loop&&(l.hasClass(a.slideDuplicateClass)?i.children("."+a.slideClass+":not(."+a.slideDuplicateClass+')[data-swiper-slide-index="'+l.attr("data-swiper-slide-index")+'"]').addClass(a.slideDuplicateNextClass):i.children("."+a.slideClass+"."+a.slideDuplicateClass+'[data-swiper-slide-index="'+l.attr("data-swiper-slide-index")+'"]').addClass(a.slideDuplicateNextClass),d.hasClass(a.slideDuplicateClass)?i.children("."+a.slideClass+":not(."+a.slideDuplicateClass+')[data-swiper-slide-index="'+d.attr("data-swiper-slide-index")+'"]').addClass(a.slideDuplicatePrevClass):i.children("."+a.slideClass+"."+a.slideDuplicateClass+'[data-swiper-slide-index="'+d.attr("data-swiper-slide-index")+'"]').addClass(a.slideDuplicatePrevClass))},updateActiveIndex:function(e){var t,a=this,i=a.rtl?a.translate:-a.translate,s=a.slidesGrid,r=a.snapGrid,n=a.params,o=a.activeIndex,d=a.realIndex,p=a.snapIndex,c=e;if(void 0===c){for(var u=0;u<s.length;u+=1)void 0!==s[u+1]?i>=s[u]&&i<s[u+1]-(s[u+1]-s[u])/2?c=u:i>=s[u]&&i<s[u+1]&&(c=u+1):i>=s[u]&&(c=u);n.normalizeSlideIndex&&(c<0||void 0===c)&&(c=0)}if((t=r.indexOf(i)>=0?r.indexOf(i):Math.floor(c/n.slidesPerGroup))>=r.length&&(t=r.length-1),c!==o){var h=parseInt(a.slides.eq(c).attr("data-swiper-slide-index")||c,10);l.extend(a,{snapIndex:t,realIndex:h,previousIndex:o,activeIndex:c}),a.emit("activeIndexChange"),a.emit("snapIndexChange"),d!==h&&a.emit("realIndexChange"),a.emit("slideChange")}else t!==p&&(a.snapIndex=t,a.emit("snapIndexChange"))},updateClickedSlide:function(t){var a=this,i=a.params,s=e(t.target).closest("."+i.slideClass)[0],r=!1;if(s)for(var n=0;n<a.slides.length;n+=1)a.slides[n]===s&&(r=!0);if(!s||!r)return a.clickedSlide=void 0,void(a.clickedIndex=void 0);a.clickedSlide=s,a.virtual&&a.params.virtual.enabled?a.clickedIndex=parseInt(e(s).attr("data-swiper-slide-index"),10):a.clickedIndex=e(s).index(),i.slideToClickedSlide&&void 0!==a.clickedIndex&&a.clickedIndex!==a.activeIndex&&a.slideToClickedSlide()}},v={getTranslate:function(e){void 0===e&&(e=this.isHorizontal()?"x":"y");var t=this,a=t.params,i=t.rtl,s=t.translate,r=t.$wrapperEl;if(a.virtualTranslate)return i?-s:s;var n=l.getTranslate(r[0],e);return i&&(n=-n),n||0},setTranslate:function(e,t){var a=this,i=a.rtl,s=a.params,r=a.$wrapperEl,n=a.progress,o=0,l=0;a.isHorizontal()?o=i?-e:e:l=e,s.roundLengths&&(o=Math.floor(o),l=Math.floor(l)),s.virtualTranslate||(p.transforms3d?r.transform("translate3d("+o+"px, "+l+"px, 0px)"):r.transform("translate("+o+"px, "+l+"px)")),a.translate=a.isHorizontal()?o:l;var d=a.maxTranslate()-a.minTranslate();(0===d?0:(e-a.minTranslate())/d)!==n&&a.updateProgress(e),a.emit("setTranslate",a.translate,t)},minTranslate:function(){return-this.snapGrid[0]},maxTranslate:function(){return-this.snapGrid[this.snapGrid.length-1]}},f={setTransition:function(e,t){var a=this;a.$wrapperEl.transition(e),a.emit("setTransition",e,t)},transitionStart:function(e){void 0===e&&(e=!0);var t=this,a=t.activeIndex,i=t.params,s=t.previousIndex;i.autoHeight&&t.updateAutoHeight(),t.emit("transitionStart"),e&&a!==s&&(t.emit("slideChangeTransitionStart"),a>s?t.emit("slideNextTransitionStart"):t.emit("slidePrevTransitionStart"))},transitionEnd:function(e){void 0===e&&(e=!0);var t=this,a=t.activeIndex,i=t.previousIndex;t.animating=!1,t.setTransition(0),t.emit("transitionEnd"),e&&a!==i&&(t.emit("slideChangeTransitionEnd"),a>i?t.emit("slideNextTransitionEnd"):t.emit("slidePrevTransitionEnd"))}},m=function(){return{isSafari:function(){var e=s.navigator.userAgent.toLowerCase();return e.indexOf("safari")>=0&&e.indexOf("chrome")<0&&e.indexOf("android")<0}(),isUiWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(s.navigator.userAgent),ie:s.navigator.pointerEnabled||s.navigator.msPointerEnabled,ieTouch:s.navigator.msPointerEnabled&&s.navigator.msMaxTouchPoints>1||s.navigator.pointerEnabled&&s.navigator.maxTouchPoints>1,lteIE9:function(){var e=d.createElement("div");return e.innerHTML="\x3c!--[if lte IE 9]><i></i><![endif]--\x3e",1===e.getElementsByTagName("i").length}()}}(),g={slideTo:function(e,t,a,i){void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===a&&(a=!0);var s=this,r=e;r<0&&(r=0);var n=s.params,o=s.snapGrid,l=s.slidesGrid,d=s.previousIndex,p=s.activeIndex,c=s.rtl,u=s.$wrapperEl,h=Math.floor(r/n.slidesPerGroup);h>=o.length&&(h=o.length-1),(p||n.initialSlide||0)===(d||0)&&a&&s.emit("beforeSlideChangeStart");var v=-o[h];if(s.updateProgress(v),n.normalizeSlideIndex)for(var f=0;f<l.length;f+=1)-Math.floor(100*v)>=Math.floor(100*l[f])&&(r=f);return!(!s.allowSlideNext&&v<s.translate&&v<s.minTranslate()||!s.allowSlidePrev&&v>s.translate&&v>s.maxTranslate()&&(p||0)!==r||(c&&-v===s.translate||!c&&v===s.translate?(s.updateActiveIndex(r),n.autoHeight&&s.updateAutoHeight(),s.updateSlidesClasses(),"slide"!==n.effect&&s.setTranslate(v),1):(0===t||m.lteIE9?(s.setTransition(0),s.setTranslate(v),s.updateActiveIndex(r),s.updateSlidesClasses(),s.emit("beforeTransitionStart",t,i),s.transitionStart(a),s.transitionEnd(a)):(s.setTransition(t),s.setTranslate(v),s.updateActiveIndex(r),s.updateSlidesClasses(),s.emit("beforeTransitionStart",t,i),s.transitionStart(a),s.animating||(s.animating=!0,u.transitionEnd(function(){s&&!s.destroyed&&s.transitionEnd(a)}))),0)))},slideNext:function(e,t,a){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);var i=this,s=i.params,r=i.animating;return s.loop?!r&&(i.loopFix(),i._clientLeft=i.$wrapperEl[0].clientLeft,i.slideTo(i.activeIndex+s.slidesPerGroup,e,t,a)):i.slideTo(i.activeIndex+s.slidesPerGroup,e,t,a)},slidePrev:function(e,t,a){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);var i=this,s=i.params,r=i.animating;return s.loop?!r&&(i.loopFix(),i._clientLeft=i.$wrapperEl[0].clientLeft,i.slideTo(i.activeIndex-1,e,t,a)):i.slideTo(i.activeIndex-1,e,t,a)},slideReset:function(e,t,a){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);var i=this;return i.slideTo(i.activeIndex,e,t,a)},slideToClickedSlide:function(){var t,a=this,i=a.params,s=a.$wrapperEl,r="auto"===i.slidesPerView?a.slidesPerViewDynamic():i.slidesPerView,n=a.clickedIndex;if(i.loop){if(a.animating)return;t=parseInt(e(a.clickedSlide).attr("data-swiper-slide-index"),10),i.centeredSlides?n<a.loopedSlides-r/2||n>a.slides.length-a.loopedSlides+r/2?(a.loopFix(),n=s.children("."+i.slideClass+'[data-swiper-slide-index="'+t+'"]:not(.'+i.slideDuplicateClass+")").eq(0).index(),l.nextTick(function(){a.slideTo(n)})):a.slideTo(n):n>a.slides.length-r?(a.loopFix(),n=s.children("."+i.slideClass+'[data-swiper-slide-index="'+t+'"]:not(.'+i.slideDuplicateClass+")").eq(0).index(),l.nextTick(function(){a.slideTo(n)})):a.slideTo(n)}else a.slideTo(n)}},b={loopCreate:function(){var t=this,a=t.params,i=t.$wrapperEl;i.children("."+a.slideClass+"."+a.slideDuplicateClass).remove();var s=i.children("."+a.slideClass);if(a.loopFillGroupWithBlank){var r=a.slidesPerGroup-s.length%a.slidesPerGroup;if(r!==a.slidesPerGroup){for(var n=0;n<r;n+=1){var o=e(d.createElement("div")).addClass(a.slideClass+" "+a.slideBlankClass);i.append(o)}s=i.children("."+a.slideClass)}}"auto"!==a.slidesPerView||a.loopedSlides||(a.loopedSlides=s.length),t.loopedSlides=parseInt(a.loopedSlides||a.slidesPerView,10),t.loopedSlides+=a.loopAdditionalSlides,t.loopedSlides>s.length&&(t.loopedSlides=s.length);var l=[],p=[];s.each(function(a,i){var r=e(i);a<t.loopedSlides&&p.push(i),a<s.length&&a>=s.length-t.loopedSlides&&l.push(i),r.attr("data-swiper-slide-index",a)});for(var c=0;c<p.length;c+=1)i.append(e(p[c].cloneNode(!0)).addClass(a.slideDuplicateClass));for(var u=l.length-1;u>=0;u-=1)i.prepend(e(l[u].cloneNode(!0)).addClass(a.slideDuplicateClass))},loopFix:function(){var e,t=this,a=t.params,i=t.activeIndex,s=t.slides,r=t.loopedSlides,n=t.allowSlidePrev,o=t.allowSlideNext;t.allowSlidePrev=!0,t.allowSlideNext=!0,i<r?(e=s.length-3*r+i,e+=r,t.slideTo(e,0,!1,!0)):("auto"===a.slidesPerView&&i>=2*r||i>s.length-2*a.slidesPerView)&&(e=-s.length+i+r,e+=r,t.slideTo(e,0,!1,!0)),t.allowSlidePrev=n,t.allowSlideNext=o},loopDestroy:function(){var e=this,t=e.$wrapperEl,a=e.params,i=e.slides;t.children("."+a.slideClass+"."+a.slideDuplicateClass).remove(),i.removeAttr("data-swiper-slide-index")}},w={setGrabCursor:function(e){var t=this;if(!p.touch&&t.params.simulateTouch){var a=t.el;a.style.cursor="move",a.style.cursor=e?"-webkit-grabbing":"-webkit-grab",a.style.cursor=e?"-moz-grabbin":"-moz-grab",a.style.cursor=e?"grabbing":"grab"}},unsetGrabCursor:function(){var e=this;p.touch||(e.el.style.cursor="")}},y={appendSlide:function(e){var t=this,a=t.$wrapperEl,i=t.params;if(i.loop&&t.loopDestroy(),"object"==typeof e&&"length"in e)for(var s=0;s<e.length;s+=1)e[s]&&a.append(e[s]);else a.append(e);i.loop&&t.loopCreate(),i.observer&&p.observer||t.update()},prependSlide:function(e){var t=this,a=t.params,i=t.$wrapperEl,s=t.activeIndex;a.loop&&t.loopDestroy();var r=s+1;if("object"==typeof e&&"length"in e){for(var n=0;n<e.length;n+=1)e[n]&&i.prepend(e[n]);r=s+e.length}else i.prepend(e);a.loop&&t.loopCreate(),a.observer&&p.observer||t.update(),t.slideTo(r,0,!1)},removeSlide:function(e){var t=this,a=t.params,i=t.$wrapperEl,s=t.activeIndex;a.loop&&(t.loopDestroy(),t.slides=i.children("."+a.slideClass));var r,n=s;if("object"==typeof e&&"length"in e){for(var o=0;o<e.length;o+=1)r=e[o],t.slides[r]&&t.slides.eq(r).remove(),r<n&&(n-=1);n=Math.max(n,0)}else r=e,t.slides[r]&&t.slides.eq(r).remove(),r<n&&(n-=1),n=Math.max(n,0);a.loop&&t.loopCreate(),a.observer&&p.observer||t.update(),a.loop?t.slideTo(n+t.loopedSlides,0,!1):t.slideTo(n,0,!1)},removeAllSlides:function(){for(var e=this,t=[],a=0;a<e.slides.length;a+=1)t.push(a);e.removeSlide(t)}},x=function(){var e=s.navigator.userAgent,t={ios:!1,android:!1,androidChrome:!1,desktop:!1,windows:!1,iphone:!1,ipod:!1,ipad:!1,cordova:s.cordova||s.phonegap,phonegap:s.cordova||s.phonegap},a=e.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),i=e.match(/(Android);?[\s\/]+([\d.]+)?/),r=e.match(/(iPad).*OS\s([\d_]+)/),n=e.match(/(iPod)(.*OS\s([\d_]+))?/),o=!r&&e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);if(a&&(t.os="windows",t.osVersion=a[2],t.windows=!0),i&&!a&&(t.os="android",t.osVersion=i[2],t.android=!0,t.androidChrome=e.toLowerCase().indexOf("chrome")>=0),(r||o||n)&&(t.os="ios",t.ios=!0),o&&!n&&(t.osVersion=o[2].replace(/_/g,"."),t.iphone=!0),r&&(t.osVersion=r[2].replace(/_/g,"."),t.ipad=!0),n&&(t.osVersion=n[3]?n[3].replace(/_/g,"."):null,t.iphone=!0),t.ios&&t.osVersion&&e.indexOf("Version/")>=0&&"10"===t.osVersion.split(".")[0]&&(t.osVersion=e.toLowerCase().split("version/")[1].split(" ")[0]),t.desktop=!(t.os||t.android||t.webView),t.webView=(o||r||n)&&e.match(/.*AppleWebKit(?!.*Safari)/i),t.os&&"ios"===t.os){var l=t.osVersion.split("."),p=d.querySelector('meta[name="viewport"]');t.minimalUi=!t.webView&&(n||o)&&(1*l[0]==7?1*l[1]>=1:1*l[0]>7)&&p&&p.getAttribute("content").indexOf("minimal-ui")>=0}return t.pixelRatio=s.devicePixelRatio||1,t}(),T=function(t){var a=this,i=a.touchEventsData,s=a.params,r=a.touches,n=t;if(n.originalEvent&&(n=n.originalEvent),i.isTouchEvent="touchstart"===n.type,(i.isTouchEvent||!("which"in n)||3!==n.which)&&(!i.isTouched||!i.isMoved))if(s.noSwiping&&e(n.target).closest("."+s.noSwipingClass)[0])a.allowClick=!0;else if(!s.swipeHandler||e(n).closest(s.swipeHandler)[0]){r.currentX="touchstart"===n.type?n.targetTouches[0].pageX:n.pageX,r.currentY="touchstart"===n.type?n.targetTouches[0].pageY:n.pageY;var o=r.currentX,p=r.currentY;if(!(x.ios&&!x.cordova&&s.iOSEdgeSwipeDetection&&o<=s.iOSEdgeSwipeThreshold&&o>=window.screen.width-s.iOSEdgeSwipeThreshold)){if(l.extend(i,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),r.startX=o,r.startY=p,i.touchStartTime=l.now(),a.allowClick=!0,a.updateSize(),a.swipeDirection=void 0,s.threshold>0&&(i.allowThresholdMove=!1),"touchstart"!==n.type){var c=!0;e(n.target).is(i.formElements)&&(c=!1),d.activeElement&&e(d.activeElement).is(i.formElements)&&d.activeElement.blur(),c&&a.allowTouchMove&&n.preventDefault()}a.emit("touchStart",n)}}},E=function(t){var a=this,i=a.touchEventsData,s=a.params,r=a.touches,n=a.rtl,o=t;if(o.originalEvent&&(o=o.originalEvent),!i.isTouchEvent||"mousemove"!==o.type){var p="touchmove"===o.type?o.targetTouches[0].pageX:o.pageX,c="touchmove"===o.type?o.targetTouches[0].pageY:o.pageY;if(o.preventedByNestedSwiper)return r.startX=p,void(r.startY=c);if(!a.allowTouchMove)return a.allowClick=!1,void(i.isTouched&&(l.extend(r,{startX:p,startY:c,currentX:p,currentY:c}),i.touchStartTime=l.now()));if(i.isTouchEvent&&s.touchReleaseOnEdges&&!s.loop)if(a.isVertical()){if(c<r.startY&&a.translate<=a.maxTranslate()||c>r.startY&&a.translate>=a.minTranslate())return i.isTouched=!1,void(i.isMoved=!1)}else if(p<r.startX&&a.translate<=a.maxTranslate()||p>r.startX&&a.translate>=a.minTranslate())return;if(i.isTouchEvent&&d.activeElement&&o.target===d.activeElement&&e(o.target).is(i.formElements))return i.isMoved=!0,void(a.allowClick=!1);if(i.allowTouchCallbacks&&a.emit("touchMove",o),!(o.targetTouches&&o.targetTouches.length>1)){r.currentX=p,r.currentY=c;var u=r.currentX-r.startX,h=r.currentY-r.startY;if(void 0===i.isScrolling){var v;a.isHorizontal()&&r.currentY===r.startY||a.isVertical()&&r.currentX===r.startX?i.isScrolling=!1:u*u+h*h>=25&&(v=180*Math.atan2(Math.abs(h),Math.abs(u))/Math.PI,i.isScrolling=a.isHorizontal()?v>s.touchAngle:90-v>s.touchAngle)}if(i.isScrolling&&a.emit("touchMoveOpposite",o),"undefined"==typeof startMoving&&(r.currentX===r.startX&&r.currentY===r.startY||(i.startMoving=!0)),i.isTouched)if(i.isScrolling)i.isTouched=!1;else if(i.startMoving){a.allowClick=!1,o.preventDefault(),s.touchMoveStopPropagation&&!s.nested&&o.stopPropagation(),i.isMoved||(s.loop&&a.loopFix(),i.startTranslate=a.getTranslate(),a.setTransition(0),a.animating&&a.$wrapperEl.trigger("webkitTransitionEnd transitionend"),i.allowMomentumBounce=!1,!s.grabCursor||!0!==a.allowSlideNext&&!0!==a.allowSlidePrev||a.setGrabCursor(!0),a.emit("sliderFirstMove",o)),a.emit("sliderMove",o),i.isMoved=!0;var f=a.isHorizontal()?u:h;r.diff=f,f*=s.touchRatio,n&&(f=-f),a.swipeDirection=f>0?"prev":"next",i.currentTranslate=f+i.startTranslate;var m=!0,g=s.resistanceRatio;if(s.touchReleaseOnEdges&&(g=0),f>0&&i.currentTranslate>a.minTranslate()?(m=!1,s.resistance&&(i.currentTranslate=a.minTranslate()-1+Math.pow(-a.minTranslate()+i.startTranslate+f,g))):f<0&&i.currentTranslate<a.maxTranslate()&&(m=!1,s.resistance&&(i.currentTranslate=a.maxTranslate()+1-Math.pow(a.maxTranslate()-i.startTranslate-f,g))),m&&(o.preventedByNestedSwiper=!0),!a.allowSlideNext&&"next"===a.swipeDirection&&i.currentTranslate<i.startTranslate&&(i.currentTranslate=i.startTranslate),!a.allowSlidePrev&&"prev"===a.swipeDirection&&i.currentTranslate>i.startTranslate&&(i.currentTranslate=i.startTranslate),s.threshold>0){if(!(Math.abs(f)>s.threshold||i.allowThresholdMove))return void(i.currentTranslate=i.startTranslate);if(!i.allowThresholdMove)return i.allowThresholdMove=!0,r.startX=r.currentX,r.startY=r.currentY,i.currentTranslate=i.startTranslate,void(r.diff=a.isHorizontal()?r.currentX-r.startX:r.currentY-r.startY)}s.followFinger&&((s.freeMode||s.watchSlidesProgress||s.watchSlidesVisibility)&&(a.updateActiveIndex(),a.updateSlidesClasses()),s.freeMode&&(0===i.velocities.length&&i.velocities.push({position:r[a.isHorizontal()?"startX":"startY"],time:i.touchStartTime}),i.velocities.push({position:r[a.isHorizontal()?"currentX":"currentY"],time:l.now()})),a.updateProgress(i.currentTranslate),a.setTranslate(i.currentTranslate))}}}},S=function(e){var t=this,a=t.touchEventsData,i=t.params,s=t.touches,r=t.rtl,n=t.$wrapperEl,o=t.slidesGrid,d=t.snapGrid,p=e;if(p.originalEvent&&(p=p.originalEvent),a.allowTouchCallbacks&&t.emit("touchEnd",p),a.allowTouchCallbacks=!1,a.isTouched){i.grabCursor&&a.isMoved&&a.isTouched&&(!0===t.allowSlideNext||!0===t.allowSlidePrev)&&t.setGrabCursor(!1);var c=l.now(),u=c-a.touchStartTime;if(t.allowClick&&(t.updateClickedSlide(p),t.emit("tap",p),u<300&&c-a.lastClickTime>300&&(a.clickTimeout&&clearTimeout(a.clickTimeout),a.clickTimeout=l.nextTick(function(){t&&!t.destroyed&&t.emit("click",p)},300)),u<300&&c-a.lastClickTime<300&&(a.clickTimeout&&clearTimeout(a.clickTimeout),t.emit("doubleTap",p))),a.lastClickTime=l.now(),l.nextTick(function(){t.destroyed||(t.allowClick=!0)}),!a.isTouched||!a.isMoved||!t.swipeDirection||0===s.diff||a.currentTranslate===a.startTranslate)return a.isTouched=!1,void(a.isMoved=!1);a.isTouched=!1,a.isMoved=!1;var h;if(h=i.followFinger?r?t.translate:-t.translate:-a.currentTranslate,i.freeMode){if(h<-t.minTranslate())return void t.slideTo(t.activeIndex);if(h>-t.maxTranslate())return void(t.slides.length<d.length?t.slideTo(d.length-1):t.slideTo(t.slides.length-1));if(i.freeModeMomentum){if(a.velocities.length>1){var v=a.velocities.pop(),f=a.velocities.pop(),m=v.position-f.position,g=v.time-f.time;t.velocity=m/g,t.velocity/=2,Math.abs(t.velocity)<i.freeModeMinimumVelocity&&(t.velocity=0),(g>150||l.now()-v.time>300)&&(t.velocity=0)}else t.velocity=0;t.velocity*=i.freeModeMomentumVelocityRatio,a.velocities.length=0;var b=1e3*i.freeModeMomentumRatio,w=t.velocity*b,y=t.translate+w;r&&(y=-y);var x,T=!1,E=20*Math.abs(t.velocity)*i.freeModeMomentumBounceRatio;if(y<t.maxTranslate())i.freeModeMomentumBounce?(y+t.maxTranslate()<-E&&(y=t.maxTranslate()-E),x=t.maxTranslate(),T=!0,a.allowMomentumBounce=!0):y=t.maxTranslate();else if(y>t.minTranslate())i.freeModeMomentumBounce?(y-t.minTranslate()>E&&(y=t.minTranslate()+E),x=t.minTranslate(),T=!0,a.allowMomentumBounce=!0):y=t.minTranslate();else if(i.freeModeSticky){for(var S,C=0;C<d.length;C+=1)if(d[C]>-y){S=C;break}y=-(y=Math.abs(d[S]-y)<Math.abs(d[S-1]-y)||"next"===t.swipeDirection?d[S]:d[S-1])}if(0!==t.velocity)b=r?Math.abs((-y-t.translate)/t.velocity):Math.abs((y-t.translate)/t.velocity);else if(i.freeModeSticky)return void t.slideReset();i.freeModeMomentumBounce&&T?(t.updateProgress(x),t.setTransition(b),t.setTranslate(y),t.transitionStart(),t.animating=!0,n.transitionEnd(function(){t&&!t.destroyed&&a.allowMomentumBounce&&(t.emit("momentumBounce"),t.setTransition(i.speed),t.setTranslate(x),n.transitionEnd(function(){t&&!t.destroyed&&t.transitionEnd()}))})):t.velocity?(t.updateProgress(y),t.setTransition(b),t.setTranslate(y),t.transitionStart(),t.animating||(t.animating=!0,n.transitionEnd(function(){t&&!t.destroyed&&t.transitionEnd()}))):t.updateProgress(y),t.updateActiveIndex(),t.updateSlidesClasses()}(!i.freeModeMomentum||u>=i.longSwipesMs)&&(t.updateProgress(),t.updateActiveIndex(),t.updateSlidesClasses())}else{for(var M=0,z=t.slidesSizesGrid[0],P=0;P<o.length;P+=i.slidesPerGroup)void 0!==o[P+i.slidesPerGroup]?h>=o[P]&&h<o[P+i.slidesPerGroup]&&(M=P,z=o[P+i.slidesPerGroup]-o[P]):h>=o[P]&&(M=P,z=o[o.length-1]-o[o.length-2]);var k=(h-o[M])/z;if(u>i.longSwipesMs){if(!i.longSwipes)return void t.slideTo(t.activeIndex);"next"===t.swipeDirection&&(k>=i.longSwipesRatio?t.slideTo(M+i.slidesPerGroup):t.slideTo(M)),"prev"===t.swipeDirection&&(k>1-i.longSwipesRatio?t.slideTo(M+i.slidesPerGroup):t.slideTo(M))}else{if(!i.shortSwipes)return void t.slideTo(t.activeIndex);"next"===t.swipeDirection&&t.slideTo(M+i.slidesPerGroup),"prev"===t.swipeDirection&&t.slideTo(M)}}}},C=function(){var e=this,t=e.params,a=e.el;if(!a||0!==a.offsetWidth){t.breakpoints&&e.setBreakpoint();var i=e.allowSlideNext,s=e.allowSlidePrev;if(e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),t.freeMode){var r=Math.min(Math.max(e.translate,e.maxTranslate()),e.minTranslate());e.setTranslate(r),e.updateActiveIndex(),e.updateSlidesClasses(),t.autoHeight&&e.updateAutoHeight()}else e.updateSlidesClasses(),("auto"===t.slidesPerView||t.slidesPerView>1)&&e.isEnd&&!e.params.centeredSlides?e.slideTo(e.slides.length-1,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0);e.allowSlidePrev=s,e.allowSlideNext=i}},M=function(e){var t=this;t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation()))},z={init:!0,direction:"horizontal",touchEventsTarget:"container",initialSlide:0,speed:300,iOSEdgeSwipeDetection:!1,iOSEdgeSwipeThreshold:20,freeMode:!1,freeModeMomentum:!0,freeModeMomentumRatio:1,freeModeMomentumBounce:!0,freeModeMomentumBounceRatio:1,freeModeMomentumVelocityRatio:1,freeModeSticky:!1,freeModeMinimumVelocity:.02,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,spaceBetween:0,slidesPerView:1,slidesPerColumn:1,slidesPerColumnFill:"column",slidesPerGroup:1,centeredSlides:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:0,touchMoveStopPropagation:!0,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,watchSlidesVisibility:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,loopFillGroupWithBlank:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",passiveListeners:!0,containerModifierClass:"swiper-container-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-invisible-blank",slideActiveClass:"swiper-slide-active",slideDuplicateActiveClass:"swiper-slide-duplicate-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slideDuplicateNextClass:"swiper-slide-duplicate-next",slidePrevClass:"swiper-slide-prev",slideDuplicatePrevClass:"swiper-slide-duplicate-prev",wrapperClass:"swiper-wrapper",runCallbacksOnInit:!0},P={update:h,translate:v,transition:f,slide:g,loop:b,grabCursor:w,manipulation:y,events:{attachEvents:function(){var e=this,t=e.params,a=e.touchEvents,i=e.el,s=e.wrapperEl;e.onTouchStart=T.bind(e),e.onTouchMove=E.bind(e),e.onTouchEnd=S.bind(e),e.onClick=M.bind(e);var r="container"===t.touchEventsTarget?i:s,n=!!t.nested;if(m.ie)r.addEventListener(a.start,e.onTouchStart,!1),(p.touch?r:d).addEventListener(a.move,e.onTouchMove,n),(p.touch?r:d).addEventListener(a.end,e.onTouchEnd,!1);else{if(p.touch){var o=!("touchstart"!==a.start||!p.passiveListener||!t.passiveListeners)&&{passive:!0,capture:!1};r.addEventListener(a.start,e.onTouchStart,o),r.addEventListener(a.move,e.onTouchMove,p.passiveListener?{passive:!1,capture:n}:n),r.addEventListener(a.end,e.onTouchEnd,o)}(t.simulateTouch&&!x.ios&&!x.android||t.simulateTouch&&!p.touch&&x.ios)&&(r.addEventListener("mousedown",e.onTouchStart,!1),d.addEventListener("mousemove",e.onTouchMove,n),d.addEventListener("mouseup",e.onTouchEnd,!1))}(t.preventClicks||t.preventClicksPropagation)&&r.addEventListener("click",e.onClick,!0),e.on("resize observerUpdate",C)},detachEvents:function(){var e=this,t=e.params,a=e.touchEvents,i=e.el,s=e.wrapperEl,r="container"===t.touchEventsTarget?i:s,n=!!t.nested;if(m.ie)r.removeEventListener(a.start,e.onTouchStart,!1),(p.touch?r:d).removeEventListener(a.move,e.onTouchMove,n),(p.touch?r:d).removeEventListener(a.end,e.onTouchEnd,!1);else{if(p.touch){var o=!("onTouchStart"!==a.start||!p.passiveListener||!t.passiveListeners)&&{passive:!0,capture:!1};r.removeEventListener(a.start,e.onTouchStart,o),r.removeEventListener(a.move,e.onTouchMove,n),r.removeEventListener(a.end,e.onTouchEnd,o)}(t.simulateTouch&&!x.ios&&!x.android||t.simulateTouch&&!p.touch&&x.ios)&&(r.removeEventListener("mousedown",e.onTouchStart,!1),d.removeEventListener("mousemove",e.onTouchMove,n),d.removeEventListener("mouseup",e.onTouchEnd,!1))}(t.preventClicks||t.preventClicksPropagation)&&r.removeEventListener("click",e.onClick,!0),e.off("resize observerUpdate",C)}},breakpoints:{setBreakpoint:function(){var e=this,t=e.activeIndex,a=e.loopedSlides;void 0===a&&(a=0);var i=e.params,s=i.breakpoints;if(s&&(!s||0!==Object.keys(s).length)){var r=e.getBreakpoint(s);if(r&&e.currentBreakpoint!==r){var n=r in s?s[r]:e.originalParams,o=i.loop&&n.slidesPerView!==i.slidesPerView;l.extend(e.params,n),l.extend(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),e.currentBreakpoint=r,o&&(e.loopDestroy(),e.loopCreate(),e.updateSlides(),e.slideTo(t-a+e.loopedSlides,0,!1)),e.emit("breakpoint",n)}}},getBreakpoint:function(e){if(e){var t=!1,a=[];Object.keys(e).forEach(function(e){a.push(e)}),a.sort(function(e,t){return parseInt(e,10)-parseInt(t,10)});for(var i=0;i<a.length;i+=1){var r=a[i];r>=s.innerWidth&&!t&&(t=r)}return t||"max"}}},classes:{addClasses:function(){var e=this,t=e.classNames,a=e.params,i=e.rtl,r=e.$el,n=[];n.push(a.direction),a.freeMode&&n.push("free-mode"),p.flexbox||n.push("no-flexbox"),a.autoHeight&&n.push("autoheight"),i&&n.push("rtl"),a.slidesPerColumn>1&&n.push("multirow"),x.android&&n.push("android"),x.ios&&n.push("ios"),(s.navigator.pointerEnabled||s.navigator.msPointerEnabled)&&n.push("wp8-"+a.direction),n.forEach(function(e){t.push(a.containerModifierClass+e)}),r.addClass(t.join(" "))},removeClasses:function(){var e=this,t=e.$el,a=e.classNames;t.removeClass(a.join(" "))}},images:{loadImage:function(e,t,a,i,r,n){function o(){n&&n()}var l;e.complete&&r?o():t?((l=new s.Image).onload=o,l.onerror=o,i&&(l.sizes=i),a&&(l.srcset=a),t&&(l.src=t)):o()},preloadImages:function(){var e=this;e.imagesToLoad=e.$el.find("img");for(var t=0;t<e.imagesToLoad.length;t+=1){var a=e.imagesToLoad[t];e.loadImage(a,a.currentSrc||a.getAttribute("src"),a.srcset||a.getAttribute("srcset"),a.sizes||a.getAttribute("sizes"),!0,function(){void 0!==e&&null!==e&&e&&!e.destroyed&&(void 0!==e.imagesLoaded&&(e.imagesLoaded+=1),e.imagesLoaded===e.imagesToLoad.length&&(e.params.updateOnImagesReady&&e.update(),e.emit("imagesReady")))})}}}},k={},$=function(t){function a(){for(var i=[],r=arguments.length;r--;)i[r]=arguments[r];var n,o;if(1===i.length&&i[0].constructor&&i[0].constructor===Object)o=i[0];else{var d;n=(d=i)[0],o=d[1]}o||(o={}),o=l.extend({},o),n&&!o.el&&(o.el=n),t.call(this,o),Object.keys(P).forEach(function(e){Object.keys(P[e]).forEach(function(t){a.prototype[t]||(a.prototype[t]=P[e][t])})});var c=this;void 0===c.modules&&(c.modules={}),Object.keys(c.modules).forEach(function(e){var t=c.modules[e];if(t.params){var a=Object.keys(t.params)[0],i=t.params[a];if("object"!=typeof i)return;if(!(a in o&&"enabled"in i))return;!0===o[a]&&(o[a]={enabled:!0}),"object"!=typeof o[a]||"enabled"in o[a]||(o[a].enabled=!0),o[a]||(o[a]={enabled:!1})}});var u=l.extend({},z);c.useModulesParams(u),c.params=l.extend({},u,k,o),c.originalParams=l.extend({},c.params),c.passedParams=l.extend({},o);var h=e(c.params.el);if(n=h[0]){if(h.length>1){var v=[];return h.each(function(e,t){var i=l.extend({},o,{el:t});v.push(new a(i))}),v}n.swiper=c,h.data("swiper",c);var f=h.children("."+c.params.wrapperClass);return l.extend(c,{$el:h,el:n,$wrapperEl:f,wrapperEl:f[0],classNames:[],slides:e(),slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal:function(){return"horizontal"===c.params.direction},isVertical:function(){return"vertical"===c.params.direction},rtl:"horizontal"===c.params.direction&&("rtl"===n.dir.toLowerCase()||"rtl"===h.css("direction")),wrongRTL:"-webkit-box"===f.css("display"),activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,progress:0,velocity:0,animating:!1,allowSlideNext:c.params.allowSlideNext,allowSlidePrev:c.params.allowSlidePrev,touchEvents:function(){var e=["touchstart","touchmove","touchend"],t=["mousedown","mousemove","mouseup"];return s.navigator.pointerEnabled?t=["pointerdown","pointermove","pointerup"]:s.navigator.msPointerEnabled&&(t=["MSPointerDown","MsPointerMove","MsPointerUp"]),{start:p.touch||!c.params.simulateTouch?e[0]:t[0],move:p.touch||!c.params.simulateTouch?e[1]:t[1],end:p.touch||!c.params.simulateTouch?e[2]:t[2]}}(),touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,formElements:"input, select, option, textarea, button, video",lastClickTime:l.now(),clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,isTouchEvent:void 0,startMoving:void 0},allowClick:!0,allowTouchMove:c.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),c.useModules(),c.params.init&&c.init(),c}}t&&(a.__proto__=t),a.prototype=Object.create(t&&t.prototype),a.prototype.constructor=a;var i={extendedDefaults:{},defaults:{},Class:{},$:{}};return a.prototype.slidesPerViewDynamic=function(){var e=this,t=e.params,a=e.slides,i=e.slidesGrid,s=e.size,r=e.activeIndex,n=1;if(t.centeredSlides){for(var o,l=a[r].swiperSlideSize,d=r+1;d<a.length;d+=1)a[d]&&!o&&(n+=1,(l+=a[d].swiperSlideSize)>s&&(o=!0));for(var p=r-1;p>=0;p-=1)a[p]&&!o&&(n+=1,(l+=a[p].swiperSlideSize)>s&&(o=!0))}else for(var c=r+1;c<a.length;c+=1)i[c]-i[r]<s&&(n+=1);return n},a.prototype.update=function(){function e(){a=Math.min(Math.max(t.translate,t.maxTranslate()),t.minTranslate()),t.setTranslate(a),t.updateActiveIndex(),t.updateSlidesClasses()}var t=this;if(t&&!t.destroyed){t.updateSize(),t.updateSlides(),t.updateProgress(),t.updateSlidesClasses();var a;t.params.freeMode?(e(),t.params.autoHeight&&t.updateAutoHeight()):(("auto"===t.params.slidesPerView||t.params.slidesPerView>1)&&t.isEnd&&!t.params.centeredSlides?t.slideTo(t.slides.length-1,0,!1,!0):t.slideTo(t.activeIndex,0,!1,!0))||e(),t.emit("update")}},a.prototype.init=function(){var e=this;e.initialized||(e.emit("beforeInit"),e.params.breakpoints&&e.setBreakpoint(),e.addClasses(),e.params.loop&&e.loopCreate(),e.updateSize(),e.updateSlides(),e.params.grabCursor&&e.setGrabCursor(),e.params.preloadImages&&e.preloadImages(),e.params.loop?e.slideTo(e.params.initialSlide+e.loopedSlides,0,e.params.runCallbacksOnInit):e.slideTo(e.params.initialSlide,0,e.params.runCallbacksOnInit),e.attachEvents(),e.initialized=!0,e.emit("init"))},a.prototype.destroy=function(e,t){void 0===e&&(e=!0),void 0===t&&(t=!0);var a=this,i=a.params,s=a.$el,r=a.$wrapperEl,n=a.slides;a.emit("beforeDestroy"),a.initialized=!1,a.detachEvents(),i.loop&&a.loopDestroy(),t&&(a.removeClasses(),s.removeAttr("style"),r.removeAttr("style"),n&&n.length&&n.removeClass([i.slideVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")),a.emit("destroy"),Object.keys(a.eventsListeners).forEach(function(e){a.off(e)}),!1!==e&&(a.$el[0].swiper=null,a.$el.data("swiper",null),l.deleteProps(a)),a.destroyed=!0},a.extendDefaults=function(e){l.extend(k,e)},i.extendedDefaults.get=function(){return k},i.defaults.get=function(){return z},i.Class.get=function(){return t},i.$.get=function(){return e},Object.defineProperties(a,i),a}(c),I={name:"device",proto:{device:x},static:{device:x}},L={name:"support",proto:{support:p},static:{support:p}},D={name:"browser",proto:{browser:m},static:{browser:m}},O={name:"resize",create:function(){var e=this;l.extend(e,{resize:{resizeHandler:function(){e&&!e.destroyed&&e.initialized&&(e.emit("beforeResize"),e.emit("resize"))},orientationChangeHandler:function(){e&&!e.destroyed&&e.initialized&&e.emit("orientationchange")}}})},on:{init:function(){var e=this;s.addEventListener("resize",e.resize.resizeHandler),s.addEventListener("orientationchange",e.resize.orientationChangeHandler)},destroy:function(){var e=this;s.removeEventListener("resize",e.resize.resizeHandler),s.removeEventListener("orientationchange",e.resize.orientationChangeHandler)}}},A={func:s.MutationObserver||s.WebkitMutationObserver,attach:function(e,t){void 0===t&&(t={});var a=this,i=new(0,A.func)(function(e){e.forEach(function(e){a.emit("observerUpdate",e)})});i.observe(e,{attributes:void 0===t.attributes||t.attributes,childList:void 0===t.childList||t.childList,characterData:void 0===t.characterData||t.characterData}),a.observer.observers.push(i)},init:function(){var e=this;if(p.observer&&e.params.observer){if(e.params.observeParents)for(var t=e.$el.parents(),a=0;a<t.length;a+=1)e.observer.attach(t[a]);e.observer.attach(e.$el[0],{childList:!1}),e.observer.attach(e.$wrapperEl[0],{attributes:!1})}},destroy:function(){var e=this;e.observer.observers.forEach(function(e){e.disconnect()}),e.observer.observers=[]}},H={name:"observer",params:{observer:!1,observeParents:!1},create:function(){var e=this;l.extend(e,{observer:{init:A.init.bind(e),attach:A.attach.bind(e),destroy:A.destroy.bind(e),observers:[]}})},on:{init:function(){this.observer.init()},destroy:function(){this.observer.destroy()}}},N={update:function(e){function t(){a.updateSlides(),a.updateProgress(),a.updateSlidesClasses(),a.lazy&&a.params.lazy.enabled&&a.lazy.load()}var a=this,i=a.params,s=i.slidesPerView,r=i.slidesPerGroup,n=i.centeredSlides,o=a.virtual,d=o.from,p=o.to,c=o.slides,u=o.slidesGrid,h=o.renderSlide,v=o.offset;a.updateActiveIndex();var f,m=a.activeIndex||0;f=a.rtl&&a.isHorizontal()?"right":a.isHorizontal()?"left":"top";var g,b;n?(g=Math.floor(s/2)+r,b=Math.floor(s/2)+r):(g=s+(r-1),b=r);var w=Math.max((m||0)-b,0),y=Math.min((m||0)+g,c.length-1),x=(a.slidesGrid[w]||0)-(a.slidesGrid[0]||0);if(l.extend(a.virtual,{from:w,to:y,offset:x,slidesGrid:a.slidesGrid}),d===w&&p===y&&!e)return a.slidesGrid!==u&&x!==v&&a.slides.css(f,x+"px"),void a.updateProgress();if(a.params.virtual.renderExternal)return a.params.virtual.renderExternal.call(a,{offset:x,from:w,to:y,slides:function(){for(var e=[],t=w;t<=y;t+=1)e.push(c[t]);return e}()}),void t();var T=[],E=[];if(e)a.$wrapperEl.find("."+a.params.slideClass).remove();else for(var S=d;S<=p;S+=1)(S<w||S>y)&&a.$wrapperEl.find("."+a.params.slideClass+'[data-swiper-slide-index="'+S+'"]').remove();for(var C=0;C<c.length;C+=1)C>=w&&C<=y&&(void 0===p||e?E.push(C):(C>p&&E.push(C),C<d&&T.push(C)));E.forEach(function(e){a.$wrapperEl.append(h(c[e],e))}),T.sort(function(e,t){return e<t}).forEach(function(e){a.$wrapperEl.prepend(h(c[e],e))}),a.$wrapperEl.children(".swiper-slide").css(f,x+"px"),t()},renderSlide:function(t,a){var i=this,s=i.params.virtual;if(s.cache&&i.virtual.cache[a])return i.virtual.cache[a];var r=e(s.renderSlide?s.renderSlide.call(i,t,a):'<div class="'+i.params.slideClass+'" data-swiper-slide-index="'+a+'">'+t+"</div>");return r.attr("data-swiper-slide-index")||r.attr("data-swiper-slide-index",a),s.cache&&(i.virtual.cache[a]=r),r},appendSlide:function(e){var t=this;t.virtual.slides.push(e),t.virtual.update(!0)},prependSlide:function(e){var t=this;if(t.virtual.slides.unshift(e),t.params.virtual.cache){var a=t.virtual.cache,i={};Object.keys(a).forEach(function(e){i[e+1]=a[e]}),t.virtual.cache=i}t.virtual.update(!0),t.slideNext(0)}},X={name:"virtual",params:{virtual:{enabled:!1,slides:[],cache:!0,renderSlide:null,renderExternal:null}},create:function(){var e=this;l.extend(e,{virtual:{update:N.update.bind(e),appendSlide:N.appendSlide.bind(e),prependSlide:N.prependSlide.bind(e),renderSlide:N.renderSlide.bind(e),slides:e.params.virtual.slides,cache:{}}})},on:{beforeInit:function(){var e=this;if(e.params.virtual.enabled){e.classNames.push(e.params.containerModifierClass+"virtual");var t={watchSlidesProgress:!0};l.extend(e.params,t),l.extend(e.originalParams,t),e.virtual.update()}},setTranslate:function(){var e=this;e.params.virtual.enabled&&e.virtual.update()}}},Y={handle:function(e){var t=this,a=e;a.originalEvent&&(a=a.originalEvent);var i=a.keyCode||a.charCode;if(!t.allowSlideNext&&(t.isHorizontal()&&39===i||t.isVertical()&&40===i))return!1;if(!t.allowSlidePrev&&(t.isHorizontal()&&37===i||t.isVertical()&&38===i))return!1;if(!(a.shiftKey||a.altKey||a.ctrlKey||a.metaKey||d.activeElement&&d.activeElement.nodeName&&("input"===d.activeElement.nodeName.toLowerCase()||"textarea"===d.activeElement.nodeName.toLowerCase()))){if(37===i||39===i||38===i||40===i){var r=!1;if(t.$el.parents("."+t.params.slideClass).length>0&&0===t.$el.parents("."+t.params.slideActiveClass).length)return;var n={left:s.pageXOffset,top:s.pageYOffset},o=s.innerWidth,l=s.innerHeight,p=t.$el.offset();t.rtl&&(p.left-=t.$el[0].scrollLeft);for(var c=[[p.left,p.top],[p.left+t.width,p.top],[p.left,p.top+t.height],[p.left+t.width,p.top+t.height]],u=0;u<c.length;u+=1){var h=c[u];h[0]>=n.left&&h[0]<=n.left+o&&h[1]>=n.top&&h[1]<=n.top+l&&(r=!0)}if(!r)return}t.isHorizontal()?(37!==i&&39!==i||(a.preventDefault?a.preventDefault():a.returnValue=!1),(39===i&&!t.rtl||37===i&&t.rtl)&&t.slideNext(),(37===i&&!t.rtl||39===i&&t.rtl)&&t.slidePrev()):(38!==i&&40!==i||(a.preventDefault?a.preventDefault():a.returnValue=!1),40===i&&t.slideNext(),38===i&&t.slidePrev()),t.emit("keyPress",i)}},enable:function(){var t=this;t.keyboard.enabled||(e(d).on("keydown",t.keyboard.handle),t.keyboard.enabled=!0)},disable:function(){var t=this;t.keyboard.enabled&&(e(d).off("keydown",t.keyboard.handle),t.keyboard.enabled=!1)}},G={name:"keyboard",params:{keyboard:{enabled:!1}},create:function(){var e=this;l.extend(e,{keyboard:{enabled:!1,enable:Y.enable.bind(e),disable:Y.disable.bind(e),handle:Y.handle.bind(e)}})},on:{init:function(){var e=this;e.params.keyboard.enabled&&e.keyboard.enable()},destroy:function(){var e=this;e.keyboard.enabled&&e.keyboard.disable()}}},B={lastScrollTime:l.now(),event:s.navigator.userAgent.indexOf("firefox")>-1?"DOMMouseScroll":a()?"wheel":"mousewheel",normalize:function(e){var t=0,a=0,i=0,s=0;return"detail"in e&&(a=e.detail),"wheelDelta"in e&&(a=-e.wheelDelta/120),"wheelDeltaY"in e&&(a=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(t=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(t=a,a=0),i=10*t,s=10*a,"deltaY"in e&&(s=e.deltaY),"deltaX"in e&&(i=e.deltaX),(i||s)&&e.deltaMode&&(1===e.deltaMode?(i*=40,s*=40):(i*=800,s*=800)),i&&!t&&(t=i<1?-1:1),s&&!a&&(a=s<1?-1:1),{spinX:t,spinY:a,pixelX:i,pixelY:s}},handle:function(e){var t=e,a=this,i=a.params.mousewheel;t.originalEvent&&(t=t.originalEvent);var r=0,n=a.rtl?-1:1,o=B.normalize(t);if(i.forceToAxis)if(a.isHorizontal()){if(!(Math.abs(o.pixelX)>Math.abs(o.pixelY)))return!0;r=o.pixelX*n}else{if(!(Math.abs(o.pixelY)>Math.abs(o.pixelX)))return!0;r=o.pixelY}else r=Math.abs(o.pixelX)>Math.abs(o.pixelY)?-o.pixelX*n:-o.pixelY;if(0===r)return!0;if(i.invert&&(r=-r),a.params.freeMode){var d=a.getTranslate()+r*i.sensitivity,p=a.isBeginning,c=a.isEnd;if(d>=a.minTranslate()&&(d=a.minTranslate()),d<=a.maxTranslate()&&(d=a.maxTranslate()),a.setTransition(0),a.setTranslate(d),a.updateProgress(),a.updateActiveIndex(),a.updateSlidesClasses(),(!p&&a.isBeginning||!c&&a.isEnd)&&a.updateSlidesClasses(),a.params.freeModeSticky&&(clearTimeout(a.mousewheel.timeout),a.mousewheel.timeout=l.nextTick(function(){a.slideReset()},300)),a.emit("scroll",t),a.params.autoplay&&a.params.autoplayDisableOnInteraction&&a.stopAutoplay(),0===d||d===a.maxTranslate())return!0}else{if(l.now()-a.mousewheel.lastScrollTime>60)if(r<0)if(a.isEnd&&!a.params.loop||a.animating){if(i.releaseOnEdges)return!0}else a.slideNext(),a.emit("scroll",t);else if(a.isBeginning&&!a.params.loop||a.animating){if(i.releaseOnEdges)return!0}else a.slidePrev(),a.emit("scroll",t);a.mousewheel.lastScrollTime=(new s.Date).getTime()}return t.preventDefault?t.preventDefault():t.returnValue=!1,!1},enable:function(){var t=this;if(!B.event)return!1;if(t.mousewheel.enabled)return!1;var a=t.$el;return"container"!==t.params.mousewheel.eventsTarged&&(a=e(t.params.mousewheel.eventsTarged)),a.on(B.event,t.mousewheel.handle),t.mousewheel.enabled=!0,!0},disable:function(){var t=this;if(!B.event)return!1;if(!t.mousewheel.enabled)return!1;var a=t.$el;return"container"!==t.params.mousewheel.eventsTarged&&(a=e(t.params.mousewheel.eventsTarged)),a.off(B.event,t.mousewheel.handle),t.mousewheel.enabled=!1,!0}},V={name:"mousewheel",params:{mousewheel:{enabled:!1,releaseOnEdges:!1,invert:!1,forceToAxis:!1,sensitivity:1,eventsTarged:"container"}},create:function(){var e=this;l.extend(e,{mousewheel:{enabled:!1,enable:B.enable.bind(e),disable:B.disable.bind(e),handle:B.handle.bind(e),lastScrollTime:l.now()}})},on:{init:function(){var e=this;e.params.mousewheel.enabled&&e.mousewheel.enable()},destroy:function(){var e=this;e.mousewheel.enabled&&e.mousewheel.disable()}}},R={update:function(){var e=this,t=e.params.navigation;if(!e.params.loop){var a=e.navigation,i=a.$nextEl,s=a.$prevEl;s&&s.length>0&&(e.isBeginning?s.addClass(t.disabledClass):s.removeClass(t.disabledClass)),i&&i.length>0&&(e.isEnd?i.addClass(t.disabledClass):i.removeClass(t.disabledClass))}},init:function(){var t=this,a=t.params.navigation;if(a.nextEl||a.prevEl){var i,s;a.nextEl&&(i=e(a.nextEl),t.params.uniqueNavElements&&"string"==typeof a.nextEl&&i.length>1&&1===t.$el.find(a.nextEl).length&&(i=t.$el.find(a.nextEl))),a.prevEl&&(s=e(a.prevEl),t.params.uniqueNavElements&&"string"==typeof a.prevEl&&s.length>1&&1===t.$el.find(a.prevEl).length&&(s=t.$el.find(a.prevEl))),i&&i.length>0&&i.on("click",function(e){e.preventDefault(),t.isEnd&&!t.params.loop||t.slideNext()}),s&&s.length>0&&s.on("click",function(e){e.preventDefault(),t.isBeginning&&!t.params.loop||t.slidePrev()}),l.extend(t.navigation,{$nextEl:i,nextEl:i&&i[0],$prevEl:s,prevEl:s&&s[0]})}},destroy:function(){var e=this,t=e.navigation,a=t.$nextEl,i=t.$prevEl;a&&a.length&&(a.off("click"),a.removeClass(e.params.navigation.disabledClass)),i&&i.length&&(i.off("click"),i.removeClass(e.params.navigation.disabledClass))}},W={name:"navigation",params:{navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden"}},create:function(){var e=this;l.extend(e,{navigation:{init:R.init.bind(e),update:R.update.bind(e),destroy:R.destroy.bind(e)}})},on:{init:function(){var e=this;e.navigation.init(),e.navigation.update()},toEdge:function(){this.navigation.update()},fromEdge:function(){this.navigation.update()},destroy:function(){this.navigation.destroy()},click:function(t){var a=this,i=a.navigation,s=i.$nextEl,r=i.$prevEl;!a.params.navigation.hideOnClick||e(t.target).is(r)||e(t.target).is(s)||(s&&s.toggleClass(a.params.navigation.hiddenClass),r&&r.toggleClass(a.params.navigation.hiddenClass))}}},F={update:function(){var t=this,a=t.rtl,i=t.params.pagination;if(i.el&&t.pagination.el&&t.pagination.$el&&0!==t.pagination.$el.length){var s,r=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length,n=t.pagination.$el,o=t.params.loop?Math.ceil((r-2*t.loopedSlides)/t.params.slidesPerGroup):t.snapGrid.length;if(t.params.loop?((s=Math.ceil((t.activeIndex-t.loopedSlides)/t.params.slidesPerGroup))>r-1-2*t.loopedSlides&&(s-=r-2*t.loopedSlides),s>o-1&&(s-=o),s<0&&"bullets"!==t.params.paginationType&&(s=o+s)):s=void 0!==t.snapIndex?t.snapIndex:t.activeIndex||0,"bullets"===i.type&&t.pagination.bullets&&t.pagination.bullets.length>0){var l=t.pagination.bullets;if(i.dynamicBullets&&(t.pagination.bulletSize=l.eq(0)[t.isHorizontal()?"outerWidth":"outerHeight"](!0),n.css(t.isHorizontal()?"width":"height",5*t.pagination.bulletSize+"px")),l.removeClass(i.bulletActiveClass+" "+i.bulletActiveClass+"-next "+i.bulletActiveClass+"-next-next "+i.bulletActiveClass+"-prev "+i.bulletActiveClass+"-prev-prev"),n.length>1)l.each(function(t,a){var r=e(a);r.index()===s&&(r.addClass(i.bulletActiveClass),i.dynamicBullets&&(r.prev().addClass(i.bulletActiveClass+"-prev").prev().addClass(i.bulletActiveClass+"-prev-prev"),r.next().addClass(i.bulletActiveClass+"-next").next().addClass(i.bulletActiveClass+"-next-next")))});else{var d=l.eq(s);d.addClass(i.bulletActiveClass),i.dynamicBullets&&(d.prev().addClass(i.bulletActiveClass+"-prev").prev().addClass(i.bulletActiveClass+"-prev-prev"),d.next().addClass(i.bulletActiveClass+"-next").next().addClass(i.bulletActiveClass+"-next-next"))}if(i.dynamicBullets){var p=Math.min(l.length,5),c=(t.pagination.bulletSize*p-t.pagination.bulletSize)/2-s*t.pagination.bulletSize,u=a?"right":"left";l.css(t.isHorizontal()?u:"top",c+"px")}}if("fraction"===i.type&&(n.find("."+i.currentClass).text(s+1),n.find("."+i.totalClass).text(o)),"progressbar"===i.type){var h=(s+1)/o,v=h,f=1;t.isHorizontal()||(f=h,v=1),n.find("."+i.progressbarFillClass).transform("translate3d(0,0,0) scaleX("+v+") scaleY("+f+")").transition(t.params.speed)}"custom"===i.type&&i.renderCustom?(n.html(i.renderCustom(t,s+1,o)),t.emit("paginationRender",t,n[0])):t.emit("paginationUpdate",t,n[0])}},render:function(){var e=this,t=e.params.pagination;if(t.el&&e.pagination.el&&e.pagination.$el&&0!==e.pagination.$el.length){var a=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,i=e.pagination.$el,s="";if("bullets"===t.type){for(var r=e.params.loop?Math.ceil((a-2*e.loopedSlides)/e.params.slidesPerGroup):e.snapGrid.length,n=0;n<r;n+=1)t.renderBullet?s+=t.renderBullet.call(e,n,t.bulletClass):s+="<"+t.bulletElement+' class="'+t.bulletClass+'"></'+t.bulletElement+">";i.html(s),e.pagination.bullets=i.find("."+t.bulletClass)}"fraction"===t.type&&(s=t.renderFraction?t.renderFraction.call(e,t.currentClass,t.totalClass):'<span class="'+t.currentClass+'"></span> / <span class="'+t.totalClass+'"></span>',i.html(s)),"progressbar"===t.type&&(s=t.renderProgressbar?t.renderProgressbar.call(e,t.progressbarFillClass):'<span class="'+t.progressbarFillClass+'"></span>',i.html(s)),"custom"!==t.type&&e.emit("paginationRender",e.pagination.$el[0])}},init:function(){var t=this,a=t.params.pagination;if(a.el){var i=e(a.el);0!==i.length&&(t.params.uniqueNavElements&&"string"==typeof a.el&&i.length>1&&1===t.$el.find(a.el).length&&(i=t.$el.find(a.el)),"bullets"===a.type&&a.clickable&&i.addClass(a.clickableClass),i.addClass(a.modifierClass+a.type),"bullets"===a.type&&a.dynamicBullets&&i.addClass(""+a.modifierClass+a.type+"-dynamic"),a.clickable&&i.on("click","."+a.bulletClass,function(a){a.preventDefault();var i=e(this).index()*t.params.slidesPerGroup;t.params.loop&&(i+=t.loopedSlides),t.slideTo(i)}),l.extend(t.pagination,{$el:i,el:i[0]}))}},destroy:function(){var e=this,t=e.params.pagination;if(t.el&&e.pagination.el&&e.pagination.$el&&0!==e.pagination.$el.length){var a=e.pagination.$el;a.removeClass(t.hiddenClass),a.removeClass(t.modifierClass+t.type),e.pagination.bullets&&e.pagination.bullets.removeClass(t.bulletActiveClass),t.clickable&&a.off("click","."+t.bulletClass)}}},j={name:"pagination",params:{pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,type:"bullets",dynamicBullets:!1,bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active",modifierClass:"swiper-pagination-",currentClass:"swiper-pagination-current",totalClass:"swiper-pagination-total",hiddenClass:"swiper-pagination-hidden",progressbarFillClass:"swiper-pagination-progressbar-fill",clickableClass:"swiper-pagination-clickable"}},create:function(){var e=this;l.extend(e,{pagination:{init:F.init.bind(e),render:F.render.bind(e),update:F.update.bind(e),destroy:F.destroy.bind(e)}})},on:{init:function(){var e=this;e.pagination.init(),e.pagination.render(),e.pagination.update()},activeIndexChange:function(){var e=this;e.params.loop?e.pagination.update():void 0===e.snapIndex&&e.pagination.update()},snapIndexChange:function(){var e=this;e.params.loop||e.pagination.update()},slidesLengthChange:function(){var e=this;e.params.loop&&(e.pagination.render(),e.pagination.update())},snapGridLengthChange:function(){var e=this;e.params.loop||(e.pagination.render(),e.pagination.update())},destroy:function(){this.pagination.destroy()},click:function(t){var a=this;a.params.pagination.el&&a.params.pagination.hideOnClick&&a.pagination.$el.length>0&&!e(t.target).hasClass(a.params.pagination.bulletClass)&&a.pagination.$el.toggleClass(a.params.pagination.hiddenClass)}}},q={setTranslate:function(){var e=this;if(e.params.scrollbar.el&&e.scrollbar.el){var t=e.scrollbar,a=e.rtl,i=e.progress,s=t.dragSize,r=t.trackSize,n=t.$dragEl,o=t.$el,l=e.params.scrollbar,d=s,c=(r-s)*i;a&&e.isHorizontal()?(c=-c)>0?(d=s-c,c=0):-c+s>r&&(d=r+c):c<0?(d=s+c,c=0):c+s>r&&(d=r-c),e.isHorizontal()?(p.transforms3d?n.transform("translate3d("+c+"px, 0, 0)"):n.transform("translateX("+c+"px)"),n[0].style.width=d+"px"):(p.transforms3d?n.transform("translate3d(0px, "+c+"px, 0)"):n.transform("translateY("+c+"px)"),n[0].style.height=d+"px"),l.hide&&(clearTimeout(e.scrollbar.timeout),o[0].style.opacity=1,e.scrollbar.timeout=setTimeout(function(){o[0].style.opacity=0,o.transition(400)},1e3))}},setTransition:function(e){var t=this;t.params.scrollbar.el&&t.scrollbar.el&&t.scrollbar.$dragEl.transition(e)},updateSize:function(){var e=this;if(e.params.scrollbar.el&&e.scrollbar.el){var t=e.scrollbar,a=t.$dragEl,i=t.$el;a[0].style.width="",a[0].style.height="";var s,r=e.isHorizontal()?i[0].offsetWidth:i[0].offsetHeight,n=e.size/e.virtualSize,o=n*(r/e.size);s="auto"===e.params.scrollbar.dragSize?r*n:parseInt(e.params.scrollbar.dragSize,10),e.isHorizontal()?a[0].style.width=s+"px":a[0].style.height=s+"px",i[0].style.display=n>=1?"none":"",e.params.scrollbarHide&&(i[0].style.opacity=0),l.extend(t,{trackSize:r,divider:n,moveDivider:o,dragSize:s})}},setDragPosition:function(e){var t,a=this,i=a.scrollbar,s=i.$el,r=i.dragSize,n=i.trackSize;t=((a.isHorizontal()?"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].pageX:e.pageX||e.clientX:"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].pageY:e.pageY||e.clientY)-s.offset()[a.isHorizontal()?"left":"top"]-r/2)/(n-r),t=Math.max(Math.min(t,1),0),a.rtl&&(t=1-t);var o=a.minTranslate()+(a.maxTranslate()-a.minTranslate())*t;a.updateProgress(o),a.setTranslate(o),a.updateActiveIndex(),a.updateSlidesClasses()},onDragStart:function(e){var t=this,a=t.params.scrollbar,i=t.scrollbar,s=t.$wrapperEl,r=i.$el,n=i.$dragEl;t.scrollbar.isTouched=!0,e.preventDefault(),e.stopPropagation(),s.transition(100),n.transition(100),i.setDragPosition(e),clearTimeout(t.scrollbar.dragTimeout),r.transition(0),a.hide&&r.css("opacity",1),t.emit("scrollbarDragStart",e)},onDragMove:function(e){var t=this,a=t.scrollbar,i=t.$wrapperEl,s=a.$el,r=a.$dragEl;t.scrollbar.isTouched&&(e.preventDefault?e.preventDefault():e.returnValue=!1,a.setDragPosition(e),i.transition(0),s.transition(0),r.transition(0),t.emit("scrollbarDragMove",e))},onDragEnd:function(e){var t=this,a=t.params.scrollbar,i=t.scrollbar.$el;t.scrollbar.isTouched&&(t.scrollbar.isTouched=!1,a.hide&&(clearTimeout(t.scrollbar.dragTimeout),t.scrollbar.dragTimeout=l.nextTick(function(){i.css("opacity",0),i.transition(400)},1e3)),t.emit("scrollbarDragEnd",e),a.snapOnRelease&&t.slideReset())},enableDraggable:function(){var t=this;if(t.params.scrollbar.el){var a=t.scrollbar.$el,i=p.touch?a[0]:document;a.on(t.scrollbar.dragEvents.start,t.scrollbar.onDragStart),e(i).on(t.scrollbar.dragEvents.move,t.scrollbar.onDragMove),e(i).on(t.scrollbar.dragEvents.end,t.scrollbar.onDragEnd)}},disableDraggable:function(){var t=this;if(t.params.scrollbar.el){var a=t.scrollbar.$el,i=p.touch?a[0]:document;a.off(t.scrollbar.dragEvents.start),e(i).off(t.scrollbar.dragEvents.move),e(i).off(t.scrollbar.dragEvents.end)}},init:function(){var t=this;if(t.params.scrollbar.el){var a=t.scrollbar,i=t.$el,s=t.touchEvents,r=t.params.scrollbar,n=e(r.el);t.params.uniqueNavElements&&"string"==typeof r.el&&n.length>1&&1===i.find(r.el).length&&(n=i.find(r.el));var o=n.find(".swiper-scrollbar-drag");0===o.length&&(o=e('<div class="swiper-scrollbar-drag"></div>'),n.append(o)),t.scrollbar.dragEvents=!1!==t.params.simulateTouch||p.touch?s:{start:"mousedown",move:"mousemove",end:"mouseup"},l.extend(a,{$el:n,el:n[0],$dragEl:o,dragEl:o[0]}),r.draggable&&a.enableDraggable()}},destroy:function(){this.scrollbar.disableDraggable()}},K={name:"scrollbar",params:{scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0}},create:function(){var e=this;l.extend(e,{scrollbar:{init:q.init.bind(e),destroy:q.destroy.bind(e),updateSize:q.updateSize.bind(e),setTranslate:q.setTranslate.bind(e),setTransition:q.setTransition.bind(e),enableDraggable:q.enableDraggable.bind(e),disableDraggable:q.disableDraggable.bind(e),setDragPosition:q.setDragPosition.bind(e),onDragStart:q.onDragStart.bind(e),onDragMove:q.onDragMove.bind(e),onDragEnd:q.onDragEnd.bind(e),isTouched:!1,timeout:null,dragTimeout:null}})},on:{init:function(){var e=this;e.scrollbar.init(),e.scrollbar.updateSize(),e.scrollbar.setTranslate()},update:function(){this.scrollbar.updateSize()},resize:function(){this.scrollbar.updateSize()},observerUpdate:function(){this.scrollbar.updateSize()},setTranslate:function(){this.scrollbar.setTranslate()},setTransition:function(e){this.scrollbar.setTransition(e)},destroy:function(){this.scrollbar.destroy()}}},U={setTransform:function(t,a){var i=this,s=i.rtl,r=e(t),n=s?-1:1,o=r.attr("data-swiper-parallax")||"0",l=r.attr("data-swiper-parallax-x"),d=r.attr("data-swiper-parallax-y"),p=r.attr("data-swiper-parallax-scale"),c=r.attr("data-swiper-parallax-opacity");if(l||d?(l=l||"0",d=d||"0"):i.isHorizontal()?(l=o,d="0"):(d=o,l="0"),l=l.indexOf("%")>=0?parseInt(l,10)*a*n+"%":l*a*n+"px",d=d.indexOf("%")>=0?parseInt(d,10)*a+"%":d*a+"px",void 0!==c&&null!==c){var u=c-(c-1)*(1-Math.abs(a));r[0].style.opacity=u}if(void 0===p||null===p)r.transform("translate3d("+l+", "+d+", 0px)");else{var h=p-(p-1)*(1-Math.abs(a));r.transform("translate3d("+l+", "+d+", 0px) scale("+h+")")}},setTranslate:function(){var t=this,a=t.$el,i=t.slides,s=t.progress,r=t.snapGrid;a.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e,a){t.parallax.setTransform(a,s)}),i.each(function(a,i){var n=i.progress;t.params.slidesPerGroup>1&&"auto"!==t.params.slidesPerView&&(n+=Math.ceil(a/2)-s*(r.length-1)),n=Math.min(Math.max(n,-1),1),e(i).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e,a){t.parallax.setTransform(a,n)})})},setTransition:function(t){void 0===t&&(t=this.params.speed),this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(a,i){var s=e(i),r=parseInt(s.attr("data-swiper-parallax-duration"),10)||t;0===t&&(r=0),s.transition(r)})}},_={name:"parallax",params:{parallax:{enabled:!1}},create:function(){var e=this;l.extend(e,{parallax:{setTransform:U.setTransform.bind(e),setTranslate:U.setTranslate.bind(e),setTransition:U.setTransition.bind(e)}})},on:{beforeInit:function(){this.params.watchSlidesProgress=!0},init:function(){var e=this;e.params.parallax&&e.parallax.setTranslate()},setTranslate:function(){var e=this;e.params.parallax&&e.parallax.setTranslate()},setTransition:function(e){var t=this;t.params.parallax&&t.parallax.setTransition(e)}}},Z={getDistanceBetweenTouches:function(e){if(e.targetTouches.length<2)return 1;var t=e.targetTouches[0].pageX,a=e.targetTouches[0].pageY,i=e.targetTouches[1].pageX,s=e.targetTouches[1].pageY;return Math.sqrt(Math.pow(i-t,2)+Math.pow(s-a,2))},onGestureStart:function(t){var a=this,i=a.params.zoom,s=a.zoom,r=s.gesture;if(s.fakeGestureTouched=!1,s.fakeGestureMoved=!1,!p.gestures){if("touchstart"!==t.type||"touchstart"===t.type&&t.targetTouches.length<2)return;s.fakeGestureTouched=!0,r.scaleStart=Z.getDistanceBetweenTouches(t)}r.$slideEl&&r.$slideEl.length||(r.$slideEl=e(this),0===r.$slideEl.length&&(r.$slideEl=a.slides.eq(a.activeIndex)),r.$imageEl=r.$slideEl.find("img, svg, canvas"),r.$imageWrapEl=r.$imageEl.parent("."+i.containerClass),r.maxRatio=r.$imageWrapEl.attr("data-swiper-zoom")||i.maxRatio,0!==r.$imageWrapEl.length)?(r.$imageEl.transition(0),a.zoom.isScaling=!0):r.$imageEl=void 0},onGestureChange:function(e){var t=this,a=t.params.zoom,i=t.zoom,s=i.gesture;if(!p.gestures){if("touchmove"!==e.type||"touchmove"===e.type&&e.targetTouches.length<2)return;i.fakeGestureMoved=!0,s.scaleMove=Z.getDistanceBetweenTouches(e)}s.$imageEl&&0!==s.$imageEl.length&&(p.gestures?t.zoom.scale=e.scale*i.currentScale:i.scale=s.scaleMove/s.scaleStart*i.currentScale,i.scale>s.maxRatio&&(i.scale=s.maxRatio-1+Math.pow(i.scale-s.maxRatio+1,.5)),i.scale<a.minRatio&&(i.scale=a.minRatio+1-Math.pow(a.minRatio-i.scale+1,.5)),s.$imageEl.transform("translate3d(0,0,0) scale("+i.scale+")"))},onGestureEnd:function(e){var t=this,a=t.params.zoom,i=t.zoom,s=i.gesture;if(!p.gestures){if(!i.fakeGestureTouched||!i.fakeGestureMoved)return;if("touchend"!==e.type||"touchend"===e.type&&e.changedTouches.length<2&&!x.android)return;i.fakeGestureTouched=!1,i.fakeGestureMoved=!1}s.$imageEl&&0!==s.$imageEl.length&&(i.scale=Math.max(Math.min(i.scale,s.maxRatio),a.minRatio),s.$imageEl.transition(t.params.speed).transform("translate3d(0,0,0) scale("+i.scale+")"),i.currentScale=i.scale,i.isScaling=!1,1===i.scale&&(s.$slideEl=void 0))},onTouchStart:function(e){var t=this.zoom,a=t.gesture,i=t.image;a.$imageEl&&0!==a.$imageEl.length&&(i.isTouched||(x.android&&e.preventDefault(),i.isTouched=!0,i.touchesStart.x="touchstart"===e.type?e.targetTouches[0].pageX:e.pageX,i.touchesStart.y="touchstart"===e.type?e.targetTouches[0].pageY:e.pageY))},onTouchMove:function(e){var t=this,a=t.zoom,i=a.gesture,s=a.image,r=a.velocity;if(i.$imageEl&&0!==i.$imageEl.length&&(t.allowClick=!1,s.isTouched&&i.$slideEl)){s.isMoved||(s.width=i.$imageEl[0].offsetWidth,s.height=i.$imageEl[0].offsetHeight,s.startX=l.getTranslate(i.$imageWrapEl[0],"x")||0,s.startY=l.getTranslate(i.$imageWrapEl[0],"y")||0,i.slideWidth=i.$slideEl[0].offsetWidth,i.slideHeight=i.$slideEl[0].offsetHeight,i.$imageWrapEl.transition(0),t.rtl&&(s.startX=-s.startX),t.rtl&&(s.startY=-s.startY));var n=s.width*a.scale,o=s.height*a.scale;if(!(n<i.slideWidth&&o<i.slideHeight)){if(s.minX=Math.min(i.slideWidth/2-n/2,0),s.maxX=-s.minX,s.minY=Math.min(i.slideHeight/2-o/2,0),s.maxY=-s.minY,s.touchesCurrent.x="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,s.touchesCurrent.y="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,!s.isMoved&&!a.isScaling){if(t.isHorizontal()&&(Math.floor(s.minX)===Math.floor(s.startX)&&s.touchesCurrent.x<s.touchesStart.x||Math.floor(s.maxX)===Math.floor(s.startX)&&s.touchesCurrent.x>s.touchesStart.x))return void(s.isTouched=!1);if(!t.isHorizontal()&&(Math.floor(s.minY)===Math.floor(s.startY)&&s.touchesCurrent.y<s.touchesStart.y||Math.floor(s.maxY)===Math.floor(s.startY)&&s.touchesCurrent.y>s.touchesStart.y))return void(s.isTouched=!1)}e.preventDefault(),e.stopPropagation(),s.isMoved=!0,s.currentX=s.touchesCurrent.x-s.touchesStart.x+s.startX,s.currentY=s.touchesCurrent.y-s.touchesStart.y+s.startY,s.currentX<s.minX&&(s.currentX=s.minX+1-Math.pow(s.minX-s.currentX+1,.8)),s.currentX>s.maxX&&(s.currentX=s.maxX-1+Math.pow(s.currentX-s.maxX+1,.8)),s.currentY<s.minY&&(s.currentY=s.minY+1-Math.pow(s.minY-s.currentY+1,.8)),s.currentY>s.maxY&&(s.currentY=s.maxY-1+Math.pow(s.currentY-s.maxY+1,.8)),r.prevPositionX||(r.prevPositionX=s.touchesCurrent.x),r.prevPositionY||(r.prevPositionY=s.touchesCurrent.y),r.prevTime||(r.prevTime=Date.now()),r.x=(s.touchesCurrent.x-r.prevPositionX)/(Date.now()-r.prevTime)/2,r.y=(s.touchesCurrent.y-r.prevPositionY)/(Date.now()-r.prevTime)/2,Math.abs(s.touchesCurrent.x-r.prevPositionX)<2&&(r.x=0),Math.abs(s.touchesCurrent.y-r.prevPositionY)<2&&(r.y=0),r.prevPositionX=s.touchesCurrent.x,r.prevPositionY=s.touchesCurrent.y,r.prevTime=Date.now(),i.$imageWrapEl.transform("translate3d("+s.currentX+"px, "+s.currentY+"px,0)")}}},onTouchEnd:function(){var e=this.zoom,t=e.gesture,a=e.image,i=e.velocity;if(t.$imageEl&&0!==t.$imageEl.length){if(!a.isTouched||!a.isMoved)return a.isTouched=!1,void(a.isMoved=!1);a.isTouched=!1,a.isMoved=!1;var s=300,r=300,n=i.x*s,o=a.currentX+n,l=i.y*r,d=a.currentY+l;0!==i.x&&(s=Math.abs((o-a.currentX)/i.x)),0!==i.y&&(r=Math.abs((d-a.currentY)/i.y));var p=Math.max(s,r);a.currentX=o,a.currentY=d;var c=a.width*e.scale,u=a.height*e.scale;a.minX=Math.min(t.slideWidth/2-c/2,0),a.maxX=-a.minX,a.minY=Math.min(t.slideHeight/2-u/2,0),a.maxY=-a.minY,a.currentX=Math.max(Math.min(a.currentX,a.maxX),a.minX),a.currentY=Math.max(Math.min(a.currentY,a.maxY),a.minY),t.$imageWrapEl.transition(p).transform("translate3d("+a.currentX+"px, "+a.currentY+"px,0)")}},onTransitionEnd:function(){var e=this,t=e.zoom,a=t.gesture;a.$slideEl&&e.previousIndex!==e.activeIndex&&(a.$imageEl.transform("translate3d(0,0,0) scale(1)"),a.$imageWrapEl.transform("translate3d(0,0,0)"),a.$slideEl=void 0,a.$imageEl=void 0,a.$imageWrapEl=void 0,t.scale=1,t.currentScale=1)},toggle:function(e){var t=this.zoom;t.scale&&1!==t.scale?t.out():t.in(e)},in:function(t){var a=this,i=a.zoom,s=a.params.zoom,r=i.gesture,n=i.image;if(r.$slideEl||(r.$slideEl=a.clickedSlide?e(a.clickedSlide):a.slides.eq(a.activeIndex),r.$imageEl=r.$slideEl.find("img, svg, canvas"),r.$imageWrapEl=r.$imageEl.parent("."+s.containerClass)),r.$imageEl&&0!==r.$imageEl.length){r.$slideEl.addClass(""+s.zoomedSlideClass);var o,l,d,p,c,u,h,v,f,m,g,b,w,y,x,T;void 0===n.touchesStart.x&&t?(o="touchend"===t.type?t.changedTouches[0].pageX:t.pageX,l="touchend"===t.type?t.changedTouches[0].pageY:t.pageY):(o=n.touchesStart.x,l=n.touchesStart.y),i.scale=r.$imageWrapEl.attr("data-swiper-zoom")||s.maxRatio,i.currentScale=r.$imageWrapEl.attr("data-swiper-zoom")||s.maxRatio,t?(x=r.$slideEl[0].offsetWidth,T=r.$slideEl[0].offsetHeight,d=r.$slideEl.offset().left+x/2-o,p=r.$slideEl.offset().top+T/2-l,h=r.$imageEl[0].offsetWidth,v=r.$imageEl[0].offsetHeight,f=h*i.scale,m=v*i.scale,w=-(g=Math.min(x/2-f/2,0)),y=-(b=Math.min(T/2-m/2,0)),c=d*i.scale,u=p*i.scale,c<g&&(c=g),c>w&&(c=w),u<b&&(u=b),u>y&&(u=y)):(c=0,u=0),r.$imageWrapEl.transition(300).transform("translate3d("+c+"px, "+u+"px,0)"),r.$imageEl.transition(300).transform("translate3d(0,0,0) scale("+i.scale+")")}},out:function(){var t=this,a=t.zoom,i=t.params.zoom,s=a.gesture;s.$slideEl||(s.$slideEl=t.clickedSlide?e(t.clickedSlide):t.slides.eq(t.activeIndex),s.$imageEl=s.$slideEl.find("img, svg, canvas"),s.$imageWrapEl=s.$imageEl.parent("."+i.containerClass)),s.$imageEl&&0!==s.$imageEl.length&&(a.scale=1,a.currentScale=1,s.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),s.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),s.$slideEl.removeClass(""+i.zoomedSlideClass),s.$slideEl=void 0)},enable:function(){var t=this,a=t.zoom;if(!a.enabled){a.enabled=!0;var i=t.slides,s=!("touchstart"!==t.touchEvents.start||!p.passiveListener||!t.params.passiveListeners)&&{passive:!0,capture:!1};p.gestures?(i.on("gesturestart",a.onGestureStart,s),i.on("gesturechange",a.onGestureChange,s),i.on("gestureend",a.onGestureEnd,s)):"touchstart"===t.touchEvents.start&&(i.on(t.touchEvents.start,a.onGestureStart,s),i.on(t.touchEvents.move,a.onGestureChange,s),i.on(t.touchEvents.end,a.onGestureEnd,s)),t.slides.each(function(i,s){var r=e(s);r.find("."+t.params.zoom.containerClass).length>0&&r.on(t.touchEvents.move,a.onTouchMove)})}},disable:function(){var t=this,a=t.zoom;if(a.enabled){t.zoom.enabled=!1;var i=t.slides,s=!("touchstart"!==t.touchEvents.start||!p.passiveListener||!t.params.passiveListeners)&&{passive:!0,capture:!1};p.gestures?(i.off("gesturestart",a.onGestureStart,s),i.off("gesturechange",a.onGestureChange,s),i.off("gestureend",a.onGestureEnd,s)):"touchstart"===t.touchEvents.start&&(i.off(t.touchEvents.start,a.onGestureStart,s),i.off(t.touchEvents.move,a.onGestureChange,s),i.off(t.touchEvents.end,a.onGestureEnd,s)),t.slides.each(function(i,s){var r=e(s);r.find("."+t.params.zoom.containerClass).length>0&&r.off(t.touchEvents.move,a.onTouchMove)})}}},Q={name:"zoom",params:{zoom:{enabled:!1,maxRatio:3,minRatio:1,toggle:!0,containerClass:"swiper-zoom-container",zoomedSlideClass:"swiper-slide-zoomed"}},create:function(){var e=this,t={enabled:!1,scale:1,currentScale:1,isScaling:!1,gesture:{$slideEl:void 0,slideWidth:void 0,slideHeight:void 0,$imageEl:void 0,$imageWrapEl:void 0,maxRatio:3},image:{isTouched:void 0,isMoved:void 0,currentX:void 0,currentY:void 0,minX:void 0,minY:void 0,maxX:void 0,maxY:void 0,width:void 0,height:void 0,startX:void 0,startY:void 0,touchesStart:{},touchesCurrent:{}},velocity:{x:void 0,y:void 0,prevPositionX:void 0,prevPositionY:void 0,prevTime:void 0}};"onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function(a){t[a]=Z[a].bind(e)}),l.extend(e,{zoom:t})},on:{init:function(){var e=this;e.params.zoom.enabled&&e.zoom.enable()},destroy:function(){this.zoom.disable()},touchStart:function(e){var t=this;t.zoom.enabled&&t.zoom.onTouchStart(e)},touchEnd:function(e){var t=this;t.zoom.enabled&&t.zoom.onTouchEnd(e)},doubleTap:function(e){var t=this;t.params.zoom.enabled&&t.zoom.enabled&&t.params.zoom.toggle&&t.zoom.toggle(e)},transitionEnd:function(){var e=this;e.zoom.enabled&&e.params.zoom.enabled&&e.zoom.onTransitionEnd()}}},J={loadInSlide:function(t,a){void 0===a&&(a=!0);var i=this,s=i.params.lazy;if(void 0!==t&&0!==i.slides.length){var r=i.virtual&&i.params.virtual.enabled?i.$wrapperEl.children("."+i.params.slideClass+'[data-swiper-slide-index="'+t+'"]'):i.slides.eq(t),n=r.find("."+s.elementClass+":not(."+s.loadedClass+"):not(."+s.loadingClass+")");!r.hasClass(s.elementClass)||r.hasClass(s.loadedClass)||r.hasClass(s.loadingClass)||(n=n.add(r[0])),0!==n.length&&n.each(function(t,n){var o=e(n);o.addClass(s.loadingClass);var l=o.attr("data-background"),d=o.attr("data-src"),p=o.attr("data-srcset"),c=o.attr("data-sizes");i.loadImage(o[0],d||l,p,c,!1,function(){if(void 0!==i&&null!==i&&i&&(!i||i.params)&&!i.destroyed){if(l?(o.css("background-image",'url("'+l+'")'),o.removeAttr("data-background")):(p&&(o.attr("srcset",p),o.removeAttr("data-srcset")),c&&(o.attr("sizes",c),o.removeAttr("data-sizes")),d&&(o.attr("src",d),o.removeAttr("data-src"))),o.addClass(s.loadedClass).removeClass(s.loadingClass),r.find("."+s.preloaderClass).remove(),i.params.loop&&a){var e=r.attr("data-swiper-slide-index");if(r.hasClass(i.params.slideDuplicateClass)){var t=i.$wrapperEl.children('[data-swiper-slide-index="'+e+'"]:not(.'+i.params.slideDuplicateClass+")");i.lazy.loadInSlide(t.index(),!1)}else{var n=i.$wrapperEl.children("."+i.params.slideDuplicateClass+'[data-swiper-slide-index="'+e+'"]');i.lazy.loadInSlide(n.index(),!1)}}i.emit("lazyImageReady",r[0],o[0])}}),i.emit("lazyImageLoad",r[0],o[0])})}},load:function(){function t(e){if(l){if(s.children("."+r.slideClass+'[data-swiper-slide-index="'+e+'"]').length)return!0}else if(n[e])return!0;return!1}function a(t){return l?e(t).attr("data-swiper-slide-index"):e(t).index()}var i=this,s=i.$wrapperEl,r=i.params,n=i.slides,o=i.activeIndex,l=i.virtual&&r.virtual.enabled,d=r.lazy,p=r.slidesPerView;if("auto"===p&&(p=0),i.lazy.initialImageLoaded||(i.lazy.initialImageLoaded=!0),i.params.watchSlidesVisibility)s.children("."+r.slideVisibleClass).each(function(t,a){var s=l?e(a).attr("data-swiper-slide-index"):e(a).index();i.lazy.loadInSlide(s)});else if(p>1)for(var c=o;c<o+p;c+=1)t(c)&&i.lazy.loadInSlide(c);else i.lazy.loadInSlide(o);if(d.loadPrevNext)if(p>1||d.loadPrevNextAmount&&d.loadPrevNextAmount>1){for(var u=d.loadPrevNextAmount,h=p,v=Math.min(o+h+Math.max(u,h),n.length),f=Math.max(o-Math.max(h,u),0),m=o+p;m<v;m+=1)t(m)&&i.lazy.loadInSlide(m);for(var g=f;g<o;g+=1)t(g)&&i.lazy.loadInSlide(g)}else{var b=s.children("."+r.slideNextClass);b.length>0&&i.lazy.loadInSlide(a(b));var w=s.children("."+r.slidePrevClass);w.length>0&&i.lazy.loadInSlide(a(w))}}},ee={name:"lazy",params:{lazy:{enabled:!1,loadPrevNext:!1,loadPrevNextAmount:1,loadOnTransitionStart:!1,elementClass:"swiper-lazy",loadingClass:"swiper-lazy-loading",loadedClass:"swiper-lazy-loaded",preloaderClass:"swiper-lazy-preloader"}},create:function(){var e=this;l.extend(e,{lazy:{initialImageLoaded:!1,load:J.load.bind(e),loadInSlide:J.loadInSlide.bind(e)}})},on:{beforeInit:function(){var e=this;e.params.lazy.enabled&&e.params.preloadImages&&(e.params.preloadImages=!1)},init:function(){var e=this;e.params.lazy.enabled&&!e.params.loop&&0===e.params.initialSlide&&e.lazy.load()},scroll:function(){var e=this;e.params.freeMode&&!e.params.freeModeSticky&&e.lazy.load()},resize:function(){var e=this;e.params.lazy.enabled&&e.lazy.load()},scrollbarDragMove:function(){var e=this;e.params.lazy.enabled&&e.lazy.load()},transitionStart:function(){var e=this;e.params.lazy.enabled&&(e.params.lazy.loadOnTransitionStart||!e.params.lazy.loadOnTransitionStart&&!e.lazy.initialImageLoaded)&&e.lazy.load()},transitionEnd:function(){var e=this;e.params.lazy.enabled&&!e.params.lazy.loadOnTransitionStart&&e.lazy.load()}}},te={LinearSpline:function(e,t){var a=function(){var e,t,a;return function(i,s){for(t=-1,e=i.length;e-t>1;)i[a=e+t>>1]<=s?t=a:e=a;return e}}();this.x=e,this.y=t,this.lastIndex=e.length-1;var i,s;return this.interpolate=function(e){return e?(s=a(this.x,e),i=s-1,(e-this.x[i])*(this.y[s]-this.y[i])/(this.x[s]-this.x[i])+this.y[i]):0},this},getInterpolateFunction:function(e){var t=this;t.controller.spline||(t.controller.spline=t.params.loop?new te.LinearSpline(t.slidesGrid,e.slidesGrid):new te.LinearSpline(t.snapGrid,e.snapGrid))},setTranslate:function(e,t){function a(e){var t=e.rtl&&"horizontal"===e.params.direction?-r.translate:r.translate;"slide"===r.params.controller.by&&(r.controller.getInterpolateFunction(e),s=-r.controller.spline.interpolate(-t)),s&&"container"!==r.params.controller.by||(i=(e.maxTranslate()-e.minTranslate())/(r.maxTranslate()-r.minTranslate()),s=(t-r.minTranslate())*i+e.minTranslate()),r.params.controller.inverse&&(s=e.maxTranslate()-s),e.updateProgress(s),e.setTranslate(s,r),e.updateActiveIndex(),e.updateSlidesClasses()}var i,s,r=this,n=r.controller.control;if(Array.isArray(n))for(var o=0;o<n.length;o+=1)n[o]!==t&&n[o]instanceof $&&a(n[o]);else n instanceof $&&t!==n&&a(n)},setTransition:function(e,t){function a(t){t.setTransition(e,s),0!==e&&(t.transitionStart(),t.$wrapperEl.transitionEnd(function(){r&&(t.params.loop&&"slide"===s.params.controller.by&&t.loopFix(),t.transitionEnd())}))}var i,s=this,r=s.controller.control;if(Array.isArray(r))for(i=0;i<r.length;i+=1)r[i]!==t&&r[i]instanceof $&&a(r[i]);else r instanceof $&&t!==r&&a(r)}},ae={name:"controller",params:{controller:{control:void 0,inverse:!1,by:"slide"}},create:function(){var e=this;l.extend(e,{controller:{control:e.params.controller.control,getInterpolateFunction:te.getInterpolateFunction.bind(e),setTranslate:te.setTranslate.bind(e),setTransition:te.setTransition.bind(e)}})},on:{update:function(){var e=this;e.controller.control&&e.controller.spline&&(e.controller.spline=void 0,delete e.controller.spline)},resize:function(){var e=this;e.controller.control&&e.controller.spline&&(e.controller.spline=void 0,delete e.controller.spline)},observerUpdate:function(){var e=this;e.controller.control&&e.controller.spline&&(e.controller.spline=void 0,delete e.controller.spline)},setTranslate:function(e,t){var a=this;a.controller.control&&a.controller.setTranslate(e,t)},setTransition:function(e,t){var a=this;a.controller.control&&a.controller.setTransition(e,t)}}},ie={makeElFocusable:function(e){return e.attr("tabIndex","0"),e},addElRole:function(e,t){return e.attr("role",t),e},addElLabel:function(e,t){return e.attr("aria-label",t),e},disableEl:function(e){return e.attr("aria-disabled",!0),e},enableEl:function(e){return e.attr("aria-disabled",!1),e},onEnterKey:function(t){var a=this,i=a.params.a11y;if(13===t.keyCode){var s=e(t.target);a.navigation&&a.navigation.$nextEl&&s.is(a.navigation.$nextEl)&&(a.isEnd&&!a.params.loop||a.slideNext(),a.isEnd?a.a11y.notify(i.lastSlideMessage):a.a11y.notify(i.nextSlideMessage)),a.navigation&&a.navigation.$prevEl&&s.is(a.navigation.$prevEl)&&(a.isBeginning&&!a.params.loop||a.slidePrev(),a.isBeginning?a.a11y.notify(i.firstSlideMessage):a.a11y.notify(i.prevSlideMessage)),a.pagination&&s.is("."+a.params.pagination.bulletClass)&&s[0].click()}},notify:function(e){var t=this.a11y.liveRegion;0!==t.length&&(t.html(""),t.html(e))},updateNavigation:function(){var e=this;if(!e.params.loop){var t=e.navigation,a=t.$nextEl,i=t.$prevEl;i&&i.length>0&&(e.isBeginning?e.a11y.disableEl(i):e.a11y.enableEl(i)),a&&a.length>0&&(e.isEnd?e.a11y.disableEl(a):e.a11y.enableEl(a))}},updatePagination:function(){var t=this,a=t.params.a11y;t.pagination&&t.params.pagination.clickable&&t.pagination.bullets&&t.pagination.bullets.length&&t.pagination.bullets.each(function(i,s){var r=e(s);t.a11y.makeElFocusable(r),t.a11y.addElRole(r,"button"),t.a11y.addElLabel(r,a.paginationBulletMessage.replace(/{{index}}/,r.index()+1))})},init:function(){var e=this;e.$el.append(e.a11y.liveRegion);var t,a,i=e.params.a11y;e.navigation&&e.navigation.$nextEl&&(t=e.navigation.$nextEl),e.navigation&&e.navigation.$prevEl&&(a=e.navigation.$prevEl),t&&(e.a11y.makeElFocusable(t),e.a11y.addElRole(t,"button"),e.a11y.addElLabel(t,i.nextSlideMessage),t.on("keydown",e.a11y.onEnterKey)),a&&(e.a11y.makeElFocusable(a),e.a11y.addElRole(a,"button"),e.a11y.addElLabel(a,i.prevSlideMessage),a.on("keydown",e.a11y.onEnterKey)),e.pagination&&e.params.pagination.clickable&&e.pagination.bullets&&e.pagination.bullets.length&&e.pagination.$el.on("keydown","."+e.params.pagination.bulletClass,e.a11y.onEnterKey)},destroy:function(){var e=this;e.a11y.liveRegion&&e.a11y.liveRegion.length>0&&e.a11y.liveRegion.remove();var t,a;e.navigation&&e.navigation.$nextEl&&(t=e.navigation.$nextEl),e.navigation&&e.navigation.$prevEl&&(a=e.navigation.$prevEl),t&&t.off("keydown",e.a11y.onEnterKey),a&&a.off("keydown",e.a11y.onEnterKey),e.pagination&&e.params.pagination.clickable&&e.pagination.bullets&&e.pagination.bullets.length&&e.pagination.$el.off("keydown","."+e.params.pagination.bulletClass,e.a11y.onEnterKey)}},se={name:"a11y",params:{a11y:{enabled:!1,notificationClass:"swiper-notification",prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}"}},create:function(){var t=this;l.extend(t,{a11y:{liveRegion:e('<span class="'+t.params.a11y.notificationClass+'" aria-live="assertive" aria-atomic="true"></span>')}}),Object.keys(ie).forEach(function(e){t.a11y[e]=ie[e].bind(t)})},on:{init:function(){var e=this;e.params.a11y.enabled&&(e.a11y.init(),e.a11y.updateNavigation())},toEdge:function(){var e=this;e.params.a11y.enabled&&e.a11y.updateNavigation()},fromEdge:function(){var e=this;e.params.a11y.enabled&&e.a11y.updateNavigation()},paginationUpdate:function(){var e=this;e.params.a11y.enabled&&e.a11y.updatePagination()},destroy:function(){var e=this;e.params.a11y.enabled&&e.a11y.destroy()}}},re={init:function(){var e=this;if(e.params.history){if(!s.history||!s.history.pushState)return e.params.history.enabled=!1,void(e.params.hashNavigation.enabled=!0);var t=e.history;t.initialized=!0,t.paths=re.getPathValues(),(t.paths.key||t.paths.value)&&(t.scrollToSlide(0,t.paths.value,e.params.runCallbacksOnInit),e.params.history.replaceState||s.addEventListener("popstate",e.history.setHistoryPopState))}},destroy:function(){var e=this;e.params.history.replaceState||s.removeEventListener("popstate",e.history.setHistoryPopState)},setHistoryPopState:function(){var e=this;e.history.paths=re.getPathValues(),e.history.scrollToSlide(e.params.speed,e.history.paths.value,!1)},getPathValues:function(){var e=s.location.pathname.slice(1).split("/").filter(function(e){return""!==e}),t=e.length;return{key:e[t-2],value:e[t-1]}},setHistory:function(e,t){var a=this;if(a.history.initialized&&a.params.history.enabled){var i=a.slides.eq(t),r=re.slugify(i.attr("data-history"));s.location.pathname.includes(e)||(r=e+"/"+r);var n=s.history.state;n&&n.value===r||(a.params.history.replaceState?s.history.replaceState({value:r},null,r):s.history.pushState({value:r},null,r))}},slugify:function(e){return e.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")},scrollToSlide:function(e,t,a){var i=this;if(t)for(var s=0,r=i.slides.length;s<r;s+=1){var n=i.slides.eq(s);if(re.slugify(n.attr("data-history"))===t&&!n.hasClass(i.params.slideDuplicateClass)){var o=n.index();i.slideTo(o,e,a)}}else i.slideTo(0,e,a)}},ne={name:"history",params:{history:{enabled:!1,replaceState:!1,key:"slides"}},create:function(){var e=this;l.extend(e,{history:{init:re.init.bind(e),setHistory:re.setHistory.bind(e),setHistoryPopState:re.setHistoryPopState.bind(e),scrollToSlide:re.scrollToSlide.bind(e),destroy:re.destroy.bind(e)}})},on:{init:function(){var e=this;e.params.history.enabled&&e.history.init()},destroy:function(){var e=this;e.params.history.enabled&&e.history.destroy()},transitionEnd:function(){var e=this;e.history.initialized&&e.history.setHistory(e.params.history.key,e.activeIndex)}}},oe={onHashCange:function(){var e=this,t=d.location.hash.replace("#","");t!==e.slides.eq(e.activeIndex).attr("data-hash")&&e.slideTo(e.$wrapperEl.children("."+e.params.slideClass+'[data-hash="'+t+'"]').index())},setHash:function(){var e=this;if(e.hashNavigation.initialized&&e.params.hashNavigation.enabled)if(e.params.hashNavigation.replaceState&&s.history&&s.history.replaceState)s.history.replaceState(null,null,"#"+e.slides.eq(e.activeIndex).attr("data-hash")||"");else{var t=e.slides.eq(e.activeIndex),a=t.attr("data-hash")||t.attr("data-history");d.location.hash=a||""}},init:function(){var t=this;if(!(!t.params.hashNavigation.enabled||t.params.history&&t.params.history.enabled)){t.hashNavigation.initialized=!0;var a=d.location.hash.replace("#","");if(a)for(var i=0,r=t.slides.length;i<r;i+=1){var n=t.slides.eq(i);if((n.attr("data-hash")||n.attr("data-history"))===a&&!n.hasClass(t.params.slideDuplicateClass)){var o=n.index();t.slideTo(o,0,t.params.runCallbacksOnInit,!0)}}t.params.hashNavigation.watchState&&e(s).on("hashchange",t.hashNavigation.onHashCange)}},destroy:function(){var t=this;t.params.hashNavigation.watchState&&e(s).off("hashchange",t.hashNavigation.onHashCange)}},le={name:"hash-navigation",params:{hashNavigation:{enabled:!1,replaceState:!1,watchState:!1}},create:function(){var e=this;l.extend(e,{hashNavigation:{initialized:!1,init:oe.init.bind(e),destroy:oe.destroy.bind(e),setHash:oe.setHash.bind(e),onHashCange:oe.onHashCange.bind(e)}})},on:{init:function(){var e=this;e.params.hashNavigation.enabled&&e.hashNavigation.init()},destroy:function(){var e=this;e.params.hashNavigation.enabled&&e.hashNavigation.destroy()},transitionEnd:function(){var e=this;e.hashNavigation.initialized&&e.hashNavigation.setHash()}}},de={run:function(){var e=this,t=e.slides.eq(e.activeIndex),a=e.params.autoplay.delay;t.attr("data-swiper-autoplay")&&(a=t.attr("data-swiper-autoplay")||e.params.autoplay.delay),e.autoplay.timeout=l.nextTick(function(){e.params.loop?(e.loopFix(),e.slideNext(e.params.speed,!0,!0),e.emit("autoplay")):e.isEnd?e.params.autoplay.stopOnLastSlide?e.autoplay.stop():(e.slideTo(0,e.params.speed,!0,!0),e.emit("autoplay")):(e.slideNext(e.params.speed,!0,!0),e.emit("autoplay"))},a)},start:function(){var e=this;return void 0===e.autoplay.timeout&&(!e.autoplay.running&&(e.autoplay.running=!0,e.emit("autoplayStart"),e.autoplay.run(),!0))},stop:function(){var e=this;return!!e.autoplay.running&&(void 0!==e.autoplay.timeout&&(e.autoplay.timeout&&(clearTimeout(e.autoplay.timeout),e.autoplay.timeout=void 0),e.autoplay.running=!1,e.emit("autoplayStop"),!0))},pause:function(e){var t=this;t.autoplay.running&&(t.autoplay.paused||(t.autoplay.timeout&&clearTimeout(t.autoplay.timeout),t.autoplay.paused=!0,0===e?(t.autoplay.paused=!1,t.autoplay.run()):t.$wrapperEl.transitionEnd(function(){t&&!t.destroyed&&(t.autoplay.paused=!1,t.autoplay.running?t.autoplay.run():t.autoplay.stop())})))}},pe={name:"autoplay",params:{autoplay:{enabled:!1,delay:3e3,disableOnInteraction:!0,stopOnLastSlide:!1}},create:function(){var e=this;l.extend(e,{autoplay:{running:!1,paused:!1,run:de.run.bind(e),start:de.start.bind(e),stop:de.stop.bind(e),pause:de.pause.bind(e)}})},on:{init:function(){var e=this;e.params.autoplay.enabled&&e.autoplay.start()},beforeTransitionStart:function(e,t){var a=this;a.autoplay.running&&(t||!a.params.autoplay.disableOnInteraction?a.autoplay.pause(e):a.autoplay.stop())},sliderFirstMove:function(){var e=this;e.autoplay.running&&(e.params.autoplay.disableOnInteraction?e.autoplay.stop():e.autoplay.pause())},destroy:function(){var e=this;e.autoplay.running&&e.autoplay.stop()}}},ce={setTranslate:function(){for(var e=this,t=e.slides,a=0;a<t.length;a+=1){var i=e.slides.eq(a),s=-i[0].swiperSlideOffset;e.params.virtualTranslate||(s-=e.translate);var r=0;e.isHorizontal()||(r=s,s=0);var n=e.params.fadeEffect.crossFade?Math.max(1-Math.abs(i[0].progress),0):1+Math.min(Math.max(i[0].progress,-1),0);i.css({opacity:n}).transform("translate3d("+s+"px, "+r+"px, 0px)")}},setTransition:function(e){var t=this,a=t.slides,i=t.$wrapperEl;if(a.transition(e),t.params.virtualTranslate&&0!==e){var s=!1;a.transitionEnd(function(){if(!s&&t&&!t.destroyed){s=!0,t.animating=!1;for(var e=["webkitTransitionEnd","transitionend"],a=0;a<e.length;a+=1)i.trigger(e[a])}})}}},ue={name:"effect-fade",params:{fadeEffect:{crossFade:!1}},create:function(){var e=this;l.extend(e,{fadeEffect:{setTranslate:ce.setTranslate.bind(e),setTransition:ce.setTransition.bind(e)}})},on:{beforeInit:function(){var e=this;if("fade"===e.params.effect){e.classNames.push(e.params.containerModifierClass+"fade");var t={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!0};l.extend(e.params,t),l.extend(e.originalParams,t)}},setTranslate:function(){var e=this;"fade"===e.params.effect&&e.fadeEffect.setTranslate()},setTransition:function(e){var t=this;"fade"===t.params.effect&&t.fadeEffect.setTransition(e)}}},he={setTranslate:function(){var t,a=this,i=a.$el,s=a.$wrapperEl,r=a.slides,n=a.width,o=a.height,l=a.rtl,d=a.size,p=a.params.cubeEffect,c=a.isHorizontal(),u=a.virtual&&a.params.virtual.enabled,h=0;p.shadow&&(c?(0===(t=s.find(".swiper-cube-shadow")).length&&(t=e('<div class="swiper-cube-shadow"></div>'),s.append(t)),t.css({height:n+"px"})):0===(t=i.find(".swiper-cube-shadow")).length&&(t=e('<div class="swiper-cube-shadow"></div>'),i.append(t)));for(var v=0;v<r.length;v+=1){var f=r.eq(v),g=v;u&&(g=parseInt(f.attr("data-swiper-slide-index"),10));var b=90*g,w=Math.floor(b/360);l&&(b=-b,w=Math.floor(-b/360));var y=Math.max(Math.min(f[0].progress,1),-1),x=0,T=0,E=0;g%4==0?(x=4*-w*d,E=0):(g-1)%4==0?(x=0,E=4*-w*d):(g-2)%4==0?(x=d+4*w*d,E=d):(g-3)%4==0&&(x=-d,E=3*d+4*d*w),l&&(x=-x),c||(T=x,x=0);var S="rotateX("+(c?0:-b)+"deg) rotateY("+(c?b:0)+"deg) translate3d("+x+"px, "+T+"px, "+E+"px)";if(y<=1&&y>-1&&(h=90*g+90*y,l&&(h=90*-g-90*y)),f.transform(S),p.slideShadows){var C=c?f.find(".swiper-slide-shadow-left"):f.find(".swiper-slide-shadow-top"),M=c?f.find(".swiper-slide-shadow-right"):f.find(".swiper-slide-shadow-bottom");0===C.length&&(C=e('<div class="swiper-slide-shadow-'+(c?"left":"top")+'"></div>'),f.append(C)),0===M.length&&(M=e('<div class="swiper-slide-shadow-'+(c?"right":"bottom")+'"></div>'),f.append(M)),C.length&&(C[0].style.opacity=Math.max(-y,0)),M.length&&(M[0].style.opacity=Math.max(y,0))}}if(s.css({"-webkit-transform-origin":"50% 50% -"+d/2+"px","-moz-transform-origin":"50% 50% -"+d/2+"px","-ms-transform-origin":"50% 50% -"+d/2+"px","transform-origin":"50% 50% -"+d/2+"px"}),p.shadow)if(c)t.transform("translate3d(0px, "+(n/2+p.shadowOffset)+"px, "+-n/2+"px) rotateX(90deg) rotateZ(0deg) scale("+p.shadowScale+")");else{var z=Math.abs(h)-90*Math.floor(Math.abs(h)/90),P=1.5-(Math.sin(2*z*Math.PI/360)/2+Math.cos(2*z*Math.PI/360)/2),k=p.shadowScale,$=p.shadowScale/P,I=p.shadowOffset;t.transform("scale3d("+k+", 1, "+$+") translate3d(0px, "+(o/2+I)+"px, "+-o/2/$+"px) rotateX(-90deg)")}var L=m.isSafari||m.isUiWebView?-d/2:0;s.transform("translate3d(0px,0,"+L+"px) rotateX("+(a.isHorizontal()?0:h)+"deg) rotateY("+(a.isHorizontal()?-h:0)+"deg)")},setTransition:function(e){var t=this,a=t.$el;t.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),t.params.cubeEffect.shadow&&!t.isHorizontal()&&a.find(".swiper-cube-shadow").transition(e)}},ve={name:"effect-cube",params:{cubeEffect:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94}},create:function(){var e=this;l.extend(e,{cubeEffect:{setTranslate:he.setTranslate.bind(e),setTransition:he.setTransition.bind(e)}})},on:{beforeInit:function(){var e=this;if("cube"===e.params.effect){e.classNames.push(e.params.containerModifierClass+"cube"),e.classNames.push(e.params.containerModifierClass+"3d");var t={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,resistanceRatio:0,spaceBetween:0,centeredSlides:!1,virtualTranslate:!0};l.extend(e.params,t),l.extend(e.originalParams,t)}},setTranslate:function(){var e=this;"cube"===e.params.effect&&e.cubeEffect.setTranslate()},setTransition:function(e){var t=this;"cube"===t.params.effect&&t.cubeEffect.setTransition(e)}}},fe={setTranslate:function(){for(var t=this,a=t.slides,i=0;i<a.length;i+=1){var s=a.eq(i),r=s[0].progress;t.params.flipEffect.limitRotation&&(r=Math.max(Math.min(s[0].progress,1),-1));var n=-180*r,o=0,l=-s[0].swiperSlideOffset,d=0;if(t.isHorizontal()?t.rtl&&(n=-n):(d=l,l=0,o=-n,n=0),s[0].style.zIndex=-Math.abs(Math.round(r))+a.length,t.params.flipEffect.slideShadows){var p=t.isHorizontal()?s.find(".swiper-slide-shadow-left"):s.find(".swiper-slide-shadow-top"),c=t.isHorizontal()?s.find(".swiper-slide-shadow-right"):s.find(".swiper-slide-shadow-bottom");0===p.length&&(p=e('<div class="swiper-slide-shadow-'+(t.isHorizontal()?"left":"top")+'"></div>'),s.append(p)),0===c.length&&(c=e('<div class="swiper-slide-shadow-'+(t.isHorizontal()?"right":"bottom")+'"></div>'),s.append(c)),p.length&&(p[0].style.opacity=Math.max(-r,0)),c.length&&(c[0].style.opacity=Math.max(r,0))}s.transform("translate3d("+l+"px, "+d+"px, 0px) rotateX("+o+"deg) rotateY("+n+"deg)")}},setTransition:function(e){var t=this,a=t.slides,i=t.activeIndex,s=t.$wrapperEl;if(a.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),t.params.virtualTranslate&&0!==e){var r=!1;a.eq(i).transitionEnd(function(){if(!r&&t&&!t.destroyed){r=!0,t.animating=!1;for(var e=["webkitTransitionEnd","transitionend"],a=0;a<e.length;a+=1)s.trigger(e[a])}})}}},me={name:"effect-flip",params:{flipEffect:{slideShadows:!0,limitRotation:!0}},create:function(){var e=this;l.extend(e,{flipEffect:{setTranslate:fe.setTranslate.bind(e),setTransition:fe.setTransition.bind(e)}})},on:{beforeInit:function(){var e=this;if("flip"===e.params.effect){e.classNames.push(e.params.containerModifierClass+"flip"),e.classNames.push(e.params.containerModifierClass+"3d");var t={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!0};l.extend(e.params,t),l.extend(e.originalParams,t)}},setTranslate:function(){var e=this;"flip"===e.params.effect&&e.flipEffect.setTranslate()},setTransition:function(e){var t=this;"flip"===t.params.effect&&t.flipEffect.setTransition(e)}}},ge={setTranslate:function(){for(var t=this,a=t.width,i=t.height,s=t.slides,r=t.$wrapperEl,n=t.slidesSizesGrid,o=t.params.coverflowEffect,l=t.isHorizontal(),d=t.translate,p=l?a/2-d:i/2-d,c=l?o.rotate:-o.rotate,u=o.depth,h=0,v=s.length;h<v;h+=1){var f=s.eq(h),g=n[h],b=(p-f[0].swiperSlideOffset-g/2)/g*o.modifier,w=l?c*b:0,y=l?0:c*b,x=-u*Math.abs(b),T=l?0:o.stretch*b,E=l?o.stretch*b:0;Math.abs(E)<.001&&(E=0),Math.abs(T)<.001&&(T=0),Math.abs(x)<.001&&(x=0),Math.abs(w)<.001&&(w=0),Math.abs(y)<.001&&(y=0);var S="translate3d("+E+"px,"+T+"px,"+x+"px)  rotateX("+y+"deg) rotateY("+w+"deg)";if(f.transform(S),f[0].style.zIndex=1-Math.abs(Math.round(b)),o.slideShadows){var C=l?f.find(".swiper-slide-shadow-left"):f.find(".swiper-slide-shadow-top"),M=l?f.find(".swiper-slide-shadow-right"):f.find(".swiper-slide-shadow-bottom");0===C.length&&(C=e('<div class="swiper-slide-shadow-'+(l?"left":"top")+'"></div>'),f.append(C)),0===M.length&&(M=e('<div class="swiper-slide-shadow-'+(l?"right":"bottom")+'"></div>'),f.append(M)),C.length&&(C[0].style.opacity=b>0?b:0),M.length&&(M[0].style.opacity=-b>0?-b:0)}}m.ie&&(r[0].style.perspectiveOrigin=p+"px 50%")},setTransition:function(e){this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)}},be={name:"effect-coverflow",params:{coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0}},create:function(){var e=this;l.extend(e,{coverflowEffect:{setTranslate:ge.setTranslate.bind(e),setTransition:ge.setTransition.bind(e)}})},on:{beforeInit:function(){var e=this;"coverflow"===e.params.effect&&(e.classNames.push(e.params.containerModifierClass+"coverflow"),e.classNames.push(e.params.containerModifierClass+"3d"),e.params.watchSlidesProgress=!0,e.originalParams.watchSlidesProgress=!0)},setTranslate:function(){var e=this;"coverflow"===e.params.effect&&e.coverflowEffect.setTranslate()},setTransition:function(e){var t=this;"coverflow"===t.params.effect&&t.coverflowEffect.setTransition(e)}}};return $.use([I,L,D,O,H,X,G,V,W,j,K,_,Q,ee,ae,se,ne,le,pe,ue,ve,me,be]),$});
//# sourceMappingURL=swiper.min.js.map
;
/*!
 * Bootstrap v3.3.4 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.4",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a(f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.4",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")&&(c.prop("checked")&&this.$element.hasClass("active")?a=!1:b.find(".active").removeClass("active")),a&&c.prop("checked",!this.$element.hasClass("active")).trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active"));a&&this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),c.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.4",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));return a>this.$items.length-1||0>a?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.4",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){b&&3===b.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=c(d),f={relatedTarget:this};e.hasClass("open")&&(e.trigger(b=a.Event("hide.bs.dropdown",f)),b.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger("hidden.bs.dropdown",f)))}))}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.4",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger("shown.bs.dropdown",h)}return!1}},g.prototype.keydown=function(b){if(/(38|40|27|32)/.test(b.which)&&!/input|textarea/i.test(b.target.tagName)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var e=c(d),g=e.hasClass("open");if(!g&&27!=b.which||g&&27==b.which)return 27==b.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find('[role="menu"]'+h+', [role="listbox"]'+h);if(i.length){var j=i.index(b.target);38==b.which&&j>0&&j--,40==b.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="menu"]',g.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="listbox"]',g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.4",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in").attr("aria-hidden",!1),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a('<div class="modal-backdrop '+e+'" />').appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.init("tooltip",a,b)};c.VERSION="3.3.4",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(this.options.viewport.selector||this.options.viewport),this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c&&c.$tip&&c.$tip.is(":visible")?void(c.hoverState="in"):(c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.options.container?a(this.options.container):this.$element.parent(),p=this.getPosition(o);h="bottom"==h&&k.bottom+m>p.bottom?"top":"top"==h&&k.top-m<p.top?"bottom":"right"==h&&k.right+l>p.width?"left":"left"==h&&k.left-l<p.left?"right":h,f.removeClass(n).addClass(h)}var q=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(q,h);var r=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",r).emulateTransitionEnd(c.TRANSITION_DURATION):r()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top=b.top+g,b.left=b.left+h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);return this.$element.trigger(g),g.isDefaultPrevented()?void 0:(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=d?{top:0,left:0}:b.offset(),g={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},h=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,g,h,f)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.width&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type)})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.4",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.4",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.4",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){
var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.4",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return c>e?"top":!1;if("bottom"==this.affixed)return null!=c?e+this.unpin<=f.top?!1:"bottom":a-d>=e+g?!1:"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&c>=e?"top":null!=d&&i+j>=a-d?"bottom":!1},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=a(document.body).height();"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);
define("bootstrap", ["jquery"], function(){});

define('controllers/welcomeNew-703bbe13',['models/ZhugeModel', 'swiper', 'jquery', 'bootstrap'], function (zhugeModel, Swiper) {
    (function () {
        var search = window.location.search.split('?')[1] ? '?' + window.location.search.split('?')[1] : '';
        var passporturl = $('#passportURL').val();
        var $notLoginNav = $('#not-login-nav');
        if (search) {
            window.sessionStorage.setItem('hashSearch', encodeURIComponent(search.substring(1)));
            $notLoginNav.find('a.login').attr('href', passporturl + '/Login/?return_url=' + window.location.origin + '#' + search);
            $notLoginNav.find('a.register').attr('href', passporturl + '/Register/?return_url=' + window.location.origin + '#' + search);
        } else {
            $notLoginNav.find('a.login').attr('href', passporturl + '/Login/?return_url=' + window.location.origin);
            $notLoginNav.find('a.register').attr('href', passporturl + '/Register/?return_url=' + window.location.origin);
        }
    })();
    (function mobileType($) {
        var ua = navigator.userAgent.toLowerCase();
        var isIOS, isAndroid, url;
        if (/iphone|ipad|ipod/.test(ua)) {
            isIOS = true;
            url = 'http://www.railfans.ml';
        }
        if (/android|linux/.test(ua)) {
            isAndroid = true;
            url = 'http://www.railfans.ml';
        }
        $('.download-redirect').attr('href', url);
        if (isMobile()) {
            $('.app-cover').show();
            $('body').addClass('ismobile');
        }
        if (isIOS || isMobile()) {
            $('.app_nav.btn-qr > a').attr('href', url);
        }
        if (isMobile() === false) {
            $('.app_nav.btn-qr').addClass('show');
        }
        APP.isIOS = isIOS;
        APP.isAndroid = isAndroid;
        return {
            isIOS: isIOS,
            isAndroid: isAndroid
        };
    })(jQuery);
    //style modified
    if (APP.isIOS && window.innerWidth <= 1024 && window.innerWidth >= 480) {
        $('.section-knowledge .content-box, .section-live .content-box').css('width', '55%');
        $('.swiper-pic1, .swiper-pic2').css('width', '55%');
    }
    $(window).on('scroll', function () {
        if ($('section .slide-nav').offset().top - $(document).scrollTop() <= 0) {
            $('.slide-fixed-nav').show();
        } else {
            $('.slide-fixed-nav').hide();
        }
        // if ($('.section-camp').offset().top - $(document).scrollTop() <= 80) {
        //     $('.slide-nav li').removeClass('active');
        //     $('.slide-nav li').eq(0).addClass('active');
        // }
        // if ($('.section-teacher').offset().top - $(document).scrollTop() <= 80) {
        //     $('.slide-nav li').removeClass('active');
        //     $('.slide-nav li').eq(1).addClass('active');
        // }
        // if ($('.section-student').offset().top - $(document).scrollTop() <= 80) {
        //     $('.slide-nav li').removeClass('active');
        //     $('.slide-nav li').eq(2).addClass('active');
        // }
        if ($('.section-knowledge').offset().top - $(document).scrollTop() <= 80) {
            $('.slide-nav li').removeClass('active');
            $('.slide-nav li').eq(1).addClass('active');
        }
        if ($('.section-quiz').offset().top - $(document).scrollTop() <= 80) {
            $('.slide-nav li').removeClass('active');
            $('.slide-nav li').eq(2).addClass('active');
        }
        if ($('.section-live').offset().top - $(document).scrollTop() <= 80) {
            $('.slide-nav li').removeClass('active');
            $('.slide-nav li').eq(3).addClass('active');
        }
        if ($('.section-subject').offset().top - $(document).scrollTop() <= 80) {
            $('.slide-nav li').removeClass('active');
            $('.slide-nav li').eq(4).addClass('active');
        }
        // if ($('.section-question').offset().top - $(document).scrollTop() <= 80) {
        //     $('.slide-nav li').removeClass('active');
        //     $('.slide-nav li').eq(7).addClass('active');
        // }
    });
    var videoSwiper1 = new Swiper('.swiper-video1', {
        loop: true,
        autoHeight: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        on: {
            slideChange: function slideChange() {
                $('.swiper-video1 video').hide();
                $('.swiper-video1 img').show();
                $('.swiper-video1 video').trigger('load');
                $('.swiper-video1 .play-btn').show();
            }
        }
    });
    var videoSwiper2 = new Swiper('.swiper-video2', {
        loop: true,
        autoHeight: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        on: {
            slideChange: function slideChange() {
                $('.swiper-video2 video').hide();
                $('.swiper-video2 img').show();
                $('.swiper-video2 video').trigger('load');
                $('.swiper-video2 .play-btn').show();
            }
        }
    });
    $('video').on('click', function () {
        if ($(this)[0].paused === false) {
            $(this).trigger('pause');
            $(this).removeClass('playing');
        } else {
            $(this).trigger('play');
            $(this).addClass('playing');
        }
    });
    $('.play-btn').on('click', function (e) {
        var $video = $(e.currentTarget).parent().find('.swiper-slide-active video');
        var _height = $(this).parents('.swiper-container').find('img').height();
        if ($(this).parents('.swiper-container').find($video).attr('src') === '') {
            var _src = $(this).parents('.swiper-container').find($video).attr('data-src');
            var props = {};
            $(this).parents('.swiper-container').find($video).attr('src', _src);
            if ($(e.currentTarget).parents('.section-live').length === 0) {
                props[zhugeModel.PAGE_WEL.KNOWLEDGE_PLAY.props[0]] = $(this).parents('.swiper-container').find($video).attr('data-name');
                zhuge.track(zhugeModel.PAGE_WEL.KNOWLEDGE_PLAY.name, props);
            } else {
                props[zhugeModel.PAGE_WEL.LIVE_PLAY.props[0]] = $(this).parents('.swiper-container').find($video).attr('data-name');
                zhuge.track(zhugeModel.PAGE_WEL.LIVE_PLAY.name, props);
            }
        }
        $(this).parents('.swiper-container').find('img').hide();
        $(this).parents('.swiper-container').find('video').css('height', _height);
        $(this).parents('.swiper-container').find('video').show();
        $video.trigger('click');
        $video.addClass('playing');
        $(this).hide();
    });
    var picSwiper1 = new Swiper('.swiper-pic1', {
        loop: true,
        autoHeight: true,
        autoplay: {
            disableOnInteraction: false
        },
        navigation: {
            nextEl: '.section-quiz .swiper-button-next',
            prevEl: '.section-quiz .swiper-button-prev'
        },
        pagination: {
            el: '.pic1-pagination'
        }
    });
    var picSwiper2 = new Swiper('.swiper-pic2', {
        loop: true,
        autoplay: true,
        autoHeight: true,
        pagination: {
            el: '.pic2-pagination'
        }
    });
    var picSwiper3 = new Swiper('.swiper-pic3', {
        init: false,
        autoHeight: true,
        observer: true,
        observeParents: true,
        loop: true,
        navigation: {
            nextEl: '.outter .swiper-button-next',
            prevEl: '.outter .swiper-button-prev'
        },
        pagination: {
            el: '.pic3-pagination'
        }
    });
    //放大轮播
    $('.swiper-pic1 img').on('click', function (e) {
        $('.image-bg').show();
        picSwiper3.init();
        if ($(e.currentTarget).attr('src').indexOf('1') !== -1) {
            picSwiper3.slideTo(1);
        }
        if ($(e.currentTarget).attr('src').indexOf('2') !== -1) {
            picSwiper3.slideTo(2);
        }
        if ($(e.currentTarget).attr('src').indexOf('3') !== -1) {
            picSwiper3.slideTo(3);
        }
    });
    $('.image-bg').on('click', function () {
        $('.image-bg').hide();
    });
    $('.outter').on('click', function (e) {
        e.stopPropagation();
    });

    $('.slide-nav a').on('click', function (e) {
        e.preventDefault();
        var section = $(e.currentTarget).text().trim();
        var props = {};
        props[zhugeModel.PAGE_WEL.NAV_CLICK.props[0]] = section;
        zhuge.track(zhugeModel.PAGE_WEL.NAV_CLICK.name, props);
        $('.slide-nav li').removeClass('active');
        switch (section) {
            case '冬/夏令营':
                $('html,body').animate({ scrollTop: $('.section-camp').offset().top - 79 });
                $('.slide-nav li').eq(0).addClass('active');
                break;
            // case '质心名师':
            //     $('html,body').animate({scrollTop: $('.section-teacher').offset().top - 79});
            //     $('.slide-nav li').eq(1).addClass('active');
            //     break;
            // case '质心学员':
            //     $('html,body').animate({scrollTop: $('.section-student').offset().top - 79});
            //     $('.slide-nav li').eq(2).addClass('active');
            //     break;
            case '知识点':
                $('html,body').animate({ scrollTop: $('.section-knowledge').offset().top - 79 });
                $('.slide-nav li').eq(2).addClass('active');
                break;
            case '题库':
                $('html,body').animate({ scrollTop: $('.section-quiz').offset().top - 79 });
                $('.slide-nav li').eq(3).addClass('active');
                break;
            case '在线课程':
                $('html,body').animate({ scrollTop: $('.section-live').offset().top - 79 });
                $('.slide-nav li').eq(4).addClass('active');
                break;
            case '学科课程':
                $('html,body').animate({ scrollTop: $('.section-subject').offset().top - 79 });
                $('.slide-nav li').eq(5).addClass('active');
                break;
            // case '新手指引':
            //     $('html,body').animate({scrollTop: $('.section-question').offset().top - 79});
            //     $('.slide-nav li').eq(7).addClass('active');
            //     break;
            default:
                break;
        }
    });

    //snowing animation
    // function getRandom(min, max) {
    //     return Math.random() * (max - min) + min;
    // }
    function clickedNavLi(e) {
        var $li = $(e.currentTarget);
        console.log($li);
        switch (true) {
            case $li.hasClass('courses_nav'):
                zhuge.track(zhugeModel.secondPages.COURSES);
                break;
            case $li.hasClass('quiz_nav'):
                zhuge.track(zhugeModel.secondPages.QUIZ);
                break;
            case $li.hasClass('exam_nav'):
                zhuge.track(zhugeModel.secondPages.EXAMS);
                break;
            case $li.hasClass('download_nav'):
                zhuge.track(zhugeModel.secondPages.DOWNLOADS);
                break;
            case $li.hasClass('article_nav'):
                zhuge.track(zhugeModel.secondPages.ARTICLE);
                break;
            case $li.hasClass('live_nav'):
                zhuge.track(zhugeModel.secondPages.LIVES);
                break;
            case $li.hasClass('forum_nav'):
                zhuge.track(zhugeModel.secondPages.FORUM);
                break;
            case $li.hasClass('dly_nav'):
                zhuge.track(zhugeModel.secondPages.CAMP_REGISTER);
                break;
            case $li.hasClass('center_nav'):
                zhuge.track(zhugeModel.secondPages.COURSE_CENTER);
                break;
            case $li.hasClass('article_phy_nav'):
                zhuge.track(zhugeModel.NAVIGATE.PHO_NEWS);
                break;
            case $li.hasClass('article_bio_nav'):
                zhuge.track(zhugeModel.NAVIGATE.BIO_NEWS);
                break;
            case $li.hasClass('article_chem_nav'):
                zhuge.track(zhugeModel.NAVIGATE.CHEM_NEWS);
                break;
            default:
                break;
        }
    }
    $('.section-camp .first-btn').on('click', function (e) {
        e.preventDefault();
        zhuge.track(zhugeModel.PAGE_WEL.MORE_CAMP_CLICK, {}, function () {
            window.location.href = $(e.currentTarget).attr('href');
        });
    });
    $('.section-camp .second-btn').on('click', function (e) {
        e.preventDefault();
        zhuge.track(zhugeModel.PAGE_WEL.REGIST_CAMP_CLICK, {}, function () {
            window.location.href = $(e.currentTarget).attr('href');
        });
    });
    $('.section-knowledge .link-text').on('click', function (e) {
        e.preventDefault();
        zhuge.track(zhugeModel.PAGE_WEL.MORE_KNOWLEDGE_CLICK, {}, function () {
            window.location.href = $(e.currentTarget).attr('href');
        });
    });
    $('.section-quiz .link-text').on('click', function (e) {
        e.preventDefault();
        zhuge.track(zhugeModel.PAGE_WEL.MORE_QUIZ_CLICK, {}, function () {
            window.location.href = $(e.currentTarget).attr('href');
        });
    });
    $('.section-live .link-text').on('click', function (e) {
        e.preventDefault();
        zhuge.track(zhugeModel.PAGE_WEL.MORE_LIVE_CLICK, {}, function () {
            window.location.href = $(e.currentTarget).attr('href');
        });
    });
    $('.zhihu a').on('click', function (e) {
        e.preventDefault();
        var props = {};
        props[zhugeModel.PAGE_WEL.ZHIHU_CLICK.props[0]] = $(e.currentTarget).attr('href');
        zhuge.track(zhugeModel.PAGE_WEL.ZHIHU_CLICK.name, props);
        window.open($(e.currentTarget).attr('href'), '_blank');
    });
    $('.tab-content a').on('click', function (e) {
        e.preventDefault();
        var props = {};
        var _subject = $(e.currentTarget).parents('.tab-pane').attr('id');
        props[zhugeModel.PAGE_WEL.ARTICLE_CLICK.props[0]] = $(e.currentTarget).parent().prev().html();
        switch (_subject) {
            case 'phy':
                _subject = '物理';
                break;
            case 'bio':
                _subject = '生物';
                break;
            case 'chem':
                _subject = '化学';
                break;
            case 'recruit':
                _subject = '自招';
                break;
            default:
                break;
        }
        props[zhugeModel.PAGE_WEL.ARTICLE_CLICK.props[1]] = _subject;
        zhuge.track(zhugeModel.PAGE_WEL.ARTICLE_CLICK.name, props);
        window.open($(e.currentTarget).attr('href'), '_blank');
    });
    $('.phy-link').on('click', function (e) {
        e.preventDefault();
        var props = {};
        props[zhugeModel.PAGE_WEL.CAMP_PAGE_CLICK.props[0]] = '物理';
        zhuge.track(zhugeModel.PAGE_WEL.CAMP_PAGE_CLICK.name, props);
        window.open($(e.currentTarget).attr('href'), '_blank');
    });
    $('.bio-link').on('click', function (e) {
        e.preventDefault();
        var props = {};
        props[zhugeModel.PAGE_WEL.CAMP_PAGE_CLICK.props[0]] = '生物';
        zhuge.track(zhugeModel.PAGE_WEL.CAMP_PAGE_CLICK.name, props);
        window.open($(e.currentTarget).attr('href'), '_blank');
    });
    $('.chem-link').on('click', function (e) {
        e.preventDefault();
        var props = {};
        props[zhugeModel.PAGE_WEL.CAMP_PAGE_CLICK.props[0]] = '化学';
        zhuge.track(zhugeModel.PAGE_WEL.CAMP_PAGE_CLICK.name, props);
        window.open($(e.currentTarget).attr('href'), '_blank');
    });
    $('.math-link').on('click', function (e) {
        e.preventDefault();
        var props = {};
        props[zhugeModel.PAGE_WEL.CAMP_PAGE_CLICK.props[0]] = '自招';
        zhuge.track(zhugeModel.PAGE_WEL.CAMP_PAGE_CLICK.name, props);
        window.open($(e.currentTarget).attr('href'), '_blank');
    });
    $('#not-login-nav a').on('click', function (e) {
        e.preventDefault();
        zhuge.track(zhugeModel.PAGE_WEL.LOGIN_CLICK, {}, function () {
            window.location.href = $(e.currentTarget).attr('href');
        });
    });
    function isMobile() {
        var userAgentInfo = navigator.userAgent;
        var Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod'];
        for (var v = 0; v < Agents.length; v++) {
            if (userAgentInfo.indexOf(Agents[v]) > 0) {
                return true;
            }
        }
        return false;
    }

    // (function letItSnow() {
    //     var snowflakes = document.querySelectorAll('.snow');
    //     for (var i = 0; i < snowflakes.length; i++) {
    //         var snowflake = snowflakes[i];
    //         snowflake.setAttribute('cx', getRandom(0, 100) + '%');
    //         snowflake.setAttribute('cy', '-' + getRandom(1, 100));
    //         snowflake.setAttribute('r', getRandom(1, 3));
    //     }
    // })();
    function redirect() {
        var search = window.location.search;
        var baseUrl = $('#passportURL').val();
        if (window.location.hash.length > 0) {
            search = search ? search + '&from=welcome' : '?from=welcome';
            if (window.location.hash.indexOf('#order') > -1) {
                window.location = baseUrl + '/Login' + window.location.hash;
            } else if (window.location.hash.indexOf('#user_info') > -1) {
                window.location = baseUrl + '/Login' + window.location.hash;
            } else {
                window.location = '/' + search + window.location.hash;
            }
        }
    }

    redirect();
    (function () {
        $(window).bind('hashchange', function () {
            console.log(window.location.hash);
            redirect();
        });
        zhuge.track(zhugeModel.secondPages.WELCOME_PAGE);
    })();
    (function ($) {
        'use strict'; // Start of use strict

        // jQuery for page scrolling feature - requires jQuery Easing plugin
        // $('a.page-scroll').bind('click', function(event) {
        //     var $anchor = $(this);
        //     $('html, body').stop().animate({
        //         scrollTop: ($($anchor.attr('href')).offset().top - 50)
        //     }, 1250, 'easeInOutExpo');
        //     event.preventDefault();
        // });

        // Highlight the top nav as scrolling occurs
        // $('body').scrollspy({
        //     target: '.navbar-fixed-top',
        //     offset: 51
        // });

        // Closes the Responsive Menu on Menu Item Click

        $('#zhixin-side-nav').click(function () {
            if ($('#zx-nav-toggle').hasClass('collapsed')) {
                $('body, html').removeClass('modal-open').css('height', 'auto');
            }
            $('#zhixin-side-nav').addClass('folded');
            $('#zx-nav-toggle').removeClass('collapsed');
        });

        $('#zx-nav-toggle').on('click', function (event) {
            event.stopPropagation();
            $('#zhixin-side-nav').toggleClass('folded');
            $(this).toggleClass('collapsed');
            $('#zhixin-nav li.dropdown').removeClass('open');
            $('body, html').addClass('modal-open').css('height', '100%');
        });
        // Fit Text Plugin for Main Header
        // $('h1').fitText(
        //     1.2, {
        //         minFontSize: '35px',
        //         maxFontSize: '60px'
        //     }
        // );

        // Offset for Main Navigation
        // $('#mainNav').affix({
        //     offset: {
        //         top: 100
        //     }
        // });
        function reloadNav(subject) {
            if (subject === 'MATH') {
                $('#zhixin-nav > div.container > ul, #zhixin-side-nav > ul').addClass('show-chemistry').removeClass('not-chemistry');
                $('.jphy_nav').show();
                $('.math_nav').hide();
            } else if (subject === 'J_PHY') {
                $('#zhixin-nav > div.container > ul, #zhixin-side-nav > ul').addClass('show-chemistry').removeClass('not-chemistry');
                $('.math_nav').show();
                $('.jphy_nav').hide();
            } else {
                $('#zhixin-nav > div.container > ul, #zhixin-side-nav > ul').addClass('not-chemistry').removeClass('show-chemistry');
                $('.math_nav').show();
                $('.jphy_nav').show();
            }
        }
        function switchSubject(params) {
            $.ajax({
                type: 'POST',
                url: '/User/switchSubject',
                dataType: 'JSON',
                data: params,
                success: function success(data) {
                    if (data.code === 1) {
                        $('.nav-subject.active').removeClass('active');
                        $('.nav-subject[data-name=' + gradeSubjectName + ']').addClass('active');
                        $('.more-subject-title').text(gradeSubjectName);
                        reloadNav(params.subject);
                    }
                }
            });
        }

        $('.mobile-toggle').click(function (e) {
            var $mobileHeader = $('.mobile-header');
            var $mobileToggle = $('#mobile-toggle');
            var marginTop = 0;
            if (/Android|webOS|iPhone|BlackBerry/i.test(navigator.userAgent)) {
                marginTop = 80;
            }
            if ($(e.currentTarget).hasClass('active')) {
                $mobileToggle.hide();
                $mobileHeader.css('background', 'none');
                $mobileHeader.css('margin-left', 'auto');
                $('section.section-banner').css('margin-top', marginTop);
                $(e.currentTarget).removeClass('active');
            } else {
                $mobileToggle.show();
                $mobileHeader.css('background', '#fff');
                $mobileHeader.css('margin-left', '0');
                $('section.section-banner').css('margin-top', $mobileToggle.height() + marginTop);
                $(e.currentTarget).addClass('active');
            }
        });

        var gradeSubjectName = '高中物理';

        $('.nav-subject').click(function (e) {
            var state = $(e.currentTarget).attr('data-type');
            gradeSubjectName = $(e.currentTarget).attr('data-name');
            var props = {},
                text = $(e.currentTarget).text().trim();
            var marginTop = 0;
            if (/Android|webOS|iPhone|BlackBerry/i.test(navigator.userAgent)) {
                marginTop = 80;
            }
            var $mobileHeader = $('.mobile-header');
            var $mobileToggle = $('#mobile-toggle');
            $mobileToggle.hide();
            $mobileHeader.css('background', 'none');
            $mobileHeader.css('margin-left', 'auto');
            $('section.section-banner').css('margin-top', marginTop);
            $('.mobile-toggle').removeClass('active');

            if ($(e.currentTarget).hasClass('active')) {
                return false;
            }
            props[zhugeModel.NAVIGATE.PROPS_SUBJECT] = text;
            zhuge.track(zhugeModel.NAVIGATE.SWITCH_SUBJECT, props);
            switchSubject({
                subject: state
            });
        });

        function getCookie(c_name) {
            if (document.cookie.length > 0) {
                var c_start = document.cookie.indexOf(c_name + '=');
                if (c_start != -1) {
                    c_start = c_start + c_name.length + 1;
                    var c_end = document.cookie.indexOf(';', c_start);
                    if (c_end == -1) {
                        c_end = document.cookie.length;
                    }
                    return unescape(document.cookie.substring(c_start, c_end));
                }
            }
            return '';
        }

        // render nav subject
        (function () {
            var PHY_SUBJECT = 'PHY';
            var subject = getCookie('subject') || PHY_SUBJECT;
            $('.nav-subject.active').removeClass('active');
            $('.nav-subject[data-type=' + subject + ']').addClass('active');
            reloadNav(subject);
        })();

        // Initialize WOW.js Scrolling Animations
        // if (APP.IE) {
        //     $('.wow').removeClass('wow');
        // } else {
        //     var wow = new WOW();
        //     alert(123)
        //     wow.init();
        // }

        //play-button binding
        function setUserAgent(window, userAgent) {
            if (window.navigator.userAgent != userAgent) {
                var userAgentProp = {
                    get: function get() {
                        return userAgent;
                    }
                };
                try {
                    Object.defineProperty(window.navigator, 'userAgent', userAgentProp);
                } catch (e) {
                    window.navigator = Object.create(navigator, {
                        userAgent: userAgentProp
                    });
                }
            }
        }

        // function isMobile() {
        //     var userAgentInfo = navigator.userAgent;
        //     var Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod'];
        //     for (var v = 0; v < Agents.length; v++) {
        //         if (userAgentInfo.indexOf(Agents[v]) > 0) {
        //             return true;
        //         }
        //     }
        //     return false;
        // }

        function isWechat() {
            var ua = navigator.userAgent.toLowerCase();
            return ua.indexOf('micromessenger') > -1 ? true : false;
        }

        if (isWechat()) {
            $('.bg-split').css('position', 'absolute');
            $('.UPhO-title').css('position', 'absolute');
        } else {
            $(window).scroll(function () {
                var offset = document.body.scrollTop * -0.75;
                offset = '(' + offset + 'px)';
                $('#bg-3').css('transform', 'translateY' + offset);
            });
        }

        //Initialize Wechat barcode popover
        var image = '<img src="/img/barcode.jpg">';
        $('#wechat_popover').popover({
            placement: 'top',
            content: image,
            html: true
        });
    })(jQuery); // End of use strict
    var hyperlinksAddParams = function hyperlinksAddParams($el, from) {
        var hashSearch = decodeURIComponent(sessionStorage.getItem('hashSearch') || '');
        var $target = $el ? $el.find('.a-with-parameters a') : $('.a-with-parameters a');
        if (hashSearch) {
            if (from) {
                hashSearch = APP.util.replaceParamVal(hashSearch, 'from', from);
                if (hashSearch.split('?')) {
                    hashSearch = hashSearch.split('?')[1];
                }
            }
            $target.each(function () {
                if (this.hash.split('?')[1]) {
                    this.hash = this.hash.replace(/\?(.+)?/g, '?' + hashSearch);
                } else {
                    this.hash = this.hash + '?' + hashSearch;
                }
            });
        } else {
            $target.each(function () {
                if (this.hash.split('?')[1]) {
                    this.hash = this.hash.replace(/\?(.+)?/g, '');
                }
            });
        }
    };
    $(document).ready(function () {
        $('.navbar-nav li').bind('click', function (e) {
            clickedNavLi(e);
        });
        var path;
        if ($(window).width() > 768) {
            path = '/img/review/2018/float_modal.png';
        } else {
            path = '/img/review/2018/float_modal_mb.png';
        }
        $('#review-2018-modal .modal-body img').attr('src', path);
        var time = new Date().getTime();
        if (window.location.origin.indexOf('www.eduzhixin.com') !== -1) {
            if (time > 1545649200000 && time < 1546801200000) {} else {
                $('.date-out').hide();
            }
        }
        hyperlinksAddParams();
    });
});
