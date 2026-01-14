import Button from "./Button";

function AboutPage(){
    let content = {
        title: "About",
        text: "This is about our company page"
    }

    return (
        <>
            <h1>{content.title}</h1>
            <p>{content.text}</p>
            <Button startCount={0} step={1} />
        </>
    );
}

export default AboutPage;