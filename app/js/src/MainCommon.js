requirejs.config({
    paths: {
        backbone: 'backbone/backbone',
        jquery: 'jquery/dist/jquery',
        underscore: 'underscore/underscore',
        app: '../app'
    },
    shim: {
        backbone: {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        },
        underscore: {
            exports: '_'
        }
    }
});
