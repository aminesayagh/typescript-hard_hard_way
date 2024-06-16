export function returnWhatIPassIn(arg: boolean): boolean;
export function returnWhatIPassIn(arg: number): number;
export function returnWhatIPassIn(arg: string): string;
// ...

export function returnWhatIPassIn<T>(arg: T): T {
  return arg;
}

const result = returnWhatIPassIn(true);