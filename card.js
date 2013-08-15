Conductor.requireCSS('card.css');

var card = Conductor.card({
  render: function() {
    var div = document.createElement('div');
    div.id = 'card';
    document.body.appendChild(div);
  }
})
