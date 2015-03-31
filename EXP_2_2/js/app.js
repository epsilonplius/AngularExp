(function () {
    var app = angular.module('store', []);

    var gems = [{
        name: 'Some Gem',
        price: 10,
        publishDate: '1388123412323',
        description: 'sjgfskjgfsjdgfsjdgfskj',
        canPurchase: true,
        soldOut: true
    }, {
        name: 'Some Gem 2',
        price: 30,
        publishDate: '1388123412323',
        description: 'aaaaaaaaaaaaaa',
        canPurchase: true,
        soldOut: false
    }, {
        name: 'Some Gem 3',
        price: 30,
        publishDate: '1388123412323',
        description: 'bbbbbbbbbbbbb',
        canPurchase: false,
        soldOut: false
    }, {
        name: 'Some Gem 4',
        price: 60,
        publishDate: '1388123412323',
        description: 'eeeeeeeeeee',
        canPurchase: false,
        soldOut: false
    }];


    app.controller('StoreController', function () {
        this.products = gems;
    });

    app.controller('PanelController', function () {
        this.tab=1;

    });


})();
