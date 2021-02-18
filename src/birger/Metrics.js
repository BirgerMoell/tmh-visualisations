import React, { useState, useEffect } from 'react'

const patients = [
  {
    id: 1,
    name: "Tolvan Tolvansson",
    personalNumber: "19900101-xxxx",
    gender: "male",
    diagnosis: "Alzheimer",
    cognitiveProfile: {
      moca: 27,
      speechPattern: 1.23,
      pausePattern: 2.26,
      languagePattern: 3.7,
      drawingPattern: 2.9,
      gazePattern: 3.32,
      pupilPattern: 3.2,
      heatPattern: 2.9,
    },
  },
  {
    id: 2,
    name: "Tolvan Elvan",
    personalNumber: "19900101-xxxx",
    gender: "male",
    diagnosis: "Alzheimer",
    cognitiveProfile: {
      moca: 23,
      speechPattern: 1.22,
      pausePattern: 2.26,
      languagePattern: 3.7,
      drawingPattern: 2.9,
      gazePattern: 3.32,
      pupilPattern: 3.2,
      heatPattern: 2.7,
    },
  },
  {
    id: 3,
    name: "Tolvan Tio",
    personalNumber: "19900101-xxxx",
    gender: "male",
    diagnosis: "Alzheimer",
    cognitiveProfile: {
      moca: 25,
      speechPattern: 1.27,
      pausePattern: 2.26,
      languagePattern: 3.7,
      drawingPattern: 2.9,
      gazePattern: 3.32,
      pupilPattern: 3.2,
      heatPattern: 2.8,
    },
  },
  {
    id: 4,
    name: "Tolvan Nio",
    personalNumber: "19900101-xxxx",
    gender: "male",
    diagnosis: "Alzheimer",
    cognitiveProfile: {
      moca: 24,
      speechPattern: 1.82,
      pausePattern: 2.26,
      languagePattern: 3.7,
      drawingPattern: 2.9,
      gazePattern: 3.32,
      pupilPattern: 3.2,
      heatPattern: 2.2,
    },
  },
  {
    id: 5,
    name: "Tolvan åtta",
    personalNumber: "19900101-xxxx",
    gender: "male",
    diagnosis: "Alzheimer",
    cognitiveProfile: {
      moca: 22,
      speechPattern: 1.23,
      pausePattern: 2.26,
      languagePattern: 3.7,
      drawingPattern: 2.9,
      gazePattern: 3.32,
      pupilPattern: 3.2,
      heatPattern: 2.7,
    },
  },
];

const percentile = (array, number) => {
  array = array.sort();
  let count = 0;

  array.forEach((item) => {
    if (number >= item) {
      count++;
    }
  });
  let perc = count / array.length;
  console.log("perc is", perc);
  return perc * 100;
};

export const Metrics = () => {

    const [patient, setPatient] = useState(patients[2])

  return (

    <div className="Patient-view-container">

    <label for="patient">Choose a patient:</label>
    <select onChange={e => setPatient(patients[e.target.value-1])} name="patient" id="patient">
        {patients.map(patient =>
         <option value={patient.id}>{patient.name}</option>
        )}
       
        </select>

    <div className="Overview-grid-container">

        {PercentileDataViewer(patients, patient)}
    </div>
    </div>
  );
};

const PercentileDataViewer = (patients, patient) => {

    return (

        Object.keys(patient.cognitiveProfile).map( key => 
            <div className="Overview-grid-item">
                <p>
                {key} {getValues(patients, patient, key)} %{" "}
              </p>
            </div>
        )
    )

}

const getPercentageString = (percentage) => {
    

}

const getValues = (patients, patient, value) => {
    let array = convertValueToArray(patients, value)
    let percent = percentile(array, patient.cognitiveProfile[value])
    console.log("the percent is", percent)
    return percent
}

const convertValueToArray = (object, value) => {
  var array = Object.keys(object).map(function (key) {
    return object[key].cognitiveProfile[value];
  });
  return array;
};
