let job = ["Data Analyst", "Full Stack Developer", "Python Developer", "Data Scientist"]

let salary = ["$65370", "$75093", "$76316", "$90669"]


// Create the bar chart
var trace = {
    x: job,
    y: salary,
    type: 'bar'
};

let layout = {
    xaxis: { title: 'Job Role' },
    yaxis: { title: 'Median Salary' }
};
let trace1 = trace

Plotly.newPlot("plot", trace1, layout);





