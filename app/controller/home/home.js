const Model = require('../../mocks/article/list');
module.exports = app => {
  return class AppController extends app.Controller {
    async index() {
        const { ctx } = this;
        const initState = {
            navigation_message:[
                {
                    btn_text: '电影',
                    key: 'film'
                },
                {
                    btn_text: '电视剧',
                    key: 'tv_play'
                },
                {
                    btn_text: '综艺',
                    key: 'variety'
                },
                {
                    btn_text: '体育',
                    key: 'sports'
                },
                {
                    btn_text: '动画片',
                    key: 'cartoon'
                },
                {
                    btn_text: '搞笑短视频',
                    key: 'short_video'
                }
            ],
            banner_message: [
                {   
                    title: '标题1',
                    text: '这是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段文字1',
                    img: 'http://c.hiphotos.baidu.com/image/h%3D300/sign=ed84f4d0c4fcc3ceabc0cf33a244d6b7/cefc1e178a82b901e004bbc17f8da9773812ef93.jpg',
                    url_link: 'javascript:;',
                    show_year: '2016-10-10',
                    score_num: '',
                },
                {
                    title: '标题1',
                    text: 'aaa这是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段文字1',
                    img: 'http://c.hiphotos.baidu.com/image/h%3D300/sign=ed84f4d0c4fcc3ceabc0cf33a244d6b7/cefc1e178a82b901e004bbc17f8da9773812ef93.jpg',
                    url_link: 'javascript:;',
                    show_year: '2016-10-10',
                    score_num: '',
                },
                {
                    title: '标题1',
                    text: 'aaa这是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段文字1',
                    img: 'http://c.hiphotos.baidu.com/image/h%3D300/sign=ed84f4d0c4fcc3ceabc0cf33a244d6b7/cefc1e178a82b901e004bbc17f8da9773812ef93.jpg',
                    url_link: 'javascript:;',
                    show_year: '2016-10-10',
                    score_num: '',
                },
                {
                    title: '标题1',
                    text: 'aaa这是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段文字1',
                    img: 'http://c.hiphotos.baidu.com/image/h%3D300/sign=ed84f4d0c4fcc3ceabc0cf33a244d6b7/cefc1e178a82b901e004bbc17f8da9773812ef93.jpg',
                    url_link: 'javascript:;',
                    show_year: '2016-10-10',
                    score_num: '',
                },
                {
                    title: '标题1',
                    text: 'aaa这是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段文字1这是一段文字1',
                    img: 'http://c.hiphotos.baidu.com/image/h%3D300/sign=ed84f4d0c4fcc3ceabc0cf33a244d6b7/cefc1e178a82b901e004bbc17f8da9773812ef93.jpg',
                    url_link: 'javascript:;',
                    show_year: '2016-10-10',
                    score_num: '',
                }
            ]
        }
        await ctx.render('home/home.js', initState);
    }

    async client() {
      const { ctx } = this;
      await ctx.renderClient('home/home.js', Model.getPage(1, 10));
    }

    async pager() {
      const { ctx } = this;
      const pageIndex = ctx.query.pageIndex;
      const pageSize = ctx.query.pageSize;
      ctx.body = Model.getPage(pageIndex, pageSize);
    }
  };
};