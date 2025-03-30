import { FaStar } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-10 px-5 md:px-20">
      {/* Üst Kısım */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-700 pb-8">
        <div className="flex items-center gap-2 text-yellow-500">
          <FaStar />
          <span className="font-bold">(140.000+)</span>
        </div>
        <h2 className="text-xl md:text-2xl font-bold text-center md:text-left">
          LABORATUVAR TESTLİ ÜRÜNLER <br />
          AYNI GÜN & ÜCRETSİZ KARGO <br />
          MEMNUNİYET GARANTİSİ
        </h2>
        <p className="max-w-lg text-gray-400 text-sm md:text-base mt-4 md:mt-0">
          200.000'den fazla ürün yorumumuza dayanarak, ürünlerimizi seveceğinize eminiz. 
          Eğer herhangi bir sebeple memnun kalmazsan, bizimle iletişime geçtiğinde çözüme kavuşturacağız.
        </p>
      </div>

      {/* Alt Kısım */}
      <div className="flex flex-col md:flex-row justify-between items-start pt-8">
        {/* OJS Nutrition ve Linkler */}
        <div>
          <h3 className="font-bold text-lg">OJS <span className="italic">NUTRITION</span></h3>
          <ul className="text-gray-400 text-sm mt-2 space-y-1">
            <li>İletişim</li>
            <li>Hakkımızda</li>
            <li>Sıkça Sorulan Sorular</li>
            <li>KVKK</li>
            <li>Çalışma İlkelerimiz</li>
            <li>Satış Sözleşmesi</li>
            <li>Garanti ve İade Koşulları</li>
            <li>Gerçek Müşteri Yorumları</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Kategoriler */}
        <div>
          <h3 className="font-bold text-lg">Kategoriler</h3>
          <ul className="text-gray-400 text-sm mt-2 space-y-1">
            <li>Protein</li>
            <li>Spor Gıdaları</li>
            <li>Sağlık</li>
            <li>Gıda</li>
            <li>Vitamin</li>
            <li>Aksesuar</li>
            <li>Tüm Ürünler</li>
            <li>Paketler</li>
            <li>Lansmana Özel Fırsatlar</li>
          </ul>
        </div>

        {/* Popüler Ürünler */}
        <div>
          <h3 className="font-bold text-lg">Popüler Ürünler</h3>
          <ul className="text-gray-400 text-sm mt-2 space-y-1">
            <li>Whey Protein</li>
            <li>Cream of Rice</li>
            <li>Creatine</li>
            <li>BCAA+</li>
            <li>Pre-Workout</li>
            <li>Fitness Paketi</li>
            <li>Collagen</li>
            <li>Günlük Vitamin Paketi</li>
            <li>ZMA</li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-xs mt-8 border-t border-gray-700 pt-4">
        Copyright © - Tüm Hakları Saklıdır.
      </div>
    </footer>
  );
}
