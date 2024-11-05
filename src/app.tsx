import { Grid } from "./components/grid-system";

const App = () => {
  return (
    <main className="bg-black text-white h-svh w-full flex items-center justify-center">
      <Grid.System className="w-[500px] h-[500px]">
        <Grid rows={4} columns={4}>
          <Grid.Cross column={1} row={1} />
          <Grid.Cross column={5} row={5} />
          <Grid.Cell column={1} row={1}>
            <div className="w-full h-full p-4">Let's</div>
          </Grid.Cell>
          <Grid.Cell column={2} row={3}>
            <div className="w-full h-full p-4">Code</div>
          </Grid.Cell>
          <Grid.Cell column={1} row={4}>
            <div className="w-full h-full p-4">Cool Stuff</div>
          </Grid.Cell>
          <Grid.Cell column={2} row={4}>
            <div className="w-full h-full p-4">Together</div>
          </Grid.Cell>
          <Grid.Cell column={4} row={4}>
            <div className="flex items-center justify-center w-full h-full p-4">
              !
            </div>
          </Grid.Cell>
        </Grid>
      </Grid.System>
    </main>
  );
};

export default App;
