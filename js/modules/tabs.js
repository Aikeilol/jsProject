function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
  //TABS
  const tabs = document.querySelectorAll(tabsSelector), //menu
    tabsContent = document.querySelectorAll(tabsContentSelector), //img and description
    tabsParent = document.querySelector(tabsParentSelector); //parent

  function hideTabContent() {
    tabsContent.forEach(item => {
      item.classList.add('hide');
      item.classList.remove("show", "fade");
    });
    tabs.forEach(item => {
      item.classList.remove(activeClass);
    });
  }

  function showTabContent(i = 0) {
    tabsContent[i].classList.add("show", "fade");
    tabsContent[i].classList.remove("hide");
    tabs[i].classList.add(activeClass);
  }
  hideTabContent();
  showTabContent();

  tabsParent.addEventListener("click", (e) => {
    const target = e.target;

    if (target && target.classList.contains(tabsSelector.slice(1))) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });
}

export default tabs;