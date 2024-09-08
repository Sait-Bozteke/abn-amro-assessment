import { mount } from '@vue/test-utils';
import ShowCard from '@/components/ShowCard.vue';
import { Show } from '../../types/Show';

test('renders props.show correctly', () => {
  const show: Show = {
    id: 1,
    name: 'Test Show',
    image: { 
      original: 'http://example.com/image.jpg',
      medium: 'http://example.com/image-medium.jpg'
    },
    genres: ['Drama', 'Action'],
    rating: { average: 7.5 },
    summary: 'This is a test summary.',
  };

  const wrapper = mount(ShowCard, {
    props: { show },
  });

  const img = wrapper.find('img');
  const title = wrapper.find('.card-title');
  const text = wrapper.findAll('.card-text');

  expect(img.exists()).toBe(true);
  expect(title.exists()).toBe(true);
  expect(text.length).toBe(3);

  if (img.exists()) {
    expect(img.attributes('src')).toBe(show.image.original);
  }
  if (title.exists()) {
    expect(title.text()).toBe(show.name);
  }

  const genreText = text[0].text();
  const summaryText = text[1].text();
  const ratingText = text[2].text();

  expect(genreText).toContain('Genres: Drama, Action');
  expect(summaryText).toBe(show.summary);
  expect(ratingText).toContain(`Rating: ${show.rating.average}`);
});
