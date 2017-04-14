import echarts from 'echarts';

const config = {
    "version": 1,
    "theme": {
        "grid": {
            show: false,
            left: "40",
            top: "10%",
            right: "60",
            bottom: "60",
        },
        "legend": {
            "textStyle": {
                "color": "#757575"
            }
        },
        "textStyle": {
            "color": "#757575"
        },
        "title": {
            "textStyle": {
                "color": "#757575"
            }
        },
        "toolbox": {
            "iconStyle": {
                "normal": {
                    "borderColor": "#757575"
                }
            }
        },
        "dataZoom": {
            "textStyle": {
                "color": "#757575"
            }
        },
        "timeline": {
            "lineStyle": {
                "color": "#757575"
            },
            "itemStyle": {
                "normal": {
                    "color": "#759aa0"
                }
            },
            "label": {
                "normal": {
                    "textStyle": {
                        "color": "#757575"
                    }
                }
            },
            "controlStyle": {
                "normal": {
                    "color": "#757575",
                    "borderColor": "#757575"
                }
            }
        },
        "timeAxis": {
            "axisLine": {
                "lineStyle": {
                    "color": "#757575"
                }
            },
            "axisTick": {
                "lineStyle": {
                    "color": "#757575"
                }
            },
            "axisLabel": {
                "textStyle": {
                    "color": "#757575"
                }
            },
            "splitLine": {
                "lineStyle": {
                    "type": "dashed",
                    "color": "#aaa"
                }
            },
            "splitArea": {
                "areaStyle": {
                    "color": "#757575"
                }
            }
        },
        "logAxis": {
            "axisLine": {
                "lineStyle": {
                    "color": "#757575"
                }
            },
            "axisTick": {
                "lineStyle": {
                    "color": "#757575"
                }
            },
            "axisLabel": {
                "textStyle": {
                    "color": "#757575"
                }
            },
            "splitLine": {
                "lineStyle": {
                    "type": "dashed",
                    "color": "#aaa"
                }
            },
            "splitArea": {
                "areaStyle": {
                    "color": "#757575"
                },
                show: true
            }
        },
        "valueAxis": {
            "axisLine": {
                "lineStyle": {
                    "color": "#757575"
                }
            },
            "axisTick": {
                "lineStyle": {
                    "color": "#757575"
                }
            },
            "axisLabel": {
                "textStyle": {
                    "color": "#757575"
                }
            },
            "splitLine": {
                "lineStyle": {
                    "type": "dashed",
                    "color": "#aaa"
                }
            },
            "splitArea": {
                show: true,
                "areaStyle": {
                    "color": ["#fff","#f9f9f9"]
                }
            }
        },
        "categoryAxis": {
            "axisLine": {
                "lineStyle": {
                    "color": "#757575"
                }
            },
            "axisTick": {
                "lineStyle": {
                    "color": "#757575"
                }
            },
            "axisLabel": {
                "textStyle": {
                    "color": "#757575"
                }
            },
            "splitLine": {
                "show": false
            },
            "splitArea": {
                "areaStyle": {
                    "color": "#757575"
                }
            }
        },
        "line": {
            "symbol": "emptyCircle",
            "symbolSize": 8
        },
        "seriesCnt": "6",
        "backgroundColor": "rgba(0, 0, 0, 0)",
        "titleColor": "#333",
        "subtitleColor": "#aaa",
        "textColorShow": false,
        "textColor": "#333",
        "markTextColor": "#757575",
        "color": [
            "#4795e7",
            "#6ecc80",
            "#ffc778",
            "#8aa0ae",
            "#9f6bd9",
            "#576baa",
            "#a4c574",
            "#f0946d",
            "#be6869",
            "#8ec1dc"
        ],
        "borderColor": "#ccc",
        "borderWidth": 0,
        "visualMapColor": [
            "#bf444c",
            "#d88273",
            "#f6efa6"
        ],
        "kColor": "#c23531",
        "kColor0": "#314656",
        "kBorderColor": "#c23531",
        "kBorderColor0": "#314656",
        "kBorderWidth": 1,
        "lineWidth": 2,
        "symbolSize": "8",
        "symbol": "emptyCircle",
        "symbolBorderWidth": "1",
        "lineSmooth": false,
        "graphLineWidth": 1,
        "graphLineColor": "#aaa",
        "mapLabelColor": "#757272",
        "mapLabelColorE": "rgb(117,114,114)",
        "mapBorderColor": "#e5e5e5",
        "mapBorderColorE": "#444",
        "mapBorderWidth": "0.5",
        "mapBorderWidthE": "0.5",
        "mapAreaColor": "#e5e5e5",
        "mapAreaColorE": "rgba(113,211,133,1)",
        "axes": [
            {
                "type": "all",
                "name": "通用坐标轴",
                "axisLineShow": true,
                "axisLineColor": "#333",
                "axisTickShow": true,
                "axisTickColor": "#333",
                "axisLabelShow": true,
                "axisLabelColor": "#333",
                "splitLineShow": true,
                "splitLineColor": [
                    "#ccc"
                ],
                "splitAreaShow": false,
                "splitAreaColor": [
                    "rgba(250,250,250,0.3)",
                    "rgba(200,200,200,0.3)"
                ]
            },
            {
                "type": "category",
                "name": "类目坐标轴",
                "axisLineShow": true,
                "axisLineColor": "#484b57",
                "axisTickShow": false,
                "axisTickColor": "#333",
                "axisLabelShow": true,
                "axisLabelColor": "#757575",
                "splitLineShow": false,
                "splitLineColor": [
                    "#ccc"
                ],
                "splitAreaShow": false,
                "splitAreaColor": [
                    "rgba(250,250,250,0.3)",
                    "rgba(200,200,200,0.3)"
                ]
            },
            {
                "type": "value",
                "name": "数值坐标轴",
                "axisLineShow": true,
                "axisLineColor": "#484b57",
                "axisTickShow": false,
                "axisTickColor": "#333",
                "axisLabelShow": true,
                "axisLabelColor": "#757575",
                "splitLineShow": false,
                "splitLineColor": [
                    "#ccc"
                ],
                "splitAreaShow": false,
                "splitAreaColor": [
                    "rgba(250,250,250,0.3)",
                    "rgba(200,200,200,0.3)"
                ]
            },
            {
                "type": "log",
                "name": "对数坐标轴",
                "axisLineShow": true,
                "axisLineColor": "#484b57",
                "axisTickShow": true,
                "axisTickColor": "#757575",
                "axisLabelShow": true,
                "axisLabelColor": "#757575",
                "splitLineShow": true,
                "splitLineColor": [
                    "#484b57"
                ],
                "splitAreaShow": false,
                "splitAreaColor": [
                    "rgba(250,250,250,0.3)",
                    "rgba(200,200,200,0.3)"
                ]
            },
            {
                "type": "time",
                "name": "时间坐标轴",
                "axisLineShow": true,
                "axisLineColor": "#484b57",
                "axisTickShow": true,
                "axisTickColor": "#484b57",
                "axisLabelShow": true,
                "axisLabelColor": "#757575",
                "splitLineShow": false,
                "splitLineColor": [
                    "#ccc"
                ],
                "splitAreaShow": false,
                "splitAreaColor": [
                    "rgba(250,250,250,0.3)",
                    "rgba(200,200,200,0.3)"
                ]
            }
        ],
        "axisSeperateSetting": true,
        "toolboxColor": "#999",
        "toolboxEmpasisColor": "#666",
        "tooltipAxisColor": "#ccc",
        "tooltipAxisWidth": 1,
        "timelineLineColor": "#293c55",
        "timelineLineWidth": 1,
        "timelineItemColor": "#293c55",
        "timelineItemColorE": "#a9334c",
        "timelineCheckColor": "#e43c59",
        "timelineCheckBorderColor": "rgba(194,53,49, 0.5)",
        "timelineItemBorderWidth": 1,
        "timelineControlColor": "#293c55",
        "timelineControlBorderColor": "#293c55",
        "timelineControlBorderWidth": 0.5,
        "timelineLabelColor": "#293c55",
        "datazoomBackgroundColor": "rgba(47,69,84,0)",
        "datazoomDataColor": "rgba(47,69,84,0.3)",
        "datazoomFillColor": "rgba(167,183,204,0.4)",
        "datazoomHandleColor": "#a7b7cc",
        "datazoomHandleWidth": "100",
        "datazoomLabelColor": "#333"
    }
}

function formatNumber (val) {
    var parts;
    let output = val;
    let precision = 0;
    let separator = ',';
    if (!isNaN(parseFloat(output)) && isFinite(output)) {
        output = Number(output);        
        if (output > 9999) {
            return Number(output/1000).toFixed(precision) + 'K';
        } else {
            output = (typeof precision !== 'undefined' ? output.toFixed(precision) : output).toString();
            parts = output.split('.');
            parts[0] = parts[0].toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + (separator || ','));
            return parts.join('.');
        }
        
    }
    return val;
}

echarts.registerTheme('skynet', config.theme);

export default {
    color: {
        blue: '#2e8bc9',
        red: '#d43935'
    },
    formatNumber (val) {
        return formatNumber(val);
    }
}

