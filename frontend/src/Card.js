import React from 'react'
import * as moment from 'moment'

function Card({ inputValues }) {

    return (
        <div className="col-lg-6 bg-primary text-white card">
            <div className="">
                {

                    inputValues.petName !== null && inputValues.petName !== "" && inputValues.petName !== undefined ?

                        <p>{inputValues.petName} va sta alaturi de noi in perioada {inputValues.startDate.toISOString().substring(0, 10)} - {inputValues.endDate.toISOString().substring(0, 10)}.</p>

                        : null}
                {inputValues.details !== null && inputValues.details !== "" && inputValues.details !== undefined ?
                    <p>Vom promite ca vom fi atenti pentru ca {inputValues.details}</p> : null

                }
            </div>

        </div>
    )
}

export default Card