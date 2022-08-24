import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'

const url = 'https://course-api.com/react-tabs-project'

function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs)
    setLoading(false)
  }

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return (
      <section className="section loading">
        <h2>Loading..</h2>
      </section>
    )
  }

  const { id, title, dates, duties, company } = jobs[value]


  return (
    <section className="section">
      <div className="title">
        <h2>Expierence</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        {}
        <div className='btn-container'>
          {jobs.map((item, index)=>{
            return <button onClick={()=>setValue(index)} key={item.id} className={`job-btn ${index===value && 'active-btn'}`}>
              {item.company}
            </button>
          })}
        </div>
        {}
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div key={index} className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                {duty}
              </div>
            )
          })
          }
        </article>
      </div>
    </section>
  )
}

export default App



/*

Uygulamada, 3 adet useState tanımladık. Loading ile sayfa yüklenirken görünecek loading yazısını, jobs ile butona tıklandığında gösterilecek işi, value ile liste halinde verilen işlerin indexini tutmak için tanımlama yaptık.

fetchJobs fonksiyonu ile fetch kullanarak datamızı aldık.Data yüklenene kadar isLoading fonksiyonu ile Loading yazısını ekranda gösterdik. useEffect ile sayfa yüklendiğinde ekrana datamızı getirdik. jobs bize birl liste olarak geldiği için jobs[value] değerini aldık. Value değeri ile her bir jobsun index değerini eşleştireceğiz. return içinde yine map fonksiyonu ile her bir jobs'un duty'sini döndürdük. Button-container kısmında, jobs içindeki her bir job'u ve index numarasını aldık. her bir jobsun indexini setValue'ya parametre olarak verdik.yine her bir jobsun company değerini buton olarak tanımladık. Böylelikle ne kadar jobs varsa o kadar buton oluşmuş oldu. classname içinde template litarels kullarak eğer index value ye eşitse active-btn classını tanımlamış olduk.


*/