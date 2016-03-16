/admin/applications in React + Redux
---


## TODO - technical

* Add back hotloading (vanilla wepack HMR, no experimental tech!). cf. https://github.com/reactjs/redux/pull/1455
* `state.applications` should change as filters and searches are applied, don't
  do this in the Container!
* SRP - extract more Containers for:
  - Filter
  - Search
  - Results
* Use Facebook's Fixed Data Table
* Immutable
* Tests - use karma to unit test components, and/or integration tests
* Constants / something for 'In-Progress' etc

## TODO - features

* 'Sort by'
* More / better filters
