var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.set('port', 3000);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('public'));

var meetupKeyID = '3b5cd41e32702b161a85e68646bb';  // Meet up API Key
var eventBriteKeyID = 'DPQNSMGH5QBIBWDPNRZO';      // EventBrite API key

app.use(function(req,res){
  res.status(404);
  res.render('404');
});

app.get('/search', function(req, res) {
  var context = {};
  var artist = req.query.searchKey;

  $.ajax({
      url: 'https://api.meetup.com1/find/groups2?zip=11211&radius=1&category=253&order=members4',
      headers: {
        'Authorization': 'Bearer ' + access_token
      },
      success: function(response) {
        userProfilePlaceholder.innerHTML = userProfileTemplate(response);
        $('#login').hide();
        $('#loggedin').show();
      }
  });

});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.status(500);
  res.render('500');
});

app.listen(app.get('port'), function(){
  console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});
