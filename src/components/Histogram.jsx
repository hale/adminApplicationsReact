import d3Wrap from 'react-d3-wrap'

const Histogram = d3Wrap({
  update (svg, data, options) {

    // TODO: replace with real applications

    // Generate a Bates distribution of 10 random variables.
    var values = d3.range(1000).map(d3.random.bates(10));

    // A formatter for counts.
    var formatCount = d3.format(',.0f');

    let margin = options.margin
    let width = 1140 - margin.left - margin.right
    let height = 150 - margin.top - margin.bottom

    var x = d3.scale.linear()
      .domain([0, 1])
      .range([0, width]);

    // Generate a histogram using twenty uniformly-spaced bins.
    var data = d3.layout.histogram()
      .bins(x.ticks(20))
      (values);

    var y = d3.scale.linear()
      .domain([0, d3.max(data, function(d) { return d.y; })])
      .range([height, 0]);

    var xAxis = d3.svg.axis()
      .scale(x)
      .orient('bottom');

    var svg = d3.select(svg).append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    var bar = svg.selectAll('.bar')
      .data(data)
      .enter().append('g')
      .attr('class', 'bar')
      .attr('transform', function(d) { return 'translate(' + x(d.x) + ',' + y(d.y) + ')'; });

    bar.append('rect')
      .attr('x', 1)
      .attr('width', x(data[0].dx) - 1)
      .attr('height', function(d) { return height - y(d.y); });

    bar.append('text')
      .attr('dy', '.75em')
      .attr('y', 6)
      .attr('x', x(data[0].dx) / 2)
      .attr('text-anchor', 'middle')
      .text(function(d) { return formatCount(d.y); });

    svg.append('g')
      .attr('class', 'x axis')
      .attr('transform', 'translate(0,' + height + ')')
      .call(xAxis);

  }
})

export default Histogram
