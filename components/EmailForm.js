import gsap from "gsap";
import { useRef } from "react";
import useIsomorphicLayoutEffect from "use-isomorphic-layout-effect";

export const EmailForm = (props) => {
  const formRef = useRef(null);
  const q = gsap.utils.selector(formRef.current);
  const tl = useRef(null);

  useIsomorphicLayoutEffect(() => {});

  const submitComplete = () => {};

  const onFocus = (e) => {};

  return (
    <div id="emailFormContainer">
      {/* <h2>get the latest tips and training</h2> */}
      <form onSubmit={submitComplete} ref={formRef}>
        <label htmlFor="email">
          Get the latest tips and training
          <input
            type="email"
            name="email"
            pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}"
            id="emailField"
            placeholder="What's a good email for you?"
            // onFocus={onFocus}
            // onBlur={onFocus}
          />
        </label>
        <input type="submit" value="&nbsp;" />
        <span className="lineBottom"></span>
      </form>
    </div>
  );
};
