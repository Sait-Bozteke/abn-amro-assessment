import { mount } from '@vue/test-utils';
import GenreView from '../GenreView.vue';
import { useShowStore } from '../../store/showStore';
import { createRouter, createMemoryHistory, RouteRecordRaw } from 'vue-router';

jest.mock('../../store/showStore', () => ({
  useShowStore: jest.fn().mockReturnValue({
    shows: [
      { id: 1, name: 'Breaking Bad', genres: ['Drama', 'Crime'] },
      { id: 2, name: 'Friends', genres: ['Comedy'] },
    ],
    fetchAllShows: jest.fn(),
    loading: false,
    error: null,
  }),
}));

const routes: RouteRecordRaw[] = [
  { path: '/genre/:genre', name: 'GenreView', component: GenreView },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

describe('GenreView.vue', () => {
  it('renders correctly and matches snapshot', async () => {
    const wrapper = mount(GenreView, {
      global: {
        plugins: [router],
      },
      props: {
        genre: 'Drama',
      },
    });

    await router.isReady();
    await wrapper.vm.$nextTick();

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('displays loading spinner while fetching shows', async () => {
    (useShowStore as unknown as jest.Mock).mockReturnValue({
      shows: [],
      fetchAllShows: jest.fn(),
      loading: true,
      error: null,
    });

    const wrapper = mount(GenreView, {
      global: {
        plugins: [router],
      },
      props: {
        genre: 'Drama',
      },
    });

    await wrapper.vm.$nextTick();

    expect(wrapper.find('.spinner-border').exists()).toBe(true);
  });

  it('displays error message if there is an error', async () => {
    (useShowStore as unknown as jest.Mock).mockReturnValue({
      shows: [],
      fetchAllShows: jest.fn(),
      loading: false,
      error: 'Something went wrong',
    });

    const wrapper = mount(GenreView, {
      global: {
        plugins: [router],
      },
      props: {
        genre: 'Drama',
      },
    });

    await wrapper.vm.$nextTick();

    expect(wrapper.find('.alert-danger').text()).toBe('Something went wrong');
  });
});
