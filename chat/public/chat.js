/**
 * Created by ziberman on 1/21/17.
 */

window.onload = function () {

    var socket = io.connect('http://localhost:8080');

    var field = document.getElementById('field');

    var form = document.getElementById('form');

    var content = document.getElementById('content');

    form.onsubmit = function () {

        var text = field.value;

        socket.emit('send', {message: text});

        return false;

    }

    var messages = [];

    socket.on('message', function (data) {

        if (data.message) {

            messages.push(data.message);

            var html = '';

            for (var i = 0; i < messages.length; i++) {

                html += messages[i] + '<br/>';

            }

            content.innerHTML = html;

        } else {

            console.info('Error');

        }

    });

};