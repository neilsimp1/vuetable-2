# Vuetabler
### Simple, feature-rich datatables for Vue.js 2.x
Forked from https://github.com/ratiw/vuetable-2


## Features
- Sortable rows
- Resizable columns
- Selectable rows (and multi-select)
- Fetch data locally of via a remote JSON api
- Programmatically show/hide any field


## Example
```html
<vuetabler name="movies"
  :fields="fields"
  :rows="movies">
</vuetabler>
```
```javascript
fields = [
  {
    name: 'name', // Name of field in movies
    title: 'Title', // Display name. If not provided, defaults to `name`
    sortField: 'name' // Name of field to sort based off of. If not provided, this column will not sort
  }, {
    name: 'genre',
    title: 'Genre',
    sortField: 'genre'
  }, {
    name: 'year',
    title: 'Year',
    visible: false // This column will be hidden from view
  }
];
movies = [
  {
    name: 'Spaceballs',
    genre: 'Comedy',
    year: '1987'
  }, {
    name: 'Young Frankenstein',
    genre: 'Comedy',
    year: '1974'
  }, {
    name: 'Star Trek II: The Wrath of Khan',
    genre: 'Documentary',
    year: '1982'
  }
];
```


## Options
```html
<vuetabler name="movies"
  :fields="fields"
  :rows="movies"
  :options="{ pinned: ['All Movies'], selectRows: true, resizeColumns: true }">
</vuetabler>
```
The following options are available

### pinned
This is an array value with a default of `[]`. Anything in the array will not be sorted. For example, if you have 'All Movies' as the first row, then when sorting this table, 'All Movies' will remain at the top. This will work for any number of pinned items at any row index.

### selectRows
This is a boolean value, default of `false`. When set to true, rows in the table will become selectable when clicked. Multi-row select via ctrl or shift keys also works. You can capture the selected rows from a parent component via the event `vuetabler:rows-selected`. More on events below.

### resizeColumns
This is a boolean value, default of `false`. When set to true, you can click and drag the borders of the `th`s to resize the table columns. Initial table width values can also be placed into the `fields` objects.
Ex.
```javascript
fields = [{
  name: 'Spaceballs',
  genre: 'Comedy',
  year: '1987',
  width: '100px'
}];
```


## Events
TODO
