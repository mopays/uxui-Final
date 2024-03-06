function selectGender() {

	if ($('#prefix').val() == "นาย") {

		$('#gender2').prop("checked", true);
		$('#gender1').prop("checked", false);
	}
	else {
		$('#gender2').prop("checked", false);
		$('#gender1').prop("checked", true);
	}

}