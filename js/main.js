/**
 * Created by admin on 2017/8/19.
 */
require.config(
    {
        //��������JS�ļ��Ļ���·��,ʵ����ɸ�script��ǩ��data-main����ͬ�ĸ�·��
        baseUrl:"../js",
        paths: {
            'jQuery': 'lib/jquery-1.8.2.min',
            'index': 'index/index',
            'execute': 'index/execute'
        },
        shim: {
            'index': {
                deps: ['jQuery'],
                exports : 'index'
            }
        }
    }
)

require(["execute"],function(){
});