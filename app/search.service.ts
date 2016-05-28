import {Http, HTTP_PROVIDERS} from '@angular/http';
import {Injectable} from '@angular/core';

@Injectable()

export class SearchService {

  getResults() {
    return Promise.resolve(Results);
  }


}

/*console.log('handleAPI is loaded');

  //this is 2-waybinding
  $('input').bind('input propertychange', function() {
    if ($(this).val().length > 2 && $(this).is(':focus')) {
      searchComplete();
    }
  });

function searchComplete() {
  console.log('search autocomplete');

  var querySuggest = $('#query').val();

  $.ajax({
  method: 'GET',
  url: 'http://suggestqueries.google.com/complete/search?client=youtube&ds=yt&client=firefox&q=' + querySuggest + '&key=' + apiKey + '&callback=?',
  dataType: 'jsonp',
  success: function(data) {
    console.log(data);
    data[1].map(function(item) {
      console.log(item);
    });
    $('#output2').html(data);

  },
  error: function(err) {
    console.log(err);
  }
  });

}
*/