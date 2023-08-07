import { useRef, useState } from "react"

function cpText(text) {
    const type = "text/plain";
    const blob = new Blob([text], { type });
    return [new ClipboardItem({ [type]: blob })];
}

export default function Color(props) {
    const {hex} = props;
    const ref = useRef(null);

    const [title, setTitle] = useState('COPY')
    const hblur = () => {
        console.log('muda cp');
        setTitle('COPY');
        console.log({title})
    }

    return (
        <div className="single-color" style={{backgroundColor: hex}}>
            <span ref={ref}>{hex}</span>
            <span className="cp" data-hover={title} onBlur={hblur} onClick={() => {
                const tc = ref.current.textContent;
                navigator.clipboard.write(cpText(tc))
                  .catch(e => console.error(e))

                setTitle('COPIED')

            }}>&#10066;</span>
        </div>
    )

}