var bucherUtilsModule = angular.module('bucher.utils', []);

bucherUtilsModule.constant('StringUtils', {
  trim: function (value, defaultValue) {
    var trimmed;
    if (value) {
      trimmed = value.trim();
    } else {
      trimmed = defaultValue;
    }
    return trimmed;
  }
});