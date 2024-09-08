import { mount } from '@vue/test-utils';
import ShowCard from '../ShowCard.vue';
import { Show } from '../../types/Show';

const routerLinkStub = {
  template: '<a><slot /></a>',
  props: ['to'],
};

describe('ShowCard.vue', () => {
  it('renders props.show correctly', () => {
    const show: Show = {
      id: 1,
      name: 'Test Show',
      image: {
        original: 'http://example.com/image.jpg',
        medium: '',
      },
      genres: ['Drama', 'Action'],
      rating: { average: 7.5 },
      summary: 'This is a test summary.',
    };

    const wrapper = mount(ShowCard, {
      props: { show },
      global: {
        components: {
          'router-link': routerLinkStub,
        },
      },
    });

    const img = wrapper.find('img');
    expect(img.exists()).toBe(true);
    expect(img.attributes('src')).toBe(show.image.original);

    const title = wrapper.find('.card-title');
    expect(title.text()).toBe(show.name);

    const genresText = wrapper.find('.card-text').text();
    expect(genresText).toContain('Genres: Drama, Action');

    const ratingBadge = wrapper.find('span.badge');
    expect(ratingBadge.text()).toBe(show.rating.average.toString());
    expect(ratingBadge.classes()).toContain('bg-warning');

    const detailsLink = wrapper.findComponent(routerLinkStub);
    expect(detailsLink.exists()).toBe(true);
    expect(detailsLink.props('to')).toEqual({
      name: 'ShowDetails',
      params: { id: show.id },
    });
  });
});
