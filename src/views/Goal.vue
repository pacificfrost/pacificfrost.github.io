<template>
  <v-container>
    <v-col>
      <v-row justify="center">
        <v-col cols="12" sm="10">
          <h4 class="text-h4 text-center">Goals</h4>

          <p class="text-body-2">
            Now that you know a little more about me, I'd like to show you a
            list of goals I'm working towards and where they roughly sit,
            including links to view those goals.
          </p>
        </v-col>
      </v-row>

      <v-row>
        <v-col
          :key="index"
          class="mx-auto"
          v-for="(goal, index) in sortedGoalsByCreatedDate"
        >
          <v-card class="mx-auto" max-width="340">
            <v-img
              :src="
                goal.imgUrl ||
                  'https://cdn.vuetifyjs.com/images/cards/docks.jpg'
              "
              class="white--text align-end"
              height="200px"
            >
              <v-col>
                <v-row align="end">
                  <v-col class="d-flex">
                    <h6 class="text-h6 mr-auto">{{ goal.title }}</h6>
                  </v-col>

                  <div>
                    <v-col>
                      <v-chip
                        :color="
                          goal.progress === 100
                            ? 'green'
                            : goal.status === 'Planning'
                            ? 'orange'
                            : 'light-blue'
                        "
                        dark
                        small
                        >{{ goal.status }}</v-chip
                      >
                    </v-col>
                  </div>
                </v-row>
              </v-col>
            </v-img>

            <v-progress-linear
              :buffer-value="getTimelineProgress(goal)"
              :color="
                goal.progress === 100
                  ? 'green'
                  : goal.status === 'Planning'
                  ? 'orange'
                  : 'light-blue'
              "
              :value="goal.progress"
              height="25"
              striped
            >
              <template v-slot="{ value }">
                <strong>{{ value }}%</strong>
              </template>
            </v-progress-linear>

            <v-card-subtitle class="pb-0">
              {{ formatDate(goal.startDate) }}
              <span v-if="goal.endDate">- {{ formatDate(goal.endDate) }}</span>
            </v-card-subtitle>

            <v-card-text class="text--primary">
              <div>{{ goal.description }}</div>
            </v-card-text>

            <v-card-actions>
              <a
                :href="goal.projectLink"
                :alt="`See Project: ${goal.title}`"
                class="text-decoration-none ml-auto"
                target="_blank"
                v-if="goal.projectLink"
                ><v-btn color="cyan" rounded dark small>See Project</v-btn></a
              >
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { compareDesc, differenceInDays, format, parse } from 'date-fns';

type Goal = {
  description: string;
  endDate: string;
  imgUrl: string | URL;
  progress: number;
  projectLink: string | URL | null;
  startDate: string;
  timelineProgress: number;
  title: string;
};

const dateFormat = 'yyyy/MM/dd';

export default Vue.extend({
  name: 'Goal',
  computed: {
    sortedGoalsByCreatedDate: function() {
      const today = new Date();

      return this.goals.slice().sort((a, b) => {
        return compareDesc(
          parse(a.startDate, dateFormat, today),
          parse(b.startDate, dateFormat, today)
        );
      });
    },
  },
  components: {},
  data: () => ({
    goals: [
      {
        description: `You're currently viewing this project! If you would like to see the source code, click the button below.`,
        endDate: '2020/10/15',
        startDate: '2020/08/24',
        projectLink: 'https://github.com/pacificfrost/pacificfrost.github.io',
        imgUrl: '',
        progress: 25,
        status: 'In Progress',
        title: 'Create a Portfolio',
      },
      {
        description:
          'Create MVP for Mapet. This side project I have been working on aims to make it easier for pet owners to access their pet data via NFC technology!',
        endDate: '2020/10/15',
        projectLink: 'https://pacificfrost.github.io/mapet',
        startDate: '2020/08/01',
        imgUrl: '',
        progress: 34,
        status: 'In Progress',
        title: 'Mapet MVP',
      },
      {
        description: `Helping out my good friend Emerson to create some good ol' Alberta race track footage.`,
        status: 'Complete',
        endDate: '2020/08/25',
        projectLink: 'https://www.youtube.com/watch?v=HOXd3uy3QOk',
        startDate: '2019/08/23',
        imgUrl: '',
        progress: 100,
        title: 'Track Day Media: Edmonton Speedway Revival Shoot',
      },
      {
        description: `Project GoKon is an app I'm looking to develop alongside my fiancee who is quite involved with cosplay.`,
        status: 'Planning',
        endDate: null,
        projectLink: null,
        startDate: '2020/01/01',
        imgUrl: '',
        progress: 5,
        title: 'GoKon',
      },
    ],
  }),
  methods: {
    formatDate(date: string) {
      return format(parse(date, dateFormat, new Date()), 'do MMM, yyyy');
    },
    getTimelineProgress(goal: Goal) {
      if (!goal.endDate) {
        return 0;
      }

      const today = new Date();

      const startParse = parse(goal.startDate, dateFormat, today);
      const endParse = parse(goal.endDate, dateFormat, today);

      const startEndDiff = differenceInDays(endParse, startParse);
      const startTodayDiff = differenceInDays(today, startParse);

      if (startTodayDiff > startEndDiff) {
        return 100;
      } else {
        return parseFloat(((startTodayDiff / startEndDiff) * 100).toFixed(2));
      }
    },
  },
});
</script>

<style lang="scss" scoped></style>
