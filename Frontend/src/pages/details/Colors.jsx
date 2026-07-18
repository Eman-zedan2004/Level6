export default function Colors({ colors, tab, colorRef }) {
  return (
    <div className="colors" ref={colorRef}>
      {colors.map((color, index) => (
        <button
          style={{ background: color }}
          key={index}
          onClick={() => tab(index)}
        ></button>
      ))}
    </div>
  );
}
