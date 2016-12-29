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

        // self.all.push(self.newCard);
        // console.log(self.newCard);
        console.log(request);
        getQuestions();
      });
      self.newCard ={};
  }

 function deleteCard(card){
  console.log('getting called');
  console.log(card._id);
   $http
     .delete('http://localhost:3000/cards/' + card._id)
     .then(function (res){
       console.log(res);
       var index = self.all.indexOf(card);
       console.log(index);
       self.all.splice(index, 1);
       getQuestions();
     });
 }

}

