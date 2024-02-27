import data from "./data.json";

function Ingredients({ selectedId }) {
  console.log(selectedId);
  const finder = data.filter((item) => item.id === selectedId);
  return (
    <div className="ingre">
      {finder.map((item) => (
        <div className="in-description">
          <img
            className="in-img"
            src={require(`/src/img/products/${item.image}`)}
            alt={item.latin}
          />
          <h1>{item.isim}</h1>
          <p className="in-text">Latince Adı: {item.latin}</p>
          <p className="in-text">Menşei: {item.mensei}</p>
          <p className="in-text">Üretim Yeri: {item.uretim}</p>
          <h3>Etken Maddeler</h3>
          <p className="in-text">{item.etken1}</p>
          <p className="in-text">{item.etken2}</p>
          <p className="in-text">{item.etken3}</p>
          <p className="in-text">{item.etken4}</p>
          <p className="in-text">{item.etken5}</p>
          <p className="in-text">{item.etken6}</p>
          <p className="in-text">{item.etken7}</p>
          <p className="in-text">{item.etken8}</p>
          <p className="in-text">{item.etken9}</p>
          <h3>Kullanım Önerileri</h3>
          <p className="in-text">{item.kullanim1}</p>
          <p className="in-text">{item.kullanim2}</p>
          <p className="in-text">{item.kullanim3}</p>
          <p className="in-text">{item.kullanim4}</p>
          <p className="in-text">{item.kullanim5}</p>
          <p className="in-text">{item.kullanim6}</p>
          <p className="in-text">{item.kullanim7}</p>
          <p className="in-text">{item.kullanim8}</p>
          <p className="in-text">{item.kullanim9}</p>
          <h3>Uyarılar</h3>
          <p className="in-text">{item.uyarilar1}</p>
          <p className="in-text">{item.uyarilar2}</p>
          <p className="in-text">{item.uyarilar3}</p>
          <p className="in-text">{item.uyarilar4}</p>
          <p className="in-text">{item.uyarilar5}</p>
          <p className="in-text">{item.uyarilar6}</p>
          <p className="in-text">{item.uyarilar7}</p>
          <p className="in-text">{item.uyarilar8}</p>
          <p className="in-text">{item.uyarilar9}</p>
          <h3>Alerjen Uyarısı</h3>
          <p className="in-text">
            Herhangi bir uçucu yağı kullanmadan önce cilt yama testi (patch
            test) yapmalı ve olumsuz bir reaksiyon durumunda hemen kullanımı
            bırakmalısınız. Cilt yama testi (patch test), bir kişinin cilt
            hassasiyetini belirlemek için kullanılan bir test türüdür. Yağın
            genel kullanımından önce dirsek içi veya bilek bölgesinde 1-2 cm2
            lik bir alanda yama testi yapılmasını önermekteyiz.
          </p>
        </div>
      ))}
    </div>
  );
}

export default Ingredients;
