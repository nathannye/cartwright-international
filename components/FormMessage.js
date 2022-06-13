import { useRef } from "react";
import useIsomorphicLayoutEffect from "use-isomorphic-layout-effect";

const FormMessage = (message, status) => {
  const messageRef = useRef(null);

  useIsomorphicLayoutEffect(() => {
    setTimeout(() => {
      messageRef.current.classList.add("hide");
    }, 2600);
  }, [status]);

  return (
    <div ref={messageRef} className="statusMessage">
      <p>{message}</p>
    </div>
  );
};

export default FormMessage;
