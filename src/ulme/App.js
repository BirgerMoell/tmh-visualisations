import React, { useState, useEffect } from 'react'
import './App.css';
import * as d3 from "d3";

function DataLoader(props) {
    
    const MARGIN = { LEFT: 100, RIGHT: 10, TOP: 10, BOTTOM: 130 }
    const WIDTH = 1200 - MARGIN.LEFT - MARGIN.RIGHT
    const HEIGHT = 800 - MARGIN.TOP - MARGIN.BOTTOM

    const svg = d3.select("#chart-area").append("svg")
      .attr("width", WIDTH + MARGIN.LEFT + MARGIN.RIGHT)
      .attr("height", HEIGHT + MARGIN.TOP + MARGIN.BOTTOM)

    const g = svg.append("g")
      .attr("transform", `translate(${MARGIN.LEFT}, ${MARGIN.TOP})`)

    const data = props.data && props.data.value

    const dataset = props.data && props.data.dataset
    const x_value = props.data.x
    console.log("the data is", props.data)
    console.log("the x value is", x_value)
    const y_value = props.data.y
    
    // X label
    g.append("text")
      .attr("class", "x axis-label")
      .attr("x", WIDTH / 2)
      .attr("y", HEIGHT + 110)
      .attr("font-size", "28px")
      .attr("text-anchor", "middle")
      .text(x_value)

    // Y label
    g.append("text")
      .attr("class", "y axis-label")
      .attr("x", - (HEIGHT / 2))
      .attr("y", -60)
      .attr("font-size", "28px")
      .attr("text-anchor", "middle")
      .attr("transform", "rotate(-90)")
      .text(y_value)

      const x = d3.scaleBand()
        .domain(data.map(d => d[x_value]))
        .range([0, WIDTH])
        .paddingInner(0.3)
        .paddingOuter(0.2)
      
      const y = d3.scaleLinear()
        .domain([0, d3.max(data, d => Number(d[y_value]))])
        .range([0, HEIGHT])

      const xAxisCall = d3.axisBottom(x)
      g.append("g")
        .attr("class", "x axis")
        .attr("transform", `translate(0, ${HEIGHT})`)
        .call(xAxisCall)
        .selectAll("text")
          .attr("y", "10")
          .attr("text-align", "center")
          .attr("font-size", "16px")

      const yAxisCall = d3.axisLeft(y)
        .ticks(5)
        .tickFormat(d => d)
      g.append("g")
        .attr("class", "y axis")
        .call(yAxisCall)


        // d3.interval(() => {
        //   update(data)
        // }, 1000)
      
        const update = (data) => {

            console.log("the data is", data)
            
                const t = d3.transition().duration(250)

                // JOIN new data with old elements.
                const rects = g.selectAll("rect")
                .data(data)
      
                // EXIT old elements not present in new data.
                rects.exit().remove()
      
                // ENTER new elements present in new data...
                rects.enter().append("rect")
                .attr("fill", "#fff")
                .attr("y", y(0))
                .attr("height", 0)
                // AND UPDATE old elements present in new data.
                .merge(rects)
                .transition(t)
                  .attr("y", d => HEIGHT - y(Number(d[y_value])))
                  .attr("x", (d) => x(d[x_value]))
                  .attr("width", x.bandwidth)
                  .attr("height", d => y(Number(d[y_value])))
                  .attr("fill", d => d.diagnose === "Healthy" ? "lightgreen" : d.diagnose === "MCI" ? "lightblue": "pink")

        }


        update(data)


  return (
    // map out different parts of the data
      <div id="chart-area">
      </div>
  )
}

function App() {

  const [data, setData] = useState()

  const loadData = async () => {
    let uri = './data/models.csv' 
    let result = await d3.csv(uri)
    setData( {"value": result,
            "dataset": "models",
            "x": "model",
            "y": "parameters"
          })
    console.log("the data is", result)
  }

   useEffect(() => {  
    if (!data) {
     loadData()
    }
    console.log('t');
  });

//   useEffect(() => {
//     const subscription = props.source.subscribe();
//     return () => {
//       // Clean up the subscription
//       subscription.unsubscribe();
//     };
//   });


  return (
    <div className="App">
      <header className="App-header">
         {data && data.value && <DataLoader data={data}/>}
      </header>
    </div>
  );
}

export default App;