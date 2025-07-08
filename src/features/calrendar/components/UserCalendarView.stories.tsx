import type { Meta, StoryObj } from "@storybook/react";
import  UserCalendarView from "./UserCalendarView";
import { calendarEventsMock } from "../__mocks__/calendarEvents.mock";

const meta: Meta<typeof UserCalendarView> = {
  component: UserCalendarView,
  title: "features/UserCalendar",
};

export default meta;
type Story = StoryObj<typeof UserCalendarView>;

export const Default: Story = {
  args: {
    userEvent: calendarEventsMock,
    isMondayStart:false
  },
};