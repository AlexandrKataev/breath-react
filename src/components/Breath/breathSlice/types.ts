export interface breathState {
  time: number;
  vdohTime: number;
  zadTime: number[];
  started: boolean;
  isVdoh: boolean;
  isZad: boolean;
  isVidoh: boolean;
  finished: number;
  itter: number;
  hint: 'Вдох' | 'Задержка' | 'Выдох' | 'Приготовьтесь...';
}
