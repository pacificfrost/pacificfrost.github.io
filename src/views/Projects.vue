<template>
  <v-container>
    <v-col>
      <v-row justify="center">
        <v-col cols="12" sm="10">
          <h4 class="text-h4 text-center mb-2">Projects</h4>

          <p class="text-body-2">
            Now that you know a little more about me, I'd like to show you a
            list of projects I'm working towards and where they roughly sit,
            including links to view those projects.
          </p>
        </v-col>
      </v-row>

      <v-row>
        <v-col
          :key="index"
          class="mx-auto"
          v-for="(project, index) in sortedProjectsByCreatedDate"
        >
          <v-card class="mx-auto" max-width="340">
            <v-img
              :src="
                project.imgUrl ||
                  'https://cdn.vuetifyjs.com/images/cards/docks.jpg'
              "
              class="white--text align-end"
              height="200px"
              lazy-src="/img/lazy-img.png"
              min-width="340"
            >
              <template v-slot:placeholder>
                <v-row align="center" class="fill-height ma-0" justify="center">
                  <v-progress-circular
                    color="teal lighten-5"
                    indeterminate
                  ></v-progress-circular>
                </v-row>
              </template>

              <v-col>
                <v-row align="end">
                  <v-col class="d-flex">
                    <h6 class="text-h6 mr-auto">{{ project.title }}</h6>
                  </v-col>

                  <div>
                    <v-col>
                      <v-chip
                        :color="
                          project.progress === 100
                            ? 'green'
                            : project.status === 'Planning'
                            ? 'orange'
                            : 'light-blue'
                        "
                        dark
                        small
                        >{{ project.status }}</v-chip
                      >
                    </v-col>
                  </div>
                </v-row>
              </v-col>
            </v-img>

            <v-progress-linear
              :buffer-value="getTimelineProgress(project)"
              :color="
                project.progress === 100
                  ? 'green'
                  : project.status === 'Planning'
                  ? 'orange'
                  : 'light-blue'
              "
              :value="project.progress"
              height="25"
              striped
            >
              <template v-slot="{ value }">
                <strong>{{ value }}%</strong>
              </template>
            </v-progress-linear>

            <v-card-subtitle class="pb-0">
              {{ formatDate(project.startDate) }}
              <span v-if="project.endDate"
                >- {{ formatDate(project.endDate) }}</span
              >
            </v-card-subtitle>

            <v-card-text class="text--primary">
              <div>{{ project.description }}</div>
            </v-card-text>

            <v-card-actions>
              <a
                :href="project.projectLink"
                :alt="`See Project: ${project.title}`"
                class="text-decoration-none ml-auto"
                target="_blank"
                v-if="project.projectLink"
                ><v-btn color="teal" rounded dark small>See Project</v-btn></a
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

type Project = {
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
  name: 'Project',
  computed: {
    sortedProjectsByCreatedDate: function() {
      const today = new Date();

      return this.projects.slice().sort((a, b) => {
        return compareDesc(
          parse(a.startDate, dateFormat, today),
          parse(b.startDate, dateFormat, today)
        );
      });
    },
  },
  components: {},
  data: () => ({
    projects: [
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
    getTimelineProgress(project: Project) {
      if (!project.endDate) {
        return 0;
      }

      const today = new Date();

      const startParse = parse(project.startDate, dateFormat, today);
      const endParse = parse(project.endDate, dateFormat, today);

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
