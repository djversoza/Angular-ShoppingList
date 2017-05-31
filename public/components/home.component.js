(function(){
  'use strict'
  angular.module('list')
  .component('main',{
  templateUrl: 'components/mainComp.html',
  controller: controller,
  controllerAs: 'vm'
})

controller.inject = ['$http']

function controller($http){
  const vm = this;
  vm.$onInit = function () {
   $http.get('/api/posts').then(res =>{
      console.log(res.data.data)
      vm.posts = res.data.data
      vm.list_items = res.data.data2
    })
  }
}
}());
