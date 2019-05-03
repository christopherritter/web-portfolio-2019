<template>
  <div class="about">

    <div class="row">
      <div class="jumbotron">
        <h1 class="display-4">Thinking Systemically about Design</h1>
        <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et commodo nisi. Aliquam erat volutpat. Nullam vel nisi quam. Ut eu porta nisl, nec tempus lacus. Phasellus placerat ut lacus sit amet laoreet. Vestibulum lacus mi, pharetra vel metus eget, mollis tempus nisl. Nulla eleifend dignissim porta. Fusce libero leo, lobortis ac erat a, placerat laoreet nibh. </p>
      </div>
    </div>

    <div class="row">
        <timeline></timeline>
    </div>
    
  </div>
</template>

<script>
import Timeline from "@/components/Timeline.vue";

export default {
  name: "about",
  components: {
    Timeline
  }
};
</script>

<style scoped>
h1 {
  color: #fff;
  font-size: 2.5rem;
  padding-bottom: 1rem;
}
.jumbotron {
  background-color: #3d3d3d;
}
p {
  color: #bcbcbc;
}
</style>
