
interface Coordinate {
  x: number;
  y: number;
}

function parseCoordinate(obj: Coordinate): Coordinate;
function parseCoordinate(x: number, y: number): Coordinate;  

function parseCoordinate(xOrObj: number | Coordinate, y?: number): Coordinate {
  if (typeof xOrObj === 'object') {
    return xOrObj;
  }
  if (y === undefined) {
    throw new Error('y is required');
  }
  return { x: xOrObj, y: y };
}

