import React from "react";
import FunctionalComponent from "./FunctionalComponent";
import ClassComponent from "./ClassComponent";
/**
 * The Main App Component
 * @returns {JSX.Element} The React JSX Element
 */
function App() {
    return (
        <>
            <FunctionalComponent />
            <br />
            <ClassComponent />
        </>
    )
}

export default App;