import { shallowMount, createLocalVue } from '@vue/test-utils'
import VeeValidate from 'vee-validate';
import flushPromises from "flush-promises";

import HelloWorld from '@/components/HelloWorld.vue'


describe('HelloWorld.vue', () => {
  xit('renders props.msg when passed 1', () => {
    const msg = 'new message'
    const localVue = createLocalVue();
    localVue.use(VeeValidate);

    const wrapper = shallowMount(HelloWorld, {
      localVue:localVue,
      propsData: { msg }
    });

    expect(wrapper.text()).toMatch(msg)
  })

  it('renders props.msg when passed 2', async() => {
    const msg = 'new message'
    const localVue = createLocalVue();
    localVue.use(VeeValidate);

    const wrapper = shallowMount(HelloWorld, {
      localVue:localVue,
      propsData: { msg },
      sync:false,
    });

    await flushPromises();

    expect(wrapper.text()).toMatch(msg)
  })
});
