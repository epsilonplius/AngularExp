(function () {
        var app = angular.module('store', []);

        var gem = {
            name: 'Some Gem',
            price: 10,
            description: 'sjgfskjgfsjdgfsjdgfskj'
        };


        app.controller('StoreController', function () {
            this.product = gem;
        });


    }
)();
