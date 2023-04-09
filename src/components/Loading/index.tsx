const Loading = (): JSX.Element => {
  return (
    <div className="is-flex is-flex-direction-column is-is-justify-content-center">
      <img src="/loader.gif" />
      <span className="is-align-self-center is-size-4 mt-3">Loading...</span>
    </div>
  );
};

export default Loading;
