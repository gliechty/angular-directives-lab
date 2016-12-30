angular.module('CardsAgainstAssembly')
  .controller('CardsController', CardsController);

CardsController.$inject = ['$http'];
function CardsController($http){
  var self = this;
  self.all = [];
  self.addCard = addCard;
  self.newCard = {};
  self.getQuestions = getQuestions;
  // self.getQuestion = getQuestion;
  self.deleteCard = deleteCard;
  // self.updateCard = updateCard;
  
  // GET - works 
  function getQuestions(){
  $http
    .get('http://localhost:3000/cards')
    .then(function(response){
      self.all = response.data;
    });
  }

  // SHOW
  function getQuestion(){
  $http
    .get('http://localhost:3000/cards/id:')
    .then(function(response){
      vm.singleQuestion = response.data;
    });
  }
  getQuestions();


  // ADD -- works
  function addCard(){
    $http
      .post('http://localhost:3000/cards', self.newCard)
      .then(function (request){
        getQuestions();
      });
      self.newCard ={};
  }

  // DELETE -- works
 function deleteCard(card){
   $http
     .delete('http://localhost:3000/cards/' + card._id)
     .then(function (res){
       var index = self.all.indexOf(card);
       self.all.splice(index, 1);
       getQuestions();
     });
 }

 // UPDATE --
//  function updateCard(card){
//     console.log('update hit');
//     $http
//       .patch('http://localhost:3000/cards/' + card._id, card)
//       .then(function (request){
//         console.log(request);
//         getQuestions();
//       });
//  }

}















