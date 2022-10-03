import React, { useState } from 'react'
import './App.css';
import Card from './Card';
import axios from 'axios';


const initialState = {
  startDate: new Date(),
  endDate: new Date(),
  details: null,
  petAge: null,
  petName: null
}

function App() {

  const [inputs, setInputs] = useState(initialState);

  inputs.startDate = new Date();
  inputs.endDate = new Date();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = (event) => {
    console.log("submit")
    event.preventDefault();
    axios({
      method: 'post',
      url: "http://localhost:5000/schedule",
      data: inputs,
      config: { headers: { 'Content-Type': 'application/json' } }
    })
      .then(function (response) {
        alert(JSON.stringify(response.data.message))
        window.location.reload(false);
      })
      .catch(function (response) {
        alert("Pentru moment actiunea nu este disponibila, va rugam sa incercati mai tarziu sau sa ne contactati telefonic")
        window.location.reload(false);
      });



  }

  return (
    
    <div >
      <header className="masthead bg-primary text-white text-center">
            <div className="container d-flex align-items-center flex-column">
                <h1 className="masthead-heading text-uppercase mb-0">Pet HOTEL</h1>
               
                <p className="masthead-subheading font-weight-light mb-0">Grija si rasfat pentru animalutul tau</p>
            </div>
        </header>

        <section className="page-section container mb-5" >
        <h2 className="text-center text-uppercase text-secondary">Fa o rezervare</h2>

      <div className="row  justify-content-center">


        <form onSubmit={handleSubmit} className="col-lg-6">
          <div className="row">
            <div className="col-lg-4">
              Numele animalutului tau
            </div>
            <div className="col-lg-6">
              <input
                type="text"
                name="petName"
                value={inputs.petName || ""}
                onChange={handleChange}
              />
            </div>

          </div>

          <div className="row">
            <div className="col-lg-4">
              Varsta animalutului tau
            </div>
            <div className="col-lg-6">
              <input
                type="number"
                name="petAge"
                value={inputs.petAge || ""}
                onChange={handleChange}
              />
            </div>

          </div>

          <div className="row">
            <div className="col-lg-4">
              Numar telefon
            </div>
            <div className="col-lg-6">
              <input
                type="text"
                name="phoneNo"
                value={inputs.phoneNo || ""}
                onChange={handleChange}
              />
            </div>

          </div>

          <div className="row">
            <div className="col-lg-4">
              Adresa e-mail
            </div>
            <div className="col-lg-6">
              <input
                type="text"
                name="email"
                value={inputs.email || ""}
                onChange={handleChange}
              />
            </div>

          </div>

          <div className="row">
            <div className="col-lg-4">
              Sedere de la
            </div>
            <div className="col-lg-6">
              <input
                type="date"
                name="startDate"
                data-date-format="DD MMMM YYYY"
                onChange={handleChange}
              />
            </div>

          </div>

          <div className="row">
            <div className="col-lg-4">
              Pana la
            </div>
            <div className="col-lg-6">
              <input
                type="date"
                name="endDate"
                min={inputs.startDate}
                onChange={handleChange}
              />
            </div>

          </div>

          <div className="row">
            <div className="col-lg-4">
              Observatii
            </div>
            <div className="col-lg-6">
              <input
                type="text"
                name="details"
                value={inputs.details || ""}
                onChange={handleChange}
              />
            </div>

          </div>
          <input type="submit" />

        </form>
        <Card inputValues={inputs} />


      </div>
      </section>
      <footer className="footer text-center  bg-primary text-white ">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <h4 className="text-uppercase">Locatie</h4>
                        <p>
                            Strada Labutelor 453
                            <br />
                            Sector 5, Bucuresti
                        </p>
                    </div>
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4">
                        <h4 className="text-uppercase">Despre noi</h4>
                        <p >
                            Suntem o echipa pozitiva cu dragoste pentru orice animal.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default App