export interface progressState {
  progress: number[];
  status: string | null;
}

export type FetchProgressArgs = string;

export interface pushProgressArgs {
  userId: string;
  progress: number[];
  difficulty: number;
}

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}
