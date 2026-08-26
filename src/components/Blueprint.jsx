export default function Blueprint({ as: Tag = "div", className = "", duotone = false, children, ...rest }) {
  const classes = ["blueprint", duotone && "duotone", className].filter(Boolean).join(" ");
  return (
    <Tag className={classes} {...rest}>
      <i className="corner tl" />
      <i className="corner tr" />
      <i className="corner bl" />
      <i className="corner br" />
      {children}
    </Tag>
  );
}
