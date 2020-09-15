<template>
  <v-col class="pa-0">
    <p-hero></p-hero>

    <v-col>
      <v-row id="section1" justify="space-between" align="center">
        <v-col>
          <h4 class="text-h4 text-center">About</h4>
          <v-row justify="center">
            <v-col cols="8">
              <p class="text-body-2">
                Hi! I'm Alisdair. A developer by day... and night, too, I guess!
                I first played with code back in the MySpace days (dating myself
                a bit here) - playing with HTML, CSS and some javascript, not
                really thinking much into it - and I never really thought about
                it much since then.
              </p>
              <p class="text-body-2">
                I rediscovered development when I went to University. It was a
                weird throwback, rediscovering some of those skills I now use
                daily. Although, weirder still that it wasn't the reason I was
                originally at the University of Lethbridge. I went to study
                film. I took a liking to film when I immigrated to Canada in
                2008, this was after I tried going into audio engineering. The
                thing is, the audio engineering world is highly competitive, so
                I wanted to find another industry I could play around with until
                I found work.
              </p>
              <p class="text-body-2">
                Then all of a sudden... Web Design Fundamentals, with one of my
                favourite profs - Dana Cooley! (Thanks, Dana!) I was all of a
                sudden hooked on code again. I started experimenting with bigger
                and bigger projects. Right towards the end of my bachelors in
                New Media, I ran out of cash. Me, and my now fiancee, moved out
                of Lethbridge to try and get stable jobs.
              </p>
              <p class="text-body-2">
                Pretty determined to make it work with development, I dived
                head-first into a development gig. At first, the pay was
                miniscule, the majority of work was design, but I was later
                tasked to help design and speed up the Wordpress site they were
                using. Now, I didn't know much about Wordpress, even more so
                when it came to the code, but I managed to pick it up pretty
                quickly and find some glaring issues in both the code and the
                setup of the site.
              </p>
              <p class="text-body-2">
                I started the clean up process, ensuring as much as possible I
                was improving both pagespeed and SEO visibility. Eventually it
                led to me being moved into a full fledged web application
                developer. In no time at all, I was working with an AngularJS
                and Laravel/MySQL stack.
              </p>
              <p class="text-body-2">
                After a while, another opportunity arose. I moved company and
                began working remotely. This company ended up being quite the
                step up. Heavy emphasis on code consistency, strict code review,
                strong development practices and a required testing workflow.
                Not long after being hired, I was moved up to a lead developer
                position and was put in charge of the more complex tasks. The
                harder the task, the happier I was.
              </p>
              <p class="text-body-2">
                Unfortunately, the company had to lay its staff off due to
                slowing client work, and here we are today! As a side project, I
                am working on an app for pet owners to utilize NFC technology,
                studying hard and working harder.
              </p>
              <h5 class="text-subtitle-1 text-center">
                But what else do you do?
              </h5>
              <p class="text-body-2">
                I have other hobbies, too! I still make videos from time to
                time, photography. I play drums, guitar, and on the odd occasion
                I still play around with audio production (We won't talk about
                my short stint as a DJ in University). And, even though it is
                related to development, I was actively involved in helping with
                the Edmonton chapter of FreeCodeCamp - hosting the occasional
                meetup.
              </p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <v-row id="section2" justify="space-between" align="center">
        <v-col>
          <h4 class="text-h4 text-center">Goals</h4>
        </v-col>
      </v-row>

      <v-row id="section3" justify="space-between" align="center">
        <v-col>
          <h4 class="text-h4 text-center">Motiviations</h4>
        </v-col>
      </v-row>

      <v-row id="section4" justify="space-between" align="center">
        <v-col>
          <h4 class="text-h4 text-center">Achievements</h4>
        </v-col>
      </v-row>
    </v-col>
  </v-col>
</template>

<script lang="ts">
import Vue from 'vue';
import Hero from '@/views/Hero.vue';

export default Vue.extend({
  name: 'Home',
  components: {
    'p-hero': Hero,
  },
  data: () => ({}),
});
</script>
