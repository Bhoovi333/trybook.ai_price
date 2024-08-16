
import React from "react";
import Table from "./components/table";
import Aftertxt from "./components/after";
function App(){
return (
<>
<div className="section">
<h2>API Pricing</h2>
<p>Our API pricing is based on the model used and the number of tokens processed. Here's a breakdown of the costs:</p>
<Table />
<Aftertxt />
</div>
</>
) 
}
export default App;