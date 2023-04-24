const shapes = require('./lib/shapes.js');
const { Circle, Triangle, Square } = shapes;

const writeToFile = (filename, content) => {
    const fs = require('fs');

    fs.writeFile('./' + filename, content, err => {
        if (err) {
            console.error(err);
        }
    });
}
const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'list',
      message: 'What shape do you want to make?',
      name: 'shape',
      choices : ['circle', 'square', 'triangle']
    },
    {
      type: 'input',
      message: 'What color shape?',
      name: 'shapeColor',
    },
    {
      type: 'input',
      message: 'insert the text for your logo',
      name: 'text',
    },
    {
        type: 'input',
        message: 'what color for your logo text',
        name: 'textColor',
      },
  ])
  .then((response) => {
    console.log(response)
    let shape
    switch (response.shape) {
        case 'circle':
            shape = new Circle();
            break;
        case 'square':
            shape = new Square();
            break;
        case 'triangle':
            shape = new Triangle();
            break;
        default:
            break;
        }
    shape.setColor(response.shapeColor);
    shape.setText(response.text);
    shape.setTextColor(response.textColor);
    writeToFile(response.shape + '.svg', shape.render());
  }

  );
