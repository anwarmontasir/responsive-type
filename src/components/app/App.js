import Template from '../Template';

import './app.css';
import '../header/header.css';
import '../content/content.css';
import '../footer/footer.css';

import html from './app.html';
import Header from '../header/Header';
import Content from '../content/Content';
import Footer from '../footer/Footer';

const template = new Template(html);

export default class App {

  updateStyle(newClass, domTarget) {
    const newClassValue = newClass.options[newClass.selectedIndex].value;
    domTarget.className = newClassValue;
  }

  render() {
    const dom = template.clone();
    dom.querySelector('header').appendChild(new Header().render());
    dom.querySelector('main').appendChild(new Content().render());
    dom.querySelector('footer').appendChild(new Footer().render());

    this.typeScale = dom.getElementById('type-scale');
    this.fontPair = dom.getElementById('font-pair');

    dom.getElementById('type-scale-select').onchange = event => {
      this.updateStyle(event.target, this.typeScale);
    };

    dom.getElementById('font-pair-select').onchange = event => {
      this.updateStyle(event.target, this.fontPair);
    };

    return dom;
  }
}