export class ScrollEfect {
  static scroll(element1: HTMLElement, element2: HTMLElement){
    const windowTop = window.pageYOffset;
    if (element1 instanceof HTMLElement) {
      if (windowTop >= element1.offsetTop) {
        element2.classList.add('angle-up');
      } else {
        element2.classList.remove('angle-up');
      }
    }
  }
}