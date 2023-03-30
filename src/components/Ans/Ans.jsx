import React from "react";

const Ans = () => {
  return (
    <div className="my-16 text-center border-2 border-red-700 p-4 bg-emerald-100">
        <h1 className="text-2xl font-extrabold my-4">Question & Answers section</h1>
      <div>
        <h1 className="font-bold text-xl">Props vs state?</h1>
        <p>
          <strong>Props:</strong>
          <li>Props are read-only components.</li>
          <li>Props are immutable.</li>
          <li>Props can not be modified.</li>
          <li>
            Props allow you to pass data from one component to other components
            as an argument.
          </li>
          <li>Props can be accessed by the child component.</li>
          <li>Props are used to communicate between components.</li>
          <strong>State:</strong>
          <li>
            The state is an updatable structure that is used to contain data or
            information about the component and can change over time.
          </li>
          <li>State changes can be asynchronous.</li>
          <li>State is mutable.</li>
          <li>State can be modified using this.setState</li>
          <li>State hlids information about the components.</li>
          <li>State cannot be accessed by child components.</li>
        </p>
      </div>
      <div className="my-4">
        <h1 className="font-bold text-xl">How does useState work?</h1>
        <p>
          <strong>useState :</strong> useState is React Hook that allows you to
          add state to a functional component. It returns an array with two
          values: the current state and a function to update it. The Hook takes
          an initial state value as an argument and returns an updated state
          value whenever the setter function is called.
        </p>
      </div>
      <div className="my-4">
        <h1 className="font-bold text-xl">
          What is the purpose of useEffect other than fetching data
        </h1>
        <p>
          <strong className="text-lg">useEffect :</strong> useEffect use cases other than fetching
          data are-
          <li>
            <strong>Running on state change:</strong> On validating input field.
            Validating an input while it's receiving characters is another great
            application for useEffect. Whilst the input is being stored in a
            state using useState, the validation takes place every time the
            input changes, giving immediate feedback to the user.
          </li>
          <li>
            <strong> Running on state change:</strong> In live filtering. We can
            use useEffect to filter an array "on the fly" by typing letters into
            an input element. To do so, we will need to use a state to save the
            input, and a filter implementation inside the useEffect that will be
            triggered when the input changes, thanks to useEffect dependencies.
          </li>
          <li>
            <strong>Running on state change:</strong> In triggering animation on
            new array value. We can use the useEffect hook to trigger an
            animation on a shopping cart as a side effect of adding a new
            product to it. In this case, we'll need a state to handle the cart
            items, and another state to handle the animation trigger.
          </li>
          <li>
            <strong>Running on props change:</strong> On updating paragraph list
            on fetched API data update. we want to trigger a state update due to
            an updated fetch() call. If we are sending the fetched data to a
            child component, and whenever that data is changed, the child
            component re-process it.
          </li>
        </p>
      </div>
      <div className="my-4">
        <h1 className="font-bold text-xl">How does React work?</h1>
        <p>
          <strong>React :</strong>React is a declarative, efficient, and
          flexible JavaScript library for building user interfaces. React is
          used to create modular user interfaces. React implements a virtual DOM
          that is basically a DOM tree representation in JavaScript. So when it
          needs to read or write to the DOM, it will use the virtual
          representation of it. Then the virtual DOM will try to find the most
          efficient way to update the browser's DOM. Unlike browser DOM
          elements, React elements are plain objects and are cheap to create.
          React DOM takes care of updating the DOM to match the React elements.
          The reason for this is that JavaScript is very fast and it's worth
          keeping a DOM tree in it to speed up its manipulation. Although React
          was conceived to be used in the browser, because of its design it can
          also be used in the server with Node.js.
        </p>
      </div>
    </div>
  );
};

export default Ans;
