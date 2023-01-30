let states = ["Washington,D.C.", "Maryland", "New Jersey", "Hawaii", "Massachusetts", "Connecticut", "California", "New Hampshire", "Alaska", "Washington", "Virginia", "Colorado", "Utah", "Minnesota",
"New York","Illinois", "Delaware", "Rhode Island", "North Dakota", "Oregon", "Wyoming", "Pennsylvania", "Vermont", "Wisconsin", "Texas", "Iowa", "Nebraska", "Arizona", "Georgia", "Nevada", "Kansas", "Michigan", "South Dakota",
"Ohio", "Indiana", "Maine", "Idaho", "Florida", "Montana", "Missouri", "North Carolina", "Tennessee", "South Carolina", "Oklahoma", "Kentucky", "Alabama", "Louisiana", "New Mexico", "Arkansas", "Mississippi", "West Virginia"]

let income = ['$85,203','$83,242','$81,740','$80,212', '$79,835', '$76,348', '$75,277', '$74,991', '$74,346', '$74,073', '$72,577', '$71,953','$71,414', '$70,315', '$67,844', '$65,030', '$64,805', '$64,340', '$63,837',
'$63,426', '$61,584', '$60,905', '$60,782', '$60,773', '$60,629', '$59,955', '$59,566', '$59,246', '$58,756', '$58,646', '$58,218', '$56,697', '$56,274', '$56,111', '$55,746', '$55,602', '$55,583', '$55,462', '$55,328','$54,478',
'$53,855', '$52,375', '$52,306','$51,924', '$50,247', '$49,861', '$47,905','$47,169','$47,062', '$44,717', '$44,097']


// Create the bar chart
var trace4 = {
    x: states,
    y: income,
    type: 'bar'
};

let layout3 = {
    xaxis: { title: 'State', tickangle: 45},
    yaxis: { title: 'Median Household Income'}
};

let trace5 = [trace4]

Plotly.newPlot("chart", trace5, layout3);

