import F500 from "../img/F500.jpg";
import DSCF7290 from "../img/DSCF7290.jpg";
import Glass from "../img/glass.png";
import Green from "../img/green.png";
import Atom from "../img/atom.png";
import Extrak from "../img/extrak.gif";
import Coal from "../img/coal.jpeg";
import Stream from "../img/stream.jpeg";

function Process() {
  return (
    <div className="center">
      <div className="steps">
        <div className="step-text-box">
          <h3 className="step-head">
            SÜPERKRİTİK KARBONDİOKSİT EKSTRAKSİYONU (SFE)
          </h3>
          <p className="step-number step-head">Çok yönlü yeşil teknoloji</p>
          <p className="step-description">
            Süperkritik CO2 ekstraksiyonu, yüksek basınç ve düşük sıcaklık
            kullanarak bitkilerden özütler elde etmek için kullanılan
            endüstriyel bir yöntemdir.
          </p>
          <ul className="step-list">
            <li>
              Saf bir maddenin kritik sıcaklığının ve basıncının üstünde
              bulunmasına maddenin süperkritik akışkan hali denir. Her saf
              maddenin kritik sıcaklık ve basıncı vardır.
            </li>
            <li>
              Süperkritik akışkanlar, geleneksel çözücülere ve saf maddenin
              sıvı-gaz haline göre birçok avantaja sahiptir. Süperkritik
              akışkanların fizikokimyasal özellikleri (yoğunluk, viskosite,
              difüzivite, dielektrik sabiti, çözünürlük parametresi, vb.),
              basınç ve sıcaklığının değiştirilmesiyle gaz benzeri özelliklerden
              sıvı benzeri özelliklere dönüşmektedir.
            </li>
            <li>
              Bir Süperkritik Akışkan hem gaz fazın hem de sıvının verimli
              özelliklerini kullanır. Bir gaz gibi difüzlenme, sıvı gibi de
              yüksek çözme gücü vardır.
            </li>
          </ul>
        </div>
        <div className="step-img-box">
          <img src={DSCF7290} className="step-img" alt="DSCF7290" />
        </div>
        <div className="step-img-box">
          <img src={F500} className="step-img" alt="F-500" />
        </div>
        <div className="step-text-box">
          <h3 className="step-head">Neden Ekstraksiyonda CO2 Kullanıyoruz?</h3>
          <p className="step-description">
            Bir çok özelliği nedeniyle karbondioksit çözücü olarak tercih
            edilir;
          </p>
          <ul className="step-list">
            <li>Kolay bulunması</li>
            <li>Ucuz olması</li>
            <li>Zehirleyici olmaması</li>
            <li>Yanıcı olmaması</li>
            <li>Kalıntı bırakmaması</li>
            <li>Atmosferde bulunan doğal bir gaz olması</li>
            <li>Kolay geri kazanılabilir olması</li>
            <li>
              Çevre sıcaklığına yakın bir sıcaklıkta (Tc=31.2°C) ve nispeten
              düşük bir basınçta (Pc=73.8 bar) kritik hale ulaşması
            </li>
          </ul>
        </div>
      </div>
      <div className="three-steps">
        <div className="step-img-box">
          <img src={Atom} className="step-img" alt="Atom" />
        </div>
        <div className="step-img-box">
          <img src={Green} className="step-img" alt="Green" />
        </div>
        <div className="step-img-box">
          <img src={Glass} className="step-img" alt="Glass" />
        </div>
        <div>
          <h3 className="step-head">Düşük Sıcaklıkta Ekstraksiyon</h3>
          <p className="step-description">
            Geleneksel yöntemlere göre daha düşük sıcaklıkta gerçekleşir, bu
            nedenle daha az enerji tüketir ve böylece daha az CO2 emisyonu
            yaratır.
          </p>
        </div>
        <div>
          <h3 className="step-head">Doğal Çözücü</h3>
          <p className="step-description">
            CO2 birçok canlı için doğal bir moleküldür ve doğru şekilde
            kullanıldığında çevre dostudur.
          </p>
        </div>
        <div>
          <h3 className="step-head">Selektif Çözücü</h3>
          <p className="step-description">
            Süperkritik CO2 ekstraksiyonu, hassas kimyasal ayrım sağlar ve doğru
            sıcaklık ve basınç kontrolü sağlanarak fraksiyonlama ile kaliteli
            ürünü garanti eder.
          </p>
        </div>
      </div>
      <div className="steps">
        <div className="step-text-box">
          <h3 className="step-head"> CO2 ekstraksiyonunun çalışma prensibi?</h3>
          <p className="step-description">
            Ekstraksiyonun temel mantığı; CO2 gazının çözüp kendi üzerine
            yüklendiği molekülleri faz değişimi ya da basınç düşümü ile
            seperatörde bırakmasıdır. Gaz ve ekstrakt karışımı ekstraktörden
            seperatör kolonlarına kontrollü şekilde Geri Basınç Regülatörü (BPR)
            yardımıyla taşınır. Seperatör kolonlarında basınç düşümü ile
            ekstrakt seperatör kolonunun dibinde toplanır, ekstraktı bırakıp
            temizlenen gaz sıvılaştırılarak tekrar sisteme beslenir.
          </p>
        </div>
        <div className="step-img-box">
          <img src={Extrak} className="step-img" alt="Extrak" />
        </div>
        <h1 className="span-head">Ekstraksiyon Prosesi</h1>
        <div className="step-text-box">
          <p className="step-number">01</p>
          <h3 className="step-head">Sistem Hazırlığı</h3>
          <p className="step-description">
            Sıcaklık ve Basınç parametreleri ayarlanır ve işlenecek bitki
            reaktör kolonlarına yüklenir.
          </p>
        </div>
        <div className="step-text-box">
          <p className="step-number">02</p>
          <h3 className="step-head">Ekstraksiyon Prosesi</h3>
          <p className="step-description">
            Sistemin büyüklüğüne uygun akış hızında ekstraksiyon ilk ekstraktör
            kolonunda tamamlanır ve diğer gaz diğer kolona aktarılır. (TANDEM
            Çalışma Mantığı)
          </p>
        </div>
        <div className="step-text-box">
          <p className="step-number">03</p>
          <h3 className="step-head">Seperasyon- Ekstrakt Toplama</h3>
          <p className="step-description">
            Toplanan ekstrakt seperatör kolonundan deşarj edilir ve gaz geri
            kazanımını yapılır (%85-99 gaz geri kazanımı).
          </p>
        </div>
        <div className="step-text-box">
          <p className="step-number">04</p>
          <h3 className="step-head">Temizleme</h3>
          <p className="step-description">
            Aynı ürün çalışılmayacaksa sistem son ürüne uygun temizlik materyali
            (su, etanol vs.) ile temizlenir.
          </p>
        </div>
      </div>
      <div className="info">
        <h1 className="step-head">Endüstriyel Uygulamalar</h1>
        <h3 className="minihead">Gıda Endüstrisi</h3>
        <p className="step-description">
          Yağların ekstraksiyonu, kalite kontrolü, aroma ekstraksiyonu, doğal
          renk maddesi eldesi, doğal gıda koruyucusu eldesi, süt sterilizasyonu,
          gıda atıklarının değerlendirilmesi yağı azaltılmış kuruyemişler,
          protein saflaştırılması vb.
        </p>
        <h3 className="minihead">Kozmetik Endüstrisi</h3>
        <p className="step-description">
          Cilt bakımı için özler, etken maddeler, renklendirici maddeler, doğal
          koku maddeleri eldesi(oud, sandal), esansiyel yağlar vb.
        </p>
        <h3 className="minihead">İlaç Endüstrisi</h3>
        <p className="step-description">
          Bitkisel ekstraktlar, uçucu yağlar, etken maddece zengin özütler,
          vitamin eldesi vb.
        </p>
        <h3 className="minihead">Diğer Endüstriler</h3>
        <p className="step-description">
          Malzeme mühendisliği, savunma sanayii, tekstil endüstrisi (susuz
          yağsızlaştırma, boyama), polimer kimyası vb.
        </p>
      </div>
      <div className="steps">
        <div className="step-text-box">
          <h3 className="step-head">BUHAR JENERATÖRLÜ DİSTİLASYON SİSTEMİ</h3>
          <p className="step-description">
            Buhar distilasyonu buhar sistemli, bitkisel ürünleri yüksek basınçlı
            buhar ile işleyerek uçucu yağ elde etmeyi sağlayan bir yöntemdir. Bu
            yöntemde bitkisel ürünler bir kazana yerleştirilir. Kazanın altında
            bulunan bir başka kazanda su kaynatılarak buhar üretilir. Bu buhar,
            bitkisel ürünlerin bulunduğu kazana gönderilir. Buhar, bitkisel
            ürünlerin hücre duvarlarını kırarak uçucu yağın ayrışmasını sağlar.
            Ayrışan uçucu yağ ve su karışımı, bir kondenser yardımıyla sıvı hale
            getirilir. Sıvı haldeki karışım, bir ayırıcı vasıtasıyla uçucu yağ
            ve su olarak ayrılır. Böylece uçucu yağ elde edilmiş olur. Buhar
            distilasyonu buhar sistemli, bitkisel ürünlerden uçucu yağ elde
            etmek için en yaygın ve en etkili yöntemdir. Bu yöntemle elde edilen
            uçucu yağlar, bitkilerin doğal özelliklerini korur ve yüksek
            kalitede olur. Buhar distilasyonu buhar sistemli ile; gül, lavanta,
            kekik, nane, adaçayı, biberiye, altınotu gibi 45 farklı bitkiden
            uçucu yağ elde ediyoruz. Uçucu yağlar; kozmetik, parfüm, gıda, ilaç
            gibi birçok sektörde kullanılmaktadır. Buhar sistemli ünitemizde
            oluşturulan buhar tamamen buhar jeneratöründen sağlanır ve katı
            yakıtlar gibi doğaya salınım yapan karbon gazlarını barındırmaz.
            Buharın elektrik enerjisi ile üretimi gerçekleştirilir.  Tesisimizde
            4.000 litre kapasiteli buhar jeneratörlü distilasyon sistemi
            bulunmaktadır.
          </p>
        </div>
        <div className="step-img-box">
          <img src={Coal} className="step-img" alt="Coal system" />
        </div>
        <div className="step-img-box">
          <img src={Stream} className="step-img" alt="Stream system" />
        </div>
        <div className="step-text-box">
          <h3 className="step-head">KATI YAKITLI DİSTİLASYON SİSTEMİ</h3>
          <p className="step-description">
            Tesisimizde 1.300 litre kapasiteli katı yakıtlı distilasyon sistemi
            bulunmaktadır.
          </p>
          <ul className="step-list">
            <li>
              Buhar distilasyonu yapılacak madde temizlenir ve kazana
              yerleştirilir.
            </li>
            <li>Kazanın altına su doldurulur ve ısıtılır.</li>
            <li>
              Kazanın altına katı yakıt (odun, kömür, pelet vb.) konulur ve
              ateşlenir.
            </li>
            <li>
              Su kaynadıkça buhar üretilir ve borularla buhar distilasyonu
              yapılacak kazana taşınır.
            </li>
            <li>
              Buhar maddenin içindeki uçucu yağlar veya diğer bileşenleri
              buharlaştırır ve borularla başka bir kazana taşınır.
            </li>
            <li>Bu kazanda buhar soğutulur ve sıvı haline getirilir.</li>
            <li>
              Sıvının üstünde kalan uçucu yağlar veya diğer bileşenler toplanır.
            </li>
            <li>Sıvının altında kalan su ise geri kazanılır.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Process;
