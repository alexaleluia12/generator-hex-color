import Color from "./Color"

const hexaColor = () => {
    let str = '0123456789abcdef'
    let color = ''
    for (let i = 0; i < 6; i++) {
      let index = Math.floor(Math.random() * str.length)
      color += str[index]
    }
    return '#' + color
  }

export default function Colors() {

      const colorList = [];
      for (let i=0; i<25; i++) {
        colorList.push(<Color key={i} hex={hexaColor()} />)
      }
    return (
        <section className="colors-group">
            {colorList}
        </section>
    )
}