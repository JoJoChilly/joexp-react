const mySwiper = new Swiper('.swiper-container', {
    direction: 'landscape', // 垂直切换选项

    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
    },

    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
    },

    // 如果需要滚动条
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

const body = {
    survey_id: 8685000,
    hash: 'a9e6',
    answer_survey: {
        id: '8685000',
        survey_type: 0,
        jsonLoadTime: 10,
        time: 1625117345,
        ua: window.navigator.userAgent,
        referrer: 'https://wj.qq.com/deliver.html?sid=8685000',
        uid: '760e7513-1003-43b0-8405-38e49611fcb5',
        sid: '89413765-51a7-44de-9526-3e0848d82e90',
        openid: '',
        pages: [{ id: '1', questions: [{ id: 'q-1-3pcd', type: 'text', text: 'a' }, { id: 'q-2-MtoS', type: 'text', text: 's' }, { id: 'q-3-ZBnJ', type: 'text', text: 'd' }] }],
        latitude: '',
        longitude: '',
        is_update: false }
};


fetch('/merryme/save', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
})
    .then(response => response.json())
    .then(res => {
        console.log(res);
    }).catch(e => {
        console.log(e);
    });

