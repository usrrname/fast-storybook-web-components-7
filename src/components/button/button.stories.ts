import { ViewTemplate, html } from '@microsoft/fast-element';
import type { Button } from "./button.js";
import { ButtonType } from "@microsoft/fast-foundation";
import { StoryObj, StoryArgs, createStory } from "../../__test__/helpers.js";
import './define.js';
import { Meta } from "@storybook/web-components";

interface ButtonArgs extends Button {
  storyContent: ViewTemplate<Button> | string | HTMLTemplateElement | HTMLSlotElement;
}

const storyTemplate = html<StoryArgs<ButtonArgs>>`
    <fast-button id="${x => x.id}" autofocus="${x => x.autofocus}" ?disabled="${x => x.disabled}"
      ?formnovalidate="${x => x.formnovalidate}" form="${x => x.formId}" formaction="${x => x.formaction}"
      formenctype="${x => x.formenctype}" formmethod="${x => x.formmethod}" formtarget="${x => x.formtarget}"
      name="${x => x.name}" type="${x => x.type}" value="${x => x.value}" :ariaAtomic="${x => x.ariaAtomic}"
      :ariaBusy="${x => x.ariaBusy}" :ariaControls="${x => x.ariaControls}" :ariaCurrent="${x => x.ariaCurrent}"
      :ariaDescribedby="${x => x.ariaDescribedby}" :ariaDetails="${x => x.ariaDetails}"
      :ariaDisabled="${x => x.ariaDisabled}" :ariaErrormessage="${x => x.ariaErrormessage}"
      :ariaExpanded="${x => x.ariaExpanded}" :ariaFlowto="${x => x.ariaFlowto}" :ariaHaspopup="${x => x.ariaHaspopup}"
      :ariaHidden="${x => x.ariaHidden}" :ariaInvalid="${x => x.ariaInvalid}" :ariaKeyshortcuts="${x => x.ariaKeyshortcuts}"
      :ariaLabel="${x => x.ariaLabel}" :ariaLabelledby="${x => x.ariaLabelledby}" :ariaLive="${x => x.ariaLive}"
      :ariaOwns="${x => x.ariaOwns}" :ariaPressed="${x => x.ariaPressed}" :ariaRelevant="${x => x.ariaRelevant}"
      :ariaRoledescription="${x => x.ariaRoledescription}">
      ${x => x.storyContent}
    </fast-button>
`;

const metadata = {
  title: "Components/Button",
  args: {
    autofocus: false,
    disabled: false,
    storyContent: "Button"
  },
  argTypes: {
    autofocus: { control: "boolean" },
    disabled: { control: "boolean" },
    formaction: { control: "text" },
    formenctype: { control: "text" },
    formId: { control: "text" },
    formmethod: { control: "text" },
    formnovalidate: { control: "boolean" },
    formtarget: { control: "text" },
    inputValue: { table: { disable: true } },
    name: { control: "text" },
    type: { control: "select", options: Object.values(ButtonType) },
    value: { control: "text" },
    ariaAtomic: { control: "text" },
    ariaBusy: { control: "text" },
    ariaControls: { control: "text" },
    ariaCurrent: { control: "text" },
    ariaDescribedby: { control: "text" },
    ariaDetails: { control: "text" },
    ariaDisabled: { control: "text" },
    ariaErrormessage: { control: "text" },
    ariaExpanded: { control: "text" },
    ariaFlowto: { control: "text" },
    ariaHaspopup: { control: "text" },
    ariaHidden: { control: "text" },
    ariaInvalid: { control: "text" },
    ariaKeyshortcuts: { control: "text" },
    ariaLabel: { control: "text" },
    ariaLabelledby: { control: "text" },
    ariaLive: { control: "text" },
    ariaOwns: { control: "text" },
    ariaPressed: { control: "text" },
    ariaRelevant: { control: "text" },
    ariaRoledescription: { control: "text" },
    storyContent: { table: { disable: true } },
  },
  excludeStories: ['storyTemplate']
} as Meta<ButtonArgs>;

export default metadata;

type Story = StoryObj<ButtonArgs>

export const First: Story = { // should be typed Story but render func not compatible currently
  name: "Button",
  render: createStory(storyTemplate)
}

export const Second: Story = { // should be typed Story but render func not compatible currently
  name: "Disabled",
  args: {
    disabled: true
  },
  render: createStory(storyTemplate)
}

export const Third: Story = {
  name: 'With Start Slot and End Slot',
  args: {
    storyContent: html`<svg slot="start" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M10.35 3.15c.2.2.2.5 0 .7L6.21 8l4.14 4.15a.5.5 0 0 1-.7.7l-4.5-4.5a.5.5 0 0 1 0-.7l4.5-4.5c.2-.2.5-.2.7 0Z" />
  </svg>
  Button
<svg slot="end" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M5.65 3.15a.5.5 0 0 0 0 .7L9.79 8l-4.14 4.15a.5.5 0 0 0 .7.7l4.5-4.5a.5.5 0 0 0 0-.7l-4.5-4.5a.5.5 0 0 0-.7 0Z" />
  </svg>`,
  },
  render: createStory(storyTemplate),
};
