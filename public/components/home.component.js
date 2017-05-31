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
    vm.posts = res.data
    console.log(vm.posts)
  })
}
}
}());
