export interface State {
  citySelectOpened: boolean;
}

export interface El {
  clickOutsideEvent: {
    (event: MouseEvent): void;
  };
  contains: (arg0: HTMLDivElement) => boolean;
}

export interface Binding {
  value: () => void;
}
