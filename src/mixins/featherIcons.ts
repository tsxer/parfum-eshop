export default {
  mounted() {
    this.initFeather();
  },

  updated() {
    this.$nextTick(() => {
      this.initFeather();
    });
  },

  methods: {
    initFeather() {
      const feather = (window as any).feather;
      if (feather) {
        feather.replace();
      }
    }
  }
};
