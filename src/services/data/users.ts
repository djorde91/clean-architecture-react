import { User } from '../../domain';

const users: Array<User> = [
  {
    username: 'Bob',
    alias: 'Bob the builder',
    description: 'I love building things',
    interests: ['building', 'cats'],
  },
  {
    username: 'Alice',
    alias: 'Alice Wonderland',
    description:
      'This is not my cup of tea. Go ask the rabbit if you need more time for your personal details and imaginations',
    interests: ['turtles'],
  },
  {
    username: 'Beatriz',
    alias: 'Beatriz Yolandez Ramos',
    description: 'Gamer Girl. Steam username: @beyoraGaming',
    interests: ['videogames'],
  },
  {
    username: 'Jenny',
    alias: 'Jenny Janice',
    description:
      'Music influencer. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, molestiae?',
    interests: ['wine', 'music'],
  },
  {
    username: 'Ben',
    alias: 'Ben Freeman',
    description:
      'Disney dogs are part of my life Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, aut?',
    interests: ['dogs', 'drawers', 'Disney'],
  },
];

export default users;
