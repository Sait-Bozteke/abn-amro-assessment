import { shallowMount } from '@vue/test-utils';
import HomeView from '@/views/HomeView.vue';
import { useGenreStore } from '../../store/genreStore';

// Mock the genre store
jest.mock('../../store/genreStore', () => ({
  useGenreStore: jest.fn(),
}));

describe('HomeView.vue', () => {
  it('renders correctly and matches snapshot', () => {
    (useGenreStore as unknown as jest.Mock).mockReturnValue({
      genres: ['Comedy', 'Drama', 'Action'],
    });

    const wrapper = shallowMount(HomeView);
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('renders the correct number of CategoryCard components', () => {
    (useGenreStore as unknown as jest.Mock).mockReturnValue({
      genres: ['Comedy', 'Drama', 'Action'],
    });

    const wrapper = shallowMount(HomeView);
    expect(wrapper.findAllComponents({ name: 'CategoryCard' }).length).toBe(3);
  });
});
