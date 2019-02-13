<template>
  <div class="grading">
    <h1>初中一年级学生考试分数统计</h1>
    <div class="control">
      <label for="studentName">学生：</label>
      <input type="text" v-model="newTest.studentName" id="studentName" />
      <label for="score">分数：</label>
      <input type="text" v-model="newTest.score" id="score" />
      <button @click="addTestScore">添加</button>
    </div>
    <ul>
      <li v-for="test in tests">{{ test.studentName }}: {{test.score}}</li>
    </ul>
    <div class="total">
      <span>总分：{{ totalScore }} 分</span>
      <span>平均分：{{ averageScore }} 分</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Grading',
  data () {
    return {
      newTest: {
        studentName: 'Jack',
        score: 0
      },
      tests: [
        {
          studentName: 'Billy',
          score: 76
        },
        {
          studentName: 'Suzy',
          score: 85
        },
        {
          studentName: 'Emma',
          score: 93
        }
      ]
    }
  },
  watch: {
    averageScore: function () {
      this.autoSave()
    }
  },
  computed: {
    totalScore: function () {
      let totalArray = this.tests.reduce((acc, test) => {
        return acc + parseInt(test.score)
      }, 0)
      return totalArray
    },
    averageScore: function () {
      let totalArray = this.tests.reduce((acc, test) => {
        return acc + parseInt(test.score)
      }, 0)
      
      return parseFloat(totalArray / this.tests.length).toFixed(2)
    }
  },
  methods: {
    addTestScore: function () {
      this.tests.push({
        studentName: this.newTest.studentName,
        score: this.newTest.score
      })
      this.newTest.studentName = 'Jack'
      this.newTest.score = 0      
    },
    autoSave: function() {
      // 假设我们正在调用我们的后端来保存数据
      console.log('Calling Api, Saving data')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  margin: 0 0 25px;
  display: inline-block;
  border-bottom: 2px solid #69f;
  padding-bottom: 5px;
  color: #69f;
  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.4);
}

.control {
  margin-bottom: 20px;
}
.control label,
.control span {
  display: inline-block;
  vertical-align: middle;
}
.control input {
  height: 40px;
  padding: 5px 10px;
  box-sizing: border-box;
  border-radius: 3px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.15);
}
.control input:focus, .control input:active {
  outline: none 0;
  box-shadow: 0 0 4px rgba(0, 169, 244, 0.9);
  border-color: #00a9f4;
}
.control button {
  padding: 0px 20px;
  background: #ff0030;
  color: #fff;
  height: 32px;
  display: inline-block;
  font-size: 16px;
  border: 2px dashed #fff;
  border-radius: 3px;
  box-shadow: 0 0 0 4px #ff0030, 2px 1px 6px 4px rgba(10, 10, 0, 0.5);
  text-shadow: -1px -1px #aa3030;
  font-weight: normal;
  box-sizing: border-box;
  margin-left: 10px;
}

ul {
  list-style: none outside none;
  text-align: left;
  margin: 0 0 20px;
  padding: 0 0 20px;
  display: flex;
  flex-wrap: wrap;
  border-bottom: 3px double rgba(0, 0, 0, 0.8);
}
ul li {
  line-height: 30px;
  flex: 0 0 33.3333%;
}

.total {
  display: flex;
  justify-content: space-around;
  font-size: 1.5rem;
  font-weight: bold;
}
</style>
