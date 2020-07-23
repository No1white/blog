<template>
  <div class="container">
      <div class="pieChart">
        <pie-chart :chart-data="Piedata"></pie-chart>
      </div>
      <div class="lineChart">
        <line-chart :chart-data="datacollection"></line-chart>
      </div>

  </div>
</template>

<script>

  import LineChart from '../assets/LineChart'
  import PieChart from '../assets/PieChart'
export default {
  name: 'Log',
  data() {
    return {
      Piedata:{
        labels: ["日访客量", "周访客量", "月访客量", "总访客量", "评论数", "文章热度"],
        datasets: [
          {
            backgroundColor: [
              '#41B883',
              '#E46651',
              '#00D8FF',
              '#DD1B16',
              '#ffd661',
              '#1aa034'
            ],
            data: [40, 20, 80, 10,10,200]
          }
        ]
      },
      datacollection: {
        labels: ["日访客量", "周访客量", "月访客量", "总访客量", "评论数", "文章热度"],
        datasets: [
          {
            label: "总量",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            backgroundColor: '#f87979',
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [65, 59, 80, 81, 56, 55]
          }
        ]
      }
    }
  },
  methods: {

  },
  components: {
    PieChart,
    LineChart
  }
}
</script>

<style scoped lang="scss">
    .container{
      background: white;
      margin-top: 1rem;
      height: auto;
      display: flex;
      .pieChart{
        width: 50%;
      }
      .lineChart{
        width: 50%;

      }
    }
</style>
