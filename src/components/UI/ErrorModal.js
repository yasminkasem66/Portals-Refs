import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import Button from './Button';
import classes from './ErrorModal.module.css';

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm} />
}
const ModalOverlay = (props) => {
  return <Card className={classes.modal}>
    <header className={classes.header}>
      <h2>{props.title}</h2>
    </header>
    <div className={classes.content}>
      <p>{props.message}</p>
    </div>
    <footer className={classes.actions}>
      <Button onClick={props.onConfirm}>Okay</Button>
    </footer>
  </Card>
}

const ErrorModal = (props) => {
  return (
    <>
    {/* 1-The first one is your React node that should be rendered. */}
    {/* 2- the second argument of createPortal is a pointer to that container in the real DOM where this elements should be rendered in. */}
    {/* And the idea really just is that the rendered HTML content is moved somewhere else. */}
    {ReactDOM.createPortal(<Backdrop onConfirm={props.onConfirm} />, document.getElementById('backdrop-root'))}
    {ReactDOM.createPortal(<ModalOverlay title={props.title}  message={props.message}  onConfirm={props.onConfirm}/>, document.getElementById('overlay-root'))}
    </>
  );
};

export default ErrorModal;

 //You can imagine React being the library that has all the React features, state management, onsen, baked-in. And React DOM uses React to bring that logic and these features into the web browser. So to make them compatible to working with the DOM, put in other words, the React library itself doesn't care whether you run it in an environment that has a DOM or if you would use it to build a native app. And for example, you can use React Native in conjunction with React, to build native mobile apps So React DOM is kind of the adapter for React to the browser and therefore since now we're going to portal something into a different place in the real DOM, we need to import from React DOM.

 
// we end up with semantically more correct HTML code with //  fragment & // portal