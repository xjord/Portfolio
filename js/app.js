// Data for the terminal
const data = [
	['Skills: HTML, CSS, JavaScript, jQuery, and PHP.'],
	['Qualifications: Bachelor\'s Degree, Business Information Systems [2.1], Cardiff University. Extended Diploma in IT [Distinction*], Coleg Gwent.'],
	['About: 24 years old, Cardiff University Graduate based in South Wales, UK. Highly motivated and driven with a strong interest in web development. Looking to develop a career in front end development.'],
	['Recent projects: visit github.com/xjord?tab=repositories or enter \'cd repo\''],
	['Contact: LinkedIn - linkedin.com/in/jordanwood1993. Email - jordanwood1993@yahoo.co.uk. Whether you think I might be right for your project, a role in your company or even if you just fancy a chat, I\'d love to hear from you.'],
	['Enter \'cd\' followed by \'email\', \'linkedin\' or \'cv\' to view the specified. E.g. \'cd linkedin\'.'],
	['$ jordanwood/portfolio/email'],
	['$ jordanwood/portfolio/linkedin'],
	['$ jordanwood/portfolio/cv'],
	['$ jordanwood/portfolio/repo'],
	['$ jordanwood/portfolio']
]
// PWD data
const directories = [
	['/jordanwood/portfolio','Skills Qualifications About Projects Contact details'],
	['/jordanwood/portfolio/email', 'jordanwood1993@yahoo.co.uk'],
	['/jordanwood/portfolio/linkedin', 'linkedin.com/in/jordanwood1993'],
	['/jordanwood/portfolio/cv', 'http://www.jordanwood.uk/cv.pdf'],
	['/jordanwood/portfolio/repo', 'github.com/xjord?tab=repositories'],
	['/jordanwood', 'portfolio']
]

// Present working directory
let pwd = '/jordanwood/portfolio';

// Terminal prompt delay
const firstPrompt = $('#first-prompt');

const paragraphs = $('.paragraphs')

$(firstPrompt).hide(); // Hide first prompt
$(paragraphs).hide();

// Check window size to detemine delay
if ($(window).width() > 667) {
	setTimeout(function () {
		$(firstPrompt).show(); // Show after time delay
		$('input.prompt').focus(); // Focus on input box
	}, 9500); // 9.5 seconds
}
else {
	setTimeout(function () {
	 $(firstPrompt).show();
	 $(paragraphs).show();
	 $('input.prompt').focus();
 }, 2200);
}

// Create array of commands containing empty string
let commands = [''];

// Add to array
function addArray(command){
	commands.unshift(command);
}

// Once entered users can't return to prompt input boxes
function stopInput(){
	 if($('.prompt').length > 1){
	 			$('.prompt').attr('readonly', true);
			}
}

// Clear terminal
function clear(){
	$('.css-typing').empty();
	$('.css-typing').append('<div class="result-container"></div>');
	$('.prompt:last').focus();
}

// Append results to the result container earlier defined
function appendResult(result){
	$('.result-container').append('<p class="result">' + result + '</p>');
}

// Check input entered and return result
function checkPrompt(e){

		if(e.keyCode === 13){
			var inputValue = $(e.target).val().toLowerCase();

		if(inputValue === "0"){
			pwd = "/jordanwood/portfolio";
			appendResult(data[0]);
			addArray(inputValue);
		}
		else if(inputValue === "1"){
			pwd = "/jordanwood/portfolio";
			appendResult(data[1]);
			addArray(inputValue);
		}
		else if(inputValue ==="2"){
			pwd = "/jordanwood/portfolio";
			appendResult(data[2]);
			addArray(inputValue);
		}
		else if(inputValue === "3"){
			pwd = "/jordanwood/portfolio";
			appendResult(data[3]);
			addArray(inputValue);
		}
		else if(inputValue === "4"){
			pwd = "/jordanwood/portfolio";
			appendResult(data[4]);
			addArray(inputValue);
		}
		else if(inputValue === "--help"){
		  appendResult(data[5]);
			addArray(inputValue);
		}
		else if(inputValue === "cd email"){
			pwd = '/jordanwood/portfolio/email';
			open("mailto:jordanwood1993@yahoo.co.uk");
			appendResult(data[6]);
			addArray(inputValue);
			pwd = "/jordanwood/portfolio/email";
		}
		else if(inputValue === "cd linkedin"){
			pwd = '/jordanwood/portfolio/linkedin';
			window.open("https://www.linkedin.com/in/jordanwood1993");
			appendResult(data[7]);
			addArray(inputValue);
		}
		else if(inputValue === "cd cv"){
			pwd = '/jordanwood/portfolio/cv';
			window.open("cv.pdf");
			appendResult(data[8]);
			addArray(inputValue);

			}
		else if(inputValue === "cd repo"){
			pwd = '/jordanwood/portfolio/repo';
			window.open("https://github.com/xjord?tab=repositories");
			appendResult(data[9]);
			addArray(inputValue);
		}
		else if(inputValue === "cd portfolio"){
			pwd = '/jordanwood/portfolio'
			appendResult(data[10]);
			addArray(inputValue);
		}
		else if(inputValue === "clear()"){
			clear();
			addArray(inputValue);
		}
		else if(inputValue === "pwd"){
			appendResult('$ ' + pwd);
			addArray(inputValue);
		}
		else if(inputValue === "cd .."){
			if(pwd !== "/jordanwood/portfolio" && pwd !== "/jordanwood"){
				pwd = "/jordanwood/portfolio"
			} else {
				pwd = "/jordanwood"
			}
			addArray(inputValue);
		}
		else if(inputValue === "ls"){
				// Loop to check pwd against directories in array
				for(k = 0; k < directories.length; k++){
					// If directory is array return related data
					if(directories[k][0] === pwd){
						appendResult(directories[k][1])
					}
				}
		}
		else {
			appendResult('<p class="result not-found">' + inputValue + ': command not found. Enter 0 for skills, 1 for qualifications, 2 for about, 3 for projects, 4 for contact details or enter \'--help\' for some tips.</p>');
			addArray(inputValue);
		}

		 stopInput();
		 appendResult('<div class="new-prompt"><span class="arrow"> $ </span> <input class="prompt"></input></div>');
		 $('.prompt:last').focus();
		}
	}

// Listen for keydown events on elements with the class prompt within css-typing container
$(".css-typing").on("keydown", ".prompt", checkPrompt);

// Cycle through previous commands
function prevComands(e){

// Record command
let command

// Up key || Down key
	if(e.keyCode === 38 || e.keyCode === 40){
		var key = e.which;
		if(key === 38){
			command = commands[0];
			commands.push(commands.shift());
		}
		else if(key === 40){
			command = commands[commands.length-1]
			commands.unshift(commands.pop());
		}
		$('.prompt:last').val(command);
	}
}

$(".css-typing").on("keydown", ".prompt", prevComands);
