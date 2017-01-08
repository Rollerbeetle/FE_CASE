

export default class ListViewController {
    static get UID() {
        return 'ListViewController'
    }

    /* @ngInject */
    constructor($mdDialog) {

        this.wines = [
            {
                name: '1',
                price: '2',
                vinyard: 'somewhere',
                year: 1992,
                amount: 2
            }, {
                name: '3',
                price: '4',
                vinyard: 'somewhereelse',
                year: 1999,
                amount: 3
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
