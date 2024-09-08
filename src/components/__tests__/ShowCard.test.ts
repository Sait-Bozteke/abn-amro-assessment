import { mount } from '@vue/test-utils';
import ShowCard from '../ShowCard.vue';
import { Show } from '../../types/Show';

// Mock the `router-link` component with `to` prop
const routerLinkStub = {
  template: '<a><slot /></a>',
  props: ['to']
};

describe('ShowCard.vue', () => {
  it('renders props.show correctly', () => {
    // Sample show object
    const show: Show = {
      id: 1,
      name: 'Test Show',
      image: {
        original: 'http://example.com/image.jpg',
        medium: ''
      },
      genres: ['Drama', 'Action'],
      rating: { average: 7.5 },
      summary: 'This is a test summary.'
    };

    // Mount the component
    const wrapper = mount(ShowCard, {
      props: { show },
      global: {
        components: {
          'router-link': routerLinkStub
        }
      }
    });

    // Check image source
    const img = wrapper.find('img');
    expect(img.exists()).toBe(true);
    expect(img.attributes('src')).toBe(show.image.original);

    // Check show name
    const title = wrapper.find('.card-title');
    expect(title.text()).toBe(show.name);

    // Check genres text
    const genresText = wrapper.find('.card-text').text();
    expect(genresText).toContain('Genres: Drama, Action');

    // Check rating badge
    const ratingBadge = wrapper.find('span.badge');
    expect(ratingBadge.text()).toBe(show.rating.average.toString());
    expect(ratingBadge.classes()).toContain('bg-warning');

    // Check Details button
    const detailsLink = wrapper.findComponent(routerLinkStub);
    expect(detailsLink.exists()).toBe(true);
    expect(detailsLink.props('to')).toEqual({ name: 'ShowDetails', params: { id: show.id } });
  });
});
