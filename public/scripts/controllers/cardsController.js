angular.module('CardsAgainstAssembly')
  .controller('CardsController', CardsController);




// function CardsController(){
//   var vm = this;
//   vm.questionsList = [
//     {question: "What is Batman's guilty pleasure?"},
//     {question: "I'm sorry professor, I couldn't complete my homework because _________."},
//     {question: "I get by with a little help from _________."},
//     {question: "_________. It's a trap!"},
//     {question: "The class field trip was completely ruined by _________."},
//     {question: "What's my secret power?"}
//   ];
// }

CardsController.$inject = ['$http'];
function CardsController($http){
  var self = this;
  self.all = [];
  self.addCard = addCard;
  self.newCard = {};
  self.getQuestions = getQuestions;
  self.getQuestion = getQuestion;
  
  // GET
  function getQuestions(){
    console.log("getting called");
  $http
    .get('localhost:3000/cards')
    .then(function(response){
      self.all = response.data.questions;
      console.log(response.data);
      console.log(self.all);
    });
  }
  // getQuestions();

  // SHOW
  function getQuestion(){
  $http
    .get('https://localhost:3000/cards/id:')
    .then(function(response){
      vm.singleQuestion = response.data;
    });
  }
  getQuestions();


  // ADD
  function addCard(){
    $http
      .post('https://localhost:3000/cards', this.newCard)
      .then(function (request){
        getQuestions();
      });
      self.newCard ={};
  }

  // DELETE

}

