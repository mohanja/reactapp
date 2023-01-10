import { useState } from 'react';

export function Addcolor() {
  const [color, setColor] = useState('green');
  const styles = {
    background: color
  };
  const [colorList, setcolorList] = useState(["green", "yellow", "black", "pink"]);
  return (
    <div>

      <input style={styles}
        onChange={(event) => setColor(event.target.value)}
        placeholder='enter a color'
        value={color} />

      <button onClick={() => setcolorList([...colorList, color])}>Add color</button>
      {colorList.map((clr) => <ColorBox color={clr} />)}
    </div>
  );
}
function ColorBox({ color }) {
  const styles = {
    width: "200px",
    height: "30px",
    margin: "10px",
    background: color,
  };
  return (
    <div
      style={styles}>

    </div>

  );
}
