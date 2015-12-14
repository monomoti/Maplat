require.config({
    baseUrl: "js",
    //map: {
    //    '*' : {
    //        'css' : "//cdnjs.cloudflare.com/ajax/libs/require-css/0.1.8/css.min.js"
    //    }
    //},
    paths: {
        "jquery" : "//code.jquery.com/jquery-1.11.2.min",
        "ol3" : "ol",
        //"ol3css" : "../css/ol",
        "bootstrap" : "//maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min",
        //"bootstrapcss" : "//maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min",
        "tps" : "thinplatespline"
    },
    shim: {
        'jquery' : {
            exports: '$'
        },
        'ol' : {
            exports: 'ol'
        },
        'tps' : {
            exports: 'ThinPlateSpline'
        },
        'bootstrap' : { 
            deps: ['jquery'] 
        }
    }
});