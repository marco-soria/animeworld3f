interface BootstrapCarouselOptions {
  interval?: number;
  keyboard?: boolean;
  pause?: string | boolean;
  ride?: string | boolean;
  wrap?: boolean;
  touch?: boolean;
}

interface BootstrapCarousel {
  cycle(): void;
  pause(): void;
  prev(): void;
  next(): void;
  nextWhenVisible(): void;
  to(index: number): void;
  dispose(): void;
}

interface BootstrapStatic {
  Carousel: new (
    element: HTMLElement,
    options?: BootstrapCarouselOptions
  ) => BootstrapCarousel;
  Modal: new (element: HTMLElement, options?: unknown) => unknown;
}

interface Window {
  bootstrap?: BootstrapStatic;
}
