<template>
  <v-container>
    <v-col>
      <v-row justify="center">
        <v-col cols="12" sm="10">
          <h4 class="text-h4 text-center mb-2">About</h4>

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

          <v-col class="py-0">
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
        </v-col>
      </v-row>
    </v-col>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'About',
  components: {},
  data: () => ({
    allExpanded: false,
    initContent: {
      text: `Hi! I'm Alisdair. Welcome to my page!
        This introduction will take you through my journey of how I became a
        developer. What drives me, inspires me and what has motivated me in this career
        path. I spent many years trying to figure out where I wanted to go. I was never
        sure exactly what I wanted to do, but I found a great passion for development.
        My first introduction to code was back in the MySpace days (dating myself a bit
        here) - I would manipulate my page designs with HTML, CSS, and some Javascript,
        but I never gave much thought into what I was doing or even if this was something
        to expand upon.`,
      expandText: 'Until many years later...',
    },
    content: [
      {
        text: `I immigrated to Canada in 2008, hoping to go into music. I studied audio
          engineering but what I didn't realize was that audio engineering is an incredibly
          competitive field to work in. However, I was also interested film and design,
          and came across the New Media degree at the University of Lethbridge,
          it was kind of a "catch-all" degree for creative types. I figured with this
          degree I could discover some passions, find a more stable career path, or
          even a hidden talent in another field.`,
        expanded: false,
        expandText: 'How did you go from film and design, to development? 🤔',
      },
      {
        text: `Web Design Fundamentals, with one of my favourite profs - Dana
          Cooley! (Thanks, Dana!) This course had me instantly hooked - not only was
          I able to grasp it pretty easily, I also enjoyed the content and assignments.
          I took some additional electives to bolster my knowledge in programming,
          began experimenting with bigger and bigger projects, and even took
          the occasional side job to expand my skills outside of class. Nearing the
          end of my bachelor's in New Media, I was struggling both mentally and fiscally.
          Me, and my now fiancee, moved out of Lethbridge and in with her parents to
          try and get stable jobs, and ultimately, to take a break while we recouped our
          money and energy. Shortly after, I decided I would try and get a job - without
          a complete bachelors degree, as a web developer, and finally finish up the last of
          my degree online.`,
        expanded: false,
        expandText:
          'You had a goal, and a plan: Where did you go from there? 🔀',
      },
      {
        text: `I was pretty determined to make it work, I studied independently online to
          get ready for a web development job and managed to score my first gig.
          Initially, the majority of work was graphic design, but I was later tasked
          to help design and speed up the WordPress site they were building. Now, I didn't
          know much about WordPress, even less so when it came to coding for it, but I
          managed to pick it up pretty quickly and identified some glaring issues
          in the source code of their in-house built theme and the admin panel.
          Some of these issues were enough to freeze the server when a user would
          try to access one of their main marketing pages - yikes!`,
        expanded: false,
        expandText: 'Nice, so you fixed that up? 😃',
      },
      {
        text: `Yes 🎉🎉🎉! I dramatically increased the performance of both the page speed
          and SEO visibility. Eventually, my manager felt I had adapted to the project
          so reliably, that I was moved into a full-fledged web application to aid in the
          frontend and backend. I began working with an AngularJS/Laravel stack. At this time,
          I hadn't much experience with web-apps. Build tools, a Vagrant setup, componentization,
          services, controllers... all of this was completely foreign to me! I studied
          hard, and worked harder to become as helpful to the team as possible. I started off
          with clean up work and finding ways to scope the SASS, but later was given more
          responsibility in designing and building new user interfaces and connecting version
          one of payment gateway system.`,
        expanded: false,
        expandText: 'And then? 👏',
      },
      {
        text: `After almost two years with that project, another opportunity arose. I
          moved to a new company and began working remotely. They had heavy emphasis
          on code consistency, strict code review, strong development practices, a
          required testing workflow, and a fresh tech stack - Polymer, Koa, Postgres.
          Eight months later, I was promoted to lead developer and was put in charge
          of reviewing and developing much more complex tasks. The more challenging
          the task, the more content I was. We later took on a new client who was
          using React/C# and were tasked to help optimize and improve their frontend.
          Our original client adopted a new workflow due to their rapid growth and moved
          away from our custom solution. They decided to use Odoo, a Python application,
          for operations management. We were tasked with creating data migration solutions
          from our application to the new platform.`,
        expanded: false,
        expandText: 'LGTM 👍',
      },
      {
        text: `Unfortunately, our small company had to close its doors due
          to slowing client work and a fear of market instability at the start
          of 2020. I ended up being invited back to the first company, who had been
          acquired by a larger entity from Seattle. Since then, I have been
          working towards some side projects, one of which is to aid pet owners
          by utilizing NFC technology. As always, I have been studying hard, working
          harder.`,
        expanded: false,
        expandText: 'Do you have other interests? 🤷‍♀️',
      },
      {
        text: `I still make videos from time to time 🎥, some photography 📷, drumming 🥁,
          guitar 🎸, and, on the odd occasion, I play around with audio production 🔉.
          I was actively involved for about a year with the Edmonton chapter of
          FreeCodeCamp 💻 helping to host the occasional meetup and teaching
          some of the basics of web development to the attendees. Did I mention,
          we have so many pets? At this point, we may as well consider opening our own
          petting zoo. Three cats 🐱, a dog 🐶, two ferrets 🍜, and two cockatiels 🐤.`,
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
