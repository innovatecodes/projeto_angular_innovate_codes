import {
  Component,
  ViewChild,
  ElementRef,
  Renderer2,
  OnInit,
  AfterViewInit,
  HostListener,
} from '@angular/core';

import { IAddresses } from '../shared/addresses.interface';
import { IAriaRole } from '../shared/aria-role.interface';
import { ScrollEfect } from '../shared/scroll-efect';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  title = 'Innovate codes desenvolvedor web front-end';
  about = 'Sobre';
  experience = 'Experiência';
  contact = 'Contato';

  addresses: IAddresses = {
    rua: 'Rua Amazonas, 232',
    bairro: 'Centro',
    cidade: 'Cornélio Procópio - PR',
    pais: 'Brasil',
    cep: '86300-000',
  };

  // Object.values(), converte um objeto para array
  details: string[] = Object.values(this.addresses);

  constructor(private _elementRef: ElementRef, private _renderer: Renderer2) {}

  set typeWriter(element: HTMLHeadingElement) {
    let array = element.innerHTML.split('');
    element.innerHTML = '';
    array.forEach((l: string, i: number) => {
      setTimeout(() => {
        element.innerHTML += l;
      }, 100 * i);
    });
  }

  ngOnInit(): void {
    const title: HTMLHeadingElement =
      this._elementRef.nativeElement.querySelector('h1');
    this._renderer.listen('window', 'load', () => {
      this.typeWriter = title;
    });
  }

  ngAfterViewInit(): void {
    const contact = this._elementRef.nativeElement.querySelector('.contact');
    const arrow = this._elementRef.nativeElement.querySelector('.arrow');

    this._renderer.listen('window', 'scroll', () => {
      ScrollEfect.scroll(contact, arrow);
    });

    this.onScrollRemoveNavigation();
    this.onClickRemoveNavigation();
  }

  toggleActive = 'active';
  toggleOverlay = 'toggle-overlay';
  toggleBtn = 'toggle-btn';
  toggleLogo = 'toggle-logo';
  toggleIcon = 'toggle-icon';
  toggleEnabled = false;

  aria: IAriaRole = {
    label: 'Abrir menu',
    expanded: false,
    pressed: false,
  };

  @ViewChild('btn') _btnRef!: ElementRef<HTMLButtonElement>;
  @ViewChild('nav') _navRef!: ElementRef<HTMLElement>;
  @ViewChild('overlay') _overlayRef!: ElementRef<HTMLDivElement>;

  navigation() {
    if (!this.toggleEnabled) {
      this._renderer.addClass(this._navRef.nativeElement, this.toggleActive);
      this._renderer.addClass(
        this._overlayRef.nativeElement,
        this.toggleOverlay
      );
      this._renderer.addClass(this._btnRef.nativeElement, this.toggleBtn);
      this._renderer.addClass(this._navRef.nativeElement, this.toggleLogo);
      this._renderer.addClass(this._navRef.nativeElement, this.toggleIcon);
      this.toggleEnabled = true;
    } else {
      this._renderer.removeClass(this._navRef.nativeElement, this.toggleActive);
      this._renderer.removeClass(
        this._overlayRef.nativeElement,
        this.toggleOverlay
      );
      this._renderer.removeClass(this._btnRef.nativeElement, this.toggleBtn);
      this._renderer.removeClass(this._navRef.nativeElement, this.toggleLogo);
      this._renderer.removeClass(this._navRef.nativeElement, this.toggleIcon);
      this.toggleEnabled = false;
    }

    switch (this.toggleEnabled) {
      case true:
        this.aria.label = 'Fechar menu';
        this.aria.expanded = !this.aria.expanded;
        this.aria.pressed = !this.aria.pressed;
        break;

      default:
        this.aria.label = 'Abrir menu';
        this.aria.expanded = false;
        this.aria.pressed = false;
        break;
    }
  }

  onScrollRemoveNavigation() {
    this._renderer.listen('window', 'scroll', () => {
      if (this.toggleEnabled) {
        this.navigation();
      }
    });
  }

  onClickRemoveNavigation() {
    this._renderer.listen(this._overlayRef.nativeElement, 'click', () => {
      if (this.toggleEnabled) {
        this.navigation();
      }
    });
  }

  preventSendMessage(event: Event) {
    if(event.type === 'click'){
      event.preventDefault();
    }
  }
}
