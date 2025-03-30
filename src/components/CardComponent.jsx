const CardComponent = ({ data }) => {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {data.map((item) => (
        <div
          key={item.id}
          className="relative w-full h-48 rounded-lg overflow-hidden"
        >
          {/* Arka Plan Görseli */}
          <img
            src={item.imagePath}
            alt={item.title}
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* İçerik (Başlık ve Buton) */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
            <h2 className="font-bold text-lg md:text-xl">{item.title}</h2>
            <button className="mt-3 bg-black text-white px-6 py-2 rounded-lg font-semibold transition hover:bg-gray-800">
              İNCELE
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardComponent;
