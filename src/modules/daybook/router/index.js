export default {
  name: "daybook",
  component: () =>
    import(
      /* webpackChunkName: "Daybook Layout" */ "@/modules/daybook/layouts/DayBookLayout"
    ),
  children: [
    {
      path: "",
      name: "no-entry",
      component: () =>
        import(
          /* webpackChunkName: "NoEntry" */ "@/modules/daybook/views/EmptyStateEntry"
        ),
    },
    {
      path: ":id",
      name: "entry",
      component: () =>
        import(
          /* webpackChunkName: "EntryView" */ "@/modules/daybook/views/EntryView"
        ),
    },
  ],
};
