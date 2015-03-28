(function () {
    var app = angular.module('store', []);

    var gem = {
        name: 'Some Gem',
        price: 10,
        description: 'sjgfskjgfsjdgfsjdgfskj',
        canPurchase: true,
        soldOut: true
    };


    app.controller('StoreController', function () {
        this.product = gem;
    });


})();
