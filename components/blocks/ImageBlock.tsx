export default function ImageBlock({
  src,
  alt,
  caption,
}: {
  src: string
  alt: string
  caption?: string
}) {
  return (
    <figure className="my-6">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full rounded-xl border border-border bg-surface"
      />
      {caption && (
        <figcaption className="mt-2 text-center text-xs text-muted">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
