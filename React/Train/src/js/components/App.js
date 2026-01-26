import Paragraph from "./Paragraph";
import Button from './Button';
import Title from './Title';
import Card from './Card';
import Counter from "./Counter";

const products = [
  {id: 1, name: 'Название товара1', image: 'https://aif-s3.aif.ru/images/044/696/f04c59bb244a49d41b204fb19f7db5de.webp', text: 'По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых людей недоумение при попытках прочитать рыбу текст. '},
  {id: 2, name: 'Название товара2', image: 'https://aif-s3.aif.ru/images/044/696/f04c59bb244a49d41b204fb19f7db5de.webp', text: 'По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых людей недоумение при попытках прочитать рыбу текст. '},
  {id: 3, name: 'Название товара3', image: 'https://aif-s3.aif.ru/images/044/696/f04c59bb244a49d41b204fb19f7db5de.webp', text: 'По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых людей недоумение при попытках прочитать рыбу текст. '},
  {id: 4, name: 'Название товара4', image: 'https://aif-s3.aif.ru/images/044/696/f04c59bb244a49d41b204fb19f7db5de.webp', text: 'По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых людей недоумение при попытках прочитать рыбу текст. '}
];

function App() {
    const tovary = products.map((product) => {
      return (
        <Card key={product.id} title={product.name} image={{src: product.image, alt: product.name}}>
          {product.text}   
        </Card>
      )
    });

    return (
      <>
        <Counter />
        <Button label="Текст кнопки" handleClick={() => alert('Кнопка нажата')} />
        <Title level={3} text={'Это заголовок'} />
        {tovary}
      </>
    );
}

export default App;