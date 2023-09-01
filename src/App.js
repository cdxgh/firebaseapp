import "./styles.css";
import {getDatabase, ref, set} from 'firebase/database';
import { app } from "./firebase";
const db = getDatabase(app);
function App() {
  const putData = () =>
{
  set(ref(db,'user/Abdul'),{
    id:1,
    name:"Abdul Quadir",
    age:21,
  });
};
  return (
    <div className="App">
      <h1>Fire Base App</h1>
      <button onClick={putData}>Put Data</button>
    </div>
  );
}
export default App;


