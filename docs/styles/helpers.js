var version_regex = /\d+\.\d+.x/;

function getUrlVars() {
  var vars = {};
  window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,
    function (m, key, value) {
      vars[key] = value;
    });
  return vars;
}

var urlMatchWithVersion = (function (url, version) {
  var match = url.match(version_regex);
  if (match != null) return match[0] === version;
  return false;
});

var getCurrentVersion = (function () {
  var match = window.location.pathname.match(version_regex);
  if (match != null) return match[0];
  return null;
});

var swapUrlVersion = (function (newVersion) {
  if (window.location.pathname.match(version_regex)) {
    return window.location.pathname.replace(version_regex, newVersion);
  }
  return window.location.pathname;
});

var slHelpers = (function () { // CUSTOM CODE

  _self = this;

  // Insert string at specific location
  _self.insertAt = function (originalString, index, stringToInsert) {
    return originalString.substr(0, index) + stringToInsert + originalString.substr(index);
  }

  _self.cookieHelper = function () {

    this.setCookie = function (name, value, days) {
      var expires = "";
      if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
      }
      document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }

    this.getCookie = function (name) {
      var nameEQ = name + "=";
      var ca = document.cookie.split(';');
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
      }
      return null;
    }

    this.eraseCookie = function (name) {
      document.cookie = name + '=; Max-Age=-99999999;';
    }

    return this
  };

  // Find value in object in array
  _self.search = function search(nameKey, myArray) {
    for (var i = 0; i < myArray.length; i++) {
      if (myArray[i].name === nameKey) {
        return myArray[i];
      }
    }
  }

  // Bind get functionality 
  // use like var._GET("get-param-name")
  _self._GET = function (getParam) {
    return getUrlVars()[getParam];
  }

  // Get environment variables (dev/prod, domain name)
  _self.env = (function () {

    var parts = location.hostname.split('.');

    var env = {
      "subdomain": "",
      "upperleveldomain": "",
      "environment": "dev"
    }

    // Determine subdomain (locahost, docs, docs-internal, docs-partners)
    if (_self._GET('debug-sub')) {
      env.subdomain = _self._GET('debug-sub');
    } else {
      env.subdomain = parts[0];
    }

    // Determine upperleveldomain (ie. stylelabsdev.com, stylelabs)
    if (_self._GET('debug-up')) {
      env.upperleveldomain = _self._GET('debug-up');
    } else {
      parts.shift()
      env.upperleveldomain = parts.join('.');
    }

    // Determine environment based on fact that "dev"
    if (env.upperleveldomain.indexOf("dev") === -1) {
      env.environment = "prod"
    }

    return env;
  })();


  _self.parseFolderNameToVersionText = function (folderName) {

    var parsedName = folderName;

    if (folderName !== "master") {

      // Replace - with . for canonical purposes (2-9-0 -> v2.9.0)
      var replacedFoldername = folderName.replace(new RegExp('\-', 'g'), ".");

      parsedName = "v" + replacedFoldername;
    }

    return parsedName;
  }

  return _self;

})();