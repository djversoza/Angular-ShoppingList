(function(){
  'use strict'
  angular.module('list')
  .component('addList',{
  templateUrl: 'components/newList.html',
  controller: controller,
  controllerAs: 'vm'
})

controller.inject = ['$http']

function controller($http){
  const vm = this;



  vm.addItem = function() {
    $http.post('/api/posts/NewList', vm.newList)
  }
}
}());
