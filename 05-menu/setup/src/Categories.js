import React from 'react';

const Categories = ({ categories, filterItems }) => {
  return (
    <div className='btn-container'>
      {categories.map((category, index) => {
        return (
          <button
            type='button'
            onClick={() => filterItems(category)}
            className='filter-btn'
            key={index}
            >
            {category}
          </button>
        )
      })}
    </div>
  )
}
export default Categories;


/*

app.js de tanımlanan allCategories değişkeni bize categories propsu olarak geldi. Her bir butonu tek tek oluşturmak yerine ne kadar kategori varsa o kadar buton döndürmesi için categories listesini maps ile aldık ve butonları oluşturmuş olduk. butona tıklandığında ise filterItems fonksiyonuna category parametresini vererek çağırdık.

Böylelikle ne kadar kategori varsa o kadar buton oluşmuş olacak ve buton isimleri category'in adını alacak. her bir butona tıklandığında ilgili kategory ekrana filtrelenecek.
*/