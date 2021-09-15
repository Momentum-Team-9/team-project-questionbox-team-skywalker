export const questions = [
  {
    id: 1,
    title: 'Deep question?',
    body: 'Why is the sky blue?',
    created_at: '9/15/2021, 11:54:05 AM',
    owner: 'Kermit',
    answer_count: 3,
    favorited: true,
  },
  {
    id: 2,
    title: 'Deep question?',
    body: 'Which came first, the chicken or the egg?',
    created_at: '9/15/2021, 11:54:05 AM',
    owner: 'Miss Piggy',
    answer_count: 2,
    favorited: true,
  },
];
export const question = {
  id: 1,
  body: 'Why is the sky blue?',
  created_at: '9/15/2021, 11:54:05 AM',
  owner: 'Kermit',
  answers: [
    {
      id: 1,
      body: '42',
      created_at: '9/15/2021, 11:54:05 AM',
      owner: 'Miss Piggy',
      accepted: true,
      favorited: false,
      question_id: 1,
    },
  ],
  favorited: true,
};

export const answer = {
  id: 1,
  body: '42',
  created_at: '9/15/2021, 11:54:05 AM',
  author: 'Miss Piggy',
  accepted: true,
  favorited: false,
  question_id: 1,
};
