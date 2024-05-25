document.addEventListener('DOMContentLoaded', function() {
Highcharts.chart(null,
{
  accessibility: {
  point: {
  valueDescriptionFormat: '{index}. Age {xDescription}, {value}%'
}
},
  chart: {
  height: 600,
  type: 'bar',
  width: 800
},
  credits: {
  enabled: false
},
  exporting: {
  enabled: false
},
  legend: {
  symbolHeight: 12,
  symbolRadius: 0,
  symbolWidth: 12
},
  plotOptions: {
  series: {
  stacking: 'normal',
  dataLabels: {
  color: 'white',
  enabled: true,
  formatter: function() {
 return Math.abs(this.y); },
  style: {'textOutline': 'none', 'fontSize': '11px', 'fontWeight': 'normal'}
},
  type: 'series'
}
},
  series: [{
  data: [[-503],
[-490],
[-601],
[-710],
[-543],
[-469],
[-297],
[-222],
[-189],
[-151],
[-149],
[-190],
[-150],
[-158],
[-191],
[-222]],
  name: 'Male',
  color: '#A7EA52',
  dataLabels: {
  align: 'left',
  x: 1,
  y: -1
},
  type: 'bar'
},
{
  data: [[155],
[185],
[294],
[560],
[624],
[536],
[480],
[397],
[292],
[231],
[167],
[142],
[93],
[99],
[140],
[158]],
  name: 'Female',
  color: '#5DCEAF',
  dataLabels: {
  align: 'right',
  x: -1,
  y: -1
},
  type: 'bar'
}],
  subtitle: {
  align: 'left'
},
  title: {
  align: 'left',
  text: 'Number of Cases by Age Group and Sex'
},
  tooltip: {
  formatter: function() {
 return `<b>${this.series.name}</b>: ${Math.abs(this.y)}`; }
},
  xAxis: [{
  accessibility: {
  description: 'Age (male)'
},
  categories: ['75+',
'70-74',
'65-69',
'60-64',
'55-59',
'50-54',
'45-49',
'40-44',
'35-39',
'30-34',
'25-29',
'20-24',
'15-19',
'10-14',
'5-9',
'0-4'],
  labels: {
  step: 1
},
  reversed: true
}],
  yAxis: {
  accessibility: {
  description: 'Population in absolute values',
  rangeDescription: 'Range: 0 to 800'
}
}
},
);
});