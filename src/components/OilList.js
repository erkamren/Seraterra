import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import data from "../pages/data.json";

function OilList() {
  return (
    <div className="max-w-full mx-auto mt-16">
      <ol className="list-decimal pl-5">
        <ul className="p-6">
          <p className="text-2xl mb-2" id="a1">
            Adet Dönemi Ağrıları
          </p>
          <li>
            <Link to="/adacayi" className="hover:text-green-500">
              Adaçayı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/civanpercemi" className="hover:text-green-500">
              Civanperçemi Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/kafur" className="hover:text-green-500">
              Kafur Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/maydanoz" className="hover:text-green-500">
              Maydanoz Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/mercankosk" className="hover:text-green-500">
              Mercanköşk Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/mur" className="hover:text-green-500">
              Mür Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/olmezcicek" className="hover:text-green-500">
              Ölmez Çiçek Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/tarcin" className="hover:text-green-500">
              Tarçın Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul className="p-6">
          <p className="text-2xl mb-2" id="a2">
            Ağız Dezenfektanı
          </p>
          <li>
            <Link to="/nanehidro" className="hover:text-green-500">
              Nane Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/bergamot" className="hover:text-green-500">
              Bergamot Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/cayagaci" className="hover:text-green-500">
              Çay ağacı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/nane" className="hover:text-green-500">
              Nane Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/kekik" className="hover:text-green-500">
              Kekik Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/mur" className="hover:text-green-500">
              Mür Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/papatyahidro" className="hover:text-green-500">
              Papatya Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/adacayihidro" className="hover:text-green-500">
              Adaçayı Hidrosolü
            </Link>
          </li>
        </ul>

        <ul className="p-6">
          <p className="text-2xl mb-2" id="a3">
            Ağız Kokusu Giderici
          </p>
          <li>
            <Link to="/akgunlukhidro" className="hover:text-green-500">
              Akgünlük Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/anasonhidro" className="hover:text-green-500">
              Anason Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/nane" className="hover:text-green-500">
              Nane Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/karanfil" className="hover:text-green-500">
              Karanfil Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/maydanoz" className="hover:text-green-500">
              Maydanoz Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/okaliptus" className="hover:text-green-500">
              Okaliptus Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul className="p-6">
          <p className="text-2xl mb-2" id="a4">
            Ağız Yaraları ve İltihapları
          </p>
          <li>
            <Link to="/adacayi" className="hover:text-green-500">
              Adaçayı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/akgunlukhidro" className="hover:text-green-500">
              Akgünlük Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/anason" className="hover:text-green-500">
              Anason Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/aynisafamase" className="hover:text-green-500">
              Aynısafa Maserasyonu
            </Link>
          </li>
          <li>
            <Link to="/bergamot" className="hover:text-green-500">
              Bergamot Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/karanfil" className="hover:text-green-500">
              Karanfil Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/mur" className="hover:text-green-500">
              Mür Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/paculi" className="hover:text-green-500">
              Paçuli Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/papatyahidro" className="hover:text-green-500">
              Papatya Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/camterebentin" className="hover:text-green-500">
              Çam Terebentin Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul className="p-6">
          <p className="text-2xl mb-2" id="a5">
            {" "}
            Ağrı Kesici
          </p>
          <li>
            <Link to="/akgunlukhidro" className="hover:text-green-500">
              Akgünlük Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/biberiye" className="hover:text-green-500">
              Biberiye Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/karanfil" className="hover:text-green-500">
              Karanfil Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/lavanta" className="hover:text-green-500">
              Lavanta Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/mur" className="hover:text-green-500">
              Mür Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/nane" className="hover:text-green-500">
              Nane Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/okaliptus" className="hover:text-green-500">
              Okaliptus Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/olmezcicek" className="hover:text-green-500">
              Ölmez Çiçek Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/papatyamase" className="hover:text-green-500">
              Papatya Maserasyonu
            </Link>
          </li>
          <li>
            <Link to="/portakalkabugu" className="hover:text-green-500">
              Portakal Kabuğu Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/ylangylang" className="hover:text-green-500">
              Ylang Ylang Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/zencefil" className="hover:text-green-500">
              Zencefil Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul className="p-6">
          <p className="text-2xl mb-2" id="a6">
            Akne
          </p>
          <li>
            <Link to="/adacayi" className="hover:text-green-500">
              Adaçayı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/ardic" className="hover:text-green-500">
              Ardıç Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/argan" className="hover:text-green-500">
              Argan Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/biberiyehidro" className="hover:text-green-500">
              Biberiye Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/ceviz" className="hover:text-green-500">
              Ceviz Yağı
            </Link>
          </li>
          <li>
            <Link to="/cayagaci" className="hover:text-green-500">
              Çay Ağacı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/incircekirdegi" className="hover:text-green-500">
              İncir Çekirdeği Yağı
            </Link>
          </li>
          <li>
            <Link to="/jojoba" className="hover:text-green-500">
              Jojoba Yağı
            </Link>
          </li>
          <li>
            <Link to="/kekik" className="hover:text-green-500">
              Kekik Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/kusburnucekirdegi" className="hover:text-green-500">
              Kuşburnu Çekirdeği Yağı
            </Link>
          </li>
          <li>
            <Link to="/limonkabugu" className="hover:text-green-500">
              Limon Kabuğu Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/mercankosk" className="hover:text-green-500">
              Mercanköşk Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/mersinhidro" className="hover:text-green-500">
              Mersin Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/neroli" className="hover:text-green-500">
              Neroli Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/nioli" className="hover:text-green-500">
              Nioli Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/okaliptus" className="hover:text-green-500">
              Okaliptus Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/paculi" className="hover:text-green-500">
              Paçuli Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/palmarosa" className="hover:text-green-500">
              Palmarosa Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/portakalkabugu" className="hover:text-green-500">
              Portakal Kabuğu Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/papatyahidro" className="hover:text-green-500">
              Papatya Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/papatyamase" className="hover:text-green-500">
              Papatya Maserasyonu
            </Link>
          </li>
          <li>
            <Link to="/servi" className="hover:text-green-500">
              Servi Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/ylangylang" className="hover:text-green-500">
              Ylang Ylang Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul className="p-6">
          <p className="text-2xl mb-2" id="a7">
            Antimikrobiyal
          </p>
          <li>
            <Link to="/adacayi" className="hover:text-green-500">
              Adaçayı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/ardic" className="hover:text-green-500">
              Ardıç Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/akgunlukhidro" className="hover:text-green-500">
              Akgünlük Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/biberiyehidro" className="hover:text-green-500">
              Biberiye Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/cayagaci" className="hover:text-green-500">
              Çay Ağacı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/corekotu" className="hover:text-green-500">
              Çörekotu Yağı
            </Link>
          </li>
          <li>
            <Link to="/defne" className="hover:text-green-500">
              Defne Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/elemi" className="hover:text-green-500">
              Elemi Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/gulhidro" className="hover:text-green-500">
              Gül Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/itir" className="hover:text-green-500">
              Itır Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/karanfil" className="hover:text-green-500">
              Karanfil Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/kekik" className="hover:text-green-500">
              Kekik Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/kusburnucekirdegi" className="hover:text-green-500">
              Kuşburnu Çekirdeği Yağı
            </Link>
          </li>
          <li>
            <Link to="/lavanta" className="hover:text-green-500">
              Lavanta Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/limonkabugu" className="hover:text-green-500">
              Limon Kabuğu Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/mersinhidro" className="hover:text-green-500">
              Mersin Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/nanehidro" className="hover:text-green-500">
              Nane Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/okaliptus" className="hover:text-green-500">
              Okaliptus Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/palmarosa" className="hover:text-green-500">
              Palmarosa Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/papatyahidro" className="hover:text-green-500">
              Papatya Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/portakalkabugu" className="hover:text-green-500">
              Portakal Kabuğu Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/servi" className="hover:text-green-500">
              Servi Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/tarcin" className="hover:text-green-500">
              Tarçın Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/ylangylang" className="hover:text-green-500">
              Ylang Ylang Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/zencefil" className="hover:text-green-500">
              Zencefil Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul className="p-6">
          <p className="text-2xl mb-2" id="a7">
            Antioksidanlar
          </p>
          <li>
            <Link to="/biberiyehidro" className="hover:text-green-500">
              Biberiye Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/incircekirdegi" className="hover:text-green-500">
              İncir Çekirdeği Yağı
            </Link>
          </li>
          <li>
            <Link to="/kekik" className="hover:text-green-500">
              Kekik Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/portakalkabugu" className="hover:text-green-500">
              Portakal Kabuğu Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/narcekirdegi" className="hover:text-green-500">
              Nar Çekirdeği Yağı
            </Link>
          </li>
        </ul>
        <ul className="p-6">
          <p className="text-2xl mb-2" id="a8">
            Antiseptikler
          </p>
          <li>
            <Link to="/ardic" className="hover:text-green-500">
              Ardıç Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/gulhidro" className="hover:text-green-500">
              Gül Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/karanfil" className="hover:text-green-500">
              Karanfil Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/kekikhidro" className="hover:text-green-500">
              Kekik Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/kekik" className="hover:text-green-500">
              Kekik Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/paculi" className="hover:text-green-500">
              Paçuli Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/palmarosa" className="hover:text-green-500">
              Palmarosa Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/tarcin" className="hover:text-green-500">
              Tarçın Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul className="p-6">
          <p className="text-2xl mb-2" id="a10">
            Antiviraller
          </p>

          <li>
            <Link to="/kafur" className="hover:text-green-500">
              Kafur Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/palmarosa" className="hover:text-green-500">
              Palmarosa Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul className="p-6">
          <p className="text-2xl mb-2" id="a11">
            {" "}
            Astım ve Bronşit
          </p>
          <li>
            <Link to="/adacayi" className="hover:text-green-500">
              Adaçayı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/akgunlukhidro" className="hover:text-green-500">
              Akgünlük Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/kekikhidro" className="hover:text-green-500">
              Kekik Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/limonkabugu" className="hover:text-green-500">
              Limon Kabuğu Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/okaliptus" className="hover:text-green-500">
              Okaliptus Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/camterebentin" className="hover:text-green-500">
              Çam Terebentin Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul className="p-6">
          <p className="text-2xl mb-2" id="a12">
            Ateş Düşürücü
          </p>
          <li>
            <Link to="/okaliptus" className="hover:text-green-500">
              Okaliptus Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/nane" className="hover:text-green-500">
              Nane Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul className="p-6">
          <p className="text-2xl mb-2" id="a13">
            Ayak Bakımı
          </p>
          <li>
            <Link to="/biberiyehidro" className="hover:text-green-500">
              Biberiye Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/cayagaci" className="hover:text-green-500">
              Çay Ağacı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/nanehidro" className="hover:text-green-500">
              Nane Hidrosolü
            </Link>
          </li>
        </ul>
        <ul className="p-6">
          <p className="text-2xl mb-2" id="a14">
            Ayak Kokusu Önleyici
          </p>
          <li>
            <Link to="/cayagaci" className="hover:text-green-500">
              Çay Ağacı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/mersinhidro" className="hover:text-green-500">
              Mersin Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/nanehidro" className="hover:text-green-500">
              Nane Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/papatya" className="hover:text-green-500">
              Papatya Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul className="p-6">
          <p className="text-2xl mb-2" id="b1">
            Bağırsak Spazmı Giderici
          </p>
          <li>
            <Link to="/adacayi" className="hover:text-green-500">
              Adaçayı Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul className="p-6">
          <p className="text-2xl mb-2" id="b2">
            Bağışıklık Destekleyici
          </p>
          <li>
            <Link to="/ciyatohumu" className="hover:text-green-500">
              Çiya Tohumu Yağı
            </Link>
          </li>
          <li>
            <Link to="/corekotu" className="hover:text-green-500">
              Çörekotu Yağı
            </Link>
          </li>
          <li>
            <Link to="/kafur" className="hover:text-green-500">
              Kafur Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/mur" className="hover:text-green-500">
              Mür Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul className="p-6">
          <p className="text-2xl mb-2" id="b3">
            {" "}
            Bakteri ve Mantar Enfeksiyonları
          </p>
          <li>
            <Link to="/adacayi" className="hover:text-green-500">
              Adaçayı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/kafur" className="hover:text-green-500">
              Kafur Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/karanfil" className="hover:text-green-500">
              Karanfil Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/kekikhidro" className="hover:text-green-500">
              Kekik Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/kekik" className="hover:text-green-500">
              Kekik Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/lavantahidro   " className="hover:text-green-500">
              Lavanta Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/mersinhidro" className="hover:text-green-500">
              Mersin Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/mercankosk" className="hover:text-green-500">
              Mercanköşk Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/paculi" className="hover:text-green-500">
              Paçuli Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/papatyahidro" className="hover:text-green-500">
              Papatya Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/servi" className="hover:text-green-500">
              Servi Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/susam" className="hover:text-green-500">
              Susam Yağı
            </Link>
          </li>
        </ul>
        <ul className="p-6">
          <p className="text-2xl mb-2" id="b4">
            Balgam Söktürücüler
          </p>
          <li>
            <Link to="/adacayi" className="hover:text-green-500">
              Adaçayı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/akgunlukhidro" className="hover:text-green-500">
              Akgünlük Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/kafur" className="hover:text-green-500">
              Kafur Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/lavanta" className="hover:text-green-500">
              Lavanta Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/mercankosk" className="hover:text-green-500">
              Mercanköşk Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/mersinhidro" className="hover:text-green-500">
              Mersin Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/mur" className="hover:text-green-500">
              Mür Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/okaliptus" className="hover:text-green-500">
              Okaliptus Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul className="p-6">
          <p className="text-2xl mb-2" id="b5">
            Bebek Pişikleri
          </p>
          <li>
            <Link to="/aynisafamase" className="hover:text-green-500">
              Aynısafa Maserasyonu
            </Link>
          </li>
          <li>
            <Link to="/cayagaci" className="hover:text-green-500">
              Çay Ağacı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/lavantahidro   " className="hover:text-green-500">
              Lavanta Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/papatyahidro" className="hover:text-green-500">
              Papatya Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/papatyamase" className="hover:text-green-500">
              Papatya Maserasyonu
            </Link>
          </li>
        </ul>
        <ul className="p-6">
          <p className="text-2xl mb-2" id="b6">
            Boğaz Ağrısı
          </p>
          <li>
            <Link to="/adacayi" className="hover:text-green-500">
              Adaçayı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/limonkabugu" className="hover:text-green-500">
              Limon Kabuğu Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/okaliptus" className="hover:text-green-500">
              Okaliptus Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/mersinhidro" className="hover:text-green-500">
              Mersin Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/mur" className="hover:text-green-500">
              Mür Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul className="p-6">
          <p className="text-2xl mb-2" id="b7">
            Böcek/Sinek Kovucu
          </p>
          <li>
            <Link to="/defne" className="hover:text-green-500">
              Defne Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/sedir" className="hover:text-green-500">
              Sedir Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/kafur" className="hover:text-green-500">
              Kafur Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/limonotu" className="hover:text-green-500">
              Limonotu Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/nanehidro" className="hover:text-green-500">
              Nane Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/nane" className="hover:text-green-500">
              Nane Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/okaliptus" className="hover:text-green-500">
              Okaliptus Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/palmarosa" className="hover:text-green-500">
              Palmarosa Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/servi" className="hover:text-green-500">
              Servi Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul className="p-6">
          <p className="text-2xl mb-2" id="b8">
            {" "}
            Böcek Sokmaları
          </p>
          <li>
            <Link to="/biberiye" className="hover:text-green-500">
              Biberiye Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/cayagaci" className="hover:text-green-500">
              Çay Ağacı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/karanfil" className="hover:text-green-500">
              Karanfil Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/kekikhidro" className="hover:text-green-500">
              Kekik Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/kekik" className="hover:text-green-500">
              Kekik Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/limonotu" className="hover:text-green-500">
              Limonotu Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/mercankosk" className="hover:text-green-500">
              Mercanköşk Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/nioli" className="hover:text-green-500">
              Nioli Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/lavantahidro   " className="hover:text-green-500">
              Lavanta Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/nane" className="hover:text-green-500">
              Nane Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/olmezcicek" className="hover:text-green-500">
              Ölmez Çiçek Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/portakalkabugu" className="hover:text-green-500">
              Portakal Kabuğu Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/tamanu" className="hover:text-green-500">
              Tamanu Yağı
            </Link>
          </li>
          <li>
            <Link to="/ylangylang" className="hover:text-green-500">
              Ylang Ylang Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul className="p-6">
          <p className="text-2xl mb-2" id="b9">
            {" "}
            Burun Tıkanıklığı
          </p>
          <li>
            <Link to="/biberiyehidro" className="hover:text-green-500">
              Biberiye Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/kafur" className="hover:text-green-500">
              Kafur Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/mercankosk" className="hover:text-green-500">
              Mercanköşk Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/mersinhidro" className="hover:text-green-500">
              Mersin Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/nane" className="hover:text-green-500">
              Nane Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul className="p-6">
          <p className="text-2xl mb-2" id="c1">
            Cilt Alerjileri
          </p>
          <li>
            <Link to="/itir" className="hover:text-green-500">
              Itır Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul className="p-6">
          <p className="text-2xl mb-2" id="c2">
            Cilt Besleyici
          </p>
          <li>
            <Link to="/akgunlukhidro" className="hover:text-green-500">
              Akgünlük Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/aspir" className="hover:text-green-500">
              Aspir Yağı
            </Link>
          </li>
          <li>
            <Link to="/gulhidro" className="hover:text-green-500">
              Gül Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/hindistancevizi" className="hover:text-green-500">
              Hindistan Cevizi Yağı
            </Link>
          </li>
          <li>
            <Link to="/jojoba" className="hover:text-green-500">
              Jojoba Yağı
            </Link>
          </li>
          <li>
            <Link to="/kabakcekirdegi" className="hover:text-green-500">
              Kabak Çekirdeği Yağı
            </Link>
          </li>
          <li>
            <Link to="/kakao" className="hover:text-green-500">
              Kakao Yağı
            </Link>
          </li>
          <li>
            <Link to="/kayisicekirdegi" className="hover:text-green-500">
              Kayısı Çekirdeği Yağı
            </Link>
          </li>
          <li>
            <Link to="/makademya" className="hover:text-green-500">
              Makademya Yağı
            </Link>
          </li>
          <li>
            <Link to="/mersinhidro" className="hover:text-green-500">
              Mersin Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/lavantahidro   " className="hover:text-green-500">
              Lavanta Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/palmarosa" className="hover:text-green-500">
              Palmarosa Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/papatyamase" className="hover:text-green-500">
              Papatya Maserasyonu
            </Link>
          </li>
          <li>
            <Link to="/servi" className="hover:text-green-500">
              Servi Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul className="p-6">
          <p className="text-2xl mb-2" id="c3">
            Cilt Çatlakları
          </p>
          <li>
            <Link to="/akgunlukhidro" className="hover:text-green-500">
              Akgünlük Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/badem" className="hover:text-green-500">
              Badem Yağı
            </Link>
          </li>
          <li>
            <Link to="/hindistancevizi" className="hover:text-green-500">
              Hindistan Cevizi Yağı
            </Link>
          </li>
          <li>
            <Link to="/incircekirdegi" className="hover:text-green-500">
              İncir Çekirdeği Yağı
            </Link>
          </li>
          <li>
            <Link to="/jojoba" className="hover:text-green-500">
              Jojoba Yağı
            </Link>
          </li>
          <li>
            <Link to="/kakao" className="hover:text-green-500">
              Kakao Yağı
            </Link>
          </li>
          <li>
            <Link to="/kusburnucekirdegi" className="hover:text-green-500">
              Kuşburnu Çekirdeği Yağı
            </Link>
          </li>
          <li>
            <Link to="/kantaron" className="hover:text-green-500">
              Kantaron Yağı
            </Link>
          </li>
          <li>
            <Link to="/paculi" className="hover:text-green-500">
              Paçuli Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/pirinckepegi" className="hover:text-green-500">
              Pirinç Kepeği Yağı
            </Link>
          </li>
        </ul>
        <ul className="p-6">
          <p className="text-2xl mb-2" id="c4">
            {" "}
            Cilt Gençleştirici (Anti-Aging)
          </p>
          <li>
            <Link to="/adacayi" className="hover:text-green-500">
              Adaçayı Yağı
            </Link>
          </li>
          <li>
            <Link to="/akgunlukhidro" className="hover:text-green-500">
              Akgünlük Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/elemi" className="hover:text-green-500">
              Elemi Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/gulhidro" className="hover:text-green-500">
              Gül Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/havuctohumu" className="hover:text-green-500">
              Havuç Tohumu Yağı
            </Link>
          </li>
          <li>
            <Link to="/kusburnucekirdegi" className="hover:text-green-500">
              Kuşburnu Çekirdeği Yağı
            </Link>
          </li>
          <li>
            <Link to="/narcekirdegi" className="hover:text-green-500">
              Nar Çekirdeği Yağı
            </Link>
          </li>
          <li>
            <Link to="/olmezcicek" className="hover:text-green-500">
              Ölmez Çiçek Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/paculi" className="hover:text-green-500">
              Paçuli Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/palmarosa" className="hover:text-green-500">
              Palmarosa Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/pirinckepegi" className="hover:text-green-500">
              Pirinç Kepeği Yağı
            </Link>
          </li>
          <li>
            <Link to="/zencefil" className="hover:text-green-500">
              Zencefil Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul className="p-6">
          <p className="text-2xl mb-2" id="c5">
            {" "}
            Cilt Hafif Yaraları İyileştirici
          </p>
          <li>
            <Link to="/adacayi" className="hover:text-green-500">
              Adaçayı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/ardic" className="hover:text-green-500">
              Ardıç Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/akgunlukhidro" className="hover:text-green-500">
              Akgünlük Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/cayagaci" className="hover:text-green-500">
              Çay ağacı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/defne" className="hover:text-green-500">
              Defne Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/badem" className="hover:text-green-500">
              Badem Yağı
            </Link>
          </li>
          <li>
            <Link to="/gulhidro" className="hover:text-green-500">
              Gül Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/itirhidro" className="hover:text-green-500">
              Itır Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/karanfil" className="hover:text-green-500">
              Karanfil Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/kakao" className="hover:text-green-500">
              Kakao Yağı
            </Link>
          </li>
          <li>
            <Link to="/kekikhidro" className="hover:text-green-500">
              Kekik Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/kusburnucekirdegi" className="hover:text-green-500">
              Kuşburnu Çekirdeği Yağı
            </Link>
          </li>
          <li>
            <Link to="/lavantahidro   " className="hover:text-green-500">
              Lavanta Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/mur" className="hover:text-green-500">
              Mür Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/nane" className="hover:text-green-500">
              Nane Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/okaliptus" className="hover:text-green-500">
              Okaliptus Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/olmezcicek" className="hover:text-green-500">
              Ölmez Çiçek Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/paculi" className="hover:text-green-500">
              Paçuli Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/palmarosa" className="hover:text-green-500">
              Palmarosa Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/papatyahidro" className="hover:text-green-500">
              Papatya Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/peygambercicegihidro" className="hover:text-green-500">
              Peygamber Çiçeği Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/sarikantaron" className="hover:text-green-500">
              Sarı Kantaron Yağı
            </Link>
          </li>
          <li>
            <Link to="/servi" className="hover:text-green-500">
              Servi Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul className="p-6">
          <p className="text-2xl mb-2" id="c6">
            Cilt Kaşınmaları
          </p>
          <li>
            <Link to="/adacayi" className="hover:text-green-500">
              Adaçayı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/biberiyehidro" className="hover:text-green-500">
              Biberiye Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/biberiye" className="hover:text-green-500">
              Biberiye Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/gulhidro" className="hover:text-green-500">
              Gül Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/karanfil" className="hover:text-green-500">
              Karanfil Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/kekikhidro" className="hover:text-green-500">
              Kekik Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/kekik" className="hover:text-green-500">
              Kekik Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/kusburnucekirdegi" className="hover:text-green-500">
              Kuşburnu Çekirdeği Yağı
            </Link>
          </li>
          <li>
            <Link to="/mercankosk" className="hover:text-green-500">
              Mercanköşk Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/lavantahidro   " className="hover:text-green-500">
              Lavanta Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/nanehidro" className="hover:text-green-500">
              Nane Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/nane" className="hover:text-green-500">
              Nane Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/papatyahidro" className="hover:text-green-500">
              Papatya Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/ylangylang" className="hover:text-green-500">
              Ylang Ylang Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul className="p-6">
          <p className="text-2xl mb-2" id="c7">
            Cilt Kuruluğu
          </p>
          <li>
            <Link to="/akgunlukhidro" className="hover:text-green-500">
              Akgünlük Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/camterebentin" className="hover:text-green-500">
              Çam Terebentin Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/ciyatohumu" className="hover:text-green-500">
              Çiya Tohumu Yağı
            </Link>
          </li>
          <li>
            <Link to="/hindistancevizi" className="hover:text-green-500">
              Hindistan Cevizi Yağı
            </Link>
          </li>
          <li>
            <Link to="/paculi" className="hover:text-green-500">
              Paçuli Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul className="p-6">
          <p className="text-2xl mb-2" id="c8">
            Cilt Lekeleri
          </p>
          <li>
            <Link to="/adacayi" className="hover:text-green-500">
              Adaçayı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/akgunlukhidro" className="hover:text-green-500">
              Akgünlük Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/ciyatohumu" className="hover:text-green-500">
              Çiya Tohumu Yağı
            </Link>
          </li>
          <li>
            <Link to="/incircekirdegi" className="hover:text-green-500">
              İncir Çekirdeği Yağı
            </Link>
          </li>
          <li>
            <Link to="/kusburnucekirdegi" className="hover:text-green-500">
              Kuşburnu Çekirdeği Yağı
            </Link>
          </li>
          <li>
            <Link to="/limonkabugu" className="hover:text-green-500">
              Limon Kabuğu Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/narcekirdegi" className="hover:text-green-500">
              Nar Çekirdeği Yağı
            </Link>
          </li>
          <li>
            <Link to="/olmezcicek" className="hover:text-green-500">
              Ölmez Çiçek Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/pirinckepegi" className="hover:text-green-500">
              Pirinç Kepeği Yağı
            </Link>
          </li>
          <li>
            <Link to="/portakalkabugu" className="hover:text-green-500">
              Portakal Kabuğu Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/susam" className="hover:text-green-500">
              Susam Yağı
            </Link>
          </li>
          <li>
            <Link to="/tamanu" className="hover:text-green-500">
              Tamanu Yağı
            </Link>
          </li>
        </ul>
        <ul className="p-6">
          <p className="text-2xl mb-2" id="c9">
            {" "}
            Cilt Nemlendirici
          </p>
          <li>
            <Link to="/adacayi" className="hover:text-green-500">
              Adaçayı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/ardic" className="hover:text-green-500">
              Ardıç Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/akgunlukhidro" className="hover:text-green-500">
              Akgünlük Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/badem" className="hover:text-green-500">
              Badem Yağı
            </Link>
          </li>
          <li>
            <Link to="/defne" className="hover:text-green-500">
              Defne Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/itirhidro" className="hover:text-green-500">
              Itır Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/incircekirdegi" className="hover:text-green-500">
              İncir Çekirdeği Yağı
            </Link>
          </li>
          <li>
            <Link to="/jojoba" className="hover:text-green-500">
              Jojoba Yağı
            </Link>
          </li>
          <li>
            <Link to="/kakao" className="hover:text-green-500">
              Kakao Yağı
            </Link>
          </li>
          <li>
            <Link to="/kusburnucekirdegi" className="hover:text-green-500">
              Kuşburnu Çekirdeği Yağı
            </Link>
          </li>
          <li>
            <Link to="/limonkabugu" className="hover:text-green-500">
              Limon Kabuğu Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/makademya" className="hover:text-green-500">
              Makademya Yağı
            </Link>
          </li>
          <li>
            <Link to="/mur" className="hover:text-green-500">
              Mür Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/palmarosa" className="hover:text-green-500">
              Palmarosa Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/portakalkabugu" className="hover:text-green-500">
              Portakal Kabuğu Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/papatya" className="hover:text-green-500">
              Papatya Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/uzumcekirdegi" className="hover:text-green-500">
              Üzüm Çekirdeği Yağı
            </Link>
          </li>
        </ul>
        <ul className="p-6">
          <p className="text-2xl mb-2" id="c10">
            Cilt Sıkılaştırma
          </p>
          <li>
            <Link to="/adacayi" className="hover:text-green-500">
              Adaçayı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/ardic" className="hover:text-green-500">
              Ardıç Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/akgunluk" className="hover:text-green-500">
              Akgünlük Yağı
            </Link>
          </li>
          <li>
            <Link to="/biberiyehidro" className="hover:text-green-500">
              Biberiye Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/gulhidro" className="hover:text-green-500">
              Gül Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/kusburnucekirdegi" className="hover:text-green-500">
              Kuşburnu Çekirdeği Yağı
            </Link>
          </li>
          <li>
            <Link to="/limonkabugu" className="hover:text-green-500">
              Limon Kabuğu Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/makademya" className="hover:text-green-500">
              Makademya Yağı
            </Link>
          </li>
          <li>
            <Link to="/papatyamase" className="hover:text-green-500">
              Papatya Maserasyonu
            </Link>
          </li>
          <li>
            <Link to="/peygambercicegihidro" className="hover:text-green-500">
              Peygamber Çiçeği Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/portakalkabugu" className="hover:text-green-500">
              Portakal Kabuğu Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/sedir" className="hover:text-green-500">
              Sedir Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul className="p-6">
          <p className="text-2xl mb-2" id="c11">
            Çıban İyileştirici
          </p>
          <li>
            <Link to="/adacayi" className="hover:text-green-500">
              Adaçayı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/cayagaci" className="hover:text-green-500">
              Çay Ağacı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/hint" className="hover:text-green-500">
              Hint Yağı
            </Link>
          </li>
          <li>
            <Link to="/limonkabugu" className="hover:text-green-500">
              Limon Kabuğu Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/mersinhidro" className="hover:text-green-500">
              Mersin Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/mur" className="hover:text-green-500">
              Mür Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/neem" className="hover:text-green-500">
              Neem Yağı
            </Link>
          </li>
        </ul>
        <ul className="p-6">
          <p className="text-2xl mb-2" id="c12">
            Çikolata Kisti
          </p>
          <li>
            <Link to="/olmezcicek" className="hover:text-green-500">
              Ölmez Çiçek Hidrosolü
            </Link>
          </li>
        </ul>
        <ul className="p-6">
          <p className="text-2xl mb-2" id="d1">
            Demans
          </p>
          <li>
            <Link to="/ciyatohumu" className="hover:text-green-500">
              Çiya Tohumu Yağı
            </Link>
          </li>
        </ul>
        <ul className="p-6">
          <p className="text-2xl mb-2" id="d2">
            Diş Ağrısı
          </p>
          <li>
            <Link to="/karanfil" className="hover:text-green-500">
              Karanfil Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/mercankosk" className="hover:text-green-500">
              Mercanköşk Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/misketlimonu" className="hover:text-green-500">
              Misket Limonu Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul className="p-6">
          <p className="text-2xl mb-2" id="d3">
            Diş Eti Hastalıkları
          </p>
          <li>
            <Link to="/adacayi" className="hover:text-green-500">
              Adaçayı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/akgunlukhidro" className="hover:text-green-500">
              Akgünlük Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/hindistancevizi" className="hover:text-green-500">
              Hindistan Cevizi Yağı
            </Link>
          </li>
          <li>
            <Link to="/kekikhidro" className="hover:text-green-500">
              Kekik Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/mur" className="hover:text-green-500">
              Mür Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/okaliptus" className="hover:text-green-500">
              Okaliptus Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/olmezcicek" className="hover:text-green-500">
              Ölmez Çiçek Hidrosolü
            </Link>
          </li>
        </ul>
        <ul className="p-6">
          <p className="text-2xl mb-2" id="d4">
            Diş Plağı Önleyici
          </p>
          <li>
            <Link to="/hindistancevizi" className="hover:text-green-500">
              Hindistan Cevizi Yağı
            </Link>
          </li>
          <li>
            <Link to="/mersinhidro" className="hover:text-green-500">
              Mersin Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/okaliptus" className="hover:text-green-500">
              Okaliptus Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul className="p-6">
          <p className="text-2xl mb-2" id="d5">
            {" "}
            Diyabet Yaraları
          </p>
          <li>
            <Link to="/tamanu" className="hover:text-green-500">
              Tamanu Yağı
            </Link>
          </li>
        </ul>
        <ul className="p-6">
          <p className="text-2xl mb-2" id="e1">
            Egzama
          </p>
          <li>
            <Link to="/adacayi" className="hover:text-green-500">
              Adaçayı Yağı
            </Link>
          </li>
          <li>
            <Link to="/ardic" className="hover:text-green-500">
              Ardıç Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/avokado" className="hover:text-green-500">
              Avokado Yağı
            </Link>
          </li>
          <li>
            <Link to="/akgunlukhidro" className="hover:text-green-500">
              Akgünlük Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/cayagaci" className="hover:text-green-500">
              Çay Ağacı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/gulhidro" className="hover:text-green-500">
              Gül Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/hindistancevizi" className="hover:text-green-500">
              Hindistan Cevizi Yağı
            </Link>
          </li>
          <li>
            <Link to="/itir" className="hover:text-green-500">
              Itır Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/jojoba" className="hover:text-green-500">
              Jojoba Yağı
            </Link>
          </li>
          <li>
            <Link to="/kekikhidro" className="hover:text-green-500">
              Kekik Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/kekik" className="hover:text-green-500">
              Kekik Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/kusburnucekirdegi" className="hover:text-green-500">
              Kuşburnu Çekirdeği Yağı
            </Link>
          </li>
          <li>
            <Link to="/mercankosk" className="hover:text-green-500">
              Mercanköşk Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/mur" className="hover:text-green-500">
              Mür Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/narcekirdegi" className="hover:text-green-500">
              Nar Çekirdeği Yağı
            </Link>
          </li>
          <li>
            <Link to="/lavanta" className="hover:text-green-500">
              Lavanta Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/nane" className="hover:text-green-500">
              Nane Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/okaliptus" className="hover:text-green-500">
              Okaliptus Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/olmezcicek" className="hover:text-green-500">
              Ölmez Çiçek Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/paculi" className="hover:text-green-500">
              Paçuli Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/palmarosa" className="hover:text-green-500">
              Palmarosa Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/papatyahidro" className="hover:text-green-500">
              Papatya Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/papatyamase" className="hover:text-green-500">
              Papatya Maserasyonu
            </Link>
          </li>
          <li>
            <Link to="/sarikantaronmase" className="hover:text-green-500">
              Sarı Kantaron Maserasyonu
            </Link>
          </li>
          <li>
            <Link to="/sedir" className="hover:text-green-500">
              Sedir Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/ylangylang" className="hover:text-green-500">
              Ylang Ylang Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul className="p-6">
          <p className="text-2xl mb-2" id="e2">
            Eklem Ağrıları
          </p>
          <li>
            <Link to="/adacayi" className="hover:text-green-500">
              Adaçayı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/ardic" className="hover:text-green-500">
              Ardıç Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/biberiyehidro" className="hover:text-green-500">
              Biberiye Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/biberiye" className="hover:text-green-500">
              Biberiye Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/camterebentin" className="hover:text-green-500">
              Çam Terebentin Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/itir" className="hover:text-green-500">
              Itır Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/kekik" className="hover:text-green-500">
              Kekik Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/mercankosk" className="hover:text-green-500">
              Mercanköşk Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/nane" className="hover:text-green-500">
              Nane Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/nioli" className="hover:text-green-500">
              Nioli Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/okaliptus" className="hover:text-green-500">
              Okaliptus Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/palmarosa" className="hover:text-green-500">
              Palmarosa Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/susam" className="hover:text-green-500">
              Susam Yağı
            </Link>
          </li>
          <li>
            <Link to="/tamanu" className="hover:text-green-500">
              Tamanu Yağı
            </Link>
          </li>
        </ul>
        <ul className="p-6">
          <p className="text-2xl mb-2" id="e3">
            Eklem İltihapları (Osteoartrit)
          </p>
          <li>
            <Link to="/akgunlukhidro" className="hover:text-green-500">
              Akgünlük Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/avokado" className="hover:text-green-500">
              Avokado Yağı
            </Link>
          </li>
          <li>
            <Link to="/biberiyehidro" className="hover:text-green-500">
              Biberiye Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/mercankosk" className="hover:text-green-500">
              Mercanköşk Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/misketlimonu" className="hover:text-green-500">
              Misket Limonu Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/nioli" className="hover:text-green-500">
              Nioli Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/okaliptus" className="hover:text-green-500">
              Okaliptus Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/palmarosa" className="hover:text-green-500">
              Palmarosa Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/papatyamase" className="hover:text-green-500">
              Papatya Maserasyonu
            </Link>
          </li>
          <li>
            <Link to="/sarikantaronmase" className="hover:text-green-500">
              Sarı Kantaron Maserasyonu
            </Link>
          </li>
        </ul>
        <ul className="p-6">
          <p className="text-2xl mb-2" id="e4">
            Enfeksiyon Giderici
          </p>
          <li>
            <Link to="/adacayi" className="hover:text-green-500">
              Adaçayı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/ardic" className="hover:text-green-500">
              Ardıç Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/akgunlukhidro" className="hover:text-green-500">
              Akgünlük Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/defne" className="hover:text-green-500">
              Defne Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/elemi" className="hover:text-green-500">
              Elemi Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/havuctohumu" className="hover:text-green-500">
              Havuç Tohumu Yağı
            </Link>
          </li>
          <li>
            <Link to="/incircekirdegi" className="hover:text-green-500">
              İncir Çekirdeği Yağı
            </Link>
          </li>
          <li>
            <Link to="/karanfil" className="hover:text-green-500">
              Karanfil Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/kekik" className="hover:text-green-500">
              Kekik Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/kusburnucekirdegi" className="hover:text-green-500">
              Kuşburnu Çekirdeği Yağı
            </Link>
          </li>
          <li>
            <Link to="/lavantahidro   " className="hover:text-green-500">
              Lavanta Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/limonkabugu" className="hover:text-green-500">
              Limon Kabuğu Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/mersinhidro" className="hover:text-green-500">
              Mersin Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/okaliptus" className="hover:text-green-500">
              Okaliptus Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/palmarosa" className="hover:text-green-500">
              Palmarosa Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/papatyahidro" className="hover:text-green-500">
              Papatya Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/portakalkabugu" className="hover:text-green-500">
              Portakal Kabuğu Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/servi" className="hover:text-green-500">
              Servi Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/ylangylang" className="hover:text-green-500">
              Ylang Ylang Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul className="p-6">
          <p className="text-2xl mb-2" id="g1">
            Gaz Sancısı
          </p>
          <li>
            <Link to="/adacayi" className="hover:text-green-500">
              Adaçayı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/ardic" className="hover:text-green-500">
              Ardıç Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/nanehidro" className="hover:text-green-500">
              Nane Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/nane" className="hover:text-green-500">
              Nane Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/karanfil" className="hover:text-green-500">
              Karanfil Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/miskadacayi" className="hover:text-green-500">
              Misk Adaçayı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/tarcin" className="hover:text-green-500">
              Tarçın Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/zencefil" className="hover:text-green-500">
              Zencefil Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul className="p-6">
          <p className="text-2xl mb-2" id="g2">
            Göz Sağlığı
          </p>
          <li>
            <Link to="/avokado" className="hover:text-green-500">
              Avokado Yağı
            </Link>
          </li>
          <li>
            <Link to="/gulhidro" className="hover:text-green-500">
              Gül Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/miskadacayi" className="hover:text-green-500">
              Misk Adaçayı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/mersinhidro" className="hover:text-green-500">
              Mersin Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/papatyahidro" className="hover:text-green-500">
              Papatya Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/peygambercicegihidro" className="hover:text-green-500">
              Peygamber Çiçeği Hidrosolü
            </Link>
          </li>
        </ul>
        <ul className="p-6">
          <p className="text-2xl mb-2" id="g3">
            Gül Hastalığı
          </p>
          <li>
            <Link to="/akgunlukhidro" className="hover:text-green-500">
              Akgünlük Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/gulhidro" className="hover:text-green-500">
              Gül Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/olmezcicek" className="hover:text-green-500">
              Ölmez Çiçek Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/papatyahidro" className="hover:text-green-500">
              Papatya Hidrosolü
            </Link>
          </li>
        </ul>
        <ul className="p-6">
          <p className="text-2xl mb-2" id="g4">
            Güneş Yanıkları
          </p>
          <li>
            <Link to="/akgunlukhidro" className="hover:text-green-500">
              Akgünlük Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/aynisafamase" className="hover:text-green-500">
              Aynısafa Maserasyonu
            </Link>
          </li>
          <li>
            <Link to="/avokado" className="hover:text-green-500">
              Avokado Yağı
            </Link>
          </li>
          <li>
            <Link to="/itir" className="hover:text-green-500">
              Itır Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/jojoba" className="hover:text-green-500">
              Jojoba Yağı
            </Link>
          </li>
          <li>
            <Link to="/lavantahidro   " className="hover:text-green-500">
              Lavanta Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/narcekirdegi" className="hover:text-green-500">
              Nar Çekirdeği Yağı
            </Link>
          </li>
          <li>
            <Link to="/olmezcicek" className="hover:text-green-500">
              Ölmez Çiçek Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/papatyahidro" className="hover:text-green-500">
              Papatya Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/tamanu" className="hover:text-green-500">
              Tamanu Yağı
            </Link>
          </li>
        </ul>
        <ul className="p-6">
          <p className="text-2xl mb-2" id="h1">
            Hava Temizleyici
          </p>
          <li>
            <Link to="/adacayi" className="hover:text-green-500">
              Adaçayı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/ardic" className="hover:text-green-500">
              Ardıç Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/akgunlukhidro" className="hover:text-green-500">
              Akgünlük Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/camterebentin" className="hover:text-green-500">
              Çam Terebentin Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/gulhidro" className="hover:text-green-500">
              Gül Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/kusburnucekirdegi" className="hover:text-green-500">
              Kuşburnu Çekirdeği Yağı
            </Link>
          </li>
          <li>
            <Link to="/limonkabugu" className="hover:text-green-500">
              Limon Kabuğu Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/okaliptus" className="hover:text-green-500">
              Okaliptus Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/paculi" className="hover:text-green-500">
              Paçuli Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/portakalkabugu" className="hover:text-green-500">
              Portakal Kabuğu Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/tarcin" className="hover:text-green-500">
              Tarçın Yağı
            </Link>
          </li>
          <li>
            <Link to="/ylangylang" className="hover:text-green-500">
              Ylang Ylang Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul className="p-6">
          <p className="text-2xl mb-2" id="h2">
            Hemoroit
          </p>
          <li>
            <Link to="/biberiye" className="hover:text-green-500">
              Biberiye Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/papatyahidro" className="hover:text-green-500">
              Papatya Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/papatya" className="hover:text-green-500">
              Papatya Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/servi" className="hover:text-green-500">
              Servi Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul className="p-6">
          <p className="text-2xl mb-2" id="h3">
            {" "}
            Huzursuz Bağırsak Sendromu
          </p>
          <li>
            <Link to="/nane" className="hover:text-green-500">
              Nane Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/nanehidro" className="hover:text-green-500">
              Nane Hidrosolü
            </Link>
          </li>
        </ul>
        <ul className="p-6">
          <p className="text-2xl mb-2" id="i1">
            İdrar Söktürücüler
          </p>
          <li>
            <Link to="/adacayi" className="hover:text-green-500">
              Adaçayı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/ardic" className="hover:text-green-500">
              Ardıç Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/mercankosk" className="hover:text-green-500">
              Mercanköşk Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul className="p-6">
          <p className="text-2xl mb-2" id="i2">
            İdrar Yolu Enfeksiyonları/İltihap Giderici
          </p>
          <li>
            <Link to="/adacayi" className="hover:text-green-500">
              Adaçayı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/akgunlukhidro" className="hover:text-green-500">
              Akgünlük Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/ardic" className="hover:text-green-500">
              Ardıç Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/cayagaci" className="hover:text-green-500">
              Çay Ağacı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/lavantahidro   " className="hover:text-green-500">
              Lavanta Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/limonkabugu" className="hover:text-green-500">
              Limon Kabuğu Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/limonotu" className="hover:text-green-500">
              Limonotu Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/mersinhidro" className="hover:text-green-500">
              Mersin Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/nanehidro" className="hover:text-green-500">
              Nane Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/okaliptus" className="hover:text-green-500">
              Okaliptus Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/olmezcicek" className="hover:text-green-500">
              Ölmez Çiçek Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/palmarosa" className="hover:text-green-500">
              Palmarosa Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/portakalkabugu" className="hover:text-green-500">
              Portakal Kabuğu Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/nioli" className="hover:text-green-500">
              Nioli Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/papatyahidro" className="hover:text-green-500">
              Papatya Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/servi" className="hover:text-green-500">
              Servi Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul className="p-6">
          <p className="text-2xl mb-2" id="i3">
            {" "}
            İshal
          </p>
          <li>
            <Link to="/tarcin" className="hover:text-green-500">
              Tarçın Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul className="p-6">
          <p className="text-2xl mb-2" id="i4">
            İştah Açıcı
          </p>
          <li>
            <Link to="/lavanta" className="hover:text-green-500">
              Lavanta Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul className="p-6">
          <p className="text-2xl mb-2" id="k1">
            {" "}
            Kafa Kaşıntıları
          </p>
          <li>
            <Link to="/biberiyehidro" className="hover:text-green-500">
              Biberiye Hidrosolü
            </Link>
          </li>
        </ul>
        <ul className="p-6">
          <p className="text-2xl mb-2" id="k2">
            Kan Dolaşımı Düzenleyici
          </p>
          <li>
            <Link to="/adacayi" className="hover:text-green-500">
              Adaçayı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/biberiyehidro" className="hover:text-green-500">
              Biberiye Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/biberiye" className="hover:text-green-500">
              Biberiye Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/lavanta" className="hover:text-green-500">
              Lavanta Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/itir" className="hover:text-green-500">
              Itır Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/limonkabugu" className="hover:text-green-500">
              Limon Kabuğu Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/miskadacayi" className="hover:text-green-500">
              Misk Adaçayı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/uzumcekirdegi" className="hover:text-green-500">
              Üzüm Çekirdeği Yağı
            </Link>
          </li>
          <li>
            <Link to="/ylangylang" className="hover:text-green-500">
              Ylang Ylang Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/zencefil" className="hover:text-green-500">
              Zencefil Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul className="p-6">
          <p className="text-2xl mb-2" id="k3">
            Kanama Durdurucu
          </p>
          <li>
            <Link to="/ceviz" className="hover:text-green-500">
              Ceviz Yağı
            </Link>
          </li>
          <li>
            <Link to="/itirhidro" className="hover:text-green-500">
              Itır Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/limonkabugu" className="hover:text-green-500">
              Limon Kabuğu Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/olmezcicek" className="hover:text-green-500">
              Ölmez Çiçek Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/peygambercicegihidro" className="hover:text-green-500">
              Peygamber Çiçeği Hidrosolü
            </Link>
          </li>
        </ul>
        <ul className="p-6">
          <p className="text-2xl mb-2" id="k4">
            Karın Ağrısı
          </p>
          <li>
            <Link to="/nanehidro" className="hover:text-green-500">
              Nane Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/nane" className="hover:text-green-500">
              Nane Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul className="p-6">
          <p className="text-2xl mb-2" id="k5">
            Kas Ağrıları
          </p>
          <li>
            <Link to="/adacayi" className="hover:text-green-500">
              Adaçayı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/ardic" className="hover:text-green-500">
              Ardıç Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/biberiyehidro" className="hover:text-green-500">
              Biberiye Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/biberiye" className="hover:text-green-500">
              Biberiye Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/camterebentin" className="hover:text-green-500">
              Çam Terebentin Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/elemi" className="hover:text-green-500">
              Elemi Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/itir" className="hover:text-green-500">
              Itır Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/kafur" className="hover:text-green-500">
              Kafur Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/kekik" className="hover:text-green-500">
              Kekik Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/lavanta" className="hover:text-green-500">
              Lavanta Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/nane" className="hover:text-green-500">
              Nane Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/neem" className="hover:text-green-500">
              Neem Yağı
            </Link>
          </li>
          <li>
            <Link to="/nioli" className="hover:text-green-500">
              Nioli Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/okaliptus" className="hover:text-green-500">
              Okaliptus Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/palmarosa" className="hover:text-green-500">
              Palmarosa Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/zencefil" className="hover:text-green-500">
              Zencefil Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul className="p-6">
          <p className="text-2xl mb-2" id="k6">
            {" "}
            Kas Spazmı Çözücü
          </p>
          <li>
            <Link to="/adacayi" className="hover:text-green-500">
              Adaçayı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/ardic" className="hover:text-green-500">
              Ardıç Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/defne" className="hover:text-green-500">
              Defne Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/nanehidro" className="hover:text-green-500">
              Nane Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/okaliptus" className="hover:text-green-500">
              Okaliptus Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/sarikantaronmase" className="hover:text-green-500">
              Sarı Kantaron Maserasyonu
            </Link>
          </li>
          <li>
            <Link to="/papatyahidro" className="hover:text-green-500">
              Papatya Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/zencefil" className="hover:text-green-500">
              Zencefil Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul className="p-6">
          <p className="text-2xl mb-2" id="k7">
            Kepek
          </p>
          <li>
            <Link to="/biberiye" className="hover:text-green-500">
              Biberiye Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/camterebentin" className="hover:text-green-500">
              Çam Terebentin Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/cayagaci" className="hover:text-green-500">
              Çay Ağacı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/gulhidro" className="hover:text-green-500">
              Gül Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/hindistancevizi" className="hover:text-green-500">
              Hindistan Cevizi Yağı
            </Link>
          </li>
          <li>
            <Link to="/jojoba" className="hover:text-green-500">
              Jojoba Yağı
            </Link>
          </li>
          <li>
            <Link to="/kekik" className="hover:text-green-500">
              Kekik Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/kusburnucekirdegi" className="hover:text-green-500">
              Kuşburnu Çekirdeği Yağı
            </Link>
          </li>
          <li>
            <Link to="/limonotu" className="hover:text-green-500">
              Limonotu Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/miskadacayi" className="hover:text-green-500">
              Misk Adaçayı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/paculi" className="hover:text-green-500">
              Paçuli Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/palmarosa" className="hover:text-green-500">
              Palmarosa Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/sedir" className="hover:text-green-500">
              Sedir Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul className="p-6">
          <p className="text-2xl mb-2" id="k8">
            Kırışıklık Giderici
          </p>
          <li>
            <Link to="/akgunlukhidro" className="hover:text-green-500">
              Akgünlük Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/gulhidro" className="hover:text-green-500">
              Gül Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/incircekirdegi" className="hover:text-green-500">
              İncir Çekirdeği Yağı
            </Link>
          </li>
          <li>
            <Link to="/jojoba" className="hover:text-green-500">
              Jojoba Yağı
            </Link>
          </li>
          <li>
            <Link to="/kayisicekirdegi" className="hover:text-green-500">
              Kayısı Çekirdeği Yağı
            </Link>
          </li>
          <li>
            <Link to="/lavantahidro   " className="hover:text-green-500">
              Lavanta Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/mur" className="hover:text-green-500">
              Mür Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/nane" className="hover:text-green-500">
              Nane Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/neem" className="hover:text-green-500">
              Neem Yağı
            </Link>
          </li>
          <li>
            <Link to="/peygambercicegihidro" className="hover:text-green-500">
              Peygamber Çiçeği Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/portakalkabugu" className="hover:text-green-500">
              Portakal Kabuğu Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul className="p-6">
          <p className="text-2xl mb-2" id="k9">
            Kolesterol Düşürücü
          </p>
          <li>
            <Link to="/argan" className="hover:text-green-500">
              Argan Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/avokado" className="hover:text-green-500">
              Avokado Yağı
            </Link>
          </li>
          <li>
            <Link to="/kabakcekirdegi" className="hover:text-green-500">
              Kabak Çekirdeği Yağı
            </Link>
          </li>
          <li>
            <Link to="/kekikhidro" className="hover:text-green-500">
              Kekik Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/kekik" className="hover:text-green-500">
              Kekik Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/pirinckepegi" className="hover:text-green-500">
              Pirinç Kepeği Yağı
            </Link>
          </li>
        </ul>
        <ul className="p-6">
          <p className="text-2xl mb-2" id="k10">
            Kramp
          </p>
          <li>
            <Link to="/adacayi" className="hover:text-green-500">
              Adaçayı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/gulhidro" className="hover:text-green-500">
              Gül Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/miskadacayihidro" className="hover:text-green-500">
              Misk Adaçayı Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/miskadacayi" className="hover:text-green-500">
              Misk Adaçayı Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul className="p-6">
          <p className="text-2xl mb-2" id="m1">
            {" "}
            Menopoz Şikayetleri
          </p>
          <li>
            <Link to="/adacayi" className="hover:text-green-500">
              Adaçayı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/gulhidro" className="hover:text-green-500">
              Gül Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/kenevir" className="hover:text-green-500">
              Kenevir Yağı
            </Link>
          </li>
          <li>
            <Link to="/miskadacayi" className="hover:text-green-500">
              Misk Adaçayı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/peygambercicegihidro" className="hover:text-green-500">
              Peygamber Çiçeği Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/pirinckepegi" className="hover:text-green-500">
              Pirinç Kepeği Yağı
            </Link>
          </li>
        </ul>
        <ul className="p-6">
          <p className="text-2xl mb-2" id="m2">
            {" "}
            Mide Bulantısı ve İstifra
          </p>
          <li>
            <Link to="/adacayi" className="hover:text-green-500">
              Adaçayı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/nanehidro" className="hover:text-green-500">
              Nane Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/nane" className="hover:text-green-500">
              Nane Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/papatyamase" className="hover:text-green-500">
              Papatya Maserasyonu
            </Link>
          </li>
          <li>
            <Link to="/tarcin" className="hover:text-green-500">
              Tarçın Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/zencefil" className="hover:text-green-500">
              Zencefil Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul className="p-6">
          <p className="text-2xl mb-2" id="m3">
            Migren
          </p>
          <li>
            <Link to="/biberiye" className="hover:text-green-500">
              Biberiye Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/lavanta" className="hover:text-green-500">
              Lavanta Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/nane" className="hover:text-green-500">
              Nane Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/papatyahidro" className="hover:text-green-500">
              Papatya Hidrosolü
            </Link>
          </li>
        </ul>
        <ul className="p-6">
          <p className="text-2xl mb-2" id="m4">
            Mukus Kurutucu
          </p>
          <li>
            <Link to="/akgunlukhidro" className="hover:text-green-500">
              Akgünlük Hidrosolü
            </Link>
          </li>
        </ul>
        <ul className="p-6">
          <p className="text-2xl mb-2" id="o1">
            Öksürük
          </p>
          <li>
            <Link to="/adacayi" className="hover:text-green-500">
              Adaçayı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/akgunlukhidro" className="hover:text-green-500">
              Akgünlük Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/camterebentin" className="hover:text-green-500">
              Çam Terebentin Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/cayagaci" className="hover:text-green-500">
              Çay Ağacı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/elemi" className="hover:text-green-500">
              Elemi Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/hindistancevizi" className="hover:text-green-500">
              Hindistan Cevizi Yağı
            </Link>
          </li>
          <li>
            <Link to="/kafur" className="hover:text-green-500">
              Kafur Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/karanfil" className="hover:text-green-500">
              Karanfil Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/kekik" className="hover:text-green-500">
              Kekik Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/kekikhidro" className="hover:text-green-500">
              Kekik Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/mercankosk" className="hover:text-green-500">
              Mercanköşk Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/mersinhidro" className="hover:text-green-500">
              Mersin Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/mur" className="hover:text-green-500">
              Mür Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/lavanta" className="hover:text-green-500">
              Lavanta Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/nane" className="hover:text-green-500">
              Nane Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/okaliptus" className="hover:text-green-500">
              Okaliptus Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul className="p-6">
          <p className="text-2xl mb-2" id="p1">
            Prostat Büyümesi
          </p>
          <li>
            <Link to="/kabakcekirdegi" className="hover:text-green-500">
              Kabak Çekirdeği Yağı
            </Link>
          </li>
        </ul>
        <ul className="p-6">
          <p className="text-2xl mb-2" id="r1">
            {" "}
            Ruhsal Sakinleştirme (Yatıştırıcı)
          </p>
          <li>
            <Link to="/adacayi" className="hover:text-green-500">
              Adaçayı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/bergamot" className="hover:text-green-500">
              Bergamot Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/biberiye" className="hover:text-green-500">
              Biberiye Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/gulhidro" className="hover:text-green-500">
              Gül Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/itir" className="hover:text-green-500">
              Itır Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/karanfil" className="hover:text-green-500">
              Karanfil Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/papatyahidro" className="hover:text-green-500">
              Papatya Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/papatyamase" className="hover:text-green-500">
              Papatya Maserasyonu
            </Link>
          </li>
          <li>
            <Link to="/portakalkabugu" className="hover:text-green-500">
              Portakal Kabuğu Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/servi" className="hover:text-green-500">
              Servi Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/ylangylang" className="hover:text-green-500">
              Ylang Ylang Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul className="p-6">
          <p className="text-2xl mb-2" id="s1">
            Saç Bakımı
          </p>
          <li>
            <Link to="/ardic" className="hover:text-green-500">
              Ardıç Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/biberiyehidro" className="hover:text-green-500">
              Biberiye Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/biberiye" className="hover:text-green-500">
              Biberiye Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/gulhidro" className="hover:text-green-500">
              Gül Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/itir" className="hover:text-green-500">
              Itır Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/incircekirdegi" className="hover:text-green-500">
              İncir Çekirdeği Yağı
            </Link>
          </li>
          <li>
            <Link to="/kabakcekirdegi" className="hover:text-green-500">
              Kabak Çekirdeği Yağı
            </Link>
          </li>
          <li>
            <Link to="/lavantahidro   " className="hover:text-green-500">
              Lavanta Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/limonkabugu" className="hover:text-green-500">
              Limon Kabuğu Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/limonotu" className="hover:text-green-500">
              Limonotu Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/makademya" className="hover:text-green-500">
              Makademya Yağı
            </Link>
          </li>
          <li>
            <Link to="/miskadacayi" className="hover:text-green-500">
              Misk Adaçayı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/nanehidro" className="hover:text-green-500">
              Nane Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/paculi" className="hover:text-green-500">
              Paçuli Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/palmarosa" className="hover:text-green-500">
              Palmarosa Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/peygambercicegihidro" className="hover:text-green-500">
              Peygamber Çiçeği Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/ylangylang" className="hover:text-green-500">
              Ylang Ylang Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul className="p-6">
          <p className="text-2xl mb-2" id="s2">
            Saç Biti
          </p>
          <li>
            <Link to="/citronella" className="hover:text-green-500">
              Citronella Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/karanfil" className="hover:text-green-500">
              Karanfil Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/lavantahidro   " className="hover:text-green-500">
              Lavanta Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/lavantahidro   " className="hover:text-green-500">
              Lavanta Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/neem" className="hover:text-green-500">
              Neem Yağı
            </Link>
          </li>
          <li>
            <Link to="/okaliptus" className="hover:text-green-500">
              Okaliptus Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/palmarosa" className="hover:text-green-500">
              Palmarosa Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/servi" className="hover:text-green-500">
              Servi Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/tarcin" className="hover:text-green-500">
              Tarçın Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul className="p-6">
          <p className="text-2xl mb-2" id="s3">
            Saç Dökülmesi
          </p>
          <li>
            <Link to="/argan" className="hover:text-green-500">
              Argan Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/biberiye" className="hover:text-green-500">
              Biberiye Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/cayagaci" className="hover:text-green-500">
              Çay ağacı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/miskadacayi" className="hover:text-green-500">
              Misk Adaçayı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/limonkabugu" className="hover:text-green-500">
              Limon Kabuğu Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/sedir" className="hover:text-green-500">
              Sedir Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/susam" className="hover:text-green-500">
              Susam Yağı
            </Link>
          </li>
        </ul>
        <ul className="p-6">
          <p className="text-2xl mb-2" id="s4">
            Sebum Oranı (Cilt Yağlılığı) Dengeleme
          </p>
          <li>
            <Link to="/adacayi" className="hover:text-green-500">
              Adaçayı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/limonkabugu" className="hover:text-green-500">
              Limon Kabuğu Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/paculi" className="hover:text-green-500">
              Paçuli Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/servi" className="hover:text-green-500">
              Servi Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/ylangylang" className="hover:text-green-500">
              Ylang Ylang Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul className="p-6">
          <p className="text-2xl mb-2" id="s5">
            {" "}
            Sedef
          </p>
          <li>
            <Link to="/akgunlukhidro" className="hover:text-green-500">
              Akgünlük Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/avokado" className="hover:text-green-500">
              Avokado Yağı
            </Link>
          </li>
          <li>
            <Link to="/cayagaci" className="hover:text-green-500">
              Çay Ağacı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/hindistancevizi" className="hover:text-green-500">
              Hindistan Cevizi Yağı
            </Link>
          </li>
          <li>
            <Link to="/jojoba" className="hover:text-green-500">
              Jojoba Yağı
            </Link>
          </li>
          <li>
            <Link to="/kekik" className="hover:text-green-500">
              Kekik Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/mercankosk" className="hover:text-green-500">
              Mercanköşk Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/mersinhidro" className="hover:text-green-500">
              Mersin Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/nanehidro" className="hover:text-green-500">
              Nane Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/nane" className="hover:text-green-500">
              Nane Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/narcekirdegi" className="hover:text-green-500">
              Nar Çekirdeği Yağı
            </Link>
          </li>
          <li>
            <Link to="/neem" className="hover:text-green-500">
              Neem Yağı
            </Link>
          </li>
          <li>
            <Link to="/okaliptus" className="hover:text-green-500">
              Okaliptus Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/papatyamase" className="hover:text-green-500">
              Papatya Maserasyonu
            </Link>
          </li>
          <li>
            <Link to="/tamanu" className="hover:text-green-500">
              Tamanu Yağı
            </Link>
          </li>
        </ul>
        <ul className="p-6">
          <p className="text-2xl mb-2" id="s6">
            Selülit
          </p>
          <li>
            <Link to="/adacayi" className="hover:text-green-500">
              Adaçayı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/ardic" className="hover:text-green-500">
              Ardıç Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/kayisicekirdegi" className="hover:text-green-500">
              Kayısı Çekirdeği Yağı
            </Link>
          </li>
          <li>
            <Link to="/limonkabugu" className="hover:text-green-500">
              Limon Kabuğu Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul className="p-6">
          <p className="text-2xl mb-2" id="s7">
            Sigara Kokucu Giderici
          </p>
          <li>
            <Link to="/adacayi" className="hover:text-green-500">
              Adaçayı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/camterebentin" className="hover:text-green-500">
              Çam Terebentin Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/limonkabugu" className="hover:text-green-500">
              Limon Kabuğu Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul className="p-6">
          <p className="text-2xl mb-2" id="s8">
            Soğuk Algınlığı
          </p>
          <li>
            <Link to="/adacayi" className="hover:text-green-500">
              Adaçayı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/biberiye" className="hover:text-green-500">
              Biberiye Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/cayagaci" className="hover:text-green-500">
              Çay Ağacı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/karanfil" className="hover:text-green-500">
              Karanfil Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/kekik" className="hover:text-green-500">
              Kekik Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/lavanta" className="hover:text-green-500">
              Lavanta Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/limonkabugu" className="hover:text-green-500">
              Limon Kabuğu Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/nane" className="hover:text-green-500">
              Nane Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/okaliptus" className="hover:text-green-500">
              Okaliptus Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/papatyamase" className="hover:text-green-500">
              Papatya Maserasyonu
            </Link>
          </li>
          <li>
            <Link to="/tarcin" className="hover:text-green-500">
              Tarçın Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/zencefil" className="hover:text-green-500">
              Zencefil Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul className="p-6">
          <p className="text-2xl mb-2" id="s9">
            Solunum Rahatlatıcı
          </p>
          <li>
            <Link to="/akgunlukhidro" className="hover:text-green-500">
              Akgünlük Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/defne" className="hover:text-green-500">
              Defne Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/mersinhidro" className="hover:text-green-500">
              Mersin Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/nane" className="hover:text-green-500">
              Nane Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/okaliptus" className="hover:text-green-500">
              Okaliptus Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/palmarosa" className="hover:text-green-500">
              Palmarosa Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul className="p-6">
          <p className="text-2xl mb-2" id="s10">
            Stres- Bunalım Destek
          </p>
          <li>
            <Link to="/adacayi" className="hover:text-green-500">
              Adaçayı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/ardic" className="hover:text-green-500">
              Ardıç Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/akgunlukhidro" className="hover:text-green-500">
              Akgünlük Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/biberiye" className="hover:text-green-500">
              Biberiye Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/defne" className="hover:text-green-500">
              Defne Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/elemi" className="hover:text-green-500">
              Elemi Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/gulhidro" className="hover:text-green-500">
              Gül Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/itir" className="hover:text-green-500">
              Itır Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/karanfil" className="hover:text-green-500">
              Karanfil Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/lavanta" className="hover:text-green-500">
              Lavanta Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/limonkabugu" className="hover:text-green-500">
              Limon Kabuğu Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/mercankosk" className="hover:text-green-500">
              Mercanköşk Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/mur" className="hover:text-green-500">
              Mür Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/nanehidro" className="hover:text-green-500">
              Nane Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/nane" className="hover:text-green-500">
              Nane Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/okaliptus" className="hover:text-green-500">
              Okaliptus Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/paculi" className="hover:text-green-500">
              Paçuli Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/palmarosa" className="hover:text-green-500">
              Palmarosa Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/papatyahidro" className="hover:text-green-500">
              Papatya Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/peygambercicegihidro" className="hover:text-green-500">
              Peygamber Çiçeği Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/portakalkabugu" className="hover:text-green-500">
              Portakal Kabuğu Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/sedir" className="hover:text-green-500">
              Sedir Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/tarcin" className="hover:text-green-500">
              Tarçın Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/ylangylang" className="hover:text-green-500">
              Ylang Ylang Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/zencefil" className="hover:text-green-500">
              Zencefil Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul className="p-6">
          <p className="text-2xl mb-2" id="t1">
            Tansiyon Düşürücü
          </p>
          <li>
            <Link to="/kabakcekirdegi" className="hover:text-green-500">
              Kabak Çekirdeği Yağı
            </Link>
          </li>
          <li>
            <Link to="/kekikhidro" className="hover:text-green-500">
              Kekik Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/ketentohumu" className="hover:text-green-500">
              Keten Tohumu Yağı
            </Link>
          </li>
          <li>
            <Link to="/limonkabugu" className="hover:text-green-500">
              Limon Kabuğu Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/mercankosk" className="hover:text-green-500">
              Mercanköşk Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul className="p-6">
          <p className="text-2xl mb-2" id="t2">
            Tırnak Mantarı
          </p>
          <li>
            <Link to="/cayagaci" className="hover:text-green-500">
              Çay Ağacı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/karanfil" className="hover:text-green-500">
              Karanfil Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul className="p-6">
          <p className="text-2xl mb-2" id="t3">
            Tonikler
          </p>
          <li>
            <Link to="/lavantahidro   " className="hover:text-green-500">
              Lavanta Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/mersinhidro" className="hover:text-green-500">
              Mersin Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/nanehidro" className="hover:text-green-500">
              Nane Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/olmezcicek" className="hover:text-green-500">
              Ölmez Çiçek Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/peygambercicegihidro" className="hover:text-green-500">
              Peygamber Çiçeği Hidrosolü
            </Link>
          </li>
        </ul>
        <ul className="p-6">
          <p className="text-2xl mb-2" id="u1">
            Uçuk
          </p>
          <li>
            <Link to="/limonkabugu" className="hover:text-green-500">
              Limon Kabuğu Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/palmarosa" className="hover:text-green-500">
              Palmarosa Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/servi" className="hover:text-green-500">
              Servi Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/tamanu" className="hover:text-green-500">
              Tamanu Yağı
            </Link>
          </li>
        </ul>
        <ul className="p-6">
          <p className="text-2xl mb-2" id="u2">
            Uykusuzluk
          </p>
          <li>
            <Link to="/elemi" className="hover:text-green-500">
              Elemi Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/kafur" className="hover:text-green-500">
              Kafur Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/lavanta" className="hover:text-green-500">
              Lavanta Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/limonkabugu" className="hover:text-green-500">
              Limon Kabuğu Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/mercankosk" className="hover:text-green-500">
              Mercanköşk Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/miskadacayi" className="hover:text-green-500">
              Misk Adaçayı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/mur" className="hover:text-green-500">
              Mür Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/paculi" className="hover:text-green-500">
              Paçuli Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/papatyahidro" className="hover:text-green-500">
              Papatya Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/portakalkabugu" className="hover:text-green-500">
              Portakal Kabuğu Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/sedir" className="hover:text-green-500">
              Sedir Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/ylangylang" className="hover:text-green-500">
              Ylang Ylang Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul className="p-6">
          <p className="text-2xl mb-2" id="u3">
            Uyuz
          </p>
          <li>
            <Link to="/citronella" className="hover:text-green-500">
              Citronella Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/karanfil" className="hover:text-green-500">
              Karanfil Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/neem" className="hover:text-green-500">
              Neem Yağı
            </Link>
          </li>
          <li>
            <Link to="/tarcin" className="hover:text-green-500">
              Tarçın Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul className="p-6">
          <p className="text-2xl mb-2" id="u4">
            Ürtiker
          </p>
          <li>
            <Link to="/kafur" className="hover:text-green-500">
              Kafur Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/limonkabugu" className="hover:text-green-500">
              Limon Kabuğu Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/portakalkabugu" className="hover:text-green-500">
              Portakal Kabuğu Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul className="p-6">
          <p className="text-2xl mb-2" id="v1">
            Varis
          </p>
          <li>
            <Link to="/adacayi" className="hover:text-green-500">
              Adaçayı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/biberiye" className="hover:text-green-500">
              Biberiye Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/limonkabugu" className="hover:text-green-500">
              Limon Kabuğu Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/mersinhidro" className="hover:text-green-500">
              Mersin Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/papatyahidro" className="hover:text-green-500">
              Papatya Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/servi" className="hover:text-green-500">
              Servi Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul className="p-6">
          <p className="text-2xl mb-2" id="y1">
            Yanık İyileştirmeye Yardımcı
          </p>
          <li>
            <Link to="/elemi" className="hover:text-green-500">
              Elemi Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/itir" className="hover:text-green-500">
              Itır Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/karanfil" className="hover:text-green-500">
              Karanfil Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/lavanta" className="hover:text-green-500">
              Lavanta Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/nioli" className="hover:text-green-500">
              Nioli Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/okaliptus" className="hover:text-green-500">
              Okaliptus Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/olmezcicek" className="hover:text-green-500">
              Ölmez Çiçek Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/papatyahidro" className="hover:text-green-500">
              Papatya Hidrosolü
            </Link>
          </li>
        </ul>
        <ul className="p-6">
          <p className="text-2xl mb-2" id="y2">
            Yara İyileştirmeye Yardımcı
          </p>
          <li>
            <Link to="/ardic" className="hover:text-green-500">
              Ardıç Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/aynisafamase" className="hover:text-green-500">
              Aynısafa Maserasyonu
            </Link>
          </li>
          <li>
            <Link to="/biberiye" className="hover:text-green-500">
              Biberiye Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/ceviz" className="hover:text-green-500">
              Ceviz Yağı
            </Link>
          </li>
          <li>
            <Link to="/cayagaci" className="hover:text-green-500">
              Çay Ağacı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/elemi" className="hover:text-green-500">
              Elemi Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/kafur" className="hover:text-green-500">
              Kafur Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/kusburnucekirdegi" className="hover:text-green-500">
              Kuşburnu Çekirdeği Yağı
            </Link>
          </li>
          <li>
            <Link to="/lavantahidro   " className="hover:text-green-500">
              Lavanta Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/limonkabugu" className="hover:text-green-500">
              Limon Kabuğu Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/mur" className="hover:text-green-500">
              Mür Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/nanehidro" className="hover:text-green-500">
              Nane Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/nioli" className="hover:text-green-500">
              Nioli Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/okaliptus" className="hover:text-green-500">
              Okaliptus Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/olmezcicek" className="hover:text-green-500">
              Ölmez Çiçek Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/palmarosa" className="hover:text-green-500">
              Palmarosa Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/sarikantaronmase" className="hover:text-green-500">
              Sarı Kantaron Maserasyonu
            </Link>
          </li>
        </ul>
        <ul className="p-6">
          <p className="text-2xl mb-2" id="y3">
            Yorgunluk Giderici
          </p>
          <li>
            <Link to="/adacayi" className="hover:text-green-500">
              Adaçayı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/ardic" className="hover:text-green-500">
              Ardıç Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/akgunlukhidro" className="hover:text-green-500">
              Akgünlük Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/biberiye" className="hover:text-green-500">
              Biberiye Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/defne" className="hover:text-green-500">
              Defne Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/karanfil" className="hover:text-green-500">
              Karanfil Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/limonkabugu" className="hover:text-green-500">
              Limon Kabuğu Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/melisa" className="hover:text-green-500">
              Melisa Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/mercankosk" className="hover:text-green-500">
              Mercanköşk Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/miskadacayi" className="hover:text-green-500">
              Misk Adaçayı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/nanehidro" className="hover:text-green-500">
              Nane Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/okaliptus" className="hover:text-green-500">
              Okaliptus Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/palmarosa" className="hover:text-green-500">
              Palmarosa Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/papatyahidro" className="hover:text-green-500">
              Papatya Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/peygambercicegihidro" className="hover:text-green-500">
              Peygamber Çiçeği Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/portakalkabugu" className="hover:text-green-500">
              Portakal Kabuğu Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/vetiver" className="hover:text-green-500">
              Vetiver Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/ylangylang" className="hover:text-green-500">
              Ylang Ylang Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/zencefil" className="hover:text-green-500">
              Zencefil Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul className="p-6">
          <p className="text-2xl mb-2" id="y4">
            Yüz Temizleme
          </p>
          <li>
            <Link to="/akgunlukhidro" className="hover:text-green-500">
              Akgünlük Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/ardic" className="hover:text-green-500">
              Ardıç Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/cayagaci" className="hover:text-green-500">
              Çay Ağacı Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/kusburnu" className="hover:text-green-500">
              Kuşburnu Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/limonkabugu" className="hover:text-green-500">
              Limon Kabuğu Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/limonotu" className="hover:text-green-500">
              Limonotu Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/mersinhidro" className="hover:text-green-500">
              Mersin Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/nanehidro" className="hover:text-green-500">
              Nane Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/okaliptus" className="hover:text-green-500">
              Okaliptus Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/palmarosa" className="hover:text-green-500">
              Palmarosa Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/papatyahidro" className="hover:text-green-500">
              Papatya Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/peygambercicegihidro" className="hover:text-green-500">
              Peygamber Çiçeği Hidrosolü
            </Link>
          </li>
          <li>
            <Link to="/portakalkabugu" className="hover:text-green-500">
              Portakal Kabuğu Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/ylangylang" className="hover:text-green-500">
              Ylang Ylang Uçucu YAğı
            </Link>
          </li>
        </ul>
        <ul className="p-6">
          <p className="text-2xl mb-2" id="z1">
            {" "}
            Zihin Açıcı
          </p>
          <li>
            <Link to="/ardic" className="hover:text-green-500">
              Ardıç Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/biberiye" className="hover:text-green-500">
              Biberiye Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/limonkabugu" className="hover:text-green-500">
              Limon Kabuğu Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/nane" className="hover:text-green-500">
              Nane Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/okaliptus" className="hover:text-green-500">
              Okaliptus Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/portakalkabugu" className="hover:text-green-500">
              Portakal Kabuğu Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/vetiver" className="hover:text-green-500">
              Vetiver Uçucu Yağı
            </Link>
          </li>
        </ul>
        <ul className="p-6">
          <p className="text-2xl mb-2" id="z2">
            Zona
          </p>
          <li>
            <Link to="/kafur" className="hover:text-green-500">
              Kafur Uçucu Yağı
            </Link>
          </li>
          <li>
            <Link to="/tamanu" className="hover:text-green-500">
              Tamanu Yağı
            </Link>
          </li>
        </ul>
      </ol>
    </div>
  );
}

export default OilList;
