let tools = ["Excel", "R", "Python", "SQL", "Tableau", "PowerBI", "JavaScript", "HTML", "CSS", "NoSQL", "MongoDB"]

let count = [204, 183, 161, 112, 71, 42, 23, 23, 22, 7, 3]


// Create the bar chart
var trace2 = {
    x: tools,
    y: count,
    type: 'bar'
};

let layout1 = {
    xaxis: { title: 'Tools' },
    yaxis: { title: 'Count' }
};

let trace3 = [trace2]

Plotly.newPlot("bar", trace3, layout1);

