import './ScrollStack.css';

export const ScrollStackItem = ({ children, index }) => {
  return (
    <div
      className="ssx-scroll-stack__card"
      style={{ top: `${120 + index * 40}px` }}
    >
      {children}
    </div>
  );
};

const ScrollStack = ({ children }) => {
  return (
    <section className="ssx-scroll-stack">
      {children.map((child, i) =>
        child
          ? { ...child, props: { ...child.props, index: i } }
          : child
      )}
      <div className="ssx-scroll-stack__end" />
    </section>
  );
};

export default ScrollStack;
