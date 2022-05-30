export const EmailForm = () => {
  return (
    <div id="emailFormContainer">
      {/* <h2>get the latest tips and training</h2> */}
      <form>
        <label htmlFor="email">
          Get the latest tips and training
          <input
            type="email"
            name="email"
            id="emailField"
            placeholder="What's a good email for you?"
          />
        </label>
        <input type="submit" value="&nbsp;" />
        <span className="lineBottom"></span>
      </form>
    </div>
  );
};
