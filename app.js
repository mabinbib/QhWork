/* 链接配置 */

const LINKS = {

    //请假登记
    leave: "https://f.kdocs.cn/g/36UjdJ7f",
    //调休登记
    dayoff: "https://f.kdocs.cn/g/36UjdJ7f",
    //加班登记
    overtime: "https://f.kdocs.cn/g/36UjdJ7f",
    //外出登记
    outing: "https://f.kdocs.cn/g/36UjdJ7f",
    //省公司登记
    province: "http://221.207.18.198:18088/?company_id=233",
    //信通公司登记(海湖)
    xintong: "http://visitor.zhhqznly.cn:18088/?company_id=241"
};


/* 页面加载 */

window.onload = function () {

    document.getElementById('leaveLink').href = LINKS.leave;

    document.getElementById('dayoffLink').href = LINKS.dayoff;

    document.getElementById('overtimeLink').href = LINKS.overtime;

    document.getElementById('outingLink').href = LINKS.outing;

    document.getElementById('provinceLink').href = LINKS.province;

    document.getElementById('xintongLink').href = LINKS.xintong;
};


/* 折叠 */

function toggleSection(el) {

    const links = el.nextElementSibling;

    links.classList.toggle('show');
}


/* 日期密码 */

function getTodayPassword() {

    const d = new Date();

    const y = d.getFullYear();

    let m = d.getMonth() + 1;

    let day = d.getDate();

    m = m < 10 ? '0' + m : m;

    day = day < 10 ? '0' + day : day;

    return `${y}${m}${day}`;
}


/* 登录 */

function checkPassword() {

    const val = document
        .getElementById('passwordInput')
        .value;

    if (val === getTodayPassword()) {

        document
            .getElementById('loginBox')
            .style.display = 'none';

        document
            .getElementById('mainContent')
            .style.display = 'block';

    } else {

        alert('密码错误');
    }
}
