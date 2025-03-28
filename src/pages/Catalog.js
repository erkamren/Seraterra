import { Link } from "react-router-dom";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
function Catalog({ setSelectedId, selectedSort }) {
  const { language } = useContext(LanguageContext);
  const data =
    language === "tr" ? require("./data.json") : require("./data.en.json");

  const finder = data.filter(
    (item) =>
      item.title && item.title.some((sort) => sort.includes(selectedSort))
  );

  // Güvenli resim yükleme fonksiyonu
  const getImage = (imagePath) => {
    try {
      return require(`../img/products/${imagePath}`);
    } catch (error) {
      console.warn(`Resim bulunamadı: ${imagePath}`);
      return null; // veya varsayılan bir resim yolu
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white mt-36">
      <div className="max-w-screen-xl mx-auto p-8">
        <h1 className="text-6xl text-center bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-emerald-600 font-bold mb-16">
          {selectedSort}
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {finder.map((item) => {
            const imageSrc = getImage(item.image);
            if (!imageSrc) return null; // Resim yoksa kartı gösterme

            return (
              <div key={item.id}>
                <Link
                  to="/ingredients"
                  onClick={() => setSelectedId(item.id)}
                  className="group block rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      src={require(`/src/img/products/${item.image}`)}
                      alt={item.latin}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <h1 className="absolute bottom-6 left-6 text-2xl font-semibold text-white transform group-hover:translate-x-2 transition-transform duration-300">
                      {item.name}
                    </h1>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Catalog;
