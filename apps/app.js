// API Key: AIzaSyCSTftYoRFr5laPnISgBv1N_2dB9LU6Zxg
// Youtube endpoint: https://www.googleapis.com/youtube/v3/search 
// Required params:
	// part: 'snippet'
	// key: "AIzaSyCSTftYoRFr5laPnISgBv1N_2dB9LU6Zxg"
	// q: put the search term here in the form of a string

// Document ready
$(document).ready(function() {

	// Get the term from the search field on submit
	$(function() {
		$('#search-form').submit(function(event) {
			event.preventDefault();
			// Store the term as new variable searchTerm		
			var searchTerm = $('#query').val();
			// Pass searchTerm to the getRequest function
			getRequest(searchTerm);
		})
	})

	// Perform request with the searchTerm
	function getRequest(searchTerm) {
		// Create paramters to Pass (part, key, q)	
		var params = {
			part: 'snippet',
			key: 'AIzaSyCSTftYoRFr5laPnISgBv1N_2dB9LU6Zxg',
			q: String(searchTerm)
		};
		// Pass endpoint url
		url = 'https://www.googleapis.com/youtube/v3/search'
		// Use getJSON function, passing in the url & params, returning data
		$.getJSON(url, params, function(data) {
			// Pass data to showResults function
			showResults(data.items);
		})
	}

	// Show results function returns results
	function showResults(results) {
		var html = "";
		// For each results, add the thumbnail to div on page
		$.each(results, function(index, value) {
			var thumbnail = value.snippet.thumbnails.medium.url;
			var url = "https://www.youtube.com/watch?v=" + value.id.videoId;
			html += '<a href=" ' + url + ' "target="_blank" "><img class="video-thumb" src=" ' + thumbnail + ' "></img></a>';
		})
		$('#search-results').html(html);

	}

});