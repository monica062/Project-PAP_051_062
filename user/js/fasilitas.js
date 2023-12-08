
function showTabContent(event) {
  var target = event.target;
  var tabContent = document.querySelector("article[id='" + target.id.replace("tab-", "tabs-") + "']");

  if (tabContent) {
    tabContent.style.display = "block";

    // Hide all other tabs
    var allTabContents = document.querySelectorAll("article");
    for (var i = 0; i < allTabContents.length; i++) {
      if (allTabContents[i] !== tabContent) {
        allTabContents[i].style.display = "none";
      }
    }
  }
}