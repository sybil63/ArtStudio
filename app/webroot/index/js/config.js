/**
 * 首页配置
 * @author ningzbruc@gmail.com
 * @date 2013-06-13
 */

;(function() {
    
    ZD.applyConfig({
        groups: {
            index: {
                base: YUI.getBase('index/js'),
                comboBase: YUI.getComboBase('index/js'),
                root: '',
                combine: YUI.combine,
                modules: {
                    'main': {
                        use: ['slideshow', 'books', 'hallfame']  
                    },
                    'slideshow': {
                        path: YUI.getPath('slideshow'),
                        requires: ['slide']
                    },
                    'books': {
                        path: YUI.getPath('books'),
                        requires: ['node', 'transition']
                    },
                    'hallfame': {
                        path: YUI.getPath('hallfame'),
                        requires: ['node', 'yui-throttle']
                    }
                }
            }
        }    
    });
    
})();
