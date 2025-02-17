import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsBadgeModule, RdsButtonModule, RdsCardModule, RdsIconModule, RdsLabelModule } from '@libs/rds-elements';
import { NgxTranslateModule } from '@libs/shared';
import { RdsCompOrderSummaryComponent } from './rds-comp-order-summary.component';

export default {
  title: 'Components/Order Summary',
  component: RdsCompOrderSummaryComponent,
  decorators: [
    moduleMetadata({
      imports: [
        FormsModule, ReactiveFormsModule, RdsButtonModule, RdsCardModule, RdsBadgeModule, NgxTranslateModule, RdsLabelModule , RdsIconModule
      ],
      providers: [
        FormBuilder
      ],
    })
  ]
} as Meta;

const Template: Story<RdsCompOrderSummaryComponent> = (args: RdsCompOrderSummaryComponent) => ({});

export const basic = Template.bind({});

basic.args = {
}