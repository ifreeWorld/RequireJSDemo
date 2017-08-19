/**
 * Created by admin on 2017/8/19.
 */
require.config(
    {
        //定义所有JS文件的基本路径,实际这可跟script标签的data-main有相同的根路径
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