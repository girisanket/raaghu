import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsBadgeModule, RdsButtonModule, RdsCardModule, RdsIconLabelModule, RdsIconModule, RdsLabelModule, RdsSelectListModule } from '@libs/rds-elements';
import { NgxTranslateModule } from '@libs/shared';
import { RdsCompShoppingCartProductComponent } from './rds-comp-shopping-cart-product.component';

export default {
  title: 'Components/Shopping cart',
  component: RdsCompShoppingCartProductComponent,
  decorators: [
    moduleMetadata({
      imports: [
        FormsModule, ReactiveFormsModule, RdsButtonModule, 
         RdsCardModule, RdsBadgeModule, NgxTranslateModule, RdsLabelModule ,RdsIconModule , RdsIconLabelModule, RdsSelectListModule
      ],
      providers: [
        FormBuilder
      ],
    })
  ]
} as Meta;

const Template: Story<RdsCompShoppingCartProductComponent> = (args: RdsCompShoppingCartProductComponent) => ({});

export const basic = Template.bind({});

basic.args = {
  itemList:[
    {
      id: 1,
      image: 'https://th.bing.com/th/id/OIP.3IsXMskZyheEWqtE3Dr7JwHaGe?pid=ImgDet&rs=1',
      prodname: 'Premium Quality Soft T-Shirt', 
      prdosubname: 'Gray - medium', 
      price: 12,
      quantity:[
        { value: 1, displayText: 'Qty 1' },
        { value: 2, displayText: 'Qty 2' },
        { value: 3, displayText: 'Qty 3' },
        { value: 4, displayText: 'Qty 4' },
        { value: 5, displayText: 'Qty 5' },
        { value:6, displayText: 'Qty 6' },
        { value: 7, displayText: 'Qty 7' },
        { value: 8, displayText: 'Qty 8' },
        { value: 9, displayText: 'Qty 9' },
        { value: 10, displayText: 'Qty 10' }
      ]

      ,
      highlights: {
        icon: 'check_mark',
        label: 'In Stock'
      },

    },
    {
      id: 2,
      image: 'https://th.bing.com/th/id/OIP.3IsXMskZyheEWqtE3Dr7JwHaGe?pid=ImgDet&rs=1',
      prodname: 'Premium Quality Soft T-Shirt',
      prdosubname: 'Black & White - Large',
      price: 33,
      quantity: [
        { value: 1, displayText: 'Qty 1' },
        { value: 2, displayText: 'Qty 2' },
        { value: 3, displayText: 'Qty 3' },
        { value: 4, displayText: 'Qty 4' },
        { value: 5, displayText: 'Qty 5' },
        { value: 6, displayText: 'Qty 6' },
        { value: 7, displayText: 'Qty 7' },
        { value: 8, displayText: 'Qty 8' },
        { value: 9, displayText: 'Qty 9' },
        { value: 10, displayText: 'Qty 10' }
      ],
      highlights: {
        icon: 'clock',
        label: 'Ships in 3-4 weeks'
      },

    }
    ,
    {
      id: 3,
      image: 'https://th.bing.com/th/id/OIP.3IsXMskZyheEWqtE3Dr7JwHaGe?pid=ImgDet&rs=1',
      prodname: 'Premium Quality Soft T-Shirt',
      prdosubname: 'White - Small',
      price: 9,
      quantity: [
        { value: 1, displayText: 'Qty 1' },
        { value: 2, displayText: 'Qty 2' },
        { value: 3, displayText: 'Qty 3' },
        { value: 4, displayText: 'Qty 4' },
        { value: 5, displayText: 'Qty 5' },
        { value: 6, displayText: 'Qty 6' },
        { value: 7, displayText: 'Qty 7' },
        { value: 8, displayText: 'Qty 8' },
        { value: 9, displayText: 'Qty 9' },
        { value: 10, displayText: 'Qty 10' }
      ],
      highlights: {
        icon: 'check_mark',
        label: 'In Stock'
      },

    }
  ]
}