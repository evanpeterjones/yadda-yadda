<template>
  <div>
    <b-modal 
      size="sm"
      hide-header
      hide-footer
      @hidden="hide"
    >
      <qrcode
        :value="url"
        :options="{width: 250}"
      />
    </b-modal>
  </div>
</template>

<script>
import VueQrcode from '@chenfengyuan/vue-qrcode';

export default {
    name: 'QRCode',
    components: {
        'qrcode': VueQrcode
    },
    data() {
        return { 
            url : "https://www.internetizens.net/sessionSync?cookie="
        }
    },
    mounted() {
        this.$children[0].show();
        
        this.$http.get('/sessionSync', { 
            params : {
                cookie : this.$cookies.get('yapp-session')
            }
        }).then(result => {
            this.url += result.data
        }).catch(error => {
            console.log(error)
        });
    },
    methods: {
        hide: function() {
            this.$emit('closeDialog');
        }
    }
}
</script>

<style>

</style>