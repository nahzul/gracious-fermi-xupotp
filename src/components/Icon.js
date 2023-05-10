const images = {};

function importAll(r) {
  r.keys().forEach((fileName) => {
    const key = fileName.replace("./", "").replace(".png", "");
    images[key] = r(fileName);
  });
}

importAll(require.context("../res/icons/modern/", true, /\.png$/));

function Icon({icon, height, width}) {
  
  return (
    <div className>
      <img src={images[icon]} className={`h-[${height}] w-[${width}] translate-y-2`} />
    </div>
  );
}

export default Icon;
