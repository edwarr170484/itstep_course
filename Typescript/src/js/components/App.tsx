type TitleProps = {
    title: string
}

export default function App({title}: TitleProps) {
    return <h1>{title}</h1>;
}