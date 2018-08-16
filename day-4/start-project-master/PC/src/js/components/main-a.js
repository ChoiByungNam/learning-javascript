const defaults = {
  oneclickSelector: '.layer-oneclick',
  activeClass: 'is-active',
  openedClass: 'is-opened'
};

export default class main {
  constructor() {
    const settings = Object.assign({}, defaults);
    const oneClickElement = document.querySelector(settings.oneclickSelector);

    Object.assign(this, {
      settings,
      oneClickElement
    });
  }

  openOneclick() {
    const { oneClickElement, settings } = this;
    oneClickElement.classList.add(settings.openedClass);
  }
  closeOneclick() {
    const { oneClickElement, settings } = this;
    oneClickElement.classList.remove(settings.openedClass);
  }
}
