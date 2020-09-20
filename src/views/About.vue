<template>
  <v-col>
    <h4 class="text-h4 text-center">About</h4>
    <v-row justify="center">
      <v-col cols="6">
        <p class="text-body-2 mb-4">
          {{ initContent.text }}
          <a
            @click="event => expandNext(event, -1)"
            class="pa-0 pb-4"
            href=""
            >{{ initContent.expandText }}</a
          >
        </p>

        <div
          v-for="({ text, expanded, expandText }, index) in content"
          :key="index"
        >
          <v-expand-transition>
            <p class="text-body-2 mb-4 shrink" v-show="expanded">
              {{ text }}
              <br />
              <a
                @click="event => expandNext(event, index)"
                href=""
                v-if="index !== content.length - 1"
                >{{ expandText }}</a
              >
            </p>
          </v-expand-transition>
        </div>

        <v-row justify="end">
          <v-btn
            @click="() => expandAll()"
            color="cyan"
            dark
            right
            rounded
            small
          >
            <span v-if="allExpanded">Hide All</span>
            <span v-if="!allExpanded">Reveal All</span>
          </v-btn>
        </v-row>
      </v-col>
    </v-row>
  </v-col>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'About',
  components: {},
  data: () => ({
    allExpanded: false,
    initContent: {
      text: `Hi! I'm Alisdair. A developer by day... and night, too, I guess! I
        first played with code back in the MySpace days (dating myself a bit
        here) - I would manipulate my page design with HTML, CSS, and some Javascript,
        but I never gave much thought into what I was doing; not thinking much
        about it much since then, honestly,`,
      expandText: 'until eventually...',
    },
    content: [
      {
        text: `I rediscovered development when I went to University. It was a weird
          throwback - rediscovering some of that knowledge I learned almost 13 years prior.
          Although, weirder still was that it wasn't the reason I was originally
          at the University of Lethbridge. I went to study film. I took a liking
          to video production when I immigrated to Canada in 2008. This followed after I tried
          going into audio engineering. The thing is, the audio engineering
          world is highly competitive, so I wanted to find another industry I
          could play around with until I found work.`,
        expanded: false,
        expandText: 'What reignited your interest in code? 🤔',
      },
      {
        text: `Web Design Fundamentals, with one of my favourite profs - Dana
          Cooley! (Thanks, Dana!) I was all of a sudden hooked on code again.
          I took some additional electives to bolster my knowledge in programming.
          I started experimenting with bigger and bigger projects. Right
          towards the end of my bachelor's in New Media, I ran out of cash.
          Me, and my now fiancee, moved out of Lethbridge and in with
          her parents to try and get stable jobs to start again.`,
        expanded: false,
        expandText: 'How did that transition to working in Edmonton go? 🚗',
      },
      {
        text: `I was pretty determined to make it work, I studied for six months and
          dived head-first into a web development gig. At first, the majority of work
          was graphic design, but I was later tasked to help design and speed up the
          WordPress site they were building. Now, I didn't know much about WordPress,
          even more so when it came to coding for it, but I managed to pick it up pretty
          quickly and find some glaring issues in the source code and the admin panel.
          Some of these issues were enough to freeze the server due to one their main
          marketing pages - yikes!`,
        expanded: false,
        expandText: 'Nice, so you fixed that up? 😃',
      },
      {
        text: `Yes 🎉🎉🎉! I dramatically increased the performance of both the page speed
          and SEO visibility. Eventually, my manager felt I had adapted to the project
          so reliably, that I was moved into a full-fledged web application to aid in the
          frontend. I began working with an AngularJS/Laravel stack. At this time, I hadn't
          much experience with web-apps. Build tools, a Vagrant setup, componentization,
          services, controllers... all of this was completely foreign to me! I studied
          hard, and worked harder to become as helpful to the team as possible.`,
        expanded: false,
        expandText: 'And then? 👏',
      },
      {
        text: `After a year or so, another opportunity arose. I moved to a new
          company and began working remotely. They had heavy emphasis on code consistency,
          strict code review, strong development practices, a required testing workflow,
          and a fresh tech stack - Polymer, Koa, Postgres. Eight months later, I was promoted
          to lead developer and was put in charge of reviewing and developing much
          more complex tasks. The more challenging the task, the more content I was.
          We later took on a new client who was using React/C# and were tasked to
          help optimize and improve their frontend. Our original client adopted a
          new workflow due to their rapid growth. They decided to use Odoo,
          a Python application, for operations management.`,
        expanded: false,
        expandText: 'LGTM 👍',
      },
      {
        text: `Unfortunately, our small company had to close its doors due
          to slowing client work and a fear of market instability at the start
          of 2020. I ended up being invited back to the first company, who had been
          acquired by a larger entity from Seattle. Since then, I have been
          working towards some side projects, one of which is to aid pet owners
          by utilize NFC technology. As always, I have been studying hard, working
          harder.`,
        expanded: false,
        expandText:
          'This is a lot about your development journey, do you have other interests? 🤷‍♀️',
      },
      {
        text: `I still make videos from time to time 🎥, photography 📷, drumming 🥁,
          guitar 🎸, and, on the odd occasion, I play around with audio
          production 🔉. And, even though this is related to development, I was
          actively involved for about a year with the Edmonton chapter of
          FreeCodeCamp 💻 helping to host the occasional meetup. We have so many pets!
          At this point, we're only just shy of owing our own petting zoo. Three
          cats 🐱, a dog 🐶, two ferrets 🍜, and two cockatiels 🐤.`,
        expanded: false,
      },
    ],
  }),
  methods: {
    expandNext(event: Event, index: number) {
      event.preventDefault();

      const lastIndex = this.content.length - 1;
      const nextIndex = index + 1;

      if (nextIndex === lastIndex) {
        this.allExpanded = true;
      }

      this.content[nextIndex].expanded = !this.content[nextIndex].expanded;

      if (nextIndex + 1 > lastIndex) {
        return;
      }

      for (
        let followingIndex = nextIndex + 1;
        followingIndex < this.content.length;
        followingIndex++
      ) {
        this.content[followingIndex].expanded = false;
      }

      this.allExpanded = false;
    },
    expandAll() {
      const expandAll = !this.allExpanded;

      for (let index = 0; index < this.content.length; index++) {
        this.content[index].expanded = expandAll;
      }

      this.allExpanded = expandAll;
    },
  },
});
</script>
