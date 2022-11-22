1- App.js içine Navbar componenti eklendi
2- Data.js içinde navigasyonda yer alacak olan öğeleri liste olarak oluşturduk. Burda oluşturulan listeye istendiği kadar öğe eklenebilir.
3- return ettiğimiz html etiketleri içinde navigasyon yapımızı oluşturduk. Burada önemli olan ve react hooklarını kullandığımız alan resposive tasarımda küçük ekrana geçildiğinde menu butonuna tıklandığında liste öğelerinin getirilmesi. 

4- Bunun için showItems değişkeni oluşturuyoruz. Varsayılan değeri false olarak veriyoruz. useRef hooku ile link uzunluğunu referans değer olarak 'links' listesine stil olarak tanımlıyoruz. Böylelikle liste ne kadar uzun olursa olsun değerimiz liste uzunluğu olacağı için stil otomatik olarak değişecektir.

5-useEffect içinde onClick olayı gerçekleştiğinde linksHeight'i her seferinde yeniden tanımlamış oluyoruz. Eğer showItems true ise uzunluk değerini stil olarak tanımlıyoruz. Else ise uzunluğu 0px olacak.

getBoundingClientRect() fonksiyonu ile sayfa içinde konum bilgisi almış olduk.