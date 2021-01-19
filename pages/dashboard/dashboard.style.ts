export default function styles(): IStyleFunction {
  return (theme: any) => ({
    grow: {
      flexGrow: 1,
    },
    appBar: {
      background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
    },
    sectionDesktop: {
      display: "none",
      [theme.breakpoints.up("md")]: {
        display: "flex",
      },
    },
    card: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
    },
    grid: {
      padding: "24px",
      flexGrow: 1,
    },
    cardContent: {
      display: "flex",
      flexGrow: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    cardActions: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
  });
}
