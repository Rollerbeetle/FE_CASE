

export default class AddDialogController{
  static get UID() {
    return 'AddDialogController'
  }
  /* @ngInject */
  constructor($mdDialog) {
    this.$mdDialog = $mdDialog;

    this.wine = {amount: 1};
  }

  cancel() {
    this.$mdDialog.cancel();
  }

  save(wine) {
    this.$mdDialog.hide({
      wine
    });
  }
}
