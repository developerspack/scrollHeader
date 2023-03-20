import { images } from "./assets/indeximg";

const Home = () => {
  return (
    <div className="sm:px-16 px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((img) => (
          <img
            src={img.image}
            alt=""
            key={img.id}
            className="h-full w-full rounded-2xl"
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
