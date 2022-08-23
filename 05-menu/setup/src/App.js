import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const Allcategories = ["all", ...new Set(items.map((item)=>item.category)) ] 


function App() {
  const [menuItems, setMenuItems] = useState(items)
  const [categories, setCategories] = useState(Allcategories)

  const filterItems = (category) => {
    if(category==="all"){
      setMenuItems(items)
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems)
  }

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;


/*

Menude kullanılacak olan menu itemleri ve categorilerimiz var. Bunları usestate ile tanımlıyoruz. 
allCategories değişkeni ile datamızda yer alan category'leri ve ek olarak "all" kategorisini tanımladık. new Set ile her bir category değerini bir defa aldık.

categories ve menu companentlerini içe aktardık.

butona tıklandığında ilgili kategoriye ait itemlerin gelmesi için filterItems fonksiynunu taımladık ve bunu categories componentine props olarak gönderdik. aynı şekilde allCategories değişkenini de buraya props olarak gönderdik.

menuItemlerimizi datamızdan alıp Menu companentine props  olarak gönderdik. Menu componentinde bunları tek tek alıp ekran koyacağız.

*/