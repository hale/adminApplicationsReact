/admin/applications in React + Redux
---


## TODO - technical

* Integrate with 'Reselect' to reuse calculations
  - http://redux.js.org/docs/recipes/ComputingDerivedData.html
  - Wanted to add Crossfilter support but storing an instance of crossfilter
    within the store isn't possible, and recreating the crossfilter in each
    component defeats the point.
* Tests - add karma unit tests, look into integration tests
* Constants for actions + application status strings

## TODO - features

* Histogram
  - D3
  - Use react-d3-wrap and let D3 take over that part of the dom.
  - Any help with 'filter by selected range'? Would be nice to just drop in
    crossfilter / dc.js but is that totally non-performant?
* 'Sort by' columns
* More / better filters
