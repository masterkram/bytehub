---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/11512229?v=4',
    name: 'Mark Bruderer',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/masterkram' },
      { icon: 'twitter', link: 'https://twitter.com/mark_bruderer' }
    ]
    },
    {
    avatar: 'https://avatars.githubusercontent.com/u/72131250?v=4',
    name: 'Stijn Schuurman',
    title: 'Contributor',
    links: [
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/58363594?v=4',
    name: 'Dina Lazorenko',
    title: 'Contributor',
    links: [
    ]
  },
    {
    avatar: 'https://avatars.githubusercontent.com/u/38734427?v=4',
    name: 'Daniel Lizarazo Fuentes',
    title: 'Contributor',
    links: [
    ]
  },
      {
    avatar: 'https://avatars.githubusercontent.com/u/83342963?v=4',
    name: 'Krzysztof',
    title: 'Contributor',
    links: [
    ]
  },
        {
    avatar: 'https://avatars.githubusercontent.com/u/74464239?v=4',
    name: 'Stefan Windemuller',
    title: 'Contributor',
    links: [
    ]
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Our Team
    </template>
    <template #lead>
      The development of VitePress is guided by an international
      team, some of whom have chosen to be featured below.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>

