

type CustomImageProps = ImageProps & {
  className?: string;
  variant?: "rounded" | "circle" | "square";
  objectFit?: "cover" | "contain" | "fill";
};

export const Image = ({
  className = "",
  variant,
  objectFit = "cover",
  ...props
}: CustomImageProps) => {
  const variantClass =
    variant === "rounded"
      ? "rounded-lg"
      : variant === "circle"
        ? "rounded-full"
        : "";

  const fitClass =
    objectFit === "cover"
      ? "object-cover"
      : objectFit === "contain"
        ? "object-contain"
        : "object-fill";

  return (
    <img
      {...props}
      className={`${className} ${variantClass} ${fitClass}`}
    />
  );
};