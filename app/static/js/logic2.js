let job = ["Data Scientist", "Python Developer", "Full Stack Developer", "Data Analyst"]

let salary = [90669, 76316, 75093, 65370]


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
let trace1 = [trace]

Plotly.newPlot("plot", trace1, layout);





