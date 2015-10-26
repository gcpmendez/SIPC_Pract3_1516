var myDataChat = new Firebase('https://chatom.firebaseio.com/');
$('#messageInput').keypress(function (e) {
  console.log(e.keyCode);
  if (e.keyCode == 13) {
    var name = $('#nameInput').val();
    var text = $('#messageInput').val();
    myDataChat.push({name: name, text: text});
    $('#messageInput').val('');
  }
});
myDataChat.on('child_added', function(snapshot) {
  var message = snapshot.val();
  displayChatMessage(message.name, message.text);
});
function displayChatMessage(name, text) {
  $('<div/>').text(text).prepend($('<em/>').text(name+': ')).appendTo($('#messagesDiv'));
  $('#messagesDiv')[0].scrollTop = $('#messagesDiv')[0].scrollHeight;
};
