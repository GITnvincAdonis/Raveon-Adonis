export default function OptimizedImage(props: { image: any }) {
  const { image } = props;
  return (
    <>
      <picture>
        <img
          loading="lazy"
          role="presentation"
          decoding="async"
          fetchPriority="high"
          src={image}
        />
      </picture>
    </>
  );
}
