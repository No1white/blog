<template>
  <div class="topNav">

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container">
              <a href="#" class="navbar-brand">空白</a>
              <button class="navbar-toggler" type="button"data-toggle="collapse" data-arget="#navbar">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupporedContent">
                <ul class="navbar-nav mx-3 mr-auto">
                  <li class="nav-item active">
                    <router-link to="/" class="nav-link">首页</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/technology" class="nav-link">技术专栏</router-link>
                  </li>
                  <li class="nav-item ">
                    <router-link to="/note" class="nav-link">生活笔记</router-link>
                  </li>
                  <li class="nav-item ">
                    <router-link to="/log" class="nav-link">日志</router-link>
                  </li>
                  <li class="nav-item ">
                    <router-link to="/comment" class="nav-link">留言板</router-link>
                  </li>
                  <li class="nav-item ">
                    <router-link to="/about" class="nav-link">关于我</router-link>
                  </li>

                </ul>
                <form class="form-inline my-2 my-lg-0">
                  <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                  <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
              </div>

            </div>
        </nav>


  </div>

</template>

<script>
    export default {
        name: "NavBar"
    }
</script>

<style scoped lang="scss">
  .topNav{



  }
</style>
