<template>
  <div>
    <b-modal 
      hide-header
      prevent-defaults
      ok
      @hidden="close"
      @ok="send(textInput)"
    >
      <b-form-textarea
        id="New Post"
        v-model="textInput"
        placeholder="What's happening?"
        rows="4"
      />
      <template v-slot:modal-footer="{ ok, cancel, hide }">
        <div v-if="validPost">
          <b style="color:grey">{{ charsLeft }}</b>
        </div>
        <div v-else>
          <b style="color:red">{{ charsLeft }}</b>
        </div>
        <b-button
          pill
          button-size="lg"
          @click="cancel()"
        >
          <font-awesome-layers class="fa">
            <font-awesome-icon :icon="['fas', 'trash']" />
          </font-awesome-layers>
        </b-button>
        <b-button
          pill
          variant="primary"
          button-size="lg"
          @click="ok()"
        >
          <font-awesome-layers class="fa">
            <font-awesome-icon :icon="['fas', 'arrow-right']" />
          </font-awesome-layers>
        </b-button>        
      </template>
    </b-modal>
  </div>
</template>

<script>
export default {
    name: "NewPost",
    data() {
      return {
        textInput : ""
      }
    },
    computed: {
      charsLeft: function() {
        return (this.textInput.length) + "/140"
      }, 
      validPost: function() {
        return this.textInput.length <= 140
      }
    },
    mounted() {
      this.$children[0].show();
    },
    methods: {
      close : function() {
        this.$emit('closeDialog');
      }, 
      send: function(data) {
        if (!data) { alert("can't make an empty post"); return; }        
        if (data.length > 140) { alert("post must be shorter than 140 characters") }

        this.$http.get("/newPost", {
          params: { 
            content : (data) ? data : "", 
            parent : this.$store.getters.replyTo
          }
        }).then(response => {
          console.log(response)
          this.$store.commit("newPost", response.data[0])
        }).catch(err => {
          console.error(err)
        });
      }
    }
}
</script>

<style>

</style>