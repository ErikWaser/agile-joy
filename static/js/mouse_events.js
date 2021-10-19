
var tmp_colour;


/* Callback function for mouseover event, use the "geojson_data" that is passed
 * to the function, to write the lan_name and lan_cases data to the
 * "div#data_div" */
function handle_mouseover(a, geojson_data) {
    let lan_name = geojson_data.properties.LnNamn;
    let lan_kod = geojson_data.properties.LnKod;
    let lan_cases = get_age_data_by_age_group_and_county(lan_name, agespan);
    let lan_population = get_population_data_by_age_group_and_county(lan_name, agespan);
    let ratio = get_age_data_by_age_group_and_county_per_capita(lan_name, agespan);

    d3.select("#data_div")
        .html(
              "<div class=\"lan\">" + lan_name + " </div>" +
              "<br/>" +

              "Antal vaccinerade: " + lan_cases +
              "<br/>"
              + "<br/>" +
              "Befolkning: " + lan_population +
              "<br/>"
              + "<br/>" +
              "Antal vaccinerade per capita: " + ratio.toFixed(3)*100 + '%' +

              "<br/>"
             )
    var this_path = d3.select(this);
    tmp_colour = this_path.attr("fill");
    this_path.attr("fill", "#f00")
}


/* On mouseout, fill the County map with the old colour */
function handle_mouseout() {
    d3.select(this).attr("fill", tmp_colour)
}


/* Callback for the "select" element (used for choosing the age)  */
function handle_ageselect() {
    agespan = event.target.value;
    update();
}

function clickable() {
    d3.selectAll("path").on("mouseover", handle_mouseover);
    d3.selectAll("path").on("mouseout", handle_mouseout);
    d3.select("#ageselect").on("change", handle_ageselect);
}
