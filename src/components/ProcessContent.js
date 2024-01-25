import F500 from "../img/F500.jpg";
import DSCF7290 from "../img/DSCF7290.jpg";

function ProcessContent() {
  return (
    <div>
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
          <p className="step-number">01</p>
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
    </div>
  );
}

export default ProcessContent;
