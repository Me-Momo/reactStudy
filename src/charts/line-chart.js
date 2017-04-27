import React,{ Component } from 'react';
import echarts from 'echarts';
import axios from 'axios';

class LineChart extends Component { 

    constructor(){
        super();
        this.state = {
            chartData:{}
        }
    }

    componentDidMount(){
        axios.get(`http://localhost:9999/api/lineChart`)
            .then(result => {
                this.setState({
                    chartData: result.data
                },() =>{
                    this.showChart();            
                });
            });
    }


     showChart(){
       var myChart = echarts.init(document.getElementsByClassName('kasmine-chart')[0]);

       var option = {
               title: {
                text: 'ECharts 入门示例'
            },
            color: ['#3398DB'],
            tooltip : {
                trigger: 'axis',
                axisPointer : {       
                    type : 'shadow'  
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : []
       };
       // 更新 option
       let series = this.state.chartData.series.map(seriesItem => {
            return Object.assign({},{name:seriesItem.dataName,data:seriesItem.data,type:'line'});
       });

       myChart.setOption(Object.assign(option,{series:series}));
     }

     render() {
        return (
              <div className="kasmine-chart" style={{width: 500, height:500}}></div>
        )
    }
};

export default LineChart;