<template>
  <transition name="message-fade">
    <div :class="[
        'message',
        `message-${ type }`]"
        v-show="visible"
        id="message">
      <span>{{message}}</span>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      visible: false,
      message: "warning",
      duration: 2000,
      type: "warning",
      timer: null,
      closed: false
    };
  },

  watch: {
    closed(newVal) {
      if (newVal) {
        // console.log("closed newVal", newVal);
        this.visible = false;
        this.$el.addEventListener("transitionend", this.destroyElement);
      }
    }
  },

  methods: {
    destroyElement() {
      this.$el.removeEventListener("transitionend", this.destroyElement);
      this.$destroy(true);
      this.$el.parentNode.removeChild(this.$el);
    },

    close() {
      // console.log("close exe");
      this.closed = true;
    },

    clearTimer() {
      clearTimeout(this.timer);
    },

    startTimer() {
      if (this.duration > 0) {
        // console.log("this.duration", this.duration);
        this.timer = setTimeout(() => {
          // console.log("this.closed", this.closed);
          if (!this.closed) {
            this.close();
          }
        }, this.duration);
      }
    }
  },
  mounted() {
    this.startTimer();
  }
};
</script>
<style rel="stylesheet/scss" lang="scss">
@import "./Message.scss";
</style>
