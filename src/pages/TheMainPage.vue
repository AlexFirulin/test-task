<template>
  <div class="user-default-views">
    <nav class="navigation">
      <ul class="nav-wrapper">
        <li><router-link to="/users">Get users</router-link> </li>
        <li><router-link to="/add">Add User</router-link> </li>
      </ul>
    </nav>
    <router-view />
  </div>
</template>

<script>
</script>

<style scoped>
a {
  text-decoration: none;
  color: #FFF;
}

.user-default-views {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}

.navigation {
  display: flex;
  flex-direction: column;
  align-self: stretch;
  align-items: stretch;
  width: 200px;

}

.nav-wrapper {
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 25px;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background: #2E2E48;
  box-shadow: 10px 11px 72px 0px rgba(0, 0, 0, 0.24);
}

.nav-wrapper>li {
  cursor: pointer;
  text-align: center;
  color: #FFF;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.dash-head {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>