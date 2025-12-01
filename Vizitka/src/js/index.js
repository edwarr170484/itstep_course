import Element from './element';
import ImageElement  from './image';

const el = new Element('div');

el.setId('block');
el.addClasses("border", "flex");
el.addStyles({
    width: "100px",
    height: "100px",
    border: "1px solid black",
    backgroundColor: "purple"
});

const link = new Element('a');
const img = new ImageElement('img');
img.setSrc('https://ptl-ru-cdn.tanki.su/dcont/fb/image/860x483.jpg');
img.setAlt("Это картинка танка");

img.addStyles({
    width: "100%",
    height: "100%",
    objectFit: "cover"
});

link.appendChilds(img);
el.appendChilds(link);

document.body.append(el.createDomElement());

