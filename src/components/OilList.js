import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function OilList() {
  return (
    <div className="oillist">
      <ol>
        <ul>
          <p id="a1">Adet Dönemi Ağrıları</p>
          <li>
            <Link to="/adacayi" className="link">
              Adaçayı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/civanpercemi" className="link">
              Civanperçemi Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/kafur" className="link">
              Kafur Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/maydanoz" className="link">
              Maydanoz Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/mercankosk" className="link">
              Mercanköşk Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/mur" className="link">
              Mür Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/olmezcicek" className="link">
              Ölmez Çiçek Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/tarcin" className="link">
              Tarçın Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul>
          <p id="a2">Ağız Dezenfektanı</p>
          <li>
            <Link to="/nanehidro" className="link">
              Nane Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/bergamot" className="link">
              Bergamot Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/cayagaci" className="link">
              Çay ağacı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/nane" className="link">
              Nane Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/kekik" className="link">
              Kekik Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/mur" className="link">
              Mür Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/papatyahidro" className="link">
              Papatya Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/adacayihidro" className="link">
              Adaçayı Hidrosolü
            </Link>
          </li>
        </ul>

        <ul>
          <p id="a3">Ağız Kokusu Giderici</p>
          <li>
            <Link to="/akgunlukhidro" className="link">
              Akgünlük Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/anasonhidro" className="link">
              Anason Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/nane" className="link">
              Nane Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/karanfil" className="link">
              Karanfil Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/maydanoz" className="link">
              Maydanoz Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/okaliptus" className="link">
              Okaliptus Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul>
          <p id="a4">Ağız Yaraları ve İltihapları</p>
          <li>
            <Link to="/adacayi" className="link">
              Adaçayı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/akgunlukhidro" className="link">
              Akgünlük Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/anason" className="link">
              Anason Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/aynisafamase" className="link">
              Aynısafa Maserasyonu
            </Link>
          </li>
          <li>
            <Link to="/bergamot" className="link">
              Bergamot Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/karanfil" className="link">
              Karanfil Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/mur" className="link">
              Mür Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/paculi" className="link">
              Paçuli Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/papatyahidro" className="link">
              Papatya Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/camterebentin" className="link">
              Çam Terebentin Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul>
          <p id="a5"> Ağrı Kesici</p>
          <li>
            <Link to="/akgunlukhidro" className="link">
              Akgünlük Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/biberiye" className="link">
              Biberiye Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/karanfil" className="link">
              Karanfil Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/lavanta" className="link">
              Lavanta Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/mur" className="link">
              Mür Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/nane" className="link">
              Nane Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/okaliptus" className="link">
              Okaliptus Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/olmezcicek" className="link">
              Ölmez Çiçek Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/papatyamase" className="link">
              Papatya Maserasyonu
            </Link>
          </li>
          <li>
            <Link to="/portakalkabugu" className="link">
              Portakal Kabuğu Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/ylangylang" className="link">
              Ylang Ylang Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/zencefil" className="link">
              Zencefil Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul>
          <p id="a6">Akne</p>
          <li>
            <Link to="/adacayi" className="link">
              Adaçayı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/ardic" className="link">
              Ardıç Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/argan" className="link">
              Argan Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/biberiyehidro" className="link">
              Biberiye Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/ceviz" className="link">
              Ceviz Yağı
            </Link>
          </li>
          <li>
            <Link to="/cayagaci" className="link">
              Çay Ağacı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/incircekirdegi" className="link">
              İncir Çekirdeği Yağı
            </Link>
          </li>
          <li>
            <Link to="/jojoba" className="link">
              Jojoba Yağı
            </Link>
          </li>
          <li>
            <Link to="/kekik" className="link">
              Kekik Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/kusburnucekirdegi" className="link">
              Kuşburnu Çekirdeği Yağı
            </Link>
          </li>
          <li>
            <Link to="/limonkabugu" className="link">
              Limon Kabuğu Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/mercankosk" className="link">
              Mercanköşk Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/mersinhidro" className="link">
              Mersin Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/neroli" className="link">
              Neroli Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/nioli" className="link">
              Nioli Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/okaliptus" className="link">
              Okaliptus Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/paculi" className="link">
              Paçuli Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/palmarosa" className="link">
              Palmarosa Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/portakalkabugu" className="link">
              Portakal Kabuğu Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/papatyahidro" className="link">
              Papatya Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/papatyamase" className="link">
              Papatya Maserasyonu
            </Link>
          </li>
          <li>
            <Link to="/servi" className="link">
              Servi Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/ylangylang" className="link">
              Ylang Ylang Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul>
          <p id="a7">Antimikrobiyal</p>
          <li>
            <Link to="/adacayi" className="link">
              Adaçayı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/ardic" className="link">
              Ardıç Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/akgunlukhidro" className="link">
              Akgünlük Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/biberiyehidro" className="link">
              Biberiye Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/cayagaci" className="link">
              Çay Ağacı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/corekotu" className="link">
              Çörekotu Yağı
            </Link>
          </li>
          <li>
            <Link to="/defne" className="link">
              Defne Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/elemi" className="link">
              Elemi Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/gulhidro" className="link">
              Gül Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/itir" className="link">
              Itır Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/karanfil" className="link">
              Karanfil Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/kekik" className="link">
              Kekik Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/kusburnucekirdegi" className="link">
              Kuşburnu Çekirdeği Yağı
            </Link>
          </li>
          <li>
            <Link to="/lavanta" className="link">
              Lavanta Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/limonkabugu" className="link">
              Limon Kabuğu Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/mersinhidro" className="link">
              Mersin Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/nanehidro" className="link">
              Nane Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/okaliptus" className="link">
              Okaliptus Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/palmarosa" className="link">
              Palmarosa Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/papatyahidro" className="link">
              Papatya Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/portakalkabugu" className="link">
              Portakal Kabuğu Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/servi" className="link">
              Servi Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/tarcin" className="link">
              Tarçın Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/ylangylang" className="link">
              Ylang Ylang Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/zencefil" className="link">
              Zencefil Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul>
          <p id="a7">Antioksidanlar</p>
          <li>
            <Link to="/biberiyehidro" className="link">
              Biberiye Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/incircekirdegi" className="link">
              İncir Çekirdeği Yağı
            </Link>
          </li>
          <li>
            <Link to="/kekik" className="link">
              Kekik Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/portakalkabugu" className="link">
              Portakal Kabuğu Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/narcekirdegi" className="link">
              Nar Çekirdeği Yağı
            </Link>
          </li>
        </ul>
        <ul>
          <p id="a8">Antiseptikler</p>
          <li>
            <Link to="/ardic" className="link">
              Ardıç Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/gulhidro" className="link">
              Gül Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/karanfil" className="link">
              Karanfil Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/kekikhidro" className="link">
              Kekik Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/kekik" className="link">
              Kekik Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/paculi" className="link">
              Paçuli Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/palmarosa" className="link">
              Palmarosa Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/tarcin" className="link">
              Tarçın Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul>
          <p id="a10">Antiviraller</p>

          <li>
            <Link to="/kafur" className="link">
              Kafur Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/palmarosa" className="link">
              Palmarosa Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul>
          <p id="a11"> Astım ve Bronşit</p>
          <li>
            <Link to="/adacayi" className="link">
              Adaçayı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/akgunlukhidro" className="link">
              Akgünlük Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/kekikhidro" className="link">
              Kekik Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/limonkabugu" className="link">
              Limon Kabuğu Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/okaliptus" className="link">
              Okaliptus Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/camterebentin" className="link">
              Çam Terebentin Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul>
          <p id="a12">Ateş Düşürücü</p>
          <li>
            <Link to="/okaliptus" className="link">
              Okaliptus Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/nane" className="link">
              Nane Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul>
          <p id="a13">Ayak Bakımı</p>
          <li>
            <Link to="/biberiyehidro" className="link">
              Biberiye Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/cayagaci" className="link">
              Çay Ağacı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/nanehidro" className="link">
              Nane Hidrosolü
            </Link>
          </li>
        </ul>
        <ul>
          <p id="a14">Ayak Kokusu Önleyici</p>
          <li>
            <Link to="/cayagaci" className="link">
              Çay Ağacı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/mersinhidro" className="link">
              Mersin Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/nanehidro" className="link">
              Nane Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/papatya" className="link">
              Papatya Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul>
          <p id="b1">Bağırsak Spazmı Giderici</p>
          <li>
            <Link to="/adacayi" className="link">
              Adaçayı Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul>
          <p id="b2">Bağışıklık Destekleyici</p>
          <li>
            <Link to="/ciyatohumu" className="link">
              Çiya Tohumu Yağı
            </Link>
          </li>
          <li>
            <Link to="/corekotu" className="link">
              Çörekotu Yağı
            </Link>
          </li>
          <li>
            <Link to="/kafur" className="link">
              Kafur Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/mur" className="link">
              Mür Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul>
          <p id="b3"> Bakteri ve Mantar Enfeksiyonları</p>
          <li>
            <Link to="/adacayi" className="link">
              Adaçayı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/kafur" className="link">
              Kafur Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/karanfil" className="link">
              Karanfil Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/kekikhidro" className="link">
              Kekik Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/kekik" className="link">
              Kekik Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/lavantahidro   " className="link">
              Lavanta Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/mersinhidro" className="link">
              Mersin Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/mercankosk" className="link">
              Mercanköşk Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/paculi" className="link">
              Paçuli Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/papatyahidro" className="link">
              Papatya Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/servi" className="link">
              Servi Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/susam" className="link">
              Susam Yağı
            </Link>
          </li>
        </ul>
        <ul>
          <p id="b4">Balgam Söktürücüler</p>
          <li>
            <Link to="/adacayi" className="link">
              Adaçayı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/akgunlukhidro" className="link">
              Akgünlük Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/kafur" className="link">
              Kafur Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/lavanta" className="link">
              Lavanta Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/mercankosk" className="link">
              Mercanköşk Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/mersinhidro" className="link">
              Mersin Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/mur" className="link">
              Mür Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/okaliptus" className="link">
              Okaliptus Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul>
          <p id="b5">Bebek Pişikleri</p>
          <li>
            <Link to="/aynisafamase" className="link">
              Aynısafa Maserasyonu
            </Link>
          </li>
          <li>
            <Link to="/cayagaci" className="link">
              Çay Ağacı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/lavantahidro   " className="link">
              Lavanta Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/papatyahidro" className="link">
              Papatya Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/papatyamase" className="link">
              Papatya Maserasyonu
            </Link>
          </li>
        </ul>
        <ul>
          <p id="b6">Boğaz Ağrısı</p>
          <li>
            <Link to="/adacayi" className="link">
              Adaçayı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/limonkabugu" className="link">
              Limon Kabuğu Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/okaliptus" className="link">
              Okaliptus Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/mersinhidro" className="link">
              Mersin Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/mur" className="link">
              Mür Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul>
          <p id="b7">Böcek/Sinek Kovucu</p>
          <li>
            <Link to="/defne" className="link">
              Defne Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/sedir" className="link">
              Sedir Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/kafur" className="link">
              Kafur Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/limonotu" className="link">
              Limonotu Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/nanehidro" className="link">
              Nane Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/nane" className="link">
              Nane Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/okaliptus" className="link">
              Okaliptus Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/palmarosa" className="link">
              Palmarosa Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/servi" className="link">
              Servi Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul>
          <p id="b8"> Böcek Sokmaları</p>
          <li>
            <Link to="/biberiye" className="link">
              Biberiye Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/cayagaci" className="link">
              Çay Ağacı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/karanfil" className="link">
              Karanfil Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/kekikhidro" className="link">
              Kekik Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/kekik" className="link">
              Kekik Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/limonotu" className="link">
              Limonotu Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/mercankosk" className="link">
              Mercanköşk Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/nioli" className="link">
              Nioli Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/lavantahidro   " className="link">
              Lavanta Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/nane" className="link">
              Nane Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/olmezcicek" className="link">
              Ölmez Çiçek Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/portakalkabugu" className="link">
              Portakal Kabuğu Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/tamanu" className="link">
              Tamanu Yağı
            </Link>
          </li>
          <li>
            <Link to="/ylangylang" className="link">
              Ylang Ylang Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul>
          <p id="b9"> Burun Tıkanıklığı</p>
          <li>
            <Link to="/biberiyehidro" className="link">
              Biberiye Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/kafur" className="link">
              Kafur Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/mercankosk" className="link">
              Mercanköşk Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/mersinhidro" className="link">
              Mersin Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/nane" className="link">
              Nane Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul>
          <p id="c1">Cilt Alerjileri</p>
          <li>
            <Link to="/itir" className="link">
              Itır Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul>
          <p id="c2">Cilt Besleyici</p>
          <li>
            <Link to="/akgunlukhidro" className="link">
              Akgünlük Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/aspir" className="link">
              Aspir Yağı
            </Link>
          </li>
          <li>
            <Link to="/gulhidro" className="link">
              Gül Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/hindistancevizi" className="link">
              Hindistan Cevizi Yağı
            </Link>
          </li>
          <li>
            <Link to="/jojoba" className="link">
              Jojoba Yağı
            </Link>
          </li>
          <li>
            <Link to="/kabakcekirdegi" className="link">
              Kabak Çekirdeği Yağı
            </Link>
          </li>
          <li>
            <Link to="/kakao" className="link">
              Kakao Yağı
            </Link>
          </li>
          <li>
            <Link to="/kayisicekirdegi" className="link">
              Kayısı Çekirdeği Yağı
            </Link>
          </li>
          <li>
            <Link to="/makademya" className="link">
              Makademya Yağı
            </Link>
          </li>
          <li>
            <Link to="/mersinhidro" className="link">
              Mersin Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/lavantahidro   " className="link">
              Lavanta Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/palmarosa" className="link">
              Palmarosa Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/papatyamase" className="link">
              Papatya Maserasyonu
            </Link>
          </li>
          <li>
            <Link to="/servi" className="link">
              Servi Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul>
          <p id="c3">Cilt Çatlakları</p>
          <li>
            <Link to="/akgunlukhidro" className="link">
              Akgünlük Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/badem" className="link">
              Badem Yağı
            </Link>
          </li>
          <li>
            <Link to="/hindistancevizi" className="link">
              Hindistan Cevizi Yağı
            </Link>
          </li>
          <li>
            <Link to="/incircekirdegi" className="link">
              İncir Çekirdeği Yağı
            </Link>
          </li>
          <li>
            <Link to="/jojoba" className="link">
              Jojoba Yağı
            </Link>
          </li>
          <li>
            <Link to="/kakao" className="link">
              Kakao Yağı
            </Link>
          </li>
          <li>
            <Link to="/kusburnucekirdegi" className="link">
              Kuşburnu Çekirdeği Yağı
            </Link>
          </li>
          <li>
            <Link to="/kantaron" className="link">
              Kantaron Yağı
            </Link>
          </li>
          <li>
            <Link to="/paculi" className="link">
              Paçuli Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/pirinckepegi" className="link">
              Pirinç Kepeği Yağı
            </Link>
          </li>
        </ul>
        <ul>
          <p id="c4"> Cilt Gençleştirici (Anti-Aging)</p>
          <li>
            <Link to="/adacayi" className="link">
              Adaçayı Yağı
            </Link>
          </li>
          <li>
            <Link to="/akgunlukhidro" className="link">
              Akgünlük Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/elemi" className="link">
              Elemi Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/gulhidro" className="link">
              Gül Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/havuctohumu" className="link">
              Havuç Tohumu Yağı
            </Link>
          </li>
          <li>
            <Link to="/kusburnucekirdegi" className="link">
              Kuşburnu Çekirdeği Yağı
            </Link>
          </li>
          <li>
            <Link to="/narcekirdegi" className="link">
              Nar Çekirdeği Yağı
            </Link>
          </li>
          <li>
            <Link to="/olmezcicek" className="link">
              Ölmez Çiçek Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/paculi" className="link">
              Paçuli Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/palmarosa" className="link">
              Palmarosa Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/pirinckepegi" className="link">
              Pirinç Kepeği Yağı
            </Link>
          </li>
          <li>
            <Link to="/zencefil" className="link">
              Zencefil Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul>
          <p id="c5"> Cilt Hafif Yaraları İyileştirici</p>
          <li>
            <Link to="/adacayi" className="link">
              Adaçayı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/ardic" className="link">
              Ardıç Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/akgunlukhidro" className="link">
              Akgünlük Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/cayagaci" className="link">
              Çay ağacı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/defne" className="link">
              Defne Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/badem" className="link">
              Badem Yağı
            </Link>
          </li>
          <li>
            <Link to="/gulhidro" className="link">
              Gül Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/itirhidro" className="link">
              Itır Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/karanfil" className="link">
              Karanfil Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/kakao" className="link">
              Kakao Yağı
            </Link>
          </li>
          <li>
            <Link to="/kekikhidro" className="link">
              Kekik Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/kusburnucekirdegi" className="link">
              Kuşburnu Çekirdeği Yağı
            </Link>
          </li>
          <li>
            <Link to="/lavantahidro   " className="link">
              Lavanta Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/mur" className="link">
              Mür Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/nane" className="link">
              Nane Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/okaliptus" className="link">
              Okaliptus Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/olmezcicek" className="link">
              Ölmez Çiçek Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/paculi" className="link">
              Paçuli Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/palmarosa" className="link">
              Palmarosa Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/papatyahidro" className="link">
              Papatya Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/peygambercicegihidro" className="link">
              Peygamber Çiçeği Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/sarikantaron" className="link">
              Sarı Kantaron Yağı
            </Link>
          </li>
          <li>
            <Link to="/servi" className="link">
              Servi Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul>
          <p id="c6">Cilt Kaşınmaları</p>
          <li>
            <Link to="/adacayi" className="link">
              Adaçayı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/biberiyehidro" className="link">
              Biberiye Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/biberiye" className="link">
              Biberiye Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/gulhidro" className="link">
              Gül Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/karanfil" className="link">
              Karanfil Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/kekikhidro" className="link">
              Kekik Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/kekik" className="link">
              Kekik Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/kusburnucekirdegi" className="link">
              Kuşburnu Çekirdeği Yağı
            </Link>
          </li>
          <li>
            <Link to="/mercankosk" className="link">
              Mercanköşk Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/lavantahidro   " className="link">
              Lavanta Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/nanehidro" className="link">
              Nane Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/nane" className="link">
              Nane Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/papatyahidro" className="link">
              Papatya Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/ylangylang" className="link">
              Ylang Ylang Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul>
          <p id="c7">Cilt Kuruluğu</p>
          <li>
            <Link to="/akgunlukhidro" className="link">
              Akgünlük Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/camterebentin" className="link">
              Çam Terebentin Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/ciyatohumu" className="link">
              Çiya Tohumu Yağı
            </Link>
          </li>
          <li>
            <Link to="/hindistancevizi" className="link">
              Hindistan Cevizi Yağı
            </Link>
          </li>
          <li>
            <Link to="/paculi" className="link">
              Paçuli Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul>
          <p id="c8">Cilt Lekeleri</p>
          <li>
            <Link to="/adacayi" className="link">
              Adaçayı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/akgunlukhidro" className="link">
              Akgünlük Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/ciyatohumu" className="link">
              Çiya Tohumu Yağı
            </Link>
          </li>
          <li>
            <Link to="/incircekirdegi" className="link">
              İncir Çekirdeği Yağı
            </Link>
          </li>
          <li>
            <Link to="/kusburnucekirdegi" className="link">
              Kuşburnu Çekirdeği Yağı
            </Link>
          </li>
          <li>
            <Link to="/limonkabugu" className="link">
              Limon Kabuğu Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/narcekirdegi" className="link">
              Nar Çekirdeği Yağı
            </Link>
          </li>
          <li>
            <Link to="/olmezcicek" className="link">
              Ölmez Çiçek Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/pirinckepegi" className="link">
              Pirinç Kepeği Yağı
            </Link>
          </li>
          <li>
            <Link to="/portakalkabugu" className="link">
              Portakal Kabuğu Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/susam" className="link">
              Susam Yağı
            </Link>
          </li>
          <li>
            <Link to="/tamanu" className="link">
              Tamanu Yağı
            </Link>
          </li>
        </ul>
        <ul>
          <p id="c9"> Cilt Nemlendirici</p>
          <li>
            <Link to="/adacayi" className="link">
              Adaçayı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/ardic" className="link">
              Ardıç Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/akgunlukhidro" className="link">
              Akgünlük Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/badem" className="link">
              Badem Yağı
            </Link>
          </li>
          <li>
            <Link to="/defne" className="link">
              Defne Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/itirhidro" className="link">
              Itır Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/incircekirdegi" className="link">
              İncir Çekirdeği Yağı
            </Link>
          </li>
          <li>
            <Link to="/jojoba" className="link">
              Jojoba Yağı
            </Link>
          </li>
          <li>
            <Link to="/kakao" className="link">
              Kakao Yağı
            </Link>
          </li>
          <li>
            <Link to="/kayisicekirdegi" className="link">
              Kayısı Çekirdeği Yağı
            </Link>
          </li>
          <li>
            <Link to="/kusburnucekirdegi" className="link">
              Kuşburnu Çekirdeği Yağı
            </Link>
          </li>
          <li>
            <Link to="/limonkabugu" className="link">
              Limon Kabuğu Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/makademya" className="link">
              Makademya Yağı
            </Link>
          </li>
          <li>
            <Link to="/mur" className="link">
              Mür Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/palmarosa" className="link">
              Palmarosa Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/portakalkabugu" className="link">
              Portakal Kabuğu Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/papatya" className="link">
              Papatya Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/uzumcekirdegi" className="link">
              Üzüm Çekirdeği Yağı
            </Link>
          </li>
        </ul>
        <ul>
          <p id="c10">Cilt Sıkılaştırma</p>
          <li>
            <Link to="/adacayi" className="link">
              Adaçayı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/ardic" className="link">
              Ardıç Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/akgunluk" className="link">
              Akgünlük Yağı
            </Link>
          </li>
          <li>
            <Link to="/biberiyehidro" className="link">
              Biberiye Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/gulhidro" className="link">
              Gül Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/kusburnucekirdegi" className="link">
              Kuşburnu Çekirdeği Yağı
            </Link>
          </li>
          <li>
            <Link to="/limonkabugu" className="link">
              Limon Kabuğu Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/makademya" className="link">
              Makademya Yağı
            </Link>
          </li>
          <li>
            <Link to="/papatyamase" className="link">
              Papatya Maserasyonu
            </Link>
          </li>
          <li>
            <Link to="/peygambercicegihidro" className="link">
              Peygamber Çiçeği Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/portakalkabugu" className="link">
              Portakal Kabuğu Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/sedir" className="link">
              Sedir Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul>
          <p id="c11">Çıban İyileştirici</p>
          <li>
            <Link to="/adacayi" className="link">
              Adaçayı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/cayagaci" className="link">
              Çay Ağacı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/hint" className="link">
              Hint Yağı
            </Link>
          </li>
          <li>
            <Link to="/limonkabugu" className="link">
              Limon Kabuğu Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/mersinhidro" className="link">
              Mersin Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/mur" className="link">
              Mür Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/neem" className="link">
              Neem Yağı
            </Link>
          </li>
        </ul>
        <ul>
          <p id="c12">Çikolata Kisti</p>
          <li>
            <Link to="/olmezcicek" className="link">
              Ölmez Çiçek Hidrosolü
            </Link>
          </li>
        </ul>
        <ul>
          <p id="d1">Demans</p>
          <li>
            <Link to="/ciyatohumu" className="link">
              Çiya Tohumu Yağı
            </Link>
          </li>
        </ul>
        <ul>
          <p id="d2">Diş Ağrısı</p>
          <li>
            <Link to="/karanfil" className="link">
              Karanfil Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/mercankosk" className="link">
              Mercanköşk Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/misketlimonu" className="link">
              Misket Limonu Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul>
          <p id="d3">Diş Eti Hastalıkları</p>
          <li>
            <Link to="/adacayi" className="link">
              Adaçayı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/akgunlukhidro" className="link">
              Akgünlük Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/hindistancevizi" className="link">
              Hindistan Cevizi Yağı
            </Link>
          </li>
          <li>
            <Link to="/kekikhidro" className="link">
              Kekik Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/mur" className="link">
              Mür Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/okaliptus" className="link">
              Okaliptus Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/olmezcicek" className="link">
              Ölmez Çiçek Hidrosolü
            </Link>
          </li>
        </ul>
        <ul>
          <p id="d4">Diş Plağı Önleyici</p>
          <li>
            <Link to="/hindistancevizi" className="link">
              Hindistan Cevizi Yağı
            </Link>
          </li>
          <li>
            <Link to="/mersinhidro" className="link">
              Mersin Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/okaliptus" className="link">
              Okaliptus Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul>
          <p id="d5"> Diyabet Yaraları</p>
          <li>
            <Link to="/tamanu" className="link">
              Tamanu Yağı
            </Link>
          </li>
        </ul>
        <ul>
          <p id="e1">Egzama</p>
          <li>
            <Link to="/adacayi" className="link">
              Adaçayı Yağı
            </Link>
          </li>
          <li>
            <Link to="/ardic" className="link">
              Ardıç Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/avokado" className="link">
              Avokado Yağı
            </Link>
          </li>
          <li>
            <Link to="/akgunlukhidro" className="link">
              Akgünlük Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/cayagaci" className="link">
              Çay Ağacı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/gulhidro" className="link">
              Gül Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/hindistancevizi" className="link">
              Hindistan Cevizi Yağı
            </Link>
          </li>
          <li>
            <Link to="/itir" className="link">
              Itır Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/jojoba" className="link">
              Jojoba Yağı
            </Link>
          </li>
          <li>
            <Link to="/kekikhidro" className="link">
              Kekik Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/kekik" className="link">
              Kekik Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/kusburnucekirdegi" className="link">
              Kuşburnu Çekirdeği Yağı
            </Link>
          </li>
          <li>
            <Link to="/mercankosk" className="link">
              Mercanköşk Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/mur" className="link">
              Mür Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/narcekirdegi" className="link">
              Nar Çekirdeği Yağı
            </Link>
          </li>
          <li>
            <Link to="/lavanta" className="link">
              Lavanta Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/nane" className="link">
              Nane Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/okaliptus" className="link">
              Okaliptus Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/olmezcicek" className="link">
              Ölmez Çiçek Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/paculi" className="link">
              Paçuli Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/palmarosa" className="link">
              Palmarosa Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/papatyahidro" className="link">
              Papatya Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/papatyamase" className="link">
              Papatya Maserasyonu
            </Link>
          </li>
          <li>
            <Link to="/sarikantaronmase" className="link">
              Sarı Kantaron Maserasyonu
            </Link>
          </li>
          <li>
            <Link to="/sedir" className="link">
              Sedir Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/ylangylang" className="link">
              Ylang Ylang Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul>
          <p id="e2">Eklem Ağrıları</p>
          <li>
            <Link to="/adacayi" className="link">
              Adaçayı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/ardic" className="link">
              Ardıç Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/biberiyehidro" className="link">
              Biberiye Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/biberiye" className="link">
              Biberiye Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/camterebentin" className="link">
              Çam Terebentin Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/itir" className="link">
              Itır Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/kekik" className="link">
              Kekik Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/mercankosk" className="link">
              Mercanköşk Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/nane" className="link">
              Nane Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/nioli" className="link">
              Nioli Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/okaliptus" className="link">
              Okaliptus Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/palmarosa" className="link">
              Palmarosa Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/susam" className="link">
              Susam Yağı
            </Link>
          </li>
          <li>
            <Link to="/tamanu" className="link">
              Tamanu Yağı
            </Link>
          </li>
        </ul>
        <ul>
          <p id="e3">Eklem İltihapları (Osteoartrit)</p>
          <li>
            <Link to="/akgunlukhidro" className="link">
              Akgünlük Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/avokado" className="link">
              Avokado Yağı
            </Link>
          </li>
          <li>
            <Link to="/biberiyehidro" className="link">
              Biberiye Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/mercankosk" className="link">
              Mercanköşk Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/misketlimonu" className="link">
              Misket Limonu Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/nioli" className="link">
              Nioli Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/okaliptus" className="link">
              Okaliptus Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/palmarosa" className="link">
              Palmarosa Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/papatyamase" className="link">
              Papatya Maserasyonu
            </Link>
          </li>
          <li>
            <Link to="/sarikantaronmase" className="link">
              Sarı Kantaron Maserasyonu
            </Link>
          </li>
        </ul>
        <ul>
          <p id="e4">Enfeksiyon Giderici</p>
          <li>
            <Link to="/adacayi" className="link">
              Adaçayı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/ardic" className="link">
              Ardıç Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/akgunlukhidro" className="link">
              Akgünlük Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/defne" className="link">
              Defne Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/elemi" className="link">
              Elemi Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/havuctohumu" className="link">
              Havuç Tohumu Yağı
            </Link>
          </li>
          <li>
            <Link to="/incircekirdegi" className="link">
              İncir Çekirdeği Yağı
            </Link>
          </li>
          <li>
            <Link to="/karanfil" className="link">
              Karanfil Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/kekik" className="link">
              Kekik Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/kusburnucekirdegi" className="link">
              Kuşburnu Çekirdeği Yağı
            </Link>
          </li>
          <li>
            <Link to="/lavantahidro   " className="link">
              Lavanta Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/limonkabugu" className="link">
              Limon Kabuğu Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/mersinhidro" className="link">
              Mersin Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/okaliptus" className="link">
              Okaliptus Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/palmarosa" className="link">
              Palmarosa Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/papatyahidro" className="link">
              Papatya Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/portakalkabugu" className="link">
              Portakal Kabuğu Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/servi" className="link">
              Servi Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/ylangylang" className="link">
              Ylang Ylang Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul>
          <p id="g1">Gaz Sancısı</p>
          <li>
            <Link to="/adacayi" className="link">
              Adaçayı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/ardic" className="link">
              Ardıç Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/nanehidro" className="link">
              Nane Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/nane" className="link">
              Nane Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/karanfil" className="link">
              Karanfil Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/miskadacayi" className="link">
              Misk Adaçayı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/tarcin" className="link">
              Tarçın Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/zencefil" className="link">
              Zencefil Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul>
          <p id="g2">Göz Sağlığı</p>
          <li>
            <Link to="/avokado" className="link">
              Avokado Yağı
            </Link>
          </li>
          <li>
            <Link to="/gulhidro" className="link">
              Gül Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/miskadacayi" className="link">
              Misk Adaçayı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/mersinhidro" className="link">
              Mersin Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/papatyahidro" className="link">
              Papatya Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/peygambercicegihidro" className="link">
              Peygamber Çiçeği Hidrosolü
            </Link>
          </li>
        </ul>
        <ul>
          <p id="g3">Gül Hastalığı</p>
          <li>
            <Link to="/akgunlukhidro" className="link">
              Akgünlük Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/gulhidro" className="link">
              Gül Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/olmezcicek" className="link">
              Ölmez Çiçek Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/papatyahidro" className="link">
              Papatya Hidrosolü
            </Link>
          </li>
        </ul>
        <ul>
          <p id="g4">Güneş Yanıkları</p>
          <li>
            <Link to="/akgunlukhidro" className="link">
              Akgünlük Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/aynisafamase" className="link">
              Aynısafa Maserasyonu
            </Link>
          </li>
          <li>
            <Link to="/avokado" className="link">
              Avokado Yağı
            </Link>
          </li>
          <li>
            <Link to="/itir" className="link">
              Itır Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/jojoba" className="link">
              Jojoba Yağı
            </Link>
          </li>
          <li>
            <Link to="/lavantahidro   " className="link">
              Lavanta Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/narcekirdegi" className="link">
              Nar Çekirdeği Yağı
            </Link>
          </li>
          <li>
            <Link to="/olmezcicek" className="link">
              Ölmez Çiçek Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/papatyahidro" className="link">
              Papatya Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/tamanu" className="link">
              Tamanu Yağı
            </Link>
          </li>
        </ul>
        <ul>
          <p id="h1">Hava Temizleyici</p>
          <li>
            <Link to="/adacayi" className="link">
              Adaçayı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/ardic" className="link">
              Ardıç Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/akgunlukhidro" className="link">
              Akgünlük Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/camterebentin" className="link">
              Çam Terebentin Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/gulhidro" className="link">
              Gül Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/kusburnucekirdegi" className="link">
              Kuşburnu Çekirdeği Yağı
            </Link>
          </li>
          <li>
            <Link to="/limonkabugu" className="link">
              Limon Kabuğu Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/okaliptus" className="link">
              Okaliptus Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/paculi" className="link">
              Paçuli Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/portakalkabugu" className="link">
              Portakal Kabuğu Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/tarcin" className="link">
              Tarçın Yağı
            </Link>
          </li>
          <li>
            <Link to="/ylangylang" className="link">
              Ylang Ylang Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul>
          <p id="h2">Hemoroit</p>
          <li>
            <Link to="/biberiye" className="link">
              Biberiye Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/papatyahidro" className="link">
              Papatya Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/papatya" className="link">
              Papatya Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/servi" className="link">
              Servi Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul>
          <p id="h3"> Huzursuz Bağırsak Sendromu</p>
          <li>
            <Link to="/nane" className="link">
              Nane Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/nanehidro" className="link">
              Nane Hidrosolü
            </Link>
          </li>
        </ul>
        <ul>
          <p id="i1">İdrar Söktürücüler</p>
          <li>
            <Link to="/adacayi" className="link">
              Adaçayı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/ardic" className="link">
              Ardıç Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/mercankosk" className="link">
              Mercanköşk Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul>
          <p id="i2">İdrar Yolu Enfeksiyonları/İltihap Giderici</p>
          <li>
            <Link to="/adacayi" className="link">
              Adaçayı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/akgunlukhidro" className="link">
              Akgünlük Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/ardic" className="link">
              Ardıç Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/cayagaci" className="link">
              Çay Ağacı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/lavantahidro   " className="link">
              Lavanta Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/limonkabugu" className="link">
              Limon Kabuğu Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/limonotu" className="link">
              Limonotu Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/mersinhidro" className="link">
              Mersin Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/nanehidro" className="link">
              Nane Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/okaliptus" className="link">
              Okaliptus Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/olmezcicek" className="link">
              Ölmez Çiçek Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/palmarosa" className="link">
              Palmarosa Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/portakalkabugu" className="link">
              Portakal Kabuğu Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/nioli" className="link">
              Nioli Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/papatyahidro" className="link">
              Papatya Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/servi" className="link">
              Servi Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul>
          <p id="i3"> İshal</p>
          <li>
            <Link to="/tarcin" className="link">
              Tarçın Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul>
          <p id="i4">İştah Açıcı</p>
          <li>
            <Link to="/lavanta" className="link">
              Lavanta Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul>
          <p id="k1"> Kafa Kaşıntıları</p>
          <li>
            <Link to="/biberiyehidro" className="link">
              Biberiye Hidrosolü
            </Link>
          </li>
        </ul>
        <ul>
          <p id="k2">Kan Dolaşımı Düzenleyici</p>
          <li>
            <Link to="/adacayi" className="link">
              Adaçayı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/biberiyehidro" className="link">
              Biberiye Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/biberiye" className="link">
              Biberiye Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/lavanta" className="link">
              Lavanta Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/itir" className="link">
              Itır Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/limonkabugu" className="link">
              Limon Kabuğu Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/miskadacayi" className="link">
              Misk Adaçayı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/uzumcekirdegi" className="link">
              Üzüm Çekirdeği Yağı
            </Link>
          </li>
          <li>
            <Link to="/ylangylang" className="link">
              Ylang Ylang Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/zencefil" className="link">
              Zencefil Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul>
          <p id="k3">Kanama Durdurucu</p>
          <li>
            <Link to="/ceviz" className="link">
              Ceviz Yağı
            </Link>
          </li>
          <li>
            <Link to="/itirhidro" className="link">
              Itır Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/limonkabugu" className="link">
              Limon Kabuğu Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/olmezcicek" className="link">
              Ölmez Çiçek Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/peygambercicegihidro" className="link">
              Peygamber Çiçeği Hidrosolü
            </Link>
          </li>
        </ul>
        <ul>
          <p id="k4">Karın Ağrısı</p>
          <li>
            <Link to="/nanehidro" className="link">
              Nane Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/nane" className="link">
              Nane Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul>
          <p id="k5">Kas Ağrıları</p>
          <li>
            <Link to="/adacayi" className="link">
              Adaçayı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/ardic" className="link">
              Ardıç Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/biberiyehidro" className="link">
              Biberiye Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/biberiye" className="link">
              Biberiye Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/camterebentin" className="link">
              Çam Terebentin Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/elemi" className="link">
              Elemi Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/itir" className="link">
              Itır Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/kafur" className="link">
              Kafur Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/kekik" className="link">
              Kekik Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/lavanta" className="link">
              Lavanta Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/nane" className="link">
              Nane Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/neem" className="link">
              Neem Yağı
            </Link>
          </li>
          <li>
            <Link to="/nioli" className="link">
              Nioli Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/okaliptus" className="link">
              Okaliptus Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/palmarosa" className="link">
              Palmarosa Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/zencefil" className="link">
              Zencefil Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul>
          <p id="k6"> Kas Spazmı Çözücü</p>
          <li>
            <Link to="/adacayi" className="link">
              Adaçayı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/ardic" className="link">
              Ardıç Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/defne" className="link">
              Defne Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/nanehidro" className="link">
              Nane Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/okaliptus" className="link">
              Okaliptus Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/sarikantaronmase" className="link">
              Sarı Kantaron Maserasyonu
            </Link>
          </li>
          <li>
            <Link to="/papatyahidro" className="link">
              Papatya Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/zencefil" className="link">
              Zencefil Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul>
          <p id="k7">Kepek</p>
          <li>
            <Link to="/biberiye" className="link">
              Biberiye Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/camterebentin" className="link">
              Çam Terebentin Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/cayagaci" className="link">
              Çay Ağacı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/gulhidro" className="link">
              Gül Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/hindistancevizi" className="link">
              Hindistan Cevizi Yağı
            </Link>
          </li>
          <li>
            <Link to="/jojoba" className="link">
              Jojoba Yağı
            </Link>
          </li>
          <li>
            <Link to="/kekik" className="link">
              Kekik Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/kusburnucekirdegi" className="link">
              Kuşburnu Çekirdeği Yağı
            </Link>
          </li>
          <li>
            <Link to="/limonotu" className="link">
              Limonotu Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/miskadacayi" className="link">
              Misk Adaçayı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/paculi" className="link">
              Paçuli Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/palmarosa" className="link">
              Palmarosa Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/sedir" className="link">
              Sedir Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul>
          <p id="k8">Kırışıklık Giderici</p>
          <li>
            <Link to="/akgunlukhidro" className="link">
              Akgünlük Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/gulhidro" className="link">
              Gül Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/incircekirdegi" className="link">
              İncir Çekirdeği Yağı
            </Link>
          </li>
          <li>
            <Link to="/jojoba" className="link">
              Jojoba Yağı
            </Link>
          </li>
          <li>
            <Link to="/kayisicekirdegi" className="link">
              Kayısı Çekirdeği Yağı
            </Link>
          </li>
          <li>
            <Link to="/lavantahidro   " className="link">
              Lavanta Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/mur" className="link">
              Mür Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/nane" className="link">
              Nane Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/neem" className="link">
              Neem Yağı
            </Link>
          </li>
          <li>
            <Link to="/peygambercicegihidro" className="link">
              Peygamber Çiçeği Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/portakalkabugu" className="link">
              Portakal Kabuğu Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul>
          <p id="k9">Kolesterol Düşürücü</p>
          <li>
            <Link to="/argan" className="link">
              Argan Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/avokado" className="link">
              Avokado Yağı
            </Link>
          </li>
          <li>
            <Link to="/kabakcekirdegi" className="link">
              Kabak Çekirdeği Yağı
            </Link>
          </li>
          <li>
            <Link to="/kekikhidro" className="link">
              Kekik Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/kekik" className="link">
              Kekik Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/pirinckepegi" className="link">
              Pirinç Kepeği Yağı
            </Link>
          </li>
        </ul>
        <ul>
          <p id="k10">Kramp</p>
          <li>
            <Link to="/adacayi" className="link">
              Adaçayı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/gulhidro" className="link">
              Gül Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/miskadacayihidro" className="link">
              Misk Adaçayı Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/miskadacayi" className="link">
              Misk Adaçayı Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul>
          <p id="m1"> Menopoz Şikayetleri</p>
          <li>
            <Link to="/adacayi" className="link">
              Adaçayı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/gulhidro" className="link">
              Gül Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/kenevir" className="link">
              Kenevir Yağı
            </Link>
          </li>
          <li>
            <Link to="/miskadacayi" className="link">
              Misk Adaçayı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/peygambercicegihidro" className="link">
              Peygamber Çiçeği Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/pirinckepegi" className="link">
              Pirinç Kepeği Yağı
            </Link>
          </li>
        </ul>
        <ul>
          <p id="m2"> Mide Bulantısı ve İstifra</p>
          <li>
            <Link to="/adacayi" className="link">
              Adaçayı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/nanehidro" className="link">
              Nane Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/nane" className="link">
              Nane Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/papatyamase" className="link">
              Papatya Maserasyonu
            </Link>
          </li>
          <li>
            <Link to="/tarcin" className="link">
              Tarçın Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/zencefil" className="link">
              Zencefil Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul>
          <p id="m3">Migren</p>
          <li>
            <Link to="/biberiye" className="link">
              Biberiye Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/lavanta" className="link">
              Lavanta Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/nane" className="link">
              Nane Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/papatyahidro" className="link">
              Papatya Hidrosolü
            </Link>
          </li>
        </ul>
        <ul>
          <p id="m4">Mukus Kurutucu</p>
          <li>
            <Link to="/akgunlukhidro" className="link">
              Akgünlük Hidrosolü
            </Link>
          </li>
        </ul>
        <ul>
          <p id="o1">Öksürük</p>
          <li>
            <Link to="/adacayi" className="link">
              Adaçayı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/akgunlukhidro" className="link">
              Akgünlük Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/camterebentin" className="link">
              Çam Terebentin Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/cayagaci" className="link">
              Çay Ağacı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/elemi" className="link">
              Elemi Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/hindistancevizi" className="link">
              Hindistan Cevizi Yağı
            </Link>
          </li>
          <li>
            <Link to="/kafur" className="link">
              Kafur Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/karanfil" className="link">
              Karanfil Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/kekik" className="link">
              Kekik Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/kekikhidro" className="link">
              Kekik Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/mercankosk" className="link">
              Mercanköşk Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/mersinhidro" className="link">
              Mersin Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/mur" className="link">
              Mür Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/lavanta" className="link">
              Lavanta Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/nane" className="link">
              Nane Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/okaliptus" className="link">
              Okaliptus Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul>
          <p id="p1">Prostat Büyümesi</p>
          <li>
            <Link to="/kabakcekirdegi" className="link">
              Kabak Çekirdeği Yağı
            </Link>
          </li>
        </ul>
        <ul>
          <p id="r1"> Ruhsal Sakinleştirme (Yatıştırıcı)</p>
          <li>
            <Link to="/adacayi" className="link">
              Adaçayı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/bergamot" className="link">
              Bergamot Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/biberiye" className="link">
              Biberiye Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/gulhidro" className="link">
              Gül Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/itir" className="link">
              Itır Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/karanfil" className="link">
              Karanfil Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/papatyahidro" className="link">
              Papatya Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/papatyamase" className="link">
              Papatya Maserasyonu
            </Link>
          </li>
          <li>
            <Link to="/portakalkabugu" className="link">
              Portakal Kabuğu Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/servi" className="link">
              Servi Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/ylangylang" className="link">
              Ylang Ylang Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul>
          <p id="s1">Saç Bakımı</p>
          <li>
            <Link to="/ardic" className="link">
              Ardıç Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/biberiyehidro" className="link">
              Biberiye Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/biberiye" className="link">
              Biberiye Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/gulhidro" className="link">
              Gül Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/itir" className="link">
              Itır Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/incircekirdegi" className="link">
              İncir Çekirdeği Yağı
            </Link>
          </li>
          <li>
            <Link to="/kabakcekirdegi" className="link">
              Kabak Çekirdeği Yağı
            </Link>
          </li>
          <li>
            <Link to="/lavantahidro   " className="link">
              Lavanta Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/limonkabugu" className="link">
              Limon Kabuğu Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/limonotu" className="link">
              Limonotu Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/makademya" className="link">
              Makademya Yağı
            </Link>
          </li>
          <li>
            <Link to="/miskadacayi" className="link">
              Misk Adaçayı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/nanehidro" className="link">
              Nane Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/paculi" className="link">
              Paçuli Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/palmarosa" className="link">
              Palmarosa Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/peygambercicegihidro" className="link">
              Peygamber Çiçeği Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/ylangylang" className="link">
              Ylang Ylang Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul>
          <p id="s2">Saç Biti</p>
          <li>
            <Link to="/citronella" className="link">
              Citronella Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/karanfil" className="link">
              Karanfil Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/lavantahidro   " className="link">
              Lavanta Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/lavantahidro   " className="link">
              Lavanta Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/neem" className="link">
              Neem Yağı
            </Link>
          </li>
          <li>
            <Link to="/okaliptus" className="link">
              Okaliptus Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/palmarosa" className="link">
              Palmarosa Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/servi" className="link">
              Servi Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/tarcin" className="link">
              Tarçın Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul>
          <p id="s3">Saç Dökülmesi</p>
          <li>
            <Link to="/argan" className="link">
              Argan Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/biberiye" className="link">
              Biberiye Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/cayagaci" className="link">
              Çay ağacı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/miskadacayi" className="link">
              Misk Adaçayı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/limonkabugu" className="link">
              Limon Kabuğu Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/sedir" className="link">
              Sedir Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/susam" className="link">
              Susam Yağı
            </Link>
          </li>
        </ul>
        <ul>
          <p id="s4">Sebum Oranı (Cilt Yağlılığı) Dengeleme</p>
          <li>
            <Link to="/adacayi" className="link">
              Adaçayı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/limonkabugu" className="link">
              Limon Kabuğu Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/paculi" className="link">
              Paçuli Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/servi" className="link">
              Servi Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/ylangylang" className="link">
              Ylang Ylang Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul>
          <p id="s5"> Sedef</p>
          <li>
            <Link to="/akgunlukhidro" className="link">
              Akgünlük Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/avokado" className="link">
              Avokado Yağı
            </Link>
          </li>
          <li>
            <Link to="/cayagaci" className="link">
              Çay Ağacı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/hindistancevizi" className="link">
              Hindistan Cevizi Yağı
            </Link>
          </li>
          <li>
            <Link to="/jojoba" className="link">
              Jojoba Yağı
            </Link>
          </li>
          <li>
            <Link to="/kekik" className="link">
              Kekik Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/mercankosk" className="link">
              Mercanköşk Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/mersinhidro" className="link">
              Mersin Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/nanehidro" className="link">
              Nane Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/nane" className="link">
              Nane Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/narcekirdegi" className="link">
              Nar Çekirdeği Yağı
            </Link>
          </li>
          <li>
            <Link to="/neem" className="link">
              Neem Yağı
            </Link>
          </li>
          <li>
            <Link to="/okaliptus" className="link">
              Okaliptus Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/papatyamase" className="link">
              Papatya Maserasyonu
            </Link>
          </li>
          <li>
            <Link to="/tamanu" className="link">
              Tamanu Yağı
            </Link>
          </li>
        </ul>
        <ul>
          <p id="s6">Selülit</p>
          <li>
            <Link to="/adacayi" className="link">
              Adaçayı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/ardic" className="link">
              Ardıç Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/kayisicekirdegi" className="link">
              Kayısı Çekirdeği Yağı
            </Link>
          </li>
          <li>
            <Link to="/limonkabugu" className="link">
              Limon Kabuğu Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul>
          <p id="s7">Sigara Kokucu Giderici</p>
          <li>
            <Link to="/adacayi" className="link">
              Adaçayı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/camterebentin" className="link">
              Çam Terebentin Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/limonkabugu" className="link">
              Limon Kabuğu Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul>
          <p id="s8">Soğuk Algınlığı</p>
          <li>
            <Link to="/adacayi" className="link">
              Adaçayı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/biberiye" className="link">
              Biberiye Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/cayagaci" className="link">
              Çay Ağacı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/karanfil" className="link">
              Karanfil Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/kekik" className="link">
              Kekik Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/lavanta" className="link">
              Lavanta Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/limonkabugu" className="link">
              Limon Kabuğu Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/nane" className="link">
              Nane Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/okaliptus" className="link">
              Okaliptus Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/papatyamase" className="link">
              Papatya Maserasyonu
            </Link>
          </li>
          <li>
            <Link to="/tarcin" className="link">
              Tarçın Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/zencefil" className="link">
              Zencefil Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul>
          <p id="s9">Solunum Rahatlatıcı</p>
          <li>
            <Link to="/akgunlukhidro" className="link">
              Akgünlük Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/defne" className="link">
              Defne Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/mersinhidro" className="link">
              Mersin Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/nane" className="link">
              Nane Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/okaliptus" className="link">
              Okaliptus Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/palmarosa" className="link">
              Palmarosa Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul>
          <p id="s10">Stres- Bunalım Destek</p>
          <li>
            <Link to="/adacayi" className="link">
              Adaçayı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/ardic" className="link">
              Ardıç Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/akgunlukhidro" className="link">
              Akgünlük Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/biberiye" className="link">
              Biberiye Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/defne" className="link">
              Defne Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/elemi" className="link">
              Elemi Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/gulhidro" className="link">
              Gül Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/itir" className="link">
              Itır Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/karanfil" className="link">
              Karanfil Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/lavanta" className="link">
              Lavanta Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/limonkabugu" className="link">
              Limon Kabuğu Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/mercankosk" className="link">
              Mercanköşk Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/mur" className="link">
              Mür Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/nanehidro" className="link">
              Nane Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/nane" className="link">
              Nane Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/okaliptus" className="link">
              Okaliptus Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/paculi" className="link">
              Paçuli Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/palmarosa" className="link">
              Palmarosa Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/papatyahidro" className="link">
              Papatya Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/peygambercicegihidro" className="link">
              Peygamber Çiçeği Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/portakalkabugu" className="link">
              Portakal Kabuğu Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/sedir" className="link">
              Sedir Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/tarcin" className="link">
              Tarçın Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/ylangylang" className="link">
              Ylang Ylang Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/zencefil" className="link">
              Zencefil Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul>
          <p id="t1">Tansiyon Düşürücü</p>
          <li>
            <Link to="/kabakcekirdegi" className="link">
              Kabak Çekirdeği Yağı
            </Link>
          </li>
          <li>
            <Link to="/kekikhidro" className="link">
              Kekik Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/ketentohumu" className="link">
              Keten Tohumu Yağı
            </Link>
          </li>
          <li>
            <Link to="/limonkabugu" className="link">
              Limon Kabuğu Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/mercankosk" className="link">
              Mercanköşk Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul>
          <p id="t2">Tırnak Mantarı</p>
          <li>
            <Link to="/cayagaci" className="link">
              Çay Ağacı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/karanfil" className="link">
              Karanfil Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul>
          <p id="t3">Tonikler</p>
          <li>
            <Link to="/lavantahidro   " className="link">
              Lavanta Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/mersinhidro" className="link">
              Mersin Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/nanehidro" className="link">
              Nane Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/olmezcicek" className="link">
              Ölmez Çiçek Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/peygambercicegihidro" className="link">
              Peygamber Çiçeği Hidrosolü
            </Link>
          </li>
        </ul>
        <ul>
          <p id="u1">Uçuk</p>
          <li>
            <Link to="/limonkabugu" className="link">
              Limon Kabuğu Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/palmarosa" className="link">
              Palmarosa Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/servi" className="link">
              Servi Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/tamanu" className="link">
              Tamanu Yağı
            </Link>
          </li>
        </ul>
        <ul>
          <p id="u2">Uykusuzluk</p>
          <li>
            <Link to="/elemi" className="link">
              Elemi Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/kafur" className="link">
              Kafur Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/lavanta" className="link">
              Lavanta Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/limonkabugu" className="link">
              Limon Kabuğu Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/mercankosk" className="link">
              Mercanköşk Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/miskadacayi" className="link">
              Misk Adaçayı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/mur" className="link">
              Mür Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/paculi" className="link">
              Paçuli Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/papatyahidro" className="link">
              Papatya Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/portakalkabugu" className="link">
              Portakal Kabuğu Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/sedir" className="link">
              Sedir Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/ylangylang" className="link">
              Ylang Ylang Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul>
          <p id="u3">Uyuz</p>
          <li>
            <Link to="/citronella" className="link">
              Citronella Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/karanfil" className="link">
              Karanfil Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/neem" className="link">
              Neem Yağı
            </Link>
          </li>
          <li>
            <Link to="/tarcin" className="link">
              Tarçın Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul>
          <p id="u4">Ürtiker</p>
          <li>
            <Link to="/kafur" className="link">
              Kafur Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/limonkabugu" className="link">
              Limon Kabuğu Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/portakalkabugu" className="link">
              Portakal Kabuğu Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul>
          <p id="v1">Varis</p>
          <li>
            <Link to="/adacayi" className="link">
              Adaçayı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/biberiye" className="link">
              Biberiye Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/limonkabugu" className="link">
              Limon Kabuğu Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/mersinhidro" className="link">
              Mersin Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/papatyahidro" className="link">
              Papatya Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/servi" className="link">
              Servi Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul>
          <p id="y1">Yanık İyileştirmeye Yardımcı</p>
          <li>
            <Link to="/elemi" className="link">
              Elemi Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/itir" className="link">
              Itır Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/karanfil" className="link">
              Karanfil Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/lavanta" className="link">
              Lavanta Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/nioli" className="link">
              Nioli Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/okaliptus" className="link">
              Okaliptus Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/olmezcicek" className="link">
              Ölmez Çiçek Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/papatyahidro" className="link">
              Papatya Hidrosolü
            </Link>
          </li>
        </ul>
        <ul>
          <p id="y2">Yara İyileştirmeye Yardımcı</p>
          <li>
            <Link to="/ardic" className="link">
              Ardıç Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/aynisafamase" className="link">
              Aynısafa Maserasyonu
            </Link>
          </li>
          <li>
            <Link to="/biberiye" className="link">
              Biberiye Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/ceviz" className="link">
              Ceviz Yağı
            </Link>
          </li>
          <li>
            <Link to="/cayagaci" className="link">
              Çay Ağacı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/elemi" className="link">
              Elemi Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/kafur" className="link">
              Kafur Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/kusburnucekirdegi" className="link">
              Kuşburnu Çekirdeği Yağı
            </Link>
          </li>
          <li>
            <Link to="/lavantahidro   " className="link">
              Lavanta Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/limonkabugu" className="link">
              Limon Kabuğu Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/mur" className="link">
              Mür Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/nanehidro" className="link">
              Nane Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/nioli" className="link">
              Nioli Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/okaliptus" className="link">
              Okaliptus Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/olmezcicek" className="link">
              Ölmez Çiçek Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/palmarosa" className="link">
              Palmarosa Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/sarikantaronmase" className="link">
              Sarı Kantaron Maserasyonu
            </Link>
          </li>
        </ul>
        <ul>
          <p id="y3">Yorgunluk Giderici</p>
          <li>
            <Link to="/adacayi" className="link">
              Adaçayı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/ardic" className="link">
              Ardıç Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/akgunlukhidro" className="link">
              Akgünlük Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/biberiye" className="link">
              Biberiye Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/defne" className="link">
              Defne Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/karanfil" className="link">
              Karanfil Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/limonkabugu" className="link">
              Limon Kabuğu Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/melisa" className="link">
              Melisa Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/mercankosk" className="link">
              Mercanköşk Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/miskadacayi" className="link">
              Misk Adaçayı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/nanehidro" className="link">
              Nane Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/okaliptus" className="link">
              Okaliptus Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/palmarosa" className="link">
              Palmarosa Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/papatyahidro" className="link">
              Papatya Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/peygambercicegihidro" className="link">
              Peygamber Çiçeği Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/portakalkabugu" className="link">
              Portakal Kabuğu Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/vetiver" className="link">
              Vetiver Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/ylangylang" className="link">
              Ylang Ylang Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/zencefil" className="link">
              Zencefil Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul>
          <p id="y4">Yüz Temizleme</p>
          <li>
            <Link to="/akgunlukhidro" className="link">
              Akgünlük Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/ardic" className="link">
              Ardıç Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/cayagaci" className="link">
              Çay Ağacı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/kusburnu" className="link">
              Kuşburnu Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/limonkabugu" className="link">
              Limon Kabuğu Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/limonotu" className="link">
              Limonotu Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/mersinhidro" className="link">
              Mersin Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/nanehidro" className="link">
              Nane Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/okaliptus" className="link">
              Okaliptus Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/palmarosa" className="link">
              Palmarosa Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/papatyahidro" className="link">
              Papatya Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/peygambercicegihidro" className="link">
              Peygamber Çiçeği Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/portakalkabugu" className="link">
              Portakal Kabuğu Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/ylangylang" className="link">
              Ylang Ylang Uçucu YAğı
            </Link>
          </li>
        </ul>
        <ul>
          <p id="z1"> Zihin Açıcı</p>
          <li>
            <Link to="/ardic" className="link">
              Ardıç Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/biberiye" className="link">
              Biberiye Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/limonkabugu" className="link">
              Limon Kabuğu Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/nane" className="link">
              Nane Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/okaliptus" className="link">
              Okaliptus Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/portakalkabugu" className="link">
              Portakal Kabuğu Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/vetiver" className="link">
              Vetiver Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul>
          <p id="z2">Zona</p>
          <li>
            <Link to="/kafur" className="link">
              Kafur Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/tamanu" className="link">
              Tamanu Yağı
            </Link>
          </li>
        </ul>
      </ol>
    </div>
  );
}

export default OilList;
