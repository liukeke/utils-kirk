/**
 * 截取URL参数
 * @param {string} name 截取的key
 * @param {string} [url] 被截取的url
 * @returns {string} 截取的val
 */
let urlParam = (name, url) => {
    let reg = new RegExp(".*[&?]" + name + "=([^&]*)(&|$)");
    let r;
    if (!url) {
        r = window.location.search.match(reg);
    } else {
        r = url.match(reg);
    }
    if (r) return decodeURIComponent(r[1]);
    return '';
};
/**
 * 跳转
 * @param {string} address 跳转地址
 */
let redirect = (address) => {
    window.location.href = address;
};
/**
 * 登录后跳转
 */
let loginReturnUrl = () => {
    window.location.href = 'loginReg.html?returnUrl=' + encodeURIComponent(window.location.href);
};
/**
 * 统计中英文数量
 * @param {string} str 统计的字符串 1个汉字 等于两个字母
 * @returns {number} 统计的数量
 */
let getBytesCount = (str) => {
    let bytesCount = 0;
    for (let i = 0; i < str.length; i++) {
        let c = str.charAt(i);
        if (/^[\u0000-\u00ff]$/.test(c)) //匹配双字节
        {
            bytesCount += 0.5;
        }
        else {
            bytesCount += 1;
        }

    }
    return bytesCount;
};
/**
 * 截取长度
 * @param {string} str 被截取的字符串
 * @param {number} num 需要截取的长度
 * @returns {string} 统计的数量
 */
let txtIntercept = (str, num) => {
    if (getBytesCount(str) > num) {
        return str.substring(0, num) + '...'
    } else {
        return str
    }
};
/**
 * 判断是手机端还是电脑端
 */
let isPhone = () => {
    if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
        return true;
    } else {
        return false;
    }
};
/**
 * 验证身份证
 * @param {string} str 传进来的字符串
 */
let isCardId = (str) => {
    let reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    if (reg.test(str)) {
        return true;
    } else {
        return false;
    }
};
/**
 * 判断是否是手机号
 * @param {string} val 传进来的字符串
 */
let isMobile = (val) => {
    let reg = /^1[3|4|5|7|8][0-9]\d{8}$/;
    return reg.test(val);
};
/**
 * 判断价格是否合法
 * @param {string} price 传进来的价格
 */
let priceIsOk = (price) => {
    let reg = /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/;
    if (reg.test(price)) {
        return true;
    } else {
        return false
    }
};
/**
 * 页面title
 * @param {string/Array} arr 需要设置的标题
 */
let documentTitle = (arr) => {
    let title = document.title;
    let str = '';
    if (typeof arr === 'object') {
        str = arr.join('_');
    } else {
        str = arr;
    }
    document.title = str + '_' + title;
};
/**
 * 只能输入数字 替换后 光标在原来位置
 * @param {object} e 传进来的字符串
 */
let inputNum = (e) => {
    e.target.value.replace(/\D/g, function (char, index, val) {
        e.target.value = val.replace(/\D/g, "");
        let rTextRange = null;
        if (e.target.setSelectionRange) {
            e.target.setSelectionRange(index, index);
        } else {//支持ie
            rTextRange = e.target.createTextRange();
            rTextRange.moveStart('character', index);
            rTextRange.collapse(true);
            rTextRange.select();
        }
    });
};
/**
 * 替换字符串中的URL
 * @param {string} str 传进来的字符串
 */
let strURLReplace = (str) => {
    let strRegex = '((https|http)://)[A-Za-z0-9-_]+\\.[A-Za-z0-9-_%&?/.=]+';
    /*let strRegex = '((https|http)://)[A-Za-z0-9-_]+\\.[A-Za-z0-9-_%&\?\/.=]+';*/
    let regex = new RegExp(strRegex, "gi");

    let replaceReg = (reg, str) => {
        return str.replace(reg, function (m) {
            return '<a href="' + m + '" target="_blank">' + m + '</a>';
        });
    };
    str = replaceReg(regex, str);
    return str;
};
/**
 * 星号生成
 * @param {number} num 需要几个星号
 */
let asterisk = (num) => {
    let returnVal = '';
    for (let i = 0; i < num; i++) {
        returnVal += '*'
    }
    return returnVal;
};
/**
 * 转价格
 * @param {string/object} num 价格
 * @param {number} start 开始位置
 */
let toFixedNumPriceOne = (num, start) => {
    let returnVal = '<span class="no">暂无报价</span>';
    let startStr = '';
    if (start) {
        startStr = '<b>起</b>';
    }
    if (num) {
        returnVal = '<i class="sub">¥</i>' + Math.abs(num.toFixed(2)) + startStr;
    }
    return returnVal;
};
/**
 * 保留两位价格
 * @param {string} num 价格
 */
let toFixedNumPriceTwo = (num) => {
    if (num) {
        return '<i class="sub">¥</i>' + Math.abs(num.toFixed(2));
    }
    return '<i class="sub">¥</i>' + 0;
};
/**
 * 个人账户
 * @param {number} x 价格
 */
let toDecimal2 = (x) => {
    let f = parseFloat(x);
    if (isNaN(f)) {
        return false;
    }
    let f2 = Math.round(x * 100) / 100;
    let s = f2.toString();
    let rs = s.indexOf('.');
    if (rs < 0) {
        rs = s.length;
        s += '.';
    }
    while (s.length <= rs + 2) {
        s += '0';
    }
    return s;
};
/**
 * 好评率
 * @param {number} g 好评数量
 * @param {number} m 中评数量
 * @param {number} b 差评数量
 */
let getGoodNum = (g, m, b) => {
    let total = g + m + b;
    if (Number(g) === 0) {
        return 0 + "%"
    } else {
        return ((g / total) * 100).toFixed(0) + "%"
    }
};
/**
 * 几天前
 * @param {string} now 当前时间戳
 * @param {string} time 需要算的时间戳
 */
let timeBefore = (now, time) => {
    let minute = 1000 * 60;
    let hour = minute * 60;
    let day = hour * 24;
    /*let halfamonth = day * 15;*/
    let month = day * 30;

    let diffValue = now - time;
    if (diffValue < 0) {
        //若日期不符则弹出窗口告之
        //alert("结束日期不能小于开始日期！");
    }
    let monthC = diffValue / month;
    let weekC = diffValue / (7 * day);
    let dayC = diffValue / day;
    let hourC = diffValue / hour;
    let minC = diffValue / minute;
    let result = '';
    /*下面的空字符串 是发表于 */
    if (monthC >= 1) {
        result = "" + parseInt(monthC, 10) + "个月前";
    }
    else if (weekC >= 1) {
        result = "" + parseInt(weekC, 10) + "周前";
    }
    else if (dayC >= 1) {
        result = "" + parseInt(dayC, 10) + "天前";
    }
    else if (hourC >= 1) {
        result = "" + parseInt(hourC, 10) + "个小时前";
    }
    else if (minC >= 1) {
        result = "" + parseInt(minC, 10) + "分钟前";
    } else
        result = "刚刚";
    return result;
};
/**
 * 价格控制
 * @param {object} e 格式化价格
 */
let priceOnKeyUp = (e) => {
    let val = e.target;
    let regStr = [
        ['^0(\\d+)$', '$1'], //禁止录入整数部分两位以上，但首位为0
        ['[^\\d\\.]+$', ''], //禁止录入任何非数字和点
        ['\\.(\\d?)\\.+', '.$1'], //禁止录入两个以上的点
        ['^(\\d+\\.\\d{2}).+', '$1'] //禁止录入小数点后两位以上
    ];
    for (let i = 0; i < regStr.length; i++) {
        let reg = new RegExp(regStr[i][0]);
        val.value = val.value.replace(reg, regStr[i][1]);
    }

    /*48 - 57 数字键 , 8删除键,37-40 上下左右键 , 13 回车键*/
    /*
    let val = e.target;
    console.log(e.keyCode);
        let keyCode = Number(e.keyCode);
        if (keyCode >= 48 || keyCode <= 57 || keyCode === 8 || keyCode >= 37 || keyCode <= 40 || keyCode === 13){

        }else{

        }*/
};
/**
 * 价格表单离开
 * @param {object} e 格式化价格
 */
let priceOnBlur = (e) => {
    let th = e.target;
    let v = th.value;
    if (v === '') {
        v = '0.00';
    } else if (v === '0') {
        v = '0.00';
    } else if (v === '0.') {
        v = '0.00';
    } else if (/^0+\d+\.?\d*.*$/.test(v)) {
        v = v.replace(/^0+(\d+\.?\d*).*$/, '$1');
        //v = inp.getRightPriceFormat(v).val;
    } else if (/^0\.\d$/.test(v)) {
        v = v + '0';
    } else if (!/^\d+\.\d{2}$/.test(v)) {
        if (/^\d+\.\d{2}.+/.test(v)) {
            v = v.replace(/^(\d+\.\d{2}).*$/, '$1');
        } else if (/^\d+$/.test(v)) {
            v = v + '.00';
        } else if (/^\d+\.$/.test(v)) {
            v = v + '00';
        } else if (/^\d+\.\d$/.test(v)) {
            v = v + '0';
        } else if (/^[^\d]+\d+\.?\d*$/.test(v)) {
            v = v.replace(/^[^\d]+(\d+\.?\d*)$/, '$1');
        } else if (/\d+/.test(v)) {
            v = v.replace(/^[^\d]*(\d+\.?\d*).*$/, '$1');
            //ty = false;
        } else if (/^0+\d+\.?\d*$/.test(v)) {
            v = v.replace(/^0+(\d+\.?\d*)$/, '$1');
            //ty = false;
        } else {
            v = '0.00';
        }
    }
    th.value = v;
};
/**
 * 价格转成 分
 * @param {string/number} val 格式化价格
 */
let priceCents = (val) => {
    if ((val === 0 || val === '0.00' || val !== '') && val !== undefined) {
        return val * 100
    } else {
        return '';
    }
};
let priceDollars = (val) => {
    if ((val === 0 || val === '0.00' || val !== '') && val !== undefined) {
        return (val / 100).toFixed(2)
    } else {
        return ''
    }
};
let parent = window.parent;
parent.imgSrc = {};
/**
 * 防盗链iframe
 * @param {string} url 传进去url
 * @param {string} width 宽度
 * @param {string} height 高度
 * @param {string} key 可变ID
 */
let showImg = (url, width, height, key) => {
    let id = 'imgIfr' + key;
    parent.imgSrc[id] = '<img src=\'' + url + '\' style="width:100%;height:100%; display:block;position:absolute;left:0;top:0;"/>';
    return '<iframe src="javascript:parent.imgSrc[\'' + id + '\'];" frameBorder="0" scrolling="no" style="width:' + width + ';height:' + height + ';overflow: hidden;"></iframe>';
};
let cookie = {
    /**
     *
     * @desc  设置Cookie
     * @param {String} name
     * @param {String} value
     * @param {Number} days
     */
    save: (name, value, days) => {
        let date = new Date();
        date.setDate(date.getDate() + days);
        document.cookie = name + '=' + value + ';expires=' + date;
    },
    /**
     * 根据name读取cookie
     * @param  {String} name
     * @return {String}
     */
    load: (name) => {
        let arr = document.cookie.replace(/\s/g, "").split(';');
        for (let i = 0; i < arr.length; i++) {
            let tempArr = arr[i].split('=');
            if (tempArr[0] === name) {
                return decodeURIComponent(tempArr[1]);
            }
        }
        return '';
    },
    /**
     *
     * @desc 根据name删除cookie
     * @param  {String} name
     */
    remove: (name) => {
        // 设置已过期，系统会立刻删除cookie
        this.save(name, '1', -1);
    }
};
/**
 * 批量删除cookie
 * @param {Array} nameArray 被删除的cookie 名称 数组
 * @param {object} opt 被删除的cookie 参数
 */
/*let cookieDel = (nameArray, opt) => {
    nameArray.map((data) => {
        cookie.remove(data, opt,-1);
        return false
    })
};*/
/**
 * Base64->Blob
 * @param {Object} dataUrl Base64 图片数据
 * @returns {string} 返回Blob图片地址
 */
let dataURLtoBlob = (dataUrl) => {
    let arr = dataUrl.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bsTr = atob(arr[1]), n = bsTr.length, u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bsTr.charCodeAt(n);
    }
    return new Blob([u8arr], {type: mime});
};
/**
 * html -> txt
 * @param {string} str html字符串
 * @returns {string} 返回纯文本
 */
let delHtmlTag = (str) => {
    return str.replace(/<[^>]+>/g, "");//去掉所有的html标记
};
/**
 * 获取分页数值 pageOn
 */
let getPageOn = () => {
    return Number(window.location.href.substring(window.location.href.indexOf('pageOn=') + 7, window.location.href.length) || 0)
};

export default {
    "urlParam": urlParam,
    "redirect": redirect,
    "loginReturnUrl": loginReturnUrl,
    "getBytesCount": getBytesCount,
    "txtIntercept": txtIntercept,
    "isPhone": isPhone,
    "isCardId": isCardId,
    "isMobile": isMobile,
    "priceIsOk": priceIsOk,
    "documentTitle": documentTitle,
    "inputNum": inputNum,
    "asterisk": asterisk,
    "toFixedNumPriceOne": toFixedNumPriceOne,
    "toFixedNumPriceTwo": toFixedNumPriceTwo,
    "strURLReplace": strURLReplace,
    "toDecimal2": toDecimal2,
    "getGoodNum": getGoodNum,
    "timeBefore": timeBefore,
    "priceOnKeyUp": priceOnKeyUp,
    "priceOnBlur": priceOnBlur,
    "priceCents": priceCents,
    "priceDollars": priceDollars,
    "cookie": cookie,
    "showImg": showImg,
    "dataURLtoBlob": dataURLtoBlob,
    "delHtmlTag": delHtmlTag,
    "getPageOn": getPageOn
}



