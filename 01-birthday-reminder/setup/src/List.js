import React from 'react';

const List = ({ people }) => {
  return (
    <>
      {people.map((person) =>
        <article key={person.id} className="person">
          <img src={person.image}></img>
          <div>
            <h4>{person.name}</h4>
            <p>{person.age} years</p>
          </div>
        </article>
      )}
    </>
  );
};

export default List;

/*
App.js 'den people'ı props olarak aldık. people bir liste olduğu için listenin öğelerine erişmek için map fonksiyonunu kullandık ve her bir liste öğesi bir obj olduğu için kullanmak istediğimiz value değerlerine tek tek eriştik.

*/
