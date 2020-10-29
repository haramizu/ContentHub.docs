(function () {
    var pageToRedirectTo = "/content/{0}/user-documentation/index.html";
    var redirectParam = "?redirect=true";
  
    $(document).ready(function () {
      // Add helper classes to define environment so they can be picked up by CSS
      $("html")
        .addClass(slHelpers.env.subdomain) // add docs, docs-internal, docs-partners
        .addClass(slHelpers.env.environment); // add "dev" or "prod"
  
      //Get releases in localhost
      if (window.location.host.indexOf("localhost") >= 0) {
        console.log("Localhost environment. Releases list is static.");
        var releases = [
          "3.4.x",
          "3.3.x",
          "3.2.x"
        ];
        configureVersioningSystem(releases);
      } else {
        var versionsEndpointUrl =
          window.location.protocol + "//" + window.location.host + "/api/versions";
        $.get(versionsEndpointUrl, function (data) {
          var releases = [];
          for (var i = 0; i <= data.length - 1; i++) {
            releases.push(data[i]);
          }
          configureVersioningSystem(releases);
        });
      }
  
      /*
        Add page parameter for login & keep the same page
      */
      var logParam = window.location.pathname;
      if (logParam !== "/" && logParam !== "/index.html") {
        logParam += redirectParam;
        $("#login4241").attr("href", "/account/login?r=" + logParam);
      }
  
      /*
        Toggle login/logout button
      */
      $.ajax({
        method: "get",
        url: "/api/v1/user/isLoggedIn",
        dataType: "json"
      }).success(function (data) {
        if (data.isLoggedIn != null) {
          // Login is shown by default
          // If the user is logged in
          if (data.isLoggedIn) {
            // Hide login element
            $(".login-item").removeClass("show");
            // Show logout element
            $(".logout-item").addClass("show");
          }
        }
      });
    });
  
    function configureVersioningSystem(releases) {
      // Select elements
      var versionIndicator = $(".current-version"); // Current version indicator
      var versionButtonsDropdown = $(".version-dropdown-menu"); // Version dropdown list
      var homeVersionButtons = $(".home-version-buttons"); // Version dropdown list
      // List that will contain versions
      var versionList = [];
  
      // Add releases to versionlist
      versionList = versionList.concat(releases);
  
      // If no version is selected, select the first option from the version list
      var selectedVersion = versionList[0];
  
      // Check if a there are a version
      if (getCurrentVersion()) {
        // Look for the requested version in the list
        foundVersion = versionList.find(function (versionFromApi) {
          return versionFromApi === getCurrentVersion();
        });
  
        // Set the version if it was found
        if (foundVersion) {
          selectedVersion = getCurrentVersion();
          $("html").addClass("version-" + selectedVersion);
        }
      }
  
      // Navbar: version indicator
      // Set the value of the indicator in the navbar to the currently selected version
      var versionText = slHelpers.parseFolderNameToVersionText(selectedVersion);
  
      setTimeout(function () {
        versionIndicator.text(versionText.slice(1));
      }, 100);
  
      // Empty hard coded version buttons on index page
      versionButtonsDropdown.empty();
  
      releases.sort(sortVersions);
  
      //version buttons
      for (var version in releases) {
        var li = $("<li>");
  
        //navbar version
        li.append(
          $("<a>", {
            href: swapUrlVersion(releases[version])
              + redirectParam,
            class: releases[version] === selectedVersion ? "selected " : null,
            text: releases[version]
          })
        );
  
        //homepage version
        homeVersionButtons.append(
          $("<a>", {
            href: String.format(pageToRedirectTo, releases[version]),
            class: "btn btn-default btn-space",
            text: releases[version]
          })
        );
        versionButtonsDropdown.append(li);
      }
    }
  
    $(".user-menu").on("click", function (event) {
      event.stopPropagation();
      var dropdown = $(this).find(".user-menu__dropdown");
      dropdown.toggleClass("show");
  
      $("html").click(function (event) {
        //check up the tree of the click target to check whether user has clicked outside of menu
        if ($(event.target).parents(".user-menu").length == 0) {
          dropdown.removeClass("show");
  
          //this event listener has done its job so we can unbind it.
          $(this).unbind(event);
        }
      });
    });
  
    function sortVersions(a, b) {
  
      as = a.split(".");
      bs = b.split(".");
  
      a0 = parseInt(as[0]);
      a1 = parseInt(as[1]);
  
      b0 = parseInt(bs[0]);
      b1 = parseInt(bs[1]);
  
      if (a0 > b0) {
        return 1;
      } else if (b0 > a0) {
        return -1;
      } else {
        if (a1 > b1) {
          return 1;
        } else if (b1 > a1) {
          return -1;
        } else {
          return 0;
        }
      }
    }
  })();