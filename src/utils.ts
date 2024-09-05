import { portion } from "./types";

export function getLastElements(amount: number, array: portion[]): portion[] {
  if (array.length <= amount) return array;
  return array.slice(array.length - amount) as portion[];
}

export function shapeTypesNums(type: number, max: number): number {
  if (type >= max) {
    return 0;
  }

  return ++type;
}
