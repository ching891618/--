export enum ColorVariant {
  BLACK = 'black',
  GREY = 'grey',
  LIGHT_GREY = 'light-grey',
  WHITE = 'white',
  LIME = 'lime',
  SAGE = 'sage',
  OLIVE = 'olive'
}

export interface ChartDataPoint {
  year: number;
  value: number;
  secondary: number;
}
