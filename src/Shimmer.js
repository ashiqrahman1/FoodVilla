const Shimmer = () => {
  return (
    <>
      {Array(10)
        .fill("")
        .map((e) => (
          <div className="shimmer_ui">
            <div className="shimmer_head"></div>
            <div className="shimmer_text"></div>
            <div className="shimmer_small_text"></div>
          </div>
        ))}
    </>
  );
};

export default Shimmer;
