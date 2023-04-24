const shapes = require('./shapes.js');
const { Circle, Triangle, Square } = shapes;
test('Circle', () => {
    const circle = new Circle();
    circle.setColor('red');
    circle.setText('Hello');
    circle.setTextColor('blue');
    expect(circle.render()).toBe(`<svg version=\"1.1\"  xmlns=\"http://www.w3.org/2000/svg\" width=\"200\" height = \"200\">
<circle cx=\"100\" cy=\"100\" r=\"80\" style=\"fill:red;\"/>
<text x=\"100\" y=\"100\" font-size=\"50\" fill=\"blue\" text-anchor=\"middle\" alignment-baseline=\"middle\">Hello</text>
</svg>`)
})

test('Square', () => {
    const square = new Square();
    square.setColor('pink');
    square.setText('world');
    square.setTextColor('#000');
    expect(square.render()).toBe(`<svg version=\"1.1\"  xmlns=\"http://www.w3.org/2000/svg\"  width=\"200\" height = \"200\">
    <rect width=\"200\" height=\"200\" style=\"fill:pink;\"/>
    <text x=\"100\" y=\"100\" font-size=\"50\" fill=\"#000\" text-anchor=\"middle\" alignment-baseline=\"middle\">world</text>
</svg>`)
})

test('Triangle', () => {
    const triangle = new Triangle();
    triangle.setColor('green');
    triangle.setText('!');
    triangle.setTextColor('yellow');
    expect(triangle.render()).toBe(`<svg version=\"1.1\"  xmlns=\"http://www.w3.org/2000/svg\" width=\"200\" height = \"200\">
<polygon points=\"100,0 200,200 0,200\" style=\"fill:green;\"/>
<text x=\"100\" y=\"100\" font-size=\"50\" fill=\"yellow\" text-anchor=\"middle\" alignment-baseline=\"middle\">!</text>
</svg>`)
})
