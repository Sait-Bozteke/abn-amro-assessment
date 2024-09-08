import { mount } from '@vue/test-utils';
import CategoryCard from '@/components/CategoryCard.vue'; // Adjust the path as necessary

describe('CategoryCard.vue', () => {
  it('renders genre and description correctly', () => {
    const genre = 'Comedy';
    const wrapper = mount(CategoryCard, {
      props: { genre },
    });

    expect(wrapper.find('.card-title').text()).toBe(genre);

    expect(wrapper.find('.card-text').text()).toBe(
      `Explore the best ${genre} shows.`,
    );
  });
});
