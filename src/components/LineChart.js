// install these:
// npm install highcharts
// npm install highcharts-react-official

import React from 'react'
import { render } from 'react-dom'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

function LC (){
    const options = {
        yAxis: {
            title: {
                text: 'Number '
            }
        },

        xAxis: {
            accessibility: {
                rangeDescription: 'Range: 10 to 20'
            }
        },
        title: {
          text: 'dfgw'
        },
        series: [{

          data: [3,5,1,9,8,6,3,5]
        }]
      }
      
      const App = () => <div>
        <HighchartsReact
          highcharts={Highcharts}
          options={options}
        />
      </div>
      
      render(<App />, document.getElementById('root'))
}


export default LC;