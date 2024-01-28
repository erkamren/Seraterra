import plant1 from "../img/plant1.jpeg";
import plant2 from "../img/plant2.jpeg";
import plant3 from "../img/plant3.jpeg";
import plant4 from "../img/plant4.jpeg";

function PlantContent() {
  return (
    <div>
      <div className="info">
        <p className="step-description">
          Şirketimiz 2019 yılından beri kendine ait arazilerde lavanta, kekik,
          biberiye, tıbbi papatya ve beyaz zambak tarımı yapmaktadır. Bu
          arazilerde elde ettiği ürünleri tesiste işlemekte ve pazarlamasını
          gerçekleştirmektedir. 2023 yılında Biga ilçesinde TKDK desteğiyle
          faaliyete geçen “Tıbbi ve Aromatik Bitki İşleme Tesisi”miz kapsamında
          Biga yöresi ve Güney Marmara bölgesinde tıbbi ve aromatik bitki
          yetiştiriciliğinin artırılması temel politika olarak hedeflenmektedir.
          Bu kapsamda Tarım İl ve İlçe Müdürlükleri, Ziraat Odaları, Çanakkale
          18 Mart Üniversitesi ve TOBB kapsamındaki odalarla iş birliklerimiz
          devam etmektedir. Bugün dünyada kullanılan tıbbi ve aromatik bitki
          sayısı Dünya Sağlık Örgütü’ne göre 20.000 civarındadır. Bunlardan
          4.000 adedi yaygın bir şekilde kullanılırken halen dünyada 2.000 kadar
          tıbbi bitkinin ticareti yapılmaktadır. Ülkemizde tıbbi olarak
          kullanılan bitkilerin sayısı 500 civarında olup, neredeyse tamamı
          doğal olarak yetişmektedir. Bunlardan çok az bir kısmı kültüre
          alınmıştır. Şirket olarak amacımız katma değerli tıbbi ve aromatik
          bitkilerin Güney Marmara bölgesinde yetiştirilmesini sağlamaktır.
        </p>
      </div>
      <div className="steps">
        <div className="step-text-box">
          <p className="step-number">01</p>
          <h3 className="step-head">
            TIBBİ VE AROMATİK BİTKİLER NERELERDE KULLANILIR?
          </h3>
          <ul className="step-list">
            <li>Tıp ve eczacılık alanlarında</li>
            <li>Kozmetik ve parfümeride</li>
            <li> Baharat üretiminde</li>
            <li> Gıda katkı maddesi olarak</li>
            <li> Hayvan sağlığında ve yem katkı maddesi olarak</li>
            <li> Doğal boya elde edilmesinde</li>
            <li> Peyzaj uygulamalarında</li>
          </ul>
          <p className="step-description">
            Tesisimizde yer alan distilasyon hattı ve süperkritik ekstraksiyon
            hattıyla ilaç sanayin, kozmetik sanayine hammadde ve ara madde
            üretimi gerçekleştirilmektedir. Tesisimiz ayrıca aromaterapi ve
            fitoterapi alanında son ürün üretimi gerçekleştirmektedir.
          </p>
        </div>
        <div className="step-img-box">
          <img src={plant1} className="step-img" alt="Plant" />
        </div>
        <div className="step-img-box">
          <img src={plant2} className="step-img" alt="Plant" />
        </div>
        <div className="step-text-box">
          <p className="step-number">02</p>
          <h3 className="step-head">
            TIBBİ VE AROMATİK BİTKİLERDE DOĞAL TOPLAMAYI NEDEN TERCİH ETMİYORUZ?
          </h3>
          <ul className="step-list">
            <li>Verim ve kalite düşük olmaktadır.</li>
            <li>
              Uçucu yağ içeren bitkiler tohum bağlamadan önce toplandıkları için
              çoğalmaları engellenmektedir.
            </li>
            <li>
              Yoğun ve dikkatsiz toplanan türlerin azalma ve hatta kaybolma
              riski bulunmaktadır.
            </li>
            <li>
              Doğada bu bitkiler geniş alanlara yayıldıklarından toplama işlemi
              çok fazla zaman ve işgücü gerektirmektedir.
            </li>
            <li>
              Bitkiler doğadan rastgele toplandıkları için standardizasyon ve
              homojenlik sağlanamamaktadır.
            </li>
            <li>
              Doğadan toplanan bitkilerin kurutma ve depolama işlemleri hijyenik
              ve kalite standartlarına uygun yapılamamaktadır.
            </li>
          </ul>
        </div>
        <div className="step-text-box">
          <p className="step-number">03</p>
          <h3 className="step-head">
            TARIM STRATEJİMİZDE VE SÖZLEŞMELİ ÜRETİMLERİMİZDE NELERE DİKKAT
            EDİYORUZ?
          </h3>
          <ul className="step-list">
            <li>Tıbbi ve aromatik bitkilerin pazar durumu</li>
            <li> Bölgenin iklim özellikleri</li>
            <li> Arazi ve toprak özellikleri</li>
            <li> Arazinin sulanma durumu</li>
            <li>
              Yetiştirilecek bitki türünün ve çeşidinin belirlenmesi (özellikle
              tescilli çeşitleri tercih ediyoruz)
            </li>
            <li> Sağlıklı fide temini</li>
            <li> Ekonomik fizibilite için kaç dekar alanın tesis edileceği</li>
            <li> Çiftçinin mekanizasyon durumu</li>
            <li> Hasat ve hasat sonrası işlemlerde destek</li>
          </ul>
        </div>
        <div className="step-img-box">
          <img src={plant3} className="step-img" alt="Plant" />
        </div>
        <div className="step-img-box">
          <img src={plant4} className="step-img" alt="Plant" />
        </div>
        <div className="step-text-box">
          <p className="step-number">04</p>
          <h3 className="step-head">
            POTANSİYELİ OLAN TIBBİ VE AROMATİK BİTKİ ÖRNEKLERİ NELERDİR?
          </h3>
          <ul className="step-list">
            <li>Biberiye (Rosmarinus Officinalis)</li>
            <li> Kekik (Origanum onites ve O. vulgare var. hirtum)</li>
            <li> Melisa (Melissa officinalis)</li>
            <li> Tıbbi Papatya (Matricaria chamomilla)</li>
            <li> Adaçayı (Salvia fruticosa ve S. officinalis)</li>
            <li> Nane (Mentha piperita)</li>
            <li> İngiliz Lavantası (Lavandula angustifolia)</li>
            <li> Rezene (Foeniculum vulgare)</li>
            <li> Devedikeni (Silybum marianum)</li>
            <li> Meyan Kökü (Glycyrrhiza glabra)</li>
            <li> Altın Otu (Helichrysum italicum)</li>
          </ul>
        </div>
      </div>
      <div className="info">
        <h3 className="step-head">SERA TERRA TARIM POLİTİKASI</h3>
        <p className="step-description">
          Şirketimiz, tıbbi bitkilerin sürdürülebilir bir şekilde
          yetiştirilmesini teşvik etmek, kalite ve güvenilirlik standartlarını
          belirlemek, üreticileri desteklemek, çevresel sürdürülebilirliği
          sağlamak, pazarlara erişimi kolaylaştırmak ve bitki türlerinin
          korunmasını amaçlamaktadır. Şirketimiz tarım politikasının bileşenleri
          aşağıdaki şekilde belirlenmiştir.
        </p>
        <ul className="step-list">
          <li>
            A. Tarım Teşvikleri: Tıbbi aromatik bitki üretimini desteklemek için
            üreticilere mali teşvikler, sübvansiyonlar, vergi muafiyetleri ve
            diğer ekonomik teşvikler sağlanmaktadır. Şirketimiz sözleşmeli
            üreticilerimize ilgili kamu kurum ve kuruluşları ile koordineli bir
            şekilde maksimum düzeyde teşvikten faydalandırmak için
            çalışmaktadır.
          </li>
          <li>
            B. Kalite ve Güvenilirlik Standartları: Tıbbi bitkilerin kalite ve
            güvenilirlik standartları, bitkilerin tıbbi amaçlar için
            kullanılabilirliğini artırmaktadır. Tesisimiz fideden pazara kadar
            AB standartlarında üretimi teşvik etmektedir.
          </li>
          <li>
            C. Sürdürülebilirlik: Tıbbi aromatik bitkilerin sürdürülebilir bir
            şekilde yetiştirilmesi ve toplanması önemlidir. Şirketimiz, çevre
            koruma önlemleri, biyoçeşitliliği koruma, su kullanımı ve toprak
            yönetimi konularında çiftçilere rehberlik etmektedir.
          </li>
          <li>
            D. Pazar Erişimi ve Ticaret: Tıbbi aromatik bitkilerin iç ve dış
            pazarlara erişimi konusunda şirketimiz çiftçilere gerekli destekleri
            sağlamaktadır. Pazar ihtiyaçları doğrultusunda ekim politikasını
            yönetmektedir.
          </li>
          <li>
            E. Araştırma ve Geliştirme: Şirketimiz tıbbi bitkilerin
            yetiştirilmesi ve kullanımıyla ilgili araştırma ve geliştirme
            faaliyetlerini sürdürmektedir. Detaylı bilgi için inovasyon
            başlığımızı incelemenizi tavsiye ederiz.
          </li>
          <li>
            F. Eğitim ve Bilinçlendirme: Şirketimiz çiftçilere tıbbi bitkilerin
            tarım politikası hakkında eğitim vermekte ve bilinçlendirme
            çalışmaları yapmaktadır.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PlantContent;
