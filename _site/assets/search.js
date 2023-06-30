(async () => {
  //The search mechanism is refreshed for each character that is added to/removed from the input field.
  document.getElementById('search').addEventListener('keyup', (event) => {
    const searchString = event.target.value.toLowerCase();
    let results = [];
    items.forEach((item) => {
      //This part of the code checks for matches with the title, eleventyNavigation title, tags and keywords.
      //These results are considered the most important (primary) results, they are displayed on top of the results list, in bold.
      if (
        item.title.toLowerCase().includes(searchString)
      ) {
        console.log(item);
        results.push(`<a href="${item.url}">
          <p class="result-items" id="items">${item.title} 
          </p>
        </a>`);
      }
    });

    document.getElementById('results').innerHTML = results.join('');
  });
//The "/search.json" file is the search index, it is generated by the template "search-index-layout.njk".
  const items = await fetch('/search.json').then((res) => res.json());
  console.log(items);
})();

//myReset is linked to the onClick of the "x" button of the search container, to remove the search result list from the screen.
//It clears the array of (primary) results and secondary results. 
function myReset() {
  document.getElementById('results').innerHTML = "";
}