import { shallowMount, RouterLinkStub } from '@vue/test-utils';
import ShowCard from '@/components/ShowCard.vue';
import { Show } from '../../types/Show';

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

describe('ShowCard.vue', () => {
  it('renders correctly and matches the snapshot', () => {
    const wrapper = shallowMount(ShowCard, {
      props: {
        show,
      },
      global: {
        stubs: {
          RouterLink: RouterLinkStub,
        },
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('renders props.show correctly', () => {
    const wrapper = shallowMount(ShowCard, {
      props: {
        show,
      },
      global: {
        stubs: {
          RouterLink: RouterLinkStub,
        },
      },
    });

    const img = wrapper.find('img');
    expect(img.exists()).toBe(true);
    expect(img.attributes('src')).toBe(show.image.original);

    const title = wrapper.find('.card-title');
    expect(title.exists()).toBe(true);
    expect(title.text()).toBe(show.name);

    const genres = wrapper.find('.card-text');
    expect(genres.exists()).toBe(true);
    expect(genres.text()).toContain('Genres: Drama, Action');

    const rating = wrapper.find('.badge');
    expect(rating.exists()).toBe(true);
    expect(rating.text()).toBe(show.rating.average.toString());

    const detailsLink = wrapper.findComponent(RouterLinkStub);
    expect(detailsLink.exists()).toBe(true);
    expect(detailsLink.props('to')).toEqual({
      name: 'ShowDetails',
      params: { id: show.id },
    });
  });
});
