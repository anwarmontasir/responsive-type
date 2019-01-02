import html from './content.html';
import Template from '../Template';

const template = new Template(html);

export default class Content {
  render() {
    const dom = template.clone();
    return dom;
  }
}