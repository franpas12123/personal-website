<script setup lang="ts">
// import { useTemplateRef, ref, onMounted } from "vue";

import AppHeader from "./components/AppHeader.vue";
import AppSection from "./components/AppSection.vue";
import AppExperience from "./components/AppExperience.vue";
import AppFooter from "./components/AppFooter.vue";
import AppCTA from "./components/AppCTA.vue";

import { useStore } from "./stores/store";

// import { useElementVisibility } from "@vueuse/core";

// const refs = ref([]);
const { navigation } = useStore();

</script>

<template>
  <div class="sticky left-0 top-0">
  </div>
  <div
    class="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0"
  >
    <div class="lg:flex lg:justify-between lg:gap-4">
      <AppHeader />
      <main class="pt-24 lg:w-1/2 lg:py-24">
        <section :ref="navigation.about.name" id="about">
          <AppSection title="About" ariaLabel="About me">
            <p>
              When I first started coding in high school, I struggled to grasp
              the concepts. But that didn't deter me. Today, as a seasoned
              developer, I've built and maintained complex websites for a
              diverse range of clients.
            </p>
            <br />
            <p>
              My primary goal is to understand your unique business needs and
              deliver web solutions that exceed your expectations. I take a
              collaborative approach, working closely with you to identify
              challenges and find effective solutions. My experience in
              fast-paced environments has honed my ability to meet deadlines and
              deliver exceptional results. I'm skilled in crafting engaging and
              interactive websites that seamlessly integrate various
              technologies. As a crucial aspect of your business, your website
              needs to adapt to evolving trends.
            </p>
            <br />
            <p>
              Whether you have technical or non-technical questions, I'm here to
              help you leverage web development to achieve your business
              objectives.
            </p>
            <br />
            <p>
              Outside of work, I enjoy relaxing with my family, playing yoyo,
              and staying up-to-date with the latest trends.
            </p>
          </AppSection>
        </section>

        <section :ref="navigation.experience.name" id="work-experience">
          <AppSection title="Work Experience" ariaLabel="Work experience">
            <AppExperience
              dates="Dec 2021 — present"
              title="Frontend Developer"
              company="BCS Technology"
              companyUrl="https://bcstechnology.com.au/"
              :technologies="[
                'Vue2',
                'Vue3',
                'Vuex',
                'Pinia',
                'Vite',
                'Vitest',
                'Vue-Test-Utils',
                'Bootstrap Vue',
                'Bootstrap',
                'Capacitor',
                'Ionic',
                'Braze',
                'Storyblok',
              ]"
            >
              <p>
                I build and maintain reusable frontend components that form the
                foundation of PizzaHut AU's main and admin interfaces. Worked
                closely with cross-functional teams to ensure alignment with
                design, marketing, and product goals. Successfully transitioned
                the admin and main frontend from Vue 2 to Vue 3, modernizing the
                technology stack and enhancing performance.
              </p>
            </AppExperience>

            <AppExperience
              dates="April 2020 — Dec 2021"
              title="Frontend Developer"
              company="Apt Software Consulting"
              :technologies="[
                'Vue2',
                'Javascript',
                'Ionic Vue',
                'Vue Apex Charts',
                'Axios',
                'Netlify',
              ]"
            >
              <div>
                <p>
                  During my tenure at APT, I contributed to three significant
                  projects:
                </p>

                <ol class="ml-5 mt-2 list-decimal font-light">
                  <li>
                    Developed a comprehensive online workbook using VueJS. To
                    enhance accessibility, I created a mobile-optimized version
                    utilizing Ionic Vue.
                  </li>
                  <li>
                    Designed and implemented a mobile application for a
                    home-health agency. This app streamlined document management
                    for caregivers, nurses, and office staff.
                  </li>
                  <li>
                    Leveraged Vue Apex Charts to create visually compelling data
                    representations. I transformed raw project data into
                    insightful bar, line, and pie charts.
                  </li>
                </ol>
              </div>
            </AppExperience>

            <AppExperience
              dates="Jan 2019 — May 2019"
              title="Full Stack Developer"
              company="Systems and Experts"
              :technologies="[
                'React',
                'Express',
                'MongoDB',
                'NodeJS',
                'Ethereum (Solidity)',
                'Hyperledger Fabric',
                'Truffle Suite',
              ]"
            >
              <div>
                <p>
                  During my tenure at SNE, I contributed to two significant
                  projects:
                </p>

                <ol class="ml-5 mt-2 list-decimal font-light">
                  <li>
                    Developed a web-based asset tracking platform for supply
                    chain management. This tool provided real-time visibility
                    and traceability of goods throughout the supply chain.
                  </li>
                  <li>
                    Created a decentralized voting system utilizing blockchain
                    technology. This innovative platform enabled secure user
                    registration, voting, and transparent recording of
                    transactions on a local blockchain.
                  </li>
                </ol>
              </div>
            </AppExperience>
          </AppSection>
        </section>

        <section
          :ref="navigation['frelance-experience'].name"
          id="freelance-experience"
        >
          <AppSection
            title="Freelance Experience"
            ariaLabel="Freelance experience"
          >
            <AppExperience
              dates="Oct 2023 — Oct 2023"
              title="NodeJS Developer"
              company="SMSW Media"
              :technologies="['JS', 'NodeJS', 'Puppeteer']"
            >
              <p>
                Created a LinkedIn Sales Navigator scrapper that extracts leads.
              </p>
            </AppExperience>
            <AppExperience
              dates="May 2023 — July 2023"
              title="Full Stack Developer"
              company="Rapol"
              :technologies="[
                'JS/TS',
                'Vue 3',
                'Ionic Vue',
                'Supabase',
                'Netlify',
                'Gitlab',
                'Monday.com',
              ]"
            >
              <p>
                Created an ecommerce platform for a local business based on a
                mockup.
              </p>
            </AppExperience>
            <AppExperience
              dates="May 2022 — Oct 2022"
              title="Frontend Developer"
              company="CodeAttest"
              :technologies="['JS', 'Vue 2', 'Bootstrap Vue', 'Nuxt', 'Axios']"
            >
              <p>
                Created an interactive survey and diagnosis website based on a
                mockup.
              </p>
            </AppExperience>
            <AppExperience
              dates="May 2021 — Nov 2021"
              title="Full Stack Developer"
              company="PlaySport"
              :technologies="['JS', 'NodeJS', 'PostgreSQL', 'Docker']"
            >
              <p>Website maintenance of a monolithic website.</p>
            </AppExperience>
            <AppExperience
              dates="Dec 2020 — Jan 2021"
              title="Frontend Developer"
              company="Miro AI"
              :technologies="[
                'Vue 2',
                'Vue 2 Dropzone',
                'JS',
                'Bitbucket',
                'Postman',
              ]"
            >
              <p>
                Integrated with the client's custom APIs to develop and
                implement new features within their Vue-based website.
              </p>
            </AppExperience>
            <AppExperience
              dates="Sept 2020 — Oct 2020"
              title="Full Stack Developer"
              company="Black Kind"
              :technologies="['PHP Laravel', 'MySQL', 'JS', 'Bootstrap']"
            >
              <p>
                Developed a customized weekly challenge website tailored to the
                specific needs of my client.
              </p>
            </AppExperience>
            <AppExperience
              dates="Feb 2020 — Feb 2020"
              title="Frontend Developer"
              company="JDO Univers"
              :technologies="['Bootstrap', 'JS']"
            >
              <p>
                Revamped my client's website's user interface to provide a
                modern and visually appealing design. Additionally, I ensured
                the website was fully responsive for optimal viewing across
                various devices.
              </p>
            </AppExperience>
            <AppExperience
              dates="Nov 2019 — Feb 2020"
              title="Full Stack Developer"
              company="Black Kind"
              :technologies="[
                'Vue 2',
                'JS',
                'Boostrap',
                'PHP Laravel',
                'MySQL',
              ]"
            >
              <p>
                Updating and enhancing a video subscription portal CMS built
                with Vue and Laravel.
              </p>
            </AppExperience>
            <AppExperience
              dates="Nov 2019 — Feb 2020"
              title="Frontend Developer"
              company="FireCheck"
              :technologies="[
                'Vue 2',
                'JS',
                'Boostrap',
                'PHP Laravel',
                'MySQL',
              ]"
            >
              <p>
                Revamped the website's design to provide a contemporary and
                visually appealing user experience.
              </p>
            </AppExperience>
            <AppExperience
              dates="Sept 2019 — April 2020"
              title="Full Stack Developer"
              company="Multipoint Network"
              :technologies="[
                'Vue 2',
                'JS',
                'Boostrap',
                'PHP Laravel',
                'MySQL',
              ]"
            >
              <p>
                I managed and expanded the functionality of an existing website
                that issues insurance certificates.
              </p>
            </AppExperience>
          </AppSection>
        </section>

        <section
          :ref="navigation.contact.name"
          id="contact"
          aria-label="Contact me"
          class="my-20"
        >
          <AppCTA />
        </section>

        <AppFooter />
      </main>
    </div>
  </div>
</template>

<style scoped></style>
