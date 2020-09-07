<template>
  <div class="map-canvas"></div>
</template>

<script>
import GoogleMaps from '@/plugins/google-maps';

export default {
  name: 'GoogleMap',
  data: () => ({
    google: {},
    mapOptions: {
      zoom: 12,
      draggable: false,
      disableDefaultUI: true,
      disableDoubleClickZoom: true,
      panControl: false,
      center: { lat: -34.397, lng: 150.644 },
    },
    map: {},
    marker: {},
  }),
  async mounted() {
    try {
      await GoogleMaps().then(google => {
        this.google = google;

        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(this.showPosition);
        }
      });
    } catch (error) {
      console.error(error);
    }
  },
  methods: {
    showPosition(position) {
      this.$set(this.mapOptions, 'center', {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });

      this.map = new this.google.maps.Map(this.$el, this.mapOptions);
      this.marker = new this.google.maps.Marker({
        position: this.mapOptions.center,
        map: this.map,
        title: 'Pet',
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.map-canvas {
  height: 300px;
  width: 100%;
}
</style>
