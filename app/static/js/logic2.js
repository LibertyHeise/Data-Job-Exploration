d3.json("http://127.0.0.1:5003/api/v1.0/salaries", function (error, data) {
    if (error) return console.error(error);
    console.log(data);
    if (!Array.isArray(data)) return console.error("Returned data is not an array");

    var salariesData = [];
    data.forEach(function (d) {
        salariesData.push({
            role: d["Job Role"],
            salary: d["Median Salary"],
        });
    });

    // Create the bar chart
    var trace = {
        x: salariesData.map(function (d) { return d.role; }),
        y: salariesData.map(function (d) { return d.salary; }),
        type: 'bar'
    };

    var layout = {
        title: 'Median Salaries by Job Role',
        xaxis: { title: 'Job Role' },
        yaxis: { title: 'Median Salary' }
    };

    Plotly.newPlot("plot", [trace], layout);
});
