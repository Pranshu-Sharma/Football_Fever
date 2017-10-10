var app = angular.module('matchApp', []);
app.controller('mainController',['$http',function($http) {


  var main = this;

  this.games = [];
  this.winner;
  this.score1;
  this.score2;
  console.log(this.games);
  this.baseUrl1 = 'https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/en.1.json';
  this.baseUrl2 = 'https://raw.githubusercontent.com/openfootball/football.json/master/2016-17/en.1.json';
  this.loadAllDetails1 = function(){
    $http({
        method: 'GET',
        url: main.baseUrl1,
      }).then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
          console.log(response);
          main.games = response.data;
          console.log(main.games);


          this.calFunction = function(teamName){    //function to calculate totals
            main.totalMatches = 0;
            main.wins = 0;
            main.loss = 0;
            main.draw = 0;
            main.goals = 0;
            for(i in response.data.rounds){
              for(j in response.data.rounds[i].matches){
                if(response.data.rounds[i].matches[j].team1.name === teamName){
                  if(response.data.rounds[i].matches[j].score1 > response.data.rounds[i].matches[j].score2){
                    main.wins += 1;
                  }
                  else if (response.data.rounds[i].matches[j].score1 < response.data.rounds[i].matches[j].score2) {
                    main.loss += 1;
                  }
                  else{
                    main.draw += 1;
                  }
                  main.totalMatches += 1;
                  main.goals += response.data.rounds[i].matches[j].score1;
                }

                else if(response.data.rounds[i].matches[j].team2.name === teamName){
                  if(response.data.rounds[i].matches[j].score2 > response.data.rounds[i].matches[j].score1){
                    main.wins += 1;
                  }
                  else if (response.data.rounds[i].matches[j].score2 < response.data.rounds[i].matches[j].score1) {
                    main.loss += 1;
                  }
                  else{
                    main.draw += 1;
                  }

                  main.totalMatches += 1;
                  main.goals += response.data.rounds[i].matches[j].score1;
                }

              }
            }
            console.log("Total Matches = "+main.totalMatches);
            console.log("Total Wins = "+main.wins);
            console.log("Total Loss = "+main.loss);
            console.log("Total Draw = "+main.draw);
            console.log("Total Goals = "+main.goals);
            return main.totalMatches;
          }
          calFunction();

          this.fun1 = function(val){
              calFunction(val);
              $("#mat").text(main.totalMatches);
              $("#wins").text(main.wins);
              $("#loss").text(main.loss);
              $("#draw").text(main.draw);
              $("#goals").text(main.goals);
          }


        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
          console.log(response);
        },
      );
  };


this.loadAllDetails2 = function(){   // for 2016-17 data
  $http({
      method: 'GET',
      url: main.baseUrl2,
    }).then(function successCallback(response) {
        // this callback will be called asynchronously
        // when the response is available
        console.log(response);
        main.games = response.data;
        console.log(main.games);

        this.calFunction = function(teamName){   //function to calculate totals
          main.totalMatches = 0;
          main.wins = 0;
          main.loss = 0;
          main.draw = 0;
          main.goals = 0;
          for(i in response.data.rounds){
            for(j in response.data.rounds[i].matches){
              if(response.data.rounds[i].matches[j].team1.name === teamName){
                if(response.data.rounds[i].matches[j].score1 > response.data.rounds[i].matches[j].score2){
                  main.wins += 1;
                }
                else if (response.data.rounds[i].matches[j].score1 < response.data.rounds[i].matches[j].score2) {
                  main.loss += 1;
                }
                else{
                  main.draw += 1;
                }
                // console.log("Team1 Spotted");
                main.totalMatches += 1;
                main.goals += response.data.rounds[i].matches[j].score1;
              }

              else if(response.data.rounds[i].matches[j].team2.name === teamName){
                if(response.data.rounds[i].matches[j].score2 > response.data.rounds[i].matches[j].score1){
                  main.wins += 1;
                }
                else if (response.data.rounds[i].matches[j].score2 < response.data.rounds[i].matches[j].score1) {
                  main.loss += 1;
                }
                else{
                  main.draw += 1;
                }
                // console.log("Team2 Spotted");
                main.totalMatches += 1;
                main.goals += response.data.rounds[i].matches[j].score1;
              }

            }
          }
          console.log("Total Matches = "+main.totalMatches);
          console.log("Total Wins = "+main.wins);
          console.log("Total Loss = "+main.loss);
          console.log("Total Draw = "+main.draw);
          console.log("Total Goals = "+main.goals);
          return main.totalMatches;
        }
        calFunction();

        this.fun2 = function(val){
            calFunction(val);
            $("#mat").text(main.totalMatches);
            $("#wins").text(main.wins);
            $("#loss").text(main.loss);
            $("#draw").text(main.draw);
            $("#goals").text(main.goals);
        }



      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        alert("some error occurred. Check the console.");
        console.log(response);
      },
    );
};

}]);



app.filter('team', function(){

  var arr = [];

}); 
