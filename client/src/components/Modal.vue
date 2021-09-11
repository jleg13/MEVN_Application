<template>
  <div class="modal fade" :id='modalId' tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <!-- <h4>{ { modalLabel} } <font-awesome-icon :icon="['fa', 'lock']" /></h4> -->
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <!-- <font-awesome-icon :icon="['fa', 'question-circle']" /> { { modalQeustion} } -->
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" :id="modalBtnId" class="btn btn-primary">
            {{modalInstruction}}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    modalId: {
      type: String,
      required: true,
    },
    modalLabel: {
      type: String,
      required: true,
    },
    modalQuestion: {
      type: String,
      required: true,
    },
    modalInstruction: {
      type: String,
      required: true,
    },
    modalBtnId: {
      type: String,
      required: true,
    },
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/components/_modal.scss";
</style>
