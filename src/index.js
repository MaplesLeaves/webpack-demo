// import _ from 'lodash';
import printMe from './print.js'
import './style.css';
import Icon from './timg.jpg';
import Data from './data.xml';
import {
  cube
} from './math.js';

function component() {
  // var element = document.createElement('div');
  var element = document.createElement('pre');

  // Lodash, now imported by this script
  // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.innerHTML = [
    'Hello webpack!',
    '5 cubed is equal to ' + cube(5)
  ].join('\n\n');
  // 添加calss类名
  element.classList.add('hello');
  // 创建图片 
  var myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);
  console.log(Data)
  // 创建btn
  var btn = document.createElement('button');
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);
  return element;
}
let element = component(); // Store the element to re-render on print.js changes
document.body.appendChild(element);
if (module.hot) {
  module.hot.accept('./print.js', function () {
    console.log('Accepting the updated printMe module!');
    // printMe();
    document.body.removeChild(element);
    element = component(); // Re-render the "component" to update the click handler
    document.body.appendChild(element);
  })
}