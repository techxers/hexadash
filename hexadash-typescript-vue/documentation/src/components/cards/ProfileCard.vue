<template>
  <ProfileCardWrapper>
    <figcaption>
      <img
        class="ninjadash-profile-top-img"
        :src="require(`@/${bgImage}`)"
        alt="banner"
      />
      <div class="ninjadash-profile-content">
        <div class="ninjadash-profile-content__img">
          <img class="profile" :src="require(`@/${image}`)" alt="profile" />
        </div>
        <h4 class="ninjadash-profile-name">{{ title }}</h4>
        <p class="ninjadash-profile-text">{{ tag }}</p>
        <ul class="ninjadash-profile-socials">
          <li class="ninjadash-facebook">
            <router-link to="#">
              <font-awesome-icon
                class="super-crazy-colors"
                :icon="faFacebookF"
                size="1x"
                :style="{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }"
              />
            </router-link>
          </li>
          <li class="ninjadash-twitter">
            <router-link to="#">
              <font-awesome-icon
                class="super-crazy-colors"
                :icon="faTwitter"
                size="1x"
                :style="{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }"
              />
            </router-link>
          </li>
          <li class="ninjadash-dribble">
            <router-link to="#">
              <font-awesome-icon
                class="super-crazy-colors"
                :icon="faDribbble"
                size="1x"
                :style="{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }"
              />
            </router-link>
          </li>
        </ul>
      </div>
    </figcaption>
  </ProfileCardWrapper>
</template>
<script>
import { defineComponent } from "vue";
import propTypes from "vue-types";
import { ProfileCardWrapper } from "./style";
import {
  faFacebookF,
  faDribbble,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default defineComponent({
  components: { ProfileCardWrapper },
  props: {
    image: propTypes.string.def("static/img/users/1.png"),
    bgImage: propTypes.string.def("static/img/banner/BG.png"),
    title: propTypes.string.def("Robert Clinton"),
    tag: propTypes.string.def("Best Seller of the last month"),
  },
  setup() {
    return {
      faFacebookF,
      faDribbble,
      faTwitter,
    };
  },
});
</script>
