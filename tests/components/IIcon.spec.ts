import { shallowMount } from '@vue/test-utils';
import { IIcon } from '../../src/components';
import { inkCheck } from "../../src/packs/inkline";
import { IconController } from "../../src/controllers";

IconController.add('icon', inkCheck);

describe('components', () => {
   describe('IIcon', () => {
       it('should render correctly', () => {
           const wrapper = shallowMount(IIcon, {
               global: {
                   provide: {
                       inklineIcons: IconController
                   }
               },
               props: {
                   name: 'icon'
               }
           });

           expect(wrapper.html()).toMatchSnapshot();
       });

       it('should not render if specified icon does not exist', () => {
           expect(() => shallowMount(IIcon, {
               global: {
                   provide: {
                       inklineIcons: IconController
                   }
               },
               props: {
                   name: 'doesnotexist'
               }
           })).toThrowError();
       });
   });
});
