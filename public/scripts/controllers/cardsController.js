angular.module('CardsAgainstAssembly')
  .controller('CardsController', CardsController);

CardsController.$inject = ['$http'];
function CardsController($http){
  var vm = this;
  vm.getQuestions = getQuestions;

  function getQuestions(){
  $http
    .get('https://shielded-forest-41789.herokuapp.com/api/flashcards')
    .then(function(response){
      vm.questionsList = response.data;
    });
  }
  getQuestions();
}

