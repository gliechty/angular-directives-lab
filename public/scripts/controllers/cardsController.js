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
  
  // GET -works now
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


  // ADD --
  function addCard(){
    $http
      .post('http://localhost:3000/cards', self.newCard)
      .then(function (request){
        // trying below lines commented out
        console.log(self.newCard);
        // self.all+=(self.newCard);
        console.log(self.all);
        console.log(request);

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

}

