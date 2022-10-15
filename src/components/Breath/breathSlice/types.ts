export interface breathState {
  vdoh: number;
  zad: number[];
  started: boolean;
  finished: number;
  itter: number;
  hint: 'Вдох' | 'Задержка' | 'Выдох' | 'Приготовьтесь...';
}
