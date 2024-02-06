import kapsaisin from "../img/kapsaisin.jpg";
import oleuropein from "../img/olueoropein.jpg";
import juglone from "../img/juglone.jpg";
import linalol from "../img/linalol.jpg";

function Arge() {
  return (
    <div className="center">
      <div className="info">
        <p className="step-description">
          Araştırma ve geliştirme faaliyetlerimiz proje ekiplerimiz tarafından
          bilimsel ve etik kurallar çerçevesinde yapılmaktadır. Proje
          ekiplerimiz ziraat, kimya ve farmakoloji konusunda uzman
          araştırmacılardan oluşmaktadır. Ar-Ge merkezimizde literatür tarama ve
          değerlendirme çalışmaları, etken madde değerlendirme, çeşitli
          bitkilerin içeriği ve kullanım alanlarının değerlendirilmesi,
          formülasyon tasarımı ve formülasyon geliştirme, etken madde
          saflaştırma çalışmaları titizlikle yürütülmektedir. Ar-Ge merkezimizin
          temel amacı yenilikçi yaklaşımımız ve başarma tutkumuz ile insan
          sağlığı, bakımı ve güzelliği için kaliteli ve spesifik çözümler üretme
          yolunda bitkilerin şifa dolu dünyasında etken madde üretimini
          başarmaktır. Tesisimizde mevcut durumda 10 farklı Ar-Ge projesi devam
          etmektedir. Bu kapsamda TÜBİTAK işbirliğiyle, Tarım İlçe Müdürlüğü,
          üniversiteler ve 3 farklı kimya laboratuvarıyla koordinasyon halinde
          bitkilerden endüstriyel katma değerli ürün elde etme çalışmalarımız
          devam etmektedir.
        </p>
      </div>
      <div className="steps">
        <div className="step-text-box">
          <p className="step-number">01</p>
          <h3 className="step-head">Kapsaisin Elde Edilmesi</h3>
          <p className="step-description">
            Kapsaisin, acı biberlerin içinde bulunan kimyasal bir bileşiktir ve
            biberlerin acılığını ve baharatını oluşturan temel faktördür.
            Kapsaisin, biberlerin tohumları, membranları ve etli kısımlarında
            bulunur. Kapsaisinin elde edilmesi için Ar-ge merkezimizde “Carolina
            Reaper” biber türünün Superkritik Ekstraksiyon yöntemi kullanılarak
            saflaştırılması çalışmaları laboratuvar partnerimizle ve üniversite
            işbirliğimizle yürütülmektedir.
          </p>
        </div>
        <div className="step-img-box">
          <img src={kapsaisin} className="step-img" alt="Kapsaisin" />
        </div>
        <div className="step-img-box">
          <img src={oleuropein} className="step-img" alt="oleuropein" />
        </div>
        <div className="step-text-box">
          <p className="step-number">02</p>
          <h3 className="step-head">Oleuropein Elde Edilmesi</h3>
          <p className="step-description">
            Oleuropein, zeytin ağacının yaprakları, meyveleri ve dallarında
            bulunan bir bileşiktir. Oleuropein, zeytin ağacının doğal savunma
            mekanizmalarından biridir ve bitkiyi zararlı organizmalardan korur.
            Oleuropein'in çoğu zeytin yaprağı ve zeytin meyvesinde bulunur.
            Oleuropein elde etmek için genellikle şu adımlar izlenir:
          </p>

          <ul className="step-list">
            <li>
              Zeytin Yaprağı Toplama: Oleuropein elde etmek için öncelikle
              zeytin yaprakları toplanır. Bu genellikle zeytin hasadından sonra
              gerçekleştirilir.
            </li>
            <li>Yıkama: Toplanan yapraklar iyice yıkanır ve temizlenir.</li>
            <li>
              Öğütme: Yıkanan yapraklar genellikle öğütülür veya doğranır. Bu,
              oleuropein'in daha iyi çıkmasına yardımcı olur.
            </li>
            <li>
              Ekstraksiyon: Öğütülen yapraklar süperkritik ekstraksiyon yöntemi
              ile CO2 vasıtasıyla düşük sıcaklık ve yüksek basınçta ekstrakte
              edilir.
            </li>
            <li>
              Filtrasyon: Zeytin yaprağı ekstraktı filtrelenir, böylece
              oleuropein içeren çözelti ayrılır.
            </li>
            <li>
              Saflaştırma: Oleuropein içeren çözelti saflaştırılır ve çeşitli
              işlemlerle arındırılır.
            </li>
          </ul>
          <p className="step-description">
            Oleuropein, zeytin yaprağı ekstrasyonları aracılığıyla elde edilir.
            Bu oleuropein özütleri daha sonra sağlık takviyeleri, kozmetik
            ürünler veya gıda katkı maddeleri için kullanılır.
          </p>
        </div>
        <div className="step-text-box">
          <p className="step-number">03</p>
          <h3 className="step-head">Juglone Elde Edilmesi</h3>{" "}
          <p className="step-description">
            Juglone, ceviz ağaçlarının kökleri ve diğer bitkilerle rekabet etmek
            amacıyla ürettikleri bir kimyasal bileşiktir. Juglone yeşil ceviz
            kabuğunda yüksek miktarda bulunur. Juglone'un bazı potansiyel
            faydaları ve kullanım alanları şunlardır:
          </p>
          <ul className="step-list">
            <li>Tıbbi ve aromatik bitkilerin pazar durumu</li>
            <li>
              Antimikrobiyal Özellikler: Juglone, mikroplara ve patojenlere
              karşı potansiyel bir antimikrobiyal etkiye sahip olabilir. Bu
              nedenle ceviz ağaçları kökleri çevresinde diğer bitkileri
              engelleyerek rekabet avantajı elde edebilir.
            </li>
            <li>
              Antioksidan Etki: Juglone, antioksidan özelliklere sahip olabilir.
              Bu, serbest radikallerin neden olduğu hücresel hasarı azaltmaya
              yardımcı olabilir.
            </li>
            <li>
              Antiparaziter Özellikler: Juglone, bazı paraziter organizmalara
              karşı etkili olabilir. Bu nedenle, juglone içeren ceviz yaprakları
              veya ceviz kabuğu, parazitlere karşı doğal bir koruma
              sağlayabilir.
            </li>
          </ul>
        </div>
        <div className="step-img-box">
          <img src={juglone} className="step-img" alt="juglone" />
        </div>{" "}
        <div className="step-img-box">
          <img src={linalol} className="step-img" alt="linalol" />
        </div>
        <div className="step-text-box">
          <p className="step-number">04</p>
          <h3 className="step-head">Linalool Elde Edilmesi</h3>
          <p className="step-description">
            Saf linalool, birçok bitkisel kaynakta bulunan bir uçucu bileşiktir
            ve lavanta bitkisinde de yoğun olarak bulunur. Saf linalool elde
            etmek için endüstriyel düzeyde prosesler kullanılır, çünkü bu
            bileşiği saf haliyle izole etmek zordur Saf linalool elde etme
            işlemi, genellikle buhar distilasyonu ve kimyasal işlemlerle
            gerçekleştirilir. Saf linalool elde etme işleminin temel adımları:
          </p>
          <ul className="step-list">
            <li>
              Buhar Distilasyonu: Linalool'ü elde etmek için en yaygın yöntem
              buhar distilasyonudur. Bitki malzemesi buharla ısıtılır ve uçucu
              yağlar buharla birlikte yukarı doğru yükselir. Daha sonra
              soğutulur ve buharın yoğunlaşması sonucu uçucu yağlar
              ayrıştırılır.
            </li>
            <li>
              Kimyasal İzolasyon: Linalool, elde edilen uçucu yağların içinde
              bulunur. Daha sonra kimyasal işlemlerle bu bileşiği izole
              edebilirsiniz. Bu işlem, fraksiyonel damıtma, kristalizasyon veya
              diğer kimyasal ayrıştırma tekniklerini içerebilir.
            </li>
            <li>
              Rafine Etme: Elde edilen linalool genellikle rafine edilir ve
              saflaştırılır. Bu, istenmeyen bileşiklerin uzaklaştırılmasını ve
              linalool'ün saflığını artırır.
            </li>
          </ul>
          <p className="step-description">
            Saf linalool, birçok endüstriyel ve ticari uygulamada kullanılır.
            Kozmetik ürünler, parfümler, temizlik ürünleri ve aroma terapide
            yaygın olarak kullanılan bir bileşiktir.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Arge;
