

export default class ListViewController {
    static get UID() {
        return 'ListViewController'
    }

    /* @ngInject */
    constructor($mdDialog) {

        this.wines = [
            {
                name: 'Lewis',
                type: 'Cabernet Sauvignon',
                vinyard: 'Napa Valley ',
                year: 2013,
                price: 90,
                description: "Remarkably elegant and refined for a wine of this size and depth, with tiers of plum, blackberry and currant flavors, as well as subtle touches of black licorice that remain pure and graceful on the long, lingering aftertaste. Drink now through 2028. 1,600 cases made.",
                amount: 2
            }, {
                name: 'Mollydooker',
                type: 'Shiraz',
                vinyard: 'McLaren Vale',
                year: 2014,
                price: 75,
                description:"Bold, expressive, velvety and generous, with ripe cherry and plum flavors at the core. Complex details of vanilla bean, licorice, Earl Grey tea and gingerbread explode on the long finish. Drink now through 2030. 1,467 cases made. ",
                amount: 5
            }
        ]

        this.$mdDialog = $mdDialog
    }

    openAddWine($event) {

        let template = require('../../components/addDialog/addDialog.tpl.html');

        var parentEl = angular.element(document.getElementById('main-app'));

        let dialog = this.$mdDialog.show({
            parent: parentEl,
            targetEvent: $event,
            template: template,
            controller: 'AddDialogController',
            controllerAs: 'vm',
            clickOutsideToClose: true
        });

        dialog.then(response => {
          this.wines.push(response.wine);
        })

    }

}
