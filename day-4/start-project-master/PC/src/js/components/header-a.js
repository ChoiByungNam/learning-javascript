const defaults = {
  rootSelector: '.header',
  gateSelector: '.gate',
  maskSelector: '.mask',
  gnbSelector: '.header-group-basic',
  gnbActiveSelector: '.header-group-active',
  searchSelector: '.header-search',
  activeClass: 'is-active',
  openedClass: 'is-opened'
};

export default class header {
  constructor() {
    const settings = Object.assign({}, defaults);
    const rootElement = document.querySelector(settings.rootSelector);
    const maskElement = document.querySelector(settings.maskSelector);
    const gateElement = document.querySelector(settings.gateSelector);
    const gnbElement = rootElement.querySelector(settings.gnbSelector);
    const gnbActiveElement = rootElement.querySelector(settings.gnbActiveSelector);
    const searchElement = document.querySelector(settings.searchSelector);

    Object.assign(this, { // 해당 내에서 사용되는거면 제외
      settings,
      rootElement,
      maskElement,
      gateElement,
      gnbElement,
      gnbActiveElement,
      searchElement
    });
  }

  gnbPos() {
    const { rootElement, gnbElement, gnbActiveElement, settings } = this;
    let scrollValue = $(document).scrollTop();

    if ( scrollValue >= 960 || rootElement.classList.contains(settings.activeClass) ) {
      gnbElement.style.display = 'none';
      gnbActiveElement.classList.add(settings.activeClass);
    } else {
      gnbElement.style.display = 'flex';
      gnbActiveElement.classList.remove(settings.activeClass);
    }
  }

  openGate() {
    const { gateElement, maskElement, settings } = this;

    gateElement.classList.add(settings.openedClass);
    maskElement.classList.add(settings.openedClass);
  }
  closeGate() {
    const { gateElement, maskElement, settings } = this;

    gateElement.classList.remove(settings.openedClass);
    maskElement.classList.remove(settings.openedClass);
  }

  openGnb() {
    const { rootElement, gnbElement, gnbActiveElement, settings } = this;

    gnbElement.style.display = 'none';
    rootElement.classList.add(settings.activeClass);
    gnbActiveElement.classList.add(settings.activeClass);
  }
  closeGnb() {
    const { rootElement, gnbElement, gnbActiveElement, settings } = this;
    let scrollValue = $(document).scrollTop();

    if ( scrollValue < 960 ) {
      gnbActiveElement.classList.remove(settings.activeClass);
    }
    rootElement.classList.remove(settings.activeClass);
    gnbElement.style.display = 'flex';
    return false;
  }

  openSearch() {
    const { searchElement, settings } = this;
    searchElement.classList.add(settings.openedClass);
  }
  closeSearch() {
    const { searchElement, settings } = this;
    searchElement.classList.remove(settings.openedClass);
  }
}
