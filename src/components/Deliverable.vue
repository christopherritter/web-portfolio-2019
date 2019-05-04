<template>
  <div class="deliverable">

    <h4>{{ this.title }}</h4>

    <p v-if="this.description">{{ this.description }}</p>

    <img
      :src="this.img"
      @click="showDeli(id)"
    >

    <!-- Deliverable Modal -->

    <b-modal
      :id="id"
      size="xl"
      hide-footer
      centered
      :title="this.title"
    >
      <p v-if="this.description">{{ this.description }}</p>
      <img
        class="m-2"
        :src="this.img"
        @click="hideDeli(id)"
      >
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "deliverable",
  props: ["title", "description", "img"],
  data() {
    return {
      id: null
    };
  },
  mounted() {
    this.id = this._uid;
  },
  methods: {
    showDeli(id) {
      this.$root.$emit("bv::show::modal", id, "#btnShow");
    },
    hideDeli(id) {
      this.$root.$emit("bv::hide::modal", id, "#btnShow");
    },
    toggleDeli(id) {
      this.$root.$emit("bv::toggle::modal", id, "#btnToggle");
    }
  }
};
</script>
