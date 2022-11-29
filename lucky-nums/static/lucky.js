/** processForm: get data from form and make AJAX call to our API. */
const $form = $('#lucky-form');
const $name = $('#name');
const $nameErr = $('#name-err');
const $year = $('#year');
const $yearErr = $('#year-err');
const $email = $('#email');
const $emailErr = $('#email-err');
const $color = $('#color');
const $results = $('#lucky-results');

 async function processForm(evt) {
    evt.preventDefault();

    data = {
		name  : $name.val(),
		year  : $year.val(),
		email : $email.val(),
		color : $color.val()
	};

    const resp = await axios.post('/api/get-lucky-num', data);

    
    handleResponse(resp);

}

/** handleResponse: deal with response from our lucky-num API. */

function handleResponse(resp) {

    let text = resp.data;

    //reset errors for each submit
	$('b').html(''); 
	
	// reset results for each submit
	$results.text('');

	// deal with errors returned from api and display on page
	if (text.errors) {
		
		const errors = text.errors;
		for (let err_list in errors) {
			for (let err of errors[err_list]) {
				$(`#${err_list}-err`).append(err);
			}
		}
		// add the form data to the dom if no errors exist
	} else {
		
		let numData = text.num;
		let yearData = text.year;

		let numFact = `Your lucky number is ${numData.num} (${numData.fact})`;
		let yearFact = `Your birth year, ${yearData.year}, fact is: ${yearData.fact}`;

		
		$results.append(numFact).append('<br>').append(yearFact);
	}
}


$("#lucky-form").on("submit", processForm);