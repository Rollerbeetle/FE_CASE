

export default class ListViewController {
    static get UID() {
        return 'ListViewController'
    }

    /* @ngInject */
    constructor($mdDialog) {

        this.searchText = "";

        this.wines = [
            {
                name: 'Lewis',
                type: 'Cabernet Sauvignon',
                vinyard: 'Napa Valley ',
                country: 'USA',
                year: 2013,
                price: 90,
                description: "Remarkably elegant and refined for a wine of this size and depth, with tiers of plum, blackberry and currant flavors, as well as subtle touches of black licorice that remain pure and graceful on the long, lingering aftertaste. Drink now through 2028. 1,600 cases made.",
                amount: 2
            }, {
                name: 'Mollydooker',
                type: 'Shiraz',
                vinyard: 'McLaren Vale',
                country: "Australia",
                year: 2014,
                price: 75,
                description: "Bold, expressive, velvety and generous, with ripe cherry and plum flavors at the core. Complex details of vanilla bean, licorice, Earl Grey tea and gingerbread explode on the long finish. Drink now through 2030. 1,467 cases made. ",
                amount: 5
            }, {
                name: 'Beaux Frères',
                type: 'Pinot Noir',
                vinyard: 'Ribbon Ridge',
                country: "Fance",
                year: 2014,
                price: 90,
                description: "Bold, expressive, velvety and generous, with ripe cherry and plum flavors at the core. Complex details of vanilla bean, licorice, Earl Grey tea and gingerbread explode on the long finish. Drink now through 2030. 1,467 cases made. ",
                amount: 24
            }, {
                name: 'Mollydooker',
                type: 'Shiraz',
                vinyard: 'McLaren Vale',
                country: "Australia",
                year: 2014,
                price: 75,
                description: "Supple, expressive and multilayered, exhibiting flavors of plum, currant, pomegranate and violet that come together harmoniously, persisting into the long and exceptionally well-balanced finish. Drink now through 2024. 2,405 cases made. ",
                amount: 10
            }, {
                name: 'Hall',
                type: 'Canermet Sauvignon',
                vinyard: 'Eigteen Seventy-Three',
                country: "Australia",
                year: 2013,
                price: 80,
                description: "Ultrarich, layered and tightly focused on a dense core of meaty blackberry, currant, loamy earth, anise, crushed rock and graphite notes. For all the flavor and depth, this features a persistent finish that folds in smoky, toasty oak, adding an extra dimension of texture, flavor and aroma. Drink now through 2028. 4,723 cases made",
                amount: 7
            }
        ]

        this.$mdDialog = $mdDialog
    }

    openAddWine($event) {

        let template = require('../../components/addDialog/addDialog.tpl.html');

        const parentEl = angular.element(document.getElementById('main-app'));

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
