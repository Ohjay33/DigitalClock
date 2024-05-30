

$(document).ready(function () {
	function updateClock() {
		var now = new Date();
		var hours = now.getHours();
		var minutes = now.getMinutes();
		var seconds = now.getSeconds();
		var ampm = hours >= 12 ? 'PM' : 'AM';

		// Convert hours to 12-hour format
		hours = hours % 12;
		hours = hours ? hours : 12; // 0 should be displayed as 12

		// Add leading zeros if necessary
		hours = hours < 10 ? '0' + hours : hours;
		minutes = minutes < 10 ? '0' + minutes : minutes;
		seconds = seconds < 10 ? '0' + seconds : seconds;

		var timeString = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
		document.getElementById('clock').innerText = timeString;


            // Display the date
            var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            var dateString = days[now.getDay()] + ', ' + now.getDate() + ' ' + months[now.getMonth()] + ' ' + now.getFullYear();
            document.getElementById('date').innerText = dateString;
	}

	function randomColor() {
		var letters = '0123456789ABCDEF';
		var color = '#';
		for (var i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	}

	function switchColor() {
		document.body.style.backgroundColor = randomColor();
	}

	// Update the clock every second
	setInterval(updateClock, 1000);

	// Switch colors every 3 seconds
	setInterval(switchColor, 3000);

	// Initial call to display the clock immediately
	updateClock();


});
