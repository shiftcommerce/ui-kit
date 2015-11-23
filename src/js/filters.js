'use strict';

(function() {
    var filtersControl = $('.js-filters');
    var filtersClose = $('.o-filters--close');
    var clickCatcher = '<div data-app="toggle" data-toggle=".filters" id="js-clickcatcher-filters" class="js-clickcatcher"></div>';
    var filtersActive = false;

  function closeFilters(scope) {
    $('html').removeClass("body--modal-open");
    $(scope).closest('.container').removeClass("open");
    $('#js-clickcatcher-filters').remove();
    filtersActive = false;
  }

  function openFilters(scope) {
    $('html').addClass("body--modal-open");
    $(scope).closest('.container').addClass("open");
    $('body').append(clickCatcher);
    filtersActive = true;
  }

  $('body').on('click', '#js-clickcatcher-filters', function() {
    closeFilters(filtersControl);
  });

  filtersControl.on('click', function() {
    if (filtersActive === true) {
      closeFilters(filtersControl);
    } else {
      openFilters(filtersControl);
    }
  });

  filtersClose.on('click', function() {
    closeFilters(filtersControl);
  });

  $(document).ready(function() {
    $(window).on('resize', _.debounce(function() {
      if (filtersActive === true) {
        closeFilters(filtersControl);
      }
    }, 250));
  });


})();