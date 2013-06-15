;(function() {
    
    ZD.applyConfig({
        groups: {
            index: {
                comboBase: 'http://localhost/min/?b=github/ArtStudio/app/webroot/zd/index/js&f=',
                root: '',
                combine: true,
                modules: {
                    'index': {
                        use: ['slideshow']    
                    },
                    'slideshow': {
                        path: 'slideshow.js',
                        requires: ['slide']
                    }
                }
            }
        }    
    });
    
})();
