import Header from './Header';
import Footer from './Footer';

import {useState, useEffect} from 'react';

export default function App(){
    const [title, setTitle] = useState('Заголовок статьи');
    const [image, setImage] = useState('');
    const [text, setText] = useState('');

    useEffect(() => {
        async function fetchData(){
            const id = window.location.href.slice(-1);
            let response = await fetch(`https://jey.of.by/endpoint.php?id=4`);

            console.log(response);
            
            if(response.ok){
                let result = await response.json();
                
                setTitle(result.title);
                setImage(result.image);
                setText(result.description);
            }
        }
        fetchData();
    });

    return (
        <>
            <Header />
            <main className="article-page">
                <div className="container">
                    <div className="row">
                        <h2 className="block-header">{title}</h2>
                        <img src={image} alt="" />
                        <div className="article-text">
                            {text}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}