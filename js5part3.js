$(document).ready(function() {
    $('#state_form').validate({
        rules:
            {
                state_name: {required: true},
            }
    });
})

function validate_input() {
    if ($('#state_form').valid()) {
        let entry = $("#state_name").val();
        let results = ""
        let state_info = [
            ["AL", "AK", "AZ", "AR", "CA", "CO"],
            ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado"],
            ["Montgomery", "Juneau", "Phoenix", "Little Rock", "Sacramento", "Denver"],
            ["4,887,871", "737,438", "7,171,646", "3,010,825", "39,557,045", "5,694,564"]
        ];

        for (let i=0; i<2; i++) {
            for (let j=0; j<state_info[i].length; j++) {
                    if (state_info[i][j].toLowerCase() === entry.toLowerCase()){
                        results =
                            "State abbr = " + state_info[0][j] + '\n' +
                            "State Name = " + state_info[1][j] + '\n' +
                            "Capital = " + state_info[2][j] + '\n' +
                            "Population = " + state_info[3][j]
                        $("#results").val(results);
                    }
            }
        }
        if (results === "") {
            $("#results").val("No Results");
        }
    }
}
