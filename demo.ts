interface Point {
  x: number;
  y: number;
}

function tsDemo(data: Point) {
  console.log('6666666666');
  return Math.sqrt(data.x ** 2 + data.y ** 2);
}

tsDemo({ x: 3, y: 4 });
