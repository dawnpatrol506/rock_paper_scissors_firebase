var db = firebase.database();
var playerOneRef = db.ref('/playerOne');
var playerTwoRef = db.ref('playerTwo');
var gameRef = db.ref('/game');

var playerExists = false;

var provider = new firebase.auth.GoogleAuthProvider();


$(document).on('click', '#sign-in-btn', function(){
    firebase.auth().signInWithPopup(provider)
    .then(function(result){
        var token = result.credential.accessToken;
        var user = result.user;

        $('#sign-in-div').hide();

        if(!playerExists){
            
        }
        else{

        }

    })
    .catch(err => console.log(err));
});