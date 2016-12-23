angular.module('CardsAgainstAssembly')
  .controller('CardsController', CardsController);

CardsController.$inject = ['$http'];
function CardsController($http){
  var vm = this;
  vm.getQuestions = getQuestions;
  vm.getQuestion = getQuestion;

  function getQuestions(){
  $http
    .get('https://localhost:3000')
    .then(function(response){
      vm.questionsList = response.data;
      console.log();
    });
  }
  getQuestions();

  function getQuestion(){
  $http
    .get('https://localhost:3000/id:')
    .then(function(response){
      vm.singleQuestion = response.data;
    });
  }
  getQuestion();
}

